// زر ✕ لإغلاق اللافتات والرسائل العابرة. node tests/alert-close.test.js <html>
const {JSDOM}=require("jsdom"),fs=require("fs");
const dom=new JSDOM(fs.readFileSync(process.argv[2],"utf8"),{runScripts:"dangerously",url:"http://localhost/",pretendToBeVisual:true,beforeParse(w){w.confirm=()=>true;w.print=()=>{}}});
const w=dom.window,$=s=>w.document.querySelector(s),E=c=>w.eval(c);let bad=0;const ok=(c,m)=>{console.log((c?"PASS ":"FAIL ")+m);if(!c)bad++};
$("#lu").value="u3";$("#lp").value="3333";w.doLogin();
E("S.settings.alertSec=0");
E("go('present')");
E("document.getElementById('alerts').innerHTML='<div class=\"alertbox soon\">⏰ 2 اختبار</div>'");w.alertApply();
let b=$("#alerts .alertbox .xbtn");ok(!!b,"banner has ✕ button");
ok($("#alerts .alertbox").style.display!=="none","banner visible");
b.click();ok($("#alerts .alertbox").style.display==="none","click hides banner (even when fixed mode)");
E("document.getElementById('alerts').innerHTML='<div class=\"alertbox soon\">⏰ 2 اختبار</div>'");w.alertApply();
ok($("#alerts .alertbox").style.display==="none","stays dismissed after re-render with same text");
E("document.getElementById('alerts').innerHTML='<div class=\"alertbox soon\">⏰ 3 اختبار</div>'");w.alertApply();
ok($("#alerts .alertbox").style.display!=="none","reappears when text changes");
w.toast("رسالة تجربة");ok($("#toast").style.display!=="none"&&/رسالة تجربة/.test($("#toast").textContent),"toast shows");
ok(!!$("#toast .xbtn"),"toast has ✕");$("#toast .xbtn").click();ok($("#toast").style.display==="none","toast closes on click");
console.log(bad?"FAILED "+bad:"ALL PASSED");process.exit(bad?1:0);
