const CACHE_NAME = 'eng-grade1-v1.5';
const CORE_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon.svg',
  './course_data.js',
  './course_data.json',
  './units.json',
  './illustrations.js',
  './songs_data.js',
  './audio/abc-song.ogg',
  './audio/good-morning.ogg',
  './audio/old-macdonald.mp3',
  './audio/row-boat.ogg',
  './audio/twinkle-star.ogg',
  './audio/wheels-on-bus.ogg'
];

// Install: Cache core assets for offline usage
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      for (const asset of CORE_ASSETS) {
        try {
          const res = await fetch(asset, { cache: 'reload' });
          if (res.ok) await cache.put(asset, res);
        } catch (e) {
          console.warn('Asset cache error:', asset, e);
        }
      }
    }).then(() => self.skipWaiting())
  );
});

// Activate: Clean up older cache versions
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch: Network-first for navigation, cache-first for local static assets
self.addEventListener('fetch', (event) => {
  const requestUrl = new URL(event.request.url);

  // Handle navigation requests (index.html): Network first with offline cache fallback
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then((freshResponse) => {
          if (freshResponse && freshResponse.status === 200) {
            const copy = freshResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          }
          return freshResponse;
        })
        .catch(() => caches.match('./index.html'))
    );
    return;
  }

        return fetch(event.request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseToCache));
          }
          return networkResponse;
        }).catch(() => {
          if (event.request.mode === 'navigate') {
            return caches.match('./index.html');
          }
        });
      })
    );
    return;
  }

  // Handle external CDNs / Google Fonts (stale while revalidate)
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const fetchPromise = fetch(event.request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseToCache));
        }
        return networkResponse;
      }).catch(() => cachedResponse);

      return cachedResponse || fetchPromise;
    })
  );
});
