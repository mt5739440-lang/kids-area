const {JSDOM}=require("jsdom");const fs=require("fs"),crypto=require("crypto");
const html=fs.readFileSync(process.argv[2],"utf8");
const dom=new JSDOM(html,{runScripts:"dangerously",url:"http://localhost/",pretendToBeVisual:true,beforeParse(w){w.confirm=()=>true;w.print=()=>{}}});
const w=dom.window,$=s=>w.document.querySelector(s),E=c=>w.eval(c);
w.eval("window.printHTML=function(){};window.printA4=function(){};");
let bad=0;const ok=(c,m)=>{console.log((c?"PASS ":"FAIL ")+m);if(!c)bad++};
const login=(id,pin)=>{if(E("me"))w.logout();$("#lu").value=id;$("#lp").value=pin;w.doLogin()};
// sha256 correctness vs node
const vec=["","abc","kids|x|1111","نظام كيدز","a".repeat(55),"a".repeat(56),"a".repeat(64),"a".repeat(1000)];
ok(vec.every(v=>E("sha256")(v)===crypto.createHash("sha256").update(v,"utf8").digest("hex")),"sha256 matches node crypto on 8 vectors incl. Arabic and padding edges");
ok(E("DB.shared.users.every(u=>u.pin===undefined&&u.pinHash&&u.pinSalt)"),"no plaintext PIN left in users");
ok(!/"pin":"/.test(E("JSON.stringify(DB)")),"serialised database contains no plaintext pin");
ok(!/"pin":"/.test(E("localStorage.getItem('ls_db2')")||""),"saved localStorage has no plaintext pin");
login("u1","1111");ok(!!E("me")&&E("me.id")==="u1","login with correct PIN");
w.logout();$("#lu").value="u1";$("#lp").value="1112";w.doLogin();ok(!E("me"),"wrong PIN rejected");
// numbers typed in Arabic digits still work
login("u2","٢٢٢٢");ok(E("me&&me.id")==="u2","Arabic-digit PIN accepted");
// change a PIN, keep blank
login("u3","3333");w.go("settings");
w.userModal("u1");ok($("#up").value==="","edit form does not reveal the PIN");
$("#un").value="كاشير 1 معدل";w.saveUser("u1");ok(E("S.users.find(u=>u.id==='u1').name")==="كاشير 1 معدل","edit with blank PIN keeps old PIN");
login("u1","1111");ok(E("me&&me.id")==="u1","old PIN still works after blank edit");
login("u3","3333");
w.userModal("u1");$("#up").value="9090";w.saveUser("u1");
login("u1","1111");ok(!E("me"),"old PIN no longer works after change");
login("u1","9090");ok(E("me&&me.id")==="u1","new PIN works");
// duplicate PIN blocked
login("u3","3333");w.userModal("u2");$("#up").value="9090";w.saveUser("u2");
ok(E("pinOk(S.users.find(u=>u.id==='u2'),'2222')"),"duplicate PIN rejected (u2 unchanged)");
// new user
w.userModal("");$("#un").value="موظف جديد";$("#up").value="4321";w.saveUser("");
const nu=E("S.users.find(u=>u.name==='موظف جديد')");ok(nu&&nu.pinHash&&nu.pin===undefined,"new user stored hashed");
login(nu.id,"4321");ok(E("me&&me.name")==="موظف جديد","new user can log in");
// approval by PIN
login("u1","9090");
ok(E("S.users.some(x=>x.active&&pinOk(x,'2222')&&PERMS[x.role].includes('approve'))"),"approval lookup works with hashed PIN");
// legacy plaintext data gets migrated on next save
E("DB.shared.users.push({id:'old1',name:'قديم',pin:'7777',role:'cashier',active:true,branch:'b1'})");
login("u3","3333");E("save()");
ok(E("DB.shared.users.find(u=>u.id==='old1').pin===undefined&&!!DB.shared.users.find(u=>u.id==='old1').pinHash"),"legacy plaintext user migrated at next save");
login("old1","7777");ok(E("me&&me.id")==="old1","migrated legacy user logs in with old PIN");
// readiness card: demo PINs flagged until changed
login("u4","4444");w.eval("views.backupBody()");ok(/✖ الرموز السرية التجريبية/.test($("#lrcard").textContent),"readiness still flags demo PINs");
console.log(bad?"FAILED "+bad:"ALL PASS");process.exit(bad?1:0);
