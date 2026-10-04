const events = [
  {
    year:624, depth:240, title:"Banu Qaynuqa", location:"Medina, Arabia",
    story:"Draft placeholder: an early conflict in Medina involving Muhammad's community and the Jewish tribe Banu Qaynuqa.",
    context:"This entry will be rewritten from primary Islamic literary sources and modern scholarship, with source limitations made explicit.",
    aftermath:"Draft placeholder. Final copy will distinguish reported events from later interpretation.",
    stats:{Type:"Siege / expulsion",Deaths:"Disputed / to verify",Displaced:"To verify"},
    sourceStatus:"Draft — not publication-ready."
  },
  {
    year:625, depth:620, title:"Banu Nadir", location:"Medina, Arabia",
    story:"Draft placeholder for the conflict involving Banu Nadir.",
    context:"Ancient and medieval accounts require careful source criticism because surviving narratives were written after the events.",
    aftermath:"Draft placeholder.",
    stats:{Type:"Siege / expulsion",Deaths:"To verify",Displaced:"To verify"},
    sourceStatus:"Draft — not publication-ready."
  },
  {
    year:627, depth:1040, title:"Banu Qurayza", location:"Medina, Arabia",
    story:"Draft placeholder for the siege and surrender of Banu Qurayza.",
    context:"Reported casualty numbers and details vary by source and scholarly interpretation.",
    aftermath:"Draft placeholder.",
    stats:{Type:"Siege / executions",Deaths:"Disputed",Captives:"To verify"},
    sourceStatus:"Draft — requires primary-source and academic citations."
  },
  {
    year:628, depth:1450, title:"Khaybar", location:"Khaybar, Arabia",
    story:"Draft placeholder for the campaign at Khaybar.",
    context:"Final entry will distinguish military events, treaties, later traditions, and disputed details.",
    aftermath:"Draft placeholder.",
    stats:{Type:"Military campaign",Deaths:"To verify",Outcome:"To verify"},
    sourceStatus:"Draft — not publication-ready."
  },
  {
    year:1920, depth:2120, title:"Nebi Musa riots", location:"Jerusalem, Mandatory Palestine",
    story:"Draft placeholder for the 1920 Jerusalem violence.",
    context:"The modern period will use British records, contemporary reporting, and academic histories.",
    aftermath:"Draft placeholder.",
    stats:{Type:"Riots",Jewish_deaths:"To verify",Arab_deaths:"To verify"},
    sourceStatus:"Draft — statistics intentionally withheld until sourced."
  },
  {
    year:1929, depth:2520, title:"Hebron massacre", location:"Hebron, Mandatory Palestine",
    story:"Draft placeholder for the killings of Jewish residents during the 1929 Palestine disturbances.",
    context:"Final entry will cover causes, local relations before the violence, British Mandate context, and rescue efforts alongside the killings.",
    aftermath:"Draft placeholder.",
    stats:{Type:"Massacre / riot",Jewish_deaths:"67 (verify in final sourcing)",Injured:"To verify"},
    sourceStatus:"Draft — number shown provisionally and will be source-cited."
  },
  {
    year:1941, depth:2970, title:"Farhud", location:"Baghdad, Iraq",
    story:"On June 1–2, 1941, anti-Jewish mob violence erupted in Baghdad. The United States Holocaust Memorial Museum describes the Farhud as a turning point in the history of Iraqi Jewry.",
    context:"The violence followed a pro-German coup and its collapse during World War II. USHMM notes that political turmoil, anti-British nationalism, antisemitic ideology and Nazi propaganda all formed part of the setting.",
    aftermath:"USHMM reports that rioters murdered between 150 and 180 Jews and injured about 600; an Iraqi investigating commission recorded 128 Jewish deaths and 210 injuries. Homes and businesses were looted and damaged.",
    stats:{Type:"Pogrom / mass violence",Jewish_deaths:"150–180 (USHMM range)",Jewish_injured:"About 600",Homes_businesses_looted:"About 1,500"},
    sourceStatus:"High-quality institutional source for the modern event; the source itself notes differing official and community casualty totals.",
    sources:[{label:"U.S. Holocaust Memorial Museum — The Farhud",url:"https://encyclopedia.ushmm.org/content/en/article/the-farhud"}]
  },
  {
    year:1948, depth:3430, title:"1948 Arab–Israeli War", location:"Israel / Palestine and neighboring fronts",
    story:"Following the UN partition resolution of November 29, 1947, fighting intensified between Jewish and Arab forces in Mandatory Palestine. After Israel declared independence on May 14, 1948, armies from neighboring Arab states entered the former mandate and the conflict became an interstate war.",
    context:"The U.S. State Department's historical account distinguishes the fighting that began after partition from the invasion that followed Israel's declaration of independence. The full site will separately document Palestinian displacement, Jewish displacement and casualties, individual battles, atrocities, and competing historical interpretations.",
    aftermath:"Fighting continued into 1949. Separate armistice agreements were concluded between Israel and Egypt, Lebanon, Transjordan and Syria; Egypt retained the Gaza Strip and Jordan controlled the West Bank until 1967.",
    stats:{Type:"Civil war + interstate war",Start_phase:"After UN partition, Nov. 1947",Interstate_phase:"May 1948",Armistices:"1949"},
    sourceStatus:"Institutional diplomatic history; casualty and displacement totals will be added only with additional dedicated sources.",
    sources:[{label:"U.S. State Department — Arab-Israeli War of 1948",url:"https://history.state.gov/milestones/1945-1952/arab-israeli-war"}]
  },
  {
    year:1967, depth:3890, title:"Six-Day War", location:"Israel, Egypt, Jordan, Syria",
    story:"War erupted on June 5, 1967 and ended on June 10. The conflict involved Israel and neighboring Arab states, principally Egypt, Jordan and Syria.",
    context:"Declassified U.S. diplomatic records document the outbreak of heavy fighting on June 5 and intensive U.S.–Soviet communications during the six-day conflict.",
    aftermath:"The war radically changed the territorial and diplomatic landscape of the Arab–Israeli conflict. A separate research entry will document territorial changes, casualties and displacement with dedicated sources.",
    stats:{Type:"War",Began:"June 5, 1967",Ended:"June 10, 1967",Duration:"6 days"},
    sourceStatus:"Dates anchored to declassified U.S. diplomatic records; detailed casualty figures still require dedicated sourcing.",
    sources:[{label:"U.S. State Department — FRUS, Six-Day War documentation",url:"https://history.state.gov/historicaldocuments/frus1964-68v14/d217"}]
  },
  {
    year:1973, depth:4280, title:"Yom Kippur War", location:"Sinai and Golan Heights",
    story:"On October 6, 1973, Egypt and Syria launched a coordinated surprise attack on Israel, beginning the war known in Israel as the Yom Kippur War and in Arab contexts as the October War.",
    context:"U.S. State Department historical documents record the October 6 opening attack and the intense superpower diplomacy surrounding the war.",
    aftermath:"The fighting ended later in October after a U.S.–Soviet sponsored UN Security Council ceasefire process. The conflict reshaped subsequent diplomacy, including disengagement negotiations.",
    stats:{Type:"War",Began:"October 6, 1973",Ceasefire_period:"Late October 1973",Belligerents:"Israel; Egypt; Syria and allies"},
    sourceStatus:"Dates and opening circumstances anchored to U.S. diplomatic records. Detailed casualty totals will be sourced separately.",
    sources:[{label:"U.S. State Department — 1973 war editorial note",url:"https://history.state.gov/historicaldocuments/frus1969-76v36/d209"}]
  },
  {
    year:2023, depth:4840, title:"October 7 and subsequent war", location:"Israel and Gaza",
    story:"Draft placeholder for the October 7, 2023 Hamas-led attack and the war that followed.",
    context:"Because casualty numbers and legal/political assessments remain contested and updated, this section will rely on dated sources and clearly identify uncertainty.",
    aftermath:"Ongoing historical consequences extend beyond the initial event.",
    stats:{Type:"Mass attack / war",Deaths:"To be sourced by date",Status:"Modern / evolving record"},
    sourceStatus:"Draft — requires date-specific sourcing."
  }
];

