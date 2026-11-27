// يشغّل كل الاختبارات: node tests/run-all.js   (يحتاج: npm ci)
const {spawnSync}=require("child_process"),fs=require("fs"),os=require("os"),path=require("path");
const d=fs.mkdtempSync(path.join(os.tmpdir(),"ka-")),all=path.join(d,"all.html"),nou=path.join(d,"nouser.html"),T=__dirname;
const run=(a)=>spawnSync("node",a,{encoding:"utf8",timeout:240000});
run([path.join(T,"build.js"),all]);run([path.join(T,"build.js"),nou,"--no-users"]);
let fail=0;
for(const f of fs.readdirSync(T).filter(x=>x.endsWith(".test.js")).sort()){
 if(f==="import-layout.test.js")continue;                       // يحتاج ملفًا خارجيًا
 const arg=f==="setup.test.js"?[nou]:f==="import.test.js"?[all,path.join(T,"fixtures")]:[all];
 const r=run([path.join(T,f),...arg]),out=(r.stdout||"")+(r.stderr||""),bad=r.status!==0||/FAIL|CRASH/.test(out);
 console.log((bad?"✖ ":"✔ ")+f);if(bad){fail++;console.log(out.split("\n").filter(l=>/FAIL|CRASH|Error/.test(l)).slice(0,5).join("\n"))}
}
console.log(fail?"FAILED: "+fail:"ALL TEST FILES PASS");process.exit(fail?1:0);
