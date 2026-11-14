# Vigilanter

Vigilanter is a lightweight news intelligence dashboard that monitors Indian news RSS feeds, aggregates the latest stories into a JSON dataset, and renders them in a minimalist, map-based interface.

## Overview

- Fetches headlines from multiple RSS feeds using Python
- Stores normalized article metadata in `news.json`
- Displays stories in a polished dashboard built with HTML, CSS, and JavaScript
- Includes a live-style map panel and search/filter controls for story exploration

## Project Structure

- `app.py` — RSS fetcher that pulls articles from configured feeds and writes them to `news.json`
- `index.html` — dashboard layout and app shell
- `script.js` — feed rendering, filtering, sorting, and map logic
- `styles.css` — visual design and responsive layout
- `news.json` — generated article data
- `feed_url.txt` — list of source RSS URLs

## Requirements

- Python 3.9+
- `feedparser`

## Setup

1. Clone or open the project folder.
2. Create a virtual environment (optional but recommended):
   ```bash
   python -m venv .venv
   .venv\Scripts\activate
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

## Run the app

Run the app from the project folder:
   ```bash
   python app.py
   ```
   This updates `news.json`, starts the local web server, and opens the dashboard at `http://localhost:8000`. Press `Ctrl+C` in the terminal to stop the server.

## Notes

- The dashboard depends on remote CDN assets for fonts and the Leaflet map library.
- Feed sources are configured in `app.py` and can be adjusted as needed.
- The README and requirements files were added to support local setup and dependency management.
