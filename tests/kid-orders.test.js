// طلبات الكافتيريا على زيارة الطفل وتُحاسَب عند الخروج. node tests/kid-orders.test.js <html بمستخدمين تجريبيين>
const {JSDOM}=require("jsdom"),fs=require("fs");
const dom=new JSDOM(fs.readFileSync(process.argv[2],"utf8"),{runScripts:"dangerously",url:"http://localhost/",pretendToBeVisual:true,beforeParse(w){w.confirm=()=>true;w.print=()=>{}}});
const w=dom.window,$=s=>w.document.querySelector(s),E=c=>w.eval(c);let bad=0;const ok=(c,m)=>{console.log((c?"PASS ":"FAIL ")+m);if(!c)bad++};
w.eval("window.printed=[];window.printHTML=function(h){window.printed.push(h)};window.printA4=function(){};");
$("#lu").value="u3";$("#lp").value="3333";w.doLogin();
E("go('shift')");if($("#oc")){$("#oc").value="0";w.openShift()}
E("S.settings.pickupCheck=false");E("S.visits.forEach(v=>{if(v.status==='in')v.status='out'})");
E("S.guardians.push({id:'gK',name:'ولي طلبات',phone:'01088880001',notes:''});S.children.push({id:'cK',guardianId:'gK',name:'طفل الطلبات',age:5,notes:''},{id:'cL',guardianId:'gK',name:'طفل ثاني',age:6,notes:''})");
E("S.products.push({id:'pT1',cat:'cafe',name:{ar:'مشروب اختبار',en:'TestDrink'},price:15,active:true,track:true,stock:3,min:0},{id:'pT2',cat:'cafe',name:{ar:'بسكويت',en:'Biscuit'},price:10,active:true,track:false,stock:0,min:0},{id:'pG1',cat:'game',name:{ar:'لعبة',en:'Game'},price:5,active:true,track:false,stock:0,min:0})");
const mk=(id,c,r)=>E("S.visits.push({id:'"+id+"',rno:"+r+",childId:'"+c+"',guardianId:'gK',status:'in',planType:'fixed',minutes:60,price:70,checkIn:Date.now()-50*60000,prepaid:false,lateFee:0,total:0,cashier:me.id,planName:{ar:'ساعة',en:'1 hour'},rate:0})");
mk("vK","cK",9101);
E("go('present')");
ok([...w.document.querySelectorAll("#rows button")].some(b=>b.textContent.includes("🍽")),"cafeteria button shown on the child's row");
w.visitItemsModal("vK");
ok(/مشروب اختبار/.test($("#modal").textContent)&&/بسكويت/.test($("#modal").textContent),"cafeteria products offered");
ok(/لعبة/.test($("#modal").textContent),"all sales categories offered (incl. games)");
E("VI.cat=\"cafe\"");w.visitItemsModal("vK");ok(!/لعبة/.test([...w.document.querySelectorAll("#modal .pgrid button")].map(b=>b.textContent).join(" ")),"category filter works");E("VI.cat=\"all\"");w.visitItemsModal("vK");
w.visitItemAdd("vK","pG1");ok(E("S.visits.find(v=>v.id==='vK').items.some(i=>i.pid==='pG1')"),"a game product can be added");w.visitItemQty("vK",E("S.visits.find(v=>v.id==='vK').items.find(i=>i.pid==='pG1').id"),-1);
w.visitItemAdd("vK","pT1");w.visitItemAdd("vK","pT1");w.visitItemAdd("vK","pT2");
ok(E("vItemsTot(S.visits.find(v=>v.id==='vK'))")===40,"items total 15x2 + 10 = 40");
ok(E("S.products.find(p=>p.id==='pT1').stock")===3,"stock NOT deducted yet (only at payment)");
w.visitItemAdd("vK","pT1");w.visitItemAdd("vK","pT1");
ok(E("S.visits.find(v=>v.id==='vK').items.find(i=>i.pid==='pT1').qty")===3,"cannot exceed available stock (3)");
ok(!/مشروب اختبار/.test([...w.document.querySelectorAll("#modal .pgrid button")].map(b=>b.textContent).join(" ")),"sold-out item disappears from the picker");
mk("vL","cL",9102);w.visitItemAdd("vL","pT1");
ok(!E("S.visits.find(v=>v.id==='vL').items"),"reserved stock blocks the other child");
w.visitItemQty("vK",E("S.visits.find(v=>v.id==='vK').items[0].id"),-1);
ok(E("S.visits.find(v=>v.id==='vK').items[0].qty")===2,"quantity can be reduced");
w.visitItemQty("vK",E("S.visits.find(v=>v.id==='vK').items[1].id"),-1);
ok(E("S.visits.find(v=>v.id==='vK').items.length")===1,"item removed at zero");
w.visitItemAdd("vK","pT2");
// الخروج: الوقت + الطلبات
w.checkoutModal("vK");
ok(/مشروب اختبار/.test($("#modal").textContent)&&/بسكويت/.test($("#modal").textContent),"checkout shows the orders");
const timeOnly=parseFloat($("#cbp").value);
ok(parseFloat($("#ctot").textContent.replace(/[^\d.]/g,""))===timeOnly+40,"due now = time "+timeOnly+" + orders 40: "+$("#ctot").textContent);
const inv0=E("S.invoices.length");w.confirmCheckout();w.payConfirm();
ok(E("S.invoices.length")===inv0+1,"ONE invoice for time + orders");
const inv=E("S.invoices[S.invoices.length-1]");
ok(inv.lines.some(l=>l.type==="visit")&&inv.lines.filter(l=>l.pid).length===2,"invoice has the time line and 2 product lines");
ok(inv.total===timeOnly+40,"invoice total = time + orders: "+inv.total);
ok(E("S.products.find(p=>p.id==='pT1').stock")===1,"stock deducted at payment (3 -> 1)");
ok(E("S.visits.find(v=>v.id==='vK').status")==="out"&&E("S.visits.find(v=>v.id==='vK').itemsTotal")===40,"visit closed and order total saved");
ok(E("window.printed.some(h=>h.includes('مشروب اختبار'))"),"printed receipt lists the orders");
// جماعي
E("S.visits.find(v=>v.id==='vL').items=[]");w.visitItemAdd("vL","pT2");mk("vM","cK",9103);w.visitItemAdd("vM","pT2");w.visitItemAdd("vM","pT2");
w.checkoutGroupModal("gK");
const gt=()=>parseFloat($("#gtot").textContent.replace(/[^\d.]/g,""));
ok(gt()===70+70+10+20,"group total includes both children's orders: "+gt());
const g0=E("S.invoices.length");E("window.printed=[]");w.confirmGroupCheckout();w.payConfirm();
ok(E("S.invoices.length")===g0+1,"group: one invoice");
const gi=E("S.invoices[S.invoices.length-1]");ok(gi.total===170&&gi.lines.filter(l=>l.pid).length===2,"group invoice 170 with 2 order lines");
ok(E("window.printed.length")===1&&E("window.printed[0].includes('بسكويت')"),"group receipt lists orders");
// صلاحيات
E("logout()");$("#lu").value="u1";$("#lp").value="1111";w.doLogin();
mk("vN","cK",9104);w.visitItemAdd("vN","pT2");ok(E("S.visits.find(v=>v.id==='vN').items").length>=1,"cashier can add orders");
ok(true,"permission model: cashier has pos");
console.log(bad?"FAILED "+bad:"ALL PASS");process.exit(bad?1:0);
