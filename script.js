
/* =========================================
   NEWS CONFIGURATION
========================================= */

const NEWS_URL = "./news.json";



const cityCoordinates = {
    "India": { lat: 22.8, lng: 80.5 },
    // Andhra Pradesh
    "Andhra Pradesh": { lat: 16.5062, lng: 80.6480 },
    "Amaravati": { lat: 16.5062, lng: 80.6480 },
    "Visakhapatnam": { lat: 17.6868, lng: 83.2185 },
    "Vijayawada": { lat: 16.5062, lng: 80.6480 },
    "Tirupati": { lat: 13.6288, lng: 79.4192 },

    // Arunachal Pradesh
    "Arunachal Pradesh": { lat: 27.0844, lng: 93.6053 },
    "Itanagar": { lat: 27.0844, lng: 93.6053 },
    "Tawang": { lat: 27.5860, lng: 91.8594 },

    // Assam
    "Assam": { lat: 26.1445, lng: 91.7362 },
    "Guwahati": { lat: 26.1445, lng: 91.7362 },
    "Dibrugarh": { lat: 27.4728, lng: 94.9120 },
    "Silchar": { lat: 24.8333, lng: 92.7789 },

    // Bihar
    "Bihar": { lat: 25.5941, lng: 85.1376 },
    "Patna": { lat: 25.5941, lng: 85.1376 },
    "Gaya": { lat: 24.7914, lng: 85.0002 },
    "Bhagalpur": { lat: 25.2425, lng: 86.9842 },

    // Chhattisgarh
    "Chhattisgarh": { lat: 21.2514, lng: 81.6296 },
    "Raipur": { lat: 21.2514, lng: 81.6296 },
    "Bhilai": { lat: 21.2094, lng: 81.3784 },
    "Bilaspur": { lat: 22.0797, lng: 82.1409 },

    // Goa
    "Goa": { lat: 15.4909, lng: 73.8278 },
    "Panaji": { lat: 15.4909, lng: 73.8278 },
    "Margao": { lat: 15.2832, lng: 73.9862 },
    "Vasco da Gama": { lat: 15.3860, lng: 73.8440 },

    // Gujarat
    "Gujarat": { lat: 23.2156, lng: 72.6369 },
    "Gandhinagar": { lat: 23.2156, lng: 72.6369 },
    "Ahmedabad": { lat: 23.0225, lng: 72.5714 },
    "Surat": { lat: 21.1702, lng: 72.8311 },
    "Vadodara": { lat: 22.3072, lng: 73.1812 },
    "Rajkot": { lat: 22.3039, lng: 70.8022 },

    // Haryana
    "Haryana": { lat: 30.7333, lng: 76.7794 },
    "Chandigarh": { lat: 30.7333, lng: 76.7794 },
    "Gurugram": { lat: 28.4595, lng: 77.0266 },
    "Faridabad": { lat: 28.4089, lng: 77.3178 },
    "Panipat": { lat: 29.3909, lng: 76.9635 },

    // Himachal Pradesh
    "Himachal Pradesh": { lat: 31.1048, lng: 77.1734 },
    "Shimla": { lat: 31.1048, lng: 77.1734 },
    "Manali": { lat: 32.2396, lng: 77.1887 },
    "Dharamshala": { lat: 32.2190, lng: 76.3234 },

    // Jharkhand
    "Jharkhand": { lat: 23.3441, lng: 85.3096 },
    "Ranchi": { lat: 23.3441, lng: 85.3096 },
    "Jamshedpur": { lat: 22.8046, lng: 86.2029 },
    "Dhanbad": { lat: 23.7957, lng: 86.4304 },

    // Karnataka
    "Karnataka": { lat: 12.9716, lng: 77.5946 },
    "Bengaluru": { lat: 12.9716, lng: 77.5946 },
    "Mysuru": { lat: 12.2958, lng: 76.6394 },
    "Mangaluru": { lat: 12.9141, lng: 74.8560 },
    "Hubballi": { lat: 15.3647, lng: 75.1240 },

    // Kerala
    "Kerala": { lat: 8.5241, lng: 76.9366 },
    "Keralam": { lat: 8.5241, lng: 76.9366 },
    "Thiruvananthapuram": { lat: 8.5241, lng: 76.9366 },
    "Kochi": { lat: 9.9312, lng: 76.2673 },
    "Kozhikode": { lat: 11.2588, lng: 75.7804 },
    "Thrissur": { lat: 10.5276, lng: 76.2144 },

    // Madhya Pradesh
    "Madhya Pradesh": { lat: 23.2599, lng: 77.4126 },
    "Bhopal": { lat: 23.2599, lng: 77.4126 },
    "Indore": { lat: 22.7196, lng: 75.8577 },
    "Gwalior": { lat: 26.2183, lng: 78.1828 },
    "Jabalpur": { lat: 23.1815, lng: 79.9864 },
    "Ujjain": { lat: 23.1765, lng: 75.7885 },

    // Maharashtra
    "Maharashtra": { lat: 19.0760, lng: 72.8777 },
    "Mumbai": { lat: 19.0760, lng: 72.8777 },
    "Pune": { lat: 18.5204, lng: 73.8567 },
    "Nagpur": { lat: 21.1458, lng: 79.0882 },
    "Nashik": { lat: 19.9975, lng: 73.7898 },
    "Thane": { lat: 19.2183, lng: 72.9781 },
    "Kolhapur": { lat: 16.7050, lng: 74.2433 },

    // Manipur
    "Manipur": { lat: 24.8170, lng: 93.9368 },
    "Imphal": { lat: 24.8170, lng: 93.9368 },

    // Meghalaya
    "Meghalaya": { lat: 25.5788, lng: 91.8933 },
    "Shillong": { lat: 25.5788, lng: 91.8933 },
    "Cherrapunji": { lat: 25.2702, lng: 91.7323 },

    // Mizoram
    "Mizoram": { lat: 23.7271, lng: 92.7176 },
    "Aizawl": { lat: 23.7271, lng: 92.7176 },

    // Nagaland
    "Nagaland": { lat: 25.6751, lng: 94.1086 },
    "Kohima": { lat: 25.6751, lng: 94.1086 },
    "Dimapur": { lat: 25.9063, lng: 93.7278 },

    // Odisha
    "Odisha": { lat: 20.2961, lng: 85.8245 },
    "Bhubaneswar": { lat: 20.2961, lng: 85.8245 },
    "Cuttack": { lat: 20.4625, lng: 85.8830 },
    "Puri": { lat: 19.8135, lng: 85.8312 },
    "Rourkela": { lat: 22.2604, lng: 84.8536 },

    // Punjab
    "Punjab": { lat: 30.7333, lng: 76.7794 },
    "Amritsar": { lat: 31.6340, lng: 74.8723 },
    "Ludhiana": { lat: 30.9010, lng: 75.8573 },
    "Jalandhar": { lat: 31.3260, lng: 75.5762 },
    "Patiala": { lat: 30.3398, lng: 76.3869 },

    // Rajasthan
    "Rajasthan": { lat: 26.9124, lng: 75.7873 },
    "Jaipur": { lat: 26.9124, lng: 75.7873 },
    "Jodhpur": { lat: 26.2389, lng: 73.0243 },
    "Udaipur": { lat: 24.5854, lng: 73.7125 },
    "Kota": { lat: 25.2138, lng: 75.8648 },
    "Ajmer": { lat: 26.4499, lng: 74.6399 },
    "Jaisalmer": { lat: 26.9157, lng: 70.9083 },

    // Sikkim
    "Sikkim": { lat: 27.3389, lng: 88.6065 },
    "Gangtok": { lat: 27.3389, lng: 88.6065 },

    // Tamil Nadu
    "Tamil Nadu": { lat: 13.0827, lng: 80.2707 },
    "Chennai": { lat: 13.0827, lng: 80.2707 },
    "Coimbatore": { lat: 11.0168, lng: 76.9558 },
    "Madurai": { lat: 9.9252, lng: 78.1198 },
    "Tiruchirappalli": { lat: 10.7905, lng: 78.7047 },
    "Salem": { lat: 11.6643, lng: 78.1460 },
    "Vellore": { lat: 12.9165, lng: 79.1325 },

    // Telangana
    "Telangana": { lat: 17.3850, lng: 78.4867 },
    "Hyderabad": { lat: 17.3850, lng: 78.4867 },
    "Warangal": { lat: 17.9689, lng: 79.5941 },
    "Nizamabad": { lat: 18.6725, lng: 78.0941 },

    // Tripura
    "Tripura": { lat: 23.8315, lng: 91.2868 },
    "Agartala": { lat: 23.8315, lng: 91.2868 },

    // Uttar Pradesh
    "Uttar Pradesh": { lat: 26.8467, lng: 80.9462 },
    "Lucknow": { lat: 26.8467, lng: 80.9462 },
    "Kanpur": { lat: 26.4499, lng: 80.3319 },
    "Varanasi": { lat: 25.3176, lng: 82.9739 },
    "Agra": { lat: 27.1767, lng: 78.0081 },
    "Prayagraj": { lat: 25.4358, lng: 81.8463 },
    "Noida": { lat: 28.5355, lng: 77.3910 },
    "Mathura": { lat: 27.4924, lng: 77.6737 },
    "Ayodhya": { lat: 26.7922, lng: 82.1998 },

    // Uttarakhand
    "Uttarakhand": { lat: 30.3165, lng: 78.0322 },
    "Dehradun": { lat: 30.3165, lng: 78.0322 },
    "Haridwar": { lat: 29.9457, lng: 78.1642 },
    "Rishikesh": { lat: 30.0869, lng: 78.2676 },
    "Nainital": { lat: 29.3803, lng: 79.4636 },

    // West Bengal
    "West Bengal": { lat: 22.5726, lng: 88.3639 },
    "Kolkata": { lat: 22.5726, lng: 88.3639 },
    "Howrah": { lat: 22.5958, lng: 88.2636 },
    "Siliguri": { lat: 26.7271, lng: 88.3953 },
    "Durgapur": { lat: 23.5204, lng: 87.3119 },
    "Asansol": { lat: 23.6739, lng: 86.9524 },
    "Darjeeling": { lat: 27.0360, lng: 88.2627 },

    // Union Territories
    "Andaman and Nicobar Islands": { lat: 11.6234, lng: 92.7265 },
    "Sri Vijaya Puram": { lat: 11.6234, lng: 92.7265 },
    "Chandigarh": { lat: 30.7333, lng: 76.7794 },
    "Dadra and Nagar Haveli and Daman and Diu": { lat: 20.3974, lng: 72.8328 },
    "Daman": { lat: 20.3974, lng: 72.8328 },
    "Delhi": { lat: 28.6139, lng: 77.2090 },
    "New Delhi": { lat: 28.6139, lng: 77.2090 },
    "Jammu and Kashmir": { lat: 34.0837, lng: 74.7973 },
    "Srinagar": { lat: 34.0837, lng: 74.7973 },
    "Jammu": { lat: 32.7266, lng: 74.8570 },
    "Ladakh": { lat: 34.1526, lng: 77.5771 },
    "Leh": { lat: 34.1526, lng: 77.5771 },
    "Lakshadweep": { lat: 10.5669, lng: 72.6420 },
    "Kavaratti": { lat: 10.5669, lng: 72.6420 },
    "Puducherry": { lat: 11.9416, lng: 79.8083 },
    "Karaikal": { lat: 10.9254, lng: 79.8380 }
};