const MAX_DEPTH=5200;
let depth=0, velocity=0, paused=false, rafId=0;
const reduced=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const abyss=document.getElementById("abyss");
const person=document.getElementById("fallingPerson");
const eventsLayer=document.getElementById("eventsLayer");
const yearReadout=document.getElementById("yearReadout");
const depthReadout=document.getElementById("depthReadout");
const progressFill=document.getElementById("progressFill");
const speedLines=document.getElementById("speedLines");
const fallTrail=document.getElementById("fallTrail");
const rockLeft=document.querySelector(".rock-left");
const rockRight=document.querySelector(".rock-right");
const rockFarLeft=document.querySelector(".rock-far-left");
const rockFarRight=document.querySelector(".rock-far-right");
const rockMidLeft=document.querySelector(".rock-mid-left");
const rockMidRight=document.querySelector(".rock-mid-right");
const bottomMarker=document.getElementById("bottomMarker");
const mist1=document.querySelector(".mist-1");
const mist2=document.querySelector(".mist-2");
const panel=document.getElementById("eventPanel");
const aboutPanel=document.getElementById("aboutPanel");

function makeParticles(){
  const wrap=document.getElementById("particles");
  for(let i=0;i<46;i++){
    const s=document.createElement("span");
    s.style.left=(8+Math.random()*84)+"%";
    s.style.top=(Math.random()*100)+"%";
    s.style.opacity=(.08+Math.random()*.25).toFixed(2);
    s.style.transform="scale("+(0.6+Math.random()*1.5)+")";
    wrap.appendChild(s);
  }
}
function yearAt(d){
  const points=[{depth:0,year:622},...events,{depth:MAX_DEPTH,year:2026}];
  let a=points[0],b=points[1];
  for(let i=1;i<points.length;i++){
    if(d<=points[i].depth){b=points[i];a=points[i-1];break}
  }
  const span=Math.max(1,b.depth-a.depth);
  const t=Math.max(0,Math.min(1,(d-a.depth)/span));
  return Math.round(a.year+(b.year-a.year)*t);
}
const markerEls=events.map((event,index)=>{
  const btn=document.createElement("button");
  btn.type="button";
  btn.className="event-marker";
  btn.setAttribute("aria-label",event.year+" — "+event.title+". Open event details.");
  if(index%2===0) btn.style.left="7%"; else btn.style.right="7%";
  btn.innerHTML='<span class="dot"></span><span><small>'+event.year+'</small><strong>'+event.title+'</strong></span>';
  btn.addEventListener("click",e=>{e.preventDefault();e.stopPropagation();openEvent(event)});
  eventsLayer.appendChild(btn);
  return btn;
});
function renderEvents(){
  const center=abyss.clientHeight/2;
  events.forEach((event,index)=>{
    const y=center+(event.depth-depth);
    const btn=markerEls[index];
    btn.style.top=(y-30)+"px";
    btn.style.display=(y<-120||y>abyss.clientHeight+120)?"none":"grid";
  });
}
function render(){
  const pct=Math.round((depth/MAX_DEPTH)*100);
  yearReadout.textContent=yearAt(depth);
  depthReadout.textContent=pct+"%";
  progressFill.style.height=pct+"%";

  const speed=Math.min(1,Math.abs(velocity)/105);
  speedLines.style.opacity=(speed*.85).toFixed(2);
  fallTrail.style.opacity=(.12+speed*.5).toFixed(2);

  const direction=velocity>=0?1:-1;
  const stretch=1+speed*.28;
  const squash=1-speed*.1;
  const rotate=(depth*.035)+(direction*speed*8);
  const bob=Math.sin(depth/95)*4;

  person.style.transform='translate(-50%,calc(-50% + '+bob+'px)) rotate('+rotate+'deg) scale('+squash+','+stretch+')';
  const armSwing=10+direction*speed*28+Math.sin(depth/80)*7;
  const legSwing=4+speed*16+Math.cos(depth/105)*5;
  document.querySelector(".arm-svg-left").style.transform='rotate('+armSwing+'deg)';
  document.querySelector(".arm-svg-right").style.transform='rotate('+(-armSwing*.82)+'deg)';
  document.querySelector(".leg-svg-left").style.transform='rotate('+legSwing+'deg)';
  document.querySelector(".leg-svg-right").style.transform='rotate('+(-legSwing*.75)+'deg)';

  rockLeft.style.transform='translateY('+((depth%760)*-.24)+'px)';
  rockRight.style.transform='translateY('+((depth%820)*-.22)+'px)';
  rockMidLeft.style.transform='translateY('+((depth%980)*-.13)+'px)';
  rockMidRight.style.transform='translateY('+((depth%1040)*-.12)+'px)';
  rockFarLeft.style.transform='translateY('+((depth%1300)*-.07)+'px)';
  rockFarRight.style.transform='translateY('+((depth%1380)*-.065)+'px)';
  mist1.style.transform='translateY('+((depth%900)*-.23)+'px)';
  mist2.style.transform='translateY('+((depth%1100)*-.18)+'px)';

  abyss.style.background=
    'radial-gradient(ellipse at 50% 15%,rgba(132,204,255,'+(0.18*(1-pct/120))+'),transparent 20%),'+
    'radial-gradient(ellipse at 50% 78%,rgba(74,47,20,.12),transparent 34%),'+
    'linear-gradient(#161821 0%,#0c0d12 '+Math.max(18,30-pct*.12)+'%,#07070a 64%,#020203 100%)';

  bottomMarker.classList.toggle("visible",pct>=94);
  document.querySelectorAll(".particles span").forEach((p,i)=>{
    const drift=((depth*(.04+(i%5)*.009))%(abyss.clientHeight+80));
    p.style.transform='translateY('+(-drift)+'px) translateX('+(Math.sin((depth+i*31)/130)*8)+'px)';
  });
  renderEvents();
}
function tick(){
  if(!paused&&!reduced){
    depth=Math.max(0,Math.min(MAX_DEPTH,depth+velocity));
    velocity*=.84;
    if(Math.abs(velocity)<.05)velocity=0;
  }
  render();
  rafId=requestAnimationFrame(tick);
}
function descend(delta){
  if(paused)return;
  const scaled=Math.max(-260,Math.min(260,delta));
  depth=Math.max(0,Math.min(MAX_DEPTH,depth+scaled*.72));
  velocity=Math.max(-115,Math.min(115,velocity+scaled*.037));
}
function openEvent(event){
  paused=true;velocity=0;
  document.getElementById("eventDate").textContent=event.year;
  document.getElementById("eventTitle").textContent=event.title;
  document.getElementById("eventLocation").textContent=event.location;
  document.getElementById("eventStory").textContent=event.story;
  document.getElementById("eventContext").textContent=event.context;
  document.getElementById("eventAftermath").textContent=event.aftermath;
  document.getElementById("eventSourceStatus").textContent=event.sourceStatus;
  const sourceWrap=document.getElementById("eventSources");
  sourceWrap.innerHTML="";
  (event.sources||[]).forEach(source=>{
    const a=document.createElement("a");
    a.href=source.url;a.target="_blank";a.rel="noopener noreferrer";a.textContent=source.label;
    sourceWrap.appendChild(a);
  });
  if(!(event.sources||[]).length){
    const note=document.createElement("span");
    note.textContent="Source review still in progress.";
    sourceWrap.appendChild(note);
  }
  const dl=document.getElementById("eventStats");
  dl.innerHTML="";
  Object.entries(event.stats).forEach(([k,v])=>{
    const row=document.createElement("div");
    const dt=document.createElement("dt");
    const dd=document.createElement("dd");
    dt.textContent=k.replaceAll("_"," ");
    dd.textContent=v;
    row.append(dt,dd);dl.appendChild(row);
  });
  panel.classList.remove("hidden");
  document.body.classList.add("event-open");
  document.getElementById("closeEventBtn").focus();
}
function restart(){
  depth=0;velocity=0;paused=false;
  panel.classList.add("hidden");
  document.body.classList.remove("event-open");
  aboutPanel.classList.add("hidden");
  document.getElementById("intro").scrollIntoView({behavior:reduced?"auto":"smooth"});
}
abyss.addEventListener("wheel",e=>{e.preventDefault();descend(e.deltaY)},{passive:false});
let touchY=null;
abyss.addEventListener("touchstart",e=>{touchY=e.touches[0].clientY},{passive:true});
abyss.addEventListener("touchmove",e=>{if(touchY===null)return;const y=e.touches[0].clientY;descend((touchY-y)*2.2);touchY=y},{passive:true});
abyss.addEventListener("touchend",()=>touchY=null,{passive:true});
abyss.addEventListener("keydown",e=>{
  if(["ArrowDown","PageDown"," "].includes(e.key)){e.preventDefault();descend(230)}
  if(["ArrowUp","PageUp"].includes(e.key)){e.preventDefault();descend(-230)}
});
document.getElementById("beginBtn").addEventListener("click",()=>{abyss.scrollIntoView({behavior:reduced?"auto":"smooth"});abyss.focus()});
document.getElementById("restartBtn").addEventListener("click",restart);
document.getElementById("closeEventBtn").addEventListener("click",()=>{panel.classList.add("hidden");document.body.classList.remove("event-open");paused=false;abyss.focus()});
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!panel.classList.contains("hidden")){panel.classList.add("hidden");document.body.classList.remove("event-open");paused=false;abyss.focus()}});
document.getElementById("aboutBtn").addEventListener("click",()=>{aboutPanel.classList.remove("hidden");aboutPanel.scrollIntoView({behavior:reduced?"auto":"smooth"})});
document.getElementById("closeAboutBtn").addEventListener("click",()=>aboutPanel.classList.add("hidden"));
makeParticles();render();rafId=requestAnimationFrame(tick);