// أول تشغيل: لا مستخدمين افتراضيين، شاشة إنشاء أول مدير. node tests/setup.test.js <html بدون مستخدمين تجريبيين>
const {JSDOM}=require("jsdom"),fs=require("fs");
let bad=0;const ok=(c,m)=>{console.log((c?"PASS ":"FAIL ")+m);if(!c)bad++};
const dom=new JSDOM(fs.readFileSync(process.argv[2],"utf8"),{runScripts:"dangerously",url:"http://localhost/",pretendToBeVisual:true,beforeParse(w){w.confirm=()=>true;w.print=()=>{}}});
const w=dom.window,$=s=>w.document.querySelector(s),E=c=>w.eval(c),errs=[];w.addEventListener("error",e=>errs.push(e.message));
const fill=(n,p,p2)=>{$("#sn").value=n;$("#sp").value=p;$("#sp2").value=p2};
const toastTxt=()=>$("#toast")?$("#toast").textContent:"";
(async()=>{
 ok(E("S.users.length")===0,"no default users on a fresh install");
 ok(!!$("#sn")&&!!$("#sp")&&!!$("#sp2"),"first-admin screen shown instead of login");
 ok(!$("#lu"),"no user dropdown / no login form");
 ok(!/1111|2222|3333|4444|5555|6666/.test($("#app").textContent),"no demo PIN hint on screen");
 ok(!!$("#syu")&&!!$("#syp"),"branch-device connect section present");
 fill("","4829","4829");w.setupAdmin();ok(E("S.users.length")===0,"empty name refused");
 fill("المدير","48","48");w.setupAdmin();ok(E("S.users.length")===0,"short PIN refused");
 fill("المدير","4829","4820");w.setupAdmin();ok(E("S.users.length")===0,"mismatched PIN refused");
 for(const p of ["1111","0000","1234","4321"]){fill("المدير",p,p);w.setupAdmin();ok(E("S.users.length")===0,"weak PIN "+p+" refused")}
 fill("  أحمد  ","4829","4829");w.setupAdmin();
 ok(E("S.users.length")===1,"one admin created");
 ok(E("S.users[0].role")==="admin"&&E("S.users[0].name")==="أحمد"&&E("S.users[0].branch")==="all","role admin, all branches, name trimmed");
 ok(E("S.users[0].pin")===undefined&&!!E("S.users[0].pinHash")&&!!E("S.users[0].pinSalt"),"PIN stored hashed only");
 ok(E("!!me")&&!!$("#view"),"signed in straight after creation");
 ok(!JSON.stringify(E("DB")).includes("4829"),"plain PIN not present anywhere in stored data");
 ok(E("setupNeeded()")===false,"setup no longer needed");
 w.setupAdmin();ok(E("S.users.length")===1,"cannot create a second admin from the setup call");
 E("logout()");ok(!!$("#lu")&&!$("#sn"),"after logout the normal login appears");
 $("#lu").value=E("S.users[0].id");$("#lp").value="4829";w.doLogin();ok(E("!!me"),"login with chosen PIN works");
 E("logout()");$("#lp").value="1111";w.doLogin();ok(E("!me"),"default-style PIN rejected");
 ok(errs.length===0,"no script errors "+errs.join("|"));
 console.log(bad?"FAILED "+bad:"ALL PASS");process.exit(bad?1:0);
})().catch(e=>{console.log("CRASH",e);process.exit(2)});
