(()=>{
const KEY="fallingLanguageV1";
const TEXT={
he:{
"Interactive History":"היסטוריה אינטראקטיבית","Falling Into the Abyss":"נופלים אל התהום","Christianity timeline":"ציר הזמן הנוצרי","Islam timeline":"ציר הזמן האסלאמי","Jewish timeline":"ציר הזמן היהודי","Restart":"התחלה מחדש","Method & Sources":"שיטה ומקורות","Scroll to descend":"גללו כדי לרדת","History gets deeper as you fall.":"ככל שיורדים, ההיסטוריה מעמיקה.","Begin the descent":"התחילו בירידה","Current year":"השנה הנוכחית","Current era":"התקופה הנוכחית","Depth":"עומק","Explore timeline":"חקרו את ציר הזמן","Find an event":"מצאו אירוע","Search":"חיפוש","Era":"תקופה","Type":"סוג","All eras":"כל התקופות","All event types":"כל סוגי האירועים","Jump to year":"מעבר לשנה","Go":"עבור","Clear filters":"נקה מסננים","YOU ARE HERE":"אתם כאן","Transparency & research":"שקיפות ומחקר","Disclosure & Sources":"גילוי נאות ומקורות","Disclosure":"גילוי נאות","Research method":"שיטת המחקר","Master bibliography":"ביבליוגרפיה ראשית","Sources used across the site":"מקורות המשמשים באתר","Search sources or domains…":"חיפוש מקורות או אתרים…"},
ar:{
"Interactive History":"تاريخ تفاعلي","Falling Into the Abyss":"السقوط في الهاوية","Christianity timeline":"الخط الزمني للمسيحية","Islam timeline":"الخط الزمني للإسلام","Jewish timeline":"الخط الزمني اليهودي","Restart":"إعادة البدء","Method & Sources":"المنهج والمصادر","Scroll to descend":"مرّر للنزول","History gets deeper as you fall.":"كلما هبطت، تعمّقت في التاريخ.","Begin the descent":"ابدأ النزول","Current year":"السنة الحالية","Current era":"العصر الحالي","Depth":"العمق","Explore timeline":"استكشف الخط الزمني","Find an event":"ابحث عن حدث","Search":"بحث","Era":"العصر","Type":"النوع","All eras":"كل العصور","All event types":"كل أنواع الأحداث","Jump to year":"انتقل إلى سنة","Go":"انتقل","Clear filters":"مسح عوامل التصفية","YOU ARE HERE":"أنت هنا","Transparency & research":"الشفافية والبحث","Disclosure & Sources":"الإفصاح والمصادر","Disclosure":"الإفصاح","Research method":"منهج البحث","Master bibliography":"قائمة المصادر الرئيسية","Sources used across the site":"المصادر المستخدمة في الموقع","Search sources or domains…":"ابحث في المصادر أو النطاقات…"}
};
function translateText(lang){
 if(lang==="en")return;
 const dict=TEXT[lang]||{};
 const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
 const nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);
 nodes.forEach(n=>{const raw=n.nodeValue,trim=raw.trim();if(dict[trim])n.nodeValue=raw.replace(trim,dict[trim]);});
 document.querySelectorAll("input[placeholder]").forEach(el=>{const v=el.getAttribute("placeholder");if(dict[v])el.setAttribute("placeholder",dict[v]);});
}
function setLanguage(lang,reload=false){
 if(!["en","he","ar"].includes(lang))lang="en";
 localStorage.setItem(KEY,lang);
 if(reload){location.reload();return;}
 document.documentElement.lang=lang;document.documentElement.dir=lang==="en"?"ltr":"rtl";
 document.body.classList.toggle("rtl-language",lang!=="en");
 document.querySelectorAll("[data-lang]").forEach(b=>{b.classList.toggle("active",b.dataset.lang===lang);b.setAttribute("aria-pressed",b.dataset.lang===lang?"true":"false");});
 translateText(lang);
}
document.querySelectorAll("[data-lang]").forEach(b=>b.addEventListener("click",()=>setLanguage(b.dataset.lang,true)));
setLanguage(localStorage.getItem(KEY)||"en");
})();