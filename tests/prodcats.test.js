// تصنيفات منتجات إضافية. node tests/prodcats.test.js <html>
const {JSDOM}=require("jsdom"),fs=require("fs");
const dom=new JSDOM(fs.readFileSync(process.argv[2],"utf8"),{runScripts:"dangerously",url:"http://localhost/",pretendToBeVisual:true,beforeParse(w){w.confirm=()=>true;w.print=()=>{}}});
const w=dom.window,$=s=>w.document.querySelector(s),E=c=>w.eval(c);let bad=0;const ok=(c,m)=>{console.log((c?"PASS ":"FAIL ")+m);if(!c)bad++};
$("#lu").value="u4";$("#lp").value="4444";w.doLogin();
E("go('shift')");if($("#oc")){$("#oc").value="0";w.openShift()}
E("go('settings')");
w.pcatModal();ok(/إدارة التصنيفات/.test($("#modal").textContent),"manage modal opens");
$("#pcn1").value="هدايا";$("#pcn2").value="Gifts";w.pcatAdd();
ok(E("S.settings.pcats.length")===1,"category added");
$("#pcn1").value="هدايا";w.pcatAdd();ok(E("S.settings.pcats.length")===1,"duplicate rejected");
$("#pcn1").value="كافيتريا";w.pcatAdd();ok(E("S.settings.pcats.length")===1,"built-in name rejected");
const id=E("S.settings.pcats[0].id");
w.productModal("");ok([...w.document.querySelectorAll("#pc option")].some(o=>o.value===id),"new category in product form");
$("#pn1").value="دبدوب";$("#pp1").value="100";$("#pc").value=id;w.saveProduct("");
const pid=E("S.products.find(p=>p.name.ar==='دبدوب').id");
ok(E("S.products.find(p=>p.id==='"+pid+"').cat")===id,"product saved with new category");
E("go('settings')");ok(/هدايا/.test($("#view").textContent),"category shown in product table");
w.pcatDel(id);ok(E("S.settings.pcats.length")===1,"cannot delete while in use");
E("go('pos')");ok([...w.document.querySelectorAll("#view button")].some(b=>b.textContent==="هدايا"),"POS filter button");
E("K.cat='"+id+"';posRender()");ok([...w.document.querySelectorAll(".pbtn")].length===1&&/دبدوب/.test($(".pbtn").textContent),"POS filters by new category");
E("K.cat='all'");w.cartAdd(pid);w.posPay();
const n=E("S.invoices.length");w.payConfirm();
ok(E("S.invoices.length")===n+1&&E("S.invoices[S.invoices.length-1].lines[0].type")===id,"sale line type = category");
const d=E("repData(dayKey(Date.now()),dayKey(Date.now()))");ok(d.cat[id]===100,"report groups by new category: "+JSON.stringify(d.cat));
const dash=E("RT.dash(dayKey(Date.now()),dayKey(Date.now())).html");ok(/هدايا/.test(dash),"dashboard shows the category name");
const top=E("RT.top(dayKey(Date.now()),dayKey(Date.now())).html");ok(/دبدوب/.test(top),"top-products includes it");
E("S.products=S.products.filter(p=>p.id!=='"+pid+"')");w.pcatDel(id);ok(E("S.settings.pcats.length")===0,"deleted when unused");
console.log(bad?"FAILED "+bad:"ALL PASSED");process.exit(bad?1:0);
