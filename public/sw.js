if (!self.define) {
  let e,
    s = {};
  const n = (n, t) => (
    (n = new URL(n + ".js", t).href),
    s[n] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = n), (e.onload = s), document.head.appendChild(e);
        } else (e = n), importScripts(n), s();
      }).then(() => {
        let e = s[n];
        if (!e) throw new Error(`Module ${n} didn’t register its module`);
        return e;
      })
  );
  self.define = (t, i) => {
    const a =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[a]) return;
    let c = {};
    const u = (e) => n(e, a),
      w = { module: { uri: a }, exports: c, require: u };
    s[a] = Promise.all(t.map((e) => w[e] || u(e))).then((e) => (i(...e), c));
  };
}
define(["./workbox-4754cb34"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/_next/app-build-manifest.json",
          revision: "7a84043dfd3d9691583416318e5a34e8",
        },
        {
          url: "/_next/static/LzSzwGmu2_nLJRsxwFwIg/_buildManifest.js",
          revision: "a0ae24e7f29dd3809ab75b5dd91a79dc",
        },
        {
          url: "/_next/static/LzSzwGmu2_nLJRsxwFwIg/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/_next/static/chunks/0e5ce63c-538528e1e7f5a781.js",
          revision: "LzSzwGmu2_nLJRsxwFwIg",
        },
        {
          url: "/_next/static/chunks/113-286ece65f73e0aab.js",
          revision: "LzSzwGmu2_nLJRsxwFwIg",
        },
        {
          url: "/_next/static/chunks/129-395c8c1602cfb79d.js",
          revision: "LzSzwGmu2_nLJRsxwFwIg",
        },
        {
          url: "/_next/static/chunks/142-e57c048f911b7826.js",
          revision: "LzSzwGmu2_nLJRsxwFwIg",
        },
        {
          url: "/_next/static/chunks/143-3d1954ef68fcfa4f.js",
          revision: "LzSzwGmu2_nLJRsxwFwIg",
        },
        {
          url: "/_next/static/chunks/194-2c4d04ba19a1cc3e.js",
          revision: "LzSzwGmu2_nLJRsxwFwIg",
        },
        {
          url: "/_next/static/chunks/23-0e020d8afbe799c6.js",
          revision: "LzSzwGmu2_nLJRsxwFwIg",
        },
        {
          url: "/_next/static/chunks/259-8bb29865ba1b5e30.js",
          revision: "LzSzwGmu2_nLJRsxwFwIg",
        },
        {
          url: "/_next/static/chunks/287-5dc055c162ba34ae.js",
          revision: "LzSzwGmu2_nLJRsxwFwIg",
        },
        {
          url: "/_next/static/chunks/300-bed20bf8243ee50d.js",
          revision: "LzSzwGmu2_nLJRsxwFwIg",
        },
        {
          url: "/_next/static/chunks/336-1c509d775523c9cb.js",
          revision: "LzSzwGmu2_nLJRsxwFwIg",
        },
        {
          url: "/_next/static/chunks/370b0802-62860aae514064c0.js",
          revision: "LzSzwGmu2_nLJRsxwFwIg",
        },
        {
          url: "/_next/static/chunks/3d47b92a-f32c82af3cb3a899.js",
          revision: "LzSzwGmu2_nLJRsxwFwIg",
        },
        {
          url: "/_next/static/chunks/45-da3ae0f05311bb93.js",
          revision: "LzSzwGmu2_nLJRsxwFwIg",
        },
        {
          url: "/_next/static/chunks/50-4efb9f70b6d710ac.js",
          revision: "LzSzwGmu2_nLJRsxwFwIg",
        },
        {
          url: "/_next/static/chunks/521-1614e6d08e7f4869.js",
          revision: "LzSzwGmu2_nLJRsxwFwIg",
        },
        {
          url: "/_next/static/chunks/526-09051354dcf444e2.js",
          revision: "LzSzwGmu2_nLJRsxwFwIg",
        },
        {
          url: "/_next/static/chunks/553-e3466a2ccd73b632.js",
          revision: "LzSzwGmu2_nLJRsxwFwIg",
        },
        {
          url: "/_next/static/chunks/59-4444cb0529cc08d4.js",
          revision: "LzSzwGmu2_nLJRsxwFwIg",
        },
        {
          url: "/_next/static/chunks/640-63622123b1d4e933.js",
          revision: "LzSzwGmu2_nLJRsxwFwIg",
        },
        {
          url: "/_next/static/chunks/674-0c7f5ccc95f0efe1.js",
          revision: "LzSzwGmu2_nLJRsxwFwIg",
        },
        {
          url: "/_next/static/chunks/694-f32a6050b0d6ea68.js",
          revision: "LzSzwGmu2_nLJRsxwFwIg",
        },
        {
          url: "/_next/static/chunks/app/_not-found/page-60ccdc1488531a0e.js",
          revision: "LzSzwGmu2_nLJRsxwFwIg",
        },
        {
          url: "/_next/static/chunks/app/cart/page-9979db1291542474.js",
          revision: "LzSzwGmu2_nLJRsxwFwIg",
        },
        {
          url: "/_next/static/chunks/app/checkout/page-70d1bb53f5978c38.js",
          revision: "LzSzwGmu2_nLJRsxwFwIg",
        },
        {
          url: "/_next/static/chunks/app/layout-317e16c10ec4e0b4.js",
          revision: "LzSzwGmu2_nLJRsxwFwIg",
        },
        {
          url: "/_next/static/chunks/app/login/page-58b11b284482ed3e.js",
          revision: "LzSzwGmu2_nLJRsxwFwIg",
        },
        {
          url: "/_next/static/chunks/app/page-dd287ac74444ee0d.js",
          revision: "LzSzwGmu2_nLJRsxwFwIg",
        },
        {
          url: "/_next/static/chunks/app/predict/page-ff14a0121d3398c9.js",
          revision: "LzSzwGmu2_nLJRsxwFwIg",
        },
        {
          url: "/_next/static/chunks/app/product/%5Bid%5D/page-2c516b8c8cf45df3.js",
          revision: "LzSzwGmu2_nLJRsxwFwIg",
        },
        {
          url: "/_next/static/chunks/app/products/page-da6037a5e990cd38.js",
          revision: "LzSzwGmu2_nLJRsxwFwIg",
        },
        {
          url: "/_next/static/chunks/app/profile/page-8a215d1372162d88.js",
          revision: "LzSzwGmu2_nLJRsxwFwIg",
        },
        {
          url: "/_next/static/chunks/app/register/page-98f0bade778d0669.js",
          revision: "LzSzwGmu2_nLJRsxwFwIg",
        },
        {
          url: "/_next/static/chunks/app/search/page-e81e9fa2f094f5b3.js",
          revision: "LzSzwGmu2_nLJRsxwFwIg",
        },
        {
          url: "/_next/static/chunks/app/transactions/page-a5a182c7e067eaa5.js",
          revision: "LzSzwGmu2_nLJRsxwFwIg",
        },
        {
          url: "/_next/static/chunks/app/wishlist/page-972f91fe08236b1f.js",
          revision: "LzSzwGmu2_nLJRsxwFwIg",
        },
        {
          url: "/_next/static/chunks/e34aaff9-4aec08c5be5a9636.js",
          revision: "LzSzwGmu2_nLJRsxwFwIg",
        },
        {
          url: "/_next/static/chunks/ee560e2c-10c83ed0c58cad36.js",
          revision: "LzSzwGmu2_nLJRsxwFwIg",
        },
        {
          url: "/_next/static/chunks/fd9d1056-77d1034b06970b38.js",
          revision: "LzSzwGmu2_nLJRsxwFwIg",
        },
        {
          url: "/_next/static/chunks/framework-00a8ba1a63cfdc9e.js",
          revision: "LzSzwGmu2_nLJRsxwFwIg",
        },
        {
          url: "/_next/static/chunks/main-65e2e8555bada828.js",
          revision: "LzSzwGmu2_nLJRsxwFwIg",
        },
        {
          url: "/_next/static/chunks/main-app-5a5cd0fef1ee4e40.js",
          revision: "LzSzwGmu2_nLJRsxwFwIg",
        },
        {
          url: "/_next/static/chunks/pages/_app-037b5d058bd9a820.js",
          revision: "LzSzwGmu2_nLJRsxwFwIg",
        },
        {
          url: "/_next/static/chunks/pages/_error-6ae619510b1539d6.js",
          revision: "LzSzwGmu2_nLJRsxwFwIg",
        },
        {
          url: "/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",
          revision: "79330112775102f91e1010318bae2bd3",
        },
        {
          url: "/_next/static/chunks/webpack-8d193c2dd7e8c98b.js",
          revision: "LzSzwGmu2_nLJRsxwFwIg",
        },
        {
          url: "/_next/static/css/920c6a72665290db.css",
          revision: "920c6a72665290db",
        },
        {
          url: "/_next/static/media/4c285fdca692ea22-s.p.woff2",
          revision: "42d3308e3aca8742731f63154187bdd7",
        },
        {
          url: "/_next/static/media/8d346445d24062b5-s.woff2",
          revision: "c965abed1310982a4d2148cb81765b56",
        },
        { url: "/manifest.json", revision: "30fd545982e34eebbfc3745f423d1279" },
        { url: "/next.svg", revision: "8e061864f388b47f33a1c3780831193e" },
        { url: "/vercel.svg", revision: "61c6b19abff40ea7acd577be818f3976" },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: n,
              state: t,
            }) =>
              s && "opaqueredirect" === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: "OK",
                    headers: s.headers,
                  })
                : s,
          },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith("/api/auth/") && !!s.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      "GET"
    );
});
