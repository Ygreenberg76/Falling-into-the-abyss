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
    story:"Draft placeholder for the anti-Jewish violence in Baghdad in June 1941.",
    context:"Final entry will cover Iraqi political instability, wartime propaganda, nationalism, and the immediate trigger.",
    aftermath:"Draft placeholder.",
    stats:{Type:"Pogrom",Jewish_deaths:"Approx. 150–180 (verify)",Injured:"Approx. 600 (verify)"},
    sourceStatus:"Draft — figures will be tied to specific archival/academic sources."
  },
  {
    year:1948, depth:3430, title:"1948 Arab–Israeli War", location:"Israel / Palestine and neighboring fronts",
    story:"Draft placeholder for the interstate war following Israel's declaration of independence and the preceding civil-war phase.",
    context:"The final entry will separate the 1947–48 civil war, interstate invasion, Palestinian displacement, Jewish losses, and competing interpretations.",
    aftermath:"Draft placeholder.",
    stats:{Type:"War",Deaths:"To verify by category",Displaced:"To verify by source"},
    sourceStatus:"Draft — requires multi-source treatment."
  },
  {
    year:1967, depth:3890, title:"Six-Day War", location:"Israel, Egypt, Jordan, Syria",
    story:"Draft placeholder for the June 1967 war.",
    context:"Final entry will cover prewar escalation, mobilization, opening strikes, territorial changes, casualties, and aftermath.",
    aftermath:"Draft placeholder.",
    stats:{Type:"War",Deaths:"To verify",Duration:"6 days"},
    sourceStatus:"Draft — not publication-ready."
  },
  {
    year:1973, depth:4280, title:"Yom Kippur War", location:"Sinai and Golan Heights",
    story:"Draft placeholder for the October 1973 war.",
    context:"Final entry will cover the surprise Egyptian-Syrian attack, battlefield phases, superpower diplomacy, and casualty estimates.",
    aftermath:"Draft placeholder.",
    stats:{Type:"War",Deaths:"To verify",Duration:"Oct. 1973"},
    sourceStatus:"Draft — not publication-ready."
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
function renderEvents(){
  eventsLayer.innerHTML="";
  const center=abyss.clientHeight/2;
  events.forEach((event,index)=>{
    const y=center+(event.depth-depth);
    if(y<-120||y>abyss.clientHeight+120)return;
    const btn=document.createElement("button");
    btn.type="button";
    btn.className="event-marker";
    btn.style.top=(y-30)+"px";
    if(index%2===0) btn.style.left="7%";
    else btn.style.right="7%";
    btn.innerHTML='<span class="dot"></span><span><small>'+event.year+'</small><strong>'+event.title+'</strong></span>';
    btn.addEventListener("click",()=>openEvent(event));
    eventsLayer.appendChild(btn);
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
  const armSwing=48+speed*18;
  const legSwing=19+speed*14;
  document.querySelector(".arm-left").style.transform='rotate('+armSwing+'deg)';
  document.querySelector(".arm-right").style.transform='rotate('+(-armSwing)+'deg)';
  document.querySelector(".leg-left").style.transform='rotate('+legSwing+'deg)';
  document.querySelector(".leg-right").style.transform='rotate('+(-legSwing)+'deg)';

  rockLeft.style.transform='translateY('+((depth%650)*-.18)+'px)';
  rockRight.style.transform='translateY('+((depth%720)*-.16)+'px)';
  mist1.style.transform='translateY('+((depth%900)*-.23)+'px)';
  mist2.style.transform='translateY('+((depth%1100)*-.18)+'px)';

  abyss.style.background=
    'radial-gradient(ellipse at 50% 15%,rgba(132,204,255,'+(0.18*(1-pct/120))+'),transparent 20%),'+
    'radial-gradient(ellipse at 50% 78%,rgba(74,47,20,.12),transparent 34%),'+
    'linear-gradient(#161821 0%,#0c0d12 '+Math.max(18,30-pct*.12)+'%,#07070a 64%,#020203 100%)';

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
  panel.scrollIntoView({behavior:reduced?"auto":"smooth",block:"start"});
}
function restart(){
  depth=0;velocity=0;paused=false;
  panel.classList.add("hidden");
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
document.getElementById("closeEventBtn").addEventListener("click",()=>{panel.classList.add("hidden");paused=false;abyss.focus()});
document.getElementById("aboutBtn").addEventListener("click",()=>{aboutPanel.classList.remove("hidden");aboutPanel.scrollIntoView({behavior:reduced?"auto":"smooth"})});
document.getElementById("closeAboutBtn").addEventListener("click",()=>aboutPanel.classList.add("hidden"));
makeParticles();render();rafId=requestAnimationFrame(tick);