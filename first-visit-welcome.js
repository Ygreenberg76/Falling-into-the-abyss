(()=>{"use strict";
const KEY="fallingWelcomeSeenV1",LANG_KEY="fallingLanguageV1";
const words={
en:{eyebrow:"WELCOME TO FALLING INTO THE ABYSS",title:"Explore history from three perspectives",body:"Travel through Jewish, Christian, and Islamic history. Scroll through time, select an event to discover what happened, and explore sources and different perspectives.",start:"Start Exploring",guide:"How to Use",close:"Close welcome message"},
he:{eyebrow:"ברוכים הבאים לנופלים אל התהום",title:"גלו את ההיסטוריה משלוש נקודות מבט",body:"צאו למסע בהיסטוריה היהודית, הנוצרית והאסלאמית. גללו לאורך ציר הזמן, לחצו על אירוע כדי לגלות מה קרה, ועיינו במקורות ובנקודות מבט שונות.",start:"מתחילים לחקור",guide:"איך משתמשים באתר",close:"סגירת הודעת הפתיחה"},
ar:{eyebrow:"مرحبًا بكم في السقوط في الهاوية",title:"اكتشف التاريخ من ثلاث وجهات نظر",body:"انطلق في رحلة عبر التاريخ اليهودي والمسيحي والإسلامي. مرّر عبر الزمن، واختر حدثًا لمعرفة ما جرى، واستكشف المصادر ووجهات النظر المختلفة.",start:"ابدأ الاستكشاف",guide:"كيفية استخدام الموقع",close:"إغلاق رسالة الترحيب"}
};
let seen=false;try{seen=localStorage.getItem(KEY)==="yes"}catch(e){}if(seen)return;
const style=document.createElement("style");style.textContent=`
.fw-overlay{position:fixed;inset:0;z-index:99999;background:rgba(3,8,17,.72);display:flex;align-items:center;justify-content:center;padding:20px;overflow-y:auto;box-sizing:border-box}
.fw-dialog{position:relative;width:min(100%,510px);max-height:calc(100dvh - 40px);overflow-y:auto;box-sizing:border-box;padding:32px 32px 28px;background:#171f2c;color:#f1f5fb;border:1px solid #6689a7;border-radius:20px;box-shadow:0 24px 75px #000b;text-align:start;line-height:1.65}
.fw-dialog[dir="rtl"]{text-align:right}
.fw-eyebrow{margin:0 34px 12px 0;font-size:12px;font-weight:700;letter-spacing:.1em;color:#a8dafa}
.fw-dialog[dir="rtl"] .fw-eyebrow{margin:0 0 12px 34px;letter-spacing:0}
.fw-dialog h2{font-size:clamp(22px,4vw,30px);line-height:1.25;margin:0 0 15px;color:#fff}
.fw-dialog p.fw-body{font-size:16px;color:#d4deec;margin:0 0 23px}
.fw-actions{display:flex;flex-wrap:wrap;gap:11px}
.fw-actions button,.fw-actions a{font:inherit;font-size:15px;font-weight:700;padding:11px 19px;border-radius:999px;text-decoration:none;cursor:pointer;display:inline-flex;align-items:center;justify-content:center}
.fw-start{background:#a8dafa;color:#0d2335;border:1px solid #a8dafa}
.fw-guide{background:transparent;color:#e6f1ff;border:1px solid #6e90b0}
.fw-dismiss{position:absolute;top:12px;right:13px;border:0;background:transparent;color:#e8eff8;font-size:26px;line-height:1;padding:6px 11px;cursor:pointer}
.fw-dialog[dir="rtl"] .fw-dismiss{right:auto;left:13px}
@media(max-width:520px){.fw-dialog{padding:28px 21px 24px}.fw-actions>*{flex:1}}
`;document.head.appendChild(style);
const overlay=document.createElement("div");overlay.className="fw-overlay";
overlay.innerHTML='<section class="fw-dialog" role="dialog" aria-modal="true" aria-labelledby="fw-title" tabindex="-1"><button type="button" class="fw-dismiss" aria-label="Close">×</button><p class="fw-eyebrow"></p><h2 id="fw-title"></h2><p class="fw-body"></p><div class="fw-actions"><button type="button" class="fw-start"></button><a class="fw-guide" href="tutorial.html"></a></div></section>';
const dialog=overlay.querySelector(".fw-dialog");let lastFocus=document.activeElement;
function lang(){const query=new URLSearchParams(location.search).get("lang");if(words[query])return query;const selected=document.documentElement.dataset.language; if(words[selected])return selected;try{const saved=localStorage.getItem(LANG_KEY);if(words[saved])return saved}catch(e){}return "en"}
function translate(){const code=lang(),w=words[code];dialog.lang=code;dialog.dir=code==="en"?"ltr":"rtl";overlay.querySelector(".fw-eyebrow").textContent=w.eyebrow;overlay.querySelector("#fw-title").textContent=w.title;overlay.querySelector(".fw-body").textContent=w.body;overlay.querySelector(".fw-start").textContent=w.start;overlay.querySelector(".fw-guide").textContent=w.guide;overlay.querySelector(".fw-guide").href="tutorial.html?lang="+code;overlay.querySelector(".fw-dismiss").setAttribute("aria-label",w.close)}
function dismiss(){try{localStorage.setItem(KEY,"yes")}catch(e){}overlay.remove();document.removeEventListener("keydown",keys);document.removeEventListener("falling:languagechange",translate);if(lastFocus&&lastFocus.isConnected)lastFocus.focus({preventScroll:true})}
function keys(e){if(e.key==="Escape"){dismiss();return}if(e.key!=="Tab")return;const focusable=[...dialog.querySelectorAll('button,a[href]')];const first=focusable[0],last=focusable[focusable.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}}
overlay.querySelector(".fw-dismiss").addEventListener("click",dismiss);
overlay.querySelector(".fw-start").addEventListener("click",dismiss);
overlay.querySelector(".fw-guide").addEventListener("click",()=>{try{localStorage.setItem(KEY,"yes")}catch(e){}});
document.addEventListener("keydown",keys);document.addEventListener("falling:languagechange",translate);
translate();document.body.appendChild(overlay);overlay.querySelector(".fw-start").focus({preventScroll:true});
})();