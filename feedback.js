(function () {
"use strict";
var copy={
en:{title:"Was this event useful?",prompt:"Your feedback helps improve the timeline.",helpful:"Helpful",notHelpful:"Not helpful",correction:"Suggest a correction or source",thanks:"Thank you — your feedback was recorded.",email:"Your email app should open with the event details.",subject:"Falling Into the Abyss — correction/source suggestion"},
he:{title:"האם האירוע הזה היה מועיל?",prompt:"המשוב שלך עוזר לשפר את ציר הזמן.",helpful:"מועיל",notHelpful:"לא מועיל",correction:"הצע תיקון או מקור",thanks:"תודה — המשוב שלך נרשם.",email:"אפליקציית הדוא״ל אמורה להיפתח עם פרטי האירוע.",subject:"Falling Into the Abyss — הצעת תיקון או מקור"},
ar:{title:"هل كانت هذه الحادثة مفيدة؟",prompt:"تساعد ملاحظاتك في تحسين الخط الزمني.",helpful:"مفيد",notHelpful:"غير مفيد",correction:"اقترح تصحيحًا أو مصدرًا",thanks:"شكرًا — تم تسجيل ملاحظاتك.",email:"يجب أن يفتح تطبيق البريد الإلكتروني مع تفاصيل الحدث.",subject:"Falling Into the Abyss — اقتراح تصحيح أو مصدر"}
};
function language(){var l=(document.documentElement.lang||"en").toLowerCase();return l.indexOf("he")===0?"he":l.indexOf("ar")===0?"ar":"en"}
function timeline(){var p=location.pathname.toLowerCase();return p.indexOf("christianity")>-1?"Christianity":p.indexOf("islam")>-1?"Islam":"Jewish"}
function txt(id){var e=document.getElementById(id);return e?(e.textContent||"").trim():""}
function storageKey(){return"fta-feedback:"+timeline()+":"+txt("eventTitle")}
function send(name,params){if(typeof window.gtag==="function")window.gtag("event",name,Object.assign({timeline:timeline().toLowerCase(),event_title:txt("eventTitle"),event_date:txt("eventDate")},params||{}))}
function setStatus(s){var e=document.getElementById("eventFeedbackStatus");if(e)e.textContent=s}
function translate(){
 var c=copy[language()];
 document.querySelectorAll("[data-feedback-label]").forEach(function(el){var k=el.getAttribute("data-feedback-label");if(c[k])el.textContent=c[k]});
}
function restore(){
 var saved="";try{saved=localStorage.getItem(storageKey())||""}catch(e){}
 document.querySelectorAll("[data-feedback]").forEach(function(b){b.classList.toggle("is-selected",b.getAttribute("data-feedback")===saved)});
 setStatus(saved?copy[language()].thanks:"");
}
function handle(button){
 var kind=button.getAttribute("data-feedback"),c=copy[language()];
 if(kind==="helpful"||kind==="not_helpful"){
   document.querySelectorAll('[data-feedback="helpful"],[data-feedback="not_helpful"]').forEach(function(b){b.classList.toggle("is-selected",b===button)});
   try{localStorage.setItem(storageKey(),kind)}catch(e){}
   setStatus(c.thanks);send("event_feedback",{feedback:kind});return;
 }
 if(kind==="correction"){
   send("correction_suggestion_started");setStatus(c.email);
   var subject=encodeURIComponent(c.subject+" — "+txt("eventTitle"));
   var body=encodeURIComponent("Timeline: "+timeline()+"\nEvent: "+txt("eventTitle")+"\nDate: "+txt("eventDate")+"\nPage: "+location.href+"\n\nSuggested correction or additional source:\n");
   window.location.href="mailto:?subject="+subject+"&body="+body;
 }
}
document.addEventListener("DOMContentLoaded",function(){
 translate();
 document.querySelectorAll("[data-feedback]").forEach(function(b){
   b.addEventListener("click",function(e){e.preventDefault();e.stopPropagation();handle(b)});
 });
 var panel=document.getElementById("eventPanel");
 if(panel){
   panel.addEventListener("transitionend",function(){if(!panel.classList.contains("hidden"))restore()});
 }
});
document.addEventListener("click",function(e){
 var langButton=e.target.closest&&e.target.closest("[data-lang]");
 if(langButton)setTimeout(translate,0);
},false);
})();