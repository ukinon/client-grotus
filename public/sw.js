if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,r)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let t={};const c=e=>n(e,a),d={module:{uri:a},exports:t,require:c};s[a]=Promise.all(i.map((e=>d[e]||c(e)))).then((e=>(r(...e),t)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"6786a2a0f5c7df3464d90ef67f066b49"},{url:"/_next/static/CLSX1id7Z5K4W1MSIrOrn/_buildManifest.js",revision:"3e2d62a10f4d6bf0b92e14aecf7836f4"},{url:"/_next/static/CLSX1id7Z5K4W1MSIrOrn/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/0e5ce63c-bdea32c20a659458.js",revision:"CLSX1id7Z5K4W1MSIrOrn"},{url:"/_next/static/chunks/1336-c022c95b86529e1e.js",revision:"CLSX1id7Z5K4W1MSIrOrn"},{url:"/_next/static/chunks/1518-8eeba80298edaade.js",revision:"CLSX1id7Z5K4W1MSIrOrn"},{url:"/_next/static/chunks/2707-b6ab62390c33edca.js",revision:"CLSX1id7Z5K4W1MSIrOrn"},{url:"/_next/static/chunks/283-6700465fcea3d755.js",revision:"CLSX1id7Z5K4W1MSIrOrn"},{url:"/_next/static/chunks/2931-1fa10b9ae8be6014.js",revision:"CLSX1id7Z5K4W1MSIrOrn"},{url:"/_next/static/chunks/370b0802-c4b6013b08c0795d.js",revision:"CLSX1id7Z5K4W1MSIrOrn"},{url:"/_next/static/chunks/3828-6070643f74b33543.js",revision:"CLSX1id7Z5K4W1MSIrOrn"},{url:"/_next/static/chunks/3d47b92a-9f8d1b885cff8cd1.js",revision:"CLSX1id7Z5K4W1MSIrOrn"},{url:"/_next/static/chunks/4143-e72bcf921b6b190d.js",revision:"CLSX1id7Z5K4W1MSIrOrn"},{url:"/_next/static/chunks/4300-23604c1085251b2f.js",revision:"CLSX1id7Z5K4W1MSIrOrn"},{url:"/_next/static/chunks/4674-f018af1406a79e60.js",revision:"CLSX1id7Z5K4W1MSIrOrn"},{url:"/_next/static/chunks/4957-73740303f93c0f54.js",revision:"CLSX1id7Z5K4W1MSIrOrn"},{url:"/_next/static/chunks/6728-195f3e581ac80a6f.js",revision:"CLSX1id7Z5K4W1MSIrOrn"},{url:"/_next/static/chunks/7023-34316ea53e98b1ac.js",revision:"CLSX1id7Z5K4W1MSIrOrn"},{url:"/_next/static/chunks/7040-2762553326c93408.js",revision:"CLSX1id7Z5K4W1MSIrOrn"},{url:"/_next/static/chunks/7178-e7c703e0be928ba8.js",revision:"CLSX1id7Z5K4W1MSIrOrn"},{url:"/_next/static/chunks/7194-6f1bd59524c57dfe.js",revision:"CLSX1id7Z5K4W1MSIrOrn"},{url:"/_next/static/chunks/7213-7a04bcd2387f38e2.js",revision:"CLSX1id7Z5K4W1MSIrOrn"},{url:"/_next/static/chunks/7469-b30d7bc297d34a0f.js",revision:"CLSX1id7Z5K4W1MSIrOrn"},{url:"/_next/static/chunks/7640-45e3493337c3c11a.js",revision:"CLSX1id7Z5K4W1MSIrOrn"},{url:"/_next/static/chunks/8059-9111ca1d01cfeb3e.js",revision:"CLSX1id7Z5K4W1MSIrOrn"},{url:"/_next/static/chunks/8526-309bb70c4fa86b72.js",revision:"CLSX1id7Z5K4W1MSIrOrn"},{url:"/_next/static/chunks/8997.31311cccea01eec1.js",revision:"31311cccea01eec1"},{url:"/_next/static/chunks/9553-4c7ea8a3050334b0.js",revision:"CLSX1id7Z5K4W1MSIrOrn"},{url:"/_next/static/chunks/app/_not-found/page-7a8196da18639ac3.js",revision:"CLSX1id7Z5K4W1MSIrOrn"},{url:"/_next/static/chunks/app/cart/page-d374757b46c66a96.js",revision:"CLSX1id7Z5K4W1MSIrOrn"},{url:"/_next/static/chunks/app/checkout/page-fc5aa2fcef06c5d7.js",revision:"CLSX1id7Z5K4W1MSIrOrn"},{url:"/_next/static/chunks/app/layout-e1ddae287a9fe41e.js",revision:"CLSX1id7Z5K4W1MSIrOrn"},{url:"/_next/static/chunks/app/login/page-a4b9a06495cb33d9.js",revision:"CLSX1id7Z5K4W1MSIrOrn"},{url:"/_next/static/chunks/app/page-859bb989e4e6952b.js",revision:"CLSX1id7Z5K4W1MSIrOrn"},{url:"/_next/static/chunks/app/predict/page-e82fe9cd0c42db02.js",revision:"CLSX1id7Z5K4W1MSIrOrn"},{url:"/_next/static/chunks/app/product/%5Bid%5D/page-4e7897d1ac2756b0.js",revision:"CLSX1id7Z5K4W1MSIrOrn"},{url:"/_next/static/chunks/app/products/page-299396b892f63d3a.js",revision:"CLSX1id7Z5K4W1MSIrOrn"},{url:"/_next/static/chunks/app/profile/edit/page-7c64dfa729df6f11.js",revision:"CLSX1id7Z5K4W1MSIrOrn"},{url:"/_next/static/chunks/app/profile/page-10d84e8b699a6917.js",revision:"CLSX1id7Z5K4W1MSIrOrn"},{url:"/_next/static/chunks/app/register/page-4eadd4a9cd772b10.js",revision:"CLSX1id7Z5K4W1MSIrOrn"},{url:"/_next/static/chunks/app/search/page-8060e14f7f12572a.js",revision:"CLSX1id7Z5K4W1MSIrOrn"},{url:"/_next/static/chunks/app/transaction/%5Bid%5D/page-19471987eed747c9.js",revision:"CLSX1id7Z5K4W1MSIrOrn"},{url:"/_next/static/chunks/app/transactions/page-2ba829a764cde36d.js",revision:"CLSX1id7Z5K4W1MSIrOrn"},{url:"/_next/static/chunks/app/wishlist/page-b695a19af24aa3ac.js",revision:"CLSX1id7Z5K4W1MSIrOrn"},{url:"/_next/static/chunks/e34aaff9-14257f240ac62fce.js",revision:"CLSX1id7Z5K4W1MSIrOrn"},{url:"/_next/static/chunks/ee560e2c-74232cc93839b115.js",revision:"CLSX1id7Z5K4W1MSIrOrn"},{url:"/_next/static/chunks/fd9d1056-16157b49248a5a4a.js",revision:"CLSX1id7Z5K4W1MSIrOrn"},{url:"/_next/static/chunks/framework-8e0e0f4a6b83a956.js",revision:"CLSX1id7Z5K4W1MSIrOrn"},{url:"/_next/static/chunks/main-a2756d53452e7a2a.js",revision:"CLSX1id7Z5K4W1MSIrOrn"},{url:"/_next/static/chunks/main-app-9568b64cda5c1676.js",revision:"CLSX1id7Z5K4W1MSIrOrn"},{url:"/_next/static/chunks/pages/_app-f870474a17b7f2fd.js",revision:"CLSX1id7Z5K4W1MSIrOrn"},{url:"/_next/static/chunks/pages/_error-c66a4e8afc46f17b.js",revision:"CLSX1id7Z5K4W1MSIrOrn"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-49c6a01ae29511b2.js",revision:"CLSX1id7Z5K4W1MSIrOrn"},{url:"/_next/static/css/cec6ba835e3dcff7.css",revision:"cec6ba835e3dcff7"},{url:"/_next/static/media/4c285fdca692ea22-s.p.woff2",revision:"42d3308e3aca8742731f63154187bdd7"},{url:"/_next/static/media/8d346445d24062b5-s.woff2",revision:"c965abed1310982a4d2148cb81765b56"},{url:"/hero/image1.jpg",revision:"8d7ccec96f0ff3f77411fce6021b2353"},{url:"/hero/image2.jpg",revision:"589c89978b4d9c17aa2026863817e3df"},{url:"/hero/image3.jpg",revision:"577f365cc704fe2cd47a8fc17f03f8d8"},{url:"/hero/image4.jpg",revision:"84f34857dc439dc0cab71a515758816a"},{url:"/hero/image5.jpg",revision:"fdfa7c2724d1619e580a5758f1431936"},{url:"/icon-192x192.png",revision:"845f1abd1f7a2cab98d61e288f8b203c"},{url:"/icon-512x512.png",revision:"d7d989b1d1c8b222b6bcfa463df43a0e"},{url:"/manifest.json",revision:"13edd8d824243ce1341466a4820e1df4"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
