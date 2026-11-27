// ترتيب وفلتر الفواتير. node tests/invoices-filter.test.js <html بمستخدمين تجريبيين>
const {JSDOM}=require("jsdom"),fs=require("fs");
const dom=new JSDOM(fs.readFileSync(process.argv[2],"utf8"),{runScripts:"dangerously",url:"http://localhost/",pretendToBeVisual:true,beforeParse(w){w.confirm=()=>true;w.print=()=>{}}});
const w=dom.window,$=s=>w.document.querySelector(s),E=c=>w.eval(c);let bad=0;const ok=(c,m)=>{console.log((c?"PASS ":"FAIL ")+m);if(!c)bad++};
$("#lu").value="u3";$("#lp").value="3333";w.doLogin();
E("S.invoices.length=0");
// فواتير اليوم بأوقات مختلفة (بتوقيت التطبيق) + واحدة أمس
const base=E("new Date(dayKey(Date.now())+'T00:00:00Z').getTime()");
const mk=(no,h,m,total,extra)=>E("S.invoices.push(Object.assign({id:'i"+no+"',no:"+no+",createdAt:"+(E("(function(){const d=dayKey(Date.now());let t=new Date(d+'T"+String(h).padStart(2,'0')+":"+String(m).padStart(2,'0')+":00Z').getTime();for(let k=0;k<3;k++){const g=tKey(t);const want='"+String(h).padStart(2,'0')+":"+String(m).padStart(2,'0')+"';const [gh,gm]=g.split(':').map(Number);let df=((+'"+h+"'-gh)*60+(+'"+m+"'-gm));df=((df+720)%1440+1440)%1440-720;t+=df*60000}return t})()"))+",cashier:'u3',lines:[],disc:{amount:0},payments:[{m:\"cash\",a:"+total+"}],total:"+total+",paid:"+total+"},"+(extra||"{}")+"))");
mk(101,9,0,50);mk(102,12,30,200);mk(103,15,45,20,"{void:true}");mk(104,18,10,120);mk(105,22,5,80);
E("go('invoices')");
const nos=()=>[...w.document.querySelectorAll("#view tbody tr")].map(r=>r.children[0].textContent).filter(x=>/^\d+$/.test(x)).map(Number);
ok(nos().join()==="105,104,103,102,101","default: newest first, all of today: "+nos());
w.invSet("sort","noA");ok(nos().join()==="101,102,103,104,105","sort by number ascending");
w.invSet("sort","totD");ok(nos()[0]===102,"sort by amount highest first: "+nos());
w.invSet("sort","totA");ok(nos()[0]===103,"sort by amount lowest first");
w.invSet("sort","old");ok(nos().join()==="101,102,103,104,105","oldest first");
w.invSet("sort","new");
w.invSet("no","102");ok(nos().join()==="102","single number");
w.invSet("no","101-103");ok(nos().join()==="103,102,101","number range");
w.invSet("no","101,105");ok(nos().join()==="105,101","number list");
w.invSet("no","١٠٤");ok(nos().join()==="104","Arabic-Indic digits accepted");
w.invSet("no","");
w.invSet("tf","12:00");w.invSet("tt","19:00");ok(nos().join()==="104,103,102","time window 12:00-19:00: "+nos());
w.invSet("tf","20:00");w.invSet("tt","");ok(nos().join()==="105","from 20:00 only");
w.invSet("tf","");w.invSet("tt","10:00");ok(nos().join()==="101","until 10:00 only");
w.invSet("tf","");w.invSet("tt","");
w.invSet("st","void");ok(nos().join()==="103","status voided");
w.invSet("st","paid");ok(nos().join()==="105,104,102,101","status paid (no voided)");
w.invSet("st","all");
ok(/450/.test($(".bar .muted").textContent),"summary total excludes voided (450): "+$(".bar .muted").textContent);
// نطاق تواريخ
E("S.invoices.push({id:'iOld',no:90,createdAt:Date.now()-86400000*2,cashier:'u3',lines:[],disc:{amount:0},payments:[{m:'cash',a:10}],total:10,paid:10})");
w.invReset();ok(!nos().includes(90),"reset = today only");
const d0=E("dayKey(Date.now()-86400000*3)"),d1=E("dayKey(Date.now())");
w.invSet("from",d0);w.invSet("to",d1);ok(nos().includes(90)&&nos().includes(105),"date range includes older days");
w.invSet("from",d1);w.invSet("to",d0);ok(nos().includes(90),"reversed dates are handled");
console.log(bad?"FAILED "+bad:"ALL PASSED");process.exit(bad?1:0);
