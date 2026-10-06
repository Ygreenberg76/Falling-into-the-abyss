(function(){"use strict";
var copy={
 en:{title:"Was this event useful?",prompt:"Your feedback helps improve the timeline.",helpful:"Helpful",notHelpful:"Not helpful",correction:"Suggest a correction or source",thanks:"Thank you for the feedback.",emailSubject:"Falling Into the Abyss — correction/source suggestion"},
 he:{title:"האם האירוע הזה היה מועיל?",prompt:"המשוב שלך עוזר לשפר את ציר הזמן.",helpful:"מועיל",notHelpful:"לא מועיל",correction:"הצע תיקון או מקור",thanks:"תודה על המשוב.",emailSubject:"Falling Into the Abyss — הצעת תיקון או מקור"},
 ar:{title:"هل كانت هذه الحادثة مفيدة؟",prompt:"تساعد ملاحظاتك في تحسين الخط الزمني.",helpful:"مفيد",notHelpful:"غير مفيد",correction:"اقترح تصحيحًا أو مصدرًا",thanks:"شكرًا لملاحظاتك.",emailSubject:"Falling Into the Abyss — اقتراح تصحيح أو مصدر"}
};
function lang(){var l=(document.documentElement.lang||localStorage.getItem("preferredLanguage")||"en").toLowerCase();return l.startsWith("he")?"he":l.startsWith("ar")?"ar":"en"}
function timeline(){var p=location.pathname.toLowerCase();return p.includes("christianity")?"Christianity":p.includes("islam")?"Islam":"Jewish"}
function title(){var e=document.getElementById("eventTitle");return e?(e.textContent||"").trim():""}
function date(){var e=document.getElementById("eventDate");return e?(e.textContent||"").trim():""}
function refresh(){var c=copy[lang()];document.querySelectorAll("[data-feedback-label]").forEach(function(e){var k=e.getAttribute("data-feedback-label");if(c[k])e.textContent=c[k]})}
function send(name,params){if(typeof window.gtag==="function")window.gtag("event",name,Object.assign({timeline:timeline().toLowerCase(),event_title:title(),event_date:date()},params||{}))}
document.addEventListener("click",function(e){var b=e.target.closest("[data-feedback]");if(!b)return;var kind=b.getAttribute("data-feedback"),c=copy[lang()],status=document.getElementById("eventFeedbackStatus");
 if(kind==="helpful"||kind==="not_helpful"){document.querySelectorAll('[data-feedback="helpful"],[data-feedback="not_helpful"]').forEach(function(x){x.classList.toggle("is-selected",x===b)});if(status)status.textContent=c.thanks;send("event_feedback",{feedback:kind});try{localStorage.setItem("fta-feedback:"+timeline()+":"+title(),kind)}catch(_){}return}
 if(kind==="correction"){send("correction_suggestion_started");var subject=encodeURIComponent(c.emailSubject+" — "+title());var body=encodeURIComponent("Timeline: "+timeline()+"\nEvent: "+title()+"\nDate: "+date()+"\nPage: "+location.href+"\n\nSuggested correction or additional source:\n");location.href="mailto:?subject="+subject+"&body="+body}
},true);
var obs=new MutationObserver(function(){refresh();var saved;try{saved=localStorage.getItem("fta-feedback:"+timeline()+":"+title())}catch(_){}document.querySelectorAll("[data-feedback]").forEach(function(b){b.classList.toggle("is-selected",b.getAttribute("data-feedback")===saved)});var s=document.getElementById("eventFeedbackStatus");if(s)s.textContent=saved?copy[lang()].thanks:""});
document.addEventListener("DOMContentLoaded",function(){refresh();var p=document.getElementById("eventPanel");if(p)obs.observe(p,{attributes:true,childList:true,subtree:true});obs.observe(document.documentElement,{attributes:true,attributeFilter:["lang","dir"]})});
})();