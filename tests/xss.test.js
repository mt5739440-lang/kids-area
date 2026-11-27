// حقن HTML/JS عبر الأسماء والملاحظات: لا يجب أن ينفذ شيء. node tests/xss.test.js <html بمستخدمين تجريبيين>
const {JSDOM}=require("jsdom"),fs=require("fs");
let bad=0;const ok=(c,m)=>{console.log((c?"PASS ":"FAIL ")+m);if(!c)bad++};
const dom=new JSDOM(fs.readFileSync(process.argv[2],"utf8"),{runScripts:"dangerously",url:"http://localhost/",pretendToBeVisual:true,beforeParse(w){w.confirm=()=>true;w.print=()=>{};w.__x=0}});
const w=dom.window,$=s=>w.document.querySelector(s),E=c=>w.eval(c),errs=[];w.addEventListener("error",e=>errs.push(e.message));
const P=['<img src=x onerror="window.__x=1">','"><svg onload="window.__x=2">',"');window.__x=3;//",'<script>window.__x=4</script>','" onfocus="window.__x=5" autofocus x="'];
(async()=>{
 $("#lu").value="u4";$("#lp").value="4444";w.doLogin();
 let i=0;for(const p of P){i++;
  E(`S.guardians.push({id:'gx${i}',name:${JSON.stringify(p)},phone:'0100000000${i}',notes:${JSON.stringify(p)}});S.children.push({id:'cx${i}',guardianId:'gx${i}',name:${JSON.stringify(p)},age:5,notes:${JSON.stringify(p)}});`);
  E(`S.visits.push({id:'vx${i}',no:${800+i},childId:'cx${i}',guardianId:'gx${i}',status:'in',planId:'p60',planType:'fixed',planName:{ar:${JSON.stringify(p)},en:'x'},minutes:60,price:70,rate:0,checkIn:Date.now(),checkOut:null,prepaid:false,invoiceId:null,cashier:'u1',note:${JSON.stringify(p)},lateMin:0,suggestedFee:0,lateFee:0,lateNote:'',total:0})`);
  E(`S.users.push({id:'ux${i}',name:${JSON.stringify(p)},pinHash:'x',pinSalt:'y',role:'cashier',active:false,branch:'b1'})`);
  E(`S.settings.venue=${JSON.stringify(p)}`);
 }
 E("save()");
 for(const v of ["present","entry","guardians","history","invoices","pos","shift","hr","parties","expenses","settings","audit","reports"]){
  try{E("go('"+v+"')");}catch(e){}
  const bads=[...w.document.querySelectorAll("#app *")].filter(n=>[...n.attributes].some(a=>/^on/i.test(a.name)&&/__x/.test(a.value))||(n.tagName==="IMG"&&n.getAttribute("onerror"))||(n.tagName==="SCRIPT"&&/__x/.test(n.textContent)));
  ok(bads.length===0,"view "+v+": no injected handler/script ("+bads.length+")");
 }
 E("go('entry')");E("entrySearch('0100')");ok(![...w.document.querySelectorAll('#app *')].some(n=>n.getAttribute('onerror')||/__x/.test([...n.attributes].map(a=>a.value).join(''))),'search results escaped');E("guardianModal('gx1')");ok(!/onfocus|onerror/.test([...$("#modal").querySelectorAll("*")].map(n=>[...n.attributes].map(a=>a.name).join(" ")).join(" ")),"guardian modal has no injected attributes");
 ok(E("window.__x")===0,"nothing executed");
 ok(errs.length===0,"no script errors "+errs.join("|"));
 console.log(bad?"FAILED "+bad:"ALL PASS");process.exit(bad?1:0);
})().catch(e=>{console.log("CRASH",e);process.exit(2)});