/* =========================================
   STATE
========================================= */

let stories = [];
let selectedId = null;
let oldestFirst = false;
let isLoading = false;
let toastTimer = null;
let map = null;
let markerLayer = null;

const storyMarkers = new Map();

const mapCenter = [22.8, 80.5];
const mapZoom = 4.5;


/* =========================================
   DOM ELEMENTS
========================================= */

const feed = document.querySelector("#feed-list");
const emptyState = document.querySelector("#feed-empty");
const searchInput = document.querySelector("#search-input");
const toast = document.querySelector("#toast");

const refreshButton = document.querySelector("#refresh-button");
const sortButton = document.querySelector("#sort-button");
const loadMoreButton = document.querySelector("#load-more");
const resetMapButton = document.querySelector("#reset-map");
const syncTime = document.querySelector("#sync-time");


/* =========================================
   HELPERS
========================================= */

function getCoordinates(city) {
    if (!city || typeof city !== "string") {
        return null;
    }

    const normalizedCity = city.trim().toLowerCase();

    const matchedCity = Object.keys(cityCoordinates).find(
        name => name.toLowerCase() === normalizedCity
    );

    return matchedCity ? cityCoordinates[matchedCity] : null;
}


function escapeHTML(value = "") {
    return String(value).replace(/[&<>"']/g, char => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[char]);
}


function formatDate(dateString) {
    if (!dateString) return "Date unavailable";

    const date = new Date(dateString);

    if (Number.isNaN(date.getTime())) {
        return String(dateString);
    }

    return new Intl.DateTimeFormat("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    }).format(date);
}


function showToast(message) {
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add("visible");

    window.clearTimeout(toastTimer);

    toastTimer = window.setTimeout(() => {
        toast.classList.remove("visible");
    }, 2500);
}


/* =========================================
   INITIALIZE MAP
========================================= */

function initializeMap() {
    const mapElement = document.querySelector("#map-canvas");

    if (!mapElement) {
        console.warn("Map container #map-canvas was not found.");
        return;
    }

    if (!window.L) {
        mapElement.textContent =
            "Map could not load. Check your internet connection.";
        return;
    }

    map = L.map(mapElement, {
        zoomControl: true,
        scrollWheelZoom: true
    }).setView(mapCenter, mapZoom);

    markerLayer = L.layerGroup().addTo(map);

    L.tileLayer(
        "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}",
        {
            attribution:
                "Tiles &copy; Esri, HERE, Garmin, OpenStreetMap contributors",
            maxZoom: 18,
            maxNativeZoom: 16
        }
    ).addTo(map);

    L.tileLayer(
        "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Reference/MapServer/tile/{z}/{y}/{x}",
        {
            attribution: "Labels &copy; Esri",
            maxZoom: 18,
            maxNativeZoom: 16
        }
    ).addTo(map);

    L.control.scale({ imperial: false }).addTo(map);

    if ("ResizeObserver" in window) {
        new ResizeObserver(() => {
            map.invalidateSize({ pan: false });
        }).observe(mapElement);
    }
}


/* =========================================
   FETCH NEWS.JSON
========================================= */

async function fetchNews() {
    if (isLoading) return;

    isLoading = true;

    if (refreshButton) {
        refreshButton.disabled = true;
        refreshButton.setAttribute("aria-busy", "true");
    }

    try {
        const response = await fetch(
            `${NEWS_URL}?_=${Date.now()}`,
            { cache: "no-store" }
        );

        if (!response.ok) {
            throw new Error(
                `Could not load news.json: HTTP ${response.status}`
            );
        }

        const articles = await response.json();

        if (!Array.isArray(articles)) {
            throw new Error("news.json must contain a JSON array.");
        }

        const previousSelectedId = selectedId;

        stories = articles.map((article, index) => {
            const city = article.city || "";
            const coordinates = getCoordinates(city);

            return {
                ...article,
                id: String(index + 1),
                source: article.source || "Unknown source",
                title: article.title || "Untitled article",
                link: article.link || "",
                description: article.description || "",
                city: city,
                location: city || "Location unavailable",
                lat: coordinates?.lat ?? null,
                lng: coordinates?.lng ?? null,
                mapLabel: city || "Unknown location"
            };
        });

        // Preserve the selected article where possible.
        selectedId = stories.some(
            story => story.id === previousSelectedId
        )
            ? previousSelectedId
            : stories[0]?.id ?? null;

        renderStories();

        if (syncTime) {
            syncTime.textContent = new Date().toLocaleTimeString(
                "en-GB",
                { hour12: false }
            );
        }

        const mappedCount = stories.filter(
            story => story.lat != null && story.lng != null
        ).length;

        console.log(
            `Loaded ${stories.length} articles; ${mappedCount} have mapped locations.`
        );

        showToast(`Loaded ${stories.length} news articles`);
    } catch (error) {
        console.error("News loading failed:", error);

        // Keep previously loaded stories if a refresh fails.
        if (stories.length === 0) {
            renderStories();
        }

        showToast("Unable to load news. Check news.json and the server.");
    } finally {
        isLoading = false;

        if (refreshButton) {
            refreshButton.disabled = false;
            refreshButton.removeAttribute("aria-busy");
        }
    }
}


/* =========================================
   RENDER NEWS CARDS
========================================= */

function renderStories() {
    if (!feed) return;

    const query = searchInput
        ? searchInput.value.trim().toLowerCase()
        : "";

    let visibleStories = stories.filter(story => {
        const searchableText = [
            story.source,
            story.title,
            story.description,
            story.city,
            story.pubDate
        ].join(" ").toLowerCase();

        return searchableText.includes(query);
    });

    // Sort by actual publication date.
    visibleStories.sort((a, b) => {
        const dateA = new Date(a.pubDate || 0).getTime() || 0;
        const dateB = new Date(b.pubDate || 0).getTime() || 0;

        return oldestFirst ? dateA - dateB : dateB - dateA;
    });

    feed.innerHTML = visibleStories.map(story => `
        <article
            class="story-card${story.id === selectedId ? " selected" : ""}"
            data-story-id="${escapeHTML(story.id)}"
            tabindex="0"
            role="button"
            aria-label="${escapeHTML(story.title)}"
            aria-pressed="${story.id === selectedId}"
        >
            <div class="story-source-row">
                <span class="source-name">
                    ${escapeHTML(story.source)}
                </span>

                <span class="source-divider"></span>

                <span class="story-category">
                    ${escapeHTML(story.location)}
                </span>
            </div>

            <h3 class="story-title">
                ${escapeHTML(story.title)}
            </h3>

            <p class="story-description">
                ${escapeHTML(story.description)}
            </p>

            ${story.link
            ? `<a
                  href="${escapeHTML(story.link)}"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="read-article-link"
              >
                  Read full article ↗
              </a>`
            : ""
        }

            <div class="story-meta">
                <span class="story-location">
                    📍 ${escapeHTML(story.location)}
                </span>

                <span class="story-time">
                    ${escapeHTML(formatDate(story.pubDate))}
                </span>
            </div>
        </article>
    `).join("");

    if (emptyState) {
        emptyState.hidden = visibleStories.length > 0;

        if (visibleStories.length === 0) {
            emptyState.textContent = query
                ? "No articles match your search."
                : "No news articles available.";
        }
    }

    feed.hidden = visibleStories.length === 0;

    // The app currently displays all fetched articles.
    if (loadMoreButton) {
        loadMoreButton.hidden = true;
    }

    updateMarkers(visibleStories);
}


/* =========================================
   UPDATE MAP MARKERS
========================================= */

function updateMarkers(visibleStories = stories) {
    if (!markerLayer) return;

    markerLayer.clearLayers();
    storyMarkers.clear();

    visibleStories.forEach(story => {
        // Skip cities without a known coordinate.
        if (story.lat == null || story.lng == null) return;

        const isSelected = story.id === selectedId;

        const marker = L.circleMarker(
            [story.lat, story.lng],
            {
                radius: isSelected ? 8 : 6,
                color: isSelected ? "#ffffff" : "#c6f78c",
                weight: isSelected ? 2 : 1.5,
                fillColor: "#a7e46f",
                fillOpacity: isSelected ? 0.95 : 0.75
            }
        ).addTo(markerLayer);

        // Use DOM text rather than injecting RSS content as HTML.
        const popup = document.createElement("div");
        popup.className = "story-map-popup";

        const title = document.createElement("strong");
        title.textContent = story.title;

        const details = document.createElement("span");
        details.textContent =
            `${story.location} · ${story.source}`;

        const description = document.createElement("p");
        description.textContent = story.description || "No summary available.";

        const date = document.createElement("span");
        date.textContent = formatDate(story.pubDate);

        popup.append(title, details, description, date);

        marker.bindPopup(popup, {
            closeButton: false,
            className: "vigilanter-popup",
            maxWidth: 300,
            maxHeight: 220
        });

        marker.on("mouseover", () => marker.openPopup());
        marker.on("mouseout", () => marker.closePopup());

        storyMarkers.set(story.id, marker);
    });
}


/* =========================================
   SELECT AN ARTICLE
========================================= */

function selectStory(id, focusMap = true) {
    const story = stories.find(item => item.id === String(id));

    if (!story) return;

    selectedId = story.id;

    renderStories();

    const card = feed?.querySelector(
        `[data-story-id="${CSS.escape(story.id)}"]`
    );

    if (card) {
        card.scrollIntoView({
            block: "nearest",
            behavior: "smooth"
        });
    }

    const marker = storyMarkers.get(story.id);

    if (!focusMap) {
        marker?.openPopup();
    }

    if (
        focusMap &&
        map &&
        marker &&
        story.lat != null &&
        story.lng != null
    ) {
        map.flyTo(
            [story.lat, story.lng],
            Math.max(map.getZoom(), 6),
            { duration: 0.45 }
        );

        marker.openPopup();
    }
}


/* =========================================
   FEED INTERACTIONS
========================================= */

if (feed) {
    feed.addEventListener("click", event => {
        if (event.target.closest(".read-article-link")) return;

        const card = event.target.closest(".story-card");

        if (card) {
            selectStory(card.dataset.storyId);
        }
    });

    feed.addEventListener("keydown", event => {
        if (event.target.closest(".read-article-link")) return;

        const card = event.target.closest(".story-card");

        if (
            card &&
            (event.key === "Enter" || event.key === " ")
        ) {
            event.preventDefault();
            selectStory(card.dataset.storyId);
        }
    });
}


/* =========================================
   SEARCH
========================================= */

if (searchInput) {
    searchInput.addEventListener("input", renderStories);
}

document.addEventListener("keydown", event => {
    if (
        event.key === "/" &&
        document.activeElement !== searchInput &&
        searchInput
    ) {
        event.preventDefault();
        searchInput.focus();
    }

    if (event.key === "Escape" && searchInput) {
        searchInput.value = "";
        searchInput.blur();
        renderStories();
    }
});


/* =========================================
   SORT BY PUBLICATION DATE
========================================= */

if (sortButton) {
    sortButton.addEventListener("click", () => {
        oldestFirst = !oldestFirst;

        const label = sortButton.querySelector("span");

        if (label) {
            label.textContent =
                `SORT: ${oldestFirst ? "OLDEST" : "NEWEST"}`;
        }

        renderStories();
    });
}


/* =========================================
   REFRESH NEWS
========================================= */

if (refreshButton) {
    refreshButton.addEventListener("click", async () => {
        const icon = refreshButton.querySelector("svg");

        if (icon) {
            icon.animate(
                [
                    { transform: "rotate(0deg)" },
                    { transform: "rotate(360deg)" }
                ],
                { duration: 450 }
            );
        }

        await fetchNews();
    });
}


/* =========================================
   RESET MAP
========================================= */

if (resetMapButton) {
    resetMapButton.addEventListener("click", () => {
        if (map) {
            map.closePopup();
            map.setView(mapCenter, mapZoom);
        }

        selectedId = stories[0]?.id ?? null;

        renderStories();

        showToast("Map view reset");
    });
}


/* =========================================
   OPTIONAL EXISTING MAP CONTROLS
========================================= */

document.querySelector(".map-menu")?.addEventListener(
    "click",
    () => showToast("Map layers · story locations enabled")
);

document.querySelector(".map-layer-select")?.addEventListener(
    "click",
    () => showToast("Showing available story locations")
);


/* =========================================
   HEADER DATE AND INITIALIZATION
========================================= */

const todayDate = document.querySelector("#today-date");

if (todayDate) {
    todayDate.textContent = new Intl.DateTimeFormat("en-GB", {
        weekday: "short",
        day: "2-digit",
        month: "short",
        year: "numeric"
    }).format(new Date()).toUpperCase();
}

if (syncTime) {
    syncTime.textContent = new Date().toLocaleTimeString(
        "en-GB",
        { hour12: false }
    );
}

// Initialize the map before rendering news markers.
initializeMap();

// Fetch real articles on page startup.
fetchNews();
