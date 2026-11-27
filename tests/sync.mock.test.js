const {JSDOM}=require("jsdom");const fs=require("fs");
const html=fs.readFileSync(process.argv[2],"utf8");
let bad=0;const ok=(c,m)=>{console.log((c?"PASS ":"FAIL ")+m);if(!c)bad++};
// ---- mock Supabase ----
const USERS={"ops@x.com":{pw:"pw1",role:"ops",branch:null},"s1@x.com":{pw:"pw2",role:"supervisor",branch:"b1"},"s2@x.com":{pw:"pw3",role:"supervisor",branch:"b2"},"bad@x.com":{pw:"pw",role:null}};
const srv={docs:new Map(),clock:Date.parse("2026-11-20T10:00:00Z"),online:true,tables:true,posts:0};
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
 if(p==="/rest/v1/branches")return res(200,[{id:"b1"},{id:"b2"}]);
 if(p==="/rest/v1/staff")return res(200,usr.role?[{role:usr.role,branch_id:usr.branch,active:true}]:[]);
 if(p==="/rest/v1/docs"&&req.method==="GET"){
  let rows=[...srv.docs.values()].filter(r=>allowed(usr,r.branch_id));
  const g=u.searchParams.get("updated_at");if(g){const t=g.replace("gte.","");rows=rows.filter(r=>r.updated_at>=t)}
  const orp=u.searchParams.get("or");if(orp){const m=/^\(updated_at\.gt\."(.*?)",and\(updated_at\.eq\."(.*?)",collection\.gt\."(.*?)"\),and\(updated_at\.eq\."(.*?)",collection\.eq\."(.*?)",id\.gt\."(.*?)"\)\)$/.exec(orp);
   if(!m)return res(400,{message:"bad or: "+orp});const[,t1,t2,c1,t3,c2,i1]=m;
   rows=rows.filter(r=>r.updated_at>t1||(r.updated_at===t2&&r.collection>c1)||(r.updated_at===t3&&r.collection===c2&&r.id>i1))}
  rows.sort((a,b)=>a.updated_at<b.updated_at?-1:a.updated_at>b.updated_at?1:(a.collection<b.collection?-1:a.collection>b.collection?1:(a.id<b.id?-1:1)));
  const off=+u.searchParams.get("offset")||0,lim=+u.searchParams.get("limit")||1000;
  const pg=rows.slice(off,off+lim);(srv.gets=srv.gets||[]).push({url:u.search,keys:pg.map(r=>r.collection+"|"+r.id)});
  return res(200,pg.map(r=>JSON.parse(JSON.stringify(r))));}
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
 const conn=(d,email,pw)=>{d.w.go("settings");d.E("view='settings'");};
 // device A: ops uploads
 login(A,"u3","3333");
 A.E("S.guardians.push({id:'gSh',name:'ولي مشترك',phone:'01099990000',notes:''});S.children.push({id:'kSh',guardianId:'gSh',name:'طفل مشترك',age:7,notes:''})");A.E("save()");
 A.w.eval("views.backupBody()");
 ok(!!A.$("#sycard"),"sync card appears in settings backups view");
 A.$("#syu").value="https://proj.supabase.co";A.$("#syk").value="sb_publishable_x";A.$("#sye").value="ops@x.com";A.$("#syp").value="WRONG";
 await A.w.syTest();ok(/غير صحيحة/.test(A.$("#symsg").textContent),"wrong password reports bad login");
 srv.tables=false;A.$("#syp").value="pw1";await A.w.syTest();ok(/الجداول غير موجودة/.test(A.$("#symsg").textContent),"missing tables reported");
 srv.tables=true;await A.w.syTest();ok(/الاتصال سليم/.test(A.$("#symsg").textContent)&&/ops/.test(A.$("#symsg").textContent),"connection test ok shows role");
 await A.w.syUpload();
 ok(A.E("SY.on")===true&&A.E("Object.keys(SYQQ).length")===0,"upload finished, queue empty");
 ok(srv.docs.has("guardians|gSh"),"shared guardian uploaded");
 ok([...srv.docs.values()].some(r=>r.collection==="invoices"&&r.branch_id==="b2"&&r.id.startsWith("b2:")),"branch docs carry branch id prefix");
 ok(srv.docs.has("_meta|branches"),"branch list uploaded");
 const total=srv.docs.size;ok(total>50,"many docs uploaded ("+total+")");
 // no echo: pull the same data and nothing should requeue
 await A.w.syRun();ok(A.E("Object.keys(SYQQ).length")===0,"no echo loop after pull (jsonb key order)");
 const posts0=srv.posts;await A.w.syRun();ok(srv.posts===posts0,"idle sync sends nothing");
 // device B: branch 2 supervisor joins
 B.w.go;login(B,"u3","3333");B.w.eval("views.backupBody()");
 B.$("#syu").value="https://proj.supabase.co";B.$("#syk").value="sb_publishable_x";B.$("#sye").value="s2@x.com";B.$("#syp").value="pw3";
 B.w.location.reload=()=>{};
 let reloaded=false;try{Object.defineProperty(B.w,"__rl",{value:1})}catch(e){}
 await B.w.syJoinDB().catch(()=>{});
 ok(B.E("DB.shared.guardians.some(g=>g.id==='gSh')"),"device B received shared guardian");
 ok(B.E("DB.byBranch.b2.invoices.length")>=2,"device B received its own branch (b2) invoices");
 ok(B.E("DB.byBranch.b1.invoices.length")===0,"device B did NOT receive branch b1 invoices (RLS)");
 // B makes a sale in b2 and a new guardian; A should see guardian, not b2 invoice
 B.E("CUR='b2';S=compose('b2');me=S.users.find(u=>u.id==='u5')||me");
 B.E("S.guardians.push({id:'gFromB',name:'من الفرع الثاني',phone:'01088880000',notes:''});S.invoices.push({id:'b2new',no:99,cashier:'u5',createdAt:Date.now(),shift:'sh_b2',lines:[],sub:5,disc:{type:'pct',value:0,amount:0,reason:'',by:null},total:5,payments:[{m:'cash',a:5,shift:'sh_b2',at:Date.now()}],creditAmt:0,gid:null,visitIds:[],void:null})");
 B.E("save()");await B.w.syRun();
 ok(srv.docs.has("guardians|gFromB")&&srv.docs.has("invoices|b2:b2new"),"B pushed guardian and b2 invoice");
 A.E("SY.tok&&0");await A.w.syRun();
 ok(A.E("S.guardians.some(g=>g.id==='gFromB')"),"A pulled guardian created at B (shared across branches)");
 ok(A.E("DB.byBranch.b2.invoices.some(i=>i.id==='b2new')"),"ops device A sees b2 invoice (ops has all branches)");
 ok(A.E("Object.keys(SYQQ).length")===0,"A queue empty after pull");
 // offline: A edits while offline, queue persists, then reconnect
 srv.online=false;A.E("S.guardians.find(g=>g.id==='gSh').name='اسم معدل أوفلاين';save()");await A.w.syRun();
 ok(A.E("SYSTAT")==="off"&&A.E("Object.keys(SYQQ).length")>=1,"offline: status off and edit queued");
 ok(/دون اتصال/.test(A.E("syChipTxt()")),"offline chip text shown");
 const savedQ=A.E("localStorage.getItem('ls_sync_q')");ok(savedQ.indexOf("اسم معدل أوفلاين")>0,"queue persisted in localStorage");
 srv.online=true;await A.w.syRun();
 ok(srv.docs.get("guardians|gSh").data.name==="اسم معدل أوفلاين","after reconnect edit reached server");
 ok(A.E("SYSTAT")==="ok","status ok again");
 // token expiry -> refresh
 A.E("SY.tok='tok:ops@x.com:0'");A.E("S.guardians.find(g=>g.id==='gSh').notes='n1';save()");
 A.E("SY.tok='bad'");await A.w.syRun();
 ok(srv.docs.get("guardians|gSh").data.notes==="n1","expired token refreshed automatically and pushed");
 // delete propagation
 A.E("S.guardians=S.guardians.filter(g=>g.id!=='gFromB');save()");await A.w.syRun();
 ok(srv.docs.get("guardians|gFromB").deleted===true,"delete pushed as tombstone");
 await B.w.syRun();ok(!B.E("S.guardians.some(g=>g.id==='gFromB')"),"B removed deleted guardian after pull");
 // conflict: local pending beats remote
 srv.online=false;B.E("S.guardians.find(g=>g.id==='gSh').phone='01011111111';save()");await B.w.syRun();
 srv.online=true;A.E("S.guardians.find(g=>g.id==='gSh').phone='01022222222';save()");await A.w.syRun();
 await B.w.syRun();
 ok(srv.docs.get("guardians|gSh").data.phone==="01011111111","last pusher wins on conflict (B pushed after A)");
 await A.w.syRun();ok(A.E("S.guardians.find(g=>g.id==='gSh').phone")==="01011111111","A converges to server value");
 // cursor-based pagination: tiny pages, full coverage, no offset, no duplicates
 {A.E("SY_PAGE=7");A.E("SY.lastPull=''");srv.gets=[];await A.w.syPull();
  const seen=srv.gets.flatMap(g=>g.keys),uniq=new Set(seen);
  ok(srv.gets.length>3,"pull split into several pages ("+srv.gets.length+")");
  ok(srv.gets.every(g=>!/offset=/.test(g.url)),"no offset parameter used");
  ok(srv.gets.slice(1).every(g=>/or=/.test(g.url)),"pages after the first carry a cursor");
  ok(seen.length===uniq.size&&uniq.size===srv.docs.size,"every row exactly once ("+uniq.size+"/"+srv.docs.size+")");
  A.E("SY_PAGE=1000");}
 // join against empty server is refused and keeps local data
 srv.docs.clear();const C=boot();login(C,"u3","3333");C.w.eval("views.backupBody()");C.$("#syu").value="https://proj.supabase.co";C.$("#syk").value="k";C.$("#sye").value="ops@x.com";C.$("#syp").value="pw1";
 const before=C.E("DB.shared.users.length");await C.w.syJoinDB();
 ok(C.E("DB.shared.users.length")===before&&C.E("SY.on")===false&&/القاعدة فارغة/.test(C.$("#symsg").textContent),"join to empty database refused, local data kept");
 // account without staff row
 srv.docs.clear();USERS["bad@x.com"].role=null;C.$("#sye").value="bad@x.com";C.$("#syp").value="pw";await C.w.syTest();
 ok(/staff/.test(C.$("#symsg").textContent),"account missing in staff table reported");
 ok(A.errs.length===0&&B.errs.length===0&&C.errs.length===0,"no script errors "+A.errs.concat(B.errs,C.errs).join("|"));
 console.log(bad?("FAILED "+bad):"ALL PASS");process.exit(bad?1:0);
})().catch(e=>{console.log("CRASH",e);process.exit(2)});
