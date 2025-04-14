// Cache name and assets to store
const CACHE_NAME = "my-cache-v1";
const ASSETS_TO_CACHE = [
  "/",
  "./index.html",
  "./index.css",
  "/app.js",
  "/images/logo.png",
];

// Install event - Cache assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Caching assets");
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// Activate event - Clean old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((cache) => cache !== CACHE_NAME)
          .map((cache) => caches.delete(cache))
      );
    })
  );
});

// Fetch event - Serve cached files
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener("push", (event) => {
  self.registration.showNotification("New Message", {
    body: "You have a new notification!",
    icon: "/images/notification.png",
  });
});
