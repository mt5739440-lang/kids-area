// حذف بيانات عميل نهائيًا. node tests/erase.test.js <html بمستخدمين تجريبيين>
const {JSDOM}=require("jsdom"),fs=require("fs");
let bad=0;const ok=(c,m)=>{console.log((c?"PASS ":"FAIL ")+m);if(!c)bad++};
const dom=new JSDOM(fs.readFileSync(process.argv[2],"utf8"),{runScripts:"dangerously",url:"http://localhost/",pretendToBeVisual:true,beforeParse(w){w.confirm=()=>true;w.print=()=>{}}});
const w=dom.window,$=s=>w.document.querySelector(s),E=c=>w.eval(c),errs=[];w.addEventListener("error",e=>errs.push(e.message));
const login=(id,pin)=>{if(E("me"))w.logout();$("#lu").value=id;$("#lp").value=pin;w.doLogin()};
(async()=>{
 login("u4","4444");
 // مستهدف: ولي أمر بطفل، زيارة منتهية، فاتورة باسم الطفل، حجز، وسجل عمليات بالاسم
 E("S.guardians.push({id:'gX',name:'منى الشاهد',phone:'01055550001',morePhones:['01055550002'],notes:'حساسية'});S.children.push({id:'kX',guardianId:'gX',name:'زيدان',age:6,notes:''});S.children.push({id:'kY',guardianId:'gX',name:'تالا',age:4,notes:''})");
 E("S.visits.push({id:'vX',no:901,childId:'kX',guardianId:'gX',status:'out',planName:{ar:'ساعة',en:'h'},note:'ولي الأمر منى الشاهد',checkIn:1,checkOut:2,total:70})");
 E("S.invoices.push({id:'iX',no:901,cashier:'u1',createdAt:1,shift:'sh0',lines:[{type:'visit',name:'ساعة – زيدان',qty:1,price:70,total:70,ret:0}],sub:70,total:70,payments:[{m:'cash',a:70}],gid:'gX',visitIds:['vX'],void:null})");
 E("S.bookings.push({id:'bkX',no:901,name:'منى الشاهد',phone:'01055550001',gid:'gX',child:'زيدان',age:6,date:'2026-12-01',status:'confirmed'})");
 E("S.audit.push({ts:1,user:'x',action:'check-in',details:'زيدان / منى الشاهد 01055550001'})");
 E("S.subs.push({id:'sbX',gid:'gX',status:'active',remaining:5,expiresAt:Date.now()+1e9,usage:[]});S.balances['gX']=50");
 E("save()");E("SY.on=true;syDiff()");
 const invBefore=E("S.invoices.length"),total=E("S.invoices.find(i=>i.id==='iX').total");
 // صلاحيات: المشرف لا يرى زر الحذف ولا يستطيع التنفيذ
 login("u2","2222");w.guardianModal("gX");ok(!/guardianErase/.test($("#modal").innerHTML),"supervisor does not get the erase button");
 w.guardianErase("gX");ok(!!E("S.guardians.find(g=>g.id==='gX')"),"supervisor cannot erase (no permission)");
 login("u4","4444");w.guardianModal("gX");ok(/guardianErase/.test($("#modal").innerHTML),"admin gets the erase button");
 // لا حذف والطفل داخل المكان
 E("S.visits.push({id:'vIn',no:902,childId:'kY',guardianId:'gX',status:'in',planName:{ar:'ساعة',en:'h'},checkIn:Date.now()})");
 w.guardianErase("gX");ok(!!E("S.guardians.find(g=>g.id==='gX')"),"refused while a child is checked in");
 E("S.visits=S.visits.filter(v=>v.id!=='vIn')");
 w.guardianErase("gX");
 const all=JSON.stringify(E("DB"));
 ok(!E("S.guardians.find(g=>g.id==='gX')")&&E("S.children.filter(c=>c.guardianId==='gX').length")===0,"guardian and children removed");
 ok(!E("S.subs.find(s=>s.gid==='gX')")&&E("S.balances['gX']")===undefined,"package and balance removed");
 const lk=(all.match(/.{40}(منى الشاهد|زيدان|تالا|01055550001|01055550002).{20}/g)||[]);if(lk.length)console.log("LEAK",lk.slice(0,4));ok(!/منى الشاهد|زيدان|تالا|01055550001|01055550002/.test(all),"name, children names and phones appear nowhere in stored data");
 ok(E("S.invoices.length")===invBefore&&E("S.invoices.find(i=>i.id==='iX').total")===total,"invoice and amount kept for accounting");
 ok(E("S.invoices.find(i=>i.id==='iX').lines[0].name")==="ساعة – "+E("t('erasedName')"),"invoice line anonymised");
 ok(E("S.bookings.find(b=>b.id==='bkX').phone")==="","booking phone cleared");
 ok(E("S.audit.some(a=>a.action==='erase customer'&&!/منى/.test(a.details))"),"erase action logged without personal data");
 ok(E("G('gX').name")===E("t('erasedName')")&&E("C('kX').name")===E("t('erasedName')"),"old visits show 'erased customer' without crashing");
 ok(E("SYQQ")!==undefined,"sync diff works after erase");E("syDiff()");
 const q=E("Object.values(SYQQ).filter(x=>x.deleted&&x.collection==='guardians'&&x.id==='gX').length");ok(q===1,"guardian deletion queued as tombstone for sync");
 const tomb=E("JSON.stringify(Object.values(SYQQ).filter(x=>x.deleted))");ok(!/منى|01055550001/.test(tomb),"tombstones carry no personal data");
 for(const v of ["present","guardians","invoices","history"]){try{E("go('"+v+"')");}catch(e){ok(false,"view "+v+" crashed: "+e.message)}}
 ok(errs.length===0,"no script errors "+errs.join("|"));
 console.log(bad?"FAILED "+bad:"ALL PASS");process.exit(bad?1:0);
})().catch(e=>{console.log("CRASH",e);process.exit(2)});
