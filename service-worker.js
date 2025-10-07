self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(app-saudacao-cache).then(cache => {
         return cache.addAll([
            "index.html",
            "manifest.json",
            "dia-e-noite.png",
            "dia e noite 192.png",
            "sol.png",
            "nuvem.png",
            "lua-e-estrelas.png",
            "sunbackground.jpg",
            "tardebackground.jpg",
            "nigthbackground.jpg"
         ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});  