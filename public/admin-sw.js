const CACHE_VERSION = "lalale-admin-v1";
const STATIC_CACHE = `${CACHE_VERSION}-static`;
const PRECACHE = [
  "/manifest.webmanifest",
  "/assets/images/logos/pwa_logo.png",
  "/pwa-icon/192",
  "/pwa-icon/512",
  "/admin-offline.html",
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(STATIC_CACHE).then((cache) => cache.addAll(PRECACHE)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key.startsWith("lalale-admin-") && key !== STATIC_CACHE).map((key) => caches.delete(key))),
    ),
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === "navigate") {
    event.respondWith(fetch(request).catch(() => caches.match("/admin-offline.html")));
    return;
  }

  if (url.pathname.startsWith("/api/") || url.pathname.startsWith("/admin")) return;

  const staticAsset =
    url.pathname.startsWith("/_next/static/") ||
    url.pathname.startsWith("/assets/images/logos/") ||
    /\.(?:css|js|woff2?)$/.test(url.pathname);

  if (staticAsset) {
    event.respondWith(
      caches.match(request).then((cached) => {
        if (cached) return cached;
        return fetch(request).then((response) => {
          if (response.ok) caches.open(STATIC_CACHE).then((cache) => cache.put(request, response.clone()));
          return response;
        });
      }),
    );
  }
});
