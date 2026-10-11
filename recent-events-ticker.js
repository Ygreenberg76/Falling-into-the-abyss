(()=>{"use strict";
const host=document.querySelector(".site-header");if(!host)return;
const style=document.createElement("style");style.textContent=`
.site-header{align-items:center;flex-wrap:wrap;gap:12px 18px}
.site-header>div:first-child{flex:0 1 auto;min-width:0}
.site-header .header-actions{flex:0 1 auto;min-width:0}
.site-header .recent-feed{flex:1 1 320px;min-width:0;width:100%;max-width:none;position:relative;margin:0;padding:9px 44px;border:1px solid #4d647f;border-radius:999px;background:linear-gradient(110deg,#18283b,#101925);color:#eaf2ff;box-sizing:border-box;overflow:hidden}
.site-header .recent-feed[dir="rtl"]{padding:9px 44px;text-align:right}
.recent-feed .rf-heading{font-size:10px;letter-spacing:.06em;font-weight:800;color:#b6d8f3;margin:0 0 4px}
.recent-feed .rf-viewport{width:100%;overflow:hidden;min-width:0}
.recent-feed .rf-track{display:flex;align-items:stretch;width:100%;will-change:transform;transition:transform .55s cubic-bezier(.2,.7,.2,1)}
.recent-feed .rf-slide{flex:0 0 100%;width:100%;min-width:0;box-sizing:border-box}
.recent-feed .rf-link{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;line-clamp:2;overflow:hidden;overflow-wrap:anywhere;text-decoration:none;color:#fff;font-size:clamp(12px,1.1vw,14px);font-weight:700;line-height:1.35;min-height:0}
.recent-feed .rf-link:hover{text-decoration:underline}
.recent-feed .rf-meta{font-size:11px;color:#b9cbe0;margin-top:2px;white-space:normal;overflow-wrap:anywhere;line-height:1.25}
.recent-feed .rf-controls{position:absolute;inset:0;display:flex;align-items:center;justify-content:space-between;pointer-events:none;padding:0 8px;direction:ltr}
.recent-feed .rf-controls button{pointer-events:auto;flex:0 0 auto}
.recent-feed .rf-controls button{background:#293e55;border:1px solid #5b7794;border-radius:999px;color:#fff;font-size:13px;line-height:1;padding:5px 8px;cursor:pointer}
.recent-feed .rf-controls button:hover{background:#3d5873}
@media(max-width:1050px){.site-header .recent-feed{order:3;flex:1 1 100%;width:100%;margin:0}}
@media(max-width:720px){.site-header .recent-feed{order:3;flex:1 1 100%;max-width:none;margin:0}.recent-feed .rf-link{font-size:13px}}
@media(prefers-reduced-motion:reduce){.recent-feed .rf-track{transition:none}}
`;document.head.appendChild(style);
const labels={
en:{heading:"10 MOST RECENT EVENTS",none:"No recently added events yet",prev:"Previous event",next:"Next event",added:"Added",kinds:{jewish:"Jewish",christian:"Christian",islamic:"Islamic"}},
he:{heading:"10 האירועים האחרונים שנוספו",none:"עדיין לא נוספו אירועים חדשים",prev:"לאירוע הקודם",next:"לאירוע הבא",added:"נוסף",kinds:{jewish:"יהדות",christian:"נצרות",islamic:"אסלאם"}},
ar:{heading:"آخر 10 أحداث أُضيفت",none:"لم تُضف أحداث جديدة بعد",prev:"الحدث السابق",next:"الحدث التالي",added:"أُضيف",kinds:{jewish:"اليهودية",christian:"المسيحية",islamic:"الإسلام"}}};
function language(){const query=new URLSearchParams(location.search).get("lang");if(labels[query])return query;const v=document.documentElement.dataset.language;return labels[v]?v:"en"}
function dayValue(s){return /^\d{4}-\d{2}-\d{2}$/.test(s)?Date.parse(s+"T00:00:00Z"):NaN}
const now=new Date();const today=Date.UTC(now.getFullYear(),now.getMonth(),now.getDate());
const items=(window.FALLING_RECENT_EVENTS||[]).filter(e=>{return Number.isFinite(dayValue(e.addedOn))&&labels.en.kinds[e.timeline]&&e.title&&e.title.en&&Number.isFinite(Number(e.year))}).sort((a,b)=>b.addedOn.localeCompare(a.addedOn)).slice(0,10);
const feed=document.createElement("aside");feed.className="recent-feed";feed.setAttribute("aria-label","Recently added historical events");feed.innerHTML='<div class="rf-viewport"><div class="rf-track"></div></div><div class="rf-controls"><button type="button" class="rf-prev">‹</button><button type="button" class="rf-next">›</button></div>';
const track=feed.querySelector(".rf-track"),controls=feed.querySelector(".rf-controls");let index=0;
for(const e of items){const slide=document.createElement("div");slide.className="rf-slide";const link=document.createElement("a");link.className="rf-link";const meta=document.createElement("div");meta.className="rf-meta";slide.append(link,meta);track.appendChild(slide)}
if(!items.length){const slide=document.createElement("div");slide.className="rf-slide";slide.innerHTML='<span class="rf-link"></span>';track.appendChild(slide)}
function urlFor(e,lang){const pages={jewish:"index.html",christian:"christianity.html",islamic:"islam.html"};const match=encodeURIComponent(e.title.en.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,""));return pages[e.timeline]+"?year="+encodeURIComponent(e.year)+"&match="+match+"&lang="+lang}
function render(){const lang=language(),w=labels[lang];feed.dir=lang==="en"?"ltr":"rtl";feed.lang=lang;track.dir="ltr";feed.setAttribute("aria-label",w.heading);controls.hidden=items.length<2;
if(!items.length){track.querySelector(".rf-link").textContent=w.none;return}
items.forEach((e,i)=>{const slide=track.children[i],link=slide.querySelector(".rf-link"),meta=slide.querySelector(".rf-meta");link.href=urlFor(e,lang);link.textContent=e.title[lang]||e.title.en;meta.textContent=w.kinds[e.timeline]+" · "+w.added+" "+new Intl.DateTimeFormat(lang==="he"?"he-IL":lang==="ar"?"ar":"en-US",{month:"short",day:"numeric",year:"numeric",timeZone:"UTC"}).format(new Date(e.addedOn+"T12:00:00Z"))+" · "+(i+1)+"/"+items.length});
track.style.transform="translateX(-"+index*100+"%)"}
function move(n){if(items.length<2)return;index=(index+n+items.length)%items.length;render()}
feed.querySelector(".rf-prev").addEventListener("click",()=>move(-1));feed.querySelector(".rf-next").addEventListener("click",()=>move(1));
document.addEventListener("falling:languagechange",render);
const title=host.querySelector("h1");if(title&&title.parentElement)title.parentElement.insertAdjacentElement("afterend",feed);else host.appendChild(feed);
render();
if(items.length>1&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches){setInterval(()=>{if(document.visibilityState==="visible"&&!feed.matches(":hover")&&!feed.contains(document.activeElement))move(1)},5000)}
})();