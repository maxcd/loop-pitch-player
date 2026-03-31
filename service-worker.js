// Loop Pitch Player — Service Worker
// Cache name: bump version string to force update on all clients
const CACHE = 'lpp-v1';

// App-shell files to precache on install
const PRECACHE = [
  './index.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
];

// ── Install: precache app shell ─────────────────────────────────
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(PRECACHE))
  );
  // Activate immediately without waiting for old SW to finish
  self.skipWaiting();
});

// ── Activate: delete old caches ─────────────────────────────────
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  // Take control of all open clients immediately
  self.clients.claim();
});

// ── Fetch: serve from cache, fall back to network ───────────────
self.addEventListener('fetch', e => {
  // Only handle GET requests
  if (e.request.method !== 'GET') return;

  const url = new URL(e.request.url);

  // Google Fonts (CSS + font files): cache-first, update in background
  if (
    url.hostname === 'fonts.googleapis.com' ||
    url.hostname === 'fonts.gstatic.com'
  ) {
    e.respondWith(
      caches.open(CACHE).then(cache =>
        cache.match(e.request).then(cached => {
          const fromNetwork = fetch(e.request).then(response => {
            cache.put(e.request, response.clone());
            return response;
          }).catch(() => cached); // network failed and nothing cached yet → undefined
          // Return cached immediately if available, otherwise wait for network
          return cached || fromNetwork;
        })
      )
    );
    return;
  }

  // Everything else (app shell): cache-first, network fallback
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(response => {
        // Only cache successful same-origin responses
        if (response.ok && url.origin === self.location.origin) {
          caches.open(CACHE).then(cache => cache.put(e.request, response.clone()));
        }
        return response;
      });
    })
  );
});
