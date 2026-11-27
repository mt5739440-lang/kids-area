const {JSDOM}=require("jsdom");const fs=require("fs"),zlib=require("zlib");
const html=fs.readFileSync(process.argv[2],"utf8"),file=process.argv[3],expect=JSON.parse(process.argv[4]||"null");
const dom=new JSDOM(html,{runScripts:"dangerously",url:"http://localhost/",pretendToBeVisual:true,beforeParse(w){w.confirm=()=>true;w.print=()=>{};w.__inflate=async b=>new Uint8Array(zlib.inflateRawSync(Buffer.from(b)));w.TextDecoder=TextDecoder}});
const w=dom.window,$=s=>w.document.querySelector(s),E=c=>w.eval(c);
w.eval("window.printHTML=function(){};window.printA4=function(){};");
let bad=0;const ok=(c,m)=>{console.log((c?"PASS ":"FAIL ")+m);if(!c)bad++};
$("#lu").value="u3";$("#lp").value="3333";w.doLogin();
const buf=fs.readFileSync(file);
(async()=>{
 E("S.guardians=[];S.children=[]");
 await w.imFile({files:[{name:"x.xlsx",arrayBuffer:async()=>buf.buffer.slice(buf.byteOffset,buf.byteOffset+buf.byteLength)}],value:""});
 const m=E("IM.map");ok(m.g===1&&m.p===4&&m.c===2&&m.c2===3&&m.n===5,"headers with extra spaces mapped: "+JSON.stringify(m));
 const p=E("IM.plan");console.log("PLAN",JSON.stringify({rows:p.rows,newG:p.nNewG,newC:p.newC,bad:p.bad,dupC:p.dupC,noAge:p.noAge}));
 if(expect){ok(p.nNewG===expect.g&&p.newC===expect.c&&p.bad===0,"counts match expected "+JSON.stringify(expect))}
 w.imGo();
 ok(E("S.guardians.every(g=>/^01\\d{9}$/.test(g.phone))"),"every phone restored to 11 digits starting 01");
 ok(E("S.guardians.every(g=>g.name===g.name.trim()&&!/\\s{2,}/.test(g.name))"),"guardian names trimmed");
 ok(E("S.children.every(c=>c.name===c.name.trim()&&c.name.indexOf('+')<0)"),"child names split on + and trimmed");
 ok(E("S.children.every(c=>S.guardians.some(g=>g.id===c.guardianId))"),"every child linked to a guardian");
 console.log(bad?"FAILED":"ALL PASS");process.exit(bad?1:0);
})().catch(e=>{console.log("CRASH",e);process.exit(2)});
