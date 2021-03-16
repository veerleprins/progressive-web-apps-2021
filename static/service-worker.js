const CACHE_NAME = "cache-v1";

const CACHE_ASSETS = [
  "/",
  "/offline/",
  "./styles/main.css",
  "./scripts/app.js",
];

// Call Install Event:
self.addEventListener("install", (event) => {
  console.log("Service Worker: Installed");

  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Service Worker: Caching Files");
      return cache.addAll(CACHE_ASSETS).then(() => self.skipWaiting());
    })
  );
});

// Call Activate Event:
self.addEventListener("activate", (event) => {
  console.log("Service Worker: Activated");

  // Remove Unwanted Caches
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log("Service Worker: Clearing Old Cache");
            return caches.delete(cache);
          }
        })
      );
    })
  );
});
