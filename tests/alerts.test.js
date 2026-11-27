// تنبيهات عابرة: مدة اللافتات والرسائل من الإعدادات. node tests/alerts.test.js <html بمستخدمين تجريبيين>
const {JSDOM}=require("jsdom"),fs=require("fs");
let bad=0;const ok=(c,m)=>{console.log((c?"PASS ":"FAIL ")+m);if(!c)bad++};
const dom=new JSDOM(fs.readFileSync(process.argv[2],"utf8"),{runScripts:"dangerously",url:"http://localhost/",pretendToBeVisual:true,beforeParse(w){w.confirm=()=>true;w.print=()=>{}}});
const w=dom.window,$=s=>w.document.querySelector(s),E=c=>w.eval(c),errs=[];w.addEventListener("error",e=>errs.push(e.message));
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
const shown=()=>[...w.document.querySelectorAll(".alertbox")].filter(e=>e.style.display!=="none").length;
(async()=>{
 $("#lu").value="u3";$("#lp").value="3333";w.doLogin();await sleep(30);
 ok(E("alertSec()")===20&&E("toastSec()")===3,"defaults: banners 20s, messages 3s");
 // لافتة: نفرض مخزونًا ناقصًا/عملية متأخرة عبر لافتة اختبار مباشرة
 const add=txt=>{const d=w.document.createElement("div");d.className="alertbox soon";d.id="tb";d.textContent=txt;$("#view").appendChild(d)};
 E("S.settings.alertSec=1");add("تنبيه اختبار ٣");await sleep(60);
 ok(shown()>=1&&$("#tb").style.display!=="none","banner visible at first");
 await sleep(1200);ok($("#tb").style.display==="none","banner hides after the configured seconds");
 // إعادة الرسم بنفس النص: تبقى مخفية
 $("#tb").remove();add("تنبيه اختبار ٣");await sleep(60);ok($("#tb").style.display==="none","same banner re-rendered stays hidden");
 // لا وميض: لافتة منتهية تُعاد رسمها تُخفى قبل أي رسم (ميكروتاسك) 
 $("#tb").remove();add("تنبيه اختبار ٣");await Promise.resolve();ok($("#tb").style.display==="none","re-rendered expired banner is hidden before paint (no flash)");
 // تغيّر النص (زاد العدد): تظهر من جديد
 $("#tb").remove();add("تنبيه اختبار ٤");await sleep(60);ok($("#tb").style.display!=="none","changed banner shows again");
 // فتح شاشة: تظهر من جديد
 $("#tb").remove();E("go('present')");await sleep(30);add("تنبيه اختبار ٣");await sleep(60);ok($("#tb").style.display!=="none","banner shows again after opening a screen");
 // صفر = ثابتة
 E("S.settings.alertSec=0");await sleep(1300);$("#tb").remove();add("ثابت");await sleep(1300);ok($("#tb").style.display!=="none","0 keeps banners fixed");
 // الإعدادات: الحقول والحفظ والتحقق
 E("go('settings')");await sleep(30);
 ok(!!$("#al_b")&&!!$("#al_t"),"settings card present");
 $("#al_b").value="45";$("#al_t").value="7";w.saveAlertPrefs();
 ok(E("S.settings.alertSec")===45&&E("S.settings.toastSec")===7,"saved from settings");
 $("#al_b").value="900";w.saveAlertPrefs();ok(E("S.settings.alertSec")===45,"out-of-range banner value refused");
 $("#al_t").value="0";$("#al_b").value="10";w.saveAlertPrefs();ok(E("S.settings.toastSec")===7,"out-of-range message value refused");
 // مدة الرسالة العابرة
 E("S.settings.toastSec=1");E("toast('x')");ok($("#toast").style.display!=="none","message shown");await sleep(1200);ok($("#toast").style.display==="none","message hides after configured seconds");
 E("logout()");$("#lu").value="u1";$("#lp").value="1111";w.doLogin();await sleep(30);E("go('settings')");ok(!$("#al_b"),"cashier does not see the card");
 ok(errs.length===0,"no script errors "+errs.join("|"));
 console.log(bad?"FAILED "+bad:"ALL PASS");process.exit(bad?1:0);
})().catch(e=>{console.log("CRASH",e);process.exit(2)});
