(()=>{
const KEY="fallingLanguageV1";
function currentLanguage(){return localStorage.getItem(KEY)||"en";}
function localizeEvent(kind,event){const lang=currentLanguage();if(lang==="en"||!event)return event;const table=window.FALLING_TRANSLATIONS&&window.FALLING_TRANSLATIONS[lang]&&window.FALLING_TRANSLATIONS[lang][kind];const translated=table&&table[event.id];if(!translated)return event;return Object.assign({},event,translated,{_translationLanguage:lang});}
function applyEventDirection(displayEvent){
 const rtl=displayEvent&&displayEvent._translationLanguage&&displayEvent._translationLanguage!=="en";
 ["eventTitle","eventLocation","eventStory","eventContext","eventAftermath","eventSourceStatus"].forEach(id=>{const el=document.getElementById(id);if(!el)return;if(rtl){el.setAttribute("dir","rtl");el.setAttribute("lang",displayEvent._translationLanguage);}else{el.setAttribute("dir","ltr");el.setAttribute("lang","en");}});
}
window.FALLING_I18N={currentLanguage,localizeEvent,applyEventDirection};
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
 nodes.forEach(n=>{const raw=n.nodeValue,trim=raw.trim();if(dict[trim]){n.nodeValue=raw.replace(trim,dict[trim]);const el=n.parentElement;if(el){el.setAttribute("dir","rtl");el.setAttribute("lang",lang);}}});
 document.querySelectorAll("input[placeholder]").forEach(el=>{const v=el.getAttribute("placeholder");if(dict[v])el.setAttribute("placeholder",dict[v]);});
}
function setLanguage(lang,reload=false){
 if(!["en","he","ar"].includes(lang))lang="en";
 localStorage.setItem(KEY,lang);
 if(reload){location.reload();return;}
 document.documentElement.lang=lang;
 // Keep the document flow LTR while untranslated English fallback content remains on the page.\n // Translated Hebrew/Arabic interface strings receive RTL direction individually.\n document.documentElement.dir="ltr";\n document.body.classList.toggle("rtl-language",lang!=="en");
 document.querySelectorAll("[data-lang]").forEach(b=>{b.classList.toggle("active",b.dataset.lang===lang);b.setAttribute("aria-pressed",b.dataset.lang===lang?"true":"false");});
 translateText(lang);
}
document.querySelectorAll("[data-lang]").forEach(b=>b.addEventListener("click",()=>setLanguage(b.dataset.lang,true)));
setLanguage(localStorage.getItem(KEY)||"en");
})();