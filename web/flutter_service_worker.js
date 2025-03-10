'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "ef7b02e4f63266a5667f92d1f28541ce",
"assets/AssetManifest.bin.json": "026f097f3bb2562ed8a689a8f7624edb",
"assets/AssetManifest.json": "f9d4a1846baf106f50bf05b1976ddef9",
"assets/assets/audios/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/fonts/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/fonts/GreenCons.ttf": "04baa0a1189d43080acb7534d099c323",
"assets/assets/fonts/MyFlutterApp.ttf": "4b1885b9cb15010fc4b10e0bd19dfe49",
"assets/assets/fonts/NewCons.ttf": "4d50db5768b402129d6d30c2b5e82e39",
"assets/assets/fonts/NotoSansKR-VariableFont_wght.ttf": "6e3addfaa6e4fa119ed006a3df59bf20",
"assets/assets/fonts/Pretendard-Black.otf": "47fbe31c9ec1a228b48323141304e72f",
"assets/assets/fonts/Pretendard-Bold.otf": "f3189877761796153110738ae129c8a2",
"assets/assets/fonts/Pretendard-ExtraBold.otf": "83090e76856550278a1694bdf48a2db1",
"assets/assets/fonts/Pretendard-ExtraLight.otf": "8f1efd7d7991d92aba8d2603456ed570",
"assets/assets/fonts/Pretendard-Light.otf": "7074e726e0701102a10f0843961e28b6",
"assets/assets/fonts/Pretendard-Medium.otf": "d88ea6aec529d8945a09a582be9200a2",
"assets/assets/fonts/Pretendard-Regular.otf": "97b362437880d5cbb01b9305136909ac",
"assets/assets/fonts/Pretendard-SemiBold.otf": "0bfe99ca0a0e757d2f997561b4b3a020",
"assets/assets/fonts/Pretendard-Thin.otf": "fe5044d0108c234a2a609a17e920781d",
"assets/assets/fonts/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/assets/images/app_launcher_icon.png": "2db2a5ec69f16737355bb1a49b3de9e0",
"assets/assets/images/b04b9dd5-4500-4281-8d1f-e9b297299b75_1.png": "59599bdbf6746a4bd83b746ca0b3b9f7",
"assets/assets/images/bell_with_ding.png": "600b42e767b512609f009ac6af09396c",
"assets/assets/images/box-truck.png": "5a7133b4a7a00f49459760d4ad122bbc",
"assets/assets/images/builder-cut.png": "a71ca0a06c1ad03cfec21cb7b724ef0a",
"assets/assets/images/cate2.png": "e4251e9857262d0b99145a99ea045d07",
"assets/assets/images/check_note_list.png": "acde93fc5fc94f2d3d8d7d601172cbb4",
"assets/assets/images/clinical_notes.svg": "651d97f163d99b727061148825ee8c07",
"assets/assets/images/contactless.png": "5b5b73574fde94baf53cc897e52ce905",
"assets/assets/images/contactless_copy.png": "2c18bb98085fca9bc61860051998bf04",
"assets/assets/images/departure_board.png": "83fb46915cfce2d521333f47ad187a5c",
"assets/assets/images/ev_station.png": "50b7282ead9efcd28c585cab13b95c56",
"assets/assets/images/fact_check.png": "8b5eefee7f9102ca7d8afa74e00c727e",
"assets/assets/images/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/handyman.png": "9c7fa95a466d7ca0b43339d25aa3e600",
"assets/assets/images/human.png": "bfce0f6a61110a3f422ab8379d5600ef",
"assets/assets/images/icon-people-talking-with-white-background-3d-icon-removebg-preview_1.png": "18adadefd2b79630a2768ae1ae4d1cae",
"assets/assets/images/icon.png": "c8155c870b70cf039b6f1de09ea2b9de",
"assets/assets/images/image_7.png": "7c1a51ff0c495a0cc55b30375a19770f",
"assets/assets/images/local_shipping.png": "9ac728da1bafbdba6c070213386a0d39",
"assets/assets/images/maps_ugc.png": "d1cf0ef15e23484ebb02be3a677d35e6",
"assets/assets/images/people_alt.png": "c63ee8b605ce85ab5d95a48c9eab493c",
"assets/assets/images/pinkaroo.png": "f88d5ea59c3d07f0da9b3fc61e945d53",
"assets/assets/images/pink_memo.png": "d279c7684f2bc5cd283e769fe711f819",
"assets/assets/images/psd-construction-insurance-3d-illustration_2.png": "54df335a8126d5b4991d465daa330640",
"assets/assets/images/speech-bubble-chat-message-icon-with-bell-notification-alert-notice-reminder-symbol-conversation-button-icon-symbol-background-3d-illustration_2.png": "1ff6078319965b181ec63d21e3ff855e",
"assets/assets/images/up-arrow_11043983.png": "2db2a5ec69f16737355bb1a49b3de9e0",
"assets/assets/images/weather-icon-with-rain-cloud-with-water-drops_1_2.png": "d3c1b9b7c0097e45b9406315e2a56821",
"assets/assets/jsons/Animation_-_1728320830414.json": "39d66ffb0f9d47cf1fceb4f9c3c12cba",
"assets/assets/jsons/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/pdfs/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/rive_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/videos/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/FontManifest.json": "db291dab883213967fdfc02679369dd7",
"assets/fonts/MaterialIcons-Regular.otf": "866ce8e0a1440bd7c0e8a0760e89c271",
"assets/NOTICES": "13470bb4a4bf4b05eb7ee22ea627eac0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_google_places/assets/google_black.png": "97f2acfb6e993a0c4134d9d04dff21e2",
"assets/packages/flutter_google_places/assets/google_white.png": "40bc3ae5444eae0b9228d83bfd865158",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "1741622e2970463d46ff819a9498d4b2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "13bb77ea6af4edb488ea7f77376607dd",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "2704101cb06ce66e2000356a312be25c",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "4db28bd6a327fe027b2e8818439467a2",
"icons/app_launcher_icon.png": "2db2a5ec69f16737355bb1a49b3de9e0",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "c577cb3a91f163c37c1e9e44ad5cc5f8",
"/": "c577cb3a91f163c37c1e9e44ad5cc5f8",
"main.dart.js": "8769e192f7b556b690e1e8df462976c8",
"manifest.json": "d398a11e6faa6faf1195525e03fe502b",
"up-arrow_11043983.png": "2db2a5ec69f16737355bb1a49b3de9e0",
"version.json": "d06deb10776c96659b9848d8e86fbb8c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
