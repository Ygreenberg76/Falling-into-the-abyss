// Automatically refresh the banner manifest after timeline data changes.
// Run by GitHub Actions on pushes affecting the three event data files.
const fs=require('fs'),cp=require('child_process'),vm=require('vm');
const paths=[['app.js','jewish'],['christianity.js','christian'],['islam.js','islamic']];
const output='recent-events-data.js';
const today=new Date().toISOString().slice(0,10);
function readEvents(content){
 const start=content.search(/const events\s*=\s*\[/);if(start<0)return [];
 const bracket=content.indexOf('[',start);let depth=0,quote='',escaped=false,end=-1;
 for(let i=bracket;i<content.length;i++){
  const c=content[i];if(quote){if(escaped){escaped=false;continue}if(c==='\\'){escaped=true;continue}if(c===quote)quote='';continue}
  if(c==='"'||c==="'"||c==='\x60'){quote=c;continue}
  if(c==='[')depth++;else if(c===']'&&!--depth){end=i+1;break}
 }
 if(end<0)throw Error('Unclosed events array');
 const array=content.slice(bracket,end);
 const result=vm.runInNewContext(array,{}, {timeout:2000});
 return Array.isArray(result)?result:[];
}
function oldVersion(path){try{return cp.execFileSync('git',['show','HEAD^:'+path],{encoding:'utf8',maxBuffer:15e6})}catch{return ''}}
function key(e){return String(e.id||[e.year,e.title].join('|'))}
const previous=fs.existsSync(output)?vm.runInNewContext(fs.readFileSync(output,'utf8').replace(/^window\.FALLING_RECENT_EVENTS\s*=\s*/,'').replace(/;[\s\S]*$/,';'),{}):[];
const map=new Map((Array.isArray(previous)?previous:[]).map(e=>[e.timeline+'|'+e.year+'|'+e.title.en,e]));
for(const [path,timeline] of paths){
 const current=readEvents(fs.readFileSync(path,'utf8'));
 const old=new Set(readEvents(oldVersion(path)).map(key));
 for(const e of current){
  if(old.has(key(e))||!e.title||!Number.isFinite(Number(e.year)))continue;
  const title={en:e.title,he:e.localized?.he?.title||e.title,ar:e.localized?.ar?.title||e.title};
  map.set(timeline+'|'+e.year+'|'+e.title,{addedOn:today,timeline,year:e.year,title});
 }
}
const cutoff=Date.now()-10*86400000;
const entries=[...map.values()].filter(e=>{const d=Date.parse(e.addedOn+'T00:00:00Z');return Number.isFinite(d)&&d>=cutoff}).sort((a,b)=>b.addedOn.localeCompare(a.addedOn)).slice(0,10);
fs.writeFileSync(output,'window.FALLING_RECENT_EVENTS = '+JSON.stringify(entries,null,2)+';\n');
