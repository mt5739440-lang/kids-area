const {JSDOM}=require("jsdom");const fs=require("fs");
const html=fs.readFileSync(process.argv[2],"utf8");
let bad=0;const ok=(c,m)=>{console.log((c?"PASS ":"FAIL ")+m);if(!c)bad++};
// ---- mock Supabase ----
const USERS={"ops@x.com":{pw:"pw1",role:"ops",branch:null},"s1@x.com":{pw:"pw2",role:"supervisor",branch:"b1"},"s2@x.com":{pw:"pw3",role:"supervisor",branch:"b2"},"bad@x.com":{pw:"pw",role:null}};
const srv={counters:{},docs:new Map(),clock:Date.parse("2026-11-20T10:00:00Z"),online:true,tables:true,posts:0};
function who(req){const a=(req.headers.Authorization||"").replace("Bearer ","");const m=/^tok:(.+?):(\d+)$/.exec(a);return m&&USERS[m[1]]?{email:m[1],...USERS[m[1]]}:null}
function allowed(u,b){return !!u&&u.role&&(b===null||b===undefined||u.branch===null||u.branch===b)}
async function mockFetch(url,req){
 req=req||{};const u=new URL(url),p=u.pathname,res=(s,b)=>({ok:s>=200&&s<300,status:s,text:async()=>b===undefined?"":JSON.stringify(b)});
 if(!srv.online)throw new TypeError("Failed to fetch");
 if(p==="/auth/v1/token"){const g=u.searchParams.get("grant_type"),b=JSON.parse(req.body);
  if(g==="password"){const us=USERS[b.email];if(!us||us.pw!==b.password)return res(400,{error:"invalid"});return res(200,{access_token:"tok:"+b.email+":"+(++srv.n||(srv.n=1)),refresh_token:"ref:"+b.email,expires_in:3600})}
  if(g==="refresh_token"){const e=b.refresh_token.slice(4);return res(200,{access_token:"tok:"+e+":"+(++srv.n),refresh_token:b.refresh_token})}}
 const usr=who(req);
 if(!usr)return res(401,{message:"JWT"});
 if(!srv.tables)return res(404,{code:"PGRST205"});
 if(p==="/rest/v1/rpc/reserve_block"){const b=JSON.parse(req.body);if(!allowed(usr,b.p_branch))return res(400,{message:"wrong branch"});const k=b.p_branch+"|"+b.p_key;const cur=Math.max(srv.counters[k]||0,b.p_min||0);srv.counters[k]=cur+b.p_size;return res(200,cur+1)}
 if(p==="/rest/v1/branches")return res(200,[{id:"b1"},{id:"b2"}]);
 if(p==="/rest/v1/staff")return res(200,usr.role?[{role:usr.role,branch_id:usr.branch,active:true}]:[]);
 if(p==="/rest/v1/docs"&&req.method==="GET"){
  let rows=[...srv.docs.values()].filter(r=>allowed(usr,r.branch_id));
  const g=u.searchParams.get("updated_at");if(g){const t=g.replace("gte.","");rows=rows.filter(r=>r.updated_at>=t)}
  rows.sort((a,b)=>a.updated_at<b.updated_at?-1:a.updated_at>b.updated_at?1:(a.collection+a.id<b.collection+b.id?-1:1));
  const off=+u.searchParams.get("offset")||0,lim=+u.searchParams.get("limit")||1000;
  return res(200,rows.slice(off,off+lim).map(r=>JSON.parse(JSON.stringify(r))));}
 if(p==="/rest/v1/docs"&&req.method==="POST"){
  const arr=JSON.parse(req.body);srv.posts++;srv.clock+=1000;const ts=new Date(srv.clock).toISOString();
  for(const d of arr){if(!allowed(usr,d.branch_id))return res(403,{message:"rls"});}
  for(const d of arr){
   // jsonb does not keep key order: simulate by reversing keys
   const rev=o=>o&&typeof o==="object"?(Array.isArray(o)?o.map(rev):Object.fromEntries(Object.keys(o).reverse().map(k=>[k,rev(o[k])]))):o;
   srv.docs.set(d.collection+"|"+d.id,{collection:d.collection,id:d.id,branch_id:d.branch_id,data:rev(d.data),deleted:!!d.deleted,updated_at:ts});}
  return res(201);}
 return res(404,{});
}
function boot(){
 const dom=new JSDOM(html,{runScripts:"dangerously",url:"http://localhost/",pretendToBeVisual:true,beforeParse(win){win.confirm=()=>true;win.prompt=()=>"x";win.print=()=>{};win.fetch=(u,r)=>mockFetch(u,r)}});
 const w=dom.window;w.eval("window.printHTML=function(h){};window.printA4=function(h){};window.downloadXlsx=function(){};window.downloadBlob=function(){}");
 const errs=[];w.addEventListener("error",e=>errs.push(e.message));
 return {w:w,errs:errs,$:s=>w.document.querySelector(s),E:c=>w.eval(c)};
}
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
const login=(d,id,pin)=>{if(d.E("me"))d.w.logout();d.$("#lu").value=id;d.$("#lp").value=pin;d.w.doLogin()};
(async()=>{
 const A=boot(),B=boot();
 const setup=async(d,email,pw)=>{login(d,"u3","3333");d.w.eval("views.backupBody()");d.$("#syu").value="https://p.supabase.co";d.$("#syk").value="k";d.$("#sye").value=email;d.$("#syp").value=pw;return d};
 await setup(A,"ops@x.com","pw1");await A.w.syUpload();
 await setup(B,"ops@x.com","pw1");await B.w.syJoinDB().catch(()=>{});
 B.w.eval("SY.on=true");await B.w.syRun();
 ok(A.E("blkCur('invoice')!==null")&&B.E("blkCur('invoice')!==null"),"both devices hold a reserved invoice block");
 const a=[],b=[];for(let i=0;i<8;i++){a.push(A.E("nextNo('invoice')"));b.push(B.E("nextNo('invoice')"))}
 const all=a.concat(b);ok(new Set(all).size===all.length,"16 invoice numbers from two devices are all unique: "+all.join(","));
 ok(a.every((x,i)=>i===0||x>a[i-1]),"numbers on one device increase");
 ok(A.E("S.seq.invoice")>=Math.max(...a),"local counter follows issued numbers");
 // refill after exhaustion
 await A.w.syRun();const more=[];for(let i=0;i<12;i++)more.push(A.E("nextNo('invoice')"));await A.w.syRun();
 ok(new Set(all.concat(more)).size===all.length+more.length,"numbers stay unique after block refill");
 // offline falls back to local without crashing
 srv.online=false;let off=[];for(let i=0;i<15;i++)off.push(A.E("nextNo('receipt')"));
 ok(off.every((x,i)=>i===0||x>off[i-1]),"offline numbering keeps increasing (local fallback)");
 srv.online=true;
 // server counter never below local min
 A.E("S.seq.shift=500");await A.w.syRun();A.E("BLK[CUR].shift={next:1,end:0}");await A.w.syRun();
 ok(A.E("nextNo('shift')")>500,"new block starts above existing local counter (500)");
 // not connected: plain local counters still work
 const C=boot();login(C,"u3","3333");const n1=C.E("nextNo('invoice')"),n2=C.E("nextNo('invoice')");ok(n2===n1+1,"disconnected device uses plain sequential counter");
 ok(A.errs.length===0&&B.errs.length===0,"no script errors "+A.errs.concat(B.errs).join("|"));
 console.log(bad?"FAILED "+bad:"ALL PASS");process.exit(bad?1:0);
})().catch(e=>{console.log("CRASH",e);process.exit(2)});
