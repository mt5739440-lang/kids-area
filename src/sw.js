/* SYSTEM KIDS AREA — app-shell cache so the app opens even without internet.
   Only same-origin files are cached; Supabase requests (other origin) are never touched. */
const VER="ka-v19";
const SHELL=["./","index.html","styles.css","app.js","manifest.webmanifest","icon-192.png","icon-512.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(VER).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==VER).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{
 const r=e.request;if(r.method!=="GET")return;
 const u=new URL(r.url);if(u.origin!==self.location.origin)return;
 e.respondWith(caches.open(VER).then(async c=>{
  const hit=await c.match(r,{ignoreSearch:true});
  const net=fetch(r).then(res=>{if(res&&res.ok)c.put(r,res.clone());return res}).catch(()=>null);
  if(hit){net.catch(()=>0);return hit}            // cached copy now, refreshed in the background for next time
  const res=await net;return res||(r.mode==="navigate"?c.match("index.html"):Response.error());
 }));
});
