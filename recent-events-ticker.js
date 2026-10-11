(()=>{"use strict";
const host=document.querySelector(".site-header");if(!host)return;
const style=document.createElement("style");style.textContent=`
.site-header .recent-feed{flex:1 1 310px;min-width:250px;max-width:490px;position:relative;margin:0 12px;padding:10px 42px 10px 15px;border:1px solid #4d647f;border-radius:12px;background:linear-gradient(110deg,#18283b,#101925);color:#eaf2ff;box-sizing:border-box;overflow:hidden}
.site-header .recent-feed[dir="rtl"]{padding:10px 15px 10px 42px;text-align:right}
.recent-feed .rf-heading{font-size:10px;letter-spacing:.08em;font-weight:800;color:#b6d8f3;margin:0 0 5px}
.recent-feed .rf-link{display:block;text-decoration:none;color:#fff;font-size:14px;font-weight:700;line-height:1.35;min-height:38px}
.recent-feed .rf-link:hover{text-decoration:underline}
.recent-feed .rf-meta{font-size:11px;color:#b9cbe0;margin-top:3px}
.recent-feed .rf-controls{position:absolute;right:9px;top:50%;transform:translateY(-50%);display:flex;flex-direction:column;gap:3px}
.recent-feed[dir="rtl"] .rf-controls{right:auto;left:9px}
.recent-feed .rf-controls button{background:#293e55;border:1px solid #5b7794;border-radius:6px;color:#fff;font-size:13px;line-height:1;padding:5px 8px;cursor:pointer}
.recent-feed .rf-controls button:hover{background:#3d5873}
.recent-feed .rf-slide{animation:rf-in .32s ease-out}
@keyframes rf-in{from{opacity:.2;transform:translateY(5px)}to{opacity:1;transform:translateY(0)}}
@media(max-width:720px){.site-header .recent-feed{order:3;flex-basis:100%;max-width:none;margin:8px 0 0}}
`;document.head.appendChild(style);
const labels={
en:{heading:"RECENTLY ADDED · LAST 5 DAYS",none:"No new timeline events in the last five days",prev:"Previous event",next:"Next event",added:"Added",kinds:{jewish:"Jewish",christian:"Christian",islamic:"Islamic"}},
he:{heading:"נוספו לאחרונה · 5 הימים האחרונים",none:"לא נוספו אירועים לצירי הזמן בחמשת הימים האחרונים",prev:"לאירוע הקודם",next:"לאירוע הבא",added:"נוסף",kinds:{jewish:"יהדות",christian:"נצרות",islamic:"אסלאם"}},
ar:{heading:"أُضيفت حديثًا · آخر 5 أيام",none:"لم تُضف أحداث جديدة إلى الخطوط الزمنية خلال الأيام الخمسة الماضية",prev:"الحدث السابق",next:"الحدث التالي",added:"أُضيف",kinds:{jewish:"اليهودية",christian:"المسيحية",islamic:"الإسلام"}}};
function language(){const query=new URLSearchParams(location.search).get("lang");if(labels[query])return query;const v=document.documentElement.dataset.language;return labels[v]?v:"en"}
function dayValue(s){return /^\d{4}-\d{2}-\d{2}$/.test(s)?Date.parse(s+"T00:00:00Z"):NaN}
const now=new Date();const today=Date.UTC(now.getFullYear(),now.getMonth(),now.getDate());
const items=(window.FALLING_RECENT_EVENTS||[]).filter(e=>{const diff=(today-dayValue(e.addedOn))/86400000;return Number.isInteger(diff)&&diff>=0&&diff<5&&labels.en.kinds[e.timeline]&&e.title&&e.title.en&&Number.isFinite(Number(e.year))}).sort((a,b)=>b.addedOn.localeCompare(a.addedOn)).slice(0,5);
const feed=document.createElement("aside");feed.className="recent-feed";feed.setAttribute("aria-label","Recently added historical events");feed.innerHTML='<div class="rf-heading"></div><div class="rf-slide"><a class="rf-link" href="#"></a><div class="rf-meta"></div></div><div class="rf-controls"><button type="button" class="rf-prev">‹</button><button type="button" class="rf-next">›</button></div>';
const heading=feed.querySelector(".rf-heading"),link=feed.querySelector(".rf-link"),meta=feed.querySelector(".rf-meta"),slide=feed.querySelector(".rf-slide"),controls=feed.querySelector(".rf-controls");let index=0;
function urlFor(e,lang){const pages={jewish:"index.html",christian:"christianity.html",islamic:"islam.html"};const match=encodeURIComponent(e.title.en.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,""));return pages[e.timeline]+"?year="+encodeURIComponent(e.year)+"&match="+match+"&lang="+lang}
function render(){const lang=language(),w=labels[lang];feed.dir=lang==="en"?"ltr":"rtl";feed.lang=lang;heading.textContent=w.heading;controls.hidden=items.length<2;const e=items[index];if(!e){link.removeAttribute("href");link.textContent=w.none;meta.textContent="";return}link.href=urlFor(e,lang);link.textContent=e.title[lang]||e.title.en;meta.textContent=w.kinds[e.timeline]+" · "+w.added+" "+new Intl.DateTimeFormat(lang==="he"?"he-IL":lang==="ar"?"ar":"en-US",{month:"short",day:"numeric",year:"numeric",timeZone:"UTC"}).format(new Date(e.addedOn+"T12:00:00Z"))+" · "+(index+1)+"/"+items.length;slide.style.animation="none";void slide.offsetWidth;slide.style.animation=""}
function move(n){if(items.length<2)return;index=(index+n+items.length)%items.length;render()}
feed.querySelector(".rf-prev").addEventListener("click",()=>move(-1));feed.querySelector(".rf-next").addEventListener("click",()=>move(1));
document.addEventListener("falling:languagechange",render);
const title=host.querySelector("h1");if(title&&title.parentElement)title.parentElement.insertAdjacentElement("afterend",feed);else host.appendChild(feed);
render();
if(items.length>1&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches){setInterval(()=>{if(document.visibilityState==="visible"&&!feed.matches(":hover")&&!feed.contains(document.activeElement))move(1)},5500)}
})();