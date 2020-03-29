'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "e6e25ef07ab061f3396db68372e4cc59",
"/main.dart.js": "29d45e7935eeee5892d2802412e99f31",
"/assets/LICENSE": "e33fab9b6d48e0b505ddf38910cbd2b6",
"/assets/AssetManifest.json": "9b63d76eb3e3730bf489783551ea0177",
"/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "9a62a954b81a1ad45a58b9bcea89b50b",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/assets/images/img_technology.png": "165a4073582630bbd159cee4da864bd5",
"/assets/assets/images/img_not_found.jpg": "0578e19cdb2b7e638b5202790762e038",
"/assets/assets/images/img_science.png": "7c1444e720b1510f068ddeb94e8f62de",
"/assets/assets/images/img_sport.png": "bc1914bdd67e24cfd96f4c8ce349f210",
"/assets/assets/images/img_business.png": "63b7c6072839f73916463e88f348092f",
"/assets/assets/images/img_health.png": "7998cfaa77bb1802579fd6a833e6031f",
"/assets/assets/images/img_entertainment.png": "41544b487b5aed56a0d3c72c79ef34e3"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
