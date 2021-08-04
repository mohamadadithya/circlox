const CACHE_NAME = 'SW-001';
const toCache = [
    '/',
    'assets/css/main.min.css',
    'assets/css/all.min.css',
    'assets/js/app.min.js',
    'assets/js/web.webmanifest',
    'assets/js/register.js',
    'assets/fonts/Poppins-Light.ttf',
    'assets/fonts/Poppins-Medium.ttf',
    'assets/webfonts/fa-solid-900.woff',
    'assets/webfonts/fa-solid-900.woff2',
    'assets/icons/icon.png',
];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(function(cache) {
            return cache.addAll(toCache)
        })
        .then(self.skipWaiting())
    )
})

self.addEventListener('fetch', function(event) {
    event.respondWith(
        fetch(event.request)
        .catch(() => {
            return caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.match(event.request)
            })
        })
    )
})

self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys()
        .then((keyList) => {
            return Promise.all(keyList.map((key) => {
            if (key !== CACHE_NAME) {
                console.log('[ServiceWorker] Delete old cache', key)
                return caches.delete(key)
            }
            }))
        })
        .then(() => self.clients.claim())
    )
})
