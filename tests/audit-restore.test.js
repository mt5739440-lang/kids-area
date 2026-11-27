// سجل الأحداث الأمنية (بلا أسرار) + نسخة احتياطية واستعادتها. node tests/audit-restore.test.js <html بمستخدمين تجريبيين>
const {JSDOM}=require("jsdom"),fs=require("fs");
let bad=0;const ok=(c,m)=>{console.log((c?"PASS ":"FAIL ")+m);if(!c)bad++};
const dom=new JSDOM(fs.readFileSync(process.argv[2],"utf8"),{runScripts:"dangerously",url:"http://localhost/",pretendToBeVisual:true,beforeParse(w){w.confirm=()=>true;w.print=()=>{};w.downloadBlob=()=>{}}});
const w=dom.window,$=s=>w.document.querySelector(s),E=c=>w.eval(c),errs=[];w.addEventListener("error",e=>errs.push(e.message));
(async()=>{
 $("#lu").value="u4";$("#lp").value="4444";w.doLogin();
 // تغيير صلاحية + PIN لمستخدم، ثم فحص السجل
 E("go('settings')");E("S.users.find(u=>u.id==='u1')");
 E("userModal&&userModal('u1')");
 $("#un").value="كاشير 1";$("#up").value="7391";$("#ur").value="supervisor";w.saveUser("u1");
 const last=E("S.audit.filter(a=>a.action==='edit user').pop().details");
 ok(/role cashier→supervisor/.test(last)&&/PIN changed/.test(last),"role change and PIN change logged: "+last);
 ok(!/7391/.test(JSON.stringify(E("S.audit"))),"the PIN value itself never appears in the log");
 ok(!/4444|7391|pinHash|pinSalt/.test(E("JSON.stringify(S.audit)")),"no PIN or hash anywhere in the audit log");
 // نسخة واستعادة
 E("S.guardians.push({id:'gB',name:'عميل نسخة',phone:'01000000009',notes:''});save()");
 w.URL.createObjectURL=()=>"blob:x";w.URL.revokeObjectURL=()=>{};E("bkDownload()");const txt=E("JSON.stringify(DB)");
 E("S.guardians=S.guardians.filter(g=>g.id!=='gB');save()");ok(!E("S.guardians.find(g=>g.id==='gB')"),"data lost after simulated failure");
 ok(E("restoreDB("+JSON.stringify(txt)+",'test')")===true,"restore accepted");
 ok(!!E("S.guardians.find(g=>g.id==='gB')"),"data back after restoring the backup");
 ok(E("restoreDB('{bad json',\"x\")")===false&&E("restoreDB('{}',\"x\")")===false,"corrupt or foreign file refused");
 ok(E("getBackups().some(b=>b.kind==='pre')"),"a safety copy is taken before every restore");
 ok(errs.length===0,"no script errors "+errs.join("|"));
 console.log(bad?"FAILED "+bad:"ALL PASS");process.exit(bad?1:0);
})().catch(e=>{console.log("CRASH",e);process.exit(2)});
