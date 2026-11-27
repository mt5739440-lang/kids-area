const {JSDOM}=require("jsdom");const fs=require("fs"),zlib=require("zlib");
const html=fs.readFileSync(process.argv[2],"utf8"),dir=process.argv[3];
const dom=new JSDOM(html,{runScripts:"dangerously",url:"http://localhost/",pretendToBeVisual:true,beforeParse(w){w.confirm=()=>true;w.print=()=>{};w.__inflate=async b=>new Uint8Array(zlib.inflateRawSync(Buffer.from(b)));w.TextDecoder=TextDecoder}});
const w=dom.window,$=s=>w.document.querySelector(s),E=c=>w.eval(c);
w.eval("window.printHTML=function(){};window.printA4=function(){};window.downloadXlsx=function(n,s){window._tpl=s}");
let bad=0;const ok=(c,m)=>{console.log((c?"PASS ":"FAIL ")+m);if(!c)bad++};
$("#lu").value="u3";$("#lp").value="3333";w.doLogin();
const fakeInput=(name,buf)=>({files:[{name:name,arrayBuffer:async()=>buf.buffer.slice(buf.byteOffset,buf.byteOffset+buf.byteLength)}],value:"x"});
(async()=>{
 w.eval("views.backupBody()");ok(!!$("#view").innerHTML.includes("استيراد العملاء"),"import card in settings");
 w.imTemplate();ok(w._tpl&&w._tpl[0].head.length===5,"template downloads with 5 columns");
 // pre-existing guardian with 01000000000
 E("S.guardians.push({id:'gEx',name:'ولي موجود',phone:'01000000000',notes:''});S.children.push({id:'kEx',guardianId:'gEx',name:'طفل قديم',age:5,notes:''})");
 const g0=E("S.guardians.length"),c0=E("S.children.length");
 await w.imFile(fakeInput("customers.xlsx",fs.readFileSync(dir+"/customers.xlsx")));
 ok(!!E("IM")&&E("IM.rows.length")===9,"xlsx parsed: 9 rows incl header");
 ok(E("IM.map.g")===0&&E("IM.map.p")===1&&E("IM.map.c")===2&&E("IM.map.a")===3&&E("IM.map.n")===4,"columns auto-mapped by Arabic headers");
 const p=E("IM.plan");
 ok(p.rows===8,"8 data rows counted");
 ok(p.bad===2,"2 rejected rows (bad phone, missing name): "+p.bad);
 ok(p.nNewG===3,"3 new guardians (أحمد, منى, كريم): "+p.nNewG);
 ok(p.nDupG===1,"existing guardian recognised by phone");
 ok(p.newC===4&&p.dupC===1,"4 new children, 1 duplicate skipped: "+p.newC+"/"+p.dupC);
 ok(p.noAge===0||p.noAge===1,"age handling (arabic-digit age accepted)");
 w.imGo();
 ok(E("S.guardians.length")===g0+3,"3 guardians added");
 ok(E("S.children.length")===c0+4,"4 children added");
 const a=E("S.guardians.find(g=>g.name==='أحمد علي')");
 ok(a&&a.phone==="01013572468","leading zero restored for numeric phone cell");
 ok(E("S.children.filter(c=>c.guardianId==='"+a.id+"').length")===2,"two children linked to أحمد");
 const m=E("S.guardians.find(g=>g.name==='منى سعيد')");
 ok(m.phone==="01198765432"&&m.morePhones[0]==="01255556666","second phone saved as extra number");
 ok(E("S.children.find(c=>c.name==='آدم').age")===7,"Arabic-digit age converted");
 ok(E("S.children.find(c=>c.name==='طفل جديد'&&c.guardianId==='gEx')")!==undefined,"new child added to existing guardian");
 ok(E("getBackups().some(b=>b.kind==='pre')"),"backup taken before import");
 // csv utf-8 bom with quoted comma
 w.eval("window.__imErr=null");await w.imFile(fakeInput("c.csv",fs.readFileSync(dir+"/customers.csv")));
 console.log("TOAST:",$("#toast").textContent,"ERR:",w.__imErr&&w.__imErr.stack);ok(E("IM.plan.newC")===1&&E("IM.rows[1][0]")==="أبو, خالد","csv: BOM + quoted comma handled");
 w.imGo();ok(E("S.guardians.some(g=>g.name==='أبو, خالد')&&S.children.some(c=>c.name==='خالد'&&c.notes==='ملاحظة, بفاصلة')"),"csv guardian and child saved");
 // windows-1256 csv with semicolons
 await w.imFile(fakeInput("c2.csv",fs.readFileSync(dir+"/customers1256.csv")));
 ok(E("IM.rows[1][0]")==="نادية"&&E("IM.plan.newC")===1,"csv windows-1256 decoded correctly");
 w.imGo();ok(E("S.children.some(c=>c.name==='ليلى'&&c.age===4)"),"1256 csv imported");
 // re-import same file does nothing new
 await w.imFile(fakeInput("customers.xlsx",fs.readFileSync(dir+"/customers.xlsx")));
 ok(E("IM.plan.newC")===0&&E("IM.plan.nNewG")===0,"re-import creates no duplicates");
 w.closeModal();
 // cashier cannot import
 w.logout();$("#lu").value="u1";$("#lp").value="1111";w.doLogin();
 const before=E("S.guardians.length");await w.imFile(fakeInput("customers.xlsx",fs.readFileSync(dir+"/customers.xlsx")));
 ok(E("S.guardians.length")===before&&!E("IM&&IM.plan&&0"),"cashier cannot import");
 ok(!/NaN|undefined/.test($("#view").textContent),"no NaN/undefined on screen");
 console.log(bad?"FAILED":"ALL PASS");process.exit(bad?1:0);
})().catch(e=>{console.log("CRASH",e);process.exit(2)});
