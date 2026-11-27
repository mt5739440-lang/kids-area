// يبني ملف HTML واحدًا للاختبارات: node tests/build.js out.html [--no-users]
// الافتراضي يحقن مستخدمين تجريبيين عبر window.KA_TEST_USERS (الكود الفعلي لا يحتوي أي PIN افتراضي).
const fs=require("fs"),path=require("path"),src=path.join(__dirname,"..","src");
let h=fs.readFileSync(path.join(src,"index.html"),"utf8");
const js=fs.readFileSync(path.join(src,"app.js"),"utf8"),css=fs.readFileSync(path.join(src,"styles.css"),"utf8");
const users=[{id:"u1",name:"كاشير 1",pin:"1111",role:"cashier",active:true,branch:"b1"},{id:"u2",name:"مشرف الفرع",pin:"2222",role:"supervisor",active:true,branch:"b1"},{id:"u3",name:"مدير العمليات",pin:"3333",role:"ops",active:true,branch:"all"},{id:"u4",name:"الإدارة العليا",pin:"4444",role:"admin",active:true,branch:"all"},{id:"u5",name:"كاشير جليمنابوليس",pin:"5555",role:"cashier",active:true,branch:"b2"},{id:"u6",name:"مشرف جليمنابوليس",pin:"6666",role:"supervisor",active:true,branch:"b2"}];
const inj=process.argv.includes("--no-users")?"":"<script>window.KA_TEST_USERS="+JSON.stringify(users)+"</script>";
h=h.replace(/<link[^>]*styles\.css[^>]*>/,()=>"<style>"+css+"</style>").replace('<script src="app.js"></script>',()=>inj+"<script>"+js.replace(/<\/script>/g,"<\\/script>")+"</script>");
fs.writeFileSync(process.argv[2],h);
