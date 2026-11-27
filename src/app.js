/* © 2026 SYSTEM KIDS AREA. All rights reserved. Copying, redistribution or use without the owner's written permission is prohibited. */

"use strict";
/* ============ i18n ============ */
const D={
appName:["نظام إدارة كيدز إيريا","Kids Area Management"],
login:["تسجيل الدخول","Sign in"],user:["المستخدم","User"],pin:["الرقم السري (PIN)","PIN"],enter:["دخول","Sign in"],logout:["تسجيل الخروج","Log out"],
wrongPin:["الرقم السري غير صحيح","Wrong PIN"],setupTitle:["إنشاء أول مدير","Create the first admin"],setupHint:["هذا أول تشغيل ولا يوجد أي مستخدم. أنشئ حساب المدير برقم سري من 4 أرقام تختاره أنت.","First run: no users exist. Create the admin account with a 4-digit PIN of your choice."],setupName:["اسم المدير","Admin name"],setupPin:["الرقم السري (4 أرقام)","PIN (4 digits)"],setupPin2:["أعد كتابة الرقم السري","Repeat PIN"],setupCreate:["إنشاء الحساب والدخول","Create account and sign in"],setupNoName:["اكتب اسم المدير","Enter the admin name"],setupPin4:["الرقم السري يجب أن يكون 4 أرقام","PIN must be 4 digits"],setupMismatch:["الرقمان غير متطابقين","PINs do not match"],setupWeak:["رقم سري ضعيف (مكرر أو متسلسل)، اختر غيره","Weak PIN (repeated or sequential), choose another"],setupJoin:["هذا جهاز فرع؟ اربطه بقاعدة البيانات المشتركة","Branch device? Connect to the shared database"],setupJoinHint:["بدل إنشاء مدير جديد، أدخل بيانات Supabase لسحب المستخدمين والبيانات الموجودة.","Instead of creating a new admin, enter the Supabase details to pull existing users and data."],setupJoinBtn:["ربط وسحب البيانات","Connect and pull data"],eraseBtn:["حذف بيانات العميل نهائيًا","Erase customer data permanently"],eraseSure:["سيتم حذف ولي الأمر وأطفاله وباقاتهم ورصيدهم نهائيًا من كل الفروع، وإخفاء اسمهم ورقمهم من الفواتير والحجوزات وسجل العمليات. الفواتير والمبالغ تبقى للمحاسبة بدون هوية. لا يمكن التراجع. متابعة؟","Guardian, children, packages and balance will be erased from all branches, and their name/phone hidden in invoices, bookings and the audit log. Invoices and amounts stay for accounting without identity. This cannot be undone. Continue?"],eraseSure2:["تأكيد أخير: حذف نهائي للعميل","Final confirmation: erase this customer"],eraseBal:["تنبيه: للعميل باقة فعّالة أو رصيد، وسيضيع بالحذف.","Warning: the customer has an active package or balance that will be lost."],eraseInside:["لا يمكن الحذف والطفل داخل المكان الآن. أنهِ الزيارة أولًا.","Cannot erase while a child is checked in. Check out first."],eraseDone:["تم حذف بيانات العميل","Customer data erased"],erasedName:["عميل محذوف","Erased customer"],pinLocked:["محاولات كثيرة خاطئة. انتظر","Too many wrong attempts. Wait"],secs:["ثانية","s"],idleOut:["تم تسجيل الخروج لعدم النشاط","Signed out due to inactivity"],alTitle:["مدة التنبيهات والرسائل","Alert and message duration"],alNote:["اللافتات الملوّنة (المتأخرون، المخزون، النسخ...) تختفي بعد المدة وتظهر من جديد عند فتح الشاشة أو تغيّر العدد. اكتب 0 لتبقى ثابتة.","Coloured banners (late kids, stock, backup...) hide after this time and reappear when a screen is opened or the count changes. Enter 0 to keep them fixed."],alBanner:["مدة ظهور اللافتات (ثانية، 0 = ثابتة)","Banner duration (seconds, 0 = fixed)"],alToast:["مدة الرسائل العابرة (ثانية)","Message duration (seconds)"],alBad:["اللافتات من 0 إلى 600 ثانية والرسائل من 1 إلى 30","Banners 0–600 s, messages 1–30 s"],kidOrders:["طلبات الطفل (كل المبيعات)","Child orders (all sales)"],kidOrdersNote:["تُضاف على حساب الطفل وتُحاسَب مع الوقت عند تسجيل الخروج.","Added to the child's bill and paid with the time at check-out."],kidNoOrders:["لا توجد طلبات بعد","No orders yet"],done:["تم","Done"],noPerm:["غير مسموح","Not allowed"],invFrom:["من تاريخ","From date"],invTo:["إلى تاريخ","To date"],invTimeFrom:["من الساعة","From time"],invTimeTo:["إلى الساعة","To time"],invNo:["رقم الفاتورة (رقم، مدى 100-120، أو 5,9)","Invoice no. (number, range 100-120, or 5,9)"],invAll:["الكل","All"],invSort:["الترتيب","Sort by"],sortNew:["الأحدث أولًا","Newest first"],sortOld:["الأقدم أولًا","Oldest first"],sortNoD:["الرقم: من الأكبر","Number: high to low"],sortNoA:["الرقم: من الأصغر","Number: low to high"],sortTotD:["المبلغ: الأعلى","Amount: highest"],sortTotA:["المبلغ: الأقل","Amount: lowest"],invReset:["إعادة الضبط (اليوم)","Reset (today)"],pcatManage:["إدارة التصنيفات","Manage categories"],pcatNote:["كافيتريا وألعاب ثابتان. أضف هنا أي تصنيف آخر (مثل: هدايا، حفلات).","Cafeteria and Games are built in. Add any other category here (e.g. Gifts, Parties)."],pcatAdd:["إضافة تصنيف","Add category"],pcatDup:["التصنيف موجود بالفعل","Category already exists"],pcatInUse:["لا يمكن الحذف: توجد منتجات بهذا التصنيف","Cannot delete: products use this category"],pcatDelConf:["حذف التصنيف؟","Delete this category?"],rights:["© 2026 SYSTEM KIDS AREA — جميع الحقوق محفوظة","© 2026 SYSTEM KIDS AREA — All rights reserved"],
present:["الأطفال الموجودين الآن","Children inside now"],newEntry:["تسجيل دخول","New check-in"],history:["الزيارات والتقارير","Visits & reports"],
guardians:["أولياء الأمور والأطفال","Guardians & children"],settings:["الإعدادات","Settings"],users:["المستخدمين","Users"],audit:["سجل التدقيق","Audit log"],
searchHere:["ابحث بالاسم أو الموبايل أو رقم الإيصال","Search name, phone or receipt no."],
child:["الطفل","Child"],guardian:["ولي الأمر","Guardian"],phone:["الموبايل","Phone"],plan:["الباقة","Plan"],checkIn:["وقت الدخول","Check-in"],checkOut:["وقت الخروج","Check-out"],
timeLeft:["الوقت المتبقي","Time left"],doCheckout:["تسجيل خروج","Check out"],noneInside:["لا يوجد أطفال بالداخل حاليًا","No children inside"],
soonN:["أطفال قرب انتهاء وقتهم","children close to end of time"],overN:["أطفال تجاوزوا وقتهم","children over time"],
late:["تأخير","Late"],morePhones:["أرقام إضافية (افصل بفاصلة)","Extra numbers (comma separated)"],open:["مفتوح","Open"],elapsed:["المدة","Elapsed"],
searchGuardian:["ابحث عن ولي أمر (اسم / موبايل / اسم الطفل)","Find guardian (name / phone / child)"],newGuardian:["+ ولي أمر جديد","+ New guardian"],
editGuardian:["تعديل ولي الأمر","Edit guardian"],guardianName:["اسم ولي الأمر","Guardian name"],notes:["ملاحظات","Notes"],firstChild:["بيانات الطفل","Child details"],
childName:["اسم الطفل","Child name"],age:["السن","Age"],save:["حفظ","Save"],cancel:["إلغاء","Cancel"],addChild:["+ إضافة طفل","+ Add child"],editChild:["تعديل الطفل","Edit child"],
inside:["بالداخل","Inside"],selectChildren:["اختر الأطفال","Select children"],choosePlan:["اختر الباقة","Choose plan"],printReceipt:["طباعة الإيصال","Print receipt"],
confirmEntry:["تسجيل الدخول","Confirm check-in"],changeGuardian:["تغيير","Change"],perHalf:["لكل نصف ساعة","per 30 min"],visitNote:["ملاحظة للزيارة (اختياري)","Visit note (optional)"],
egp:["ج.م","EGP"],min:["دقيقة","min"],
needGuardian:["اختر ولي الأمر أولًا","Select a guardian first"],needKids:["اختر طفلًا واحدًا على الأقل","Select at least one child"],needPlan:["اختر الباقة","Choose a plan"],
needName:["الاسم مطلوب","Name is required"],badPhone:["رقم الموبايل غير صحيح","Invalid phone number"],dupPhone:["رقم الموبايل مسجل لولي أمر آخر","Phone already registered"],badAge:["السن غير صحيح","Invalid age"],
entryDone:["تم تسجيل الدخول","Checked in"],exitDone:["تم تسجيل الخروج","Checked out"],saved:["تم الحفظ","Saved"],
exitTitle:["تسجيل الخروج","Check-out"],planPrice:["سعر الباقة","Plan price"],lateMin:["دقائق التأخير","Late minutes"],suggestedFee:["الغرامة المقترحة","Suggested late fee"],
lateFee:["غرامة التأخير (يحددها الكاشير)","Late fee (set by cashier)"],lateNote:["سبب تعديل الغرامة","Reason for changing the fee"],total:["الإجمالي","Total"],
needNote:["اكتب سبب تعديل الغرامة المقترحة","Enter a reason for changing the suggested fee"],refreshTime:["تحديث الوقت","Refresh time"],confirmExit:["تأكيد الخروج","Confirm check-out"],
openUnits:["نصف ساعة محسوبة","30-min units"],
date:["التاريخ","Date"],entries:["عدد الدخول","Check-ins"],exits:["عدد الخروج","Check-outs"],revenue:["الإيراد","Revenue"],lateFees:["الغرامات","Late fees"],avgDur:["متوسط المدة","Avg. duration"],
cashier:["الكاشير","Cashier"],status:["الحالة","Status"],reprint:["إعادة طباعة","Reprint"],visitsCount:["الزيارات","Visits"],lastVisit:["آخر زيارة","Last visit"],
name:["الاسم","Name"],role:["الدور","Role"],active:["مفعّل","Active"],addUser:["+ مستخدم جديد","+ New user"],edit:["تعديل","Edit"],
pin4:["الرقم السري (4 أرقام)","PIN (4 digits)"],badPin:["الرقم السري يجب أن يكون 4 أرقام","PIN must be 4 digits"],dupPin:["الرقم السري مستخدم","PIN already used"],
venue:["اسم المكان","Venue name"],branch:["اسم الفرع","Branch name"],graceMin:["سماحية التأخير (دقائق)","Late grace (minutes)"],alertMin:["تنبيه قبل الانتهاء (دقائق)","Alert before end (minutes)"],
lateFeePer15:["الغرامة المقترحة لكل 15 دقيقة تأخير","Suggested fee per 15 min late"],plansTitle:["الباقات والأسعار","Plans & prices"],minutes:["الدقائق","Minutes"],price:["السعر","Price"],
openRate:["سعر النصف ساعة (الوقت المفتوح)","Price per 30 min (open)"],resetDemo:["إعادة تعيين البيانات التجريبية","Reset demo data"],resetSure:["سيتم مسح كل البيانات الحالية. متابعة؟","All current data will be erased. Continue?"],
roleCashier:["كاشير","Cashier"],roleSupervisor:["مشرف الفرع","Branch supervisor"],roleOps:["مدير العمليات","Operations manager"],roleAdmin:["الإدارة العليا","Senior management"],
time:["الوقت","Time"],action:["الإجراء","Action"],details:["التفاصيل","Details"],
rcptEntry:["إيصال دخول","Entry receipt"],rcptExit:["إيصال خروج","Exit receipt"],rcptNo:["رقم","No."],expectedExit:["الخروج المتوقع","Expected exit"],
rcptFoot:["يرجى الاحتفاظ بالإيصال عند الاستلام","Please keep this receipt for pick-up"],thanks:["شكرًا لزيارتكم","Thank you for visiting"],
duration:["المدة","Duration"],years:["سنة","y"],dataNote:["بيانات المرحلة 1 محفوظة على هذا المتصفح فقط (نسخة تجريبية).","Phase 1 data is stored in this browser only (demo build)."],
close:["إغلاق","Close"],none:["لا توجد نتائج","No results"],out:["خرج","Out"],in:["بالداخل","Inside"]
,posTitle:["المبيعات (كافيتريا وألعاب)","Sales (POS)"],shiftTitle:["الوردية","Shift"],invoices:["الفواتير","Invoices"],catAll:["الكل","All"],catCafe:["كافيتريا","Cafeteria"],catGame:["ألعاب إضافية","Extra games"],
cart:["السلة","Cart"],cartEmpty:["السلة فاضية","Cart is empty"],clear:["مسح","Clear"],pay:["دفع","Pay"],paidOk:["تم الدفع","Paid"],
payWhen:["وقت الدفع","Payment time"],payNow:["الدفع الآن (عند الدخول)","Pay now (at check-in)"],payLater:["الدفع عند الخروج","Pay at check-out"],payEntryTitle:["دفع باقة الدخول","Check-in payment"],
discount:["الخصم","Discount"],value:["القيمة","Value"],discReason:["سبب الخصم","Discount reason"],needSup:["يحتاج مشرف","supervisor needed"],subtotal:["الإجمالي قبل الخصم","Subtotal"],discounts:["الخصومات","Discounts"],
payMethods:["طرق الدفع (يمكن التقسيم)","Payment methods (can split)"],addMethod:["+ طريقة دفع","+ Payment method"],remaining:["المتبقي","Remaining"],confirmPay:["تأكيد الدفع","Confirm payment"],
payMismatch:["مجموع الدفع لا يساوي المطلوب","Payments do not match the total"],needReason:["اكتب السبب","Enter a reason"],m_cash:["كاش","Cash"],m_card:["فيزا","Card"],m_wallet:["محفظة","E-wallet"],recBackup:["بيانات المتصفح كانت تالفة؛ تم الرجوع لآخر نسخة احتياطية تلقائية.","Browser data was corrupt; restored the latest automatic backup."],recFresh:["بيانات المتصفح كانت تالفة ولا توجد نسخة؛ بدأ النظام ببيانات تجريبية ونسخة التالف محفوظة. استعد من ملف نسخة إن وجد.","Browser data was corrupt and no backup exists; started with demo data. Restore from a backup file if you have one."],bkRemind:["لم يتم تنزيل ملف نسخة احتياطية اليوم. نزّله واحفظه على فلاشة أو بريدك.","No backup file downloaded today. Download it and keep it on a USB drive or email."],brDelete:["حذف الفرع","Delete branch"],brDelType:["اكتب اسم الفرع للتأكيد: سيتم حذف كل بياناته نهائيًا","Type the branch name to confirm: all its data will be deleted permanently"],brDelUsers:["انقل المستخدمين التابعين للفرع أولًا:","Move this branch's users first:"],brDelDone:["تم حذف الفرع","Branch deleted"],brDelLast:["لا يمكن حذف الفرع الحالي أو الفرع الوحيد","Cannot delete the current or the only branch"],brTitle:["الفروع والأسعار","Branches & prices"],bkTitle:["النسخ الاحتياطي","Backup"],allBranches:["كل الفروع","All branches"],userBranch:["الفرع","Branch"],needBranch:["اختر فرعًا للكاشير والمشرف","Choose a branch for cashier / supervisor"],branchLbl:["الفرع","Branch"],brAdd:["إضافة فرع","Add branch"],brName:["اسم الفرع","Branch name"],brRename:["حفظ الاسم","Save name"],brCurrent:["الفرع الحالي","Current branch"],brCopyTitle:["نسخ أسعار المنتجات من فرع آخر","Copy product prices from another branch"],brCopyFrom:["نسخ من","Copy from"],brCopyBtn:["نسخ الأسعار إلى الفرع الحالي","Copy prices to current branch"],brCopyDone:["تم تحديث أسعار الأصناف:","Prices updated:"],brAddDone:["تمت إضافة الفرع","Branch added"],brDupName:["اسم الفرع موجود","Branch name exists"],brNote:["أولياء الأمور والأطفال والباقات مشتركة بين الفروع. أسعار المنتجات والمخزون والموظفون والمبيعات لكل فرع على حدة.","Guardians, children and packages are shared. Product prices, stock, employees and sales are per branch."],bkNow:["نسخة احتياطية الآن","Back up now"],bkDownload:["تنزيل نسخة احتياطية","Download backup"],bkRestoreFile:["استعادة من ملف","Restore from file"],bkList:["النسخ التلقائية داخل المتصفح (آخر 5)","Automatic in-browser copies (last 5)"],bkLast:["آخر نسخة","Last backup"],bkNone:["لا يوجد","None"],bkCount:["عدد النسخ المحفوظة","Saved copies"],bkKind:["النوع","Type"],bkSize:["الحجم","Size"],bkRestore:["استعادة","Restore"],bkRestored:["تمت الاستعادة","Restored"],bkBadFile:["الملف غير صالح","Invalid backup file"],bkConfirm:["سيتم استبدال كل بيانات النظام بهذه النسخة (مع حفظ نسخة من الحالية قبل الاستعادة). متابعة؟","This replaces all system data with the backup (current data is backed up first). Continue?"],bkWarn:["النسخة تحتوي بيانات أولياء الأمور والأطفال والرموز السرية؛ احفظ الملف في مكان آمن ولا ترسله لأحد.","Backups contain guardian, child and PIN data. Keep the file safe and do not share it."],bkAuto:["تلقائي","Auto"],bkManual:["يدوي","Manual"],bkPre:["قبل استعادة","Pre-restore"],bkDone:["تم حفظ النسخة","Backup saved"],bkFail:["تعذّر حفظ النسخة (المساحة ممتلئة)","Backup failed (storage full)"],rp_branches:["مقارنة الفروع","Branch comparison"],rpBranch:["الفرع","Branch"],auditUser:["المستخدم","User"],auditSearch:["بحث في الإجراء/التفاصيل","Search action/details"],auditAll:["الكل","All"],auditShown:["المعروض","Shown"],auditXlsx:["تصدير Excel","Export Excel"],auditPrint:["طباعة / PDF","Print / PDF"],settingsGeneral:["الإعدادات العامة","General settings"],rp_history:["سجل الزيارات","Visit log"],rp_gc:["أولياء الأمور والأطفال","Guardians & children"],rpChild:["الطفل","Child"],rpAge:["السن","Age"],rpVisitsP:["زيارات الفترة","Visits in period"],rpVisitsAll:["إجمالي الزيارات","All visits"],rpLastVisit:["آخر زيارة","Last visit"],rpPkgBal:["رصيد الباقة (ساعات)","Package balance (h)"],rpGcCount:["عدد الأطفال","Children"],invRefund:["مرتجع","Refund"],qcTitle:["فحص الجودة اليومي","Daily quality checklist"],qcManage:["إدارة البنود","Manage items"],qcAdd:["+ بند","+ Item"],qcDone:["تم","Done"],qcLeft:["بنود فحص الجودة لم تُنجز اليوم","quality checks not done today"],qcBy:["بواسطة","By"],rp_qc:["فحص الجودة","Quality checks"],rpQcDone:["المنجز","Done"],rpQcTotal:["عدد البنود","Items"],rpQcUndone:["غير المنجز","Not done"],ovAppr:["بيع بموافقة (الكمية غير كافية)","Sold with approval (low stock)"],reportsTitle:["التقارير","Reports"],rp_dash:["لوحة المتابعة","Dashboard"],rp_sales:["المبيعات","Sales"],rp_visits:["الزيارات","Visits"],rp_pp:["الباقات والحفلات","Packages & parties"],rp_top:["أكثر المنتجات مبيعًا","Top products"],rpQty:["الكمية","Qty"],rp_hrinv:["الموارد البشرية والمخزون","HR & inventory"],rp_shifts:["الورديات","Shifts"],rpFrom:["من","From"],rpTo:["إلى","To"],rpToday:["اليوم","Today"],rpYest:["أمس","Yesterday"],rp7:["آخر 7 أيام","Last 7 days"],rpMonth:["هذا الشهر","This month"],rpPrevMonth:["الشهر الماضي","Last month"],rpXlsx:["تصدير Excel","Export Excel"],rpPdf:["طباعة / PDF","Print / PDF"],rpNet:["صافي المبيعات","Net sales"],rpGross:["المبيعات","Sales"],rpInv:["الفواتير","Invoices"],rpDisc:["الخصومات","Discounts"],rpRef:["المرتجعات","Refunds"],rpVoid:["فواتير ملغاة","Voided"],rpCredit:["آجل","On account"],rpCash:["كاش","Cash"],rpCard:["فيزا","Card"],rpWallet:["محفظة","E-wallet"],rpDate:["التاريخ","Date"],rpTotal:["الإجمالي","Total"],rpCat:["المبيعات حسب النوع (قبل الخصم)","Sales by type (before discount)"],rpPerDay:["المبيعات اليومية","Daily sales"],rpPeak:["ساعات الذروة (دخول الأطفال)","Peak hours (check-ins)"],rpHour:["الساعة","Hour"],rpKids:["عدد الأطفال","Children"],rpVisitsN:["الزيارات","Visits"],rpAvgDur:["متوسط المدة","Avg duration"],rpLateN:["حالات التأخير","Late cases"],rpLateFee:["غرامات التأخير","Late fees"],rpAvgVisit:["متوسط الإيراد/زيارة","Avg revenue / visit"],c_visit:["وقت اللعب","Play time"],c_late:["غرامة تأخير","Late fee"],c_cafe:["الكافيتريا","Cafe"],c_game:["ألعاب إضافية","Extra games"],c_package:["باقات","Packages"],c_party:["حفلات","Parties"],c_other:["أخرى","Other"],rpPkgSold:["باقات مباعة","Packages sold"],rpPkgRev:["إيراد الباقات","Package revenue"],rpPkgLeft:["رصيد باقات نشطة (ساعات)","Active package balance (h)"],rpPkgSoon:["باقات تنتهي خلال 7 أيام","Expiring in 7 days"],rpParties:["الحفلات","Parties"],rpPartyTotal:["إجمالي الحفلات","Parties total"],rpPartyPaid:["المدفوع","Paid"],rpPartyDue:["المتبقي","Due"],rpCancelled:["ملغاة","Cancelled"],rpCredTitle:["الآجل المستحق على أولياء الأمور (كل الفترات)","Outstanding on-account (all time)"],rpGuardian:["ولي الأمر","Guardian"],rpPhone:["الهاتف","Phone"],rpBooking:["حجز","Booking"],rpDay:["اليوم","Day"],rpPay:["ملخص الرواتب","Payroll summary"],rpPayMonth:["شهر الرواتب","Payroll month"],rpPresent:["أيام الحضور","Present days"],rpAbsent:["أيام الغياب","Absent days"],rpStockTitle:["حالة المخزون","Stock status"],rpSold:["مباع في الفترة","Sold in period"],rpNoAccess:["لا توجد صلاحية","No access"],rpOpened:["فتح","Opened"],rpClosed:["إغلاق","Closed"],rpExpected:["المتوقع","Expected"],rpCounted:["المعدود","Counted"],rpDiff:["الفرق","Diff"],rpShiftNo:["وردية","Shift"],rpUser:["الموظف","User"],rpOpening:["رصيد الافتتاح","Opening"],rpFileSales:["تقرير","report"],rpNote:["ملاحظة: الفواتير الملغاة لا تدخل في المبيعات.","Note: voided invoices are excluded from sales."],advCap:["السلفة تتجاوز الحد المسموح، الحد الأقصى المتبقي:","Advance exceeds the limit, remaining allowed:"],advMaxLbl:["الحد الأقصى للسلفة (٪ من المرتب الشهري = الأجر اليومي × 30)","Max advance (% of monthly salary = daily wage × 30)"],p6PickTitle:["الاستلام الآمن","Safe pickup"],pkLbl:["آخر 4 أرقام من هاتف ولي الأمر (للتحقق من المستلم)","Last 4 digits of guardian phone (verify pickup)"],pkBad:["الأرقام غير مطابقة – لا تسلّم الطفل","Digits do not match – do not release the child"],pkOther:["يستلمه شخص آخر (موافقة المشرف)","Picked up by someone else (supervisor approval)"],pkOvNote:["تسليم لشخص آخر بموافقة","Released to someone else, approved by"],pkSetting:["التحقق من المستلم عند الخروج","Verify pickup at check-out"],p6Settings:["إعدادات المرحلة 6","Phase 6 settings"],invTitle:["المخزون","Inventory"],invStock:["الكمية","Stock"],invMin:["الحد الأدنى","Minimum"],invTrack:["تتبع المخزون","Track stock"],invUntracked:["غير متتبع","Not tracked"],invLow:["وصل للحد الأدنى","Low"],invOut:["نفد","Out"],invOk:["متوفر","OK"],invReceive:["استلام كمية","Receive"],invCount:["جرد / تعديل","Count / adjust"],invQty:["الكمية","Quantity"],invActual:["الكمية الفعلية","Actual count"],invLog:["حركة المخزون","Stock movements"],invSale:["بيع","Sale"],invVoid:["إلغاء فاتورة","Void"],invIn:["استلام","Received"],invAdj:["جرد","Count"],invLowAlert:["أصناف وصلت للحد الأدنى","items at minimum stock"],noStock:["الكمية غير كافية في المخزون","Not enough stock"],invNote:["ملاحظة","Note"],maintTitle:["الصيانة والأعطال","Maintenance"],fReport:["بلاغ عطل جديد","Report a fault"],fItem:["اللعبة / المكان","Game / place"],fDesc:["وصف العطل","Fault description"],fStopped:["اللعبة متوقفة عن العمل","Out of service"],fOpen:["مفتوح","Open"],fProg:["جاري الإصلاح","In progress"],fDone:["تم الإصلاح","Fixed"],fStatus:["الحالة","Status"],fSend:["إرسال البلاغ","Submit"],fNote:["ملاحظة الصيانة","Maintenance note"],fSetProg:["بدء الإصلاح","Start repair"],fSetDone:["تم الإصلاح","Mark fixed"],fReopen:["إعادة فتح","Reopen"],fToggleStop:["تغيير حالة التوقف","Toggle stopped"],fStoppedAlert:["ألعاب متوقفة","out of service"],fOpenAlert:["بلاغات أعطال مفتوحة","open fault reports"],fNeed:["اكتب اسم اللعبة ووصف العطل","Enter the game and a description"],fBy:["بواسطة","By"],bonuses:["المكافآت (بونص)","Bonuses"],addBonus:["إضافة بونص","Add bonus"],editBonus:["تعديل البونص","Edit bonus"],payBonus:["بونص","Bonus"],hrTitle:["الموظفون والحضور","Staff & attendance"],t_attendance:["الحضور اليومي","Daily attendance"],t_roster:["جدول الورديات","Shift roster"],t_tasks:["المهام اليومية","Daily tasks"],t_eval:["تقييم الأداء","Performance"],t_employees:["الموظفون","Employees"],t_leaves:["الإجازات","Leaves"],t_money:["الجزاءات والسلف","Penalties & advances"],t_payroll:["المرتبات","Payroll"],empName:["اسم الموظف","Employee name"],jobTitle:["الوظيفة","Job title"],hireDate:["تاريخ التعيين","Hire date"],dailyWage:["الأجر اليومي","Daily wage"],defShift:["الوردية الافتراضية","Default shift"],addEmp:["+ موظف","+ Employee"],editEmp:["تعديل موظف","Edit employee"],noShift:["بدون","None"],st_present:["حاضر","Present"],st_absent:["غائب","Absent"],st_leave:["إجازة","Leave"],st_off:["راحة","Day off"],st_unrec:["لم يُسجَّل","Not recorded"],shiftLbl:["الوردية","Shift"],inTime:["الحضور","In"],outTime:["الانصراف","Out"],hoursLbl:["الساعات","Hours"],lateLbl:["تأخير","Late"],presentNow:["حاضر الآن","Present now"],leaveNow:["انصراف الآن","Check out now"],prevDay:["اليوم السابق","Previous day"],nextDay:["اليوم التالي","Next day"],monthLocked:["شهر المرتبات معتمد، لا يمكن التعديل","Payroll month is approved, cannot edit"],rosterFill:["تعبئة الفارغ بالوردية الافتراضية","Fill empty with default shift"],rosterCopy:["نسخ من الأسبوع السابق","Copy previous week"],confirmCopy:["سيتم استبدال جدول هذا الأسبوع بجدول الأسبوع السابق. متابعة؟","This week's roster will be replaced by last week's. Continue?"],prevW:["الأسبوع السابق","Previous week"],nextW:["الأسبوع التالي","Next week"],taskName:["المهمة","Task"],taskDone:["تمت","Done"],taskBy:["نفّذها","Done by"],taskShift:["الوردية","Shift"],allShifts:["كل الورديات","All shifts"],addTask:["+ مهمة","+ Task"],taskProgress:["المهام المنفّذة","Tasks done"],manageTasks:["إدارة المهام","Manage tasks"],evalBtn:["تقييم","Evaluate"],ev_punctual:["الالتزام بالمواعيد","Punctuality"],ev_quality:["جودة العمل","Work quality"],ev_customers:["التعامل مع العملاء والأطفال","Customer and child care"],ev_tasks:["الالتزام بالمهام والنظافة","Tasks and cleanliness"],evalAvg:["المتوسط","Average"],presentDays:["أيام الحضور","Days present"],lateTimes:["مرات التأخير","Late times"],tasksDone:["مهام نُفِّذت","Tasks done"],penaltiesN:["جزاءات","Penalties"],notEvaluated:["لم يُقيَّم","Not evaluated"],saveEval:["حفظ التقييم","Save evaluation"],leaveFrom:["من","From"],leaveTo:["إلى","To"],leaveDays:["الأيام","Days"],leaveType:["نوع الإجازة","Leave type"],lt_paid:["بمرتب","Paid"],lt_unpaid:["بدون مرتب","Unpaid"],addLeave:["+ إجازة","+ Leave"],leaveOverlap:["الموظف عنده إجازة في نفس الفترة","Employee already has leave in this period"],badRange:["الفترة غير صحيحة","Invalid period"],reasonLbl:["السبب","Reason"],delete:["حذف","Delete"],confirmDel:["تأكيد الحذف؟","Confirm delete?"],penalties:["الجزاءات","Penalties"],advances:["السلف","Advances"],addPenalty:["+ جزاء","+ Penalty"],addAdvance:["+ سلفة","+ Advance"],penaltyAmt:["مبلغ الجزاء","Penalty amount"],advanceAmt:["مبلغ السلفة","Advance amount"],deductMonth:["تُخصم من مرتب","Deducted from"],badAmount:["المبلغ غير صحيح","Invalid amount"],needEmp:["اختر الموظف","Choose an employee"],payMonth:["الشهر","Month"],payDays:["أيام الحضور","Days present"],payPaidLeave:["إجازات بمرتب","Paid leave"],payAbsent:["غياب","Absent"],payGross:["المستحق","Gross"],payPen:["جزاءات","Penalties"],payAdv:["سلف","Advances"],payNet:["الصافي","Net"],payApprove:["اعتماد المرتبات","Approve payroll"],payApproved:["معتمد","Approved"],payReopen:["إعادة فتح الشهر","Reopen month"],payMarkPaid:["تسجيل الصرف","Mark paid"],payPaidTag:["تم الصرف","Paid out"],paySlip:["مفردات المرتب","Payslip"],printSheet:["طباعة كشف المرتبات","Print payroll sheet"],negNet:["الخصومات أكبر من المستحق","Deductions exceed earnings"],monthNotEnded:["الشهر لم ينته بعد. اعتماد المرتبات الآن؟","The month has not ended. Approve now?"],payTotal:["الإجمالي","Total"],hrSettings:["إعدادات الموارد البشرية","HR settings"],hrGraceLbl:["سماحية التأخير في الحضور (دقائق)","Attendance lateness grace (minutes)"],noEmployees:["لا يوجد موظفون","No employees"],attSummary:["ملخص اليوم","Day summary"],notScheduled:["غير مجدول","Not scheduled"],approvedBy:["اعتمده","Approved by"],partiesTitle:["الحفلات","Parties"],newBooking:["حجز حفلة جديد","New party booking"],editBooking:["تعديل الحجز","Edit booking"],booking:["حجز","Booking"],bookingSaved:["تم حفظ الحجز","Booking saved"],clientName:["اسم العميل","Client name"],birthdayChild:["اسم الطفل (صاحب الحفلة)","Birthday child"],partyDate:["تاريخ الحفلة","Party date"],startTime:["من","From"],endTime:["إلى","To"],kidsCount:["عدد الأطفال","Number of children"],partyPkg:["باقة الحفلة","Party package"],perChildPrice:["سعر الطفل","Price per child"],extras:["إضافات","Extras"],addExtra:["+ إضافة بند","+ Add item"],extraName:["البند","Item"],cakeLbl:["الديكور (النوع / التصميم)","Decor (type / design)"],discountAmt:["خصم (مبلغ)","Discount (amount)"],depositAmt:["العربون","Deposit"],remainingAmt:["المتبقي بعد العربون","Remaining after deposit"],grossTotal:["الإجمالي قبل الخصم","Total before discount"],bookingTotal:["إجمالي الحفلة","Party total"],paidSoFar:["المدفوع","Paid"],pickGuardianBtn:["اختيار من أولياء الأمور","Pick from guardians"],saveBook:["حفظ وسداد العربون","Save & pay deposit"],saveChanges:["حفظ التعديلات","Save changes"],conflictMsg:["القاعة محجوزة في هذا الوقت","Hall already booked at this time"],pastDate:["لا يمكن الحجز في تاريخ سابق","Cannot book a past date"],badDate:["التاريخ غير صحيح","Invalid date"],badTime:["الوقت غير صحيح (النهاية بعد البداية)","Invalid time (end after start)"],badKids:["عدد الأطفال غير صحيح","Invalid number of children"],needPkg:["اختر باقة","Choose a package"],badDisc:["الخصم أكبر من الإجمالي","Discount exceeds total"],badDeposit:["العربون يجب أن يكون أكبر من صفر ولا يزيد عن الإجمالي","Deposit must be above zero and not exceed the total"],totalBelowPaid:["الإجمالي الجديد أقل من المدفوع","New total is below the amount already paid"],needChild:["اسم الطفل مطلوب","Child name is required"],depositLine:["عربون حفلة","Party deposit"],payLine:["دفعة حفلة","Party payment"],depositTitle:["سداد العربون","Deposit payment"],collectRemaining:["تحصيل المتبقي","Collect remaining"],bs_confirmed:["مؤكد","Confirmed"],bs_done:["تمت","Done"],bs_cancelled:["ملغي","Cancelled"],upcoming:["الحفلات القادمة","Upcoming parties"],today:["اليوم","Today"],tomorrow:["غدًا","Tomorrow"],cancelBooking:["إلغاء الحجز","Cancel booking"],refundDeposit:["رد المبالغ المدفوعة للعميل","Refund paid amounts"],forfeitDeposit:["عدم الرد (تُحتسب إيرادًا)","No refund (kept as revenue)"],confirmCancel:["تأكيد الإلغاء","Confirm cancellation"],markDone:["تم تنفيذ الحفلة","Mark as done"],doneWithDue:["يوجد مبلغ متبقي. متابعة؟","There is a balance due. Continue?"],printContract:["طباعة عقد الحجز","Print contract"],printChecklist:["طباعة قائمة التجهيزات","Print checklist"],checklist:["قائمة التجهيزات","Preparation checklist"],pkgIncludes:["مكونات الباقة (بند في كل سطر)","Package contents (one per line)"],ck_hall:["تجهيز وتزيين القاعة","Prepare and decorate the hall"],ck_sound:["تجهيز الصوت والألعاب","Sound and games setup"],ck_hosp:["تجهيز الضيافة","Prepare hospitality"],ck_cake:["الديكور","Decor"],ck_clean:["تنظيف القاعة بعد الحفلة","Clean up after the party"],contractTitle:["تأكيد حجز حفلة","Party booking confirmation"],termsLbl:["الشروط","Terms"],signClient:["توقيع العميل","Client signature"],signStaff:["توقيع الموظف","Staff signature"],partySettings:["إعدادات الحفلات","Party settings"],hallName:["اسم القاعة","Hall name"],partyBuffer:["فاصل بين الحفلات (دقائق للتنظيف)","Gap between parties (minutes)"],depositPct:["نسبة العربون المقترحة %","Suggested deposit %"],partyTerms:["شروط الحجز (تظهر في العقد)","Booking terms (shown on contract)"],partyPkgs:["باقات الحفلات","Party packages"],addPkg:["+ باقة حفلة","+ Party package"],partyPay:["دفعات الحفلات","Party payments"],voidParty:["فاتورة حفلة: ألغِ الحجز من شاشة الحفلات","Party invoice: cancel the booking from the Parties screen"],partyReminder:["حفلات قريبة","Upcoming parties"],kidsS:["طفل","kids"],noBookings:["لا توجد حفلات قادمة","No upcoming parties"],paymentsList:["الدفعات","Payments"],prevM:["الشهر السابق","Previous"],nextM:["الشهر التالي","Next"],cancelInfo:["بيانات الإلغاء","Cancellation"],hallLbl:["القاعة","Hall"],partyContents:["مكونات الباقة","Package contents"],invNo:["فاتورة","Invoice"],priceEdit:["سعر الباقة (يمكن تعديله)","Plan price (editable)"],earlyHint:["مدة الزيارة تناسب","Duration fits"],m_credit:["آجل","On account"],fill:["الباقي","Rest"],
approveTitle:["اعتماد المشرف","Supervisor approval"],approveHint:["أدخل الرقم السري لمشرف أو مدير","Enter a supervisor or manager PIN"],approve:["اعتماد","Approve"],badApprover:["رقم غير صحيح أو بدون صلاحية اعتماد","Wrong PIN or no approval rights"],
needShift:["افتح الوردية أولًا","Open a shift first"],openShift:["فتح وردية","Open shift"],openingCash:["رصيد بداية الدرج (كاش)","Opening cash"],shiftOpen:["وردية مفتوحة","Open shift"],invoicesN:["عدد الفواتير","Invoices"],refunds:["المرتجعات","Refunds"],
expectedCash:["الكاش المتوقع بالدرج","Expected cash in drawer"],closeShift:["قفل الوردية","Close shift"],countedCash:["الكاش الفعلي (المعدود)","Counted cash"],printShiftReport:["طباعة تقرير التقفيل","Print closing report"],
diffShort:["عجز","Shortage"],diffOver:["زيادة","Overage"],diffZero:["مطابق","Balanced"],shiftReport:["تقرير تقفيل وردية","Shift closing report"],shiftNotYours:["القفل لصاحب الوردية أو المشرف","Only the shift owner or a supervisor can close"],
needCounted:["اكتب الكاش الفعلي","Enter the counted cash"],confirmClose:["قفل الوردية الآن؟","Close the shift now?"],pastShifts:["الورديات السابقة","Past shifts"],openedAt:["وقت الفتح","Opened"],closedAt:["وقت القفل","Closed"],
sales:["المبيعات","Sales"],expected:["المتوقع","Expected"],counted:["الفعلي","Counted"],diff:["الفرق","Difference"],voidedN:["الملغاة","Voided"],
rcptInvoice:["فاتورة","Invoice"],paidTag:["مدفوع","Paid"],dueNow:["المطلوب الآن","Due now"],voidInv:["إلغاء","Void"],refundInv:["مرتجع","Refund"],collect:["تحصيل","Collect"],voided:["ملغاة","Void"],creditTag:["آجل","On account"],due:["المتبقي","Due"],
voidReason:["السبب (إجباري)","Reason (required)"],voidHasRefunds:["على الفاتورة مرتجعات، استخدم المرتجع","Invoice has refunds, use refund instead"],refundMethod:["طريقة رد المبلغ","Refund method"],refundAmount:["مبلغ المرتجع","Refund amount"],
nothingToRefund:["اختر كمية للمرتجع","Choose a quantity to refund"],confirmRefund:["تأكيد المرتجع","Confirm refund"],confirmVoid:["تأكيد الإلغاء","Confirm void"],
products:["المنتجات والألعاب الإضافية","Products & extra games"],addProduct:["+ منتج","+ Product"],category:["التصنيف","Category"],nameAr:["الاسم بالعربي","Arabic name"],nameEn:["الاسم بالإنجليزي (اختياري)","English name (optional)"],amount:["المبلغ","Amount"],items:["البنود","Items"],method:["الطريقة","Method"],m_prepaid:["رصيد المحفظة","Wallet balance"],fromPackage:["من الباقة","From package"],extraTime:["وقت إضافي خارج الباقة","Extra time beyond package"],pkgTag:["باقة","Package"],payPkg:["من رصيد الباقة","From package balance"],
sellPackage:["بيع باقة","Sell package"],topup:["شحن رصيد","Top up wallet"],account:["الحساب","Account"],balance:["رصيد المحفظة","Wallet balance"],packagesLeft:["رصيد الباقات","Package time left"],
expires:["تنتهي","Expires"],packages:["الباقات","Packages"],addPackage:["+ باقة","+ Package"],hours:["الساعات","Hours"],validDays:["الصلاحية (أيام)","Validity (days)"],hoursShort:["ساعة","h"],daysShort:["يوم","days"],
coupons:["الكوبونات","Coupons"],addCoupon:["+ كوبون","+ Coupon"],code:["الكود","Code"],couponType:["النوع","Type"],pct:["نسبة %","Percent %"],amtFixed:["مبلغ ثابت","Fixed amount"],
expiresOn:["ينتهي في (اختياري)","Expires on (optional)"],maxUses:["أقصى عدد استخدام (اختياري)","Max uses (optional)"],oncePer:["مرة واحدة لكل ولي أمر","Once per guardian"],usedN:["استُخدم","Used"],
applyCoupon:["تطبيق","Apply"],couponLbl:["كوبون","Coupon"],removeCoupon:["إزالة","Remove"],cpExpired:["الكوبون منتهي","Coupon expired"],cpInvalid:["كود غير صحيح أو غير مفعّل","Invalid or inactive code"],
cpMax:["الكوبون استُهلك بالكامل","Coupon fully used"],cpOnce:["الكوبون استُخدم من قبل لهذا العميل","Already used by this guardian"],cpNeedG:["الكوبون يحتاج ولي أمر مربوط بالفاتورة","Coupon needs a linked guardian"],
cpDup:["الكود موجود بالفعل","Code already exists"],insufficient:["رصيد المحفظة لا يكفي","Insufficient wallet balance"],topupAmount:["مبلغ الشحن","Top-up amount"],linkGuardian:["ربط ولي أمر (اختياري)","Link guardian (optional)"],
topupsN:["شحن الرصيد","Wallet top-ups"],pkgSold:["باقات مباعة","Packages sold"],voidPkgUsed:["الباقة استُخدم منها، لا يمكن إلغاء الفاتورة","Package already used, cannot void"],
voidTopupSpent:["رصيد الشحن اتصرف جزئيًا، لا يمكن الإلغاء","Top-up already spent, cannot void"],noPackages:["لا توجد باقات مفعّلة","No active packages"],pkgSoldOk:["تم بيع الباقة","Package sold"],topupOk:["تم شحن الرصيد","Wallet topped up"],
walletHistory:["سجل المحفظة","Wallet history"],tx_topup:["شحن","Top-up"],tx_spend:["صرف","Spent"],tx_refund:["استرداد","Refund"],tx_adjust:["تسوية","Adjustment"],
st_active:["نشطة","Active"],st_expired:["منتهية","Expired"],st_void:["ملغاة","Void"],st_used:["مستهلكة","Used up"]
};
let lang=(()=>{try{return localStorage.getItem("ls_lang")||"ar"}catch(e){return "ar"}})();
const t=k=>{const d=D[k];return d?d[lang==="ar"?0:1]:k};
const $=s=>document.querySelector(s);
const esc=s=>String(s==null?"":s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const AR="٠١٢٣٤٥٦٧٨٩",FA="۰۱۲۳۴۵۶۷۸۹";
const norm=s=>String(s==null?"":s).replace(/[٠-٩]/g,d=>AR.indexOf(d)).replace(/[۰-۹]/g,d=>FA.indexOf(d)).trim().toLowerCase();
const uid=()=>"x"+Math.random().toString(36).slice(2,10);
const loc=()=>lang==="ar"?"ar-EG-u-nu-latn":"en-GB";
const TZ="Africa/Cairo";
const fTime=ts=>new Date(ts).toLocaleTimeString(loc(),{timeZone:TZ,hour:"2-digit",minute:"2-digit",hour12:true});
const fDate=ts=>new Date(ts).toLocaleDateString(loc(),{timeZone:TZ,year:"numeric",month:"2-digit",day:"2-digit"});
const dayKey=ts=>new Date(ts).toLocaleDateString("en-CA",{timeZone:TZ});
const money=n=>new Intl.NumberFormat(loc(),{maximumFractionDigits:2}).format(n||0)+" "+t("egp");
const fDur=sec=>{const s=Math.abs(Math.floor(sec));const h=Math.floor(s/3600),m=Math.floor(s%3600/60),x=s%60;const p=n=>String(n).padStart(2,"0");return (h?h+":":"")+p(m)+":"+p(x)};
const fMin=m=>{m=Math.round(m);const h=Math.floor(m/60);return h?(h+(lang==="ar"?" س ":"h ")+(m%60)+(lang==="ar"?" د":"m")):(m+(lang==="ar"?" د":"m"))};

/* ============ data layer (local for Phase 1; swapped for a server DB later) ============ */
const ROLES={cashier:"roleCashier",supervisor:"roleSupervisor",ops:"roleOps",admin:"roleAdmin"};
const PERMS={
 cashier:["entry","checkout","late","guardians","history","pos","shift","invoices","partyPay","report","reportShift"],
 supervisor:["entry","checkout","late","guardians","history","pos","shift","invoices","approve","discount","parties","partyPay","attendance","report","maintain","inventory","reportShift","reports"],
 ops:["entry","checkout","late","guardians","history","pos","shift","invoices","approve","discount","parties","partyPay","attendance","hr","settings","users","audit","report","maintain","inventory","reportShift","reports","branches"],
 admin:["entry","checkout","late","guardians","history","pos","shift","invoices","approve","discount","parties","partyPay","attendance","hr","settings","users","audit","reset","report","maintain","inventory","reportShift","reports","branches"]
};
Object.keys(PERMS).forEach(r=>PERMS[r].push("expense"));
function mkVisit(s,cid,plan,ts,grp,rno,cashier,note){
 const c=s.children.find(x=>x.id===cid);
 return {id:uid(),no:++s.seq.visit,rno:rno,group:grp,childId:cid,guardianId:c.guardianId,planId:plan.id,planType:plan.type,planName:plan.name,
  minutes:plan.minutes||0,price:plan.price||0,rate:plan.rate||0,checkIn:ts,checkOut:null,status:"in",prepaid:false,invoiceId:null,cashier:cashier,note:note||"",lateMin:0,suggestedFee:0,lateFee:0,lateNote:"",total:0};
}
function seed(){
 const now=Date.now(),m=60000;
 const s={seq:{visit:0,receipt:0,invoice:0,shift:0,booking:0,emp:0,fault:0},
  settings:Object.assign(partySettingsDefaults(),hrSettingsDefaults(),p6SettingsDefaults(),{venue:"SYSTEM KIDS AREA",branch:"",graceMin:5,alertMin:10,lateFeePer15:10,
   plans:[{id:"p30",name:{ar:"نصف ساعة",en:"30 minutes"},type:"fixed",minutes:30,price:40},
          {id:"p60",name:{ar:"ساعة",en:"1 hour"},type:"fixed",minutes:60,price:70},
          {id:"open",name:{ar:"وقت مفتوح",en:"Open time"},type:"open",rate:35}]}),
  users:(typeof window!=="undefined"&&Array.isArray(window.KA_TEST_USERS)?JSON.parse(JSON.stringify(window.KA_TEST_USERS)):[]),
  guardians:[{id:"g1",name:"أحمد محمود",phone:"01012345678",notes:""},{id:"g2",name:"سارة علي",phone:"01223456789",notes:""},{id:"g3",name:"محمد حسن",phone:"01112223334",notes:""}],
  children:[{id:"c1",guardianId:"g1",name:"يوسف",age:6,notes:""},{id:"c2",guardianId:"g1",name:"مريم",age:4,notes:"حساسية من المكسرات"},
            {id:"c3",guardianId:"g2",name:"ليلى",age:5,notes:""},{id:"c4",guardianId:"g3",name:"آدم",age:7,notes:""}],
  visits:[],audit:[],products:defaultProducts(),invoices:[],refunds:[],shifts:[],packages:defaultPackages(),subs:[],balances:{},walletTx:[],coupons:[],couponUses:[],bookings:[],partyPkgs:[],employees:[],roster:{},attendance:{},leaves:[],penalties:[],advances:[],bonuses:[],qcItems:qcDefaults(),qcLogs:{},faults:[],stockLog:[],payrolls:{},taskDefs:[],taskLogs:{},evals:{}};
 const P=id=>s.settings.plans.find(p=>p.id===id);
 const add=(cid,pid,ago,g)=>{const v=mkVisit(s,cid,P(pid),now-ago*m,g,++s.seq.receipt,"u1");s.visits.push(v);return v};
 add("c1","p60",50,"s1");add("c2","p60",50,"s1");add("c3","p30",22,"s2");add("c4","p60",75,"s3");
 const o=add("c3","open",160,"s4");o.status="out";o.checkOut=now-70*m;o.price=o.rate*3;o.total=o.rate*3;o.outBy="u1";
 s.shifts.push({id:"sh0",no:++s.seq.shift,userId:"u1",openedAt:now-240*m,closedAt:now-65*m,closedBy:"u1",openingCash:200,expected:1405,counted:1405,diff:0,status:"closed",note:""});
 s.invoices.push({id:"i0",no:++s.seq.invoice,cashier:"u1",createdAt:now-70*m,shift:"sh0",lines:[{type:"visit",name:"وقت مفتوح – ليلى",qty:1,price:105,total:105,ret:0}],sub:105,disc:{type:"pct",value:0,amount:0,reason:"",by:null},total:105,payments:[{m:"cash",a:105,shift:"sh0",at:now-70*m}],creditAmt:0,gid:"g2",visitIds:[o.id],void:null});o.invoiceId="i0";
 s.subs.push({id:"sb1",gid:"g1",pkgId:"pk10",name:{ar:"باقة 10 ساعات",en:"10 hours"},total:600,remaining:360,purchasedAt:now-5*86400000,expiresAt:now+25*86400000,invoiceId:null,status:"active",usage:[]});
 s.coupons.push({id:"cp1",code:"WELCOME10",type:"pct",value:10,expires:null,maxUses:null,oncePerGuardian:true,active:true,used:0});
 s.partyPkgs=defaultPartyPkgs();
 const mkInv=(id,amt,name,ago)=>{const at=now-ago*m;s.invoices.push({id:id,no:++s.seq.invoice,cashier:"u1",createdAt:at,shift:"sh0",lines:[{type:"party",name:name,qty:1,price:amt,total:amt,ret:0}],sub:amt,disc:{type:"pct",value:0,amount:0,reason:"",by:null},total:amt,payments:[{m:"cash",a:amt,shift:"sh0",at:at}],creditAmt:0,gid:null,visitIds:[],void:null});return at};
 const a1=mkInv("i1",500,"عربون حفلة #1 – آدم",200),a2=mkInv("i2",600,"عربون حفلة #2 – ليلى",150);
 const dk=ts=>new Date(ts).toLocaleDateString("en-CA",{timeZone:"Africa/Cairo"});
 s.bookings.push({id:"bk1",no:++s.seq.booking,name:"محمد حسن",phone:"01112223334",gid:"g3",child:"آدم",age:8,date:dk(now+86400000),start:"17:00",end:"19:30",kids:15,pkg:"pp1",pkgName:s.partyPkgs[0].name,perChild:150,includes:s.partyPkgs[0].includes.slice(),extras:[{name:"ديكور إضافي",price:250}],cake:"ديكور سيارات",notes:"",discount:0,payments:[{inv:"i1",a:500,at:a1,by:"u1"}],status:"confirmed",check:{},createdAt:a1,createdBy:"u1"});
 s.bookings.push({id:"bk2",no:++s.seq.booking,name:"سارة علي",phone:"01223456789",gid:"g2",child:"ليلى",age:5,date:dk(now),start:"19:00",end:"21:00",kids:12,pkg:"pp1",pkgName:s.partyPkgs[0].name,perChild:150,includes:s.partyPkgs[0].includes.slice(),extras:[],cake:"ديكور فراشات",notes:"",discount:0,payments:[{inv:"i2",a:600,at:a2,by:"u1"}],status:"confirmed",check:{},createdAt:a2,createdBy:"u1"});
 s.employees=[{id:"e1",name:"أحمد سعيد",job:"كاشير",phone:"01000000001",hireDate:"2025-03-01",wage:200,shift:"m",active:true,notes:""},
  {id:"e2",name:"منى فؤاد",job:"مشرفة فرع",phone:"01000000002",hireDate:"2024-09-01",wage:260,shift:"m",active:true,notes:""},
  {id:"e3",name:"هدى علي",job:"عاملة نظافة",phone:"01000000003",hireDate:"2025-06-15",wage:170,shift:"e",active:true,notes:""},
  {id:"e4",name:"كريم حسن",job:"منظّم حفلات",phone:"01000000004",hireDate:"2025-01-10",wage:220,shift:"e",active:true,notes:""},
  {id:"e5",name:"سلمى مجدي",job:"موظفة ألعاب",phone:"01000000005",hireDate:"2025-08-01",wage:180,shift:"m",active:true,notes:""}];
 s.seq.emp=5;
 const td=dk(now),ym0=td.slice(0,7);
 for(let i=-8;i<=8;i++){const k=addDays(td,i);s.roster[k]={};s.employees.forEach(e=>{s.roster[k][e.id]=e.shift})}
 for(let i=-5;i<=-1;i++){const k=addDays(td,i);s.attendance[k]={};s.employees.forEach(e=>{
  if(e.id==="e5"&&i>=-2)return;
  const mo=e.shift==="m";s.attendance[k][e.id]={status:"present",in:mo?"11:0"+(Math.abs(i)%4):"15:0"+(Math.abs(i)%4),out:"22:00",by:"u2",at:now}});}
 s.attendance[addDays(td,-2)].e5={status:"absent",in:"",out:"",by:"u2",at:now};
 s.leaves.push({id:"lv1",emp:"e5",from:addDays(td,-1),to:td,type:"paid",reason:"ظرف عائلي",by:"u3",at:now});
 s.penalties.push({id:"pn1",emp:"e3",date:addDays(td,-2),amount:50,reason:"تأخير متكرر",by:"u3"});
 s.faults.push({id:"f1",no:1,item:"الزحليقة الكبيرة",desc:"سطح خشن عند النزول",stopped:true,status:"open",note:"",by:"u2",at:now-3600000*5},{id:"f2",no:2,item:"حمام الكور",desc:"كور ناقصة",stopped:false,status:"done",note:"تم التعويض",by:"u1",at:now-86400000*2,updatedBy:"u2",updatedAt:now-86400000});s.seq.fault=2;
 s.bonuses.push({id:"bn1",emp:"e2",date:addDays(td,-3),amount:100,reason:"أداء متميز",by:"u3"});
 s.advances.push({id:"ad1",emp:"e1",date:monthAdd(ym0,-1)+"-20",amount:300,reason:"سلفة",by:"u3",deductMonth:ym0});

 return s;
}
const SHARED=["guardians","children","subs","packages","coupons","couponUses","users","balances","walletTx"],DBKEY="ls_db2",BKKEY="ls_backups";
function splitState(s){const sh={},br={};Object.keys(s).forEach(k=>{(SHARED.indexOf(k)>=0?sh:br)[k]=s[k]});return {sh:sh,br:br}}
function blankBranchState(base,zeroStock){
 const s=JSON.parse(JSON.stringify(base));
 ["visits","audit","invoices","refunds","shifts","bookings","employees","attendance","leaves","penalties","advances","bonuses","faults","stockLog","taskDefs","expenses"].forEach(k=>{s[k]=(k==="attendance"?{}:[])});
 ["roster","payrolls","taskLogs","evals","qcLogs","attendance"].forEach(k=>{s[k]={}});
 s.seq={visit:0,receipt:0,invoice:0,shift:0,booking:0,emp:0,fault:0};
 if(zeroStock)s.products.forEach(p=>{if(p.track)p.stock=0});
 return s;
}
function demoBranch2(base){
 const s=blankBranchState(base,false),now=Date.now(),m=60000;
 const prices={pr1:10,pr2:22,pr3:28,pr4:35,pr5:12,pr6:18,pr7:20};
 s.products.forEach(p=>{if(prices[p.id]!==undefined)p.price=prices[p.id]});
 const pr=id=>s.products.find(p=>p.id===id);
 const line=(id,q)=>{const p=pr(id);if(p&&p.track)p.stock=Math.max(0,p.stock-q);return {type:p.cat,name:p.name.ar,qty:q,price:p.price,total:p.price*q,ret:0,pid:id,ded:q}};
 const mk=(id,no,l,meth,ago)=>{const at=now-ago*m,tot=l.reduce((a,x)=>a+x.total,0);return {id:id,no:no,cashier:"u5",createdAt:at,shift:"sh_b2",lines:l,sub:tot,disc:{type:"pct",value:0,amount:0,reason:"",by:null},total:tot,payments:[{m:meth,a:tot,shift:"sh_b2",at:at}],creditAmt:0,gid:null,visitIds:[],void:null}};
 const i1=mk("b2i1",1,[line("pr2",2),line("pr4",1)],"cash",200),i2=mk("b2i2",2,[line("pr3",2),line("pr5",1)],"card",150);
 s.invoices=[i1,i2];
 s.shifts=[{id:"sh_b2",no:1,userId:"u5",openedAt:now-260*m,closedAt:now-100*m,closedBy:"u5",openingCash:100,expected:100+i1.total,counted:100+i1.total,diff:0,status:"closed",note:""}];
 s.seq.invoice=2;s.seq.shift=1;
 return s;
}
function freshDB(){const sp=splitState(seed());return {v:2,branches:[{id:"b1",name:"السموحة"},{id:"b2",name:"جليمنابوليس"}],shared:sp.sh,byBranch:{b1:sp.br,b2:demoBranch2(sp.br)}}}
function loadDB(){
 let raw=null;try{raw=localStorage.getItem(DBKEY)}catch(e){}
 if(raw){
  try{const d=JSON.parse(raw);if(d&&d.v===2&&d.branches&&d.shared&&d.byBranch)return d}catch(e){}
  window.__recovered="fresh";try{localStorage.setItem("ls_db2_corrupt",raw)}catch(e){}
  try{const bk=JSON.parse(localStorage.getItem(BKKEY)||"[]");for(let i=bk.length-1;i>=0;i--){try{const d=JSON.parse(bk[i].data);if(d&&d.v===2&&d.branches&&d.shared&&d.byBranch){window.__recovered="backup";return d}}catch(e){}}}catch(e){}
 }
 try{const old=localStorage.getItem("ls_db");if(old){const o=JSON.parse(old);migrate(o);const sp=splitState(o);return {v:2,branches:[{id:"b1",name:"السموحة"},{id:"b2",name:"جليمنابوليس"}],shared:sp.sh,byBranch:{b1:sp.br,b2:blankBranchState(sp.br,true)}}}}catch(e){}
 return freshDB();
}
let DB=loadDB();
let CUR=(()=>{let b="b1";try{b=sessionStorage.getItem("ls_branch")||"b1"}catch(e){}return DB.branches.some(x=>x.id===b)?b:DB.branches[0].id})();
function compose(id){const s=Object.assign({},DB.byBranch[id]);SHARED.forEach(k=>{s[k]=DB.shared[k]});return s}
let S=compose(CUR);migrate(S);
function syncOut(){const sp=splitState(S);SHARED.forEach(k=>{if(S[k]!==undefined)DB.shared[k]=S[k]});DB.byBranch[CUR]=sp.br}
syncOut();
function enterBranch(id){syncOut();CUR=id;S=compose(id);migrate(S);syncOut();try{sessionStorage.setItem("ls_branch",id)}catch(e){}}
function save(){
 syncOut();let txt;try{txt=JSON.stringify(DB)}catch(e){toast("تعذّر الحفظ في المتصفح");return}
 try{localStorage.setItem(DBKEY,txt);return}catch(e){}
 try{const a=JSON.parse(localStorage.getItem(BKKEY)||"[]");while(a.length){a.shift();try{localStorage.setItem(BKKEY,JSON.stringify(a))}catch(e){}try{localStorage.setItem(DBKEY,txt);return}catch(e){}}}catch(e){}
 toast("تعذّر الحفظ في المتصفح");
}
function log(action,details){S.audit.push({ts:Date.now(),user:me?me.name:"-",action:action,details:details||""});if(S.audit.length>5000)S.audit.shift()}
let me=(()=>{try{const id=sessionStorage.getItem("ls_user");return id?S.users.find(u=>u.id===id&&u.active)||null:null}catch(e){return null}})();
function bindBranch(){if(!me)return;let b=me.branch==="all"?CUR:me.branch;if(!DB.branches.some(x=>x.id===b))b=DB.branches[0].id;if(b!==CUR)enterBranch(b)}
bindBranch();
const can=p=>!!me&&PERMS[me.role].includes(p);
const G=id=>S.guardians.find(g=>g.id===id)||{name:t("erasedName"),phone:""};
const C=id=>S.children.find(c=>c.id===id)||{name:t("erasedName")};
const pn=v=>v.planName[lang]||v.planName.ar;
function toast(m){const e=$("#toast");e.textContent=m;e.style.display="block";clearTimeout(toast._t);toast._t=setTimeout(()=>e.style.display="none",Math.max(1,toastSec())*1000)}
function modal(h){const m=$("#modal");m.innerHTML='<div class="dlg">'+h+"</div>";m.hidden=false}
function closeModal(){const m=$("#modal");m.hidden=true;m.innerHTML=""}

/* ============ time & price calculation ============ */
function calc(v,now){
 const el=Math.max(0,Math.floor((now-v.checkIn)/60000));
 if(v.payMode==="pkg"){
  const units=Math.max(1,Math.ceil(el/30)),mins=units*30,use=Math.min(mins,pkgAvail(v.guardianId)),extra=mins-use;
  return {el:el,late:0,sug:0,base:r2(extra/30*openRate()),units:units,pkg:{mins:mins,use:use,extra:extra}};
 }
 if(v.planType==="open"){const units=Math.max(1,Math.ceil(el/30));return {el:el,late:0,sug:0,base:units*v.rate,units:units}}
 const late=Math.max(0,el-v.minutes);
 const sug=late>S.settings.graceMin?Math.ceil(late/15)*S.settings.lateFeePer15:0;
 const alt=el<=v.minutes?S.settings.plans.filter(p=>p.type==="fixed"&&p.price<v.price&&p.minutes<v.minutes&&el<=p.minutes+S.settings.graceMin).sort((a,b)=>a.price-b.price)[0]:null;
 return {el:el,late:late,sug:sug,base:v.price,units:0,sugBase:alt?alt.price:v.price,sugName:alt?(alt.name[lang]||alt.name.ar):""};
}
function info(v,now){
 const el=Math.floor((now-v.checkIn)/1000);
 if(v.planType==="open")return {state:"open",el:el};
 const left=v.minutes*60-el;
 return {state:left<0?"over":left<=S.settings.alertMin*60?"soon":"ok",left:left,el:el};
}

/* ============ printing (80mm thermal) ============ */
function printHTML(body){
 const f=document.createElement("iframe");f.style.cssText="position:fixed;width:0;height:0;border:0;";document.body.appendChild(f);
 const d=f.contentWindow.document;d.open();
 d.write('<html dir="'+(lang==="ar"?"rtl":"ltr")+'"><head><meta charset="utf-8"><style>@page{size:80mm auto;margin:0}body{width:72mm;margin:0 auto;padding:3mm 0;font-family:Tahoma,Arial,sans-serif;font-size:12px;color:#000}h1{font-size:16px;text-align:center;margin:0}h2{font-size:13px;text-align:center;margin:4px 0}.c{text-align:center}.r{display:flex;justify-content:space-between;gap:6px}hr{border:0;border-top:1px dashed #000;margin:6px 0}.kid{margin:5px 0}.b{font-weight:700}</style></head><body>'+body+"</body></html>");
 d.close();f.contentWindow.focus();setTimeout(()=>{try{f.contentWindow.print()}catch(e){}setTimeout(()=>f.remove(),3000)},300);
}
function rcptHead(title,rno,ts){
 return '<h1>'+esc(S.settings.venue)+'</h1>'+(S.settings.branch?'<div class="c">'+esc(S.settings.branch)+'</div>':'')+'<h2>'+title+' • '+t("rcptNo")+' '+rno+'</h2><div class="c">'+fDate(ts)+' '+fTime(ts)+'</div><hr>';
}
function receiptEntry(vs){
 const g=G(vs[0].guardianId);
 let h=rcptHead(t("rcptEntry"),vs[0].rno,vs[0].checkIn)+'<div class="r"><span>'+t("guardian")+'</span><span class="b">'+esc(g.name)+"</span></div><hr>";
 vs.forEach(v=>{
  const ex=v.planType==="open"?t("open"):fTime(v.checkIn+v.minutes*60000);
  h+='<div class="kid"><div class="b">'+esc(C(v.childId).name)+'</div><div class="r"><span>'+t("checkIn")+'</span><span>'+fTime(v.checkIn)+'</span></div><div class="r"><span>'+t("expectedExit")+'</span><span>'+ex+'</span></div><div class="r"><span>'+t("plan")+'</span><span>'+esc(pn(v))+'</span></div><div class="r"><span>'+t("price")+'</span><span>'+(v.payMode==="pkg"?t("fromPackage"):v.planType==="open"?esc(money(v.rate))+" / 30":esc(money(v.price)))+"</span></div></div>";
 });
 return h+(vs[0].prepaid?"<hr>"+(()=>{const inv=S.invoices.find(x=>x.id===vs[0].invoiceId);return inv?rw(t("paidTag")+" • "+t("rcptNo")+" "+inv.no,money(inv.total),true):""})():"")+'<hr><div class="c">'+t("rcptFoot")+"</div>";
}
function receiptExitGroup(vs,inv){
 const g=G(vs[0].guardianId),ts=vs[0].checkOut;let tot=0;
 let h=rcptHead(t("rcptExit"),vs[0].rno+(inv?" / "+inv.no:""),ts)+'<div class="r"><span>'+t("guardian")+'</span><span class="b">'+esc(g.name)+"</span></div><hr>";
 vs.forEach(v=>{const dur=Math.round((v.checkOut-v.checkIn)/60000);tot+=(v.total||0)+(v.itemsTotal||0);
  h+='<div class="kid"><div class="b">'+esc(C(v.childId).name)+'</div><div class="r"><span>'+t("checkIn")+'</span><span>'+fTime(v.checkIn)+'</span></div><div class="r"><span>'+t("checkOut")+'</span><span>'+fTime(v.checkOut)+'</span></div><div class="r"><span>'+t("duration")+'</span><span>'+fMin(dur)+'</span></div><div class="r"><span>'+t("plan")+'</span><span>'+esc(pn(v))+"</span></div>"+
  (v.payMode==="pkg"?'<div class="r"><span>'+t("fromPackage")+'</span><span>'+fMin(v.pkgMins||0)+"</span></div>":'<div class="r"><span>'+t("planPrice")+'</span><span>'+esc(money(v.price))+"</span></div>")+
  (v.lateFee>0?'<div class="r"><span>'+t("late")+" ("+fMin(v.lateMin)+')</span><span>'+esc(money(v.lateFee))+"</span></div>":"")+vItems(v).map(x=>'<div class="r"><span>'+esc(x.name)+(x.qty>1?" ×"+x.qty:"")+'</span><span>'+esc(money(x.qty*x.price))+"</span></div>").join("")+"</div><hr>";
 });
 if(inv&&inv.disc&&inv.disc.amount>0)h+='<div class="r"><span>'+t("discount")+'</span><span>-'+esc(money(inv.disc.amount))+"</span></div>";
 h+='<div class="r b"><span>'+t("total")+'</span><span>'+esc(money(inv?inv.total:tot))+'</span></div><hr><div class="c">'+t("thanks")+"</div>";
 return h;
}
function receiptExit(v){
 const g=G(v.guardianId);const dur=Math.round((v.checkOut-v.checkIn)/60000);
 let h=rcptHead(t("rcptExit"),v.rno,v.checkOut)+'<div class="r"><span>'+t("guardian")+'</span><span class="b">'+esc(g.name)+'</span></div><hr><div class="kid"><div class="b">'+esc(C(v.childId).name)+'</div>';
 h+='<div class="r"><span>'+t("checkIn")+'</span><span>'+fTime(v.checkIn)+'</span></div><div class="r"><span>'+t("checkOut")+'</span><span>'+fTime(v.checkOut)+'</span></div><div class="r"><span>'+t("duration")+'</span><span>'+fMin(dur)+'</span></div><div class="r"><span>'+t("plan")+'</span><span>'+esc(pn(v))+"</span></div></div><hr>";
 h+=(v.payMode==="pkg"?'<div class="r"><span>'+t("fromPackage")+'</span><span>'+fMin(v.pkgMins||0)+"</span></div>":'<div class="r"><span>'+t("planPrice")+'</span><span>'+esc(money(v.price))+"</span></div>");
 if(v.lateFee>0)h+='<div class="r"><span>'+t("late")+" ("+fMin(v.lateMin)+')</span><span>'+esc(money(v.lateFee))+"</span></div>";
 h+='<div class="r b"><span>'+t("total")+'</span><span>'+esc(money(v.total))+'</span></div><hr><div class="c">'+t("thanks")+"</div>";
 return h;
}

/* ============ shell ============ */
let view="present";
const views={};
function setLang(l){lang=l;try{localStorage.setItem("ls_lang",l)}catch(e){}render()}
function go(v){view=v;ALK={};render()}
function render(){
 document.documentElement.lang=lang;document.documentElement.dir=lang==="ar"?"rtl":"ltr";
 document.title=S.settings.venue;
 if(!me){return renderLogin()}
 const items=[["present","present",true],["entry","newEntry",can("entry")],["pos","posTitle",can("pos")],["shift","shiftTitle",can("shift")],["invoices","invoices",can("invoices")],["expenses","expTitle",can("expense")],["parties","partiesTitle",can("parties")],["hr","hrTitle",can("attendance")||can("hr")],["inventory","invTitle",can("inventory")],["maint","maintTitle",can("report")],["reports","reportsTitle",can("reportShift")],["guardians","guardians",can("guardians")],["settings","settings",can("settings")||can("users")],["audit","audit",can("audit")]].filter(x=>x[2]);
 if(!items.some(x=>x[0]===view))view="present";
 $("#app").innerHTML='<header><h1>'+esc(S.settings.venue)+(S.settings.branch?" – "+esc(S.settings.branch):"")+'</h1>'+branchBadge()+'<span class="who">'+esc(me.name)+" ("+t(ROLES[me.role])+')</span><button class="btn sm" onclick="setLang(\''+(lang==="ar"?"en":"ar")+'\')">'+(lang==="ar"?"English":"عربي")+'</button><button class="btn sm" onclick="logout()">'+t("logout")+'</button></header><nav>'+
  items.map(x=>'<button class="'+(view===x[0]?"on":"")+'" onclick="go(\''+x[0]+'\')">'+t(x[1])+"</button>").join("")+'</nav><main id="view"></main>';
 views[view]();
}
function renderLogin(){
 const act=S.users.filter(u=>u.active);
 if(!act.length)return renderSetup();
 $("#app").innerHTML='<div class="login card"><h2>'+t("appName")+'</h2><label>'+t("user")+'<select id="lu">'+act.map(u=>'<option value="'+u.id+'">'+esc(u.name)+" – "+t(ROLES[u.role])+"</option>").join("")+'</select></label><label>'+t("pin")+'<input id="lp" type="password" inputmode="numeric" maxlength="4" onkeydown="if(event.key===\'Enter\')doLogin()"></label><button class="btn pri big" onclick="doLogin()">'+t("enter")+'</button>'+'<p class="muted" style="font-size:11px;text-align:center;margin-top:14px">'+t("rights")+'</p><div class="row"><button class="btn sm" onclick="setLang(\''+(lang==="ar"?"en":"ar")+'\')">'+(lang==="ar"?"English":"عربي")+"</button></div></div>";
}
/* ============ first run: create the first admin (no default PINs) ============ */
function setupNeeded(){return !((S&&S.users)||[]).some(u=>u.active)}
function pinWeak(p){return /^(\d)\1{3}$/.test(p)||["1234","4321","0123","3210","2345","5432","6789","9876"].includes(p)}
function renderSetup(){
 $("#app").innerHTML='<div class="login card"><h2>'+t("appName")+'</h2><h3>'+t("setupTitle")+'</h3><p class="muted">'+t("setupHint")+'</p>'+
 '<label>'+t("setupName")+'<input id="sn" autocomplete="off"></label>'+
 '<label>'+t("setupPin")+'<input id="sp" type="password" inputmode="numeric" maxlength="4" autocomplete="new-password"></label>'+
 '<label>'+t("setupPin2")+'<input id="sp2" type="password" inputmode="numeric" maxlength="4" autocomplete="new-password" onkeydown="if(event.key===\'Enter\')setupAdmin()"></label>'+
 '<button class="btn pri big" onclick="setupAdmin()">'+t("setupCreate")+'</button>'+
 '<details style="margin-top:14px"><summary>'+t("setupJoin")+'</summary><p class="muted">'+t("setupJoinHint")+'</p>'+
 '<label>'+t("syUrl")+'<input id="syu" dir="ltr" value="'+esc(SY.url)+'"></label><label>'+t("syKey")+'<input id="syk" dir="ltr" value="'+esc(SY.key)+'"></label>'+
 '<label>'+t("syEmail")+'<input id="sye" dir="ltr" value="'+esc(SY.email)+'"></label><label>'+t("syPass")+'<input id="syp" type="password" dir="ltr"></label>'+
 '<div class="muted" id="symsg"></div><button class="btn" onclick="syJoinDB()">'+t("setupJoinBtn")+'</button></details>'+
 '<p class="muted" style="font-size:11px;text-align:center;margin-top:14px">'+t("rights")+'</p><div class="row"><button class="btn sm" onclick="setLang(\''+(lang==="ar"?"en":"ar")+'\')">'+(lang==="ar"?"English":"عربي")+"</button></div></div>";
}
function setupAdmin(){
 if(!setupNeeded())return;
 const name=($("#sn").value||"").trim(),p1=norm($("#sp").value),p2=norm($("#sp2").value);
 if(!name){toast(t("setupNoName"));return}
 if(!/^\d{4}$/.test(p1)){toast(t("setupPin4"));return}
 if(p1!==p2){toast(t("setupMismatch"));return}
 if(pinWeak(p1)){toast(t("setupWeak"));return}
 const u={id:uid(),name:name,role:"admin",active:true,branch:"all"};pinSet(u,p1);S.users.push(u);
 me=u;log("first admin created",name);bindBranch();try{sessionStorage.setItem("ls_user",u.id)}catch(e){}save();view="present";render();
}
/* حماية الدخول: قفل مؤقت بعد 5 محاولات خاطئة لنفس المستخدم، ويتضاعف زمن القفل (30ث، 60ث، 2د ... حتى 15د) */
const PINFK="ls_pinfail";
function pinFails(){try{return JSON.parse(localStorage.getItem(PINFK)||"{}")}catch(e){return {}}}
function pinFailSave(o){try{localStorage.setItem(PINFK,JSON.stringify(o))}catch(e){}}
function pinLockLeft(id){const f=pinFails()[id];return f&&f.until>Date.now()?Math.ceil((f.until-Date.now())/1000):0}
function pinFailAdd(id){const o=pinFails(),f=o[id]||{n:0,until:0};f.n++;if(f.n>=5)f.until=Date.now()+Math.min(900000,30000*Math.pow(2,f.n-5));o[id]=f;pinFailSave(o);log("login failed",id)}
function doLogin(){
 const u=S.users.find(x=>x.id===$("#lu").value&&x.active);
 const lk=u?pinLockLeft(u.id):0;
 if(lk){toast(t("pinLocked")+" "+lk+" "+t("secs"));return}
 if(!u||!pinOk(u,norm($("#lp").value))){if(u){pinFailAdd(u.id);save()}toast(t("wrongPin"));return}
 {const o=pinFails();if(o[u.id]){delete o[u.id];pinFailSave(o)}}
 me=u;bindBranch();try{sessionStorage.setItem("ls_user",u.id)}catch(e){}log("login");autoBackup();save();view="present";render();
}
/* خروج تلقائي عند عدم النشاط (الافتراضي 30 دقيقة؛ S.settings.idleMin=0 لإيقافه) */
let lastAct=Date.now();
function idleLimit(){const m=S&&S.settings&&S.settings.idleMin;return (m==null?30:+m)*60000}
function idleCheck(){if(!me)return;const L=idleLimit();if(L>0&&Date.now()-lastAct>L){toast(t("idleOut"));logout()}}
["click","keydown","touchstart","mousemove"].forEach(e=>document.addEventListener(e,()=>{lastAct=Date.now()},{passive:true,capture:true}));
setInterval(idleCheck,30000);
function logout(){log("logout");save();me=null;try{sessionStorage.removeItem("ls_user")}catch(e){}render()}

/* ============ present now ============ */
views.present=function(){
 $("#view").innerHTML='<div class="bar"><h2>'+t("present")+' <span id="cnt" class="badge"></span></h2><input id="flt" style="max-width:340px" placeholder="'+t("searchHere")+'" oninput="presentRows()"></div><div id="alerts"></div><div class="card"><table><thead><tr><th>#</th><th>'+t("child")+"</th><th>"+t("guardian")+"</th><th>"+t("phone")+"</th><th>"+t("plan")+"</th><th>"+t("checkIn")+"</th><th>"+t("timeLeft")+'</th><th></th></tr></thead><tbody id="rows"></tbody></table></div>';
 presentRows();
};
function presentRows(){
 const body=document.getElementById("rows");if(!body||view!=="present")return;
 const q=norm((document.getElementById("flt")||{}).value||"");const now=Date.now();
 let list=S.visits.filter(v=>v.status==="in");
 const all=list.length;
 if(q)list=list.filter(v=>[C(v.childId).name,G(v.guardianId).name,phonesTxt(G(v.guardianId)),String(v.rno)].some(x=>norm(x).includes(q)));
 list.sort((a,b)=>{const ia=info(a,now),ib=info(b,now);const ka=ia.state==="open"?1e9+a.checkIn:ia.left,kb=ib.state==="open"?1e9+b.checkIn:ib.left;return ka-kb});
 let soon=0,over=0;
 S.visits.filter(v=>v.status==="in").forEach(v=>{const s=info(v,now).state;if(s==="soon")soon++;if(s==="over")over++});
 document.getElementById("cnt").textContent=all;
 document.getElementById("alerts").innerHTML=(over?'<div class="alertbox over">⚠ '+over+" "+t("overN")+"</div>":"")+(soon?'<div class="alertbox soon">⏰ '+soon+" "+t("soonN")+"</div>":"")+partyReminderHTML()+p6Alerts();
 body.innerHTML=list.length?list.map(v=>{
  const i=info(v,now);let cell;
  if(i.state==="open")cell='<span class="tag open">'+t("open")+" • "+fDur(i.el)+"</span>";
  else if(i.state==="over")cell='<span class="tag over">'+t("late")+" "+fDur(i.left)+"</span>";
  else cell='<span class="tag '+i.state+'">'+fDur(i.left)+"</span>";
  const g=G(v.guardianId);
  return "<tr><td>"+v.rno+"</td><td><b>"+esc(C(v.childId).name)+"</b>"+(C(v.childId).notes?'<div class="muted">'+esc(C(v.childId).notes)+"</div>":"")+"</td><td>"+esc(g.name)+"</td><td dir=\"ltr\">"+esc(phonesTxt(g))+"</td><td>"+esc(pn(v))+(v.prepaid?' <span class="badge">'+t("paidTag")+"</span>":"")+(v.payMode==="pkg"?' <span class="badge">'+t("pkgTag")+"</span>":"")+"</td><td>"+fTime(v.checkIn)+"</td><td>"+cell+(vItems(v).length?' <span class="badge">🍽 '+money(vItemsTot(v))+"</span>":"")+'</td><td><button class="btn ok sm" onclick="checkoutModal(\''+v.id+"')\">"+t("doCheckout")+'</button> '+(can("pos")?'<button class="btn sm" onclick="visitItemsModal(\''+v.id+"')\">🍽</button> ":"")+'<button class="btn sm" onclick="waVisit(\''+v.id+"')\">💬</button>"+(S.visits.filter(x=>x.status==="in"&&x.guardianId===v.guardianId).length>1?' <button class="btn sm" onclick="checkoutGroupModal(\''+v.guardianId+"')\">"+t("grpExit")+" ("+S.visits.filter(x=>x.status==="in"&&x.guardianId===v.guardianId).length+")</button>":"")+"</td></tr>";
 }).join(""):'<tr><td colspan="8" class="muted">'+t("noneInside")+"</td></tr>";
}
window._md=0;["mousedown","touchstart"].forEach(e=>document.addEventListener(e,()=>{window._md=1},true));["mouseup","touchend","touchcancel"].forEach(e=>document.addEventListener(e,()=>{setTimeout(()=>{window._md=0},80)},true));
setInterval(()=>{if(me&&view==="present"&&!window._md)presentRows()},1000);

/* ============ new check-in ============ */
let E={g:null,kids:[],plan:null,print:true,note:"",pay:"exit"};
function resetE(){E={g:null,kids:[],plan:null,print:true,note:"",pay:"exit"}}
views.entry=function(){entryRender()};
function entryRender(){
 const g=E.g?S.guardians.find(x=>x.id===E.g):null;
 const kids=g?S.children.filter(c=>c.guardianId===g.id):[];
 const inside=id=>insideAny(id);
 let left='<div class="card"><h3>1. '+t("guardian")+"</h3>";
 if(!g){left+='<input id="es" placeholder="'+t("searchGuardian")+'" oninput="entrySearch(this.value)" autofocus><div id="eres"></div><div class="row"><button class="btn pri" onclick="guardianModal(\'\',id=>{pickGuardian(id)})">'+t("newGuardian")+"</button></div>"}
 else{
  left+='<div class="line"><b>'+esc(g.name)+'</b><span dir="ltr">'+esc(phonesTxt(g))+'</span></div>'+(g.notes?'<div class="muted">'+esc(g.notes)+"</div>":"")+acctLine(g.id)+'<div class="row"><button class="btn sm" onclick="E.g=null;E.kids=[];entryRender()">'+t("changeGuardian")+"</button></div><h4>"+t("selectChildren")+"</h4>"+
  kids.map(c=>{const ins=inside(c.id),on=E.kids.includes(c.id);return '<label class="opt '+(on?"on":"")+(ins?" dis":"")+'"><input type="checkbox" '+(on?"checked":"")+(ins?" disabled":"")+' onchange="toggleKid(\''+c.id+'\')"><span><b>'+esc(c.name)+"</b> • "+c.age+" "+t("years")+(ins?' <span class="badge">'+t("inside")+"</span>":"")+(c.notes?'<div class="muted">'+esc(c.notes)+"</div>":"")+"</span></label>"}).join("")+
  '<div class="row"><button class="btn sm" onclick="childModal(\''+g.id+"','',id=>{E.kids.push(id);entryRender()})\">"+t("addChild")+"</button></div>";
 }
 left+="</div>";
 const pl=S.settings.plans.filter(x=>x.type!=="open");
 let sum=0;const n=E.kids.length;const p=pl.find(x=>x.id===E.plan);if(p&&p.type==="fixed"&&E.pay!=="pkg")sum=p.price*n;if(p&&p.type==="open"&&E.pay==="now")E.pay="exit";if(E.pay==="pkg"&&(!g||!pkgAvail(g.id)))E.pay="exit";
 let right='<div class="card"><h3>2. '+t("choosePlan")+"</h3>"+pl.map(x=>'<label class="opt '+(E.plan===x.id?"on":"")+'"><input type="radio" name="pl" '+(E.plan===x.id?"checked":"")+' onchange="E.plan=\''+x.id+'\';entryRender()"><span><b>'+esc(x.name[lang])+"</b> • "+(x.type==="fixed"?fMin(x.minutes)+" • "+money(x.price):money(x.rate)+" "+t("perHalf"))+"</span></label>").join("")+
  '<h4>'+t("payWhen")+'</h4><label class="opt '+(E.pay==="now"?"on":"")+(p&&p.type==="open"?" dis":"")+'"><input type="radio" name="pw" '+(E.pay==="now"?"checked":"")+(p&&p.type==="open"?" disabled":"")+' onchange="E.pay=\'now\';entryRender()"><span>'+t("payNow")+'</span></label><label class="opt '+(E.pay==="exit"?"on":"")+'"><input type="radio" name="pw" '+(E.pay==="exit"?"checked":"")+' onchange="E.pay=\'exit\';entryRender()"><span>'+t("payLater")+'</span></label>'+(g&&pkgAvail(g.id)>0?'<label class="opt '+(E.pay==="pkg"?"on":"")+'"><input type="radio" name="pw" '+(E.pay==="pkg"?"checked":"")+' onchange="E.pay=\'pkg\';entryRender()"><span>'+t("payPkg")+" ("+fMin(pkgAvail(g.id))+")</span></label>":"")+
  '<label>'+t("visitNote")+'<input id="en" value="'+esc(E.note)+'" oninput="E.note=this.value"></label>'+
  '<label class="opt" style="margin-top:6px"><input type="checkbox" '+(E.print?"checked":"")+' onchange="E.print=this.checked"><span>'+t("printReceipt")+"</span></label>"+
  (sum?'<div class="line"><span>'+t("total")+'</span><span class="tot">'+money(sum)+"</span></div>":"")+
  '<button class="btn pri big" onclick="submitEntry()">'+t("confirmEntry")+"</button></div>";
 $("#view").innerHTML="<h2>"+t("newEntry")+'</h2><div class="grid2">'+left+right+"</div>";
}
function guardianMatches(q){
 q=norm(q);if(!q)return [];
 return S.guardians.filter(g=>norm(g.name).includes(q)||norm(phonesTxt(g)).includes(q)||S.children.some(c=>c.guardianId===g.id&&norm(c.name).includes(q))).slice(0,8);
}
function entrySearch(q){
 const r=guardianMatches(q);
 $("#eres").innerHTML=!norm(q)?"":r.length?r.map(g=>'<div class="res" onclick="pickGuardian(\''+g.id+'\')"><b>'+esc(g.name)+'</b> <span dir="ltr" class="muted">'+esc(phonesTxt(g))+"</span><div class=\"muted\">"+S.children.filter(c=>c.guardianId===g.id).map(c=>esc(c.name)).join("، ")+"</div></div>").join(""):'<div class="muted">'+t("none")+"</div>";
}
function pickGuardian(id){
 E.g=id;const kids=S.children.filter(c=>c.guardianId===id&&!insideAny(c.id));
 E.kids=kids.length===1?[kids[0].id]:[];entryRender();
}
function toggleKid(id){const i=E.kids.indexOf(id);if(i>=0)E.kids.splice(i,1);else E.kids.push(id);entryRender()}
function submitEntry(){
 if(!E.g){toast(t("needGuardian"));return}
 if(!E.kids.length){toast(t("needKids"));return}
 const plan=S.settings.plans.find(p=>p.id===E.plan);if(!plan){toast(t("needPlan"));return}
 if(E.kids.some(id=>insideAny(id))){toast(t("inside"));return}
 const mk=()=>{const now=Date.now(),grp=uid(),rno=nextNo("receipt");return E.kids.map(id=>mkVisit(S,id,plan,now,grp,rno,me.id,E.note))};
 if(E.pay==="now"&&plan.type==="fixed"){
  if(!requireShift())return;
  const lines=E.kids.map(id=>({type:"visit",name:plan.name[lang]+" – "+C(id).name,qty:1,price:plan.price}));
  payOpen({title:t("payEntryTitle"),lines:lines,gid:E.g,print:false,onDone:inv=>commitEntry(mk(),inv)});
 }else{const vs=mk();if(E.pay==="pkg"&&pkgAvail(E.g)>0)vs.forEach(v=>{v.payMode="pkg"});commitEntry(vs,null)}
}
function commitEntry(vs,inv){
 if(inv){vs.forEach(v=>{v.prepaid=true;v.invoiceId=inv.id});inv.visitIds=vs.map(v=>v.id)}
 vs.forEach(v=>S.visits.push(v));
 log("check-in","#"+vs[0].rno+" "+vs.map(v=>C(v.childId).name).join(", ")+" / "+G(vs[0].guardianId).name+(inv?" (paid, invoice #"+inv.no+")":"")+(vs[0].payMode==="pkg"?" (package)":""));save();
 if(E.print)printHTML(receiptEntry(vs));
 toast(t("entryDone"));resetE();view="present";render();
}

/* ============ guardian & child forms ============ */
let _cb=null;
function normPhone(p){return norm(p).replace(/[\s\-()]/g,"")}
function phonesOf(g){return [g&&g.phone].concat((g&&g.morePhones)||[]).filter(Boolean)}
function phonesTxt(g){return phonesOf(g).join(" / ")}
function parsePhones(txt,primary){const out=[];String(txt||"").split(/[,\u060C;\u061B\n]/).forEach(x=>{const p=normPhone(x);if(p&&p!==primary&&out.indexOf(p)<0)out.push(p)});return out}
function guardianModal(gid,cb){
 const g=gid?S.guardians.find(x=>x.id===gid):null;_cb=cb||null;
 modal("<h3>"+(g?t("editGuardian"):t("newGuardian"))+'</h3><label>'+t("guardianName")+'<input id="gn" value="'+esc(g?g.name:"")+'"></label><label>'+t("phone")+'<input id="gp" inputmode="tel" dir="ltr" value="'+esc(g?g.phone:"")+'"></label><label>'+t("morePhones")+'<input id="gp2" inputmode="tel" dir="ltr" value="'+esc(g?(g.morePhones||[]).join(", "):"")+'"></label><label>'+t("notes")+'<input id="gnote" value="'+esc(g?g.notes:"")+'"></label>'+
 (g?"":"<h4>"+t("firstChild")+'</h4><label>'+t("childName")+'<input id="cn"></label><label>'+t("age")+'<input id="ca" type="number" min="0" max="17"></label><label>'+t("notes")+'<input id="cnote"></label>')+
 '<div class="row"><button class="btn pri" onclick="saveGuardian(\''+(gid||"")+'\')">'+t("save")+'</button><button class="btn" onclick="closeModal()">'+t("cancel")+"</button>"+(g&&can("reset")?'<button class="btn bad" onclick="guardianErase(\''+gid+'\')">'+t("eraseBtn")+"</button>":"")+"</div>");
}
/* ============ حذف بيانات عميل نهائيًا (عند طلبه أو انتهاء الغرض) ============ */
function eraseTxt(str,words,rep){if(typeof str!=="string"||!str)return str;let o=str;words.forEach(w=>{if(w&&w.length>=2)o=o.split(w).join(rep)});return o}
function guardianErase(gid){
 if(!can("reset"))return;
 const g=S.guardians.find(x=>x.id===gid);if(!g)return;
 const kids=S.children.filter(c=>c.guardianId===gid),kidIds=kids.map(c=>c.id);
 if(S.visits.some(v=>v.status==="in"&&(v.guardianId===gid||kidIds.indexOf(v.childId)>=0))){toast(t("eraseInside"));return}
 const bal=(S.balances&&S.balances[gid])||0,subs=(S.subs||[]).filter(x=>x.gid===gid&&x.status==="active"&&x.remaining>0&&x.expiresAt>Date.now());
 if(!confirm(t("eraseSure")+(bal>0||subs.length?"\n\n"+t("eraseBal"):"")))return;
 if(!confirm(t("eraseSure2")+"\n"+g.name))return;
 const words=[g.name].concat(kids.map(c=>c.name),phonesOf(g)),rep=t("erasedName");
 syncOut();
 const states=DB.branches.map(b=>DB.byBranch[b.id]).filter(Boolean);
 states.forEach(b=>{
  (b.invoices||[]).forEach(inv=>{(inv.lines||[]).forEach(l=>{l.name=eraseTxt(l.name,words,rep)});if(inv.gid===gid)delete inv.gid;if(inv.note)inv.note=eraseTxt(inv.note,words,rep)});
  (b.bookings||[]).forEach(bk=>{if(bk.gid===gid||(bk.phone&&phonesOf(g).indexOf(bk.phone)>=0)){bk.name=rep;bk.phone="";bk.child="";bk.note="";delete bk.gid;if(bk.notes)bk.notes=""}});
  (b.visits||[]).forEach(v=>{if(v.note)v.note=eraseTxt(v.note,words,rep);if(v.lateNote)v.lateNote=eraseTxt(v.lateNote,words,rep)});
  (b.audit||[]).forEach(a=>{a.details=eraseTxt(a.details,words,rep)});
 });
 S.guardians=S.guardians.filter(x=>x.id!==gid);
 S.children=S.children.filter(c=>c.guardianId!==gid);
 S.subs=(S.subs||[]).filter(x=>x.gid!==gid);
 if(S.balances)delete S.balances[gid];
 S.walletTx=(S.walletTx||[]).filter(x=>x.gid!==gid&&x.g!==gid);
 S.couponUses=(S.couponUses||[]).filter(x=>x.gid!==gid);
 try{localStorage.removeItem(BKKEY)}catch(e){}
 log("erase customer","#"+gid);save();closeModal();toast(t("eraseDone"));render();
}
function validAge(a){return Number.isInteger(a)&&a>=0&&a<=17}
function saveGuardian(gid){
 const name=$("#gn").value.trim(),phone=normPhone($("#gp").value),more=parsePhones($("#gp2")?$("#gp2").value:"",phone);
 if(!name){toast(t("needName"));return}
 if(!/^\+?\d{8,15}$/.test(phone)||more.some(p=>!/^\+?\d{8,15}$/.test(p))){toast(t("badPhone"));return}
 if(S.guardians.some(x=>x.id!==gid&&[phone].concat(more).some(p=>phonesOf(x).indexOf(p)>=0))){toast(t("dupPhone"));return}
 let id=gid;
 if(gid){const g=S.guardians.find(x=>x.id===gid);g.name=name;g.phone=phone;g.morePhones=more;g.notes=$("#gnote").value.trim();log("edit guardian",name)}
 else{
  const cn=$("#cn").value.trim(),ca=parseInt(norm($("#ca").value),10);
  if(!cn){toast(t("needName"));return}if(!validAge(ca)){toast(t("badAge"));return}
  id=uid();S.guardians.push({id:id,name:name,phone:phone,morePhones:more,notes:$("#gnote").value.trim()});
  S.children.push({id:uid(),guardianId:id,name:cn,age:ca,notes:$("#cnote").value.trim()});log("new guardian",name+" / "+cn);
 }
 save();closeModal();const cb=_cb;_cb=null;if(cb)cb(id);else render();
}
function childModal(gid,cid,cb){
 const c=cid?S.children.find(x=>x.id===cid):null;_cb=cb||null;
 modal("<h3>"+(c?t("editChild"):t("addChild"))+'</h3><label>'+t("childName")+'<input id="cn" value="'+esc(c?c.name:"")+'"></label><label>'+t("age")+'<input id="ca" type="number" min="0" max="17" value="'+(c?c.age:"")+'"></label><label>'+t("notes")+'<input id="cnote" value="'+esc(c?c.notes:"")+'"></label><div class="row"><button class="btn pri" onclick="saveChild(\''+gid+"','"+(cid||"")+'\')">'+t("save")+'</button><button class="btn" onclick="closeModal()">'+t("cancel")+"</button></div>");
}
function saveChild(gid,cid){
 const name=$("#cn").value.trim(),age=parseInt(norm($("#ca").value),10);
 if(!name){toast(t("needName"));return}if(!validAge(age)){toast(t("badAge"));return}
 let id=cid;
 if(cid){const c=S.children.find(x=>x.id===cid);c.name=name;c.age=age;c.notes=$("#cnote").value.trim()}
 else{id=uid();S.children.push({id:id,guardianId:gid,name:name,age:age,notes:$("#cnote").value.trim()})}
 log(cid?"edit child":"new child",name);save();closeModal();const cb=_cb;_cb=null;if(cb)cb(id);else render();
}
views.guardians=function(){
 $("#view").innerHTML='<div class="bar"><h2>'+t("guardians")+'</h2><div class="row"><input id="gq" style="max-width:300px" placeholder="'+t("searchGuardian")+'" oninput="guardianRows()"><button class="btn pri" onclick="guardianModal(\'\')">'+t("newGuardian")+'</button>'+(can("reports")?'<button class="btn" onclick="gcXlsx()">'+t("rpXlsx")+'</button><button class="btn" onclick="gcPdf()">'+t("rpPdf")+'</button>':"")+'</div></div><div id="grows"></div>';
 guardianRows();
};
function guardianRows(){
 const q=norm(($("#gq")||{}).value||"");
 const list=(q?guardianMatches(q):S.guardians.slice().sort((a,b)=>a.name.localeCompare(b.name,"ar"))).slice(0,60);
 $("#grows").innerHTML=list.length?list.map(g=>{
  const kids=S.children.filter(c=>c.guardianId===g.id);
  return '<div class="card"><div class="bar"><div><b>'+esc(g.name)+'</b> <span dir="ltr" class="muted">'+esc(phonesTxt(g))+'</span>'+(g.notes?'<div class="muted">'+esc(g.notes)+"</div>":"")+'</div><button class="btn sm" onclick="guardianModal(\''+g.id+"')\">"+t("edit")+"</button></div>"+
   kids.map(c=>'<div class="line"><span>'+esc(c.name)+" • "+c.age+" "+t("years")+(c.notes?' <span class="muted">('+esc(c.notes)+")</span>":"")+'</span><span><span class="muted">'+S.visits.filter(v=>v.childId===c.id).length+" "+t("visitsCount")+'</span> <button class="btn sm" onclick="childModal(\''+g.id+"','"+c.id+"')\">"+t("edit")+"</button></span></div>").join("")+
   '<div class="row"><button class="btn sm" onclick="childModal(\''+g.id+"','')\">"+t("addChild")+"</button></div></div>";
 }).join(""):'<div class="muted">'+t("none")+"</div>";
}

/* ============ check-out ============ */
function checkoutModal(id,ts){
 const v=S.visits.find(x=>x.id===id);if(!v||v.status!=="in")return;
 const now=ts||Date.now(),c=calc(v,now),pk=c.pkg;
 window._co={id:id,ts:now,c:c,prep:!!v.prepaid};
 const open=v.planType==="open";
 modal("<h3>"+t("exitTitle")+" – "+esc(C(v.childId).name)+'</h3><div class="muted">'+esc(G(v.guardianId).name)+" • "+t("rcptNo")+" "+v.rno+"</div><hr>"+
  '<div class="line"><span>'+t("checkIn")+"</span><span>"+fTime(v.checkIn)+'</span></div><div class="line"><span>'+t("checkOut")+"</span><span>"+fTime(now)+'</span></div><div class="line"><span>'+t("duration")+"</span><span>"+fMin(c.el)+'</span></div><div class="line"><span>'+t("plan")+"</span><span>"+esc(pn(v))+"</span></div>"+
  (open?'<div class="line"><span>'+t("openUnits")+"</span><span>"+c.units+"</span></div>":"")+
  (pk?'<div class="line"><span>'+t("fromPackage")+"</span><span>"+fMin(pk.use)+"</span></div>"+(pk.extra?'<div class="line"><span>'+t("extraTime")+"</span><span>"+fMin(pk.extra)+" • "+money(c.base)+"</span></div>":""):(c.sugBase!==undefined&&!v.prepaid&&c.late===0?('<label>'+t("priceEdit")+" ("+money(v.price)+')<input id="cbp" type="number" min="0" step="0.5" value="'+c.sugBase+'" oninput="coUpdate()"></label>'+(c.sugBase<v.price?'<div class="muted">'+t("earlyHint")+" "+esc(c.sugName)+" • "+money(c.sugBase)+"</div>":"")):'<div class="line"><span>'+t("planPrice")+(v.prepaid?" ("+t("paidTag")+")":"")+'</span><span id="cbase">'+money(c.base)+"</span></div>"))+
  (open||c.late===0?"":'<div class="line"><span>'+t("lateMin")+"</span><span>"+fMin(c.late)+'</span></div><div class="line"><span>'+t("suggestedFee")+"</span><span>"+money(c.sug)+"</span></div>"+
   '<label>'+t("lateFee")+'<input id="cfee" type="number" min="0" step="0.5" value="'+c.sug+'" oninput="coUpdate()" '+(can("late")?"":"disabled")+'></label>')+
  (vItems(v).length?vItems(v).map(x=>'<div class="line"><span>'+esc(x.name)+(x.qty>1?" ×"+x.qty:"")+"</span><span>"+money(x.qty*x.price)+"</span></div>").join(""):"")+(S.settings.pickupCheck?pickupBlock(v):"")+'<div class="line"><span>'+t("dueNow")+'</span><span class="tot" id="ctot">'+money((v.prepaid?0:(c.sugBase!==undefined?c.sugBase:c.base))+(open?0:c.sug)+vItemsTot(v))+'</span></div><label class="opt"><input type="checkbox" id="cpr" checked><span>'+t("printReceipt")+'</span></label><div class="row"><button class="btn ok" onclick="confirmCheckout()">'+t("confirmExit")+'</button><button class="btn" onclick="checkoutModal(\''+id+'\')">'+t("refreshTime")+'</button><button class="btn" onclick="closeModal()">'+t("cancel")+"</button></div>");
}
/* ============ طلبات الكافتيريا على زيارة الطفل: تُسجَّل أثناء الزيارة وتُحاسَب عند الخروج مع الوقت ============ */
const vItems=v=>v.items||[];
const vItemsTot=v=>r2(vItems(v).reduce((a,x)=>a+x.qty*x.price,0));
function itemsReserved(pid){return S.visits.filter(v=>v.status==="in").reduce((a,v)=>a+vItems(v).filter(x=>x.pid===pid).reduce((b,x)=>b+x.qty,0),0)}
function itemsFree(p){return tracked(p)?stockOf(p)-itemsReserved(p.id):1e9}
function vItemsLines(v){return vItems(v).map(x=>({type:x.cat||"cafe",name:x.name+" – "+C(v.childId).name,qty:x.qty,price:x.price,pid:x.pid}))}
let VI={cat:"all"};
function visitItemsModal(vid){
 const v=S.visits.find(x=>x.id===vid);if(!v||v.status!=="in")return;
 if(!can("pos")){toast(t("noPerm"));return}
 const its=vItems(v),prods=S.products.filter(p=>p.active&&(VI.cat==="all"||p.cat===VI.cat)&&itemsFree(p)>0);
 modal("<h3>"+t("kidOrders")+" – "+esc(C(v.childId).name)+'</h3><div class="muted">'+t("kidOrdersNote")+"</div><hr>"+
  (its.length?its.map(x=>'<div class="line"><span>'+esc(x.name)+'</span><span><button class="btn sm" onclick="visitItemQty(\''+vid+"','"+x.id+'\',-1)">−</button> <b>'+x.qty+'</b> <button class="btn sm" onclick="visitItemQty(\''+vid+"','"+x.id+'\',1)">+</button> '+money(x.qty*x.price)+"</span></div>").join("")+'<div class="line"><span>'+t("total")+'</span><span class="tot">'+money(vItemsTot(v))+"</span></div>":'<div class="muted">'+t("kidNoOrders")+"</div>")+
  '<div class="row">'+pcatBtns(VI.cat,"VI.cat='@';visitItemsModal('"+vid+"')")+'</div><div class="pgrid" style="margin-top:8px">'+(prods.length?prods.map(p=>'<button class="pbtn" onclick="visitItemAdd(\''+vid+"','"+p.id+'\')"><b>'+esc(pname(p))+"</b><span>"+money(p.price)+"</span></button>").join(""):'<div class="muted">'+t("none")+"</div>")+'</div><div class="row"><button class="btn pri" onclick="closeModal();render()">'+t("done")+"</button></div>");
}
function visitItemAdd(vid,pid){
 const v=S.visits.find(x=>x.id===vid),p=S.products.find(x=>x.id===pid);if(!v||v.status!=="in"||!p||!can("pos"))return;
 if(itemsFree(p)<1){toast(t("noStock"));return}
 v.items=vItems(v);const x=v.items.find(z=>z.pid===pid);
 if(x)x.qty++;else v.items.push({id:uid(),pid:pid,name:pname(p),cat:p.cat,qty:1,price:p.price,by:me.id,at:Date.now()});
 log("child order","#"+v.rno+" "+pname(p));save();visitItemsModal(vid);
}
function visitItemQty(vid,iid,d){
 const v=S.visits.find(x=>x.id===vid);if(!v||v.status!=="in"||!can("pos"))return;
 const x=vItems(v).find(z=>z.id===iid);if(!x)return;
 if(d>0){const p=S.products.find(z=>z.id===x.pid);if(p&&itemsFree(p)<1){toast(t("noStock"));return}}
 x.qty+=d;if(x.qty<=0){v.items=v.items.filter(z=>z!==x);log("child order removed","#"+v.rno+" "+x.name)}
 save();visitItemsModal(vid);
}
function coBase(){const e=$("#cbp");if(!e)return window._co.c.base;const n=parseFloat(norm(e.value));return isFinite(n)&&n>=0?n:0}
function coFee(){const e=$("#cfee");if(!e)return 0;const n=parseFloat(norm(e.value));return isFinite(n)&&n>=0?n:0}
function coUpdate(){
 const o=window._co,c=o.c,fee=coFee();$("#ctot").textContent=money((o.prep?0:coBase())+fee+vItemsTot(S.visits.find(x=>x.id===o.id)||{}));
 
}
function confirmCheckout(){
 const o=window._co,v=S.visits.find(x=>x.id===o.id);if(!v||v.status!=="in")return;
 const c=o.c,open=v.planType==="open",fee=open?0:coFee();
 const note="";
 let pk=null;
 if(S.settings.pickupCheck){
  const ov=window._pkOv&&window._pkOv.id===v.id?window._pkOv:null;
  if(ov)pk={other:true,approvedBy:ov.by};
  else{const typed=norm(($("#cpk")||{}).value||"").replace(/\D/g,"");if(typed.length!==4||phone4s(v.guardianId).indexOf(typed)<0){toast(t("pkBad"));log("pickup mismatch","#"+v.rno);save();return}pk={ok:true}}
 }
  const pr=$("#cpr").checked,lines=[],base=(!v.prepaid&&!c.pkg&&c.sugBase!==undefined)?coBase():c.base;
 if(!v.prepaid){
  if(c.pkg){if(c.base>0)lines.push({type:"visit",name:t("extraTime")+" – "+C(v.childId).name,qty:1,price:c.base})}
  else if(base>0)lines.push({type:"visit",name:pn(v)+" – "+C(v.childId).name,qty:1,price:base});
 }
 if(fee>0)lines.push({type:"late",name:t("late")+" – "+C(v.childId).name,qty:1,price:fee});
 vItemsLines(v).forEach(l=>lines.push(l));
 const fin=inv=>{
  v.itemsTotal=vItemsTot(v);
  v.checkOut=o.ts;v.status="out";v.pickup=pk;window._pkOv=null;v.outBy=me.id;v.lateMin=c.late;v.suggestedFee=c.sug;v.lateFee=fee;v.lateNote=note;
  if(open){v.price=c.base;v.units=c.units}else if(!v.prepaid&&!c.pkg&&base!==v.price){v.priceOrig=v.price;v.price=base}
  if(c.pkg&&c.pkg.use>0){pkgDeduct(v.guardianId,c.pkg.use,v.id);v.pkgMins=c.pkg.use}
  v.total=base+fee;
  if(inv){v.exitInvoiceId=inv.id;inv.visitIds=[v.id]}
  log("check-out","#"+v.rno+" "+C(v.childId).name+" total "+v.total+(base!==c.base?" (price "+base+" vs plan "+c.base+")":"")+(c.pkg?" (package "+c.pkg.use+" min)":"")+(fee!==c.sug?" (fee "+fee+" vs suggested "+c.sug+")":""));save();toast(t("exitDone"));render();
 };
 closeModal();
 if(!lines.length){fin(null);if(pr)printHTML(receiptExit(v));return}
 if(!requireShift())return;
 payOpen({title:t("exitTitle")+" – "+C(v.childId).name,lines:lines,gid:v.guardianId,print:pr,onDone:fin});
}

/* ---- group check-out: all of one guardian's children in a single payment ---- */
function groupCalcs(vs,now){
 let avail=0;const gid=vs[0].guardianId;avail=pkgAvail(gid);
 return vs.map(v=>{const c=calc(v,now);
  if(c.pkg){const use=Math.min(c.pkg.mins,avail);avail-=use;const extra=c.pkg.mins-use;c.pkg={mins:c.pkg.mins,use:use,extra:extra};c.base=r2(extra/30*openRate())}
  return {v:v,c:c}});
}
function checkoutGroupModal(gid,ts){
 const vs=S.visits.filter(x=>x.status==="in"&&x.guardianId===gid).sort((a,b)=>a.checkIn-b.checkIn);
 if(vs.length<2){if(vs[0])checkoutModal(vs[0].id,ts);return}
 const now=ts||Date.now(),items=groupCalcs(vs,now);
 window._co={id:vs[0].id,group:gid,ts:now,items:items,prep:false,c:items[0].c};
 const rows=items.map((it,i)=>{const v=it.v,c=it.c,open=v.planType==="open";
  let priceHtml;
  if(c.pkg)priceHtml='<div class="line"><span>'+t("fromPackage")+"</span><span>"+fMin(c.pkg.use)+(c.pkg.extra?" + "+fMin(c.pkg.extra)+" • "+money(c.base):"")+"</span></div>";
  else if(c.sugBase!==undefined&&!v.prepaid&&c.late===0)priceHtml='<label>'+t("priceEdit")+" ("+money(v.price)+')<input id="gbp'+i+'" type="number" min="0" step="0.5" value="'+c.sugBase+'" oninput="grpUpdate()"></label>';
  else priceHtml='<div class="line"><span>'+t("planPrice")+(v.prepaid?" ("+t("paidTag")+")":"")+"</span><span>"+money(v.prepaid?0:c.base)+"</span></div>";
  const feeHtml=(open||c.late===0)?"":'<div class="line"><span>'+t("lateMin")+"</span><span>"+fMin(c.late)+'</span></div><label>'+t("lateFee")+'<input id="gfee'+i+'" type="number" min="0" step="0.5" value="'+c.sug+'" oninput="grpUpdate()" '+(can("late")?"":"disabled")+"></label>";
  const itHtml=vItems(v).map(x=>'<div class="line"><span>'+esc(x.name)+(x.qty>1?" ×"+x.qty:"")+"</span><span>"+money(x.qty*x.price)+"</span></div>").join("");
  return '<div class="card" style="margin:0 0 8px"><b>'+esc(C(v.childId).name)+'</b> <span class="muted">#'+v.rno+" • "+esc(pn(v))+" • "+fMin(c.el)+"</span>"+priceHtml+feeHtml+itHtml+"</div>"}).join("");
 modal("<h3>"+t("grpTitle")+" – "+esc(G(gid).name)+'</h3><div class="muted">'+t("checkOut")+": "+fTime(now)+"</div><hr>"+rows+(S.settings.pickupCheck?pickupBlock(vs[0]):"")+'<div class="line"><span>'+t("grpTotal")+'</span><span class="tot" id="gtot"></span></div><label class="opt"><input type="checkbox" id="cpr" checked><span>'+t("printReceipt")+'</span></label><div class="row"><button class="btn ok" onclick="confirmGroupCheckout()">'+t("confirmExit")+'</button><button class="btn" onclick="checkoutGroupModal(\''+gid+'\')">'+t("refreshTime")+'</button><button class="btn" onclick="closeModal()">'+t("cancel")+"</button></div>");
 grpUpdate();
}
function grpVals(){
 return window._co.items.map((it,i)=>{const v=it.v,c=it.c,open=v.planType==="open";
  const be=$("#gbp"+i),fe=$("#gfee"+i),pn_=e=>{const n=parseFloat(norm(e.value));return isFinite(n)&&n>=0?n:0};
  const base=(!v.prepaid&&!c.pkg&&c.sugBase!==undefined)?(be?pn_(be):c.sugBase):c.base;
  const fee=open?0:(fe?pn_(fe):0);
  return {v:v,c:c,base:base,fee:fee,charged:(v.prepaid?0:base)+fee+vItemsTot(v)};
 });
}
function grpUpdate(){const e=$("#gtot");if(e)e.textContent=money(grpVals().reduce((s,x)=>s+x.charged,0))}
function confirmGroupCheckout(){
 const o=window._co;if(!o||!o.group)return;
 const vals=grpVals();if(vals.some(x=>x.v.status!=="in"))return;
 const first=vals[0].v;let pk=null;
 if(S.settings.pickupCheck){
  const ov=window._pkOv&&window._pkOv.id===first.id?window._pkOv:null;
  if(ov)pk={other:true,approvedBy:ov.by};
  else{const typed=norm(($("#cpk")||{}).value||"").replace(/\D/g,"");if(typed.length!==4||phone4s(first.guardianId).indexOf(typed)<0){toast(t("pkBad"));log("pickup mismatch","#"+first.rno);save();return}pk={ok:true}}
 }
 const pr=$("#cpr").checked,lines=[];
 vals.forEach(x=>{const v=x.v,c=x.c,nm=C(v.childId).name;
  if(!v.prepaid){
   if(c.pkg){if(c.base>0)lines.push({type:"visit",name:t("extraTime")+" – "+nm,qty:1,price:c.base})}
   else if(x.base>0)lines.push({type:"visit",name:pn(v)+" – "+nm,qty:1,price:x.base});
  }
  if(x.fee>0)lines.push({type:"late",name:t("late")+" – "+nm,qty:1,price:x.fee});
  vItemsLines(v).forEach(l=>lines.push(l));
 });
 const fin=inv=>{
  vals.forEach(x=>{const v=x.v,c=x.c,open=v.planType==="open";
   v.checkOut=o.ts;v.status="out";v.pickup=pk;v.outBy=me.id;v.lateMin=c.late;v.suggestedFee=c.sug;v.lateFee=x.fee;v.lateNote="";
   if(open){v.price=c.base;v.units=c.units}else if(!v.prepaid&&!c.pkg&&x.base!==v.price){v.priceOrig=v.price;v.price=x.base}
   if(c.pkg&&c.pkg.use>0){pkgDeduct(v.guardianId,c.pkg.use,v.id);v.pkgMins=c.pkg.use}
   v.total=x.base+x.fee;v.itemsTotal=vItemsTot(v);
   if(inv)v.exitInvoiceId=inv.id;
   log("check-out","#"+v.rno+" "+C(v.childId).name+" total "+v.total+" (group)");
  });
  window._pkOv=null;
  if(inv)inv.visitIds=vals.map(x=>x.v.id);
  save();toast(t("exitDone"));render();
 };
 closeModal();
 if(!lines.length){fin(null);if(pr)printHTML(receiptExitGroup(vals.map(x=>x.v),null));return}
 if(!requireShift())return;
 payOpen({title:t("grpTitle")+" – "+G(first.guardianId).name,lines:lines,gid:first.guardianId,print:pr,onDone:fin,customPrint:inv=>printHTML(receiptExitGroup(vals.map(x=>x.v),inv))});
}

/* ============ WhatsApp click-to-chat (no API, nothing sent automatically) ============ */
const WA_DEF={
 soon:["مرحبًا {guardian}، تنبيه من {venue}: متبقي {left} على وقت {child}. موعد الانتهاء {until}.","Hello {guardian}, {venue}: {left} left for {child}. Ends at {until}."],
 over:["مرحبًا {guardian}، تنبيه من {venue}: انتهى وقت {child} منذ {late}. برجاء الحضور لاستلامه.","Hello {guardian}, {venue}: {child}'s time ended {late} ago. Please come to pick up."],
 in:["مرحبًا {guardian}، تم تسجيل دخول {child} في {venue} الساعة {time}. شكرًا لكم.","Hello {guardian}, {child} checked in at {venue} at {time}. Thank you."],
 out:["مرحبًا {guardian}، تم تسجيل خروج {child} من {venue} الساعة {time}. الإجمالي {total}. شكرًا لزيارتكم.","Hello {guardian}, {child} checked out of {venue} at {time}. Total {total}. Thank you."],
 party:["مرحبًا {guardian}، تذكير بحفلة {child} في {venue} يوم {date} الساعة {time}. المتبقي للدفع {due}.","Hello {guardian}, reminder: {child}'s party at {venue} on {date} at {time}. Remaining {due}."],
 pkg:["مرحبًا {guardian}، رصيد باقتكم في {venue}: {hours}. صالحة حتى {until}.","Hello {guardian}, your package balance at {venue}: {hours}. Valid until {until}."]
};
function waTpl(k){const c=S.settings.wa&&S.settings.wa[k];return c&&c.trim()?c:WA_DEF[k][lang==="ar"?0:1]}
function waFill(k,v){let x=waTpl(k);Object.keys(v).forEach(n=>{x=x.split("{"+n+"}").join(v[n]==null?"":v[n])});return x}
function waNum(p){
 let d=String(p||"").replace(/[^\d+]/g,"").replace(/^\+/,"").replace(/^00/,"");
 if(/^0\d{9,10}$/.test(d))d="20"+d.slice(1);
 else if(/^1\d{9}$/.test(d))d="20"+d;
 return /^\d{10,15}$/.test(d)?d:"";
}
function waOpen(phone,text){
 const n=waNum(phone);if(!n){toast(t("waNoPhone"));return}
 log("whatsapp","+"+n);save();
 window.open("https://wa.me/"+n+"?text="+encodeURIComponent(text),"_blank","noopener");
}
function waVars(g,extra){return Object.assign({guardian:g?g.name:"",venue:S.settings.venue},extra||{})}
function waVisit(id){
 const v=S.visits.find(x=>x.id===id);if(!v)return;
 const g=G(v.guardianId),c=C(v.childId),now=Date.now();let k,x={child:c.name};
 if(v.status==="out"){k="out";x.time=fTime(v.checkOut);x.total=money(v.total||0)}
 else{
  const i=info(v,now);
  if(i.state==="over"){k="over";x.late=fMin(Math.abs(i.left)/60)}
  else if(i.state==="open"){k="in";x.time=fTime(v.checkIn)}
  else{k="soon";x.left=fMin(i.left/60);x.until=fTime(v.checkIn+v.minutes*60000)}
 }
 waOpen(phonesOf(g)[0],waFill(k,waVars(g,x)));
}
function waBooking(id){
 const b=S.bookings.find(x=>x.id===id);if(!b)return;
 waOpen(b.phone,waFill("party",waVars({name:b.name},{child:b.child,date:b.date,time:t12(b.start),due:money(bkDue(b))})));
}
function waGuardianPkg(gid){
 const g=G(gid),subs=activeSubs(gid);
 if(!subs.length){toast("—");return}
 const mins=subs.reduce((s,x)=>s+x.remaining,0),exp=Math.min.apply(null,subs.map(x=>x.expiresAt));
 waOpen(phonesOf(g)[0],waFill("pkg",waVars(g,{hours:fMin(mins),until:fDate(exp)})));
}
function waCard(){
 if(!can("settings"))return "";
 const ks=["soon","over","in","out","party","pkg"];
 return '<div class="card"><h3>'+t("waCardT")+'</h3><div class="muted">'+t("waCardHelp")+"</div>"+ks.map(k=>'<label>'+t("wn_"+k)+'<textarea id="wat_'+k+'" rows="2">'+esc(waTpl(k))+"</textarea></label>").join("")+'<div class="row"><button class="btn pri" onclick="waSave()">'+t("save")+'</button><button class="btn" onclick="waReset()">'+t("waReset")+"</button></div></div>";
}
function waSave(){
 if(!can("settings"))return;
 const o={};["soon","over","in","out","party","pkg"].forEach(k=>{const v=($("#wat_"+k)||{}).value||"";if(v.trim()&&v.trim()!==WA_DEF[k][lang==="ar"?0:1])o[k]=v.trim()});
 S.settings.wa=o;log("whatsapp templates","saved");save();toast(t("waSaved"));render();
}
function waReset(){if(!can("settings"))return;S.settings.wa={};save();toast(t("waSaved"));render()}

/* ============ visits & daily report ============ */
let hDay=null;
views.history=function(){
 if(!hDay)hDay=dayKey(Date.now());
 const vs=S.visits.filter(v=>dayKey(v.checkIn)===hDay).sort((a,b)=>b.checkIn-a.checkIn);
 const outs=S.visits.filter(v=>v.status==="out"&&dayKey(v.checkOut)===hDay);
 const invs=S.invoices.filter(i=>!i.void&&dayKey(i.createdAt)===hDay),refs=S.refunds.filter(r=>dayKey(r.at)===hDay);const rev=invs.reduce((s,i)=>s+invRevenue(i),0)-refs.reduce((s,r)=>s+r.a,0),fees=outs.reduce((s,v)=>s+v.lateFee,0),discs=invs.reduce((s,i)=>s+i.disc.amount,0),tps=invs.reduce((s,i)=>s+invTopup(i),0),pks=invs.reduce((s,i)=>s+i.lines.filter(l=>l.type==="package").length,0),pty=invs.reduce((s,i)=>s+i.lines.filter(l=>l.type==="party").reduce((a,l)=>a+l.total,0),0);
 const avg=outs.length?outs.reduce((s,v)=>s+(v.checkOut-v.checkIn)/60000,0)/outs.length:0;
 (window._hT||$("#view")).innerHTML='<div class="bar"><h2>'+t("history")+'</h2><input type="date" id="hd" style="max-width:200px" value="'+hDay+'" onchange="hDay=this.value;render()"></div><div class="kpis"><div class="kpi">'+t("entries")+"<b>"+vs.length+'</b></div><div class="kpi">'+t("exits")+"<b>"+outs.length+'</b></div><div class="kpi">'+t("revenue")+"<b>"+money(rev)+'</b></div><div class="kpi">'+t("lateFees")+"<b>"+money(fees)+'</b></div><div class="kpi">'+t("avgDur")+"<b>"+fMin(avg)+'</b></div><div class="kpi">'+t("discounts")+"<b>"+money(discs)+'</b></div><div class="kpi">'+t("pkgSold")+"<b>"+pks+'</b></div><div class="kpi">'+t("partyPay")+"<b>"+money(pty)+"</b></div></div>"+
 '<div class="card"><table><thead><tr><th>#</th><th>'+t("child")+"</th><th>"+t("guardian")+"</th><th>"+t("plan")+"</th><th>"+t("checkIn")+"</th><th>"+t("checkOut")+"</th><th>"+t("lateFees")+"</th><th>"+t("total")+"</th><th>"+t("cashier")+"</th><th>"+t("status")+"</th><th></th></tr></thead><tbody>"+
 (vs.length?vs.map(v=>{const u=S.users.find(x=>x.id===v.cashier);return "<tr><td>"+v.rno+"</td><td>"+esc(C(v.childId).name)+"</td><td>"+esc(G(v.guardianId).name)+"</td><td>"+esc(pn(v))+"</td><td>"+fTime(v.checkIn)+"</td><td>"+(v.checkOut?fTime(v.checkOut):"–")+"</td><td>"+(v.lateFee?money(v.lateFee):"–")+"</td><td>"+(v.status==="out"?money(v.total):"–")+"</td><td>"+esc(u?u.name:"")+'</td><td><span class="tag '+(v.status==="in"?"ok":"open")+'">'+(v.status==="in"?t("in"):t("out"))+'</span></td><td><button class="btn sm" onclick="reprint(\''+v.id+"')\">"+t("reprint")+'</button> <button class="btn sm" onclick="waVisit(\''+v.id+"')\">💬</button></td></tr>"}).join(""):'<tr><td colspan="11" class="muted">'+t("none")+"</td></tr>")+"</tbody></table></div>";
};
function reprint(id){
 const v=S.visits.find(x=>x.id===id);if(!v)return;
 if(v.status==="out")printHTML(receiptExit(v));else printHTML(receiptEntry(S.visits.filter(x=>x.group===v.group)));
}

/* ============ users ============ */
views.usersBody=function(){
 (window._hT||$("#view")).innerHTML='<div class="bar"><h2>'+t("users")+'</h2><button class="btn pri" onclick="userModal(\'\')">'+t("addUser")+'</button></div><div class="card"><table><thead><tr><th>'+t("name")+"</th><th>"+t("role")+"</th><th>"+t("userBranch")+"</th><th>"+t("active")+"</th><th></th></tr></thead><tbody>"+
 S.users.map(u=>"<tr><td>"+esc(u.name)+"</td><td>"+t(ROLES[u.role])+"</td><td>"+(u.branch==="all"?t("allBranches"):esc(branchName(u.branch)))+"</td><td>"+(u.active?"✔":"✘")+'</td><td><button class="btn sm" onclick="userModal(\''+u.id+"')\">"+t("edit")+"</button>"+(can("users")&&u.id!==me.id&&!(u.role==="admin"&&me.role!=="admin")?' <button class="btn sm bad" onclick="userDelete(\''+u.id+"')\">"+t("userDel")+"</button>":"")+"</td></tr>").join("")+"</tbody></table></div>";
};
function userModal(id){
 const u=id?S.users.find(x=>x.id===id):null;
 if(u&&u.role==="admin"&&me.role!=="admin"){toast("—");return}
 const roles=Object.keys(ROLES).filter(r=>r!=="admin"||me.role==="admin");
 modal("<h3>"+(u?t("edit"):t("addUser"))+'</h3><label>'+t("name")+'<input id="un" value="'+esc(u?u.name:"")+'"></label><label>'+t("pin4")+'<input id="up" inputmode="numeric" maxlength="4" value="" placeholder="'+(u?"••••":"")+'" autocomplete="off"></label><label>'+t("role")+'<select id="ur">'+roles.map(r=>'<option value="'+r+'" '+(u&&u.role===r?"selected":"")+">"+t(ROLES[r])+"</option>").join("")+'</select></label><label>'+t("userBranch")+'<select id="ub"><option value="all" '+(u&&u.branch==="all"?"selected":"")+">"+t("allBranches")+"</option>"+DB.branches.map(b=>'<option value="'+b.id+'" '+((u?u.branch===b.id:b.id===CUR)?"selected":"")+">"+esc(b.name)+"</option>").join("")+'</select></label><label class="opt"><input type="checkbox" id="ua" '+(!u||u.active?"checked":"")+(u&&u.id===me.id?" disabled":"")+"><span>"+t("active")+'</span></label><div class="row"><button class="btn pri" onclick="saveUser(\''+(id||"")+'\')">'+t("save")+'</button><button class="btn" onclick="closeModal()">'+t("cancel")+"</button></div>");
}
function saveUser(id){
 const name=$("#un").value.trim(),pin=norm($("#up").value);
 const keepPin=!!id&&pin==="";
 if(!name){toast(t("needName"));return}if(!keepPin&&!/^\d{4}$/.test(pin)){toast(t("badPin"));return}
 if(!keepPin&&S.users.some(x=>x.id!==id&&pinOk(x,pin))){toast(t("dupPin"));return}
 const role=$("#ur").value,act=$("#ua").checked,br=$("#ub").value;
 if((role==="cashier"||role==="supervisor")&&br==="all"){toast(t("needBranch"));return}
 let chg="";
 if(id){const u=S.users.find(x=>x.id===id),o={r:u.role,b:u.branch,a:u.active};u.name=name;if(!keepPin)pinSet(u,pin);u.role=role;u.branch=br;if(u.id!==me.id)u.active=act;
  chg=(o.r!==u.role?" role "+o.r+"→"+u.role:"")+(o.b!==u.branch?" branch "+o.b+"→"+u.branch:"")+(o.a!==u.active?(u.active?" activated":" deactivated"):"")+(keepPin?"":" PIN changed")}
 else{const nu={id:uid(),name:name,role:role,active:act,branch:br};pinSet(nu,pin);S.users.push(nu)}
 log(id?"edit user":"new user",name+" ("+role+")"+chg);save();closeModal();render();
}

/* ============ settings ============ */
views.settings=function(){
 const tabs=[["general","settingsGeneral",can("settings")],["users","users",can("users")],["branches","brTitle",can("branches")],["backup","bkTitle",can("settings")]].filter(x=>x[2]);
 if(!tabs.length){$("#view").innerHTML="";return}
 if(!window._st||!tabs.some(x=>x[0]===window._st))window._st=tabs[0][0];
 $("#view").innerHTML='<div class="row" style="margin:0 0 12px">'+tabs.map(x=>'<button class="btn '+(window._st===x[0]?"pri":"")+'" onclick="window._st=\''+x[0]+'\';render()">'+t(x[1])+"</button>").join("")+'</div><div id="sthost"></div>';
 window._hT=$("#sthost");try{({general:views.settingsBody,users:views.usersBody,branches:views.branchesBody,backup:views.backupBody})[window._st]()}finally{window._hT=null}
};
views.settingsBody=function(){
 const s=S.settings;
 (window._hT||$("#view")).innerHTML="<h2>"+t("settings")+'</h2><div class="grid2"><div class="card"><label>'+t("venue")+'<input id="sv" value="'+esc(s.venue)+'"></label><label>'+t("branch")+'<input id="sb" value="'+esc(s.branch)+'"></label><label>'+t("graceMin")+'<input id="sg" type="number" min="0" value="'+s.graceMin+'"></label><label>'+t("alertMin")+'<input id="sa" type="number" min="1" value="'+s.alertMin+'"></label><label>'+t("lateFeePer15")+'<input id="sl" type="number" min="0" step="0.5" value="'+s.lateFeePer15+'"></label></div><div class="card"><h3>'+t("plansTitle")+"</h3>"+
 s.plans.map(p=>p.type==="fixed"?'<div class="grid2"><label>'+esc(p.name[lang])+" – "+t("minutes")+'<input type="number" min="5" id="pm_'+p.id+'" value="'+p.minutes+'"></label><label>'+t("price")+'<input type="number" min="0" step="0.5" id="pp_'+p.id+'" value="'+p.price+'"></label></div>':'<label>'+t("openRate")+'<input type="number" min="0" step="0.5" id="pr_'+p.id+'" value="'+p.rate+'"></label>').join("")+
 '</div></div>'+productsCard()+packagesCard()+couponsCard()+partyCard()+hrCard()+p6Card()+'<div class="row"><button class="btn pri" onclick="saveSettings()">'+t("save")+"</button>"+(can("reset")?'<button class="btn bad" onclick="resetDemo()">'+t("resetDemo")+"</button>":"")+'</div><p class="muted">'+t("dataNote")+"</p>";
};
function saveSettings(){
 const s=S.settings,n=id=>parseFloat(norm($(id).value));
 const g=n("#sg"),a=n("#sa"),l=n("#sl");
 if(![g,a,l].every(x=>isFinite(x)&&x>=0)){toast(t("badAge"));return}
 const np=[];
 for(const p of s.plans){
  if(p.type==="fixed"){const m=n("#pm_"+p.id),pr=n("#pp_"+p.id);if(!(m>0)||!(pr>=0)){toast(t("badAge"));return}np.push([p,{minutes:m,price:pr}])}
  else{const r=n("#pr_"+p.id);if(!(r>=0)){toast(t("badAge"));return}np.push([p,{rate:r}])}
 }
 s.venue=$("#sv").value.trim()||s.venue;s.branch=$("#sb").value.trim()||s.branch;s.graceMin=g;s.alertMin=a;s.lateFeePer15=l;
 np.forEach(x=>Object.assign(x[0],x[1]));
 log("settings","prices/rules updated");save();toast(t("saved"));render();
}
function resetDemo(){if(!confirm(t("resetSure")))return;DB=freshDB();CUR="b1";S=compose(CUR);migrate(S);syncOut();me=null;try{sessionStorage.removeItem("ls_branch")}catch(e){}try{sessionStorage.removeItem("ls_user")}catch(e){}save();render()}

/* ============ audit ============ */
views.audit=function(){
 const list=S.audit.slice(-200).reverse();
 $("#view").innerHTML="<h2>"+t("audit")+'</h2><div class="card"><table><thead><tr><th>'+t("time")+"</th><th>"+t("user")+"</th><th>"+t("action")+"</th><th>"+t("details")+"</th></tr></thead><tbody>"+
 list.map(a=>"<tr><td>"+fDate(a.ts)+" "+fTime(a.ts)+"</td><td>"+esc(a.user)+"</td><td>"+esc(a.action)+"</td><td>"+esc(a.details)+"</td></tr>").join("")+"</tbody></table></div>";
};

/* ============ Phase 2: POS, payments, shifts, invoices ============ */
function defaultProducts(){return [
 {id:"pr1",name:{ar:"مياه",en:"Water"},cat:"cafe",price:8,active:true,track:true,stock:40,min:10},
 {id:"pr2",name:{ar:"عصير",en:"Juice"},cat:"cafe",price:20,active:true,track:true,stock:25,min:8},
 {id:"pr3",name:{ar:"بطاطس",en:"Fries"},cat:"cafe",price:25,active:true,track:true,stock:30,min:10},
 {id:"pr4",name:{ar:"ساندوتش",en:"Sandwich"},cat:"cafe",price:30,active:true,track:true,stock:20,min:6},
 {id:"pr5",name:{ar:"شيبسي",en:"Chips"},cat:"cafe",price:10,active:true,track:true,stock:8,min:10},
 {id:"pr6",name:{ar:"آيس كريم",en:"Ice cream"},cat:"cafe",price:15,active:true,track:true,stock:15,min:5},
 {id:"pr7",name:{ar:"لعبة إضافية",en:"Extra game"},cat:"game",price:15,active:true},
 {id:"pr8",name:{ar:"ورشة تلوين",en:"Coloring workshop"},cat:"game",price:25,active:true}]}
function defaultPartyPkgs(){return [
 {id:"pp1",name:{ar:"باقة أساسية",en:"Basic party"},perChild:150,includes:["عصير وساندوتش للأطفال","منظّم حفلة وأنشطة","تزيين القاعة"],active:true},
 {id:"pp2",name:{ar:"باقة مميزة",en:"Premium party"},perChild:220,includes:["بوفيه ضيافة","منظّم حفلة وألعاب","تزيين القاعة","ديكور بثيم الحفلة"],active:true}]}
function partySettingsDefaults(){return {hallName:"قاعة الحفلات",partyBuffer:30,depositPct:30,partyTerms:"1) يتم تأكيد الحجز بسداد العربون.\n2) يُسدَّد المبلغ المتبقي قبل نهاية الحفلة أو حسب الاتفاق.\n3) أي زيادة في عدد الأطفال تُحاسَب بسعر الطفل حسب الباقة.\n4) يلتزم العميل بمواعيد الحجز المحددة."}}
function migrate(s){
 s.expenses=s.expenses||[];
 s.partyPkgs=s.partyPkgs||defaultPartyPkgs();s.bookings=s.bookings||[];s.seq.booking=s.seq.booking||0;
 s.employees=s.employees||[];s.roster=s.roster||{};s.attendance=s.attendance||{};s.leaves=s.leaves||[];s.penalties=s.penalties||[];s.advances=s.advances||[];s.bonuses=s.bonuses||[];s.faults=s.faults||[];s.users.forEach(u=>{if(u.branch===undefined)u.branch=(u.role==="ops"||u.role==="admin")?"all":"b1"});s.qcItems=s.qcItems||qcDefaults();s.qcLogs=s.qcLogs||{};s.stockLog=s.stockLog||[];s.seq=s.seq||{};s.seq.fault=s.seq.fault||0;s.payrolls=s.payrolls||{};s.taskDefs=s.taskDefs||[];s.taskLogs=s.taskLogs||{};s.evals=s.evals||{};s.seq.emp=s.seq.emp||0;
 const dflt=partySettingsDefaults();Object.keys(dflt).forEach(k=>{if(s.settings&&s.settings[k]===undefined)s.settings[k]=dflt[k]});
 const p6d=p6SettingsDefaults();Object.keys(p6d).forEach(k=>{if(s.settings&&s.settings[k]===undefined)s.settings[k]=p6d[k]});
 const hdf=hrSettingsDefaults();Object.keys(hdf).forEach(k=>{if(s.settings&&s.settings[k]===undefined)s.settings[k]=hdf[k]});
 if(s.settings&&s.settings.venue==="Little Steps"){s.settings.venue="SYSTEM KIDS AREA";if(/جرين/.test(s.settings.branch||""))s.settings.branch=""}
 s.seq=s.seq||{};["visit","receipt","invoice","shift"].forEach(k=>{s.seq[k]=s.seq[k]||0});
 s.products=s.products||defaultProducts();s.invoices=s.invoices||[];s.refunds=s.refunds||[];s.shifts=s.shifts||[];
 s.packages=s.packages||defaultPackages();s.subs=s.subs||[];s.balances=s.balances||{};s.walletTx=s.walletTx||[];s.coupons=s.coupons||[];s.couponUses=s.couponUses||[];
 s.visits.forEach(v=>{if(v.prepaid===undefined){v.prepaid=false;v.invoiceId=null}if(!v.payMode)v.payMode="std"});
}
const pname=p=>p.name[lang]||p.name.ar;
/* تصنيفات المنتجات: كافيتريا وألعاب ثابتان + تصنيفات يضيفها المدير في الإعدادات (S.settings.pcats) */
const pcatsCustom=()=>(S.settings&&Array.isArray(S.settings.pcats)?S.settings.pcats:[]);
const pcatName=id=>id==="cafe"?t("catCafe"):id==="game"?t("catGame"):(c=>c?(c[lang]||c.ar):id)(pcatsCustom().find(x=>x.id===id));
const pcatPairs=()=>[["cafe","catCafe"],["game","catGame"]].map(c=>[c[0],t(c[1])]).concat(pcatsCustom().map(c=>[c.id,c[lang]||c.ar]));
const pcatBtns=(cur,setJs)=>[["all",t("catAll")]].concat(pcatPairs()).map(c=>'<button class="btn sm '+(cur===c[0]?"pri":"")+'" onclick="'+setJs.replace("@",c[0])+'">'+esc(c[1])+"</button>").join("");
const mLabel=m=>t("m_"+m);const PAYM=["cash","card","wallet"];
const r2=n=>Math.round(n*100)/100;
const curShift=()=>S.shifts.find(s=>s.status==="open")||null;
function requireShift(){if(curShift())return true;closeModal();toast(t("needShift"));view="shift";render();return false}
const paidOf=i=>r2(i.payments.reduce((s,p)=>s+p.a,0));
const dueOf=i=>i.void?0:r2(i.total-paidOf(i));
const refundedOf=i=>r2(S.refunds.filter(r=>r.inv===i.id).reduce((s,r)=>s+r.a,0));
const rw=(a,b,bold)=>'<div class="r'+(bold?" b":"")+'"><span>'+a+"</span><span>"+esc(b)+"</span></div>";
const kpi=(a,b)=>'<div class="kpi">'+a+"<b>"+b+"</b></div>";

/* ---- supervisor approval by PIN ---- */
let _ap=null,_apBack=null;
function needApproval(cb,back){
 if(can("approve")){cb(me);return}
 _ap=cb;_apBack=back||null;
 modal("<h3>"+t("approveTitle")+'</h3><p class="muted">'+t("approveHint")+'</p><label>'+t("pin")+'<input id="apin" type="password" inputmode="numeric" maxlength="4" onkeydown="if(event.key===\'Enter\')doApprove()"></label><div class="row"><button class="btn pri" onclick="doApprove()">'+t("approve")+'</button><button class="btn" onclick="apCancel()">'+t("cancel")+"</button></div>");
}
function doApprove(){
 const pin=norm($("#apin").value);
 const u=S.users.find(x=>x.active&&pinOk(x,pin)&&PERMS[x.role].includes("approve"));
 if(!u){toast(t("badApprover"));return}
 const cb=_ap;_ap=null;_apBack=null;closeModal();log("approval","by "+u.name);cb(u);
}
function apCancel(){const b=_apBack;_ap=null;_apBack=null;if(b)b();else closeModal()}

/* ---- payment dialog ---- */
let P=null;
function pCalc(){
 const elig=r2(P.lines.reduce((s,l)=>s+(l.type==="topup"?0:l.price*l.qty),0));
 const sub=r2(P.lines.reduce((s,l)=>s+l.price*l.qty,0));
 const D=P.coupon?P.coupon:P.disc;let d=0;
 if(D.value>0)d=D.type==="pct"?elig*Math.min(100,D.value)/100:D.value;
 d=r2(Math.min(elig,d));return {sub:sub,d:d,total:r2(sub-d)};
}
function payOpen(o){
 P={customPrint:o.customPrint||null,title:o.title,lines:o.lines,gid:o.gid||null,print:o.print!==false,onDone:o.onDone,noDisc:!!o.noDisc,noPrepaid:!!o.noPrepaid,noCredit:!!o.noCredit,coupon:null,disc:{type:"pct",value:0,reason:"",by:null,open:false},rows:[]};
 P.rows=[{m:"cash",a:pCalc().total}];payRender();
}
function payRender(){
 const c=pCalc();
 const dOn=!P.noDisc&&!P.coupon&&(can("discount")||P.disc.open);
 const methods=PAYM.concat(P.gid&&!P.noCredit?["credit"]:[]);
 const cpn=P.noDisc?"":P.coupon?'<div class="line"><span>'+t("couponLbl")+" "+esc(P.coupon.code)+'</span><button class="btn sm" onclick="removeCoupon()">'+t("removeCoupon")+"</button></div>":'<div class="row" style="margin:0 0 8px;flex-wrap:nowrap"><input id="cpn" placeholder="'+t("couponLbl")+'"><button class="btn sm" onclick="applyCoupon()">'+t("applyCoupon")+"</button></div>";
 const man=(P.noDisc||P.coupon)?"":(dOn?'<div class="grid2" style="gap:8px"><label>'+t("discount")+'<select id="dt" onchange="pDisc()"><option value="pct" '+(P.disc.type==="pct"?"selected":"")+'>%</option><option value="amt" '+(P.disc.type==="amt"?"selected":"")+">"+t("egp")+'</option></select></label><label>'+t("value")+'<input id="dv" type="number" min="0" step="0.5" value="'+(P.disc.value||"")+'" oninput="pDisc()"></label></div><label>'+t("discReason")+'<input id="dr" value="'+esc(P.disc.reason)+'" oninput="pDisc()"></label>':'<button class="btn sm" onclick="pAskDisc()">'+t("discount")+" ("+t("needSup")+")</button>");
 modal("<h3>"+esc(P.title)+"</h3>"+P.lines.map(l=>'<div class="line"><span>'+esc(l.name)+(l.qty>1?" ×"+l.qty:"")+"</span><span>"+money(l.price*l.qty)+"</span></div>").join("")+"<hr>"+cpn+man+
 '<div class="line"><span>'+t("subtotal")+'</span><span id="psub"></span></div><div class="line"><span>'+t("discount")+'</span><span id="pdisc"></span></div><div class="line"><span>'+t("total")+'</span><span class="tot" id="ptot"></span></div><h4>'+t("payMethods")+"</h4>"+
 P.rows.map((r,i)=>'<div class="grid2" style="gap:8px;margin-bottom:6px"><select onchange="pRow('+i+",'m',this.value)\">"+methods.map(m=>'<option value="'+m+'" '+(r.m===m?"selected":"")+">"+mLabel(m)+"</option>").join("")+'</select><div class="row" style="margin:0;flex-wrap:nowrap"><input type="number" min="0" step="0.5" id="pa_'+i+'" value="'+r.a+'" oninput="pRow('+i+",'a',this.value)\"><button class=\"btn sm\" onclick=\"pFill("+i+')">'+t("fill")+"</button>"+(P.rows.length>1?'<button class="btn sm" onclick="pDel('+i+')">✕</button>':"")+"</div></div>").join("")+
 '<div class="row" style="margin-top:0"><button class="btn sm" onclick="pAddRow()">'+t("addMethod")+'</button></div><div class="line"><span>'+t("remaining")+'</span><b id="prem"></b></div><label class="opt"><input type="checkbox" id="ppr" '+(P.print?"checked":"")+"><span>"+t("printReceipt")+'</span></label><div class="row"><button class="btn ok" onclick="payConfirm()">'+t("confirmPay")+'</button><button class="btn" onclick="payCancel()">'+t("cancel")+"</button></div>");
 payUpdate();
}
function applyCoupon(){
 const r=couponCheck($("#cpn").value,P.gid);if(r.msg){toast(r.msg);return}
 P.coupon={code:r.c.code,type:r.c.type,value:r.c.value};P.disc={type:"pct",value:0,reason:"",by:null,open:false};
 if(P.rows.length===1)P.rows[0].a=pCalc().total;payRender();
}
function removeCoupon(){P.coupon=null;if(P.rows.length===1)P.rows[0].a=pCalc().total;payRender()}
function payUpdate(){
 const c=pCalc(),rem=r2(c.total-P.rows.reduce((s,r)=>s+r.a,0));
 $("#psub").textContent=money(c.sub);$("#pdisc").textContent=money(c.d);$("#ptot").textContent=money(c.total);
 const e=$("#prem");e.textContent=money(rem);e.style.color=Math.abs(rem)<0.005?"var(--ok)":"var(--bad)";
}
function pDisc(){
 P.disc.type=$("#dt").value;P.disc.value=Math.max(0,parseFloat(norm($("#dv").value))||0);P.disc.reason=$("#dr").value;
 if(P.disc.value>0&&!P.disc.by&&can("discount"))P.disc.by=me;
 if(P.rows.length===1){P.rows[0].a=pCalc().total;const e=$("#pa_0");if(e)e.value=P.rows[0].a}
 payUpdate();
}
function pRow(i,k,v){if(k==="a")P.rows[i].a=Math.max(0,parseFloat(norm(v))||0);else P.rows[i].m=v;payUpdate()}
function pAddRow(){const c=pCalc();P.rows.push({m:"card",a:Math.max(0,r2(c.total-P.rows.reduce((s,r)=>s+r.a,0)))});payRender()}
function pDel(i){P.rows.splice(i,1);payRender()}
function pFill(i){const c=pCalc();const o=P.rows.reduce((s,r,k)=>k===i?s:s+r.a,0);P.rows[i].a=Math.max(0,r2(c.total-o));payRender()}
function pAskDisc(){needApproval(u=>{P.disc.open=true;P.disc.by=u;payRender()},payRender)}
function payCancel(){P=null;closeModal()}
function payConfirm(){
 const c=pCalc(),sh=curShift();
 if(!sh){payCancel();requireShift();return}
 if(c.d>0&&!P.coupon){
  if(!P.disc.reason.trim()){toast(t("needReason"));return}
  if(!P.disc.by){if(can("discount"))P.disc.by=me;else{toast(t("needSup"));return}}
 }
 const paid=r2(P.rows.reduce((s,r)=>s+r.a,0));
 if(Math.abs(paid-c.total)>0.005){toast(t("payMismatch"));return}
 const now=Date.now(),credit=r2(P.rows.filter(r=>r.m==="credit").reduce((s,r)=>s+r.a,0));
 const disc=P.coupon?{type:P.coupon.type,value:P.coupon.value,amount:c.d,reason:t("couponLbl")+" "+P.coupon.code,by:null}:{type:P.disc.type,value:P.disc.value,amount:c.d,reason:P.disc.reason.trim(),by:P.disc.by?P.disc.by.id:null};
 const inv={id:uid(),no:nextNo("invoice"),cashier:me.id,createdAt:now,shift:sh.id,
  lines:P.lines.map(l=>({type:l.type,name:l.name,qty:l.qty,price:l.price,total:r2(l.price*l.qty),ret:0,pid:l.pid||null,ovBy:l.ovBy||null})),
  sub:c.sub,disc:disc,total:c.total,coupon:P.coupon?P.coupon.code:null,
  payments:P.rows.filter(r=>r.m!=="credit"&&r.a>0).map(r=>({m:r.m,a:r2(r.a),shift:sh.id,at:now})),
  creditAmt:credit,gid:P.gid,visitIds:[],void:null};
 S.invoices.push(inv);stockDeduct(inv);
 if(P.coupon){const cc=S.coupons.find(x=>x.code===P.coupon.code);if(cc)cc.used=(cc.used||0)+1;S.couponUses.push({code:P.coupon.code,gid:P.gid,inv:inv.id,at:now})}
 log("invoice","#"+inv.no+" total "+inv.total+(c.d>0?" disc "+c.d+" ("+disc.reason+")":"")+" "+inv.payments.map(p=>p.m+":"+p.a).join(",")+(credit?" credit:"+credit:""));save();
 const cb=P.onDone,cp=P.customPrint,pr=$("#ppr").checked;P=null;closeModal();
 if(cb)cb(inv);
 if(pr){if(cp)cp(inv);else printHTML(receiptInvoice(inv))}
}
function receiptInvoice(inv){
 const u=S.users.find(x=>x.id===inv.cashier);
 let h=rcptHead(t("rcptInvoice"),inv.no,inv.createdAt);
 if(inv.gid)h+=rw(t("guardian"),G(inv.gid).name,true)+"<hr>";
 let any=false;
 (inv.visitIds||[]).forEach(id=>{const v=S.visits.find(x=>x.id===id);if(!v)return;any=true;
  h+='<div class="kid"><div class="b">'+esc(C(v.childId).name)+"</div>"+rw(t("checkIn"),fTime(v.checkIn))+(v.checkOut?rw(t("checkOut"),fTime(v.checkOut)):rw(t("expectedExit"),v.planType==="open"?t("open"):fTime(v.checkIn+v.minutes*60000)))+"</div>"});
 if(any)h+="<hr>";
 inv.lines.forEach(l=>{h+=rw(esc(l.name)+(l.qty>1?" ×"+l.qty:""),money(l.price*l.qty))});
 h+="<hr>";
 if(inv.disc.amount>0)h+=rw(t("subtotal"),money(inv.sub))+rw(t("discount"),"-"+money(inv.disc.amount));
 h+=rw(t("total"),money(inv.total),true);
 inv.payments.forEach(p=>{h+=rw(mLabel(p.m),money(p.a))});
 if(dueOf(inv)>0)h+=rw(t("due")+" ("+t("m_credit")+")",money(dueOf(inv)),true);
 return h+'<hr><div class="c">'+esc(u?u.name:"")+"</div><div class=\"c\">"+t("thanks")+"</div>";
}

/* ---- POS (cafeteria & extra games) ---- */
let K={cat:"all",cart:[],gid:null,ov:{},showOut:false};
views.pos=function(){posRender()};
function posRender(){
  const outN=S.products.filter(p=>p.active&&tracked(p)&&stockOf(p)<=0).length;
 const items=S.products.filter(p=>p.active&&(K.cat==="all"||p.cat===K.cat)&&(K.showOut||!tracked(p)||stockOf(p)>0));
 let total=0;
 const cart=K.cart.map(c=>{const p=S.products.find(x=>x.id===c.id);if(!p)return "";total+=p.price*c.qty;
  return '<div class="line"><span>'+esc(pname(p))+'</span><span><button class="btn sm" onclick="cartQty(\''+c.id+'\',-1)">−</button> <b>'+c.qty+'</b> <button class="btn sm" onclick="cartQty(\''+c.id+'\',1)">+</button> '+money(p.price*c.qty)+"</span></div>"}).join("");
 const gl=K.gid?'<div class="line"><span>'+esc(G(K.gid).name)+'</span><button class="btn sm" onclick="K.gid=null;posRender()">✕</button></div>'+acctLine(K.gid):'<button class="btn sm" onclick="gpModal(id=>{K.gid=id;posRender()})">'+t("linkGuardian")+"</button>";
 $("#view").innerHTML="<h2>"+t("posTitle")+'</h2><div class="grid2"><div class="card"><div class="row" style="margin:0 0 10px">'+pcatBtns(K.cat,"K.cat='@';posRender()")+(outN?'<button class="btn sm '+(K.showOut?"pri":"")+'" onclick="K.showOut=!K.showOut;posRender()">'+(K.showOut?t("hideOut"):t("showOut")+" ("+outN+")")+"</button>":"")+'</div><div class="pgrid">'+
  items.map(p=>'<button class="pbtn" onclick="cartAdd(\''+p.id+'\')"><b>'+esc(pname(p))+"</b><span>"+money(p.price)+"</span></button>").join("")+'</div></div><div class="card"><h3>'+t("cart")+"</h3>"+gl+"<hr>"+(cart||'<div class="muted">'+t("cartEmpty")+"</div>")+
  '<div class="line"><span>'+t("total")+'</span><span class="tot">'+money(total)+'</span></div><div class="row"><button class="btn ok big" onclick="posPay()">'+t("pay")+'</button><button class="btn" onclick="K.cart=[];K.ov={};K.gid=null;posRender()">'+t("clear")+"</button></div></div></div>";
}
function stockOv(id,cb){const p=S.products.find(x=>x.id===id);needApproval(u=>{K.ov[id]=u.id;log("oversell approved",(p?pname(p):id)+" by "+u.name);save();cb()},()=>posRender())}
function cartAdd(id){const c=K.cart.find(x=>x.id===id);if(!cartStockOk(id,(c?c.qty:0)+1)&&!K.ov[id]){stockOv(id,()=>cartAdd(id));return}if(c)c.qty++;else K.cart.push({id:id,qty:1});posRender()}
function cartQty(id,d){const c=K.cart.find(x=>x.id===id);if(!c)return;if(d>0&&!cartStockOk(id,c.qty+d)&&!K.ov[id]){stockOv(id,()=>cartQty(id,d));return}c.qty+=d;if(c.qty<=0)K.cart=K.cart.filter(x=>x!==c);posRender()}
function gpModal(cb){window._gp=cb;modal("<h3>"+t("linkGuardian")+'</h3><input id="gps" placeholder="'+t("searchGuardian")+'" oninput="gpSearch(this.value)"><div id="gpres"></div><div class="row"><button class="btn" onclick="closeModal()">'+t("cancel")+"</button></div>")}
function gpSearch(q){$("#gpres").innerHTML=guardianMatches(q).map(g=>'<div class="res" onclick="gpPick(\''+g.id+'\')"><b>'+esc(g.name)+'</b> <span dir="ltr" class="muted">'+esc(phonesTxt(g))+"</span></div>").join("")}
function gpPick(id){const cb=window._gp;window._gp=null;closeModal();if(cb)cb(id)}
function posPay(){
 const lines=K.cart.map(c=>{const p=S.products.find(x=>x.id===c.id);return p?{type:p.cat,name:pname(p),qty:c.qty,price:p.price,pid:p.id,ovBy:K.ov[p.id]||null}:null}).filter(Boolean);
 if(K.cart.some(c=>!cartStockOk(c.id,c.qty)&&!K.ov[c.id])){toast(t("noStock"));return}
 if(!lines.length){toast(t("cartEmpty"));return}
 if(!requireShift())return;
 payOpen({title:t("posTitle"),lines:lines,gid:K.gid,print:true,onDone:()=>{K.cart=[];K.ov={};K.gid=null;toast(t("paidOk"));render()}});
}

/* ---- shifts ---- */
function shiftStats(sh){
 const z=()=>({cash:0,card:0,wallet:0}),net=z(),out=z();
 let sales=0,cnt=0,credit=0,disc=0,voids=0,voidAmt=0,refAmt=0,topups=0;
 const expT=r2((S.expenses||[]).filter(x=>x.shift===sh.id&&!x.void).reduce((a,x)=>a+x.amount,0));
 S.invoices.forEach(i=>{
  i.payments.forEach(p=>{if(p.shift===sh.id)net[p.m]=(net[p.m]||0)+p.a});
  if(i.shift===sh.id&&!i.void){cnt++;sales+=invRevenue(i);topups+=invTopup(i);credit+=i.creditAmt;disc+=i.disc.amount}
  if(i.void&&i.void.shift===sh.id){voids++;i.payments.forEach(p=>{out[p.m]=(out[p.m]||0)+p.a;voidAmt+=p.a})}
 });
 S.refunds.filter(r=>r.shift===sh.id).forEach(r=>{out[r.m]=(out[r.m]||0)+r.a;refAmt+=r.a});
 Object.keys(net).forEach(m=>{net[m]=r2(net[m]-(out[m]||0))});
 return {net:net,sales:r2(sales),cnt:cnt,credit:r2(credit),disc:r2(disc),voids:voids,voidAmt:r2(voidAmt),refAmt:r2(refAmt),topups:r2(topups),exp:expT,expected:r2(sh.openingCash+net.cash-expT)};
}
views.shift=function(){
 const sh=curShift();let h="<h2>"+t("shiftTitle")+"</h2>";
 if(!sh){
  h+='<div class="card"><h3>'+t("openShift")+'</h3><label>'+t("openingCash")+'<input id="oc" type="number" min="0" step="0.5" value="0"></label><button class="btn pri" onclick="openShift()">'+t("openShift")+"</button></div>";
 }else{
  const st=shiftStats(sh),u=S.users.find(x=>x.id===sh.userId);
  h+='<div class="card"><div class="bar"><h3>'+t("shiftOpen")+" #"+sh.no+'</h3><span class="muted">'+esc(u?u.name:"")+" • "+fTime(sh.openedAt)+'</span></div><div class="kpis">'+
   kpi(t("openingCash"),money(sh.openingCash))+kpi(mLabel("cash"),money(st.net.cash))+kpi(mLabel("card"),money(st.net.card))+kpi(mLabel("wallet"),money(st.net.wallet))+kpi(mLabel("credit"),money(st.credit))+kpi(t("invoicesN"),st.cnt)+kpi(t("discounts"),money(st.disc))+kpi(t("refunds"),money(st.refAmt+st.voidAmt))+kpi(t("expShift"),money(st.exp))+
   '</div><div class="kpi">'+t("expectedCash")+"<b>"+money(st.expected)+'</b></div><h4>'+t("closeShift")+'</h4><label>'+t("countedCash")+'<input id="cc" type="number" min="0" step="0.5" oninput="shiftDiff()"></label><div id="sdiff" class="line"></div><label>'+t("notes")+'<input id="cnote3"></label><label class="opt"><input type="checkbox" id="csp" checked><span>'+t("printShiftReport")+'</span></label><button class="btn bad" onclick="closeShift()">'+t("closeShift")+"</button></div>";
 }
 const past=S.shifts.filter(s=>s.status==="closed").sort((a,b)=>b.no-a.no).slice(0,10);
 h+='<div class="card"><h3>'+t("pastShifts")+'</h3><table><thead><tr><th>#</th><th>'+t("cashier")+"</th><th>"+t("openedAt")+"</th><th>"+t("closedAt")+"</th><th>"+t("expected")+"</th><th>"+t("counted")+"</th><th>"+t("diff")+"</th><th></th></tr></thead><tbody>"+
  (past.length?past.map(s=>{const u=S.users.find(x=>x.id===s.userId);return "<tr><td>"+s.no+"</td><td>"+esc(u?u.name:"")+"</td><td>"+fDate(s.openedAt)+" "+fTime(s.openedAt)+"</td><td>"+fTime(s.closedAt)+"</td><td>"+money(s.expected)+"</td><td>"+money(s.counted)+'</td><td><span class="tag '+(s.diff<0?"over":s.diff>0?"soon":"ok")+'">'+diffText(s.diff)+'</span></td><td><button class="btn sm" onclick="printShift(\''+s.id+"')\">"+t("reprint")+"</button></td></tr>"}).join(""):'<tr><td colspan="8" class="muted">'+t("none")+"</td></tr>")+"</tbody></table></div>";
 $("#view").innerHTML=h;if(sh)shiftDiff();
};
function diffText(d){return d<0?t("diffShort")+" "+money(-d):d>0?t("diffOver")+" "+money(d):t("diffZero")}
function shiftDiff(){
 const sh=curShift(),e=$("#sdiff");if(!sh||!e)return;const raw=$("#cc").value;
 if(raw===""){e.textContent="";return}
 const d=r2(parseFloat(norm(raw))-shiftStats(sh).expected);e.innerHTML="<span>"+t("diff")+'</span><b style="color:'+(d<0?"var(--bad)":d>0?"var(--warn)":"var(--ok)")+'">'+diffText(d)+"</b>";
}
function openShift(){
 if(curShift()){render();return}
 const oc=parseFloat(norm($("#oc").value));if(!isFinite(oc)||oc<0){toast(t("badAge"));return}
 S.shifts.push({id:uid(),no:nextNo("shift"),userId:me.id,openedAt:Date.now(),openingCash:oc,status:"open"});
 log("open shift","opening cash "+oc);save();render();
}
function closeShift(){
 const sh=curShift();if(!sh)return;
 if(!(sh.userId===me.id||can("approve"))){toast(t("shiftNotYours"));return}
 const raw=$("#cc").value,cnt=parseFloat(norm(raw));
 if(raw===""||!isFinite(cnt)||cnt<0){toast(t("needCounted"));return}
 const st=shiftStats(sh);if(!confirm(t("confirmClose")))return;
 sh.status="closed";sh.closedAt=Date.now();sh.closedBy=me.id;sh.expected=st.expected;sh.counted=cnt;sh.diff=r2(cnt-st.expected);sh.note=$("#cnote3").value.trim();
 const pr=$("#csp").checked;log("close shift","#"+sh.no+" expected "+sh.expected+" counted "+cnt+" diff "+sh.diff+(sh.note?" ("+sh.note+")":""));save();
 if(pr)printHTML(shiftReport(sh));toast(t("saved"));render();
}
function printShift(id){const s=S.shifts.find(x=>x.id===id);if(s)printHTML(shiftReport(s))}
function shiftReport(sh){
 const st=shiftStats(sh),u=S.users.find(x=>x.id===sh.userId),exp=sh.status==="closed"?sh.expected:st.expected;
 let h="<h1>"+esc(S.settings.venue)+"</h1>"+(S.settings.branch?'<div class="c">'+esc(S.settings.branch)+"</div>":"")+"<h2>"+t("shiftReport")+" #"+sh.no+"</h2><hr>"+
  rw(t("cashier"),u?u.name:"")+rw(t("openedAt"),fDate(sh.openedAt)+" "+fTime(sh.openedAt))+(sh.closedAt?rw(t("closedAt"),fDate(sh.closedAt)+" "+fTime(sh.closedAt)):"")+"<hr>"+
  rw(t("openingCash"),money(sh.openingCash))+rw(mLabel("cash"),money(st.net.cash))+rw(mLabel("card"),money(st.net.card))+rw(mLabel("wallet"),money(st.net.wallet))+rw(mLabel("credit"),money(st.credit))+"<hr>"+
  rw(t("invoicesN"),String(st.cnt))+rw(t("sales"),money(st.sales))+rw(t("discounts"),money(st.disc))+rw(t("refunds"),money(st.refAmt))+rw(t("voidedN"),st.voids+" / "+money(st.voidAmt))+rw(t("expShift"),money(st.exp))+"<hr>"+
  rw(t("expectedCash"),money(exp),true);
 if(sh.status==="closed")h+=rw(t("countedCash"),money(sh.counted),true)+rw(t("diff"),diffText(sh.diff),true)+(sh.note?'<div class="c">'+esc(sh.note)+"</div>":"");
 return h;
}

/* ---- invoices, collect, void, refund ---- */
let iDay=null;
/* فلتر وترتيب الفواتير: من/إلى تاريخ، من/إلى وقت داخل اليوم، رقم الفاتورة (رقم أو مدى 100-120 أو عدة أرقام 5,9)، الحالة، والترتيب */
let IF={from:"",to:"",tf:"",tt:"",no:"",st:"all",sort:"new"};
const tKey=ts=>new Date(ts).toLocaleTimeString("en-GB",{timeZone:TZ,hour:"2-digit",minute:"2-digit",hour12:false}).replace(/^24/,"00");
function invNoMatch(q,no){
 q=norm(String(q||"")).replace(/\s+/g,"");if(!q)return true;
 return q.split(/[,،;]/).filter(Boolean).some(p=>{
  const m=p.match(/^(\d+)-(\d+)$/);if(m){const lo=+m[1],hi=+m[2];return no>=Math.min(lo,hi)&&no<=Math.max(lo,hi)}
  return /^\d+$/.test(p)&&+p===no});
}
function invFilter(list){
 const today=dayKey(Date.now()),f=IF.from||iDay||today,tt_=IF.to||IF.from||iDay||today,lo=f<=tt_?f:tt_,hi=f<=tt_?tt_:f;
 let r=list.filter(i=>{const d=dayKey(i.createdAt);if(d<lo||d>hi)return false;
  if(IF.tf||IF.tt){const k=tKey(i.createdAt),a=IF.tf||"00:00",b=IF.tt||"23:59";if(a<=b){if(k<a||k>b)return false}else if(k<a&&k>b)return false}
  if(!invNoMatch(IF.no,i.no))return false;
  const due=dueOf(i);
  if(IF.st==="paid"&&(i.void||due>0))return false;
  if(IF.st==="credit"&&(i.void||!(due>0)))return false;
  if(IF.st==="void"&&!i.void)return false;
  if(IF.st==="ref"&&!(refundedOf(i)>0))return false;
  return true});
 const cmp={new:(a,b)=>b.createdAt-a.createdAt||b.no-a.no,old:(a,b)=>a.createdAt-b.createdAt||a.no-b.no,totD:(a,b)=>b.total-a.total||b.no-a.no,totA:(a,b)=>a.total-b.total||a.no-b.no,noD:(a,b)=>b.no-a.no,noA:(a,b)=>a.no-b.no}[IF.sort]||((a,b)=>b.no-a.no);
 return r.sort(cmp);
}
function invSet(k,v){IF[k]=v;if(k==="from"||k==="to")iDay=null;render()}
function invReset(){IF={from:"",to:"",tf:"",tt:"",no:"",st:"all",sort:"new"};iDay=null;render()}
views.invoices=function(){
 if(!iDay&&!IF.from)iDay=dayKey(Date.now());
 const list=invFilter(S.invoices),shown=list.filter(i=>!i.void),sum=r2(shown.reduce((a,i)=>a+i.total,0));
 const df=IF.from||iDay||dayKey(Date.now()),dt=IF.to||IF.from||iDay||dayKey(Date.now());
 const opt=(v,l,cur)=>'<option value="'+v+'" '+(cur===v?"selected":"")+">"+t(l)+"</option>";
 $("#view").innerHTML='<div class="bar"><h2>'+t("invoices")+'</h2><span class="muted">'+list.length+" • "+t("total")+" "+money(sum)+'</span></div><div class="card"><div class="grid2" style="gap:8px"><label>'+t("invFrom")+'<input type="date" value="'+df+'" onchange="invSet(\'from\',this.value)"></label><label>'+t("invTo")+'<input type="date" value="'+dt+'" onchange="invSet(\'to\',this.value)"></label><label>'+t("invTimeFrom")+'<input type="time" value="'+IF.tf+'" onchange="invSet(\'tf\',this.value)"></label><label>'+t("invTimeTo")+'<input type="time" value="'+IF.tt+'" onchange="invSet(\'tt\',this.value)"></label><label>'+t("invNo")+'<input id="invno" placeholder="105 / 100-120 / 5,9" value="'+esc(IF.no)+'" onchange="invSet(\'no\',this.value)"></label><label>'+t("status")+'<select onchange="invSet(\'st\',this.value)">'+opt("all","invAll",IF.st)+opt("paid","paidTag",IF.st)+opt("credit","creditTag",IF.st)+opt("void","voided",IF.st)+opt("ref","refunds",IF.st)+'</select></label><label>'+t("invSort")+'<select onchange="invSet(\'sort\',this.value)">'+opt("new","sortNew",IF.sort)+opt("old","sortOld",IF.sort)+opt("noD","sortNoD",IF.sort)+opt("noA","sortNoA",IF.sort)+opt("totD","sortTotD",IF.sort)+opt("totA","sortTotA",IF.sort)+'</select></label></div><div class="row"><button class="btn sm" onclick="invReset()">'+t("invReset")+'</button></div></div><div class="card"><table><thead><tr><th>#</th><th>'+t("time")+"</th><th>"+t("cashier")+"</th><th>"+t("items")+"</th><th>"+t("total")+"</th><th>"+t("method")+"</th><th>"+t("status")+"</th><th></th></tr></thead><tbody>"+
 (list.length?list.map(i=>{
  const u=S.users.find(x=>x.id===i.cashier),due=dueOf(i),ref=refundedOf(i);
  const items=i.lines.map(l=>l.name+(l.qty>1?"×"+l.qty:"")).join("، ");
  const st=i.void?'<span class="tag over">'+t("voided")+"</span>":due>0?'<span class="tag soon">'+t("creditTag")+" "+money(due)+"</span>":'<span class="tag ok">'+t("paidTag")+"</span>";
  return "<tr><td>"+i.no+"</td><td>"+(df!==dt?dayKey(i.createdAt)+" ":"")+fTime(i.createdAt)+"</td><td>"+esc(u?u.name:"")+"</td><td>"+esc(items.length>46?items.slice(0,46)+"…":items)+"</td><td>"+money(i.total)+(i.disc.amount?'<div class="muted">−'+money(i.disc.amount)+"</div>":"")+"</td><td>"+(i.payments.map(p=>mLabel(p.m)+" "+money(p.a)).join("، ")||"–")+"</td><td>"+st+(ref?'<div class="muted">'+t("refunds")+" "+money(ref)+"</div>":"")+'</td><td><button class="btn sm" onclick="printInv(\''+i.id+"')\">"+t("reprint")+"</button> "+
   (!i.void&&due>0?'<button class="btn sm" onclick="collectModal(\''+i.id+"')\">"+t("collect")+"</button> ":"")+(!i.void?'<button class="btn sm" onclick="refundStart(\''+i.id+"')\">"+t("refundInv")+'</button> <button class="btn sm" onclick="voidStart(\''+i.id+"')\">"+t("voidInv")+"</button>":"")+"</td></tr>";
 }).join(""):'<tr><td colspan="8" class="muted">'+t("none")+"</td></tr>")+"</tbody></table></div>";
};
function printInv(id){const i=S.invoices.find(x=>x.id===id);if(i)printHTML(receiptInvoice(i))}
function collectModal(id){
 const i=S.invoices.find(x=>x.id===id);if(!i)return;
 modal("<h3>"+t("collect")+" #"+i.no+'</h3><div class="line"><span>'+t("due")+"</span><b>"+money(dueOf(i))+'</b></div><label>'+t("method")+'<select id="cm">'+PAYM.map(m=>'<option value="'+m+'">'+mLabel(m)+"</option>").join("")+'</select></label><label>'+t("amount")+'<input id="ca2" type="number" min="0" step="0.5" value="'+dueOf(i)+'"></label><div class="row"><button class="btn ok" onclick="collectDo(\''+id+'\')">'+t("collect")+'</button><button class="btn" onclick="closeModal()">'+t("cancel")+"</button></div>");
}
function collectDo(id){
 const i=S.invoices.find(x=>x.id===id),a=r2(parseFloat(norm($("#ca2").value)));
 if(!i||!(a>0)||a>dueOf(i)+0.005){toast(t("payMismatch"));return}
 if(!requireShift())return;
 i.payments.push({m:$("#cm").value,a:a,shift:curShift().id,at:Date.now()});
 log("collect","invoice #"+i.no+" "+a);save();closeModal();render();
}
function voidStart(id){
 const i=S.invoices.find(x=>x.id===id);if(!i||i.void)return;
 if(refundedOf(i)>0){toast(t("voidHasRefunds"));return}
 if(i.lines.some(l=>l.type==="party")){toast(t("voidParty"));return}
 const sub=S.subs.find(s=>s.invoiceId===i.id);if(sub&&sub.usage.length){toast(t("voidPkgUsed"));return}
 needApproval(u=>{
  modal("<h3>"+t("voidInv")+" #"+i.no+'</h3><label>'+t("voidReason")+'<input id="vr"></label><div class="row"><button class="btn bad" onclick="voidDo(\''+id+"','"+u.id+"')\">"+t("confirmVoid")+'</button><button class="btn" onclick="closeModal()">'+t("cancel")+"</button></div>");
 },closeModal);
}
function voidDo(id,ap){
 const i=S.invoices.find(x=>x.id===id),reason=$("#vr").value.trim();
 if(!i||i.void)return;if(!reason){toast(t("needReason"));return}
 if(!requireShift())return;
 const now=Date.now();
 i.void={by:me.id,approvedBy:ap,at:now,reason:reason,shift:curShift().id};
 (i.visitIds||[]).forEach(vid=>{const v=S.visits.find(x=>x.id===vid);if(v&&v.status==="in"&&v.invoiceId===i.id){v.prepaid=false;v.invoiceId=null}});
 stockRestore(i);
 const sub=S.subs.find(s=>s.invoiceId===i.id);if(sub)sub.status="void";
 if(i.coupon){const cc=S.coupons.find(x=>x.code===i.coupon);if(cc)cc.used=Math.max(0,(cc.used||0)-1);S.couponUses=S.couponUses.filter(u=>u.inv!==i.id)}
 log("void invoice","#"+i.no+" "+reason);save();closeModal();render();
}
function refundStart(id){const i=S.invoices.find(x=>x.id===id);if(!i||i.void)return;needApproval(u=>refundForm(id,u.id),closeModal)}
function refundForm(id,ap){
 const i=S.invoices.find(x=>x.id===id);window._rf={id:id,ap:ap,amt:0};
 modal("<h3>"+t("refundInv")+" #"+i.no+"</h3>"+i.lines.map((l,k)=>{const mx=refMax(l);return '<div class="line"><span>'+esc(l.name)+" ("+money(l.price)+")</span><input type=\"number\" id=\"rq"+k+"\" min=\"0\" max=\""+mx+"\" value=\"0\" style=\"width:70px\" "+(mx<=0?"disabled":"")+' oninput="refCalc()"></div>'}).join("")+
  '<label>'+t("refundMethod")+'<select id="rm">'+PAYM.map(m=>'<option value="'+m+'">'+mLabel(m)+"</option>").join("")+'</select></label><label>'+t("voidReason")+'<input id="rr"></label><div class="line"><span>'+t("refundAmount")+'</span><span class="tot" id="ramt">'+money(0)+'</span></div><div class="row"><button class="btn bad" onclick="refundDo()">'+t("confirmRefund")+'</button><button class="btn" onclick="closeModal()">'+t("cancel")+"</button></div>");
}
function refItems(){
 const i=S.invoices.find(x=>x.id===window._rf.id),f=i.sub>0?i.total/i.sub:1,items=[];let a=0;
 i.lines.forEach((l,k)=>{const q=Math.min(Math.max(0,parseInt(norm($("#rq"+k).value),10)||0),refMax(l));if(q>0){items.push({k:k,q:q});a+=q*l.price*f}});
 return {i:i,items:items,amt:r2(a)};
}
function refCalc(){$("#ramt").textContent=money(refItems().amt)}
function refundDo(){
 const r=refItems(),reason=$("#rr").value.trim();
 if(!r.items.length||!(r.amt>0)){toast(t("nothingToRefund"));return}
 if(!reason){toast(t("needReason"));return}
 if(!requireShift())return;
 S.refunds.push({id:uid(),inv:r.i.id,items:r.items,a:r.amt,m:$("#rm").value,reason:reason,by:me.id,approvedBy:window._rf.ap,at:Date.now(),shift:curShift().id});
 r.items.forEach(x=>{r.i.lines[x.k].ret=(r.i.lines[x.k].ret||0)+x.q});stockRefund(r.i,r.items);
 log("refund","invoice #"+r.i.no+" "+r.amt+" "+reason);save();closeModal();render();
}

/* ---- product catalog (settings) ---- */
function productsCard(){
 return '<div class="card"><div class="bar"><h3>'+t("products")+'</h3><span><button class="btn sm" onclick="pcatModal()">'+t("pcatManage")+'</button> <button class="btn sm pri" onclick="productModal(\'\')">'+t("addProduct")+'</button></span></div><table><thead><tr><th>'+t("name")+"</th><th>"+t("category")+"</th><th>"+t("price")+"</th><th>"+t("active")+"</th><th></th></tr></thead><tbody>"+
 S.products.map(p=>"<tr><td>"+esc(pname(p))+"</td><td>"+esc(pcatName(p.cat))+"</td><td>"+money(p.price)+"</td><td>"+(p.active?"✔":"✘")+'</td><td><button class="btn sm" onclick="productModal(\''+p.id+"')\">"+t("edit")+"</button> <button class=\"btn sm bad\" onclick=\"productDelete(\'"+p.id+"\')\">"+t("del")+"</button></td></tr>").join("")+"</tbody></table></div>";
}
function pcatModal(){
 if(!can("settings"))return;
 const L=pcatsCustom();
 modal("<h3>"+t("pcatManage")+'</h3><div class="muted">'+t("pcatNote")+"</div><hr>"+
  (L.length?L.map(c=>'<div class="line"><span>'+esc(c.ar)+" / "+esc(c.en)+'</span><span><button class="btn sm" onclick="pcatEdit(\''+c.id+'\')">'+t("edit")+'</button> <button class="btn sm bad" onclick="pcatDel(\''+c.id+'\')">'+t("del")+"</button></span></div>").join(""):'<div class="muted">'+t("none")+"</div>")+
  '<hr><label>'+t("nameAr")+'<input id="pcn1"></label><label>'+t("nameEn")+'<input id="pcn2"></label><div class="row"><button class="btn pri" onclick="pcatAdd()">'+t("pcatAdd")+'</button><button class="btn" onclick="closeModal()">'+t("close")+"</button></div>");
}
function pcatAdd(){
 if(!can("settings"))return;
 const ar=$("#pcn1").value.trim(),en=$("#pcn2").value.trim()||ar;if(!ar){toast(t("needName"));return}
 const all=pcatPairs().map(c=>c[1].toLowerCase());if(all.includes(ar.toLowerCase())||all.includes(en.toLowerCase())){toast(t("pcatDup"));return}
 S.settings.pcats=pcatsCustom().concat([{id:"pc_"+uid(),ar:ar,en:en}]);log("new product category",ar);save();pcatModal();render()}
function pcatEdit(id){
 const c=pcatsCustom().find(x=>x.id===id);if(!c||!can("settings"))return;
 const ar=prompt(t("nameAr"),c.ar);if(ar===null)return;const en=prompt(t("nameEn"),c.en);if(en===null)return;
 if(!ar.trim()){toast(t("needName"));return}
 c.ar=ar.trim();c.en=en.trim()||ar.trim();log("edit product category",c.ar);save();pcatModal();render()}
function pcatDel(id){
 const c=pcatsCustom().find(x=>x.id===id);if(!c||!can("settings"))return;
 if(S.products.some(p=>p.cat===id)){toast(t("pcatInUse"));return}
 if(!confirm(t("pcatDelConf")+"\n"+c.ar))return;
 S.settings.pcats=pcatsCustom().filter(x=>x.id!==id);log("delete product category",c.ar);save();pcatModal();render()}
function productDelete(id){
 if(!can("settings"))return;
 const p=S.products.find(x=>x.id===id);if(!p)return;
 if(S.invoices.some(i=>(i.lines||[]).some(l=>l.pid===id))){toast(t("prodDelHas"));return}
 if(!confirm(t("prodDelConf")+"\n"+pname(p)))return;
 S.products.splice(S.products.indexOf(p),1);K.cart=K.cart.filter(c=>c.id!==id);delete K.ov[id];
 log("delete product",pname(p));save();toast(t("prodDeleted"));render();
}
function productModal(id){
 const p=id?S.products.find(x=>x.id===id):null;
 modal("<h3>"+(p?t("edit"):t("addProduct"))+'</h3><label>'+t("nameAr")+'<input id="pn1" value="'+esc(p?p.name.ar:"")+'"></label><label>'+t("nameEn")+'<input id="pn2" value="'+esc(p?p.name.en:"")+'"></label><label>'+t("category")+'<select id="pc">'+pcatPairs().map(c=>'<option value="'+esc(c[0])+'" '+((p?p.cat:"cafe")===c[0]?"selected":"")+">"+esc(c[1])+"</option>").join("")+'</select></label><label>'+t("price")+'<input id="pp1" type="number" min="0" step="0.5" value="'+(p?p.price:"")+'"></label><label class="opt"><input type="checkbox" id="pa1" '+(!p||p.active?"checked":"")+"><span>"+t("active")+'</span></label><div class="row"><button class="btn pri" onclick="saveProduct(\''+(id||"")+'\')">'+t("save")+'</button><button class="btn" onclick="closeModal()">'+t("cancel")+"</button></div>");
}
function saveProduct(id){
 const ar=$("#pn1").value.trim(),en=$("#pn2").value.trim()||ar,price=parseFloat(norm($("#pp1").value));
 if(!ar){toast(t("needName"));return}if(!isFinite(price)||price<0){toast(t("badAge"));return}
 const o={name:{ar:ar,en:en},cat:$("#pc").value,price:price,active:$("#pa1").checked};
 if(id)Object.assign(S.products.find(x=>x.id===id),o);else S.products.push(Object.assign({id:uid()},o));
 log(id?"edit product":"new product",ar+" "+price);save();closeModal();render();
}

/* ============ Phase 3: packages, prepaid wallet, coupons ============ */
function defaultPackages(){return [
 {id:"pk10",name:{ar:"باقة 10 ساعات",en:"10 hours"},hours:10,price:500,validDays:30,active:true},
 {id:"pk20",name:{ar:"باقة 20 ساعة",en:"20 hours"},hours:20,price:900,validDays:30,active:true},
 {id:"pk30",name:{ar:"باقة 30 ساعة",en:"30 hours"},hours:30,price:1200,validDays:30,active:true}]}
const balanceOf=g=>S.balances[g]||0;
const activeSubs=g=>S.subs.filter(s=>s.gid===g&&s.status==="active"&&s.remaining>0&&s.expiresAt>Date.now()).sort((a,b)=>a.expiresAt-b.expiresAt);
const pkgAvail=g=>activeSubs(g).reduce((s,x)=>s+x.remaining,0);
const openRate=()=>{const p=S.settings.plans.find(x=>x.type==="open");return p?p.rate:0};
const refMax=l=>(l.type==="package"||l.type==="topup"||l.type==="party")?0:l.qty-(l.ret||0);
const invTopup=i=>r2(i.lines.reduce((s,l)=>s+(l.type==="topup"?l.price*l.qty:0),0));
const invRevenue=i=>r2(i.total-invTopup(i));
function pkgDeduct(g,mins,vid){let left=mins;activeSubs(g).forEach(s=>{if(left<=0)return;const u=Math.min(left,s.remaining);s.remaining-=u;left-=u;s.usage.push({visit:vid,mins:u,at:Date.now()});if(s.remaining<=0)s.status="used"})}
function acctLine(g){const a=pkgAvail(g);if(!a)return "";return '<div class="muted">'+t("packagesLeft")+": "+fMin(a)+"</div>"}
function couponCheck(code,gid){
 const c=S.coupons.find(x=>x.active&&x.code.toLowerCase()===String(code).trim().toLowerCase());
 if(!c)return {msg:t("cpInvalid")};
 if(c.expires&&Date.now()>c.expires)return {msg:t("cpExpired")};
 if(c.maxUses&&c.used>=c.maxUses)return {msg:t("cpMax")};
 if(c.oncePerGuardian){if(!gid)return {msg:t("cpNeedG")};if(S.couponUses.some(u=>u.code===c.code&&u.gid===gid))return {msg:t("cpOnce")}}
 return {c:c};
}

/* ---- Phase 3 UI: sell package, top-up, account ---- */
function sellPackage(gid){
 const list=S.packages.filter(p=>p.active);if(!list.length){toast(t("noPackages"));return}
 modal("<h3>"+t("sellPackage")+" – "+esc(G(gid).name)+"</h3>"+list.map(p=>'<div class="opt" onclick="sellPkgPay(\''+gid+"','"+p.id+"')\"><span><b>"+esc(p.name[lang]||p.name.ar)+"</b> • "+p.hours+" "+t("hoursShort")+" • "+money(p.price)+" • "+p.validDays+" "+t("daysShort")+"</span></div>").join("")+'<div class="row"><button class="btn" onclick="closeModal()">'+t("cancel")+"</button></div>");
}
function sellPkgPay(gid,pid){
 const p=S.packages.find(x=>x.id===pid);if(!p)return;if(!requireShift())return;
 payOpen({title:t("sellPackage"),lines:[{type:"package",name:p.name[lang]||p.name.ar,qty:1,price:p.price}],gid:gid,print:true,onDone:inv=>{
  const now=Date.now();S.subs.push({id:uid(),gid:gid,pkgId:p.id,name:p.name,total:p.hours*60,remaining:p.hours*60,purchasedAt:now,expiresAt:now+p.validDays*86400000,invoiceId:inv.id,status:"active",usage:[]});
  log("sell package",p.name.ar+" / "+G(gid).name);save();toast(t("pkgSoldOk"));render()}});
}
function acctModal(gid){
 const subs=S.subs.filter(s=>s.gid===gid).sort((a,b)=>b.purchasedAt-a.purchasedAt);
 modal("<h3>"+esc(G(gid).name)+" – "+t("account")+'</h3><h4>'+t("packages")+"</h4>"+
 (subs.length?subs.map(s=>{const st=s.status==="void"?"st_void":s.status==="used"?"st_used":(s.expiresAt<Date.now()?"st_expired":"st_active");return '<div class="line"><span>'+esc(s.name[lang]||s.name.ar)+"</span><span>"+fMin(s.remaining)+" / "+fMin(s.total)+" • "+t("expires")+" "+fDate(s.expiresAt)+' <span class="tag '+(st==="st_active"?"ok":"over")+'">'+t(st)+"</span></span></div>"}).join(""):'<div class="muted">'+t("none")+"</div>")+
 '<div class="row"><button class="btn" onclick="closeModal()">'+t("close")+"</button></div>");
}
function guardianRows(){
 const q=norm(($("#gq")||{}).value||"");
 const list=(q?guardianMatches(q):S.guardians.slice().sort((a,b)=>a.name.localeCompare(b.name,"ar"))).slice(0,60);
 $("#grows").innerHTML=list.length?list.map(g=>{
  const kids=S.children.filter(c=>c.guardianId===g.id);
  return '<div class="card"><div class="bar"><div><b>'+esc(g.name)+'</b> <span dir="ltr" class="muted">'+esc(phonesTxt(g))+'</span>'+(g.notes?'<div class="muted">'+esc(g.notes)+"</div>":"")+acctLine(g.id)+'</div><div class="row" style="margin:0"><button class="btn sm" onclick="sellPackage(\''+g.id+"')\">"+t("sellPackage")+'</button><button class="btn sm" onclick="acctModal(\''+g.id+"')\">"+t("account")+'</button>'+(activeSubs(g.id).length?'<button class="btn sm" onclick="waGuardianPkg(\''+g.id+"')\">"+t("waBtn")+" – "+t("pkgTag")+"</button>":"")+'<button class="btn sm" onclick="guardianModal(\''+g.id+"')\">"+t("edit")+"</button></div></div>"+
   kids.map(c=>'<div class="line"><span>'+esc(c.name)+" • "+c.age+" "+t("years")+(c.notes?' <span class="muted">('+esc(c.notes)+")</span>":"")+'</span><span><span class="muted">'+S.visits.filter(v=>v.childId===c.id).length+" "+t("visitsCount")+'</span> <button class="btn sm" onclick="childModal(\''+g.id+"','"+c.id+"')\">"+t("edit")+"</button></span></div>").join("")+
   '<div class="row"><button class="btn sm" onclick="childModal(\''+g.id+"','')\">"+t("addChild")+"</button></div></div>";
 }).join(""):'<div class="muted">'+t("none")+"</div>";
}
/* ---- settings: packages & coupons ---- */
function packagesCard(){
 return '<div class="card"><div class="bar"><h3>'+t("packages")+'</h3><button class="btn sm pri" onclick="packageModal(\'\')">'+t("addPackage")+'</button></div><table><thead><tr><th>'+t("name")+"</th><th>"+t("hours")+"</th><th>"+t("price")+"</th><th>"+t("validDays")+"</th><th>"+t("active")+"</th><th></th></tr></thead><tbody>"+
 S.packages.map(p=>"<tr><td>"+esc(p.name[lang]||p.name.ar)+"</td><td>"+p.hours+"</td><td>"+money(p.price)+"</td><td>"+p.validDays+"</td><td>"+(p.active?"✔":"✘")+'</td><td><button class="btn sm" onclick="packageModal(\''+p.id+"')\">"+t("edit")+"</button></td></tr>").join("")+"</tbody></table></div>";
}
function packageModal(id){
 const p=id?S.packages.find(x=>x.id===id):null;
 modal("<h3>"+(p?t("edit"):t("addPackage"))+'</h3><label>'+t("nameAr")+'<input id="kn1" value="'+esc(p?p.name.ar:"")+'"></label><label>'+t("nameEn")+'<input id="kn2" value="'+esc(p?p.name.en:"")+'"></label><label>'+t("hours")+'<input id="kh" type="number" min="1" step="0.5" value="'+(p?p.hours:"")+'"></label><label>'+t("price")+'<input id="kp" type="number" min="0" step="0.5" value="'+(p?p.price:"")+'"></label><label>'+t("validDays")+'<input id="kv" type="number" min="1" value="'+(p?p.validDays:30)+'"></label><label class="opt"><input type="checkbox" id="ka" '+(!p||p.active?"checked":"")+"><span>"+t("active")+'</span></label><div class="row"><button class="btn pri" onclick="savePackage(\''+(id||"")+'\')">'+t("save")+'</button><button class="btn" onclick="closeModal()">'+t("cancel")+"</button></div>");
}
function savePackage(id){
 const ar=$("#kn1").value.trim(),en=$("#kn2").value.trim()||ar,h=parseFloat(norm($("#kh").value)),pr=parseFloat(norm($("#kp").value)),d=parseInt(norm($("#kv").value),10);
 if(!ar){toast(t("needName"));return}if(!(h>0)||!(pr>=0)||!(d>0)){toast(t("badAge"));return}
 const o={name:{ar:ar,en:en},hours:h,price:pr,validDays:d,active:$("#ka").checked};
 if(id)Object.assign(S.packages.find(x=>x.id===id),o);else S.packages.push(Object.assign({id:uid()},o));
 log(id?"edit package":"new package",ar+" "+pr);save();closeModal();render();
}
function couponsCard(){
 return '<div class="card"><div class="bar"><h3>'+t("coupons")+'</h3><button class="btn sm pri" onclick="couponModal(\'\')">'+t("addCoupon")+'</button></div><table><thead><tr><th>'+t("code")+"</th><th>"+t("discount")+"</th><th>"+t("expiresOn")+"</th><th>"+t("usedN")+"</th><th>"+t("active")+"</th><th></th></tr></thead><tbody>"+
 (S.coupons.length?S.coupons.map(c=>"<tr><td><b>"+esc(c.code)+"</b></td><td>"+(c.type==="pct"?c.value+"%":money(c.value))+"</td><td>"+(c.expires?fDate(c.expires):"–")+"</td><td>"+c.used+(c.maxUses?" / "+c.maxUses:"")+"</td><td>"+(c.active?"✔":"✘")+'</td><td><button class="btn sm" onclick="couponModal(\''+c.id+"')\">"+t("edit")+"</button></td></tr>").join(""):'<tr><td colspan="6" class="muted">'+t("none")+"</td></tr>")+"</tbody></table></div>";
}
function couponModal(id){
 const c=id?S.coupons.find(x=>x.id===id):null;
 const ex=c&&c.expires?dayKey(c.expires):"";
 modal("<h3>"+(c?t("edit"):t("addCoupon"))+'</h3><label>'+t("code")+'<input id="cc1" dir="ltr" value="'+esc(c?c.code:"")+'"></label><div class="grid2" style="gap:8px"><label>'+t("couponType")+'<select id="cc2"><option value="pct" '+(c&&c.type==="pct"?"selected":"")+">"+t("pct")+'</option><option value="amt" '+(c&&c.type==="amt"?"selected":"")+">"+t("amtFixed")+'</option></select></label><label>'+t("value")+'<input id="cc3" type="number" min="0" step="0.5" value="'+(c?c.value:"")+'"></label></div><label>'+t("expiresOn")+'<input id="cc4" type="date" value="'+ex+'"></label><label>'+t("maxUses")+'<input id="cc5" type="number" min="1" value="'+(c&&c.maxUses?c.maxUses:"")+'"></label><label class="opt"><input type="checkbox" id="cc6" '+(c&&c.oncePerGuardian?"checked":"")+"><span>"+t("oncePer")+'</span></label><label class="opt"><input type="checkbox" id="cc7" '+(!c||c.active?"checked":"")+"><span>"+t("active")+'</span></label><div class="row"><button class="btn pri" onclick="saveCoupon(\''+(id||"")+'\')">'+t("save")+'</button><button class="btn" onclick="closeModal()">'+t("cancel")+"</button></div>");
}
function saveCoupon(id){
 const code=$("#cc1").value.trim().toUpperCase(),type=$("#cc2").value,val=parseFloat(norm($("#cc3").value));
 if(!code){toast(t("needName"));return}if(!(val>0)||(type==="pct"&&val>100)){toast(t("badAge"));return}
 if(S.coupons.some(x=>x.code===code&&x.id!==id)){toast(t("cpDup"));return}
 const d=$("#cc4").value,mu=parseInt(norm($("#cc5").value),10);
 const o={code:code,type:type,value:val,expires:d?Date.parse(d+"T23:59:59"):null,maxUses:mu>0?mu:null,oncePerGuardian:$("#cc6").checked,active:$("#cc7").checked};
 if(id)Object.assign(S.coupons.find(x=>x.id===id),o);else S.coupons.push(Object.assign({id:uid(),used:0},o));
 log(id?"edit coupon":"new coupon",code);save();closeModal();render();
}

/* ============ Phase 4: party bookings ============ */
const num=v=>{const n=parseFloat(norm(v));return isFinite(n)?n:0};
const toMin=h=>{const m=/^(\d{1,2}):(\d{2})$/.exec(h||"");return m?(+m[1])*60+(+m[2]):NaN};
const t12=h=>{const n=toMin(h);if(isNaN(n))return h;const H=Math.floor(n/60),m=n%60,ap=H>=12?(lang==="ar"?"م":"PM"):(lang==="ar"?"ص":"AM");return ((H%12)||12)+":"+String(m).padStart(2,"0")+" "+ap};
function addDays(k,n){const p=k.split("-").map(Number);return new Date(Date.UTC(p[0],p[1]-1,p[2]+n)).toISOString().slice(0,10)}
const fDay=k=>{const p=k.split("-").map(Number);return new Date(Date.UTC(p[0],p[1]-1,p[2],12)).toLocaleDateString(loc(),{timeZone:"UTC",weekday:"long",year:"numeric",month:"2-digit",day:"2-digit"})};
const bkPaid=b=>r2(b.payments.reduce((s,p)=>s+p.a,0));
const bkTotal=b=>r2(Math.max(0,b.kids*b.perChild+b.extras.reduce((s,e)=>s+e.price,0)-(b.discount||0)));
const bkDue=b=>b.status==="cancelled"?0:r2(bkTotal(b)-bkPaid(b));
function bkConflict(date,st,en,exceptId){
 const buf=S.settings.partyBuffer||0,a=toMin(st),b=toMin(en);
 return S.bookings.find(x=>x.id!==exceptId&&x.status!=="cancelled"&&x.date===date&&a<toMin(x.end)+buf&&b+buf>toMin(x.start))||null;
}
function printA4(body){
 const f=document.createElement("iframe");f.style.cssText="position:fixed;width:0;height:0;border:0;";document.body.appendChild(f);
 const d=f.contentWindow.document;d.open();
 d.write('<html dir="'+(lang==="ar"?"rtl":"ltr")+'"><head><meta charset="utf-8"><style>@page{size:A4;margin:14mm}body{font-family:Tahoma,Arial,sans-serif;font-size:14px;color:#000}h1{text-align:center;margin:0}h2{text-align:center;margin:6px 0 14px}table{width:100%;border-collapse:collapse;margin-bottom:12px}td,th{border:1px solid #888;padding:6px 8px;text-align:start}.sig{display:flex;justify-content:space-between;margin-top:50px}.sig div{width:40%;border-top:1px solid #000;text-align:center;padding-top:4px}</style></head><body>'+body+"</body></html>");
 d.close();f.contentWindow.focus();setTimeout(()=>{try{f.contentWindow.print()}catch(e){}setTimeout(()=>f.remove(),3000)},300);
}
function partyReminderHTML(){
 const today=dayKey(Date.now()),tom=addDays(today,1);
 const list=S.bookings.filter(b=>b.status==="confirmed"&&(b.date===today||b.date===tom)).sort((a,b)=>a.date===b.date?toMin(a.start)-toMin(b.start):(a.date<b.date?-1:1));
 if(!list.length)return "";
 return '<div class="alertbox party"><div>🎂 '+t("partyReminder")+"</div>"+list.map(b=>{const due=bkDue(b);return '<div class="line"><span>'+(b.date===today?t("today"):t("tomorrow"))+" • "+t12(b.start)+" – "+esc(b.child)+" ("+b.kids+" "+t("kidsS")+")"+(due>0?" • "+t("due")+" "+money(due):"")+"</span>"+(due>0&&can("partyPay")?'<button class="btn sm" onclick="bkCollect(\''+b.id+"')\">"+t("collectRemaining")+"</button>":"")+'<button class="btn sm" onclick="waBooking(\''+b.id+"')\">💬</button></div>"}).join("")+"</div>";
}

/* ---- calendar & list ---- */
let PV={month:null};
views.parties=function(){
 const today=dayKey(Date.now());if(!PV.month)PV.month=today.slice(0,7);
 const ym=PV.month.split("-").map(Number),y=ym[0],m=ym[1];
 const dim=new Date(Date.UTC(y,m,0)).getUTCDate(),lead=(new Date(Date.UTC(y,m-1,1)).getUTCDay()+1)%7;
 const mname=new Date(Date.UTC(y,m-1,15)).toLocaleDateString(loc(),{timeZone:"UTC",month:"long",year:"numeric"});
 const names=lang==="ar"?["سبت","أحد","اثنين","ثلاثاء","أربعاء","خميس","جمعة"]:["Sat","Sun","Mon","Tue","Wed","Thu","Fri"];
 let cells=names.map(n=>'<div class="muted" style="text-align:center">'+n+"</div>").join("");
 for(let i=0;i<lead;i++)cells+="<div></div>";
 for(let d=1;d<=dim;d++){
  const k=PV.month+"-"+String(d).padStart(2,"0");
  const bs=S.bookings.filter(b=>b.date===k&&b.status!=="cancelled").sort((a,b)=>toMin(a.start)-toMin(b.start));
  cells+='<div class="cday'+(k===today?" today":"")+(k<today?" past":"")+'" onclick="bkNew(\''+k+'\')"><b>'+d+"</b>"+bs.map(b=>'<div class="chip'+(b.status==="done"?" done":"")+'" onclick="event.stopPropagation();bkOpen(\''+b.id+"')\">"+t12(b.start)+" "+esc(b.child)+"</div>").join("")+"</div>";
 }
 const up=S.bookings.filter(b=>b.status==="confirmed"&&b.date>=today).sort((a,b)=>a.date===b.date?toMin(a.start)-toMin(b.start):(a.date<b.date?-1:1));
 $("#view").innerHTML='<div class="bar"><h2>'+t("partiesTitle")+' – '+esc(S.settings.hallName)+'</h2><button class="btn pri" onclick="bkNew(\'\')">'+t("newBooking")+'</button></div><div class="card"><div class="bar"><button class="btn sm" onclick="pvMove(-1)">‹ '+t("prevM")+'</button><b>'+mname+'</b><button class="btn sm" onclick="pvMove(1)">'+t("nextM")+' ›</button></div><div class="cal">'+cells+'</div></div><div class="card"><h3>'+t("upcoming")+"</h3><table><thead><tr><th>#</th><th>"+t("date")+"</th><th>"+t("time")+"</th><th>"+t("birthdayChild")+"</th><th>"+t("clientName")+"</th><th>"+t("kidsCount")+"</th><th>"+t("bookingTotal")+"</th><th>"+t("paidSoFar")+"</th><th>"+t("due")+"</th><th></th></tr></thead><tbody>"+
 (up.length?up.map(b=>"<tr><td>"+b.no+"</td><td>"+b.date+"</td><td>"+t12(b.start)+" – "+t12(b.end)+"</td><td>"+esc(b.child)+"</td><td>"+esc(b.name)+' <span dir="ltr" class="muted">'+esc(b.phone)+"</span></td><td>"+b.kids+"</td><td>"+money(bkTotal(b))+"</td><td>"+money(bkPaid(b))+"</td><td>"+(bkDue(b)>0?'<span class="tag soon">'+money(bkDue(b))+"</span>":'<span class="tag ok">'+t("paidTag")+"</span>")+'</td><td><button class="btn sm" onclick="bkOpen(\''+b.id+"')\">"+t("details")+'</button> <button class="btn sm" onclick="waBooking(\''+b.id+"')\">💬</button></td></tr>").join(""):'<tr><td colspan="10" class="muted">'+t("noBookings")+"</td></tr>")+"</tbody></table></div>";
};
function pvMove(d){const p=PV.month.split("-").map(Number),x=new Date(Date.UTC(p[0],p[1]-1+d,1));PV.month=x.toISOString().slice(0,7);render()}

/* ---- booking form ---- */
let B=null;
function newB(date){const pk=S.partyPkgs.find(p=>p.active)||S.partyPkgs[0]||{id:"",perChild:0};return {id:"",name:"",phone:"",gid:null,child:"",age:"",date:date||dayKey(Date.now()),start:"17:00",end:"19:30",kids:"",pkg:pk.id,perChild:pk.perChild,extras:[],cake:"",notes:"",discount:"",dep:"",depAuto:true}}
function bkNew(date){if(!can("parties"))return;B=newB(date);bkRender()}
function bkEdit(id){
 const b=S.bookings.find(x=>x.id===id);if(!b||b.status!=="confirmed")return;
 B={id:b.id,no:b.no,name:b.name,phone:b.phone,gid:b.gid||null,child:b.child,age:b.age||"",date:b.date,start:b.start,end:b.end,kids:String(b.kids),pkg:b.pkg,perChild:b.perChild,extras:b.extras.map(e=>({name:e.name,price:e.price})),cake:b.cake||"",notes:b.notes||"",discount:b.discount||"",dep:"",depAuto:false};
 bkRender();
}
function bs(k,v){B[k]=v;bkCalc()}
function bkPkg(id){const p=S.partyPkgs.find(x=>x.id===id);B.pkg=id;B.perChild=p?p.perChild:0;bkRender()}
function bkNums(){
 const kids=Math.max(0,parseInt(norm(B.kids),10)||0),perChild=num(B.perChild);
 const ext=B.extras.filter(e=>String(e.name).trim()).map(e=>({name:String(e.name).trim(),price:Math.max(0,num(e.price))}));
 const gross=r2(kids*perChild+ext.reduce((s,e)=>s+e.price,0)),disc=r2(num(B.discount));
 return {kids:kids,perChild:perChild,ext:ext,gross:gross,disc:disc,total:r2(gross-disc)};
}
function bkCalc(){
 const n=bkNums();if(B.depAuto&&!B.id)B.dep=Math.round(Math.max(0,n.total)*(S.settings.depositPct||0)/100);
 const set=(id,v)=>{const e=$(id);if(e)e.textContent=v};
 set("#bgross",money(n.gross));set("#btot",money(Math.max(0,n.total)));
 const d=$("#bdep");if(d&&B.depAuto)d.value=B.dep;
 const paid=B.id?bkPaid(S.bookings.find(x=>x.id===B.id)):num(B.dep);set("#brem",money(Math.max(0,n.total-paid)));
}
function bkRender(){
 const pk=S.partyPkgs.filter(p=>p.active||p.id===B.pkg);
 modal(`<h3>${B.id?t("editBooking")+" #"+B.no:t("newBooking")}</h3>
 <div class="row" style="margin:0 0 8px"><button class="btn sm" onclick="gpModal(id=>{const g=G(id);B.gid=id;B.name=g.name;B.phone=g.phone;bkRender()})">${t("pickGuardianBtn")}</button></div>
 <div class="grid2" style="gap:8px"><label>${t("clientName")}<input value="${esc(B.name)}" oninput="bs('name',this.value)"></label><label>${t("phone")}<input dir="ltr" inputmode="tel" value="${esc(B.phone)}" oninput="bs('phone',this.value)"></label>
 <label>${t("birthdayChild")}<input value="${esc(B.child)}" oninput="bs('child',this.value)"></label><label>${t("age")}<input type="number" min="0" max="17" value="${esc(B.age)}" oninput="bs('age',this.value)"></label>
 <label>${t("partyDate")}<input type="date" value="${esc(B.date)}" ${B.id?"":'min="'+dayKey(Date.now())+'"'} onchange="bs('date',this.value)"></label><label>${t("kidsCount")}<input type="number" min="1" value="${esc(B.kids)}" oninput="bs('kids',this.value)"></label>
 <label>${t("startTime")}<input type="time" value="${esc(B.start)}" onchange="B.start=this.value;const m=toMin(this.value);if(!isNaN(m)&&!(toMin(B.end)>m)){B.end=String(Math.floor(((m+150)%1440)/60)).padStart(2,'0')+':'+String((m+150)%60).padStart(2,'0');bkRender()}"></label><label>${t("endTime")}<input type="time" value="${esc(B.end)}" onchange="bs('end',this.value)"></label></div>
 <label>${t("partyPkg")}<select onchange="bkPkg(this.value)">${pk.map(p=>`<option value="${p.id}" ${B.pkg===p.id?"selected":""}>${esc(p.name[lang]||p.name.ar)} – ${money(p.perChild)}</option>`).join("")}</select></label>
 <div class="muted" style="margin:-4px 0 8px">${t("perChildPrice")}: ${money(num(B.perChild))}</div>
 <h4>${t("extras")}</h4>${B.extras.map((e,i)=>`<div class="row" style="margin:0 0 6px;flex-wrap:nowrap"><input placeholder="${t("extraName")}" value="${esc(e.name)}" oninput="B.extras[${i}].name=this.value;bkCalc()"><input type="number" min="0" step="0.5" style="max-width:110px" value="${esc(e.price)}" oninput="B.extras[${i}].price=this.value;bkCalc()"><button class="btn sm" onclick="B.extras.splice(${i},1);bkRender()">✕</button></div>`).join("")}<div class="row" style="margin-top:0"><button class="btn sm" onclick="B.extras.push({name:'',price:''});bkRender()">${t("addExtra")}</button></div>
 <label>${t("cakeLbl")}<input value="${esc(B.cake)}" oninput="B.cake=this.value"></label><label>${t("notes")}<input value="${esc(B.notes)}" oninput="B.notes=this.value"></label>
 <div class="grid2" style="gap:8px"><label>${t("discountAmt")}<input type="number" min="0" step="0.5" value="${esc(B.discount)}" oninput="bs('discount',this.value)"></label>${B.id?"":`<label>${t("depositAmt")}<input id="bdep" type="number" min="0" step="1" value="${esc(B.dep)}" oninput="B.dep=this.value;B.depAuto=false;bkCalc()"></label>`}</div>
 <div class="line"><span>${t("grossTotal")}</span><span id="bgross"></span></div><div class="line"><span>${t("bookingTotal")}</span><span class="tot" id="btot"></span></div><div class="line"><span>${t("remainingAmt")}</span><b id="brem"></b></div>
 <div class="row"><button class="btn ok" onclick="bkSave()">${B.id?t("saveChanges"):t("saveBook")}</button><button class="btn" onclick="closeModal()">${t("cancel")}</button></div>`);
 bkCalc();
}
function bkValidate(){
 const n=bkNums();
 if(!B.name.trim())return t("needName");
 if(!/^\+?\d{8,15}$/.test(normPhone(B.phone)))return t("badPhone");
 if(!B.child.trim())return t("needChild");
 if(!/^\d{4}-\d{2}-\d{2}$/.test(B.date))return t("badDate");
 if(!B.id&&B.date<dayKey(Date.now()))return t("pastDate");
 const a=toMin(B.start),b=toMin(B.end);if(isNaN(a)||isNaN(b)||b<=a)return t("badTime");
 if(!(n.kids>=1))return t("badKids");
 if(!S.partyPkgs.find(p=>p.id===B.pkg))return t("needPkg");
 if(n.disc<0||n.disc>n.gross)return t("badDisc");
 const c=bkConflict(B.date,B.start,B.end,B.id);if(c)return t("conflictMsg")+" ("+t12(c.start)+" – "+t12(c.end)+" "+c.child+")";
 if(!B.id){const d=num(B.dep);if(!(d>0)||d>n.total+0.005)return t("badDeposit")}
 else{const bk=S.bookings.find(x=>x.id===B.id);if(n.total+0.005<bkPaid(bk))return t("totalBelowPaid")}
 return "";
}
function bkApply(b,n,ap){
 const p=S.partyPkgs.find(x=>x.id===B.pkg);
 Object.assign(b,{name:B.name.trim(),phone:normPhone(B.phone),gid:B.gid||null,child:B.child.trim(),age:parseInt(norm(B.age),10)||0,date:B.date,start:B.start,end:B.end,kids:n.kids,cake:B.cake.trim(),notes:B.notes.trim(),extras:n.ext,discount:n.disc,discountBy:n.disc>0?(ap?ap.id:null):null});
 if(!b.pkg||b.pkg!==B.pkg){b.pkg=B.pkg;b.pkgName=p.name;b.includes=p.includes.slice();b.perChild=n.perChild}
}
function bkSave(){
 const e=bkValidate();if(e){toast(e);return}
 const n=bkNums();
 const go=ap=>{
  if(B.id){
   const b=S.bookings.find(x=>x.id===B.id);bkApply(b,n,ap);
   log("edit booking","#"+b.no+" "+b.child+" "+b.date);save();closeModal();toast(t("saved"));render();bkOpen(b.id);return;
  }
  if(!requireShift())return;
  const dep=r2(num(B.dep)),snap=JSON.parse(JSON.stringify(B)),no=peekNo("booking");
  payOpen({title:t("depositTitle"),lines:[{type:"party",name:t("depositLine")+" #"+no+" – "+snap.child.trim(),qty:1,price:dep}],gid:snap.gid||null,print:true,noDisc:true,noCredit:true,onDone:inv=>{
   B=snap;const b={id:uid(),no:nextNo("booking"),payments:[{inv:inv.id,a:dep,at:Date.now(),by:me.id}],status:"confirmed",check:{},createdAt:Date.now(),createdBy:me.id};
   bkApply(b,n,ap);S.bookings.push(b);
   log("new booking","#"+b.no+" "+b.child+" "+b.date+" "+b.start+" deposit "+dep);save();toast(t("bookingSaved"));render();bkOpen(b.id)}});
 };
 if(n.disc>0&&!can("discount"))needApproval(u=>go(u),bkRender);else go(me);
}

/* ---- booking details ---- */
function bkChecklist(b){
 const l=[t("ck_hall"),t("ck_sound"),t("ck_hosp")+" – "+b.kids+" "+t("kidsS")];
 if(b.cake)l.push(t("ck_cake")+": "+b.cake);
 (b.includes||[]).forEach(x=>l.push(x));b.extras.forEach(e=>l.push(e.name));l.push(t("ck_clean"));
 return l.filter((x,i)=>l.indexOf(x)===i);
}
function bkOpen(id){
 const b=S.bookings.find(x=>x.id===id);if(!b)return;
 const tot=bkTotal(b),paid=bkPaid(b),due=bkDue(b),canP=can("parties");
 const list=bkChecklist(b),pn_=b.pkgName?(b.pkgName[lang]||b.pkgName.ar):"";
 const tag=b.status==="confirmed"?"open":b.status==="done"?"ok":"over";
 modal(`<h3>${t("booking")} #${b.no} <span class="tag ${tag}">${t("bs_"+b.status)}</span></h3>
 <div class="line"><span>${t("partyDate")}</span><b>${fDay(b.date)}</b></div><div class="line"><span>${t("time")}</span><b>${t12(b.start)} – ${t12(b.end)}</b></div><div class="line"><span>${t("hallLbl")}</span><span>${esc(S.settings.hallName)}</span></div>
 <div class="line"><span>${t("clientName")}</span><span>${esc(b.name)} <span dir="ltr" class="muted">${esc(b.phone)}</span></span></div><div class="line"><span>${t("birthdayChild")}</span><span>${esc(b.child)}${b.age?" • "+b.age+" "+t("years"):""}</span></div>
 <div class="line"><span>${t("kidsCount")}</span><span>${b.kids}</span></div><div class="line"><span>${t("partyPkg")}</span><span>${esc(pn_)} • ${money(b.perChild)}</span></div>
 ${b.extras.length?b.extras.map(e=>`<div class="line"><span>${esc(e.name)}</span><span>${money(e.price)}</span></div>`).join(""):""}
 ${b.cake?`<div class="line"><span>${t("ck_cake")}</span><span>${esc(b.cake)}</span></div>`:""}${b.notes?`<div class="muted">${esc(b.notes)}</div>`:""}<hr>
 ${b.discount?`<div class="line"><span>${t("discount")}</span><span>−${money(b.discount)}</span></div>`:""}<div class="line"><span>${t("bookingTotal")}</span><b>${money(tot)}</b></div><div class="line"><span>${t("paidSoFar")}</span><span>${money(paid)}</span></div><div class="line"><span>${t("due")}</span><b style="color:${due>0?"var(--bad)":"var(--ok)"}">${money(due)}</b></div>
 <h4>${t("paymentsList")}</h4>${b.payments.map(p=>{const iv=S.invoices.find(i=>i.id===p.inv);return `<div class="line"><span>${fDate(p.at)} ${fTime(p.at)}${iv?" • "+t("invNo")+" "+iv.no:""}</span><span>${money(p.a)}</span></div>`}).join("")}
 ${b.status==="cancelled"&&b.cancel?`<h4>${t("cancelInfo")}</h4><div class="muted">${esc(b.cancel.reason)} • ${b.cancel.refund?t("refundDeposit"):t("forfeitDeposit")}</div>`:`<h4>${t("checklist")}</h4>${list.map((x,i)=>`<label class="opt" style="margin-bottom:4px"><input type="checkbox" ${b.check[x]?"checked":""} ${canP?"":"disabled"} onchange="bkCheck('${b.id}',${i})"><span>${esc(x)}</span></label>`).join("")}`}
 <div class="row">${due>0&&b.status==="confirmed"&&can("partyPay")?`<button class="btn ok" onclick="bkCollect('${b.id}')">${t("collectRemaining")}</button>`:""}${canP&&b.status==="confirmed"?`<button class="btn" onclick="bkEdit('${b.id}')">${t("edit")}</button><button class="btn" onclick="bkDone('${b.id}')">${t("markDone")}</button><button class="btn bad" onclick="bkCancel('${b.id}')">${t("cancelBooking")}</button>`:""}${canP?`<button class="btn" onclick="bkPrint('${b.id}')">${t("printContract")}</button><button class="btn" onclick="bkPrintList('${b.id}')">${t("printChecklist")}</button>`:""}<button class="btn" onclick="closeModal();render()">${t("close")}</button></div>`);
}
function bkCheck(id,i){
 const b=S.bookings.find(x=>x.id===id);if(!b||!can("parties"))return;
 const x=bkChecklist(b)[i];if(b.check[x])delete b.check[x];else b.check[x]={by:me.id,at:Date.now()};
 save();bkOpen(id);
}
function bkDone(id){
 const b=S.bookings.find(x=>x.id===id);if(!b||b.status!=="confirmed")return;
 if(bkDue(b)>0&&!confirm(t("doneWithDue")))return;
 b.status="done";log("booking done","#"+b.no);save();bkOpen(id);
}
function bkCollect(id){
 const b=S.bookings.find(x=>x.id===id);if(!b)return;const due=bkDue(b);if(!(due>0))return;
 modal("<h3>"+t("collectRemaining")+" – "+esc(b.child)+'</h3><div class="line"><span>'+t("due")+"</span><b>"+money(due)+'</b></div><label>'+t("amount")+'<input id="bca" type="number" min="1" step="0.5" value="'+due+'"></label><div class="row"><button class="btn ok" onclick="bkCollectGo(\''+id+'\')">'+t("pay")+'</button><button class="btn" onclick="closeModal();render()">'+t("cancel")+"</button></div>");
}
function bkCollectGo(id){
 const b=S.bookings.find(x=>x.id===id),a=r2(num($("#bca").value));
 if(!b||!(a>0)||a>bkDue(b)+0.005){toast(t("payMismatch"));return}
 if(!requireShift())return;
 payOpen({title:t("payLine")+" – "+b.child,lines:[{type:"party",name:t("payLine")+" #"+b.no+" – "+b.child,qty:1,price:a}],gid:b.gid||null,print:true,noDisc:true,noCredit:true,onDone:inv=>{
  b.payments.push({inv:inv.id,a:a,at:Date.now(),by:me.id});log("party payment","#"+b.no+" "+a);save();toast(t("paidOk"));render()}});
}
function bkCancel(id){
 const b=S.bookings.find(x=>x.id===id);if(!b||b.status!=="confirmed")return;
 needApproval(u=>{
  modal("<h3>"+t("cancelBooking")+" #"+b.no+'</h3><label>'+t("voidReason")+'<input id="bcr"></label><label class="opt"><input type="radio" name="bcm" value="refund" checked><span>'+t("refundDeposit")+" ("+money(bkPaid(b))+')</span></label><label class="opt"><input type="radio" name="bcm" value="keep"><span>'+t("forfeitDeposit")+'</span></label><label>'+t("refundMethod")+'<select id="bcp">'+PAYM.map(m=>'<option value="'+m+'">'+mLabel(m)+"</option>").join("")+'</select></label><div class="row"><button class="btn bad" onclick="bkCancelDo(\''+id+"','"+u.id+"')\">"+t("confirmCancel")+'</button><button class="btn" onclick="closeModal()">'+t("cancel")+"</button></div>");
 },closeModal);
}
function bkCancelDo(id,ap){
 const b=S.bookings.find(x=>x.id===id),reason=$("#bcr").value.trim();
 if(!b||b.status!=="confirmed")return;if(!reason){toast(t("needReason"));return}
 const refund=(document.querySelector('input[name="bcm"]:checked')||{}).value==="refund"&&bkPaid(b)>0,m=$("#bcp").value;
 if(refund&&!requireShift())return;
 if(refund)b.payments.forEach(p=>S.refunds.push({id:uid(),inv:p.inv,items:[],a:p.a,m:m,reason:reason,by:me.id,approvedBy:ap,at:Date.now(),shift:curShift().id}));
 b.status="cancelled";b.cancel={by:me.id,approvedBy:ap,at:Date.now(),reason:reason,refund:refund,method:refund?m:null};
 log("cancel booking","#"+b.no+" "+reason+(refund?" refund "+bkPaid(b):" kept"));save();closeModal();render();toast(t("saved"));
}
function bkPrint(id){
 const b=S.bookings.find(x=>x.id===id);if(!b)return;const tot=bkTotal(b),paid=bkPaid(b),r=(a,v)=>"<tr><th style=\"width:35%\">"+a+"</th><td>"+v+"</td></tr>";
 printA4("<h1>"+esc(S.settings.venue)+"</h1><h2>"+t("contractTitle")+" #"+b.no+"</h2><table>"+
  r(t("partyDate"),fDay(b.date))+r(t("time"),t12(b.start)+" – "+t12(b.end))+r(t("hallLbl"),esc(S.settings.hallName))+r(t("clientName"),esc(b.name))+r(t("phone"),'<span dir="ltr">'+esc(b.phone)+"</span>")+r(t("birthdayChild"),esc(b.child)+(b.age?" ("+b.age+" "+t("years")+")":""))+
  r(t("kidsCount"),b.kids)+r(t("partyPkg"),esc((b.pkgName?b.pkgName[lang]||b.pkgName.ar:""))+" – "+money(b.perChild)+" / "+t("child"))+(b.includes&&b.includes.length?r(t("partyContents"),b.includes.map(esc).join("، ")):"")+
  (b.extras.length?r(t("extras"),b.extras.map(e=>esc(e.name)+" ("+money(e.price)+")").join("، ")):"")+(b.cake?r(t("ck_cake"),esc(b.cake)):"")+(b.notes?r(t("notes"),esc(b.notes)):"")+"</table><table>"+
  (b.discount?r(t("discount"),money(b.discount)):"")+r(t("bookingTotal"),money(tot))+r(t("paidSoFar"),money(paid))+r(t("due"),money(Math.max(0,tot-paid)))+"</table><h3>"+t("termsLbl")+'</h3><div style="white-space:pre-line">'+esc(S.settings.partyTerms)+'</div><div class="sig"><div>'+t("signClient")+"</div><div>"+t("signStaff")+"</div></div>");
}
function bkPrintList(id){
 const b=S.bookings.find(x=>x.id===id);if(!b)return;
 printA4("<h1>"+esc(S.settings.venue)+"</h1><h2>"+t("checklist")+" – "+t("booking")+" #"+b.no+"</h2><table><tr><th>"+t("partyDate")+"</th><td>"+fDay(b.date)+"</td><th>"+t("time")+"</th><td>"+t12(b.start)+" – "+t12(b.end)+"</td></tr><tr><th>"+t("birthdayChild")+"</th><td>"+esc(b.child)+"</td><th>"+t("kidsCount")+"</th><td>"+b.kids+"</td></tr></table><table>"+bkChecklist(b).map(x=>'<tr><td style="width:30px">'+(b.check[x]?"☑":"☐")+"</td><td>"+esc(x)+"</td></tr>").join("")+"</table>");
}

/* ---- settings: hall, terms, party packages ---- */
function partyCard(){
 const s=S.settings;
 return '<div class="card"><h3>'+t("partySettings")+'</h3><div class="grid2"><label>'+t("hallName")+'<input id="ph" value="'+esc(s.hallName)+'"></label><label>'+t("partyBuffer")+'<input id="pb" type="number" min="0" value="'+s.partyBuffer+'"></label><label>'+t("depositPct")+'<input id="pd" type="number" min="0" max="100" value="'+s.depositPct+'"></label></div><label>'+t("partyTerms")+'<textarea id="pt" rows="5">'+esc(s.partyTerms)+'</textarea></label><div class="row"><button class="btn pri" onclick="savePartySettings()">'+t("save")+'</button></div></div>'+
 '<div class="card"><div class="bar"><h3>'+t("partyPkgs")+'</h3><button class="btn sm pri" onclick="ppModal(\'\')">'+t("addPkg")+'</button></div><table><thead><tr><th>'+t("name")+"</th><th>"+t("perChildPrice")+"</th><th>"+t("partyContents")+"</th><th>"+t("active")+"</th><th></th></tr></thead><tbody>"+
 S.partyPkgs.map(p=>"<tr><td>"+esc(p.name[lang]||p.name.ar)+"</td><td>"+money(p.perChild)+"</td><td>"+esc(p.includes.join("، "))+"</td><td>"+(p.active?"✔":"✘")+'</td><td><button class="btn sm" onclick="ppModal(\''+p.id+"')\">"+t("edit")+"</button></td></tr>").join("")+"</tbody></table></div>";
}
function savePartySettings(){
 const b=num($("#pb").value),d=num($("#pd").value);
 if(b<0||d<0||d>100){toast(t("badAge"));return}
 const s=S.settings;s.hallName=$("#ph").value.trim()||s.hallName;s.partyBuffer=b;s.depositPct=d;s.partyTerms=$("#pt").value;
 log("party settings","hall "+s.hallName);save();toast(t("saved"));render();
}
function ppModal(id){
 const p=id?S.partyPkgs.find(x=>x.id===id):null;
 modal("<h3>"+(p?t("edit"):t("addPkg"))+'</h3><label>'+t("nameAr")+'<input id="pp1a" value="'+esc(p?p.name.ar:"")+'"></label><label>'+t("nameEn")+'<input id="pp1b" value="'+esc(p?p.name.en:"")+'"></label><label>'+t("perChildPrice")+'<input id="pp1c" type="number" min="0" step="0.5" value="'+(p?p.perChild:"")+'"></label><label>'+t("pkgIncludes")+'<textarea id="pp1d" rows="4">'+esc(p?p.includes.join("\n"):"")+'</textarea></label><label class="opt"><input type="checkbox" id="pp1e" '+(!p||p.active?"checked":"")+"><span>"+t("active")+'</span></label><div class="row"><button class="btn pri" onclick="savePP(\''+(id||"")+'\')">'+t("save")+'</button><button class="btn" onclick="closeModal()">'+t("cancel")+"</button></div>");
}
function savePP(id){
 const ar=$("#pp1a").value.trim(),en=$("#pp1b").value.trim()||ar,pr=num($("#pp1c").value);
 if(!ar){toast(t("needName"));return}if(!(pr>0)){toast(t("badAge"));return}
 const o={name:{ar:ar,en:en},perChild:pr,includes:$("#pp1d").value.split("\n").map(x=>x.trim()).filter(Boolean),active:$("#pp1e").checked};
 if(id)Object.assign(S.partyPkgs.find(x=>x.id===id),o);else S.partyPkgs.push(Object.assign({id:uid()},o));
 log(id?"edit party package":"new party package",ar+" "+pr);save();closeModal();render();
}

/* ============ Phase 5: employees, attendance, payroll ============ */
function hrSettingsDefaults(){return {hrGrace:15,advMaxPct:25,shifts:[{id:"m",name:{ar:"صباحي",en:"Morning"},start:"11:00",end:"22:00"},{id:"e",name:{ar:"مسائي",en:"Evening"},start:"15:00",end:"22:00"}]}}
function monthAdd(ym,n){const p=ym.split("-").map(Number);return new Date(Date.UTC(p[0],p[1]-1+n,1)).toISOString().slice(0,7)}
function monthDays(ym){const p=ym.split("-").map(Number),n=new Date(Date.UTC(p[0],p[1],0)).getUTCDate(),a=[];for(let i=1;i<=n;i++)a.push(ym+"-"+String(i).padStart(2,"0"));return a}
function weekStart(k){const p=k.split("-").map(Number),dow=new Date(Date.UTC(p[0],p[1]-1,p[2])).getUTCDay();return addDays(k,-((dow+1)%7))}
function nowHM(){return new Date().toLocaleTimeString("en-GB",{timeZone:TZ,hour:"2-digit",minute:"2-digit",hourCycle:"h23"})}
const shiftOf=id=>S.settings.shifts.find(x=>x.id===id)||null;
const shiftName=x=>x?(x.name[lang]||x.name.ar):"";
const shiftTxt=x=>x?shiftName(x)+" "+t12(x.start)+"–"+t12(x.end):"";
const durMin=(a,b)=>{const x=toMin(a),y=toMin(b);return (isNaN(x)||isNaN(y))?0:(y-x+1440)%1440};
Object.assign(D,{offDay:["يوم الراحة الأسبوعي","Weekly day off"],offNone:["بدون","None"],payOff:["راحة أسبوعية (مدفوعة)","Weekly off (paid)"],
 wd0:["الأحد","Sunday"],wd1:["الاثنين","Monday"],wd2:["الثلاثاء","Tuesday"],wd3:["الأربعاء","Wednesday"],wd4:["الخميس","Thursday"],wd5:["الجمعة","Friday"],wd6:["السبت","Saturday"]});
const wdOf=d=>new Date(d+"T12:00:00Z").getUTCDay();
/* يوم راحة الموظف: صفّ الجدول إن وُجد (راحة صريحة أو وردية = يعمل) وإلا يومه الثابت */
function isOffDay(e,d){
 const rv=(S.roster[d]||{})[e.id];if(rv==="off")return true;if(rv)return false;
 if(e.offDay===undefined||e.offDay===null||e.offDay==="")return false;
 if(e.hireDate&&d<e.hireDate)return false;
 return +e.offDay===wdOf(d);
}
const leaveOn=(eid,d)=>S.leaves.find(l=>l.emp===eid&&l.from<=d&&d<=l.to)||null;
const payLocked=ym=>!!S.payrolls[ym];
const empN=id=>(S.employees.find(e=>e.id===id)||{name:"?"}).name;
function lateMin(a,sh){
 if(!a||a.status!=="present"||!a.in||!sh)return 0;
 let df=toMin(a.in)-toMin(sh.start);if(isNaN(df))return 0;if(df<-720)df+=1440;if(df>720)df-=1440;
 return Math.max(0,df-S.settings.hrGrace);
}
function guardLock(d){if(payLocked(d.slice(0,7))){toast(t("monthLocked"));return true}return false}

let HR={tab:null,date:null,week:null,month:null};
const HRTABS=[["attendance","attendance","t_attendance"],["roster","attendance","t_roster"],["employees","hr","t_employees"],["leaves","hr","t_leaves"],["money","hr","t_money"],["payroll","hr","t_payroll"]];
const hrTabs={};
views.hr=function(){
 const tabs=HRTABS.filter(x=>can(x[1]));
 if(!tabs.length){$("#view").innerHTML="";return}
 if(!HR.tab||!tabs.some(x=>x[0]===HR.tab))HR.tab=tabs[0][0];
 const today=dayKey(Date.now());if(!HR.date)HR.date=today;if(!HR.month)HR.month=today.slice(0,7);
 $("#view").innerHTML='<div class="bar"><h2>'+t("hrTitle")+'</h2></div><div class="row" style="margin:0 0 12px">'+tabs.map(x=>'<button class="btn '+(HR.tab===x[0]?"pri":"")+'" onclick="HR.tab=\''+x[0]+'\';render()">'+t(x[2])+"</button>").join("")+'</div><div id="hrbody"></div>';
 hrTabs[HR.tab]();
};
function dateBar(){
 return '<div class="bar"><div class="row" style="margin:0"><button class="btn sm" onclick="HR.date=addDays(HR.date,-1);render()">‹ '+t("prevDay")+'</button><input type="date" style="max-width:170px" value="'+HR.date+'" onchange="HR.date=this.value||HR.date;render()"><button class="btn sm" onclick="HR.date=addDays(HR.date,1);render()">'+t("nextDay")+' ›</button></div><b>'+fDay(HR.date)+"</b></div>";
}
function monthBar(){
 return '<div class="bar"><div class="row" style="margin:0"><button class="btn sm" onclick="HR.month=monthAdd(HR.month,-1);render()">‹</button><input type="month" style="max-width:170px" value="'+HR.month+'" onchange="HR.month=this.value||HR.month;render()"><button class="btn sm" onclick="HR.month=monthAdd(HR.month,1);render()">›</button></div></div>';
}

/* ---- daily attendance ---- */
hrTabs.attendance=function(){
 const d=HR.date,today=dayKey(Date.now()),emps=S.employees.filter(e=>e.active);
 let cp=0,ca=0,cl=0,cu=0,cof=0;
 const rows=emps.map(e=>{
  const a=(S.attendance[d]||{})[e.id]||null,lv=leaveOn(e.id,d),rv=(S.roster[d]||{})[e.id],sh=shiftOf(rv),off=isOffDay(e,d);
  if(a&&a.status==="present")cp++;else if(a&&a.status==="absent")ca++;else if(lv)cl++;else if(off)cof++;else cu++;
  const late=lateMin(a,sh),hrs=a&&a.status==="present"&&a.out?Math.round(durMin(a.in,a.out)/6)/10:null;
  const sel=`<select onchange="attStatus('${d}','${e.id}',this.value)" ${lv&&!a?"disabled":""}><option value="">—</option><option value="present" ${a&&a.status==="present"?"selected":""}>${t("st_present")}</option><option value="absent" ${a&&a.status==="absent"?"selected":""}>${t("st_absent")}</option></select>`;
  const tin=`<input type="time" style="max-width:120px" value="${a&&a.in||""}" ${a&&a.status==="present"?"":"disabled"} onchange="attTime('${d}','${e.id}','in',this.value)">`;
  const tout=`<input type="time" style="max-width:120px" value="${a&&a.out||""}" ${a&&a.status==="present"?"":"disabled"} onchange="attTime('${d}','${e.id}','out',this.value)">`;
  const quick=d===today?((!a&&!lv?`<button class="btn sm ok" onclick="attNow('${d}','${e.id}','in')">${t("presentNow")}</button>`:"")+(a&&a.status==="present"&&!a.out?`<button class="btn sm" onclick="attNow('${d}','${e.id}','out')">${t("leaveNow")}</button>`:"")):"";
  const shTxt=off?t("st_off"):sh?shiftTxt(sh):'<span class="muted">'+t("notScheduled")+"</span>";
  return `<tr><td><b>${esc(e.name)}</b><div class="muted">${esc(e.job||"")}</div></td><td>${shTxt}</td><td>${lv&&!a?'<span class="tag open">'+t("st_leave")+" ("+t(lv.type==="paid"?"lt_paid":"lt_unpaid")+")</span>":sel}</td><td>${tin}</td><td>${tout}</td><td>${hrs===null?"–":hrs}</td><td>${late>0?'<span class="tag soon">'+fMin(late)+"</span>":"–"}</td><td>${quick}</td></tr>`;
 }).join("");
 $("#hrbody").innerHTML=dateBar()+`<div class="kpis">${kpi(t("st_present"),cp)}${kpi(t("st_absent"),ca)}${kpi(t("st_leave"),cl)}${kpi(t("st_off"),cof)}${kpi(t("st_unrec"),cu)}</div><div class="card"><table><thead><tr><th>${t("empName")}</th><th>${t("shiftLbl")}</th><th>${t("status")}</th><th>${t("inTime")}</th><th>${t("outTime")}</th><th>${t("hoursLbl")}</th><th>${t("lateLbl")}</th><th></th></tr></thead><tbody>${rows||'<tr><td colspan="8" class="muted">'+t("noEmployees")+"</td></tr>"}</tbody></table></div>`;
};
function attEnsure(d,eid){S.attendance[d]=S.attendance[d]||{};return S.attendance[d][eid]=S.attendance[d][eid]||{status:"present",in:"",out:"",by:me.id,at:Date.now()}}
function attStatus(d,eid,v){
 if(guardLock(d)){render();return}
 if(!v){if(S.attendance[d])delete S.attendance[d][eid];log("attendance clear",empN(eid)+" "+d)}
 else{const a=attEnsure(d,eid),first=!a.in&&!a.out;a.status=v;a.by=me.id;a.at=Date.now();
  if(v==="absent"){a.in="";a.out=""}
  else if(first&&!a.in){const sh=shiftOf((S.roster[d]||{})[eid]);a.in=d===dayKey(Date.now())?nowHM():(sh?sh.start:"")}
  log("attendance",empN(eid)+" "+d+" "+v)}
 save();render();
}
function attTime(d,eid,k,v){
 if(guardLock(d)){render();return}
 const a=(S.attendance[d]||{})[eid];if(!a)return;a[k]=v;a.by=me.id;a.at=Date.now();
 log("attendance time",empN(eid)+" "+d+" "+k+" "+v);save();render();
}
function attNow(d,eid,k){
 if(guardLock(d))return;
 const a=attEnsure(d,eid);a.status="present";a[k]=nowHM();a.by=me.id;a.at=Date.now();
 log("attendance",empN(eid)+" "+d+" "+k+" "+a[k]);save();render();
}

/* ---- roster ---- */
hrTabs.roster=function(){
 const ws=HR.week||weekStart(HR.date);HR.week=ws;
 const days=[0,1,2,3,4,5,6].map(i=>addDays(ws,i)),emps=S.employees.filter(e=>e.active);
 const head=days.map(k=>{const p=k.split("-").map(Number);return "<th>"+new Date(Date.UTC(p[0],p[1]-1,p[2],12)).toLocaleDateString(loc(),{timeZone:"UTC",weekday:"short",day:"2-digit",month:"2-digit"})+"</th>"}).join("");
 const rows=emps.map(e=>"<tr><td><b>"+esc(e.name)+"</b></td>"+days.map(k=>{const v=(S.roster[k]||{})[e.id]||(isOffDay(e,k)?"off":"");return `<td><select onchange="rosterSet('${k}','${e.id}',this.value)"><option value="">—</option>${S.settings.shifts.map(s=>`<option value="${s.id}" ${v===s.id?"selected":""}>${esc(shiftName(s))}</option>`).join("")}<option value="off" ${v==="off"?"selected":""}>${t("st_off")}</option></select></td>`}).join("")+"</tr>").join("");
 $("#hrbody").innerHTML=`<div class="bar"><div class="row" style="margin:0"><button class="btn sm" onclick="HR.week=addDays(HR.week,-7);render()">‹ ${t("prevW")}</button><button class="btn sm" onclick="HR.week=addDays(HR.week,7);render()">${t("nextW")} ›</button></div><div class="row" style="margin:0"><button class="btn sm" onclick="rosterFill()">${t("rosterFill")}</button><button class="btn sm" onclick="rosterCopy()">${t("rosterCopy")}</button></div></div><div class="card"><table style="min-width:760px"><thead><tr><th>${t("empName")}</th>${head}</tr></thead><tbody>${rows||'<tr><td colspan="8" class="muted">'+t("noEmployees")+"</td></tr>"}</tbody></table></div>`;
};
function rosterSet(d,eid,v){S.roster[d]=S.roster[d]||{};if(v)S.roster[d][eid]=v;else delete S.roster[d][eid];log("roster",empN(eid)+" "+d+" "+(v||"-"));save()}
function rosterFill(){
 const ws=HR.week;let n=0;
 for(let i=0;i<7;i++){const k=addDays(ws,i);S.employees.filter(e=>e.active&&e.shift&&!isOffDay(e,k)).forEach(e=>{S.roster[k]=S.roster[k]||{};if(!S.roster[k][e.id]){S.roster[k][e.id]=e.shift;n++}})}
 log("roster fill",ws+" +"+n);save();render();
}
function rosterCopy(){
 if(!confirm(t("confirmCopy")))return;
 const ws=HR.week;
 for(let i=0;i<7;i++){const k=addDays(ws,i),pk=addDays(ws,i-7);S.roster[k]={};Object.assign(S.roster[k],S.roster[pk]||{})}
 log("roster copy",ws);save();render();
}


/* ---- employees ---- */
hrTabs.employees=function(){
 $("#hrbody").innerHTML=`<div class="bar"><h3>${t("t_employees")}</h3><button class="btn pri" onclick="empModal('')">${t("addEmp")}</button></div><div class="card"><table><thead><tr><th>${t("name")}</th><th>${t("jobTitle")}</th><th>${t("phone")}</th><th>${t("defShift")}</th><th>${t("dailyWage")}</th><th>${t("hireDate")}</th><th>${t("active")}</th><th></th></tr></thead><tbody>${S.employees.map(e=>`<tr><td><b>${esc(e.name)}</b></td><td>${esc(e.job||"")}</td><td dir="ltr">${esc(e.phone||"")}</td><td>${esc(shiftName(shiftOf(e.shift))||"–")}</td><td>${money(e.wage)}</td><td>${esc(e.hireDate||"–")}</td><td>${e.active?"✔":"✘"}</td><td><button class="btn sm" onclick="empModal('${e.id}')">${t("edit")}</button></td></tr>`).join("")||'<tr><td colspan="8" class="muted">'+t("noEmployees")+"</td></tr>"}</tbody></table></div>`;
};
function empModal(id){
 const e=id?S.employees.find(x=>x.id===id):null;
 modal(`<h3>${e?t("editEmp"):t("addEmp")}</h3><label>${t("empName")}<input id="en1" value="${esc(e?e.name:"")}"></label><div class="grid2" style="gap:8px"><label>${t("jobTitle")}<input id="en2" value="${esc(e?e.job:"")}"></label><label>${t("phone")}<input id="en3" dir="ltr" inputmode="tel" value="${esc(e?e.phone:"")}"></label><label>${t("dailyWage")}<input id="en4" type="number" min="0" step="0.5" value="${e?e.wage:""}"></label><label>${t("hireDate")}<input id="en5" type="date" value="${esc(e?e.hireDate:"")}"></label><label>${t("offDay")}<select id="en9"><option value="">${t("offNone")}</option>${[5,6,0,1,2,3,4].map(i=>`<option value="${i}" ${e&&e.offDay!==undefined&&e.offDay!==""&&+e.offDay===i?"selected":""}>${t("wd"+i)}</option>`).join("")}</select></label></div><label>${t("defShift")}<select id="en6"><option value="">${t("noShift")}</option>${S.settings.shifts.map(s=>`<option value="${s.id}" ${e&&e.shift===s.id?"selected":""}>${esc(shiftTxt(s))}</option>`).join("")}</select></label><label>${t("notes")}<input id="en7" value="${esc(e?e.notes:"")}"></label><label class="opt"><input type="checkbox" id="en8" ${!e||e.active?"checked":""}><span>${t("active")}</span></label><div class="row"><button class="btn pri" onclick="saveEmp('${id||""}')">${t("save")}</button><button class="btn" onclick="closeModal()">${t("cancel")}</button></div>`);
}
function saveEmp(id){
 const name=$("#en1").value.trim(),wage=num($("#en4").value),ph=normPhone($("#en3").value);
 if(!name){toast(t("needName"));return}
 if(!(wage>0)){toast(t("badAmount"));return}
 if(ph&&!/^\+?\d{8,15}$/.test(ph)){toast(t("badPhone"));return}
 const o={name:name,job:$("#en2").value.trim(),phone:ph,wage:wage,hireDate:$("#en5").value,shift:$("#en6").value,offDay:$("#en9").value===""?"":+$("#en9").value,notes:$("#en7").value.trim(),active:$("#en8").checked};
 if(id)Object.assign(S.employees.find(x=>x.id===id),o);else S.employees.push(Object.assign({id:uid()},o));
 log(id?"edit employee":"new employee",name);save();closeModal();render();
}

/* ---- leaves ---- */
hrTabs.leaves=function(){
 const list=S.leaves.slice().sort((a,b)=>a.from<b.from?1:-1);
 $("#hrbody").innerHTML=`<div class="bar"><h3>${t("t_leaves")}</h3><button class="btn pri" onclick="leaveModal()">${t("addLeave")}</button></div><div class="card"><table><thead><tr><th>${t("empName")}</th><th>${t("leaveFrom")}</th><th>${t("leaveTo")}</th><th>${t("leaveDays")}</th><th>${t("leaveType")}</th><th>${t("reasonLbl")}</th><th></th></tr></thead><tbody>${list.map(l=>`<tr><td>${esc(empN(l.emp))}</td><td>${l.from}</td><td>${l.to}</td><td>${leaveLen(l)}</td><td>${t(l.type==="paid"?"lt_paid":"lt_unpaid")}</td><td>${esc(l.reason||"")}</td><td><button class="btn sm" onclick="leaveDel('${l.id}')">${t("delete")}</button></td></tr>`).join("")||'<tr><td colspan="7" class="muted">'+t("none")+"</td></tr>"}</tbody></table></div>`;
};
function leaveLen(l){return Math.round((Date.parse(l.to+"T00:00:00Z")-Date.parse(l.from+"T00:00:00Z"))/86400000)+1}
function leaveMonths(f,to){const a=[];for(let m=f.slice(0,7);m<=to.slice(0,7);m=monthAdd(m,1))a.push(m);return a}
function leaveModal(){
 const td=dayKey(Date.now());
 modal(`<h3>${t("addLeave")}</h3><label>${t("empName")}<select id="lv1"><option value="">—</option>${S.employees.filter(e=>e.active).map(e=>`<option value="${e.id}">${esc(e.name)}</option>`).join("")}</select></label><div class="grid2" style="gap:8px"><label>${t("leaveFrom")}<input type="date" id="lv2" value="${td}"></label><label>${t("leaveTo")}<input type="date" id="lv3" value="${td}"></label></div><label>${t("leaveType")}<select id="lv4"><option value="paid">${t("lt_paid")}</option><option value="unpaid">${t("lt_unpaid")}</option></select></label><label>${t("reasonLbl")}<input id="lv5"></label><div class="row"><button class="btn pri" onclick="saveLeave()">${t("save")}</button><button class="btn" onclick="closeModal()">${t("cancel")}</button></div>`);
}
function saveLeave(){
 const emp=$("#lv1").value,f=$("#lv2").value,to=$("#lv3").value;
 if(!emp){toast(t("needEmp"));return}
 if(!f||!to||to<f){toast(t("badRange"));return}
 if(leaveMonths(f,to).some(payLocked)){toast(t("monthLocked"));return}
 if(S.leaves.some(l=>l.emp===emp&&l.from<=to&&f<=l.to)){toast(t("leaveOverlap"));return}
 S.leaves.push({id:uid(),emp:emp,from:f,to:to,type:$("#lv4").value,reason:$("#lv5").value.trim(),by:me.id,at:Date.now()});
 log("leave",empN(emp)+" "+f+" → "+to+" "+$("#lv4").value);save();closeModal();render();
}
function leaveDel(id){
 const l=S.leaves.find(x=>x.id===id);if(!l)return;
 if(leaveMonths(l.from,l.to).some(payLocked)){toast(t("monthLocked"));return}
 if(!confirm(t("confirmDel")))return;
 S.leaves=S.leaves.filter(x=>x.id!==id);log("delete leave",empN(l.emp)+" "+l.from);save();render();
}

/* ---- penalties & advances ---- */
hrTabs.money=function(){
 const pen=S.penalties.slice().sort((a,b)=>a.date<b.date?1:-1),adv=S.advances.slice().sort((a,b)=>a.date<b.date?1:-1);
 $("#hrbody").innerHTML=`<div class="card"><div class="bar"><h3>${t("penalties")}</h3><button class="btn sm pri" onclick="moneyModal('pen')">${t("addPenalty")}</button></div><table><thead><tr><th>${t("empName")}</th><th>${t("date")}</th><th>${t("amount")}</th><th>${t("reasonLbl")}</th><th></th></tr></thead><tbody>${pen.map(p=>`<tr><td>${esc(empN(p.emp))}</td><td>${p.date}</td><td>${money(p.amount)}</td><td>${esc(p.reason||"")}</td><td><button class="btn sm" onclick="moneyDel('pen','${p.id}')">${t("delete")}</button></td></tr>`).join("")||'<tr><td colspan="5" class="muted">'+t("none")+"</td></tr>"}</tbody></table></div>${can("hr")?`<div class="card"><div class="bar"><h3>${t("bonuses")}</h3><button class="btn sm pri" onclick="bonusModal('')">${t("addBonus")}</button></div><table><thead><tr><th>${t("empName")}</th><th>${t("date")}</th><th>${t("amount")}</th><th>${t("reasonLbl")}</th><th></th></tr></thead><tbody>${S.bonuses.slice().sort((a,b)=>a.date<b.date?1:-1).map(p=>`<tr><td>${esc(empN(p.emp))}</td><td>${p.date}</td><td>${money(p.amount)}</td><td>${esc(p.reason||"")}</td><td><button class="btn sm" onclick="bonusModal('${p.id}')">${t("edit")}</button> <button class="btn sm" onclick="moneyDel('bon','${p.id}')">${t("delete")}</button></td></tr>`).join("")||'<tr><td colspan="5" class="muted">'+t("none")+"</td></tr>"}</tbody></table></div>`:""}<div class="card"><div class="bar"><h3>${t("advances")}</h3><button class="btn sm pri" onclick="moneyModal('adv')">${t("addAdvance")}</button></div><table><thead><tr><th>${t("empName")}</th><th>${t("date")}</th><th>${t("amount")}</th><th>${t("deductMonth")}</th><th>${t("reasonLbl")}</th><th></th></tr></thead><tbody>${adv.map(p=>`<tr><td>${esc(empN(p.emp))}</td><td>${p.date}</td><td>${money(p.amount)}</td><td>${p.deductMonth}</td><td>${esc(p.reason||"")}</td><td><button class="btn sm" onclick="moneyDel('adv','${p.id}')">${t("delete")}</button></td></tr>`).join("")||'<tr><td colspan="6" class="muted">'+t("none")+"</td></tr>"}</tbody></table></div>`;
};
function moneyModal(kind){
 modal(`<h3>${kind==="pen"?t("addPenalty"):t("addAdvance")}</h3><label>${t("empName")}<select id="mn1"><option value="">—</option>${S.employees.filter(e=>e.active).map(e=>`<option value="${e.id}">${esc(e.name)}</option>`).join("")}</select></label><div class="grid2" style="gap:8px"><label>${t("date")}<input type="date" id="mn2" value="${dayKey(Date.now())}"></label><label>${t("amount")}<input type="number" min="1" step="0.5" id="mn3"></label></div><label>${t("reasonLbl")}<input id="mn4"></label><div class="row"><button class="btn pri" onclick="saveMoney('${kind}')">${t("save")}</button><button class="btn" onclick="closeModal()">${t("cancel")}</button></div>`);
}
function saveMoney(kind){
 const emp=$("#mn1").value,d=$("#mn2").value,a=r2(num($("#mn3").value)),reason=$("#mn4").value.trim();
 if(!emp){toast(t("needEmp"));return}if(!d){toast(t("badDate"));return}if(!(a>0)){toast(t("badAmount"));return}
 if(kind==="pen"){
  if(payLocked(d.slice(0,7))){toast(t("monthLocked"));return}
  S.penalties.push({id:uid(),emp:emp,date:d,amount:a,reason:reason,by:me.id});log("penalty",empN(emp)+" "+a+" "+reason);
 }else{
  const dm=d.slice(0,7);if(payLocked(dm)){toast(t("monthLocked"));return}
  {const em=S.employees.find(x=>x.id===emp),cap=r2(em.wage*30*S.settings.advMaxPct/100),used=r2(S.advances.filter(x=>x.emp===emp&&x.deductMonth===dm).reduce((q,x)=>q+x.amount,0));if(used+a>cap+0.001){toast(t("advCap")+" "+money(Math.max(0,r2(cap-used))));return}}
  S.advances.push({id:uid(),emp:emp,date:d,amount:a,reason:reason,by:me.id,deductMonth:dm});log("advance",empN(emp)+" "+a+" → "+dm);
 }
 save();closeModal();render();
}
function moneyDel(kind,id){
 if(kind==="bon"&&!can("hr"))return;
 const list=kind==="pen"?S.penalties:kind==="bon"?S.bonuses:S.advances,r=list.find(x=>x.id===id);if(!r)return;
 const m=kind==="adv"?r.deductMonth:r.date.slice(0,7);if(payLocked(m)){toast(t("monthLocked"));return}
 if(!confirm(t("confirmDel")))return;
 if(kind==="pen")S.penalties=S.penalties.filter(x=>x.id!==id);else if(kind==="bon")S.bonuses=S.bonuses.filter(x=>x.id!==id);else S.advances=S.advances.filter(x=>x.id!==id);
 log("delete "+kind,empN(r.emp)+" "+r.amount);save();render();
}


function bonusModal(id){
 if(!can("hr"))return;
 const b=id?S.bonuses.find(x=>x.id===id):null;
 modal(`<h3>${b?t("editBonus"):t("addBonus")}</h3><label>${t("empName")}<select id="bn1">${b?"":'<option value="">—</option>'}${S.employees.filter(e=>e.active||(b&&b.emp===e.id)).map(e=>`<option value="${e.id}" ${b&&b.emp===e.id?"selected":""}>${esc(e.name)}</option>`).join("")}</select></label><div class="grid2" style="gap:8px"><label>${t("date")}<input type="date" id="bn2" value="${b?b.date:dayKey(Date.now())}"></label><label>${t("amount")}<input type="number" min="1" step="0.5" id="bn3" value="${b?b.amount:""}"></label></div><label>${t("reasonLbl")}<input id="bn4" value="${esc(b?b.reason:"")}"></label><div class="row"><button class="btn pri" onclick="saveBonus('${id||""}')">${t("save")}</button><button class="btn" onclick="closeModal()">${t("cancel")}</button></div>`);
}
function saveBonus(id){
 if(!can("hr"))return;
 const emp=$("#bn1").value,d=$("#bn2").value,a=r2(num($("#bn3").value)),reason=$("#bn4").value.trim();
 if(!emp){toast(t("needEmp"));return}if(!d){toast(t("badDate"));return}if(!(a>0)){toast(t("badAmount"));return}
 const old=id?S.bonuses.find(x=>x.id===id):null;
 if(payLocked(d.slice(0,7))||(old&&payLocked(old.date.slice(0,7)))){toast(t("monthLocked"));return}
 if(old){log("edit bonus",empN(emp)+" "+old.amount+" → "+a);Object.assign(old,{emp:emp,date:d,amount:a,reason:reason})}
 else{S.bonuses.push({id:uid(),emp:emp,date:d,amount:a,reason:reason,by:me.id});log("bonus",empN(emp)+" "+a+" "+reason)}
 save();closeModal();render();
}

/* ---- payroll ---- */
function payCalc(ym,e){
 let present=0,pl=0,absent=0,mins=0,offPaid=0;
 monthDays(ym).forEach(d=>{
  const a=(S.attendance[d]||{})[e.id],lv=leaveOn(e.id,d);
  if(a&&a.status==="present"){present++;if(a.out)mins+=durMin(a.in,a.out)}
  else if(lv&&lv.type==="paid")pl++;
  else if(a&&a.status==="absent")absent++;
  else if(isOffDay(e,d)&&!(lv&&lv.type!=="paid"))offPaid++;
 });
 const pen=S.penalties.filter(p=>p.emp===e.id&&p.date.slice(0,7)===ym),adv=S.advances.filter(p=>p.emp===e.id&&p.deductMonth===ym),bon=S.bonuses.filter(p=>p.emp===e.id&&p.date.slice(0,7)===ym);
 const gross=r2(e.wage*(present+pl+offPaid)),penT=r2(pen.reduce((s,p)=>s+p.amount,0)),advT=r2(adv.reduce((s,p)=>s+p.amount,0)),bonT=r2(bon.reduce((s,p)=>s+p.amount,0));
 return {emp:e.id,name:e.name,job:e.job||"",wage:e.wage,present:present,paidLeave:pl,offPaid:offPaid,absent:absent,hours:Math.round(mins/6)/10,gross:gross,bonus:bonT,pen:penT,adv:advT,net:r2(gross+bonT-penT-advT),bonList:bon.map(p=>({date:p.date,amount:p.amount,reason:p.reason})),penList:pen.map(p=>({date:p.date,amount:p.amount,reason:p.reason})),advList:adv.map(p=>({date:p.date,amount:p.amount,reason:p.reason}))};
}
function payLines(ym){return S.payrolls[ym]?S.payrolls[ym].lines:S.employees.map(e=>payCalc(ym,e)).filter((l,i)=>S.employees[i].active||l.present+l.paidLeave+(l.offPaid||0)>0)}
hrTabs.payroll=function(){
 const ym=HR.month,pr=S.payrolls[ym],lines=payLines(ym);
 const tot=k=>r2(lines.reduce((s,l)=>s+l[k],0));
 $("#hrbody").innerHTML=monthBar()+`<div class="card"><div class="bar"><h3>${t("t_payroll")} ${ym} ${pr?'<span class="tag ok">'+t("payApproved")+"</span>":""}</h3><div class="row" style="margin:0">${pr?(can("reset")?`<button class="btn sm" onclick="payReopen()">${t("payReopen")}</button>`:""):`<button class="btn sm ok" onclick="payApprove()">${t("payApprove")}</button>`}<button class="btn sm" onclick="payPrintSheet()">${t("printSheet")}</button></div></div><table style="min-width:900px"><thead><tr><th>${t("empName")}</th><th>${t("dailyWage")}</th><th>${t("payDays")}</th><th>${t("payPaidLeave")}</th><th>${t("payOff")}</th><th>${t("payAbsent")}</th><th>${t("payGross")}</th><th>${t("payBonus")}</th><th>${t("payPen")}</th><th>${t("payAdv")}</th><th>${t("payNet")}</th><th></th></tr></thead><tbody>${lines.map(l=>{const pd=pr&&pr.paid&&pr.paid[l.emp];return `<tr><td><b>${esc(l.name)}</b></td><td>${money(l.wage)}</td><td>${l.present}</td><td>${l.paidLeave}</td><td>${l.offPaid||0}</td><td>${l.absent}</td><td>${money(l.gross)}</td><td>${l.bonus?"+"+money(l.bonus):"–"}</td><td>${l.pen?"−"+money(l.pen):"–"}</td><td>${l.adv?"−"+money(l.adv):"–"}</td><td><b style="color:${l.net<0?"var(--bad)":"inherit"}">${money(l.net)}</b>${l.net<0?'<div class="muted">'+t("negNet")+"</div>":""}</td><td><button class="btn sm" onclick="paySlip('${l.emp}')">${t("paySlip")}</button> ${pr?(pd?'<span class="tag ok">'+t("payPaidTag")+"</span>":`<button class="btn sm ok" onclick="payPaid('${l.emp}')">${t("payMarkPaid")}</button>`):""}</td></tr>`}).join("")||'<tr><td colspan="11" class="muted">'+t("noEmployees")+"</td></tr>"}<tr><td><b>${t("payTotal")}</b></td><td></td><td></td><td></td><td></td><td><b>${money(tot("gross"))}</b></td><td>${money(tot("bonus"))}</td><td>${money(tot("pen"))}</td><td>${money(tot("adv"))}</td><td><b>${money(tot("net"))}</b></td><td></td></tr></tbody></table>${pr?'<div class="muted">'+t("approvedBy")+" "+esc((S.users.find(u=>u.id===pr.by)||{name:""}).name)+" • "+fDate(pr.at)+"</div>":""}</div>`;
};
function payApprove(){
 const ym=HR.month;if(S.payrolls[ym])return;
 if(ym>=dayKey(Date.now()).slice(0,7)&&!confirm(t("monthNotEnded")))return;
 S.payrolls[ym]={lines:payLines(ym),by:me.id,at:Date.now(),paid:{}};
 log("approve payroll",ym+" net "+r2(S.payrolls[ym].lines.reduce((s,l)=>s+l.net,0)));save();render();
}
function payReopen(){const ym=HR.month;if(!S.payrolls[ym]||!can("reset"))return;if(!confirm(t("confirmDel")))return;delete S.payrolls[ym];log("reopen payroll",ym);save();render()}
function payPaid(eid){const pr=S.payrolls[HR.month];if(!pr)return;pr.paid[eid]={at:Date.now(),by:me.id};log("payroll paid",empN(eid)+" "+HR.month);save();render()}
function payPrintSheet(){
 const ym=HR.month,lines=payLines(ym),tot=k=>r2(lines.reduce((s,l)=>s+l[k],0));
 printA4("<h1>"+esc(S.settings.venue)+"</h1><h2>"+t("t_payroll")+" – "+ym+"</h2><table><tr><th>"+t("empName")+"</th><th>"+t("dailyWage")+"</th><th>"+t("payDays")+"</th><th>"+t("payPaidLeave")+"</th><th>"+t("payOff")+"</th><th>"+t("payGross")+"</th><th>"+t("payBonus")+"</th><th>"+t("payPen")+"</th><th>"+t("payAdv")+"</th><th>"+t("payNet")+"</th></tr>"+lines.map(l=>"<tr><td>"+esc(l.name)+"</td><td>"+money(l.wage)+"</td><td>"+l.present+"</td><td>"+l.paidLeave+"</td><td>"+(l.offPaid||0)+"</td><td>"+money(l.gross)+"</td><td>"+money(l.bonus)+"</td><td>"+money(l.pen)+"</td><td>"+money(l.adv)+"</td><td><b>"+money(l.net)+"</b></td></tr>").join("")+"<tr><th>"+t("payTotal")+"</th><td></td><td></td><td></td><td></td><th>"+money(tot("gross"))+"</th><th>"+money(tot("bonus"))+"</th><th>"+money(tot("pen"))+"</th><th>"+money(tot("adv"))+"</th><th>"+money(tot("net"))+'</th></tr></table><div class="sig"><div>'+t("signStaff")+"</div><div>"+t("approvedBy")+"</div></div>");
}
function paySlip(eid){
 const ym=HR.month,l=payLines(ym).find(x=>x.emp===eid);if(!l)return;
 const r=(a,v)=>"<tr><th style=\"width:45%\">"+a+"</th><td>"+v+"</td></tr>";
 printA4("<h1>"+esc(S.settings.venue)+"</h1><h2>"+t("paySlip")+" – "+ym+"</h2><table>"+r(t("empName"),esc(l.name)+(l.job?" ("+esc(l.job)+")":""))+r(t("dailyWage"),money(l.wage))+r(t("payDays"),l.present)+r(t("payPaidLeave"),l.paidLeave)+r(t("payOff"),l.offPaid||0)+r(t("payAbsent"),l.absent)+r(t("payGross"),money(l.gross))+"</table><table>"+
  (l.bonList&&l.bonList.length?l.bonList.map(p=>r(t("payBonus")+" "+p.date+(p.reason?" – "+esc(p.reason):""),"+"+money(p.amount))).join(""):"")+(l.penList.length?l.penList.map(p=>r(t("payPen")+" "+p.date+(p.reason?" – "+esc(p.reason):""),"−"+money(p.amount))).join(""):"")+(l.advList.length?l.advList.map(p=>r(t("payAdv")+" ("+p.date+")"+(p.reason?" – "+esc(p.reason):""),"−"+money(p.amount))).join(""):"")+r(t("payNet"),"<b>"+money(l.net)+"</b>")+'</table><div class="sig"><div>'+t("signStaff")+"</div><div>"+t("approvedBy")+"</div></div>");
}

/* ---- settings: shifts ---- */
function hrCard(){
 const s=S.settings;
 return '<div class="card"><h3>'+t("hrSettings")+'</h3><div class="grid2">'+s.shifts.map((x,i)=>'<label>'+esc(shiftName(x))+" – "+t("startTime")+'<input type="time" id="hs'+i+'a" value="'+x.start+'"></label><label>'+esc(shiftName(x))+" – "+t("endTime")+'<input type="time" id="hs'+i+'b" value="'+x.end+'"></label>').join("")+'<label>'+t("hrGraceLbl")+'<input id="hg" type="number" min="0" value="'+s.hrGrace+'"></label><label>'+t("advMaxLbl")+'<input id="hadv" type="number" min="0" max="100" value="'+s.advMaxPct+'"></label></div><div class="row"><button class="btn pri" onclick="saveHrSettings()">'+t("save")+"</button></div></div>";
}
function saveHrSettings(){
 const s=S.settings,g=num($("#hg").value);
 for(let i=0;i<s.shifts.length;i++){if(isNaN(toMin($("#hs"+i+"a").value))||isNaN(toMin($("#hs"+i+"b").value))){toast(t("badTime"));return}}
 if(g<0){toast(t("badAge"));return}
 s.shifts.forEach((x,i)=>{x.start=$("#hs"+i+"a").value;x.end=$("#hs"+i+"b").value});s.hrGrace=g;{const ap=num($("#hadv").value);if(ap>=0&&ap<=100)s.advMaxPct=ap}
 log("hr settings","grace "+g);save();toast(t("saved"));render();
}

/* ============ Phase 6: safe pickup, inventory, maintenance ============ */
function qcDefaults(){return [{id:"q1",name:"نظافة منطقة اللعب",active:true},{id:"q2",name:"نظافة دورات المياه",active:true},{id:"q3",name:"فحص سلامة الألعاب",active:true},{id:"q4",name:"تعقيم الألعاب",active:true},{id:"q5",name:"ترتيب الكافيتريا",active:true},{id:"q6",name:"مخارج الطوارئ ومعدات الإطفاء",active:true}]}
function p6SettingsDefaults(){return {pickupCheck:true}}
const phone4=gid=>String((G(gid)||{}).phone||"").replace(/\D/g,"").slice(-4);
const phone4s=gid=>phonesOf(G(gid)).map(p=>String(p).replace(/\D/g,"").slice(-4));
function pickupBlock(v){
 const ov=window._pkOv&&window._pkOv.id===v.id?window._pkOv:null;
 if(ov)return '<div class="alertbox soon">'+t("pkOvNote")+": "+esc((S.users.find(u=>u.id===ov.by)||{name:""}).name)+"</div>";
 return '<label>'+t("pkLbl")+'<input id="cpk" inputmode="numeric" maxlength="4" autocomplete="off" dir="ltr"></label><div class="row" style="margin:0 0 8px"><button class="btn sm" onclick="pickupOther()">'+t("pkOther")+"</button></div>";
}
function pickupOther(){
 const o=window._co;if(!o)return;
 needApproval(u=>{window._pkOv={id:o.id,by:u.id};log("pickup by other approved","#"+(S.visits.find(x=>x.id===o.id)||{}).rno);save();o.group?checkoutGroupModal(o.group,o.ts):checkoutModal(o.id,o.ts)},()=>o.group?checkoutGroupModal(o.group,o.ts):checkoutModal(o.id,o.ts));
}

/* ---- inventory ---- */
const tracked=p=>!!p.track;
const stockOf=p=>p.stock||0;
const isLow=p=>tracked(p)&&p.active&&stockOf(p)<=(p.min||0);
function stockMove(p,d,type,ref,note){const b=stockOf(p);p.stock=Math.max(0,b+d);const act=p.stock-b;S.stockLog.push({id:uid(),pid:p.id,d:act,after:p.stock,type:type,ref:ref||"",note:note||"",by:me?me.id:"",at:Date.now()});return act}
function stockDeduct(inv){inv.lines.forEach(l=>{const p=l.pid&&S.products.find(x=>x.id===l.pid);if(p&&tracked(p)){const act=-stockMove(p,-l.qty,"sale","#"+inv.no,"");l.ded=act;if(l.ovBy&&act<l.qty){const lg=S.stockLog[S.stockLog.length-1];lg.note=t("ovAppr")+": "+(l.qty-act)}}})}
function stockRestore(inv){inv.lines.forEach(l=>{const p=l.pid&&S.products.find(x=>x.id===l.pid);if(p&&tracked(p)&&l.ded>0){stockMove(p,l.ded,"void","#"+inv.no);l.ded=0}})}
function stockRefund(inv,items){items.forEach(x=>{const l=inv.lines[x.k],p=l.pid&&S.products.find(z=>z.id===l.pid);if(p&&tracked(p)&&l.ded>0){const q=Math.min(x.q,l.ded);stockMove(p,q,"refund","#"+inv.no);l.ded-=q}})}
function cartStockOk(id,qty){const p=S.products.find(x=>x.id===id);return !p||!tracked(p)||qty<=stockOf(p)}
const MV={sale:"invSale",void:"invVoid",refund:"invRefund",in:"invIn",adj:"invAdj"};
views.inventory=function(){
 const rows=S.products.map(p=>{
  const st=!tracked(p)?'<span class="muted">'+t("invUntracked")+"</span>":stockOf(p)<=0?'<span class="tag soon">'+t("invOut")+"</span>":isLow(p)?'<span class="tag soon">'+t("invLow")+"</span>":'<span class="tag ok">'+t("invOk")+"</span>";
  return "<tr><td><b>"+esc(pname(p))+"</b></td><td>"+(tracked(p)?stockOf(p):"–")+"</td><td>"+(tracked(p)?p.min||0:"–")+"</td><td>"+st+'</td><td>'+(tracked(p)?'<button class="btn sm" onclick="stockModal(\''+p.id+'\',\'in\')">'+t("invReceive")+'</button> <button class="btn sm" onclick="stockModal(\''+p.id+'\',\'adj\')">'+t("invCount")+"</button> ":"")+'<button class="btn sm" onclick="trackModal(\''+p.id+'\')">'+t("edit")+"</button></td></tr>"}).join("");
 const lg=S.stockLog.slice(-30).reverse().map(m=>{const p=S.products.find(x=>x.id===m.pid);return "<tr><td>"+fTime(m.at)+"</td><td>"+esc(p?pname(p):"("+t("prodDeleted")+")")+"</td><td>"+t(MV[m.type]||"invAdj")+" "+esc(m.ref||"")+'</td><td dir="ltr">'+(m.d>0?"+":"")+m.d+"</td><td>"+m.after+"</td><td>"+esc(m.note||"")+"</td></tr>"}).join("");
 $("#view").innerHTML='<div class="bar"><h2>'+t("invTitle")+'</h2></div><div class="card"><table><thead><tr><th>'+t("name")+"</th><th>"+t("invStock")+"</th><th>"+t("invMin")+"</th><th>"+t("status")+"</th><th></th></tr></thead><tbody>"+rows+'</tbody></table></div><div class="card"><h3>'+t("invLog")+"</h3><table><thead><tr><th>"+t("time")+"</th><th>"+t("name")+"</th><th></th><th>±</th><th>"+t("invStock")+"</th><th>"+t("invNote")+"</th></tr></thead><tbody>"+(lg||'<tr><td colspan="6" class="muted">'+t("none")+"</td></tr>")+"</tbody></table></div>";
};
function trackModal(id){
 const p=S.products.find(x=>x.id===id);if(!p)return;
 modal("<h3>"+esc(pname(p))+'</h3><label class="opt"><input type="checkbox" id="tk1" '+(p.track?"checked":"")+"><span>"+t("invTrack")+'</span></label><div class="grid2" style="gap:8px"><label>'+t("invMin")+'<input id="tk2" type="number" min="0" value="'+(p.min||0)+'"></label>'+(p.track?"":"<label>"+t("invStock")+'<input id="tk3" type="number" min="0" value="0"></label>')+'</div><div class="row"><button class="btn pri" onclick="saveTrack(\''+id+'\')">'+t("save")+'</button><button class="btn" onclick="closeModal()">'+t("cancel")+"</button></div>");
}
function saveTrack(id){
 const p=S.products.find(x=>x.id===id);if(!p||!can("inventory"))return;
 const tk=$("#tk1").checked,min=Math.floor(num($("#tk2").value));if(!(min>=0)){toast(t("badAmount"));return}
 const wasT=!!p.track;p.track=tk;p.min=min;
 if(tk&&!wasT){p.stock=0;const q=$("#tk3")?Math.floor(num($("#tk3").value)):0;if(q>0)stockMove(p,q,"in","","initial")}
 log("inventory setup",pname(p)+" track "+tk+" min "+min);save();closeModal();render();
}
function stockModal(id,kind){
 const p=S.products.find(x=>x.id===id);if(!p)return;
 modal("<h3>"+esc(pname(p))+" – "+t(kind==="in"?"invReceive":"invCount")+'</h3><label>'+t(kind==="in"?"invQty":"invActual")+'<input id="sq" type="number" min="0" value="'+(kind==="in"?"":stockOf(p))+'"></label><label>'+t("invNote")+'<input id="sn"></label><div class="row"><button class="btn pri" onclick="saveStock(\''+id+"','"+kind+'\')">'+t("save")+'</button><button class="btn" onclick="closeModal()">'+t("cancel")+"</button></div>");
}
function saveStock(id,kind){
 const p=S.products.find(x=>x.id===id);if(!p||!can("inventory"))return;
 const q=Math.floor(num($("#sq").value)),note=$("#sn").value.trim();
 if(!(q>=0)||(kind==="in"&&q<=0)){toast(t("badAmount"));return}
 if(kind==="in")stockMove(p,q,"in","",note);
 else{const d=q-stockOf(p);if(d===0){closeModal();return}stockMove(p,d,"adj","",note)}
 log("stock "+kind,pname(p)+" "+q);save();closeModal();render();
}

/* ---- maintenance / fault reports ---- */
const FST={open:"fOpen",progress:"fProg",done:"fDone"};
views.maint=function(){
 const list=S.faults.slice().sort((a,b)=>(a.status==="done")-(b.status==="done")||b.at-a.at);
 const rows=list.map(f=>{
  const act=can("maintain")?(f.status==="open"?'<button class="btn sm" onclick="faultSet(\''+f.id+'\',\'progress\')">'+t("fSetProg")+"</button> ":"")+(f.status!=="done"?'<button class="btn sm ok" onclick="faultSet(\''+f.id+'\',\'done\')">'+t("fSetDone")+'</button> <button class="btn sm" onclick="faultStop(\''+f.id+'\')">'+t("fToggleStop")+"</button>":'<button class="btn sm" onclick="faultSet(\''+f.id+'\',\'open\')">'+t("fReopen")+"</button>"):"";
  return "<tr><td>#"+f.no+"</td><td><b>"+esc(f.item)+"</b><div class=\"muted\">"+esc(f.desc)+"</div>"+(f.note?'<div class="muted">'+t("fNote")+": "+esc(f.note)+"</div>":"")+"</td><td>"+(f.stopped&&f.status!=="done"?'<span class="tag soon">'+t("fStopped")+"</span> ":"")+'<span class="tag '+(f.status==="done"?"ok":"open")+'">'+t(FST[f.status])+"</span></td><td>"+fTime(f.at)+"<div class=\"muted\">"+t("fBy")+" "+esc((S.users.find(u=>u.id===f.by)||{name:""}).name)+"</div></td><td>"+act+"</td></tr>"}).join("");
 $("#view").innerHTML='<div class="bar"><h2>'+t("maintTitle")+'</h2></div>'+qcCard()+'<div class="card"><h3>'+t("fReport")+'</h3><div class="grid2" style="gap:8px"><label>'+t("fItem")+'<input id="fi"></label><label>'+t("fDesc")+'<input id="fd"></label></div><label class="opt"><input type="checkbox" id="fs"><span>'+t("fStopped")+'</span></label><div class="row"><button class="btn pri" onclick="faultAdd()">'+t("fSend")+'</button></div></div><div class="card"><table><thead><tr><th>#</th><th>'+t("fItem")+"</th><th>"+t("fStatus")+"</th><th>"+t("time")+"</th><th></th></tr></thead><tbody>"+(rows||'<tr><td colspan="5" class="muted">'+t("none")+"</td></tr>")+"</tbody></table></div>";
};
function faultAdd(){
 const item=$("#fi").value.trim(),desc=$("#fd").value.trim();
 if(!item||!desc){toast(t("fNeed"));return}
 S.faults.push({id:uid(),no:nextNo("fault"),item:item,desc:desc,stopped:$("#fs").checked,status:"open",note:"",by:me.id,at:Date.now()});
 log("fault report","#"+S.seq.fault+" "+item);save();render();
}
function faultSet(id,st){
 const f=S.faults.find(x=>x.id===id);if(!f||!can("maintain"))return;
 let note=f.note;
 if(st==="done"||st==="progress"){const n=prompt(t("fNote"),f.note||"");if(n!==null)note=n.trim()}
 f.status=st;f.note=note;f.updatedBy=me.id;f.updatedAt=Date.now();if(st==="done")f.stopped=false;
 log("fault "+st,"#"+f.no+" "+f.item);save();render();
}
function faultStop(id){const f=S.faults.find(x=>x.id===id);if(!f||!can("maintain"))return;f.stopped=!f.stopped;log("fault stop","#"+f.no+" "+f.stopped);save();render()}


/* ---- daily quality checklist ---- */
function qcCard(){
 const d=dayKey(Date.now()),lg=S.qcLogs[d]||{},items=S.qcItems.filter(x=>x.active),can_=can("maintain");
 return '<div class="card"><div class="bar"><h3>'+t("qcTitle")+" – "+d+" ("+items.filter(x=>lg[x.id]).length+"/"+items.length+')</h3>'+(can("settings")?'<button class="btn sm" onclick="qcModal()">'+t("qcManage")+"</button>":"")+'</div><table><tbody>'+items.map(x=>{const l=lg[x.id];return '<tr><td><label class="opt" style="margin:0"><input type="checkbox" '+(l?"checked ":"")+(can_?"":"disabled ")+'onchange="qcToggle(\''+x.id+'\')"><span>'+esc(x.name)+"</span></label></td><td>"+(l?fTime(l.at)+" – "+t("qcBy")+" "+esc((S.users.find(u=>u.id===l.by)||{name:""}).name):"")+"</td></tr>"}).join("")+"</tbody></table></div>";
}
function qcToggle(id){
 if(!can("maintain"))return;
 const d=dayKey(Date.now());S.qcLogs[d]=S.qcLogs[d]||{};
 if(S.qcLogs[d][id])delete S.qcLogs[d][id];else S.qcLogs[d][id]={by:me.id,at:Date.now()};
 log("quality check",id+" "+(S.qcLogs[d][id]?"done":"undone"));save();render();
}
function qcModal(){
 if(!can("settings"))return;
 modal("<h3>"+t("qcManage")+'</h3><div id="qcl">'+S.qcItems.map(qcRow).join("")+'</div><div class="row"><button class="btn sm" onclick="document.getElementById(\'qcl\').insertAdjacentHTML(\'beforeend\',qcRow({id:\'\',name:\'\',active:true}))">'+t("qcAdd")+'</button></div><div class="row"><button class="btn pri" onclick="qcSave()">'+t("save")+'</button><button class="btn" onclick="closeModal()">'+t("cancel")+"</button></div>");
}
const qcRow=x=>'<div class="row" style="margin:0 0 6px" data-id="'+x.id+'"><input class="qn" value="'+esc(x.name)+'"><label class="opt" style="margin:0"><input type="checkbox" class="qa" '+(x.active?"checked":"")+"><span>"+t("active")+"</span></label></div>";
function qcSave(){
 if(!can("settings"))return;
 const out=[];document.querySelectorAll("#qcl [data-id]").forEach(r=>{const n=r.querySelector(".qn").value.trim();if(!n)return;out.push({id:r.dataset.id||uid(),name:n,active:r.querySelector(".qa").checked})});
 S.qcItems=out;log("quality items edit",out.length);save();closeModal();render();
}

/* ---- alerts (present screen) ---- */
function p6Alerts(){
 let h="";
 const low=S.products.filter(isLow);
 if(low.length)h+='<div class="alertbox soon">📦 '+low.length+" "+t("invLowAlert")+": "+low.map(p=>esc(pname(p))+" ("+stockOf(p)+")").join("، ")+"</div>";
 const stp=S.faults.filter(f=>f.stopped&&f.status!=="done");
 if(stp.length)h+='<div class="alertbox over">🔧 '+stp.length+" "+t("fStoppedAlert")+": "+stp.map(f=>esc(f.item)).join("، ")+"</div>";
 if(can("maintain")){const un=S.qcItems.filter(x=>x.active&&!(S.qcLogs[dayKey(Date.now())]||{})[x.id]).length;if(un)h+='<div class="alertbox soon">✅ '+un+" "+t("qcLeft")+"</div>"}
 if(can("settings")&&!(DB.meta&&DB.meta.lastDownload&&dayKey(DB.meta.lastDownload)===dayKey(Date.now())))h+='<div class="alertbox soon">💾 '+t("bkRemind")+' <button class="btn sm" onclick="bkDownload()">'+t("bkDownload")+"</button></div>"
 if(can("maintain")){const o=S.faults.filter(f=>f.status!=="done").length;if(o)h+='<div class="alertbox soon">🛠 '+o+" "+t("fOpenAlert")+"</div>"}
 return h;
}
function p6Card(){
 return '<div class="card"><h3>'+t("p6Settings")+'</h3><label class="opt"><input type="checkbox" id="pkc" '+(S.settings.pickupCheck?"checked":"")+" onchange=\"S.settings.pickupCheck=this.checked;log('pickup setting',this.checked);save()\"><span>"+t("pkSetting")+"</span></label></div>";
}

/* ============ Phase 7: reports, dashboard, xlsx export ============ */
function crc32(b){let t=crc32.t,c;if(!t){t=crc32.t=[];for(let n=0;n<256;n++){c=n;for(let k=0;k<8;k++)c=c&1?0xEDB88320^(c>>>1):c>>>1;t[n]=c>>>0}}let r=-1;for(let i=0;i<b.length;i++)r=t[(r^b[i])&255]^(r>>>8);return (r^-1)>>>0}
function zipStore(files){
 const enc=new TextEncoder(),u16=v=>[v&255,(v>>8)&255],u32=v=>[v&255,(v>>8)&255,(v>>16)&255,(v>>>24)&255];
 const loc=[],cen=[];let off=0;
 files.forEach(f=>{
  const nm=enc.encode(f.name),d=enc.encode(f.data),crc=crc32(d),sz=d.length;
  const lh=Uint8Array.from([0x50,0x4b,3,4,...u16(20),...u16(0x0800),...u16(0),...u16(0),...u16(0x21),...u32(crc),...u32(sz),...u32(sz),...u16(nm.length),...u16(0)]);
  loc.push(lh,nm,d);
  cen.push(Uint8Array.from([0x50,0x4b,1,2,...u16(20),...u16(20),...u16(0x0800),...u16(0),...u16(0),...u16(0x21),...u32(crc),...u32(sz),...u32(sz),...u16(nm.length),...u16(0),...u16(0),...u16(0),...u16(0),...u32(0),...u32(off)]),nm);
  off+=lh.length+nm.length+sz;
 });
 const cdSize=cen.reduce((s,x)=>s+x.length,0);
 const end=Uint8Array.from([0x50,0x4b,5,6,...u16(0),...u16(0),...u16(files.length),...u16(files.length),...u32(cdSize),...u32(off),...u16(0)]);
 const all=loc.concat(cen,[end]),out=new Uint8Array(all.reduce((s,x)=>s+x.length,0));let p=0;all.forEach(x=>{out.set(x,p);p+=x.length});return out;
}
const xe=s=>String(s).replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g,"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
function colName(i){let s="";i++;while(i>0){const m=(i-1)%26;s=String.fromCharCode(65+m)+s;i=Math.floor((i-1)/26)}return s}
function sheetXml(sh,rtl){
 const rows=[sh.head].concat(sh.rows),widths=[];
 rows.forEach(r=>r.forEach((v,i)=>{widths[i]=Math.min(40,Math.max(widths[i]||8,String(v==null?"":v).length+3))}));
 let x='<?xml version="1.0" encoding="UTF-8" standalone="yes"?><worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><sheetViews><sheetView workbookViewId="0"'+(rtl?' rightToLeft="1"':"")+'/></sheetViews><cols>'+widths.map((w,i)=>'<col min="'+(i+1)+'" max="'+(i+1)+'" width="'+w+'" customWidth="1"/>').join("")+"</cols><sheetData>";
 rows.forEach((r,ri)=>{
  const st=ri===0?1:(sh.total&&ri===rows.length-1?2:0);
  x+='<row r="'+(ri+1)+'">'+r.map((v,ci)=>{
   const ref=colName(ci)+(ri+1),s=st?' s="'+st+'"':"";
   if(typeof v==="number"&&isFinite(v))return '<c r="'+ref+'"'+s+'><v>'+v+"</v></c>";
   return '<c r="'+ref+'"'+s+' t="inlineStr"><is><t xml:space="preserve">'+xe(v==null?"":v)+"</t></is></c>";
  }).join("")+"</row>";
 });
 return x+"</sheetData></worksheet>";
}
function xlsxBytes(sheets,rtl){
 const NS='xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"',H='<?xml version="1.0" encoding="UTF-8" standalone="yes"?>';
 const names=sheets.map((s,i)=>(String(s.name).replace(/[\[\]:*?\/\\]/g," ").slice(0,28)||"Sheet")+(sheets.some((o,j)=>j<i&&o.name===s.name)?" "+(i+1):""));
 const files=[
  {name:"[Content_Types].xml",data:H+'<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>'+sheets.map((s,i)=>'<Override PartName="/xl/worksheets/sheet'+(i+1)+'.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>').join("")+"</Types>"},
  {name:"_rels/.rels",data:H+'<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>'},
  {name:"xl/workbook.xml",data:H+"<workbook "+NS+' xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets>'+names.map((n,i)=>'<sheet name="'+xe(n)+'" sheetId="'+(i+1)+'" r:id="rId'+(i+1)+'"/>').join("")+"</sheets></workbook>"},
  {name:"xl/_rels/workbook.xml.rels",data:H+'<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">'+sheets.map((s,i)=>'<Relationship Id="rId'+(i+1)+'" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet'+(i+1)+'.xml"/>').join("")+'<Relationship Id="rId'+(sheets.length+1)+'" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>'},
  {name:"xl/styles.xml",data:H+"<styleSheet "+NS+'><fonts count="2"><font><sz val="11"/><name val="Calibri"/></font><font><b/><sz val="11"/><name val="Calibri"/></font></fonts><fills count="3"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill><fill><patternFill patternType="solid"><fgColor rgb="FFE3E6F0"/></patternFill></fill></fills><borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders><cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs><cellXfs count="3"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/><xf numFmtId="0" fontId="1" fillId="2" borderId="0" xfId="0" applyFont="1" applyFill="1"/><xf numFmtId="0" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1"/></cellXfs><cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles></styleSheet>'}
 ].concat(sheets.map((s,i)=>({name:"xl/worksheets/sheet"+(i+1)+".xml",data:sheetXml(s,rtl)})));
 return zipStore(files);
}
function downloadXlsx(fn,sheets){
 const blob=new Blob([xlsxBytes(sheets,lang==="ar")],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});
 const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download=fn;document.body.appendChild(a);a.click();
 setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove()},1000);
}

/* ---- aggregation ---- */
let R={tab:null,from:null,to:null};
const eachDay=(a,b)=>{const o=[];for(let d=a;d<=b&&o.length<400;d=addDays(d,1))o.push(d);return o};
const hourOf=ts=>parseInt(new Date(ts).toLocaleTimeString("en-GB",{timeZone:TZ,hour:"2-digit",hourCycle:"h23"}),10);
const PM=["cash","card","wallet"];
function repData(a,b){
 const dm={};eachDay(a,b).forEach(d=>dm[d]={d:d,inv:0,sales:0,disc:0,cash:0,card:0,wallet:0,credit:0,refunds:0,voidN:0,voidAmt:0,visits:0,late:0,lateFee:0});
 const cat={},hours=new Array(24).fill(0);let dur=0,durN=0;
 S.invoices.forEach(i=>{
  if(i.void){const k=dayKey(i.void.at),d=dm[k];if(d){d.voidN++;d.voidAmt=r2(d.voidAmt+invRevenue(i))}return}
  const d=dm[dayKey(i.createdAt)];if(!d)return;
  d.inv++;d.sales=r2(d.sales+invRevenue(i));d.disc=r2(d.disc+i.disc.amount);d.credit=r2(d.credit+i.creditAmt);
  i.payments.forEach(p=>{if(PM.includes(p.m))d[p.m]=r2(d[p.m]+p.a)});
  i.lines.forEach(l=>{if(l.type==="topup")return;const k=["visit","late","cafe","game","package","party"].includes(l.type)||pcatsCustom().some(c=>c.id===l.type)?l.type:"other";cat[k]=r2((cat[k]||0)+l.price*l.qty)});
 });
 S.refunds.forEach(r=>{const d=dm[dayKey(r.at)];if(d){d.refunds=r2(d.refunds+r.a);if(PM.includes(r.m))d[r.m]=r2(d[r.m]-r.a)}});
 S.visits.forEach(v=>{
  const d=dm[dayKey(v.checkIn)];if(!d)return;
  d.visits++;hours[hourOf(v.checkIn)]++;
  if(v.status==="out"){dur+=(v.checkOut-v.checkIn)/60000;durN++;if(v.lateMin>0){d.late++;d.lateFee=r2(d.lateFee+(v.lateFee||0))}}
 });
 const list=Object.keys(dm).sort().map(k=>{const d=dm[k];d.net=r2(d.sales-d.refunds);return d});
 const sum=k=>r2(list.reduce((s,d)=>s+d[k],0));
 const tot={};["inv","sales","disc","cash","card","wallet","credit","refunds","voidN","voidAmt","visits","late","lateFee","net"].forEach(k=>tot[k]=sum(k));
 return {list:list,tot:tot,cat:cat,hours:hours,avgDur:durN?Math.round(dur/durN):0};
}
function rptTable(sh){
 const f=v=>typeof v==="number"?(Number.isInteger(v)?v:v.toFixed(2)):esc(v==null?"":v);
 return '<div class="card" style="overflow:auto">'+(sh.title?"<h3>"+esc(sh.title)+"</h3>":"")+'<table style="min-width:520px"><thead><tr>'+sh.head.map(h=>"<th>"+esc(h)+"</th>").join("")+"</tr></thead><tbody>"+sh.rows.map((r,ri)=>"<tr"+(sh.total&&ri===sh.rows.length-1?' style="font-weight:700"':"")+">"+r.map(v=>"<td>"+f(v)+"</td>").join("")+"</tr>").join("")+"</tbody></table></div>";
}
function barSvg(labels,vals,w){
 const max=Math.max.apply(null,vals.concat([1])),n=vals.length||1,bw=Math.max(8,Math.min(70,Math.floor((w||560)/n)-6)),H=140;
 return '<svg viewBox="0 0 '+n*(bw+6)+" "+(H+34)+'" style="width:100%;max-width:'+Math.max(320,n*(bw+6))+'px;direction:ltr" role="img">'+vals.map((v,i)=>{const h=Math.round(v/max*H),x=i*(bw+6);return '<rect x="'+x+'" y="'+(H-h+14)+'" width="'+bw+'" height="'+h+'" rx="3" fill="var(--pri)"/><text x="'+(x+bw/2)+'" y="'+(H-h+10)+'" font-size="9" text-anchor="middle" fill="var(--muted)">'+(v?Math.round(v):"")+'</text><text x="'+(x+bw/2)+'" y="'+(H+28)+'" font-size="9" text-anchor="middle" fill="var(--muted)">'+esc(labels[i])+"</text>"}).join("")+"</svg>";
}
const CATS=["visit","late","cafe","game","package","party","other"];
const shortD=d=>d.slice(5).replace("-","/");

/* ---- tabs: each returns {html, sheets, pdf} ---- */
const RT={};
RT.dash=function(a,b){
 const D=repData(a,b),T=D.tot,per=T.visits?r2(T.sales/T.visits):0;
 const hrs=[];for(let h=0;h<24;h++)if(D.hours[h]||(h>=10&&h<=22))hrs.push(h);
 const kp='<div class="kpis">'+kpi(t("rpNet"),money(T.net))+kpi(t("rpInv"),T.inv)+kpi(t("rpVisitsN"),T.visits)+kpi(t("rpAvgVisit"),money(per))+kpi(t("rpDisc"),money(T.disc))+kpi(t("rpRef"),money(T.refunds))+kpi(t("rpCredit"),money(T.credit))+"</div>";
 const pay={title:t("rpNet")+" – "+t("m_cash")+" / "+t("m_card")+" / "+t("m_wallet"),head:[t("rpCash"),t("rpCard"),t("rpWallet"),t("rpCredit")],rows:[[T.cash,T.card,T.wallet,T.credit]]};
 const cats={title:t("rpCat"),head:[t("category"),t("rpTotal")],rows:CATS.slice(0,-1).concat(pcatsCustom().map(c=>c.id),["other"]).filter(k=>D.cat[k]).map(k=>[CATS.includes(k)?t("c_"+k):pcatName(k),D.cat[k]]).concat([[t("rpTotal"),r2(Object.keys(D.cat).reduce((s,k)=>s+D.cat[k],0))]]),total:true};
 const html=kp+'<div class="card"><h3>'+t("rpPerDay")+"</h3>"+barSvg(D.list.map(d=>shortD(d.d)),D.list.map(d=>d.net))+'</div><div class="card"><h3>'+t("rpPeak")+"</h3>"+barSvg(hrs.map(h=>String(h)),hrs.map(h=>D.hours[h]))+"</div>"+rptTable(pay)+rptTable(cats);
 return {html:html,sheets:[{name:t("rp_dash"),head:[t("rpTotal"),""],rows:[[t("rpNet"),T.net],[t("rpInv"),T.inv],[t("rpVisitsN"),T.visits],[t("rpAvgVisit"),per],[t("rpDisc"),T.disc],[t("rpRef"),T.refunds],[t("rpCredit"),T.credit],[t("rpCash"),T.cash],[t("rpCard"),T.card],[t("rpWallet"),T.wallet]]},{name:t("rpCat"),head:cats.head,rows:cats.rows,total:true},{name:t("rpPeak"),head:[t("rpHour"),t("rpKids")],rows:hrs.map(h=>[h+":00",D.hours[h]])}],pdf:kp+rptTable(pay)+rptTable(cats)};
};
RT.sales=function(a,b){
 const D=repData(a,b),T=D.tot;
 const sh={head:[t("rpDate"),t("rpInv"),t("rpGross"),t("rpDisc"),t("rpRef"),t("rpNet"),t("rpCash"),t("rpCard"),t("rpWallet"),t("rpCredit"),t("rpVoid")],rows:D.list.map(d=>[d.d,d.inv,d.sales,d.disc,d.refunds,d.net,d.cash,d.card,d.wallet,d.credit,d.voidN]).concat([[t("rpTotal"),T.inv,T.sales,T.disc,T.refunds,T.net,T.cash,T.card,T.wallet,T.credit,T.voidN]]),total:true,name:t("rp_sales")};
 return {html:rptTable(sh)+'<div class="muted">'+t("rpNote")+"</div>",sheets:[sh],pdf:rptTable(sh)};
};
RT.visits=function(a,b){
 const D=repData(a,b),T=D.tot;
 const sh={name:t("rp_visits"),head:[t("rpDate"),t("rpVisitsN"),t("rpLateN"),t("rpLateFee")],rows:D.list.map(d=>[d.d,d.visits,d.late,d.lateFee]).concat([[t("rpTotal"),T.visits,T.late,T.lateFee]]),total:true};
 const hrs=[];for(let h=0;h<24;h++)if(D.hours[h])hrs.push([h+":00",D.hours[h]]);
 const hs={name:t("rpPeak"),title:t("rpPeak"),head:[t("rpHour"),t("rpKids")],rows:hrs};
 const kp='<div class="kpis">'+kpi(t("rpVisitsN"),T.visits)+kpi(t("rpAvgDur"),fMin(D.avgDur))+kpi(t("rpLateN"),T.late)+kpi(t("rpLateFee"),money(T.lateFee))+"</div>";
 return {html:kp+rptTable(sh)+rptTable(hs),sheets:[sh,hs],pdf:kp+rptTable(sh)+rptTable(hs)};
};
RT.pp=function(a,b){
 const D=repData(a,b),now=Date.now();
 let pn=0,pr=0;S.invoices.forEach(i=>{if(i.void||!(dayKey(i.createdAt)>=a&&dayKey(i.createdAt)<=b))return;i.lines.forEach(l=>{if(l.type==="package"){pn+=l.qty;pr+=l.price*l.qty}})});
 const act=S.subs.filter(s=>s.status==="active"&&s.expiresAt>now),left=act.reduce((s,x)=>s+x.remaining,0),soon=act.filter(s=>s.expiresAt<now+7*86400000).length;
 const pk={name:t("rpPkgSold"),title:t("rp_pp"),head:[t("rpPkgSold"),t("rpPkgRev"),t("rpPkgLeft"),t("rpPkgSoon")],rows:[[pn,r2(pr),Math.round(left/6)/10,soon]]};
 const bk=S.bookings.filter(x=>x.date>=a&&x.date<=b);
 const act2=bk.filter(x=>x.status!=="cancelled");
 const ps={name:t("rpParties"),title:t("rpParties")+" ("+t("rpCancelled")+": "+(bk.length-act2.length)+")",head:[t("rpBooking"),t("rpDate"),t("rpGuardian"),t("rpKids"),t("rpPartyTotal"),t("rpPartyPaid"),t("rpPartyDue")],rows:act2.map(x=>[x.no,x.date,x.name,x.kids,bkTotal(x),bkPaid(x),bkDue(x)]).concat([[t("rpTotal"),"","",act2.reduce((s,x)=>s+x.kids,0),r2(act2.reduce((s,x)=>s+bkTotal(x),0)),r2(act2.reduce((s,x)=>s+bkPaid(x),0)),r2(act2.reduce((s,x)=>s+bkDue(x),0))]]),total:true};
 return {html:rptTable(pk)+rptTable(ps),sheets:[pk,ps],pdf:rptTable(pk)+rptTable(ps)};
};
RT.hrinv=function(a,b){
 const ym=b.slice(0,7),sh=[];
 if(can("hr")){
  const L=payLines(ym),tt=k=>r2(L.reduce((s,l)=>s+l[k],0));
  sh.push({name:t("rpPay"),title:t("rpPay")+" – "+ym,head:[t("empName"),t("rpPresent"),t("payPaidLeave"),t("payOff"),t("rpAbsent"),t("payGross"),t("payBonus"),t("payPen"),t("payAdv"),t("payNet")],rows:L.map(l=>[l.name,l.present,l.paidLeave,l.offPaid||0,l.absent,l.gross,l.bonus||0,l.pen,l.adv,l.net]).concat([[t("rpTotal"),"","","","",tt("gross"),tt("bonus"),tt("pen"),tt("adv"),tt("net")]]),total:true});
 }
 const sold={};S.stockLog.forEach(m=>{const k=dayKey(m.at);if(k>=a&&k<=b&&(m.type==="sale"||m.type==="void"))sold[m.pid]=(sold[m.pid]||0)-m.d});
 sh.push({name:t("rpStockTitle"),title:t("rpStockTitle"),head:[t("name"),t("invStock"),t("invMin"),t("status"),t("rpSold")],rows:S.products.filter(p=>p.track).map(p=>[pname(p),stockOf(p),p.min||0,isLow(p)?t("invLow"):t("invOk"),sold[p.id]||0])});
 return {html:sh.map(rptTable).join(""),sheets:sh,pdf:sh.map(rptTable).join("")};
};
RT.shifts=function(a,b){
 const list=S.shifts.filter(s=>(can("reports")||s.userId===me.id)&&dayKey(s.openedAt)>=a&&dayKey(s.openedAt)<=b).sort((x,y)=>y.openedAt-x.openedAt);
 const sh={name:t("rp_shifts"),head:[t("rpShiftNo"),t("rpUser"),t("rpOpened"),t("rpClosed"),t("rpOpening"),t("rpInv"),t("rpGross"),t("rpCash"),t("rpCard"),t("rpWallet"),t("rpCredit"),t("rpExpected"),t("rpCounted"),t("rpDiff")],
  rows:list.map(s=>{const st=shiftStats(s),u=S.users.find(x=>x.id===s.userId);return [s.no,u?u.name:"",fDate(s.openedAt)+" "+fTime(s.openedAt),s.closedAt?fDate(s.closedAt)+" "+fTime(s.closedAt):"–",s.openingCash,st.cnt,st.sales,st.net.cash,st.net.card,st.net.wallet,st.credit,s.status==="closed"?s.expected:st.expected,s.status==="closed"?s.counted:"–",s.status==="closed"?s.diff:"–"]})};
 return {html:rptTable(sh),sheets:[sh],pdf:rptTable(sh)};
};
RT.top=function(a,b){
 const m={};
 S.invoices.forEach(i=>{if(i.void)return;const k=dayKey(i.createdAt);if(k<a||k>b)return;i.lines.forEach(l=>{if(l.type!=="cafe"&&l.type!=="game"&&!pcatsCustom().some(c=>c.id===l.type))return;const q=l.qty-(l.ret||0);if(q<=0)return;const e=m[l.name]=m[l.name]||{name:l.name,type:l.type,q:0,rev:0};e.q+=q;e.rev=r2(e.rev+q*l.price)})});
 const arr=Object.values(m).sort((x,y)=>y.q-x.q||y.rev-x.rev),tq=arr.reduce((s,e)=>s+e.q,0),tr=r2(arr.reduce((s,e)=>s+e.rev,0));
 const sh={name:t("rp_top"),head:["#",t("name"),t("category"),t("rpQty"),t("rpGross"),"%"],rows:arr.map((e,i)=>[i+1,e.name,pcatName(e.type),e.q,e.rev,tr?Math.round(e.rev/tr*1000)/10:0]).concat([["",t("rpTotal"),"",tq,tr,tr?100:0]]),total:true};
 const chart=arr.length?'<div class="card"><h3>'+t("rp_top")+"</h3>"+barSvg(arr.slice(0,10).map(e=>e.name.slice(0,9)),arr.slice(0,10).map(e=>e.q))+"</div>":"";
 return {html:chart+rptTable(sh),sheets:[sh],pdf:rptTable(sh)};
};
RT.qc=function(a,b){
 const items=S.qcItems.filter(x=>x.active),rows=eachDay(a,b).map(d=>{const lg=S.qcLogs[d]||{},n=items.filter(x=>lg[x.id]).length;return [d,n,items.length,items.length-n,items.length?Math.round(n/items.length*100):0]});
 const sh={name:t("rp_qc"),head:[t("rpDate"),t("rpQcDone"),t("rpQcTotal"),t("rpQcUndone"),"%"],rows:rows};
 return {html:rptTable(sh),sheets:[sh],pdf:rptTable(sh)};
};
RT.gc=function(a,b){
 const rows=[],AV=allVisits();
 S.guardians.slice().sort((x,y)=>x.name.localeCompare(y.name,"ar")).forEach(g=>{
  const bal=Math.round(pkgAvail(g.id)/6)/10;
  const kids=S.children.filter(c=>c.guardianId===g.id);
  (kids.length?kids:[null]).forEach(c=>{
   const vs=c?AV.filter(v=>v.childId===c.id):[],inP=vs.filter(v=>{const k=dayKey(v.checkIn);return k>=a&&k<=b}).length,last=vs.reduce((m,v)=>Math.max(m,v.checkIn),0);
   rows.push([g.name,phonesTxt(g),c?c.name:"",c?c.age:"",inP,vs.length,last?dayKey(last):"–",bal]);
  });
 });
 const sh={name:t("rp_gc"),head:[t("rpGuardian"),t("rpPhone"),t("rpChild"),t("rpAge"),t("rpVisitsP"),t("rpVisitsAll"),t("rpLastVisit"),t("rpPkgBal")],rows:rows.map((r,i)=>r)};
 const kp='<div class="kpis">'+kpi(t("guardians"),S.guardians.length)+kpi(t("rpGcCount"),S.children.length)+"</div>";
 return {html:kp+rptTable(sh),sheets:[sh],pdf:kp+rptTable(sh)};
};
RT.history=function(){return {html:'<div id="hhost"></div>',host:true}};
/* ============ Daily expenses (cash drawer) ============ */
Object.assign(D,{
 expTitle:["المصروفات","Expenses"],expAdd:["تسجيل مصروف","Add expense"],expCat:["الفئة","Category"],expAmount:["المبلغ","Amount"],expNote:["البيان / ملاحظة","Description / note"],
 expDay:["مصروفات اليوم","Expenses of the day"],expTotal:["إجمالي المصروفات","Total expenses"],expVoid:["إلغاء","Cancel"],expVoided:["ملغي","Cancelled"],expVoidTitle:["إلغاء مصروف","Cancel expense"],
 expVoidReason:["سبب الإلغاء","Reason"],expVoidDo:["تأكيد الإلغاء","Confirm cancel"],expNoShift:["افتح وردية أولًا لتسجيل مصروف نقدي من الدرج","Open a shift first to record a cash expense"],
 expOver:["المبلغ أكبر من النقدية المتوقعة في الدرج. متابعة؟","Amount exceeds expected cash in the drawer. Continue?"],expBad:["اكتب مبلغًا صحيحًا واختر الفئة","Enter a valid amount and choose a category"],
 expNeedNote:["اكتب بيان المصروف","Enter a description"],expClosedShift:["الوردية مغلقة؛ يلغيه مدير العمليات فقط","Shift is closed; only the operations manager can cancel it"],
 expShift:["مصروفات الوردية (من الدرج)","Shift expenses (from drawer)"],rp_exp:["المصروفات","Expenses"],rpExpCat:["حسب الفئة","By category"],rpExpDay:["حسب اليوم","By day"],rpExpList:["تفاصيل المصروفات","Expense details"],
 ec_clean:["نظافة","Cleaning"],ec_maint:["صيانة","Maintenance"],ec_hosp:["ضيافة","Hospitality"],ec_supplies:["مستلزمات","Supplies"],ec_transport:["مواصلات","Transport"],ec_labor:["عمالة يومية","Daily labor"],ec_other:["أخرى","Other"],
 userDel:["حذف","Delete"],waBtn:["واتساب","WhatsApp"],waNoPhone:["لا يوجد رقم موبايل صالح","No valid phone number"],waCardT:["رسائل واتساب لأولياء الأمور","WhatsApp messages"],waCardHelp:["الزر يفتح واتساب برسالة جاهزة ثم تضغط إرسال بنفسك، ولا يُرسل شيء تلقائيًا. المتغيرات: {guardian} {child} {venue} {left} {late} {time} {date} {total} {due} {hours} {until}","The button opens WhatsApp with a ready message; you press send yourself. Nothing is sent automatically. Variables: {guardian} {child} {venue} {left} {late} {time} {date} {total} {due} {hours} {until}"],waReset:["استرجاع الرسائل الافتراضية","Restore defaults"],waSaved:["تم حفظ الرسائل","Messages saved"],
wn_soon:["رسالة قرب انتهاء الوقت","Time almost up"],wn_over:["رسالة تجاوز الوقت","Time exceeded"],wn_in:["رسالة تأكيد الدخول","Entry confirmation"],wn_out:["رسالة تأكيد الخروج","Exit confirmation"],wn_party:["رسالة تذكير بالحفلة","Party reminder"],wn_pkg:["رسالة رصيد الباقة","Package balance"],
grpExit:["خروج الأطفال معًا","Check out together"],grpTitle:["خروج الأطفال معًا","Group check-out"],grpTotal:["الإجمالي للجميع","Total for all"],hideOut:["إخفاء النافد","Hide out of stock"],showOut:["إظهار النافد","Show out of stock"],del:["حذف","Delete"],prodDelHas:["لا يمكن حذف منتج بيع من قبل — عطّله بدل الحذف (إلغاء تفعيل)","A product that was sold can't be deleted — deactivate it instead"],prodDelConf:["حذف هذا المنتج نهائيًا؟","Delete this product permanently?"],prodDeleted:["تم حذف المنتج","Product deleted"],userDelHas:["للمستخدم سجلات (فواتير أو ورديات أو مصروفات). عطّله بدل حذفه","This user has records. Deactivate instead of deleting"],userDelConf:["حذف المستخدم نهائيًا؟","Delete this user permanently?"],
 userDelLast:["لا يمكن حذف آخر حساب إدارة","Cannot delete the last management account"],userDelSelf:["لا يمكنك حذف حسابك أنت","You cannot delete your own account"],userDeleted:["تم حذف المستخدم","User deleted"]
});
const EXP_CATS=["clean","maint","hosp","supplies","transport","labor","other"];
let exDay=null;
views.expenses=function(){
 if(!exDay)exDay=dayKey(Date.now());
 const today=dayKey(Date.now()),sh=curShift(),list=(S.expenses||[]).filter(x=>dayKey(x.at)===exDay).sort((a,b)=>b.at-a.at);
 const tot=r2(list.filter(x=>!x.void).reduce((s,x)=>s+x.amount,0));
 const form=exDay!==today?"":(sh?'<div class="card"><h3>'+t("expAdd")+'</h3><div class="grid2" style="gap:8px"><label>'+t("expCat")+'<select id="xc">'+EXP_CATS.map(c=>'<option value="'+c+'">'+t("ec_"+c)+"</option>").join("")+'</select></label><label>'+t("expAmount")+'<input id="xa" type="number" min="0" step="0.5" inputmode="decimal"></label></div><label>'+t("expNote")+'<input id="xn"></label><button class="btn pri" onclick="expAdd()">'+t("expAdd")+"</button></div>":'<div class="alertbox soon">'+t("expNoShift")+"</div>");
 $("#view").innerHTML='<div class="bar"><h2>'+t("expTitle")+'</h2><input type="date" style="max-width:200px" value="'+exDay+'" onchange="exDay=this.value||exDay;render()"></div>'+form+
  '<div class="card"><div class="bar"><h3>'+t("expDay")+'</h3><b>'+t("expTotal")+": "+money(tot)+'</b></div><table><thead><tr><th>'+t("time")+"</th><th>"+t("cashier")+"</th><th>"+t("expCat")+"</th><th>"+t("expNote")+"</th><th>"+t("expAmount")+"</th><th></th></tr></thead><tbody>"+
  (list.length?list.map(x=>{const u=S.users.find(y=>y.id===x.userId);return "<tr"+(x.void?' style="opacity:.55"':"")+"><td>"+fTime(x.at)+"</td><td>"+esc(u?u.name:"")+"</td><td>"+t("ec_"+x.cat)+"</td><td>"+esc(x.note||"")+(x.void?'<div class="muted">'+t("expVoided")+": "+esc(x.void.reason||"")+"</div>":"")+"</td><td>"+money(x.amount)+"</td><td>"+(!x.void&&can("approve")?'<button class="btn sm" onclick="expVoidAsk(\''+x.id+"')\">"+t("expVoid")+"</button>":(x.void?'<span class="tag over">'+t("expVoided")+"</span>":""))+"</td></tr>"}).join(""):'<tr><td colspan="6" class="muted">'+t("none")+"</td></tr>")+"</tbody></table></div>";
};
function expAdd(){
 if(!requireShift())return;
 const sh=curShift(),a=r2(parseFloat(norm($("#xa").value))),cat=$("#xc").value,note=$("#xn").value.trim();
 if(!(a>0)||EXP_CATS.indexOf(cat)<0){toast(t("expBad"));return}
 if(!note){toast(t("expNeedNote"));return}
 if(a>shiftStats(sh).expected&&!confirm(t("expOver")))return;
 S.expenses=S.expenses||[];S.expenses.push({id:uid(),at:Date.now(),shift:sh.id,userId:me.id,cat:cat,amount:a,note:note});
 log("expense",t("ec_"+cat)+" "+a+" – "+note);save();toast(t("saved"));render();
}
function expVoidAsk(id){
 const x=(S.expenses||[]).find(y=>y.id===id);if(!x||x.void||!can("approve"))return;
 const open=curShift();
 if(!(open&&open.id===x.shift)&&!can("hr")){toast(t("expClosedShift"));return}
 modal("<h3>"+t("expVoidTitle")+'</h3><div class="line"><span>'+t("ec_"+x.cat)+"</span><b>"+money(x.amount)+'</b></div><label>'+t("expVoidReason")+'<input id="xr"></label><div class="row"><button class="btn bad" onclick="expVoidDo(\''+id+"')\">"+t("expVoidDo")+'</button><button class="btn" onclick="closeModal()">'+t("cancel")+"</button></div>");
}
function expVoidDo(id){
 const x=(S.expenses||[]).find(y=>y.id===id),r=$("#xr").value.trim();if(!x||x.void)return;
 if(!r){toast(t("needReason"));return}
 x.void={by:me.id,at:Date.now(),reason:r};log("void expense",t("ec_"+x.cat)+" "+x.amount+" – "+r);save();closeModal();render();
}
RT.exp=function(a,b){
 const all=(S.expenses||[]).filter(x=>dayKey(x.at)>=a&&dayKey(x.at)<=b),ok=all.filter(x=>!x.void),tot=r2(ok.reduce((s,x)=>s+x.amount,0));
 const byC={},byD={};ok.forEach(x=>{byC[x.cat]=r2((byC[x.cat]||0)+x.amount);const d=dayKey(x.at);byD[d]=r2((byD[d]||0)+x.amount)});
 const sh=[
  {name:t("rpExpCat"),title:t("rpExpCat"),head:[t("expCat"),t("expAmount")],rows:EXP_CATS.filter(c=>byC[c]).map(c=>[t("ec_"+c),byC[c]]).concat([[t("rpTotal"),tot]]),total:true},
  {name:t("rpExpDay"),title:t("rpExpDay"),head:[t("rpDate"),t("expAmount")],rows:Object.keys(byD).sort().map(d=>[d,byD[d]]).concat([[t("rpTotal"),tot]]),total:true},
  {name:t("rpExpList"),title:t("rpExpList"),head:[t("rpDate"),t("time"),t("rpUser"),t("expCat"),t("expNote"),t("expAmount"),t("status")],rows:all.sort((x,y)=>x.at-y.at).map(x=>{const u=S.users.find(y=>y.id===x.userId);return [dayKey(x.at),fTime(x.at),u?u.name:"",t("ec_"+x.cat),x.note||"",x.amount,x.void?t("expVoided")+": "+(x.void.reason||""):""]})}
 ];
 return {html:sh.map(rptTable).join(""),sheets:sh,pdf:sh.map(rptTable).join("")};
};
/* ---- delete user (only when there are no records tied to them) ---- */
function userRefs(id){
 syncOut();let n=0;
 DB.branches.forEach(b=>{const s=DB.byBranch[b.id]||{};
  n+=(s.invoices||[]).filter(i=>i.cashier===id).length+(s.visits||[]).filter(v=>v.cashier===id).length+(s.shifts||[]).filter(x=>x.userId===id||x.closedBy===id).length+(s.expenses||[]).filter(x=>x.userId===id).length});
 return n;
}
function userDelete(id){
 if(!can("users"))return;
 const u=S.users.find(x=>x.id===id);if(!u)return;
 if(u.id===me.id){toast(t("userDelSelf"));return}
 if(u.role==="admin"&&me.role!=="admin"){toast("—");return}
 const mgmt=x=>x.active&&(x.role==="ops"||x.role==="admin");
 if(mgmt(u)&&!S.users.some(x=>x.id!==u.id&&mgmt(x))){toast(t("userDelLast"));return}
 if(userRefs(id)>0){toast(t("userDelHas"));return}
 if(!confirm(t("userDelConf")+"\n"+u.name))return;
 S.users.splice(S.users.indexOf(u),1);log("delete user",u.name+" ("+u.role+")");save();toast(t("userDeleted"));render();
}
const RTABS=[["dash","reports","rp_dash"],["sales","reports","rp_sales"],["visits","reports","rp_visits"],["pp","reports","rp_pp"],["top","reports","rp_top"],["qc","reports","rp_qc"],["hrinv","reports","rp_hrinv"],["branches","branches","rp_branches"],["history","history","rp_history"],["shifts","reportShift","rp_shifts"],["exp","reports","rp_exp"]];
function repPreset(p){
 const td=dayKey(Date.now());
 if(p==="today")R.from=R.to=td;
 else if(p==="yest")R.from=R.to=addDays(td,-1);
 else if(p==="7"){R.from=addDays(td,-6);R.to=td}
 else if(p==="month"){R.from=td.slice(0,7)+"-01";R.to=td}
 else if(p==="prev"){const pm=monthAdd(td.slice(0,7),-1),dd=monthDays(pm);R.from=dd[0];R.to=dd[dd.length-1]}
 render();
}
views.reports=function(){
 const tabs=RTABS.filter(x=>can(x[1]));
 if(!tabs.length){$("#view").innerHTML="";return}
 if(!R.tab||!tabs.some(x=>x[0]===R.tab))R.tab=tabs[0][0];
 const td=dayKey(Date.now());if(!R.from){R.from=td.slice(0,7)+"-01";R.to=td}
 if(R.from>R.to){const x=R.from;R.from=R.to;R.to=x}
 const o=RT[R.tab](R.from,R.to);window._rep=o.host?null:o;
 $("#view").innerHTML='<div class="bar"><h2>'+t("reportsTitle")+'</h2>'+(o.host?"":'<div class="row" style="margin:0"><button class="btn sm" onclick="repXlsx()">'+t("rpXlsx")+'</button><button class="btn sm" onclick="repPdf()">'+t("rpPdf")+'</button></div>')+'</div><div class="row" style="margin:0 0 10px">'+tabs.map(x=>'<button class="btn '+(R.tab===x[0]?"pri":"")+'" onclick="R.tab=\''+x[0]+'\';render()">'+t(x[2])+"</button>").join("")+'</div>'+(o.host?"":'<div class="bar"><div class="row" style="margin:0"><label style="margin:0">'+t("rpFrom")+' <input type="date" id="rf" value="'+R.from+'" onchange="R.from=this.value||R.from;render()"></label><label style="margin:0">'+t("rpTo")+' <input type="date" id="rt" value="'+R.to+'" onchange="R.to=this.value||R.to;render()"></label></div><div class="row" style="margin:0">'+[["today","rpToday"],["yest","rpYest"],["7","rp7"],["month","rpMonth"],["prev","rpPrevMonth"]].map(x=>'<button class="btn sm" onclick="repPreset(\''+x[0]+'\')">'+t(x[1])+"</button>").join("")+"</div></div>")+o.html;
 if(o.host){window._hT=$("#hhost");try{views.history()}finally{window._hT=null}}
}
function gcData(){const td=dayKey(Date.now());return RT.gc("2000-01-01",td)}
function gcXlsx(){if(!can("reports"))return;const o=gcData();log("export xlsx","guardians");save();downloadXlsx(t("rp_gc")+" "+dayKey(Date.now())+".xlsx",o.sheets)}
function gcPdf(){if(!can("reports"))return;const o=gcData();log("print report","guardians");save();printA4("<h1>"+esc(S.settings.venue)+"</h1><h2>"+esc(t("rp_gc")+" "+dayKey(Date.now()))+"</h2>"+o.pdf)}
function repName(){return t("rp_"+R.tab)+" "+R.from+(R.to!==R.from?" _ "+R.to:"")}
function repXlsx(){const o=window._rep;if(!o)return;log("export xlsx",R.tab+" "+R.from+" "+R.to);save();downloadXlsx(repName().replace(/[\\\/:*?"<>|]/g,"-")+".xlsx",o.sheets)}
function repPdf(){const o=window._rep;if(!o)return;log("print report",R.tab+" "+R.from+" "+R.to);save();printA4("<h1>"+esc(S.settings.venue)+"</h1><h2>"+esc(repName())+"</h2>"+o.pdf)}

/* ============ Phase 8: branches, backups, audit ============ */
function branchName(id){return (DB.branches.find(b=>b.id===id)||{name:id}).name}
function branchBadge(){
 if(DB.branches.length<2)return "";
 if(can("branches"))return '<select class="brsel" onchange="switchBranch(this.value)" title="'+t("branchLbl")+'">'+DB.branches.map(b=>'<option value="'+b.id+'" '+(b.id===CUR?"selected":"")+">"+esc(b.name)+"</option>").join("")+"</select>";
 return '<span class="who">'+esc(branchName(CUR))+"</span>";
}
function switchBranch(id){
 if(!can("branches")||id===CUR||!DB.branches.some(b=>b.id===id))return;
 log("leave branch",branchName(CUR)+" → "+branchName(id));save();
 closeModal();enterBranch(id);log("enter branch",branchName(id));save();render();
}
function insideAny(cid){return allVisits().some(v=>v.status==="in"&&v.childId===cid)}
function allVisits(){syncOut();return DB.branches.reduce((a,b)=>a.concat(DB.byBranch[b.id].visits||[]),[])}
function withBranch(id,fn){syncOut();const keep=S,tmp=compose(id);migrate(tmp);S=tmp;try{return fn()}finally{S=keep}}

/* ---- branches tab (settings) ---- */
views.branchesBody=function(){
 const others=DB.branches.filter(b=>b.id!==CUR);
 (window._hT||$("#view")).innerHTML='<div class="card"><h3>'+t("brTitle")+'</h3><div class="muted">'+t("brNote")+'</div><table><tbody>'+DB.branches.map(b=>'<tr><td><input id="bn_'+b.id+'" value="'+esc(b.name)+'"></td><td>'+(b.id===CUR?'<span class="tag ok">'+t("brCurrent")+"</span>":"")+'</td><td><button class="btn sm" onclick="brRename(\''+b.id+'\')">'+t("brRename")+"</button> "+(can("reset")&&b.id!==CUR&&DB.branches.length>1?'<button class="btn sm bad" onclick="brDelete(\''+b.id+'\')">'+t("brDelete")+"</button>":"")+"</td></tr>").join("")+'</tbody></table><div class="row"><input id="bnew" placeholder="'+t("brName")+'" style="max-width:260px"><button class="btn pri" onclick="brAdd()">'+t("brAdd")+'</button></div></div>'+
  (others.length?'<div class="card"><h3>'+t("brCopyTitle")+'</h3><div class="row"><label style="margin:0">'+t("brCopyFrom")+' <select id="cps">'+others.map(b=>'<option value="'+b.id+'">'+esc(b.name)+"</option>").join("")+'</select></label><button class="btn" onclick="brCopyPrices()">'+t("brCopyBtn")+"</button></div></div>":"");
};
function brRename(id){
 const n=$("#bn_"+id).value.trim();if(!can("branches"))return;
 if(!n){toast(t("needName"));return}
 if(DB.branches.some(b=>b.id!==id&&b.name===n)){toast(t("brDupName"));return}
 const old=branchName(id);DB.branches.find(b=>b.id===id).name=n;log("rename branch",old+" → "+n);save();render();
}
function brDelete(id){
 if(!can("reset"))return;
 if(id===CUR||DB.branches.length<2){toast(t("brDelLast"));return}
 const us=S.users.filter(u=>u.branch===id);
 if(us.length){toast(t("brDelUsers")+" "+us.map(u=>u.name).join("، "));return}
 const nm=branchName(id);if(prompt(t("brDelType"))!==nm)return;
 makeBackup("pre");
 delete DB.byBranch[id];DB.branches=DB.branches.filter(b=>b.id!==id);
 log("delete branch",nm);save();toast(t("brDelDone"));render();
}
function brAdd(){
 if(!can("branches"))return;
 const n=$("#bnew").value.trim();if(!n){toast(t("needName"));return}
 if(DB.branches.some(b=>b.name===n)){toast(t("brDupName"));return}
 syncOut();const id="b"+Date.now().toString(36);
 DB.byBranch[id]=blankBranchState(splitState(S).br,true);DB.branches.push({id:id,name:n});
 log("add branch",n);save();toast(t("brAddDone"));render();
}
function brCopyPrices(){
 if(!can("branches"))return;
 const src=$("#cps").value,sp=(DB.byBranch[src]||{}).products||[];let n=0;
 S.products.forEach(p=>{const q=sp.find(x=>x.name.ar===p.name.ar&&x.cat===p.cat);if(q&&q.price!==p.price){p.price=q.price;n++}});
 log("copy prices",branchName(src)+" → "+branchName(CUR)+" ("+n+")");save();toast(t("brCopyDone")+" "+n);render();
}

/* ---- backups ---- */
function getBackups(){try{const a=JSON.parse(localStorage.getItem(BKKEY)||"[]");return Array.isArray(a)?a:[]}catch(e){return []}}
function putBackups(a){
 while(true){try{localStorage.setItem(BKKEY,JSON.stringify(a));return true}catch(e){if(a.length<=1)return false;a.shift()}}
}
function makeBackup(kind){
 syncOut();const a=getBackups();
 a.push({at:Date.now(),kind:kind,by:me?me.name:"",data:JSON.stringify(DB)});
 while(a.length>5)a.shift();
 return putBackups(a);
}
function autoBackup(){
 if(!me)return;const a=getBackups(),last=a.length?a[a.length-1].at:0;
 if(Date.now()-last>=3600000)makeBackup("auto");
}
function downloadBlob(fn,blob){
 const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download=fn;document.body.appendChild(a);a.click();
 setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove()},1000);
}
function bkNow(){if(!can("settings"))return;const ok=makeBackup("manual");log("backup",ok?"manual":"failed");save();toast(t(ok?"bkDone":"bkFail"));render()}
function bkDownload(){
 if(!can("settings"))return;DB.meta=DB.meta||{};DB.meta.lastDownload=Date.now();syncOut();
 const d=new Date(),k=dayKey(d.getTime())+"-"+String(d.getHours()).padStart(2,"0")+String(d.getMinutes()).padStart(2,"0");
 log("backup download",k);save();
 downloadBlob("kids-area-backup-"+k+".json",new Blob([JSON.stringify(DB)],{type:"application/json"}));
}
function bkValid(d){
 return !!d&&d.v===2&&Array.isArray(d.branches)&&d.branches.length>0&&d.shared&&Array.isArray(d.shared.users)&&d.shared.users.length>0&&d.byBranch&&d.branches.every(b=>b&&b.id&&d.byBranch[b.id]&&typeof d.byBranch[b.id]==="object");
}
function restoreDB(text,label){
 if(!can("reset"))return false;
 let d;try{d=JSON.parse(text)}catch(e){d=null}
 if(!bkValid(d)){toast(t("bkBadFile"));return false}
 if(!confirm(t("bkConfirm")))return false;
 makeBackup("pre");
 DB=d;const uid0=me.id;
 CUR=DB.branches.some(b=>b.id===CUR)?CUR:DB.branches[0].id;
 S=compose(CUR);migrate(S);syncOut();
 me=S.users.find(u=>u.id===uid0&&u.active)||null;
 if(me){bindBranch();log("restore backup",label||"")}
 else{try{sessionStorage.removeItem("ls_user")}catch(e){}}
 save();view="present";toast(t("bkRestored"));render();return true;
}
function bkFile(inp){
 const f=inp.files&&inp.files[0];if(!f)return;
 const r=new FileReader();r.onload=()=>{restoreDB(String(r.result),f.name);inp.value=""};r.readAsText(f);
}
function bkRestoreAt(i){const a=getBackups();if(a[i])restoreDB(a[i].data,"auto "+fDate(a[i].at)+" "+fTime(a[i].at))}
views.backupBody=function(){
 const a=getBackups(),kinds={auto:"bkAuto",manual:"bkManual",pre:"bkPre"};
 (window._hT||$("#view")).innerHTML='<div class="card"><h3>'+t("bkTitle")+'</h3><div class="muted">'+t("bkWarn")+'</div><div class="kpis">'+kpi(t("bkLast"),a.length?fDate(a[a.length-1].at)+" "+fTime(a[a.length-1].at):t("bkNone"))+kpi(t("bkCount"),a.length)+'</div><div class="row"><button class="btn pri" onclick="bkNow()">'+t("bkNow")+'</button><button class="btn" onclick="bkDownload()">'+t("bkDownload")+"</button>"+(can("reset")?'<label class="btn" style="cursor:pointer">'+t("bkRestoreFile")+'<input type="file" id="bkf" accept=".json,application/json" style="display:none" onchange="bkFile(this)"></label>':"")+'</div></div><div class="card"><h3>'+t("bkList")+'</h3><table><thead><tr><th>'+t("time")+"</th><th>"+t("bkKind")+"</th><th>"+t("user")+"</th><th>"+t("bkSize")+"</th><th></th></tr></thead><tbody>"+
  (a.length?a.map((x,i)=>"<tr><td>"+fDate(x.at)+" "+fTime(x.at)+"</td><td>"+t(kinds[x.kind]||"bkManual")+"</td><td>"+esc(x.by||"")+"</td><td>"+Math.round(x.data.length/1024)+" KB</td><td>"+(can("reset")?'<button class="btn sm" onclick="bkRestoreAt('+i+')">'+t("bkRestore")+"</button>":"")+"</td></tr>").reverse().join(""):'<tr><td colspan="5" class="muted">'+t("bkNone")+"</td></tr>")+"</tbody></table></div>";
};
setInterval(autoBackup,60000);

/* ---- branch comparison report ---- */
RT.branches=function(a,b){
 const rows=DB.branches.map(br=>{const T=withBranch(br.id,()=>repData(a,b)).tot;return [br.name,T.inv,T.sales,T.disc,T.refunds,T.net,T.cash,T.card,T.wallet,T.credit,T.visits]});
 const tot=rows.reduce((s,r)=>{r.forEach((v,i)=>{if(i)s[i]=r2((s[i]||0)+v)});return s},[t("rpTotal")]);
 const sh={name:t("rp_branches"),head:[t("rpBranch"),t("rpInv"),t("rpGross"),t("rpDisc"),t("rpRef"),t("rpNet"),t("rpCash"),t("rpCard"),t("rpWallet"),t("rpCredit"),t("rpVisitsN")],rows:rows.concat([tot]),total:true};
 const chart='<div class="card"><h3>'+t("rpNet")+"</h3>"+barSvg(rows.map(r=>r[0]),rows.map(r=>r[5]))+"</div>";
 return {html:chart+rptTable(sh),sheets:[sh],pdf:rptTable(sh)};
};

/* ---- audit log with filters + export ---- */
function auditList(){
 const A=window._af||(window._af={u:"",q:"",from:"",to:""}),q=A.q.toLowerCase();
 return S.audit.filter(a=>(!A.u||a.user===A.u)&&(!q||(a.action+" "+a.details).toLowerCase().includes(q))&&(!A.from||dayKey(a.ts)>=A.from)&&(!A.to||dayKey(a.ts)<=A.to)).reverse();
}
views.audit=function(){
 const A=window._af||(window._af={u:"",q:"",from:"",to:""}),list=auditList(),users=Array.from(new Set(S.audit.map(a=>a.user))).sort();
 $("#view").innerHTML='<div class="bar"><h2>'+t("audit")+(DB.branches.length>1?" – "+esc(branchName(CUR)):"")+'</h2><div class="row" style="margin:0"><button class="btn sm" onclick="auditXlsx()">'+t("auditXlsx")+'</button><button class="btn sm" onclick="auditPdf()">'+t("auditPrint")+'</button></div></div><div class="card"><div class="row" style="margin:0"><label style="margin:0">'+t("auditUser")+' <select onchange="_af.u=this.value;render()"><option value="">'+t("auditAll")+"</option>"+users.map(u=>'<option '+(A.u===u?"selected ":"")+'value="'+esc(u)+'">'+esc(u)+"</option>").join("")+'</select></label><input id="aq" style="max-width:240px" placeholder="'+t("auditSearch")+'" value="'+esc(A.q)+'" onchange="_af.q=this.value;render()"><label style="margin:0">'+t("rpFrom")+' <input type="date" value="'+A.from+'" onchange="_af.from=this.value;render()"></label><label style="margin:0">'+t("rpTo")+' <input type="date" value="'+A.to+'" onchange="_af.to=this.value;render()"></label><span class="muted">'+t("auditShown")+": "+Math.min(list.length,500)+" / "+list.length+'</span></div></div><div class="card"><table><thead><tr><th>'+t("time")+"</th><th>"+t("user")+"</th><th>"+t("action")+"</th><th>"+t("details")+"</th></tr></thead><tbody>"+
 list.slice(0,500).map(a=>"<tr><td>"+fDate(a.ts)+" "+fTime(a.ts)+"</td><td>"+esc(a.user)+"</td><td>"+esc(a.action)+"</td><td>"+esc(a.details)+"</td></tr>").join("")+"</tbody></table></div>";
};
function auditSheet(){return {name:t("audit"),head:[t("time"),t("user"),t("action"),t("details")],rows:auditList().map(a=>[fDate(a.ts)+" "+fTime(a.ts),a.user,a.action,a.details])}}
function auditXlsx(){if(!can("audit"))return;log("export xlsx","audit");save();downloadXlsx(t("audit")+" "+branchName(CUR)+" "+dayKey(Date.now())+".xlsx",[auditSheet()])}
function auditPdf(){if(!can("audit"))return;const sh=auditSheet();log("print report","audit");save();printA4("<h1>"+esc(S.settings.venue)+"</h1><h2>"+esc(t("audit")+" – "+branchName(CUR))+"</h2>"+rptTable(sh))}

/* ============ Phase 10: shared database sync (Supabase) ============ */
Object.assign(D,{
 syTitle:["قاعدة البيانات المشتركة (Supabase)","Shared database (Supabase)"],
 syUrl:["عنوان المشروع (Project URL)","Project URL"],syKey:["المفتاح العام (publishable key)","Publishable key"],
 syEmail:["بريد حساب الجهاز","Device account email"],syPass:["كلمة مرور حساب الجهاز","Device account password"],
 syTest:["اختبار الاتصال","Test connection"],syUp:["رفع بياناتي (أول جهاز)","Upload my data (first device)"],
 syJoin:["سحب البيانات من القاعدة (جهاز آخر)","Download from database (other device)"],
 syNow:["مزامنة الآن","Sync now"],syOff:["فصل عن القاعدة","Disconnect"],
 syOk:["متزامن","Synced"],syPend:["قيد الرفع","Pending"],syOffl:["دون اتصال","Offline"],syAuth:["سجّل الدخول من جديد","Sign in again"],
 syLast:["آخر مزامنة","Last sync"],syQueue:["عمليات بانتظار الرفع","Waiting to upload"],syNever:["لم تتم بعد","Never"],
 syConnOk:["الاتصال سليم","Connection OK"],syNoTable:["الجداول غير موجودة: شغّل ملف المخطط في SQL Editor","Tables missing: run the schema file in SQL Editor"],
 syNoStaff:["الحساب غير مربوط بجدول staff (انظر ملف الصلاحيات)","Account is not linked to the staff table"],
 syBadLogin:["بيانات الدخول غير صحيحة","Wrong email or password"],syFill:["أكمل الحقول أولًا","Fill all fields first"],
 syEmpty:["القاعدة فارغة: ارفع البيانات من الجهاز الأول أولًا","Database is empty: upload from the first device first"],
 syConfUp:["سيتم رفع كل بيانات هذا الجهاز للقاعدة. متابعة؟","Upload all data from this device? Continue?"],
 syConfJoin:["سيتم استبدال بيانات هذا الجهاز ببيانات القاعدة. متابعة؟","This device's data will be replaced by the database. Continue?"],
 syWarn:["كل جهاز يدخل بحساب Supabase خاص به (لكل فرع حساب، وللإدارة حساب). الرموز السرية للتطبيق ما زالت محفوظة كنص داخل البيانات.","Each device signs in with its own Supabase account. App PINs are still stored as plain text inside the data."]
});
const SYK="ls_sync",SYQ="ls_sync_q",SYH="ls_sync_h";
function syLoad(k,d){try{const v=JSON.parse(localStorage.getItem(k)||"null");return v||d}catch(e){return d}}
let SY=syLoad(SYK,{url:"",key:"",email:"",on:false,tok:null,ref:null,lastPull:"",last:0,err:""});
let SYQQ=syLoad(SYQ,{}),SYHH=syLoad(SYH,{});
let SYSTAT="off",syBusy=false,syTm=null;
function sySave(){try{localStorage.setItem(SYK,JSON.stringify(SY));localStorage.setItem(SYQ,JSON.stringify(SYQQ));localStorage.setItem(SYH,JSON.stringify(SYHH))}catch(e){}}
function canon(v){if(v===null||typeof v!=="object")return JSON.stringify(v)+"";if(Array.isArray(v))return "["+v.map(canon).join(",")+"]";return "{"+Object.keys(v).sort().filter(k=>v[k]!==undefined).map(k=>JSON.stringify(k)+":"+canon(v[k])).join(",")+"}"}
function hsh(s){let h=5381,i=s.length;while(i)h=(h*33)^s.charCodeAt(--i);return (h>>>0).toString(36)+":"+s.length}
function syItemized(v){return Array.isArray(v)&&v.every(x=>x&&typeof x==="object"&&typeof x.id==="string"&&x.id.indexOf("|")<0)}
function syEach(fn){
 fn("_meta","branches",null,{_w:DB.branches});
 const scan=(obj,br)=>Object.keys(obj).forEach(k=>{const v=obj[k],pre=br?br+":":"";
  if(v===undefined)return;
  if(syItemized(v))v.forEach(x=>fn(k,pre+x.id,br,x));else fn(k,pre+"_",br,{_w:v})});
 scan(DB.shared,null);DB.branches.forEach(b=>{if(syAllowed(b.id))scan(DB.byBranch[b.id]||{},b.id)});
}
function syAllowed(b){return !SY.branch||b===SY.branch}
function syBr(id){const i=id.indexOf(":");if(i<0)return null;const b=id.slice(0,i);return DB.branches.some(x=>x.id===b)?b:null}
function syDiff(){
 syncOut();const seen={};
 syEach((c,id,br,d)=>{const key=c+"|"+id;seen[key]=1;const h=hsh(canon(d));
  if(SYHH[key]!==h){SYQQ[key]={collection:c,id:id,branch_id:br,data:d,deleted:false};SYHH[key]=h}});
 Object.keys(SYHH).forEach(key=>{if(!seen[key]){const i=key.indexOf("|"),c=key.slice(0,i),id=key.slice(i+1);
  if(id.slice(-2)===":_"||id==="_"||c==="_meta"||!syAllowed(syBr(id)||SY.branch||null)&&syBr(id)){return}
  SYQQ[key]={collection:c,id:id,branch_id:syBr(id),data:{},deleted:true};delete SYHH[key]}});
}
async function syReq(m,path,body,hdr){
 const go=()=>{const h=Object.assign({apikey:SY.key,"Content-Type":"application/json"},hdr||{});if(SY.tok)h.Authorization="Bearer "+SY.tok;
  return fetch(SY.url.replace(/\/+$/,"")+path,{method:m,headers:h,body:body?JSON.stringify(body):undefined})};
 let r=await go();
 if(r.status===401&&SY.ref&&path.indexOf("/auth/")<0){if(await syRefresh())r=await go()}
 const txt=await r.text();let j=null;try{j=txt?JSON.parse(txt):null}catch(e){}
 return {ok:r.ok,status:r.status,json:j,text:txt};
}
async function syRefresh(){
 try{const r=await syReq("POST","/auth/v1/token?grant_type=refresh_token",{refresh_token:SY.ref});
  if(r.ok&&r.json&&r.json.access_token){SY.tok=r.json.access_token;SY.ref=r.json.refresh_token||SY.ref;sySave();return true}}catch(e){}
 SY.tok=null;SY.ref=null;sySave();return false;
}
async function syLogin(email,pw){
 SY.tok=null;const r=await syReq("POST","/auth/v1/token?grant_type=password",{email:email,password:pw});
 if(!r.ok||!r.json||!r.json.access_token)return false;
 SY.tok=r.json.access_token;SY.ref=r.json.refresh_token||null;SY.email=email;sySave();return true;
}
async function syPush(){
 const keys=Object.keys(SYQQ);
 for(let i=0;i<keys.length;i+=200){const part=keys.slice(i,i+200),objs=part.map(k=>SYQQ[k]);
  const r=await syReq("POST","/rest/v1/docs?on_conflict=collection,id",objs.map(q=>({collection:q.collection,id:q.id,branch_id:q.branch_id,data:q.data,deleted:q.deleted})),{Prefer:"resolution=merge-duplicates,return=minimal"});
  if(!r.ok)throw r;
  part.forEach((k,j)=>{if(SYQQ[k]===objs[j])delete SYQQ[k]});sySave();}
}
function syApply(rows){
 let changed=false;
 rows.forEach(row=>{
  const key=row.collection+"|"+row.id;if(SYQQ[key])return;
  const c=row.collection,id=row.id;
  if(c==="_meta"){const h=hsh(canon(row.data));if(SYHH[key]===h)return;
   const bs=row.data&&row.data._w;if(Array.isArray(bs)&&bs.length){DB.branches=bs;bs.forEach(b=>{if(!DB.byBranch[b.id]){const any=DB.byBranch[Object.keys(DB.byBranch)[0]];DB.byBranch[b.id]=blankBranchState(any,true)}});changed=true}
   SYHH[key]=h;return}
  const br=row.branch_id||null,store=br?DB.byBranch[br]:DB.shared;if(!store)return;
  const pre=br?br+":":"";
  if(id===pre+"_"){const h=hsh(canon(row.data));if(SYHH[key]===h)return;
   let nv=row.data?row.data._w:undefined;
   if(c==="seq"&&nv&&store.seq&&typeof nv==="object"){const cur=store.seq;Object.keys(cur).forEach(k=>{if(typeof cur[k]==="number"&&typeof nv[k]==="number")nv[k]=Math.max(nv[k],cur[k]);else if(nv[k]===undefined)nv[k]=cur[k]})}
   store[c]=nv;SYHH[key]=h;changed=true;return}
  const iid=id.slice(pre.length);if(!Array.isArray(store[c]))store[c]=[];
  const arr=store[c],ix=arr.findIndex(x=>x.id===iid);
  if(row.deleted){if(ix>=0){arr.splice(ix,1);changed=true}delete SYHH[key];return}
  const h=hsh(canon(row.data));if(SYHH[key]===h&&ix>=0)return;
  if(ix>=0)arr[ix]=row.data;else arr.push(row.data);SYHH[key]=h;changed=true;
 });
 return changed;
}
let SY_PAGE=1000;
async function syPull(){
 let since=SY.lastPull?new Date(Date.parse(SY.lastPull)-10000).toISOString():"",changed=false,cur=null,maxTs=SY.lastPull;
 /* ترقيم بمؤشر (keyset/cursor): كل صفحة تبدأ بعد آخر صف (updated_at, collection, id) بدل offset، فلا يضيع صف ولا يتكرر لو تغيّرت البيانات أثناء السحب */
 for(;;){
  let q="/rest/v1/docs?select=collection,id,branch_id,data,deleted,updated_at&order=updated_at.asc,collection.asc,id.asc&limit="+SY_PAGE;
  if(cur){const Q=v=>'"'+String(v).replace(/\\/g,"\\\\").replace(/"/g,'\\"')+'"';
   q+="&or="+encodeURIComponent("(updated_at.gt."+Q(cur.ts)+",and(updated_at.eq."+Q(cur.ts)+",collection.gt."+Q(cur.c)+"),and(updated_at.eq."+Q(cur.ts)+",collection.eq."+Q(cur.c)+",id.gt."+Q(cur.id)+"))")}
  else if(since)q+="&updated_at=gte."+encodeURIComponent(since);
  const r=await syReq("GET",q);if(!r.ok)throw r;const rows=r.json||[];
  if(syApply(rows))changed=true;
  rows.forEach(x=>{if(!maxTs||x.updated_at>maxTs)maxTs=x.updated_at});
  if(rows.length<SY_PAGE)break;
  const L=rows[rows.length-1];cur={ts:L.updated_at,c:L.collection,id:L.id};
 }
 SY.lastPull=maxTs;
 if(changed){S=compose(CUR);migrate(S);if(me){const u=S.users.find(x=>x.id===me.id&&x.active);if(u)me=u}
  try{localStorage.setItem(DBKEY,JSON.stringify(DB))}catch(e){}
  if(me&&$("#modal")&&$("#modal").hidden&&!(document.activeElement&&/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)))render()}
 return changed;
}
async function syRun(){
 if(!SY.on||syBusy)return;syBusy=true;
 try{
  syDiff();sySave();
  if(!SY.tok)throw {status:401};
  await syPush();await syPull();syDiff();sySave();
  SY.last=Date.now();SY.err="";SYSTAT=Object.keys(SYQQ).length?"pend":"ok";
  try{await syBlocks()}catch(e){}
 }catch(e){SY.err=(e&&e.status)?("HTTP "+e.status):"offline";SYSTAT=(e&&e.status===401)?"auth":((e&&e.status)?"pend":"off")}
 finally{syBusy=false;sySave();syPaint()}
}
function syKick(){if(!SY.on)return;clearTimeout(syTm);syTm=setTimeout(syRun,1500)}
function syChipTxt(){const n=Object.keys(SYQQ).length;const m={ok:"● "+t("syOk"),pend:"⏳ "+t("syPend")+" ("+n+")",off:"⚠ "+t("syOffl")+(n?" ("+n+")":""),auth:"⚠ "+t("syAuth")};return m[SYSTAT]||""}
function syChip(){return SY.on?'<span class="who" id="sychip">'+syChipTxt()+"</span>":""}
function syPaint(){const e=document.getElementById("sychip");if(e)e.textContent=syChipTxt();const c=document.getElementById("sycard");if(c&&me&&can("settings")&&!(document.activeElement&&/INPUT/.test(document.activeElement.tagName)))c.outerHTML=syCard()}
function syFields(){const g=i=>($("#"+i)?$("#"+i).value.trim():"");return {url:g("syu"),key:g("syk"),email:g("sye"),pw:$("#syp")?$("#syp").value:""}}
function syMsg(m){const e=$("#symsg");if(e)e.textContent=m;else toast(m)}
async function syCheck(f){
 if(!f.url||!f.key||!f.email||!f.pw){syMsg(t("syFill"));return false}
 SY.url=f.url;SY.key=f.key;
 let ok=false;try{ok=await syLogin(f.email,f.pw)}catch(e){syMsg(t("syOffl")+" — "+(e&&e.message?e.message:"")+" ("+location.protocol+")");return false}
 if(!ok){syMsg(t("syBadLogin"));return false}
 const b=await syReq("GET","/rest/v1/branches?select=id");
 if(!b.ok){syMsg(b.status===404||(b.json&&b.json.code==="PGRST205")?t("syNoTable"):"HTTP "+b.status+(b.json&&(b.json.message||b.json.hint)?" — "+(b.json.message||"")+" "+(b.json.hint||""):""));return false}
 const s=await syReq("GET","/rest/v1/staff?select=role,branch_id,active");
 if(!s.ok){syMsg("HTTP "+s.status+(s.json&&s.json.message?" — "+s.json.message:""));return false}
 if(!s.json||!s.json.length){syMsg(t("syNoStaff"));return false}
 SY.branch=s.json[0].branch_id||null;sySave();syMsg(t("syConnOk")+" — "+s.json[0].role+(s.json[0].branch_id?" / "+s.json[0].branch_id:" / all"));return true;
}
async function syTest(){if(!can("settings"))return;await syCheck(syFields())}
async function syUpload(){
 if(!can("settings"))return;const f=syFields();if(!(await syCheck(f)))return;
 if(!confirm(t("syConfUp")))return;
 SYHH={};SYQQ={};SY.lastPull="";SY.on=true;log("sync upload","");save();syDiff();sySave();await syRun();render();
}
async function syJoinDB(){
 if(!can("settings")&&!setupNeeded())return;const f=syFields();if(!(await syCheck(f)))return;
 if(!confirm(t("syConfJoin")))return;
 const keep=JSON.stringify(DB),qk=JSON.stringify(SYQQ),hk=JSON.stringify(SYHH);
 const wipe=o=>Object.keys(o).forEach(k=>{if(Array.isArray(o[k]))o[k]=[]});
 wipe(DB.shared);DB.branches.forEach(b=>wipe(DB.byBranch[b.id]));
 SYHH={};SYQQ={};SY.lastPull="";SY.on=true;
 try{await syPull()}catch(e){}
 if(!DB.shared.users||!DB.shared.users.length){DB=JSON.parse(keep);SYQQ=JSON.parse(qk);SYHH=JSON.parse(hk);SY.on=false;S=compose(CUR);syMsg(t("syEmpty"));return}
 if(!DB.branches.some(b=>b.id===CUR))CUR=DB.branches[0].id;
 S=compose(CUR);migrate(S);try{sessionStorage.removeItem("ls_user")}catch(e){}
 me=null;save();SY.err="";SYSTAT="ok";sySave();location.reload();
}
function syNow(){if(!can("settings"))return;syRun()}
function syDisconnect(){if(!can("settings"))return;SY.on=false;SY.tok=null;SY.ref=null;SYQQ={};SYHH={};SY.lastPull="";SYSTAT="off";sySave();render()}
function syCard(){
 const n=Object.keys(SYQQ).length;
 return '<div class="card" id="sycard"><h3>'+t("syTitle")+'</h3><div class="muted">'+t("syWarn")+"</div>"+
 (SY.on?'<div class="kpis">'+kpi(t("syLast"),SY.last?fDate(SY.last)+" "+fTime(SY.last):t("syNever"))+kpi(t("syQueue"),n)+kpi("",syChipTxt())+"</div>":"")+
 '<label>'+t("syUrl")+'<input id="syu" dir="ltr" value="'+esc(SY.url)+'"></label><label>'+t("syKey")+'<input id="syk" dir="ltr" value="'+esc(SY.key)+'"></label>'+
 '<label>'+t("syEmail")+'<input id="sye" dir="ltr" value="'+esc(SY.email)+'"></label><label>'+t("syPass")+'<input id="syp" type="password" dir="ltr"></label>'+
 '<div class="muted" id="symsg"></div><div class="row"><button class="btn" onclick="syTest()">'+t("syTest")+'</button><button class="btn pri" onclick="syUpload()">'+t("syUp")+'</button><button class="btn" onclick="syJoinDB()">'+t("syJoin")+"</button>"+
 (SY.on?'<button class="btn" onclick="syNow()">'+t("syNow")+'</button><button class="btn" onclick="syDisconnect()">'+t("syOff")+"</button>":"")+"</div></div>";
}
{const _bb=branchBadge;branchBadge=function(){return syChip()+_bb()}}
{const _sv=save;save=function(){_sv.apply(this,arguments);syKick()}}
{const _bk=views.backupBody;views.backupBody=function(){_bk();if(can("settings"))(window._hT||$("#view")).insertAdjacentHTML("beforeend",syCard())}}
window.addEventListener("online",()=>syRun());
setInterval(syRun,30000);
if(SY.on){SYSTAT=Object.keys(SYQQ).length?"pend":"off";setTimeout(syRun,1200)}

/* ============ Launch readiness ============ */
Object.assign(D,{
 lrTitle:["جاهزية الإطلاق","Launch readiness"],
 lrPins:["الرموز السرية التجريبية ما زالت مستخدمة","Demo PINs are still in use"],
 lrData:["بيانات تجريبية (أولياء أمور / فواتير)","Demo data (guardians / invoices)"],
 lrSync:["الاتصال بقاعدة البيانات المشتركة وبلا عمليات معلّقة","Shared database connected, nothing pending"],
 lrBackup:["نسخة احتياطية محمّلة خلال آخر 24 ساعة","Backup downloaded in last 24h"],
 lrWipe:["مسح البيانات التجريبية والبدء الفعلي","Clear demo data and start for real"],
 lrWipeSure:["سيتم مسح كل أولياء الأمور والأطفال والفواتير والزيارات والورديات والموظفين والحفلات في الفرعين، وتصفير المخزون. تبقى الأسعار والباقات والمنتجات والمستخدمون. تُحفظ نسخة احتياطية قبل المسح. متابعة؟","This clears guardians, children, invoices, visits, shifts, employees and parties in all branches and zeroes stock. Prices, packages, products and users stay. A backup is saved first. Continue?"],
 lrWiped:["تم المسح. غيّر الرموز السرية وأدخل المخزون والموظفين","Cleared. Now change PINs and enter stock and employees"],
 lrNote:["بعد المسح: غيّر الرموز السرية من الإعدادات، وأدخل المخزون الفعلي والموظفين.","After clearing: change PINs in Settings, then enter real stock and employees."]
});
function lrChecks(){
 const demoPins=["1111","2222","3333","4444","5555","6666"];
 const pins=(DB.shared.users||[]).filter(u=>u.active&&demoPins.some(p=>pinOk(u,p))).length;
 syncOut();
 const inv=DB.branches.reduce((a,b)=>a+((DB.byBranch[b.id]||{}).invoices||[]).length,0);
 const gs=(DB.shared.guardians||[]).length;
 const ld=(DB.meta&&DB.meta.lastDownload)||0;
 return [
  {ok:pins===0,txt:t("lrPins")+(pins?" ("+pins+")":"")},
  {ok:gs===0&&inv===0,txt:t("lrData")+" ("+gs+" / "+inv+")"},
  {ok:!!SY.on&&SYSTAT==="ok"&&Object.keys(SYQQ).length===0,txt:t("lrSync")},
  {ok:Date.now()-ld<86400000,txt:t("lrBackup")}
 ];
}
function lrCard(){
 const rows=lrChecks().map(c=>'<div class="line"><span>'+(c.ok?"✔":"✖")+" "+c.txt+"</span></div>").join("");
 return '<div class="card" id="lrcard"><h3>'+t("lrTitle")+"</h3>"+rows+'<div class="muted">'+t("lrNote")+"</div>"+(can("reset")?'<div class="row"><button class="btn" onclick="lrWipe()">'+t("lrWipe")+"</button></div>":"")+"</div>";
}
function lrWipe(){
 if(!can("reset"))return;if(!confirm(t("lrWipeSure")))return;
 makeBackup("pre");syncOut();
 const empty=o=>Object.keys(o).forEach(k=>{if(["guardians","children","subs","coupons","couponUses","walletTx"].indexOf(k)>=0)o[k]=[];if(k==="balances")o[k]={}});
 empty(DB.shared);
 DB.branches.forEach(b=>{DB.byBranch[b.id]=blankBranchState(DB.byBranch[b.id],true)});
 S=compose(CUR);migrate(S);log("clear demo data","launch");save();toast(t("lrWiped"));render();
}
{const _bk2=views.backupBody;views.backupBody=function(){_bk2();if(can("settings"))(window._hT||$("#view")).insertAdjacentHTML("beforeend",lrCard())}}

/* ============ Import customers from the old system (xlsx / csv) ============ */
Object.assign(D,{
 imTitle:["استيراد العملاء من النظام القديم","Import customers from the old system"],
 imHelp:["اختر ملف Excel (xlsx) أو CSV يحتوي أولياء الأمور والأطفال. الأعمدة: اسم ولي الأمر، الموبايل، اسم الطفل، العمر، ملاحظات. صف لكل طفل، وولي الأمر يتكرر باسمه ورقمه.","Choose an Excel (xlsx) or CSV file with guardians and children. One row per child; repeat the guardian name and phone."],
 imFile:["اختيار ملف","Choose file"],imTpl:["تحميل نموذج الملف","Download template"],
 imMap:["مطابقة الأعمدة","Column mapping"],imGName:["اسم ولي الأمر","Guardian name"],imGPhone:["الموبايل","Phone"],imGPhone2:["رقم آخر (اختياري)","Other number (optional)"],imCName:["اسم الطفل (الأول)","Child name (first)"],imCName2:["اسم الطفل الثاني (اختياري)","Second child (optional)"],imCAge:["العمر","Age"],imNotes:["ملاحظات","Notes"],imNone:["— بدون —","— none —"],
 imRows:["صفوف في الملف","Rows in file"],imNewG:["أولياء أمور جدد","New guardians"],imNewC:["أطفال جدد","New children"],imDupG:["أولياء أمور موجودون (تُضاف لهم أطفال جدد فقط)","Existing guardians (only new children added)"],imDupC:["أطفال مكررون (يُتجاهلون)","Duplicate children (skipped)"],imBad:["صفوف مرفوضة (رقم أو اسم غير صالح)","Rejected rows (bad phone or name)"],imNoAge:["أطفال بلا عمر صالح (يُسجّل 0)","Children without valid age (saved as 0)"],
 imGo:["استيراد الآن","Import now"],imDone:["تم الاستيراد","Import done"],imEmpty:["لا توجد بيانات في الملف","No data in file"],imErr:["تعذّرت قراءة الملف","Could not read the file"],imNeed:["حدّد عمودي ولي الأمر والموبايل على الأقل","Map at least guardian name and phone"]
});
function imInflate(b){if(window.__inflate)return window.__inflate(b);return new Response(new Blob([b]).stream().pipeThrough(new DecompressionStream("deflate-raw"))).arrayBuffer().then(x=>new Uint8Array(x))}
async function imZip(buf){
 const u=new Uint8Array(buf),dv=new DataView(buf);let e=-1;
 for(let i=u.length-22;i>=Math.max(0,u.length-70000);i--){if(dv.getUint32(i,true)===0x06054b50){e=i;break}}
 if(e<0)throw new Error("zip");
 const n=dv.getUint16(e+10,true);let p=dv.getUint32(e+16,true);const files={};
 for(let k=0;k<n;k++){
  if(dv.getUint32(p,true)!==0x02014b50)break;
  const meth=dv.getUint16(p+10,true),cs=dv.getUint32(p+20,true),nl=dv.getUint16(p+28,true),xl=dv.getUint16(p+30,true),cl=dv.getUint16(p+32,true),off=dv.getUint32(p+42,true);
  const name=new TextDecoder().decode(u.subarray(p+46,p+46+nl));
  files[name]={meth:meth,cs:cs,off:off};p+=46+nl+xl+cl;
 }
 return {u:u,dv:dv,files:files};
}
async function imRead(z,name){
 const f=z.files[name];if(!f)return null;
 const nl=z.dv.getUint16(f.off+26,true),xl=z.dv.getUint16(f.off+28,true),s=f.off+30+nl+xl,data=z.u.subarray(s,s+f.cs);
 const out=f.meth===0?data:await imInflate(data);
 return new TextDecoder("utf-8").decode(out);
}
function imColIdx(ref){const m=/^([A-Z]+)/.exec(ref);let n=0;for(const ch of m[1])n=n*26+ch.charCodeAt(0)-64;return n-1}
async function imXlsx(buf){
 const z=await imZip(buf),P=new DOMParser();
 let ss=[];const sx=await imRead(z,"xl/sharedStrings.xml");
 if(sx){const d=P.parseFromString(sx,"application/xml");ss=Array.from(d.getElementsByTagName("si")).map(si=>Array.from(si.getElementsByTagName("t")).map(t=>t.textContent).join(""))}
 const sheets=Object.keys(z.files).filter(n=>/^xl\/worksheets\/sheet\d+\.xml$/.test(n)).sort((a,b)=>parseInt(a.match(/\d+/)[0])-parseInt(b.match(/\d+/)[0]));
 if(!sheets.length)throw new Error("sheet");
 const d=P.parseFromString(await imRead(z,sheets[0]),"application/xml"),rows=[];
 Array.from(d.getElementsByTagName("row")).forEach(r=>{
  const row=[];Array.from(r.getElementsByTagName("c")).forEach(c=>{
   const i=imColIdx(c.getAttribute("r")),ty=c.getAttribute("t"),v=c.getElementsByTagName("v")[0],is=c.getElementsByTagName("is")[0];
   let val="";if(ty==="s"&&v)val=ss[parseInt(v.textContent,10)]||"";else if(ty==="inlineStr"&&is)val=Array.from(is.getElementsByTagName("t")).map(t=>t.textContent).join("");else if(v)val=v.textContent;
   row[i]=val;
  });
  const rn=parseInt(r.getAttribute("r"),10)-1;rows[rn>=0?rn:rows.length]=Array.from(row,x=>x===undefined?"":x);
 });
 return Array.from(rows,r=>r||[]);
}
function imCsv(text){
 text=text.replace(/^﻿/,"");
 const first=text.split(/\r?\n/)[0]||"";const del=[",",";","\t"].map(c=>[c,first.split(c).length]).sort((a,b)=>b[1]-a[1])[0][0];
 const rows=[];let row=[],cur="",q=false;
 for(let i=0;i<text.length;i++){const ch=text[i];
  if(q){if(ch==='"'){if(text[i+1]==='"'){cur+='"';i++}else q=false}else cur+=ch}
  else if(ch==='"')q=true;else if(ch===del){row.push(cur);cur=""}
  else if(ch==="\n"||ch==="\r"){if(ch==="\r"&&text[i+1]==="\n")i++;row.push(cur);rows.push(row);row=[];cur=""}
  else cur+=ch}
 if(cur!==""||row.length){row.push(cur);rows.push(row)}
 return rows;
}
function imDecode(buf){try{return new TextDecoder("utf-8",{fatal:true}).decode(buf)}catch(e){try{return new TextDecoder("windows-1256").decode(buf)}catch(e2){return new TextDecoder().decode(buf)}}}
const IM_SYN={g:["الاسم","الاسم الكامل","name","full name","اسم ولي الامر","اسم ولي الأمر","ولي الامر","ولي الأمر","اسم العميل","العميل","guardian","parent","customer","client"],p:["الموبايل","موبايل","التليفون","تليفون","الهاتف","هاتف","رقم الهاتف","رقم الموبايل","phone","mobile","tel"],p2:["رقم اخر","رقم آخر","رقم تاني","رقم ثاني","رقم اضافي","رقم إضافي","ارقام اخرى","أرقام أخرى","موبايل 2","موبايل2","تليفون 2","تليفون2","هاتف 2","هاتف2","واتس","واتساب","whatsapp","phone 2","phone2","mobile 2","mobile2","other phone","other number"],c:["الطفل الاول","طفل 1","اسم الطفل","الطفل","child","child 1","kid"],c2:["الطفل الثاني","الطفل الثانى","طفل 2","child 2"],a:["العمر","السن","age"],n:["ملاحظات","ملاحظة","notes","note"]};
function imGuess(head){
 const nm=s=>norm(String(s||"")).replace(/[\u0623\u0625\u0622]/g,"\u0627").replace(/\u0649/g,"\u064A").replace(/\s+/g," ").trim().toLowerCase(),res={g:-1,p:-1,p2:-1,c:-1,c2:-1,a:-1,n:-1};
 Object.keys(IM_SYN).forEach(k=>{
  const syn=IM_SYN[k].map(nm);let ix=head.findIndex(h=>syn.indexOf(nm(h))>=0);
  if(ix<0)ix=head.findIndex(h=>syn.some(s=>nm(h).indexOf(s)>=0&&nm(h).length<=s.length+6));
  res[k]=ix});
 if(res.p>=0&&res.p===res.p2){const ex=IM_SYN.p.map(nm),j=head.findIndex((h,i)=>i!==res.p2&&ex.indexOf(nm(h))>=0);if(j>=0)res.p=j;else{res.p=res.p2;res.p2=-1}}
 if(res.g>=0&&res.g===res.c)res.c=-1;
 if(res.c>=0&&res.c===res.c2)res.c2=-1;
 return res;
}
let IM=null;
function imPhone(raw){
 const parts=String(raw||"").split(/[\/,،;؛\n]|\s{2,}/).map(x=>normPhone(x)).filter(Boolean).map(p=>/^1\d{9}$/.test(p)?"0"+p:p);
 const ok=parts.filter(p=>/^\+?\d{8,15}$/.test(p));return {primary:ok[0]||"",more:ok.slice(1).filter((p,i,a)=>a.indexOf(p)===i&&p!==ok[0]),bad:!ok.length};
}
function imKids(r){
 const m=IM.map,out=[];
 [m.c,m.c2].forEach(ci=>{if(ci>=0)String(r[ci]||"").split(/[+\u060C,\/&]/).forEach(x=>{const n=x.replace(/\s+/g," ").trim();if(n&&out.indexOf(n)<0)out.push(n)})});
 return out;
}
function imPlan(){
 const m=IM.map,rows=IM.rows.slice(IM.hasHead?1:0).filter(r=>r.some(x=>String(x||"").trim()!==""));
 const gByPhone={};S.guardians.forEach(g=>phonesOf(g).forEach(p=>{gByPhone[p]=g}));
 const plan={rows:rows.length,newG:{},dupG:{},newC:0,dupC:0,bad:0,noAge:0,items:[]},seenKids={};
 rows.forEach(r=>{
  const gname=String(r[m.g]||"").replace(/\s+/g," ").trim(),ph=imPhone(String(r[m.p]||"")+(m.p2>=0?" / "+String(r[m.p2]||""):""));
  if(!gname||ph.bad){plan.bad++;return}
  const kids=imKids(r);
  const ex=gByPhone[ph.primary]||ph.more.map(p=>gByPhone[p]).filter(Boolean)[0]||null;
  const key=ph.primary,note=m.n>=0?String(r[m.n]||"").replace(/\s+/g," ").trim():"";
  const ageRaw=m.a>=0?parseInt(norm(String(r[m.a]||"")).replace(/\D/g,""),10):NaN;
  if(ex)plan.dupG[ex.id]=1;else plan.newG[key]=1;
  if(!kids.length){plan.items.push({ex:ex?ex.id:null,key:key,gname:gname,ph:ph,cname:"",age:0,note:note});return}
  kids.forEach(cname=>{
   const gk=ex?ex.id:key,kk=gk+"|"+cname.toLowerCase();
   const existsKid=ex&&S.children.some(c=>c.guardianId===ex.id&&c.name.trim().toLowerCase()===cname.toLowerCase());
   if(existsKid||seenKids[kk]){plan.dupC++;return}
   seenKids[kk]=1;plan.newC++;
   const useAge=kids.length===1&&validAge(ageRaw);if(!useAge)plan.noAge++;
   plan.items.push({ex:ex?ex.id:null,key:key,gname:gname,ph:ph,cname:cname,age:useAge?ageRaw:0,note:note});
  });
 });
 plan.nNewG=Object.keys(plan.newG).length;plan.nDupG=Object.keys(plan.dupG).length;
 return plan;
}
function imRender(){
 const head=IM.hasHead?IM.rows[0]:IM.rows[0].map((_,i)=>"#"+(i+1)),opt=sel=>'<option value="-1">'+t("imNone")+"</option>"+head.map((h,i)=>'<option value="'+i+'"'+(sel===i?" selected":"")+">"+esc(String(h||"#"+(i+1)))+"</option>").join("");
 const sel=(k,lab)=>'<label>'+t(lab)+'<select onchange="imSet(\''+k+'\',this.value)">'+opt(IM.map[k])+"</select></label>";
 const ready=IM.map.g>=0&&IM.map.p>=0,pl=ready?imPlan():null;IM.plan=pl;
 modal("<h3>"+t("imTitle")+'</h3><div class="muted">'+esc(IM.name)+"</div><h4>"+t("imMap")+'</h4><div class="grid2" style="gap:8px">'+sel("g","imGName")+sel("p","imGPhone")+sel("p2","imGPhone2")+sel("c","imCName")+sel("c2","imCName2")+sel("a","imCAge")+sel("n","imNotes")+"</div>"+
  (pl?'<div class="card"><div class="line"><span>'+t("imRows")+"</span><b>"+pl.rows+'</b></div><div class="line"><span>'+t("imNewG")+"</span><b>"+pl.nNewG+'</b></div><div class="line"><span>'+t("imNewC")+"</span><b>"+pl.newC+'</b></div><div class="line"><span>'+t("imDupG")+"</span><b>"+pl.nDupG+'</b></div><div class="line"><span>'+t("imDupC")+"</span><b>"+pl.dupC+'</b></div><div class="line"><span>'+t("imNoAge")+"</span><b>"+pl.noAge+'</b></div><div class="line"><span>'+t("imBad")+"</span><b>"+pl.bad+"</b></div></div>":'<div class="muted">'+t("imNeed")+"</div>")+
  '<div class="row"><button class="btn pri" '+(pl&&(pl.newC||pl.nNewG)?"":"disabled")+' onclick="imGo()">'+t("imGo")+'</button><button class="btn" onclick="closeModal()">'+t("cancel")+"</button></div>");
}
function imSet(k,v){IM.map[k]=parseInt(v,10);imRender()}
function imGo(){
 if(!can("settings")||!IM||!IM.plan)return;
 makeBackup("pre");
 const byPhone={};S.guardians.forEach(g=>phonesOf(g).forEach(p=>{byPhone[p]=g}));let ng=0,nc=0;
 IM.plan.items.forEach(it=>{
  let g=it.ex?S.guardians.find(x=>x.id===it.ex):byPhone[it.ph.primary];
  if(!g){g={id:uid(),name:it.gname,phone:it.ph.primary,morePhones:it.ph.more,notes:""};S.guardians.push(g);byPhone[g.phone]=g;it.ph.more.forEach(p=>{byPhone[p]=g});ng++}
  if(it.cname){S.children.push({id:uid(),guardianId:g.id,name:it.cname,age:it.age,notes:it.note});nc++}
 });
 log("import customers",ng+" guardians / "+nc+" children ("+IM.name+")");save();closeModal();IM=null;toast(t("imDone")+": "+ng+" / "+nc);render();
}
async function imFile(inp){
 const f=inp.files&&inp.files[0];if(!f||!can("settings"))return;
 try{
  const buf=await f.arrayBuffer();let rows;
  if(/\.xlsx$/i.test(f.name)||new Uint8Array(buf.slice(0,2)).join()==="80,75")rows=await imXlsx(buf);else rows=imCsv(imDecode(buf));
  rows=rows.filter(r=>r&&r.some(x=>String(x||"").trim()!==""));
  if(!rows.length){toast(t("imEmpty"));inp.value="";return}
  const g=imGuess(rows[0]),hasHead=g.g>=0||g.p>=0;
  IM={name:f.name,rows:rows,hasHead:hasHead,map:hasHead?g:{g:0,p:1,p2:-1,c:2,c2:-1,a:3,n:4}};
  inp.value="";imRender();
 }catch(e){toast(t("imErr"));inp.value=""}
}
function imTemplate(){downloadXlsx("customers-template.xlsx",[{name:"Customers",head:[t("imGName"),t("imGPhone"),t("imCName"),t("imCAge"),t("imNotes")],rows:[["ولي أمر مثال","01012345678","طفل مثال","5",""]]}])}
function imCard(){return '<div class="card"><h3>'+t("imTitle")+'</h3><div class="muted">'+t("imHelp")+'</div><div class="row"><label class="btn pri" style="cursor:pointer">'+t("imFile")+'<input type="file" accept=".xlsx,.csv,.txt,text/csv" style="display:none" onchange="imFile(this)"></label><button class="btn" onclick="imTemplate()">'+t("imTpl")+"</button></div></div>"}
{const _wst=views.settingsBody;views.settingsBody=function(){_wst();(window._hT||$("#view")).insertAdjacentHTML("beforeend",waCard())}}
/* ============ تنبيهات عابرة: مدة ظهور اللافتات والرسائل من الإعدادات ============ */
let ALK={};
function alertSec(){const v=S&&S.settings&&S.settings.alertSec;return v==null||isNaN(+v)?20:+v}
function toastSec(){const v=S&&S.settings&&S.settings.toastSec;return v==null||isNaN(+v)?3:+v}
/* اللافتة تظهر المدة المحددة ثم تختفي؛ تظهر من جديد عند فتح الشاشة أو عند تغيّر نصها (مثل زيادة العدد). 0 = ثابتة */
function alertApply(){
 const sec=alertSec(),now=Date.now();
 document.querySelectorAll(".alertbox").forEach(el=>{
  if(sec<=0){el.style.display="";return}
  const k=el.textContent.replace(/\s+/g," ").trim(),r=ALK[k]||(ALK[k]={t:now}),left=sec*1000-(now-r.t);
  el.style.display=left<=0?"none":"";
 });
}
try{new MutationObserver(alertApply).observe(document.body,{childList:true,subtree:true})}catch(e){}
setInterval(alertApply,250);
function alertsCard(){
 if(!can("settings"))return "";
 return '<div class="card" id="alcard"><h3>'+t("alTitle")+'</h3><div class="muted">'+t("alNote")+'</div><div class="grid2"><label>'+t("alBanner")+'<input id="al_b" type="number" min="0" max="600" value="'+alertSec()+'"></label><label>'+t("alToast")+'<input id="al_t" type="number" min="1" max="30" value="'+toastSec()+'"></label></div><div class="row"><button class="btn pri" onclick="saveAlertPrefs()">'+t("save")+"</button></div></div>";
}
function saveAlertPrefs(){
 if(!can("settings"))return;
 const b=parseFloat(norm($("#al_b").value)),k=parseFloat(norm($("#al_t").value));
 if(!(b>=0&&b<=600)||!(k>=1&&k<=30)){toast(t("alBad"));return}
 S.settings.alertSec=Math.round(b);S.settings.toastSec=Math.round(k);log("settings","alert durations");save();ALK={};toast(t("saved"));alertApply();
}
{const _al3=views.settingsBody;views.settingsBody=function(){_al3();(window._hT||$("#view")).insertAdjacentHTML("beforeend",alertsCard())}}
{const _bk3=views.backupBody;views.backupBody=function(){_bk3();if(can("settings"))(window._hT||$("#view")).insertAdjacentHTML("beforeend",imCard())}}

/* ============ PIN hashing (salted, iterated SHA-256) ============ */
const sha256=(()=>{
 const K=[],H0=[];let n=2;
 while(K.length<64){let p=true;for(let d=2;d*d<=n;d++)if(n%d===0){p=false;break}if(p){if(H0.length<8)H0.push((Math.pow(n,.5)%1)*4294967296|0);K.push((Math.pow(n,1/3)%1)*4294967296|0)}n++}
 const rr=(x,c)=>(x>>>c)|(x<<(32-c));
 return function(s){
  const u=unescape(encodeURIComponent(s)),b=[];for(let i=0;i<u.length;i++)b.push(u.charCodeAt(i));
  const bl=b.length*8;b.push(0x80);while(b.length%64!==56)b.push(0);
  for(let i=7;i>=0;i--)b.push(i>=4?0:(bl>>>(i*8))&255);
  const h=H0.slice(),w=new Array(64);
  for(let o=0;o<b.length;o+=64){
   for(let i=0;i<16;i++)w[i]=(b[o+i*4]<<24)|(b[o+i*4+1]<<16)|(b[o+i*4+2]<<8)|b[o+i*4+3];
   for(let i=16;i<64;i++){const s0=rr(w[i-15],7)^rr(w[i-15],18)^(w[i-15]>>>3),s1=rr(w[i-2],17)^rr(w[i-2],19)^(w[i-2]>>>10);w[i]=(w[i-16]+s0+w[i-7]+s1)|0}
   let [a,bb,c,d,e,f,g,hh]=h;
   for(let i=0;i<64;i++){const S1=rr(e,6)^rr(e,11)^rr(e,25),ch=(e&f)^(~e&g),t1=(hh+S1+ch+K[i]+w[i])|0,S0=rr(a,2)^rr(a,13)^rr(a,22),mj=(a&bb)^(a&c)^(bb&c),t2=(S0+mj)|0;hh=g;g=f;f=e;e=(d+t1)|0;d=c;c=bb;bb=a;a=(t1+t2)|0}
   h[0]=(h[0]+a)|0;h[1]=(h[1]+bb)|0;h[2]=(h[2]+c)|0;h[3]=(h[3]+d)|0;h[4]=(h[4]+e)|0;h[5]=(h[5]+f)|0;h[6]=(h[6]+g)|0;h[7]=(h[7]+hh)|0;
  }
  return h.map(x=>("00000000"+(x>>>0).toString(16)).slice(-8)).join("");
 };
})();
function pinDigest(pin,salt){let x=sha256("kids|"+salt+"|"+pin);for(let i=0;i<1500;i++)x=sha256(x+salt);return x}
function pinSet(u,pin){u.pinSalt=uid()+uid();u.pinHash=pinDigest(pin,u.pinSalt);delete u.pin}
function pinOk(u,pin){if(!u)return false;if(u.pinHash)return pinDigest(pin,u.pinSalt)===u.pinHash;return u.pin!==undefined&&u.pin===pin}
function pinMigrate(){const us=DB&&DB.shared&&DB.shared.users;if(!us)return false;let ch=false;us.forEach(u=>{if(u.pin!==undefined){pinSet(u,String(u.pin));ch=true}});return ch}
pinMigrate();
{const _sv2=save;save=function(){pinMigrate();_sv2.apply(this,arguments)}}

/* ============ Server number blocks (no duplicate numbers across devices) ============ */
const BLK_SIZE={receipt:10,invoice:10,shift:3,booking:3,fault:3},BLK_KEY="ls_blocks";
let BLK=(()=>{try{return JSON.parse(localStorage.getItem(BLK_KEY)||"{}")}catch(e){return {}}})();
function blkSave(){try{localStorage.setItem(BLK_KEY,JSON.stringify(BLK))}catch(e){}}
function blkCur(key){const b=(BLK[CUR]||{})[key];return b&&b.next<=b.end?b:null}
function peekNo(key){const b=SY.on?blkCur(key):null;return b?b.next:(S.seq[key]||0)+1}
function nextNo(key){
 const b=SY.on?blkCur(key):null;let n;
 if(b){n=b.next++;blkSave();if(!(S.seq[key]>=n))S.seq[key]=n}else n=S.seq[key]=(S.seq[key]||0)+1;
 if(SY.on&&(!blkCur(key)||b&&b.end-b.next<2))setTimeout(syBlocks,50);
 return n;
}
async function syBlocks(){
 if(!SY.on||!SY.tok||!navigator.onLine)return;
 for(const key of Object.keys(BLK_SIZE)){
  const br=CUR,b=(BLK[br]||{})[key];
  if(b&&b.end-b.next>=3)continue;
  try{
   const r=await syReq("POST","/rest/v1/rpc/reserve_block",{p_branch:br,p_key:key,p_size:BLK_SIZE[key],p_min:Math.max(S.seq[key]||0,b?b.end:0)});
   const first=r.ok&&typeof r.json==="number"?r.json:(r.ok&&r.json!=null?parseInt(r.json,10):NaN);
   if(isFinite(first)){BLK[br]=BLK[br]||{};BLK[br][key]={next:first,end:first+BLK_SIZE[key]-1};blkSave()}
   else if(r.status===404||(r.json&&r.json.code==="PGRST202"))return;
  }catch(e){return}
 }
}

render();
if(window.__recovered)setTimeout(()=>toast(t(window.__recovered==="backup"?"recBackup":"recFresh")),400);
