// CACHE VERSION
const VERSION = "v1";

// install
self.addEventListener("install", (event) => {
  self.skipWaiting();
});

// activate
self.addEventListener("activate", (event) => {
  clients.claim();
});

// fetch → basic network fallback (supaya lolos PWA test)
self.addEventListener("fetch", (event) => {
  event.respondWith(
    fetch(event.request).catch(() => new Response("Offline"))
  );
});
