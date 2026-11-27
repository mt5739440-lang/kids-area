const {JSDOM}=require("jsdom");const fs=require("fs");
const html=fs.readFileSync(process.argv[2],"utf8");
const dom=new JSDOM(html,{runScripts:"dangerously",url:"http://localhost/",pretendToBeVisual:true,beforeParse(w){w.confirm=()=>true;w.print=()=>{}}});
const w=dom.window,$=s=>w.document.querySelector(s),E=c=>w.eval(c);
w.eval("window.printHTML=function(){};window.printA4=function(){};");
let bad=0;const ok=(c,m)=>{console.log((c?"PASS ":"FAIL ")+m);if(!c)bad++};
const login=(id,pin)=>{if(E("me"))w.logout();$("#lu").value=id;$("#lp").value=pin;w.doLogin()};
login("u3","3333");
// employee modal has the day-off field and saves it
w.go("hr");E("HR.tab='employees'");w.render();
w.empModal();ok(!!$("#en9"),"employee form has weekly-day-off select");
$("#en1").value="موظف راحة";$("#en4").value="100";$("#en5").value="2026-01-01";$("#en9").value="5";w.saveEmp("");
const emp=E("S.employees.find(e=>e.name==='موظف راحة')");
ok(emp&&emp.offDay===5,"offDay saved as 5 (Friday)");
const id=emp.id;
E(`S.attendance={};S.leaves=[];S.roster={}`);
// Nov 2026 Fridays: 6,13,20,27
ok(E(`isOffDay(S.employees.find(e=>e.id==='${id}'),'2026-11-06')`)===true,"Friday 2026-11-06 is off day");
ok(E(`isOffDay(S.employees.find(e=>e.id==='${id}'),'2026-11-07')`)===false,"Saturday is not off day");
// payroll: present on 1 day only
E(`S.attendance['2026-11-01']={'${id}':{status:'present',in:'11:00',out:'20:00'}}`);
let l=E(`payCalc('2026-11',S.employees.find(e=>e.id==='${id}'))`);
ok(l.present===1&&l.offPaid===4&&l.gross===500,"1 present + 4 paid Fridays = 500 (got "+l.gross+")");
// present on an off day: counted once as present, not also as paid off
E(`S.attendance['2026-11-06']={'${id}':{status:'present',in:'11:00',out:'20:00'}}`);
l=E(`payCalc('2026-11',S.employees.find(e=>e.id==='${id}'))`);
ok(l.present===2&&l.offPaid===3&&l.gross===500,"working on an off day is not double paid");
// unpaid leave over an off day: not paid
E(`S.leaves=[{id:'lv1',emp:'${id}',from:'2026-11-12',to:'2026-11-14',type:'unpaid'}]`);
l=E(`payCalc('2026-11',S.employees.find(e=>e.id==='${id}'))`);
ok(l.offPaid===2&&l.gross===400,"unpaid leave over an off day removes that paid day (got "+l.offPaid+")");
// absent on a day is not turned into off; hire date after month start
E(`S.leaves=[];S.employees.find(e=>e.id==='${id}').hireDate='2026-11-15'`);
l=E(`payCalc('2026-11',S.employees.find(e=>e.id==='${id}'))`);
ok(l.offPaid===2,"Fridays before hire date are not paid (got "+l.offPaid+")");
E(`S.employees.find(e=>e.id==='${id}').hireDate='2026-01-01'`);
// roster override: a shift on that Friday means working day
const sh=E("S.settings.shifts[0].id");
E(`S.roster['2026-11-20']={'${id}':'${sh}'}`);
l=E(`payCalc('2026-11',S.employees.find(e=>e.id==='${id}'))`);
ok(l.offPaid===2&&E(`isOffDay(S.employees.find(e=>e.id==='${id}'),'2026-11-20')`)===false,"explicit shift on a Friday overrides the day off (unrecorded work day not paid)");
// explicit roster 'off' on a non-Friday counts as off
E(`S.roster['2026-11-03']={'${id}':'off'}`);
ok(E(`isOffDay(S.employees.find(e=>e.id==='${id}'),'2026-11-03')`)===true,"explicit off in roster counts");
// views render without error
E(`HR.date='2026-11-06';HR.tab='attendance'`);w.render();
ok(/راحة/.test($("#hrbody").textContent),"attendance shows day off for Friday");
E(`HR.tab='roster';HR.week=weekStart('2026-11-06')`);w.render();
ok($("#hrbody").innerHTML.includes('value="off" selected'),"roster pre-selects off for default off days");
E(`HR.month='2026-11';HR.tab='payroll'`);w.render();
ok(/راحة أسبوعية/.test($("#hrbody").textContent),"payroll table has weekly-off column");
w.payPrintSheet();w.paySlip(id);ok(true,"print sheet and slip run");
// rosterFill skips default off days
E(`S.roster={};S.employees.find(e=>e.id==='${id}').shift='${sh}';HR.week='2026-11-02'`);w.rosterFill();
ok(!(E("S.roster['2026-11-06']")||{})[id]&&(E("S.roster['2026-11-05']")||{})[id]===sh,"rosterFill leaves the off day empty and fills others");
process.exit(bad?1:0);
