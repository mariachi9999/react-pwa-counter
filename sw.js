const CACHE_ELEMENTS = ["./", "../src/index.js", "../src/App.js"];

const CACHE_NAME = "v1_cache_contador_react";

// Primer parte del ciclo de vida de mi sw.
// Se registra, se instala, y cacheara las rutas que antes
// apunté para que no nuestra app no tenga que hacer peticiones
// al servidor a cada rato.

// eslint-disable-next-line no-restricted-globals
self.addEventListener("install", (e) => {
  //Acá le pido que espere hasta que pase  lo siguiente
  // Abro el cache, agrego elementos y con el skip waiting le digo que siga.
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      cache
        .addAll(CACHE_ELEMENTS)
        .then(() => {
          // eslint-disable-next-line no-restricted-globals
          self.skipWaiting();
        })
        .catch(console.log);
    })
  );
});

self.addEventListener("activate", (e) => {
  const cacheWhitelist = [CACHE_NAME];
  // Acá controlo que lo cacheado sea efectivamente lo que deseo; lo que no, lo descarto; lo que si, lo inicio vía claim().
  e.waitUntil(
    caches.keys().then((cachesNames) => {
      return Promise.all(
        cachesNames.map((cacheName) => {
          return (
            cacheWhitelist.indexOf(cacheName) === -1 && caches.delete(cacheName)
          );
        })
      ).then(() => self.clients.claim());
    })
  );
});

self.addEventListener("fetch", (e) => {
  // A cada url de mi lista, preguntare si existe
  // en el cache y si no, la cachearé.
  e.respondWith(
    caches.match(e.request).then((res) => (res ? res : fetch(e.request)))
  );
});
