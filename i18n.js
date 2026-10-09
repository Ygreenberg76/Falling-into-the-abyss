(()=>{
const KEY="fallingLanguageV1";
function currentLanguage(){const q=new URLSearchParams(location.search).get("lang");if(["en","he","ar"].includes(q))return q;const saved=localStorage.getItem(KEY);return ["en","he","ar"].includes(saved)?saved:"en";}
function localizeEvent(kind,event){const lang=new URLSearchParams(location.search).get("lang")||document.documentElement.dataset.language||currentLanguage();if(lang==="en"||!event)return event;const table=window.FALLING_TRANSLATIONS&&window.FALLING_TRANSLATIONS[lang]&&window.FALLING_TRANSLATIONS[lang][kind];const translated=(event.localized&&event.localized[lang])||(table&&table[event.id]);return Object.assign({},event,translated||{},{_translationLanguage:translated?lang:"en"});}
function applyEventDirection(displayEvent){
 const rtl=displayEvent&&displayEvent._translationLanguage&&displayEvent._translationLanguage!=="en";
 ["eventTitle","eventLocation","eventStory","eventContext","eventAftermath","eventSourceStatus"].forEach(id=>{const el=document.getElementById(id);if(!el)return;if(rtl){el.setAttribute("dir","rtl");el.setAttribute("lang",displayEvent._translationLanguage);}else{el.setAttribute("dir","ltr");el.setAttribute("lang","en");}});
}
window.FALLING_I18N={currentLanguage,localizeEvent,applyEventDirection,translateText:(root)=>translateText(currentLanguage(),root)};
const TEXT={
he:{
"Interactive History":"היסטוריה אינטראקטיבית","Falling Into the Abyss":"נופלים אל התהום","Christianity timeline":"ציר הזמן הנוצרי","Islam timeline":"ציר הזמן האסלאמי","Jewish timeline":"ציר הזמן היהודי","Restart":"התחלה מחדש","Method & Sources":"שיטה ומקורות","Scroll to descend":"גללו כדי לרדת","History gets deeper as you fall.":"ככל שיורדים, ההיסטוריה מעמיקה.","Begin the descent":"התחילו בירידה","Current year":"השנה הנוכחית","Current era":"התקופה הנוכחית","Depth":"עומק","Explore timeline":"חקרו את ציר הזמן","Find an event":"מצאו אירוע","Search":"חיפוש","Era":"תקופה","Type":"סוג","All eras":"כל התקופות","All event types":"כל סוגי האירועים","Jump to year":"מעבר לשנה","Go":"עבור","Clear filters":"נקה מסננים","YOU ARE HERE":"אתם כאן","Transparency & research":"שקיפות ומחקר","Disclosure & Sources":"גילוי נאות ומקורות","Disclosure":"גילוי נאות","Research method":"שיטת המחקר","Master bibliography":"ביבליוגרפיה ראשית","Sources used across the site":"מקורות המשמשים באתר","Search sources or domains…":"חיפוש מקורות או אתרים…","Loading events…":"טוען אירועים…","Event, place or keyword…":"אירוע, מקום או מילת מפתח…","CE":"לספירה","BCE":"לפנה״ס","Close":"סגירה","Close comparison":"סגירת ההשוואה","Compare histories":"השוואת היסטוריות","Shared history":"היסטוריה משותפת","Sources & certainty":"מקורות ורמת ודאות","Historical context":"הקשר היסטורי","What happened next":"מה קרה לאחר מכן","World at this time":"העולם באותה תקופה","How this timeline will be researched":"כיצד ייחקר ציר הזמן הזה","Jewish history overlap":"חפיפה עם ההיסטוריה היהודית","Christian history overlap":"חפיפה עם ההיסטוריה הנוצרית","Islamic history overlap":"חפיפה עם ההיסטוריה האסלאמית","Source review still in progress.":"בדיקת המקורות עדיין נמשכת.","No matching events.":"לא נמצאו אירועים תואמים."},
ar:{
"Interactive History":"تاريخ تفاعلي","Falling Into the Abyss":"السقوط في الهاوية","Christianity timeline":"الخط الزمني للمسيحية","Islam timeline":"الخط الزمني للإسلام","Jewish timeline":"الخط الزمني اليهودي","Restart":"إعادة البدء","Method & Sources":"المنهج والمصادر","Scroll to descend":"مرّر للنزول","History gets deeper as you fall.":"كلما هبطت، تعمّقت في التاريخ.","Begin the descent":"ابدأ النزول","Current year":"السنة الحالية","Current era":"العصر الحالي","Depth":"العمق","Explore timeline":"استكشف الخط الزمني","Find an event":"ابحث عن حدث","Search":"بحث","Era":"العصر","Type":"النوع","All eras":"كل العصور","All event types":"كل أنواع الأحداث","Jump to year":"انتقل إلى سنة","Go":"انتقل","Clear filters":"مسح عوامل التصفية","YOU ARE HERE":"أنت هنا","Transparency & research":"الشفافية والبحث","Disclosure & Sources":"الإفصاح والمصادر","Disclosure":"الإفصاح","Research method":"منهج البحث","Master bibliography":"قائمة المصادر الرئيسية","Sources used across the site":"المصادر المستخدمة في الموقع","Search sources or domains…":"ابحث في المصادر أو النطاقات…","Loading events…":"جارٍ تحميل الأحداث…","Event, place or keyword…":"حدث أو مكان أو كلمة مفتاحية…","CE":"م","BCE":"ق.م","Close":"إغلاق","Close comparison":"إغلاق المقارنة","Compare histories":"قارن التواريخ","Shared history":"تاريخ مشترك","Sources & certainty":"المصادر ودرجة اليقين","Historical context":"السياق التاريخي","What happened next":"ما الذي حدث بعد ذلك","World at this time":"العالم في ذلك الوقت","How this timeline will be researched":"كيف سيتم بحث هذا الخط الزمني","Jewish history overlap":"تداخل مع التاريخ اليهودي","Christian history overlap":"تداخل مع التاريخ المسيحي","Islamic history overlap":"تداخل مع التاريخ الإسلامي","Source review still in progress.":"مراجعة المصادر ما زالت جارية.","No matching events.":"لا توجد أحداث مطابقة."}
};
function translateText(lang,root=document.body){
 if(lang==="en"||!root)return;
 const dict=TEXT[lang]||{};
 const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
 const nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);
 nodes.forEach(n=>{const raw=n.nodeValue,trim=raw.trim();if(dict[trim]){n.nodeValue=raw.replace(trim,dict[trim]);const el=n.parentElement;if(el){el.setAttribute("dir","rtl");el.setAttribute("lang",lang);}}});
 root.querySelectorAll("input[placeholder]").forEach(el=>{const v=el.getAttribute("placeholder");if(dict[v])el.setAttribute("placeholder",dict[v]);});
}
function syncTimelineLinks(lang){document.querySelectorAll('a[href$=".html"],a[href*=".html?"]').forEach(a=>{try{const u=new URL(a.href,location.href);if(u.origin!==location.origin)return;u.searchParams.set("lang",lang);a.href=u.pathname.split("/").pop()+u.search+u.hash;}catch{}});}
function setLanguage(lang,reload=false){
 if(!["en","he","ar"].includes(lang))lang="en";
 localStorage.setItem(KEY,lang);
 syncTimelineLinks(lang);
 if(reload){const u=new URL(location.href);u.searchParams.set("lang",lang);location.href=u.toString();return;}
 document.documentElement.lang=lang;
 document.documentElement.dataset.language=lang;
 // Keep document flow LTR for untranslated fallback content.
 document.documentElement.dir="ltr";
 document.body.classList.toggle("rtl-language",lang!=="en");
 document.querySelectorAll("[data-lang]").forEach(b=>{b.classList.toggle("active",b.dataset.lang===lang);b.setAttribute("aria-pressed",b.dataset.lang===lang?"true":"false");});
 translateText(lang);
 syncTimelineLinks(lang);
 document.dispatchEvent(new CustomEvent("falling:languagechange",{detail:{language:lang}}));
}
document.querySelectorAll("[data-lang]").forEach(b=>b.addEventListener("click",()=>setLanguage(b.dataset.lang,true)));
setLanguage(currentLanguage());
})();