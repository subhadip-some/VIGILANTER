import feedparser
import json
import os
import webbrowser
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

rss_feeds = {
    'The_Hindu': 'https://www.thehindu.com/news/national/feeder/default.rss',
    'NDTV': 'https://feeds.feedburner.com/ndtvnews-top-stories',
    'LiveMint': 'https://www.livemint.com/rss/news',
    'Indian_Express:':'https://indianexpress.com/feed/atom/'
}

# JSON file path (in the same directory as app.py)
JSON_FILE = os.path.join(os.path.dirname(__file__), 'news.json')


def parse_feed(url, source_name):
    print(f"-- Fetching URL of {source_name}")

    try:
        d = feedparser.parse(url)

        raw_entries = []

        for entry in d.entries:
            raw_entries.append({
                'source': source_name,
                'title': entry.get('title', 'no_title'),
                'description': entry.get('description', 'noDescription'),
                'link': entry.get('link','NA'),
                'city':entry.get('category','NA'),
                'pubDate': entry.get('published', entry.get('pubDate', None))
            })

        print(f"Fetched {len(raw_entries)} articles.")
        return raw_entries

    except Exception as e:
        print("An error occurred while fetching the feed.")
        print(e)
        return []



if __name__ == "__main__":
    all_articles = []

    for source_name, url in rss_feeds.items():
        articles = parse_feed(url, source_name)
        all_articles.extend(articles)

    # Save the combined articles only once
    with open(JSON_FILE, "w", encoding="utf-8") as file:
        json.dump(all_articles, file, indent=4, ensure_ascii=False)

    print(f"\nTotal articles saved: {len(all_articles)}")
    print(f"JSON file updated: {JSON_FILE}")

    url = "http://localhost:8000"
    handler = partial(
        SimpleHTTPRequestHandler,
        directory=os.path.dirname(os.path.abspath(__file__)),
    )

    with ThreadingHTTPServer(("127.0.0.1", 8000), handler) as server:
        print(f"Opening dashboard at {url}")
        if not webbrowser.open(url):
            print(f"Open this URL in your browser: {url}")
        try:
            server.serve_forever()
        except KeyboardInterrupt:
            print("\nServer stopped.")
