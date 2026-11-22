var P={
cpu:[{n:"Ryzen 5 5600",p:105,sock:"AM4",tdp:65,s:62},{n:"Core i5-12400F",p:120,sock:"LGA1700",tdp:65,s:60},{n:"Ryzen 5 7600",p:195,sock:"AM5",tdp:65,s:76},{n:"Core i5-14600K",p:280,sock:"LGA1700",tdp:125,s:86},{n:"Ryzen 7 7800X3D",p:360,sock:"AM5",tdp:120,s:100}],
gpu:[{n:"Radeon RX 6600",p:200,tdp:132,len:240,s:38},{n:"GeForce RTX 4060",p:290,tdp:115,len:240,s:48},{n:"Radeon RX 7700 XT",p:430,tdp:245,len:280,s:68},{n:"Radeon RX 7900 GRE",p:550,tdp:260,len:280,s:78},{n:"GeForce RTX 4070 Super",p:600,tdp:220,len:245,s:82},{n:"GeForce RTX 4070 Ti Super",p:820,tdp:285,len:305,s:92},{n:"GeForce RTX 4080 Super",p:1000,tdp:320,len:310,s:100}],
board:[{n:"A520M",p:75,sock:"AM4",mem:"DDR4",ff:"mATX"},{n:"B660M",p:100,sock:"LGA1700",mem:"DDR4",ff:"mATX"},{n:"B650M",p:125,sock:"AM5",mem:"DDR5",ff:"mATX"},{n:"B650 ATX",p:160,sock:"AM5",mem:"DDR5",ff:"ATX"},{n:"Z790 ATX",p:200,sock:"LGA1700",mem:"DDR5",ff:"ATX"}],
ram:[{n:"16 GB DDR4",p:40,mem:"DDR4",gb:16},{n:"32 GB DDR4",p:70,mem:"DDR4",gb:32},{n:"16 GB DDR5",p:55,mem:"DDR5",gb:16},{n:"32 GB DDR5",p:95,mem:"DDR5",gb:32}],
ssd:[{n:"500 GB NVMe",p:38,gb:500},{n:"1 TB NVMe",p:62,gb:1000},{n:"2 TB NVMe",p:110,gb:2000}],
psu:[{n:"550 W Bronze",p:55,w:550},{n:"650 W Gold",p:70,w:650},{n:"750 W Gold",p:90,w:750},{n:"850 W Gold",p:120,w:850},{n:"1000 W Gold",p:160,w:1000}],
cs:[{n:"Compact mATX case",p:55,ff:["mATX"],gpu:300},{n:"Mid-tower ATX case",p:75,ff:["ATX","mATX"],gpu:330},{n:"Large airflow ATX case",p:110,ff:["ATX","mATX"],gpu:400}]};
var CATS=[["GPU","gpu"],["CPU","cpu"],["Motherboard","board"],["Memory","ram"],["Storage","ssd"],["Power supply","psu"],["Case","cs"]];
var W={1080:[.6,.4],1440:[.75,.25],2160:[.9,.1]},RESN={1080:"1080p",1440:"1440p",2160:"4K"};
var GAMES=[["Valorant",15],["Minecraft",20],["Counter-Strike 2",35],["Elden Ring",40],["Fortnite",45],["Baldur’s Gate 3",50],["Cyberpunk 2077",70],["Alan Wake 2",80]];
var S={budget:900,res:1080,mode:"budget",game:0,q:"1",tier:1,store:-1},ST=-1;
var $=function(s){return document.querySelector(s)};
var eur=function(n){return"€"+Math.round(n).toLocaleString("en")};
function need(c,g){return (c.tdp+g.tdp+80)*1.3}
function perf(b,res){var w=W[res];return Math.round(w[0]*b.gpu.s+w[1]*b.cpu.s)}
function minBy(a,f){return a.filter(f).sort(function(x,y){return x.p-y.p})[0]}
function build(budget,res){
  var best=null;
  P.cpu.forEach(function(cpu){P.gpu.forEach(function(gpu){P.board.forEach(function(bd){
    if(bd.sock!==cpu.sock)return;
    var ram=minBy(P.ram,function(r){return r.mem===bd.mem}),ssd=P.ssd[0];
    var psu=minBy(P.psu,function(x){return x.w>=need(cpu,gpu)});
    var cs=minBy(P.cs,function(c){return c.ff.indexOf(bd.ff)>-1&&c.gpu>=gpu.len+20});
    if(!psu||!cs)return;
    var b={cpu:cpu,gpu:gpu,board:bd,ram:ram,ssd:ssd,psu:psu,cs:cs};
    var t=tot(b);if(t>budget)return;
    var r2=P.ram.filter(function(r){return r.mem===bd.mem&&r.gb>16}).sort(function(x,y){return x.p-y.p})[0];
    if(r2&&t-ram.p+r2.p<=budget){b.ram=r2;t=tot(b)}
    P.ssd.slice(1).forEach(function(s){if(t-b.ssd.p+s.p<=budget){b.ssd=s;t=tot(b)}});
    b.total=t;b.perf=perf(b,res);
    if(!best||b.perf>best.perf||(b.perf===best.perf&&b.total<best.total))best=b;
  })})});
  return best;
}
function tot(b){return b.cpu.p+b.gpu.p+b.board.p+b.ram.p+b.ssd.p+b.psu.p+b.cs.p}
function cls(p){return p<35?"Esports at 1080p":p<55?"1080p high settings":p<75?"1440p high settings":p<90?"1440p ultra":"4K ready"}
function bar(b){
  var h='<div class="bar" role="img" aria-label="Budget split">';
  CATS.forEach(function(c,i){var p=b[c[1]].p;h+='<i style="flex-grow:'+p+';background:var(--c'+i+')" title="'+c[0]+' '+eur(p)+'"></i>'});
  h+='</div><div class="legend">';
  CATS.forEach(function(c,i){var p=b[c[1]].p;h+='<span><b style="background:var(--c'+i+')"></b>'+c[0]+' '+Math.round(p/b.total*100)+'%</span>'});
  return h+'</div>';
}
function why(b,res,budget){
  var e=need(b.cpu,b.gpu),sp=b.cs.gpu-b.gpu.len,diff=b.gpu.s-b.cpu.s;
  return {
  gpu:"The graphics card sets your frame rate more than anything else, so it gets "+Math.round(b.gpu.p/b.total*100)+"% of the spend. At "+RESN[res]+" it scores "+b.gpu.s+" out of 100.",
  cpu:diff>25?"A little behind the graphics card, but the best pairing that fits this budget.":diff<-25?"Strong enough that it won’t hold the graphics card back, even if you upgrade later.":"Matched to the graphics card so neither one waits on the other.",
  board:"Fits the "+b.cpu.sock+" socket and takes "+b.board.mem+" memory, so the processor and RAM both work.",
  ram:b.ram.gb>=32?"32 GB leaves room for games, streaming and a browser at once.":"16 GB is enough for nearly every game today. It was the right place to save money.",
  ssd:"Holds your games and loads them quickly. "+(b.ssd.gb>=1000?"Space for a good library.":"Small, but easy to expand later."),
  psu:"Your parts draw about "+Math.round(e/1.3)+" W under load. This unit gives "+Math.round((b.psu.w/(e/1.3)-1)*100)+"% headroom for safe, quiet running.",
  cs:"Fits the "+b.board.ff+" board and a "+b.gpu.len+" mm card, with "+sp+" mm to spare for airflow."};
}
function checks(b){
  var e=need(b.cpu,b.gpu),sp=b.cs.gpu-b.gpu.len;
  var L=[[b.cpu.sock===b.board.sock,"Processor socket matches the motherboard ("+b.cpu.sock+")"],
  [b.ram.mem===b.board.mem,"Memory type matches the motherboard ("+b.ram.mem+")"],
  [b.psu.w>=e,"Power supply covers the load with 30% headroom ("+b.psu.w+" W vs "+Math.round(e/1.3)+" W)"],
  [sp>=20,"Graphics card fits the case ("+sp+" mm spare)"],
  [b.cs.ff.indexOf(b.board.ff)>-1,"Motherboard size fits the case ("+b.board.ff+")"]];
  return '<ul class="checks">'+L.map(function(x){return'<li class="'+(x[0]?'ok':'bad')+'">'+(x[0]?'✓ ':'✗ ')+x[1]+'</li>'}).join("")+'</ul>';
}
function card(b,res,budget){
  if(!b)return'<div class="panel"><p style="margin:0">That budget is too low for a build that passes every check. Try at least '+eur(450)+'.</p></div>';
  var w=why(b,res,budget),h='<div class="panel">'+bar(b);
  CATS.forEach(function(c,i){var x=b[c[1]];
    h+='<div class="part"><div class="k"><b style="background:var(--c'+i+')"></b>'+c[0]+'</div><div class="n">'+x.n+'</div><div class="p">'+eur(ST<0?x.p:sp(x,ST))+'</div><div class="w">'+w[c[1]]+' <a class="lnk" target="_blank" rel="noopener" href="'+lk(x,ST<0?bestStore(x):ST,c[1])+'">Find at '+STORES[ST<0?bestStore(x):ST][0]+'</a></div></div>'});
  h+='<div class="tot"><span style="font-size:22px;font-weight:800">'+eur(ST<0?b.total:stTot(b,ST))+' <span style="font-weight:400;font-size:15px;color:var(--mute)">'+(budget?'of '+eur(budget):(ST<0?'list price':'at '+STORES[ST][0]))+'</span></span><span class="tag">'+cls(b.perf)+'</span></div></div>';
  h+='<h2 style="font-size:20px;margin-top:24px">Compatibility checks</h2><div class="panel">'+checks(b)+'</div>';
  return h;
}
/* shops + game view */
var STORES=[["Ardes","ardes.bg",1],["Desktop.bg","desktop.bg",1.02],["Plasico","plasico.bg",.99],["Ozone","ozone.bg",1.04],["Jar Computers","jarcomputers.com",1.01],["eMAG","emag.bg",1.06]];
function hs(s){var h=0;for(var i=0;i<s.length;i++)h=(h*31+s.charCodeAt(i))%97;return h}
function sp(x,i){return Math.round(x.p*STORES[i][2]*(1+((hs(x.n+i)%9)-4)/100))}
var SUF={board:" motherboard",ram:" RAM",ssd:" SSD",psu:" power supply",cs:" PC case"};
function lk(x,i,k){return"https://www.google.com/search?q="+encodeURIComponent("site:"+STORES[i][1]+" "+x.n+(SUF[k]||""))}
function bestStore(x){var m=0;STORES.forEach(function(s,i){if(sp(x,i)<sp(x,m))m=i});return m}
function stTot(b,i){return CATS.reduce(function(a,c){return a+sp(b[c[1]],i)},0)}
function mixTot(b){return CATS.reduce(function(a,c){var x=b[c[1]];return a+Math.min.apply(null,STORES.map(function(s,i){return sp(x,i)}))},0)}
function minFor(req){for(var x=450;x<=2500;x+=10){var t=build(x,1080);if(t&&t.perf>=req)return t}return null}
function gameView(){
  var g=GAMES[S.game],base=g[1]*parseFloat(S.q);
  $("#g-out").textContent="Choose how much performance you want in "+g[0]+". Each option is priced across "+STORES.length+" shops.";
  var T=[["Cheapest that works",1],["Smooth",1.3],["Overkill",1.7]].map(function(x){return[x[0],minFor(base*x[1])||build(2500,1080)]});
  var b=T[S.tier][1],h='<div class="tiers">';
  T.forEach(function(t,i){var f=Math.min(240,Math.round(60*t[1].perf/g[1]));h+='<button class="tier" data-t="'+i+'" aria-pressed="'+(i===S.tier)+'"><h3>'+t[0]+'</h3><div class="big">'+eur(mixTot(t[1]))+'</div><small>'+t[1].gpu.n+' + '+t[1].cpu.n+'</small><div class="fps"><i style="width:'+(f/2.4)+'%"></i></div><small>about '+f+' fps in '+g[0]+'</small></button>'});
  h+='</div>';
  var tots=STORES.map(function(s,i){return stTot(b,i)}),mn=Math.min.apply(null,tots),mx=Math.max.apply(null,tots),mix=mixTot(b);
  function row(l,sub,v,i,d){return'<button class="store" data-s="'+i+'" aria-pressed="'+(S.store===i)+'"><span><b>'+l+'</b><small>'+sub+'</small></span><span class="fps"><i style="width:'+(v/mx*100)+'%"></i></span><b>'+eur(v)+'</b><span class="'+(d[1]?'ok':'')+'">'+d[0]+'</span></button>'}
  h+='<h2 style="font-size:22px">Compare shops for the “'+T[S.tier][0]+'” build</h2><div class="panel">';
  h+=row('Best mix','cheapest part from each shop',mix,-1,['saves '+eur(mn-mix),1]);
  STORES.forEach(function(s,i){h+=row(s[0],'one order',tots[i],i,tots[i]===mn?['cheapest single shop',1]:['+'+eur(tots[i]-mn),0])});
  h+='<p class="note" style="margin:12px 0 0">Click a shop to see its prices below. Prices are estimates, not live. Open a shop: '+STORES.map(function(s){return'<a class="lnk" target="_blank" rel="noopener" href="https://'+s[1]+'">'+s[0]+'</a>'}).join(' · ')+'.</p></div>';
  ST=S.store;
  h+='<h2 style="font-size:22px">Your build</h2>'+card(b,1080,0);
  $("#b-result").innerHTML=h;
}
/* pages */
function home(){
  var b=build(S.budget,1080);
  $("#h-range").value=S.budget;$("#h-money").textContent=eur(S.budget);
  $("#h-class").textContent=b?cls(b.perf):"";
  $("#h-bar").innerHTML=b?bar(b):"";
  $("#h-sum").textContent=b?b.gpu.n+" + "+b.cpu.n:"";
}
function builder(){
  $("#m-budget").setAttribute("aria-pressed",S.mode==="budget");$("#m-game").setAttribute("aria-pressed",S.mode==="game");
  $("#mode-budget").hidden=S.mode!=="budget";$("#mode-game").hidden=S.mode!=="game";
  var budget=S.budget;
  if(S.mode==="game"){gameView();return}else{ST=-1;$("#b-range").value=S.budget;$("#b-money").textContent=eur(S.budget)}
  var res=S.mode==="game"?1080:S.res;
  $("#b-result").innerHTML=card(build(budget,res),res,budget);
  $("#res").innerHTML=[1080,1440,2160].map(function(r){return'<button class="alt" data-r="'+r+'" aria-pressed="'+(S.res===r)+'" style="padding:6px 14px;margin-right:6px">'+RESN[r]+'</button>'}).join("");
}
var PK="gpu";
function parts(){
  $("#pt-cats").innerHTML=CATS.map(function(c){return'<button class="alt" data-k="'+c[1]+'" aria-pressed="'+(PK===c[1])+'">'+c[0]+'</button>'}).join("");
  var h='<table><thead><tr><th>Part</th>'+STORES.map(function(s){return'<th>'+s[0]+'</th>'}).join("")+'<th>You save</th></tr></thead><tbody>';
  P[PK].forEach(function(x){
    var v=STORES.map(function(s,i){return sp(x,i)}),mn=Math.min.apply(null,v),mx=Math.max.apply(null,v);
    h+='<tr><th style="color:var(--ink)">'+x.n+'</th>'+v.map(function(p,i){return'<td class="'+(p===mn?'best':'')+'"><a class="lnk" target="_blank" rel="noopener" href="'+lk(x,i,PK)+'">'+eur(p)+'</a></td>'}).join("")+'<td class="ok">'+eur(mx-mn)+'</td></tr>'});
  $("#pt-out").innerHTML=h+'</tbody></table>';
}
var CB=[700,1000,1500];
function compare(){
  var bs=CB.map(function(v){return build(v,S.res)});
  var h='<table><thead><tr><th></th>'+CB.map(function(v){return'<th>'+eur(v)+' build</th>'}).join("")+'</tr></thead><tbody>';
  CATS.forEach(function(c){h+='<tr><th>'+c[0]+'</th>'+bs.map(function(b){return'<td>'+(b?b[c[1]].n+'<br><span style="color:var(--mute)">'+eur(b[c[1]].p)+'</span>':"–")+'</td>'}).join("")+'</tr>'});
  var vals=bs.map(function(b){return b?b.perf/b.total:0}),mx=Math.max.apply(null,vals);
  h+='<tr><th>Total</th>'+bs.map(function(b){return'<td><b>'+(b?eur(b.total):"–")+'</b></td>'}).join("")+'</tr>';
  h+='<tr><th>Performance ('+RESN[S.res]+')</th>'+bs.map(function(b){return'<td>'+(b?b.perf+' / 100<br><span style="color:var(--mute)">'+cls(b.perf)+'</span>':"–")+'</td>'}).join("")+'</tr>';
  h+='<tr><th>Points per €100</th>'+bs.map(function(b,i){return'<td class="'+(vals[i]===mx&&mx>0?'best':'')+'">'+(b?(vals[i]*100).toFixed(1)+(vals[i]===mx?" (best value)":""):"–")+'</td>'}).join("")+'</tr></tbody></table>';
  $("#c-out").innerHTML=h;
}
function route(){
  var r=location.hash.slice(1);if(["home","builder","parts","compare"].indexOf(r)<0)r="home";
  document.querySelectorAll(".page").forEach(function(p){p.classList.toggle("on",p.id==="p-"+r)});
  document.querySelectorAll("nav a").forEach(function(a){if(a.getAttribute("href")==="#"+r)a.setAttribute("aria-current","page");else a.removeAttribute("aria-current")});
  ({home:home,builder:builder,parts:parts,compare:compare})[r]();
}
/* wiring */
$("#pop").innerHTML=[[700,"Budget 1080p"],[1100,"Sweet spot 1440p"],[1600,"High-end"]].map(function(x){return'<button class="alt" data-b="'+x[0]+'">'+x[1]+" · "+eur(x[0])+"</button>"}).join("");
$("#pop").onclick=function(e){var v=e.target.dataset.b;if(v){S.budget=+v;S.mode="budget";S.res=v>1300?1440:1080;location.hash="builder";route()}};
$("#h-range").oninput=function(){S.budget=+this.value;home()};
$("#b-range").oninput=function(){S.budget=+this.value;builder()};
$("#m-budget").onclick=function(){S.mode="budget";builder()};
$("#m-game").onclick=function(){S.mode="game";builder()};
$("#res").onclick=function(e){var r=e.target.dataset.r;if(r){S.res=+r;builder()}};
$("#g-sel").innerHTML=GAMES.map(function(g,i){return'<option value="'+i+'">'+g[0]+'</option>'}).join("");
$("#g-sel").onchange=function(){S.game=+this.value;builder()};
$("#g-q").onchange=function(){S.q=this.value;builder()};
$("#b-result").onclick=function(e){var t=e.target.closest("[data-t]"),s=e.target.closest("[data-s]");if(t){S.tier=+t.dataset.t;builder()}else if(s){S.store=+s.dataset.s;builder()}};
$("#c-in").innerHTML=CB.map(function(v,i){return'<div><label for="c'+i+'">Build '+(i+1)+' budget (€)</label><input type="number" id="c'+i+'" min="450" max="2500" step="50" value="'+v+'"></div>'}).join("");
CB.forEach(function(v,i){$("#c"+i).oninput=function(){CB[i]=Math.max(0,+this.value||0);compare()}});
$("#pt-cats").onclick=function(e){var k=e.target.dataset.k;if(k){PK=k;parts()}};
window.addEventListener("hashchange",route);route();
