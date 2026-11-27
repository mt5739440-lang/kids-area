const {JSDOM}=require("jsdom");const fs=require("fs");
const html=fs.readFileSync(process.argv[2],"utf8");
const dom=new JSDOM(html,{runScripts:"dangerously",url:"http://localhost/",pretendToBeVisual:true,beforeParse(w){w.confirm=()=>true;w.print=()=>{}}});
const w=dom.window,$=s=>w.document.querySelector(s),E=c=>w.eval(c);
w.eval("window.printHTML=function(){};window.printA4=function(){};");
let bad=0;const ok=(c,m)=>{console.log((c?"PASS ":"FAIL ")+m);if(!c)bad++};
const login=(id,pin)=>{if(E("me"))w.logout();$("#lu").value=id;$("#lp").value=pin;w.doLogin()};
const toasts=[];E("(()=>{const o=toast;toast=function(m){window.__t=m;return o.apply(this,arguments)}})()");
// close any open demo shift for a clean start
login("u3","3333");
E("S.shifts.forEach(s=>{if(s.status==='open'){s.status='closed';s.closedAt=Date.now();s.expected=0;s.counted=0;s.diff=0}})");E("save()");
login("u1","1111");
ok(/المصروفات/.test($("nav").textContent),"cashier sees Expenses tab");
w.go("expenses");ok(/افتح وردية/.test($("#view").textContent),"without an open shift the form is replaced by a notice");
w.go("shift");$("#oc").value="100";w.openShift();
w.go("expenses");ok(!!$("#xa"),"form shown when a shift is open");
const exp0=E("shiftStats(curShift()).expected");
$("#xc").value="clean";$("#xa").value="30";$("#xn").value="منظفات";w.expAdd();
ok(E("S.expenses.length")===1&&E("S.expenses[0].amount")===30&&E("S.expenses[0].shift")===E("curShift().id"),"expense saved against the open shift");
ok(E("shiftStats(curShift()).expected")===exp0-30,"expected cash drops by the expense (was "+exp0+")");
ok(E("shiftStats(curShift()).exp")===30,"shiftStats exposes exp");
ok(/منظفات/.test($("#view").textContent)&&/نظافة/.test($("#view").textContent),"list shows the expense and category");
// validation
$("#xa").value="0";$("#xn").value="x";w.expAdd();ok(E("S.expenses.length")===1,"zero amount rejected");
$("#xa").value="5";$("#xn").value="";w.expAdd();ok(E("S.expenses.length")===1,"empty description rejected");
ok(!/expVoidAsk/.test($("#view").innerHTML),"cashier has no cancel button");
// shift screen + report text
w.go("shift");ok(/مصروفات الوردية/.test($("#view").textContent),"shift screen shows expenses");
ok(/مصروفات الوردية/.test(E("shiftReport(curShift())")),"shift report prints expenses");
// supervisor voids
login("u2","2222");w.go("expenses");ok(/expVoidAsk/.test($("#view").innerHTML),"supervisor sees cancel button");
const id=E("S.expenses[0].id");w.expVoidAsk(id);$("#xr").value="خطأ إدخال";w.expVoidDo(id);
ok(!!E("S.expenses[0].void")&&E("shiftStats(curShift()).expected")===exp0,"voided expense restores expected cash");
// report
w.go("reports");E("R.tab='exp'");w.render();
ok(/المصروفات/.test($("#view").textContent),"reports has Expenses tab for supervisor");
const r=E("RT.exp('2000-01-01','2100-01-01')");ok(r.sheets.length===3,"expense report has 3 sheets");
ok(r.sheets[0].rows[r.sheets[0].rows.length-1][1]===0,"voided expense not counted in report total");
// add one more, close shift, then void rules
login("u1","1111");w.go("expenses");$("#xc").value="maint";$("#xa").value="50";$("#xn").value="سباك";w.expAdd();
w.go("shift");$("#cc").value=String(E("shiftStats(curShift()).expected"));w.closeShift();
const closed=E("S.shifts.filter(s=>s.status==='closed').sort((a,b)=>b.no-a.no)[0]");
ok(closed.expected===closed.counted&&closed.diff===0,"closing shift uses expected after expenses");
login("u2","2222");w.go("expenses");
const e2=E("S.expenses[1].id");w.expVoidAsk(e2);ok(!$("#xr")&&!E("S.expenses[1].void"),"supervisor cannot cancel after the shift closed");
login("u3","3333");w.go("expenses");w.expVoidAsk(e2);ok(!!$("#xr"),"ops manager can cancel after close");
w.closeModal();
// delete users
w.go("settings");E("window._st='users'");w.render();
ok(/userDelete/.test($("#view").innerHTML),"users table has delete buttons");
w.userDelete("u3");ok(E("S.users.some(u=>u.id==='u3')"),"cannot delete yourself");
w.userDelete("u1");ok(E("S.users.some(u=>u.id==='u1')"),"user with shifts/expenses cannot be deleted");
E("S.users.push({id:'ux',name:'مؤقت',role:'cashier',active:true,branch:'b1',pinSalt:'s',pinHash:'h'})");
w.userDelete("ux");ok(!E("S.users.some(u=>u.id==='ux')"),"user without records is deleted");
ok(E("S.users.find(u=>u.id==='u4').role")==="admin","u4 is the admin account");
w.userDelete("u4");ok(E("S.users.some(u=>u.id==='u4')"),"ops manager cannot delete the admin account");
// last management account guard
E("S.users.forEach(u=>{if(u.role==='admin')u.active=false})");
const mg=E("S.users.filter(u=>u.active&&(u.role==='ops'||u.role==='admin')).length");
ok(mg===1,"only one management account left (ops)");
E("S.users.push({id:'uy',name:'مدير ثان',role:'ops',active:true,branch:'all',pinSalt:'s',pinHash:'h'})");
w.userDelete("uy");ok(!E("S.users.some(u=>u.id==='uy')"),"can delete extra manager when another remains");
// expenses are saved per branch & survive reload of state
E("save()");ok(E("DB.byBranch[CUR].expenses.length")===2,"expenses stored in the branch state");
process.exit(bad?1:0);
