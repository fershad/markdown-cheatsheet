var cacheName = "mdcheatsheet-cache-" + Date.now();
var filesToCache = [
  "/",
  "/index.html",
  "/global.css",
  "/build/bundle.js",
  "/build/bundle.css",
  "/fluidtype.css",
  "https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600&family=Permanent+Marker&family=Source+Code+Pro&display=swap"
];
self.addEventListener("install", function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});
self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(thisCacheName) {
          if (thisCacheName !== cacheName) {
            return caches.delete(thisCacheName);
          }
        })
      );
    })
  );
});
self.addEventListener("fetch", e => {
  e.respondWith(
    (async function() {
      const response = await caches.match(e.request);
      return response || fetch(e.request);
    })()
  );
});