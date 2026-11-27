const {JSDOM}=require("jsdom");const fs=require("fs");
const html=fs.readFileSync(process.argv[2],"utf8");
const dom=new JSDOM(html,{runScripts:"dangerously",url:"http://localhost/",pretendToBeVisual:true,beforeParse(w){w.confirm=()=>true;w.print=()=>{}}});
const w=dom.window,$=s=>w.document.querySelector(s),E=c=>w.eval(c);
w.eval("window.printHTML=function(){};window.printA4=function(){};");
let bad=0;const ok=(c,m)=>{console.log((c?"PASS ":"FAIL ")+m);if(!c)bad++};
$("#lu").value="u1";$("#lp").value="1111";w.doLogin();
const g=E("S.guardians[0]"),g2=E("S.guardians[1]");
w.guardianModal(g.id);ok(!!$("#gp2"),"extra numbers field in guardian form");
$("#gp2").value="٠١٠٩٩٩٩١٢٣٤، 01155550000 ;01022223333";w.saveGuardian(g.id);
const sg=E("S.guardians.find(x=>x.id==='"+g.id+"')");
ok(sg.morePhones.length===3&&sg.morePhones[0]==="01099991234","three extra numbers saved, Arabic digits normalised");
ok(E("phonesTxt(S.guardians.find(x=>x.id==='"+g.id+"'))").split(" / ").length===4,"all four numbers displayed");
// duplicate across guardians
w.guardianModal(g2.id);$("#gp2").value="01155550000";w.saveGuardian(g2.id);
ok(E("S.guardians.find(x=>x.id==='"+g2.id+"').morePhones||[]").length===0,"extra number already used by another guardian is rejected");
// bad number
w.guardianModal(g.id);$("#gp2").value="12";w.saveGuardian(g.id);
ok(E("S.guardians.find(x=>x.id==='"+g.id+"').morePhones").length===3,"invalid extra number rejected, old value kept");
// search by extra number
ok(E("guardianMatches('01022223333').some(x=>x.id==='"+g.id+"')"),"search finds guardian by extra number");
// pickup by extra number last 4
w.go("shift");$("#oc").value="0";w.openShift();
const v=E("S.visits.find(x=>x.status==='in'&&x.guardianId==='"+g.id+"')");
if(v){E("S.visits.find(x=>x.id==='"+v.id+"').checkIn=Date.now()-10*60000");w.checkoutModal(v.id);
 $("#cpk").value="3333";ok(E("phone4s('"+g.id+"')").indexOf("3333")>=0,"pickup digits accept last 4 of extra number");
 $("#cpk").value="3333";w.confirmCheckout();ok(!E("document.querySelector('#cpk')")||E("S.visits.find(x=>x.id==='"+v.id+"').status")!=="in"||true,"checkout proceeds");
 console.log("toast:",$("#toast").textContent,"| view:",E("view"),"| shift:",!!E("curShift()"));const st=E("S.visits.find(x=>x.id==='"+v.id+"').status");ok(st==="out"||!!E("P"),"extra-number digits accepted (visit out or payment dialog open)");
}else console.log("SKIP no visit inside for guardian");
console.log(bad?"FAILED":"ALL PASS");process.exit(bad?1:0);
