const {JSDOM}=require("jsdom");const fs=require("fs");
const html=fs.readFileSync(process.argv[2],"utf8");
const dom=new JSDOM(html,{runScripts:"dangerously",url:"http://localhost/",pretendToBeVisual:true,beforeParse(w){w.confirm=()=>true;w.print=()=>{}}});
const w=dom.window,$=s=>w.document.querySelector(s),E=c=>w.eval(c);
w.eval("window.printHTML=function(){};window.printA4=function(){};");
let bad=0;const ok=(c,m)=>{console.log((c?"PASS ":"FAIL ")+m);if(!c)bad++};
$("#lu").value="u1";$("#lp").value="1111";w.doLogin();
const v=E("S.visits.find(x=>x.status==='in'&&x.planType==='fixed'&&!x.prepaid)");
ok(!!v,"found a fixed-plan unpaid visit inside");
const id=v.id,min=v.minutes;
// not late: 10 minutes before the end
E("S.visits.find(x=>x.id==='"+id+"').checkIn=Date.now()-"+Math.max(1,min-10)+"*60000");
w.checkoutModal(id);
ok(!!$("#cbp")&&!$("#cfee"),"time not over: price edit shown, late fee hidden");
// late: 20 minutes after the end
E("S.visits.find(x=>x.id==='"+id+"').checkIn=Date.now()-("+min+"+20)*60000");
w.checkoutModal(id);
ok(!$("#cbp")&&!!$("#cfee"),"time over: late fee shown, price edit hidden");
ok(parseFloat($("#cfee").value)>0,"suggested late fee > 0 after grace");
const tot=$("#ctot").textContent;ok(/\d/.test(tot),"total still computed: "+tot);
console.log(bad?"FAILED":"ALL PASS");process.exit(bad?1:0);
