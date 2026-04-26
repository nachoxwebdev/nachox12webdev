const CACHE_NAME = 'nachox12-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/style.css',
    '/script.js',
    '/imagenes/logo.png',
    '/imagenes/favicon.png',
    '/imagenes/banner-1.png',
    '/imagenes/banner-2.png',
    '/imagenes/ayg-preview.png',
    '/imagenes/preview-dgd.jpg'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});