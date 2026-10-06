(function () {
  "use strict";
  var copy={
    en:{title:"Was this event useful?",prompt:"Your feedback helps improve the timeline.",helpful:"Helpful",notHelpful:"Not helpful",correction:"Suggest a correction or source",thanks:"Thank you — your feedback was recorded.",email:"Your email app should open with the event details. Add your correction or source and send it.",subject:"Falling Into the Abyss — correction/source suggestion"},
    he:{title:"האם האירוע הזה היה מועיל?",prompt:"המשוב שלך עוזר לשפר את ציר הזמן.",helpful:"מועיל",notHelpful:"לא מועיל",correction:"הצע תיקון או מקור",thanks:"תודה — המשוב שלך נרשם.",email:"אפליקציית הדוא״ל אמורה להיפתח עם פרטי האירוע. הוסף את התיקון או המקור ושלח.",subject:"Falling Into the Abyss — הצעת תיקון או מקור"},
    ar:{title:"هل كانت هذه الحادثة مفيدة؟",prompt:"تساعد ملاحظاتك في تحسين الخط الزمني.",helpful:"مفيد",notHelpful:"غير مفيد",correction:"اقترح تصحيحًا أو مصدرًا",thanks:"شكرًا — تم تسجيل ملاحظاتك.",email:"يجب أن يفتح تطبيق البريد الإلكتروني مع تفاصيل الحدث. أضف التصحيح أو المصدر ثم أرسله.",subject:"Falling Into the Abyss — اقتراح تصحيح أو مصدر"}
  };
  function lang(){var l=(document.documentElement.lang||"en").toLowerCase();return l.indexOf("he")===0?"he":l.indexOf("ar")===0?"ar":"en"}
  function timeline(){var p=location.pathname.toLowerCase();return p.indexOf("christianity")>-1?"Christianity":p.indexOf("islam")>-1?"Islam":"Jewish"}
  function val(id){var e=document.getElementById(id);return e?(e.textContent||"").trim():""}
  function key(){return"fta-feedback:"+timeline()+":"+val("eventTitle")}
  function ga(name,params){if(typeof window.gtag==="function")window.gtag("event",name,Object.assign({timeline:timeline().toLowerCase(),event_title:val("eventTitle"),event_date:val("eventDate")},params||{}))}
  function status(message){var s=document.getElementById("eventFeedbackStatus");if(s)s.textContent=message}
  function paint(){
    var c=copy[lang()];
    document.querySelectorAll("[data-feedback-label]").forEach(function(el){var k=el.getAttribute("data-feedback-label");if(c[k])el.textContent=c[k]});
    var saved="";try{saved=localStorage.getItem(key())||""}catch(e){}
    document.querySelectorAll("[data-feedback]").forEach(function(b){b.classList.toggle("is-selected",b.getAttribute("data-feedback")===saved)});
    status(saved?c.thanks:"");
  }
  function choose(kind,button){
    document.querySelectorAll('[data-feedback="helpful"],[data-feedback="not_helpful"]').forEach(function(b){b.classList.toggle("is-selected",b===button)});
    try{localStorage.setItem(key(),kind)}catch(e){}
    status(copy[lang()].thanks);
    ga("event_feedback",{feedback:kind});
  }
  function correction(){
    var c=copy[lang()];
    ga("correction_suggestion_started");
    status(c.email);
    var subject=encodeURIComponent(c.subject+" — "+val("eventTitle"));
    var body=encodeURIComponent("Timeline: "+timeline()+"\nEvent: "+val("eventTitle")+"\nDate: "+val("eventDate")+"\nPage: "+location.href+"\n\nSuggested correction or additional source:\n");
    window.location.href="mailto:?subject="+subject+"&body="+body;
  }
  function bind(){
    document.querySelectorAll("[data-feedback]").forEach(function(b){
      if(b.dataset.feedbackBound==="1")return;
      b.dataset.feedbackBound="1";
      b.addEventListener("click",function(e){
        e.preventDefault();e.stopPropagation();
        var kind=b.getAttribute("data-feedback");
        if(kind==="helpful"||kind==="not_helpful")choose(kind,b);
        else if(kind==="correction")correction();
      });
    });
    paint();
  }
  document.addEventListener("DOMContentLoaded",function(){
    bind();
    var p=document.getElementById("eventPanel");
    if(p)new MutationObserver(function(){bind()}).observe(p,{attributes:true,childList:true,subtree:true});
    new MutationObserver(function(){paint()}).observe(document.documentElement,{attributes:true,attributeFilter:["lang","dir"]});
  });
})();