// LIFE CYCLE EVENTS SERVICE WORKER
const staticCacheName = "site-static-v3";
const dynamicCacheName = "site-dynamic-v1";
const assets = [
  "/",
  "/offline",
  "/styles/main.css",
  "https://kit.fontawesome.com/229b7397fb.js",
  "https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&display=swap",
  "https://fonts.googleapis.com/css2?family=Girassol&display=swap",
];

const installed = (event) => {
  // Service Worker: Installed.
  event.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      return cache.addAll(assets).then(() => self.skipWaiting());
    })
  );
};

// Source: https://www.youtube.com/watch?v=K9NXQZxKMko&list=PL4cUxeGkcC9gTxqJBcDmoi5Q2pzDusSL7&index=20&ab_channel=TheNetNinja
const activated = (event) => {
  // Service Worker: Activated.
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => key !== staticCacheName && key !== dynamicCacheName)
          .map((key) => caches.delete(key))
      );
    })
  );
};

// Source: https://www.youtube.com/watch?v=ChXgikdQJR8&list=PL4cUxeGkcC9gTxqJBcDmoi5Q2pzDusSL7&index=18&ab_channel=TheNetNinja
const fetched = (event) => {
  // Service Worker: Listen for Fetch Events.
  const req = event.request;
  event.respondWith(
    caches
      .match(req)
      .then((cacheRes) => {
        return (
          cacheRes ||
          fetch(req).then((fetchRes) => {
            return caches.open(dynamicCacheName).then((cache) => {
              cache.put(req.url, fetchRes.clone());
              return fetchRes;
            });
          })
        );
      })
      .catch(() => {
        if (req.url.includes("/movie/") > -1 || req.url.endsWith("/") > -1) {
          return caches.match("/offline");
        }
      })
  );
};

// Events
self.addEventListener("install", installed);
self.addEventListener("activate", activated);
self.addEventListener("fetch", fetched);
