if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,t)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const r=e=>n(e,i),d={module:{uri:i},exports:c,require:r};s[i]=Promise.all(a.map((e=>d[e]||r(e)))).then((e=>(t(...e),c)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"9bb0300d07fd59f8793c1e27ac842f8d"},{url:"/_next/static/15XV39HR5_d4b6_YqQSR8/_buildManifest.js",revision:"3e2d62a10f4d6bf0b92e14aecf7836f4"},{url:"/_next/static/15XV39HR5_d4b6_YqQSR8/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/0e5ce63c-bdea32c20a659458.js",revision:"15XV39HR5_d4b6_YqQSR8"},{url:"/_next/static/chunks/1336-c022c95b86529e1e.js",revision:"15XV39HR5_d4b6_YqQSR8"},{url:"/_next/static/chunks/1518-8eeba80298edaade.js",revision:"15XV39HR5_d4b6_YqQSR8"},{url:"/_next/static/chunks/2707-40d404723d458cbf.js",revision:"15XV39HR5_d4b6_YqQSR8"},{url:"/_next/static/chunks/283-6700465fcea3d755.js",revision:"15XV39HR5_d4b6_YqQSR8"},{url:"/_next/static/chunks/2931-1fa10b9ae8be6014.js",revision:"15XV39HR5_d4b6_YqQSR8"},{url:"/_next/static/chunks/370b0802-c4b6013b08c0795d.js",revision:"15XV39HR5_d4b6_YqQSR8"},{url:"/_next/static/chunks/3828-6070643f74b33543.js",revision:"15XV39HR5_d4b6_YqQSR8"},{url:"/_next/static/chunks/3d47b92a-9f8d1b885cff8cd1.js",revision:"15XV39HR5_d4b6_YqQSR8"},{url:"/_next/static/chunks/4143-e72bcf921b6b190d.js",revision:"15XV39HR5_d4b6_YqQSR8"},{url:"/_next/static/chunks/4300-23604c1085251b2f.js",revision:"15XV39HR5_d4b6_YqQSR8"},{url:"/_next/static/chunks/4674-f018af1406a79e60.js",revision:"15XV39HR5_d4b6_YqQSR8"},{url:"/_next/static/chunks/4957-73740303f93c0f54.js",revision:"15XV39HR5_d4b6_YqQSR8"},{url:"/_next/static/chunks/6728-195f3e581ac80a6f.js",revision:"15XV39HR5_d4b6_YqQSR8"},{url:"/_next/static/chunks/7023-34316ea53e98b1ac.js",revision:"15XV39HR5_d4b6_YqQSR8"},{url:"/_next/static/chunks/7040-2762553326c93408.js",revision:"15XV39HR5_d4b6_YqQSR8"},{url:"/_next/static/chunks/7178-f0a0f65a745dc6e5.js",revision:"15XV39HR5_d4b6_YqQSR8"},{url:"/_next/static/chunks/7194-6f1bd59524c57dfe.js",revision:"15XV39HR5_d4b6_YqQSR8"},{url:"/_next/static/chunks/7213-7a04bcd2387f38e2.js",revision:"15XV39HR5_d4b6_YqQSR8"},{url:"/_next/static/chunks/7469-b30d7bc297d34a0f.js",revision:"15XV39HR5_d4b6_YqQSR8"},{url:"/_next/static/chunks/7640-45e3493337c3c11a.js",revision:"15XV39HR5_d4b6_YqQSR8"},{url:"/_next/static/chunks/8059-9111ca1d01cfeb3e.js",revision:"15XV39HR5_d4b6_YqQSR8"},{url:"/_next/static/chunks/8526-309bb70c4fa86b72.js",revision:"15XV39HR5_d4b6_YqQSR8"},{url:"/_next/static/chunks/8997.31311cccea01eec1.js",revision:"31311cccea01eec1"},{url:"/_next/static/chunks/9553-4c7ea8a3050334b0.js",revision:"15XV39HR5_d4b6_YqQSR8"},{url:"/_next/static/chunks/app/_not-found/page-7a8196da18639ac3.js",revision:"15XV39HR5_d4b6_YqQSR8"},{url:"/_next/static/chunks/app/cart/page-4d5ae3cf7e216ba2.js",revision:"15XV39HR5_d4b6_YqQSR8"},{url:"/_next/static/chunks/app/checkout/page-05f1078f1ccee6c5.js",revision:"15XV39HR5_d4b6_YqQSR8"},{url:"/_next/static/chunks/app/layout-e1ddae287a9fe41e.js",revision:"15XV39HR5_d4b6_YqQSR8"},{url:"/_next/static/chunks/app/login/page-f0298b4d906a8ed4.js",revision:"15XV39HR5_d4b6_YqQSR8"},{url:"/_next/static/chunks/app/page-c56fc4c28055637b.js",revision:"15XV39HR5_d4b6_YqQSR8"},{url:"/_next/static/chunks/app/predict/page-20dfd9dd2b503440.js",revision:"15XV39HR5_d4b6_YqQSR8"},{url:"/_next/static/chunks/app/product/%5Bid%5D/page-2028a9e60326c5b0.js",revision:"15XV39HR5_d4b6_YqQSR8"},{url:"/_next/static/chunks/app/products/page-d544be803df5fa38.js",revision:"15XV39HR5_d4b6_YqQSR8"},{url:"/_next/static/chunks/app/profile/edit/page-7570e8341161d330.js",revision:"15XV39HR5_d4b6_YqQSR8"},{url:"/_next/static/chunks/app/profile/page-997946c3506f517d.js",revision:"15XV39HR5_d4b6_YqQSR8"},{url:"/_next/static/chunks/app/register/page-2a0a5955a6793ae0.js",revision:"15XV39HR5_d4b6_YqQSR8"},{url:"/_next/static/chunks/app/search/page-6928dac0cd556d6d.js",revision:"15XV39HR5_d4b6_YqQSR8"},{url:"/_next/static/chunks/app/transaction/%5Bid%5D/page-620e79a65daa3c4c.js",revision:"15XV39HR5_d4b6_YqQSR8"},{url:"/_next/static/chunks/app/transactions/page-76a983eea17ef30a.js",revision:"15XV39HR5_d4b6_YqQSR8"},{url:"/_next/static/chunks/app/wishlist/page-b695a19af24aa3ac.js",revision:"15XV39HR5_d4b6_YqQSR8"},{url:"/_next/static/chunks/e34aaff9-14257f240ac62fce.js",revision:"15XV39HR5_d4b6_YqQSR8"},{url:"/_next/static/chunks/ee560e2c-74232cc93839b115.js",revision:"15XV39HR5_d4b6_YqQSR8"},{url:"/_next/static/chunks/fd9d1056-16157b49248a5a4a.js",revision:"15XV39HR5_d4b6_YqQSR8"},{url:"/_next/static/chunks/framework-8e0e0f4a6b83a956.js",revision:"15XV39HR5_d4b6_YqQSR8"},{url:"/_next/static/chunks/main-a2756d53452e7a2a.js",revision:"15XV39HR5_d4b6_YqQSR8"},{url:"/_next/static/chunks/main-app-9568b64cda5c1676.js",revision:"15XV39HR5_d4b6_YqQSR8"},{url:"/_next/static/chunks/pages/_app-f870474a17b7f2fd.js",revision:"15XV39HR5_d4b6_YqQSR8"},{url:"/_next/static/chunks/pages/_error-c66a4e8afc46f17b.js",revision:"15XV39HR5_d4b6_YqQSR8"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-49c6a01ae29511b2.js",revision:"15XV39HR5_d4b6_YqQSR8"},{url:"/_next/static/css/b4a64bd15d8e2389.css",revision:"b4a64bd15d8e2389"},{url:"/_next/static/media/4c285fdca692ea22-s.p.woff2",revision:"42d3308e3aca8742731f63154187bdd7"},{url:"/_next/static/media/8d346445d24062b5-s.woff2",revision:"c965abed1310982a4d2148cb81765b56"},{url:"/hero/image1.jpg",revision:"8d7ccec96f0ff3f77411fce6021b2353"},{url:"/hero/image3.jpg",revision:"577f365cc704fe2cd47a8fc17f03f8d8"},{url:"/hero/image5.jpg",revision:"fdfa7c2724d1619e580a5758f1431936"},{url:"/icon-192x192.png",revision:"845f1abd1f7a2cab98d61e288f8b203c"},{url:"/icon-512x512.png",revision:"d7d989b1d1c8b222b6bcfa463df43a0e"},{url:"/manifest.json",revision:"13edd8d824243ce1341466a4820e1df4"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
