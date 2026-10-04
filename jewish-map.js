(()=>{
"use strict";
const yearEl=document.getElementById("yearReadout");
const mapYear=document.getElementById("mapYear");
const countEl=document.getElementById("mapCommunityCount");
const dots=document.getElementById("mapDots");
const flows=document.getElementById("mapFlows");
const legend=document.getElementById("mapLegend");
if(!yearEl||!mapYear||!countEl||!dots||!legend||!flows)return;

const periods=[
 {from:-1800,to:-722,c:[["Canaan / Israel",31.8,35.2,5]]},
 {from:-721,to:-587,c:[["Judah / Jerusalem",31.8,35.2,5],["Mesopotamia",33.3,44.4,2]]},
 {from:-586,to:-332,c:[["Babylonia",32.5,44.5,5],["Judea",31.8,35.2,3],["Egypt",30,31.2,2]]},
 {from:-331,to:69,c:[["Judea",31.8,35.2,5],["Babylonia",32.5,44.5,4],["Alexandria",31.2,29.9,4],["Asia Minor",39,32.5,2],["Rome",41.9,12.5,2]]},
 {from:70,to:499,c:[["Galilee / Palestine",32.8,35.5,4],["Babylonia",32.5,44.5,5],["Italy",41.9,12.5,2],["North Africa",34,10,2]]},
 {from:500,to:999,c:[["Babylonia",32.5,44.5,5],["Levant",32,35.2,3],["Iberia",40,-4,4],["North Africa",33.5,3,3],["Italy",42,12.5,2]]},
 {from:1000,to:1299,c:[["Iberia",40,-4,5],["France",47,2,3],["Rhineland",50.3,7.5,3],["North Africa",33.5,3,3],["Egypt",30,31.2,3],["Iraq",33,44,2]]},
 {from:1300,to:1491,c:[["Iberia",40,-4,5],["Italy",42,12.5,3],["Poland",52,19,4],["Ottoman lands",41,29,2],["North Africa",33.5,3,3]]},
 {from:1492,to:1647,c:[["Ottoman Empire",41,29,5],["Poland–Lithuania",52.5,23,5],["Italy",42,12.5,3],["North Africa",33.5,3,3],["Netherlands",52.1,5.3,2],["Levant",32,35.2,2]]},
 {from:1648,to:1799,c:[["Poland–Lithuania",52.5,23,5],["Ottoman Empire",41,29,4],["German lands",51,10,3],["Netherlands",52.1,5.3,3],["North Africa",33.5,3,3],["Americas",40.7,-74,1]]},
 {from:1800,to:1880,c:[["Russian Empire / Pale",52,27,6],["Central Europe",49,15,4],["Ottoman lands",41,29,3],["North Africa",33.5,3,3],["United States",40.7,-74,2]]},
 {from:1881,to:1932,c:[["Eastern Europe",52,27,6],["Central Europe",49,15,4],["United States",40.7,-74,5],["Palestine",32,35.2,3],["North Africa",33.5,3,3],["Argentina",-34.6,-58.4,2]]},
 {from:1933,to:1945,c:[["Eastern Europe",52,27,4],["United States",40.7,-74,5],["Palestine",32,35.2,4],["Soviet Union",55.8,37.6,3],["North Africa",33.5,3,3],["Latin America",-23.5,-46.6,2]]},
 {from:1946,to:1989,c:[["Israel",31.8,35,6],["United States",40.7,-74,6],["Soviet Union",55.8,37.6,4],["Western Europe",48.9,2.3,3],["North Africa",33.5,3,2],["Latin America",-34.6,-58.4,2]]},
 {from:1990,to:2026,c:[["Israel",31.8,35,7],["United States",40.7,-74,6],["France",48.9,2.3,3],["Canada",43.7,-79.4,2],["United Kingdom",51.5,-.1,2],["Russia",55.8,37.6,2],["Argentina",-34.6,-58.4,2],["Australia",-33.9,151.2,2]]}
];

const migrations=[
 {from:-586,to:-539,type:"forced",label:"Babylonian Exile",routes:[[31.8,35.2,32.5,44.5]]},
 {from:70,to:250,type:"dispersal",label:"Roman-era dispersal",routes:[[31.8,35.2,41.9,12.5],[31.8,35.2,31.2,29.9],[31.8,35.2,39,32.5]]},
 {from:1492,to:1550,type:"forced",label:"Expulsion from Iberia",routes:[[40,-4,41,29],[40,-4,33.5,3],[40,-4,42,12.5],[40,-4,52.1,5.3]]},
 {from:1881,to:1924,type:"migration",label:"Eastern European emigration",routes:[[52,27,40.7,-74],[52,27,32,35.2]]},
 {from:1933,to:1945,type:"forced",label:"Flight and forced displacement under Nazi persecution",routes:[[50,15,40.7,-74],[50,15,32,35.2], [50,15,-23.5,-46.6]]},
 {from:1948,to:1975,type:"migration",label:"Post-1948 migration from Middle East and North Africa",routes:[[33.5,3,31.8,35],[33,44,31.8,35],[33.5,3,48.9,2.3]]},
 {from:1989,to:2005,type:"migration",label:"Post-Soviet emigration",routes:[[55.8,37.6,31.8,35],[55.8,37.6,40.7,-74]]}
];
function curvePath(a,b){
 const p1=point(a[0],a[1]),p2=point(b[0],b[1]);
 const mx=(p1.x+p2.x)/2,my=(p1.y+p2.y)/2-Math.min(18,Math.abs(p2.x-p1.x)*.12+5);
 return "M"+p1.x+" "+p1.y+" Q"+mx+" "+my+" "+p2.x+" "+p2.y;
}
function drawFlows(year){
 flows.replaceChildren();
 const ns="http://www.w3.org/2000/svg";
 migrations.filter(m=>year>=m.from&&year<=m.to).forEach(m=>{
  m.routes.forEach(r=>{
   const path=document.createElementNS(ns,"path");
   path.setAttribute("d",curvePath([r[0],r[1]],[r[2],r[3]]));
   path.setAttribute("class","map-flow map-flow-"+m.type);
   const title=document.createElementNS(ns,"title");title.textContent=m.label;path.appendChild(title);
   flows.appendChild(path);
  });
 });
}

function parseYear(){
 const t=yearEl.textContent.trim();
 const n=parseInt(t.replace(/[^0-9]/g,""),10);
 if(!Number.isFinite(n))return null;
 return /BCE/i.test(t)?-n:n;
}
function point(lat,lon){return{x:lon+180,y:90-lat}}
let lastKey="";
function draw(){
 const year=parseYear(); if(year===null)return;
 mapYear.textContent=year<0?Math.abs(year)+" BCE":year+" CE";
 drawFlows(year);
 const p=periods.find(x=>year>=x.from&&year<=x.to)||periods[periods.length-1];
 const key=p.from+":"+p.to;if(key===lastKey)return;lastKey=key;
 dots.replaceChildren();legend.replaceChildren();
 p.c.forEach(([name,lat,lon,w])=>{
  const q=point(lat,lon),ns="http://www.w3.org/2000/svg";
  const g=document.createElementNS(ns,"g");
  const halo=document.createElementNS(ns,"circle");
  halo.setAttribute("cx",q.x);halo.setAttribute("cy",q.y);halo.setAttribute("r",3+w);halo.setAttribute("class","map-community");halo.setAttribute("opacity",".32");
  const dot=document.createElementNS(ns,"circle");
  dot.setAttribute("cx",q.x);dot.setAttribute("cy",q.y);dot.setAttribute("r",1.3+w*.42);dot.setAttribute("class","map-community-core");
  g.append(halo,dot);dots.appendChild(g);
  const tag=document.createElement("span");tag.textContent=name;legend.appendChild(tag);
 });
 countEl.textContent=p.c.length+" center"+(p.c.length===1?"":"s");
}
draw();
new MutationObserver(draw).observe(yearEl,{childList:true,characterData:true,subtree:true});
})();