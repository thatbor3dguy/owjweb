'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "258fbf8debe2f1e3af170009bfe10b6e",
"manifest.json": "56128fc6ec7568b99d6fc24cfa34a218",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"index.html": "c35e344474686a50157ed30fbe7eb596",
"/": "c35e344474686a50157ed30fbe7eb596",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
".git/logs/HEAD": "ef531f7fc29a2759d88bac81e4d564e3",
".git/logs/refs/heads/main": "6d07320312a3b48399db0b196626c185",
".git/logs/refs/remotes/origin/main": "fff71caf48c51aa1593f7f8cd8498fa4",
".git/COMMIT_EDITMSG": "e0d084289e008cde74b7c329ff1a5bd7",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/0c/2e96873af965928e73ea4f9ba36827e9af8335": "f23130cbb9d90c19146018dcf6a708eb",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6b/cf2815aba0f88ea2a2f3fe7de552c78fa6535f": "8b472be0b84ebd4dde388398a864d0cd",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/aa/8baee70a9585bf02e5cbbd3574007ed3208d09": "fafc4f5181e9c2d04aa96bc7f245802c",
".git/objects/05/b5bedd1a01547bc0cb665cf8c3ec5285adc1a2": "75917ef3a0237035ef2729f337c5b5b8",
".git/objects/b1/1363a0af562c124767fa0cfcd5605ef8865f94": "6f1d2f23ef50a88a73d7f18936ad93ac",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/a4/f76b60be8d3e18fff0ff8c0f3723ce6c00d3da": "252efc6ca220c3bb373fbcb77af7e9ae",
".git/objects/69/00101c5a8f1b17688b5cbca0ae0c8cd12581f9": "9544a4d026ebf22d82f49142938bb115",
".git/objects/69/d58eeb46baba12a5bb26698993f1562a5a24d9": "594569df3738b2571dc5f4ebf13e5af0",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/98/ca4829bfcaa6acf4229d8a6cc2f3d5b07cd8cf": "d934b52a9246d320cc870a9c44aa179d",
".git/objects/11/6807f3a9e4d08a0943fbf7981fbe9ba902c559": "a0f490d98a9a70faa007b25a64ddaf2f",
".git/objects/34/dd3fe16ad8df3e49c5cf7ce5ee4d5240af20df": "03b1225de82ab0b46eff9a32615466ce",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/54/ea3153bc8dbd9371e793b6011bb22fa13cc79a": "22c055f2184ac8362b11187ffa24b08f",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/30ee91ad43d586050e11f50b568f9fef0f013e": "1a529ea0d9f34cda7137b9ada152db7c",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/f0/0f031f189183e43847fc50672ee31375634307": "899b5b6a6ea64c7ea9f48ea17539468c",
".git/objects/16/a46edc81422153098f7f5e2767f9f172bd976e": "743e93c9bc8ccdb41419de6010e903b2",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/b8/af9598019a93dd222031b1b174181db6e3f9e7": "b7f58737578a3ebc55c231f5615502b8",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/3f/9f9312cee638e99a64a656b7dbd8aa3ff3f2da": "8a659b8dbc897e38040a966343bb76cd",
".git/objects/3f/8d067fa955a5da515573fc869afe03cb5e0b71": "a6415c93cb01e932936573ec97b9ddb2",
".git/objects/43/229308c1af40cfff7d00e8762311c19cde3039": "731239133bea909e17cf5ef9188d4623",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/41/662ee8b88319ec53e47f33a581782b1ab7b436": "7ab42b5f9115cdd9791c8042526854d6",
".git/objects/63/71526abf5ed2f7ed19273baf7d052b346dee7e": "c7c513ee105f99f182402c90a9f5471b",
".git/objects/e7/96fd1e898b61d461d736f5b09ac8133be4ef7b": "dc5f546fc933d5150f5974f2d9467f5c",
".git/objects/e7/830d725f325f58e8fc08271757f32b1697a7f9": "566be03be5e6251fba439544065c4cd7",
".git/objects/64/5cf29b80f0407554719bd0fc29df0f6a609983": "ad45ec3082a3e58702a84fc788546d88",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/ef/bd67ba6a8b97c21d9a079b1505afbc95e2143c": "43417d604a318fda59f88cc9b786c4be",
".git/objects/75/4ede843b1d8d43bc2f9bf12761985bf01e427e": "1868b8e5fab13f7598984df450745ac8",
".git/objects/75/9c2958156751a4d4c445c4c47f3b81774aea35": "eeb818ba3c0e052ee504f7d3fb1da07c",
".git/objects/1c/cecad2903421793940ae10ca113a1783ca868c": "8c1c09302a4c3983935346430e88949b",
".git/objects/00/2a9adb1899bc0209238125001b2ac633da324e": "4669ab960c51352a7d7cf40b2ae276db",
".git/objects/bc/504296e262109a8f78aa5542928fb8c295b817": "6a43a71f8f44ec0586b999f752103241",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/88/b585d6445bb91d5ba37bcf370cfaedb44397fa": "39973048ec759f68d4215d9830b1fd80",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/77/7c29c1285d4b4808b6f10a6ec7e85556cf0931": "8fcf17697290cfcbbf7557b173fd3d36",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/5a/45ca92195307b05c49459adc5cdb654e879f95": "bbdd04dc91c5fb8cd769a3e03dd6976e",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/df/9365f427bb3ed7294e83cda00fa728d6f51cf4": "57d54ccc6f8390602d31dc3d388856a4",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/ed/d2ede08a800158fa9aeded9f4ec1317c769381": "39c5f7e5023a5028d8dbc9896910adad",
".git/objects/7c/f7a8d75cc4886fe90218305101ae1d395e9388": "8f657667ce6becf8877918c804f278bf",
".git/index": "294952a0dbdcefe539c2fd257c97bc56",
".git/config": "19949c3d637cf39663d356861ae4d574",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/refs/heads/main": "cfd1ab38cfcdc48a621301b0890e8257",
".git/refs/remotes/origin/main": "cfd1ab38cfcdc48a621301b0890e8257",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"version.json": "2240cdd7d8529f7a4907d85981158988",
"main.dart.js": "612a230053c3da5d66e02c71a3ea6af1",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/packages/eva_icons_flutter/lib/fonts/Eva-Icons.ttf": "b3cfd6832181cbaa3c98988c49d34641",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/NOTICES": "ec217118c11f111b2f88defdb7ae8364",
"assets/fonts/MaterialIcons-Regular.otf": "71b9edf519b35b0883df23a54238977d",
"assets/AssetManifest.json": "a526022a2fefa8b1499200f429c908e1",
"assets/AssetManifest.bin.json": "af8d7ebb17fc592b90259ec15262b439",
"assets/FontManifest.json": "bb8ec6bd436b98bd255107172e5fe3a0",
"assets/assets/images/login_img.png": "46d128505abdd6de1fc0e0ba2f1a7dc0",
"assets/assets/logo.png": "536607d4b8d5e3d77c422c3f5121289e",
"assets/assets/ding.mp3": "8daf510912a899f08e2e70ef4981a486",
"assets/AssetManifest.bin": "90c2bbf176134d4bbb7649d7b0797d7a",
"vercel.json": "9756f272e06132774fc013e67c2b4bd1",
"flutter.js": "888483df48293866f9f41d3d9274a779"};
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
