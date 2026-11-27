// قفل الدخول بعد محاولات خاطئة + خروج تلقائي عند الخمول. node tests/auth.test.js <html بمستخدمين تجريبيين>
const {JSDOM}=require("jsdom"),fs=require("fs");
let bad=0;const ok=(c,m)=>{console.log((c?"PASS ":"FAIL ")+m);if(!c)bad++};
const dom=new JSDOM(fs.readFileSync(process.argv[2],"utf8"),{runScripts:"dangerously",url:"http://localhost/",pretendToBeVisual:true,beforeParse(w){w.confirm=()=>true;w.print=()=>{}}});
const w=dom.window,$=s=>w.document.querySelector(s),E=c=>w.eval(c),errs=[];w.addEventListener("error",e=>errs.push(e.message));
const tryLogin=(id,pin)=>{$("#lu").value=id;$("#lp").value=pin;w.doLogin()};
(async()=>{
 for(let i=1;i<=4;i++){tryLogin("u1","0000");ok(E("!me"),"wrong PIN #"+i+" rejected")}
 tryLogin("u1","1111");ok(E("!!me"),"right PIN still works before the 5th failure");E("logout()");
 ok(JSON.stringify(E("pinFails()"))==="{}","counter reset after a successful login");
 for(let i=1;i<=5;i++)tryLogin("u1","0000");
 ok(E("pinLockLeft('u1')")>0,"locked after 5 wrong attempts");
 tryLogin("u1","1111");ok(E("!me"),"correct PIN refused while locked");
 tryLogin("u2","2222");ok(E("!!me"),"another user is not locked");E("logout()");
 const f=E("pinFails()");f.u1.until=Date.now()-1;E("pinFailSave("+JSON.stringify(f)+")");
 tryLogin("u1","1111");ok(E("!!me"),"lock expires and correct PIN works");
 ok(E("S.audit.filter(a=>a.action==='login failed').length")>=5,"failed attempts audited");
 // خمول
 E("lastAct=Date.now()-29*60000;idleCheck()");ok(E("!!me"),"still signed in after 29 min idle");
 E("lastAct=Date.now()-31*60000;idleCheck()");ok(E("!me")&&!!$("#lu"),"signed out after 31 min idle");
 tryLogin("u1","1111");E("S.settings.idleMin=0;lastAct=Date.now()-600*60000;idleCheck()");ok(E("!!me"),"idle logout can be disabled (idleMin=0)");
 ok(errs.length===0,"no script errors "+errs.join("|"));
 console.log(bad?"FAILED "+bad:"ALL PASS");process.exit(bad?1:0);
})().catch(e=>{console.log("CRASH",e);process.exit(2)});
