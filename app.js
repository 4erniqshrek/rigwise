/* Parts list. "p" is only a relative cost rank used to prefer smaller parts. It is never shown. */
var P={
cpu:[{n:"Ryzen 5 5600",p:105,sock:"AM4",tdp:65,s:62},{n:"Core i5-12400F",p:120,sock:"LGA1700",tdp:65,s:60},{n:"Ryzen 5 7600",p:195,sock:"AM5",tdp:65,s:76},{n:"Core i5-14600K",p:280,sock:"LGA1700",tdp:125,s:86},{n:"Ryzen 7 7800X3D",p:360,sock:"AM5",tdp:120,s:100}],
gpu:[{n:"Radeon RX 6600",p:200,tdp:132,len:240,s:38},{n:"GeForce RTX 4060",p:290,tdp:115,len:240,s:48},{n:"Radeon RX 7700 XT",p:430,tdp:245,len:280,s:68},{n:"Radeon RX 7900 GRE",p:550,tdp:260,len:280,s:78},{n:"GeForce RTX 4070 Super",p:600,tdp:220,len:245,s:82},{n:"GeForce RTX 4070 Ti Super",p:820,tdp:285,len:305,s:92},{n:"GeForce RTX 4080 Super",p:1000,tdp:320,len:310,s:100}],
board:[{n:"A520M",p:75,sock:"AM4",mem:"DDR4",ff:"mATX"},{n:"B660M",p:100,sock:"LGA1700",mem:"DDR4",ff:"mATX"},{n:"B650M",p:125,sock:"AM5",mem:"DDR5",ff:"mATX"},{n:"B650 ATX",p:160,sock:"AM5",mem:"DDR5",ff:"ATX"},{n:"Z790 ATX",p:200,sock:"LGA1700",mem:"DDR5",ff:"ATX"}],
ram:[{n:"16 GB DDR4",p:40,mem:"DDR4",gb:16},{n:"32 GB DDR4",p:70,mem:"DDR4",gb:32},{n:"16 GB DDR5",p:55,mem:"DDR5",gb:16},{n:"32 GB DDR5",p:95,mem:"DDR5",gb:32}],
ssd:[{n:"500 GB NVMe",p:38},{n:"1 TB NVMe",p:62},{n:"2 TB NVMe",p:110}],
psu:[{n:"550 W Bronze",p:55,w:550},{n:"650 W Gold",p:70,w:650},{n:"750 W Gold",p:90,w:750},{n:"850 W Gold",p:120,w:850},{n:"1000 W Gold",p:160,w:1000}],
cs:[{n:"Compact mATX case",p:55,ff:["mATX"],gpu:300},{n:"Mid-tower ATX case",p:75,ff:["ATX","mATX"],gpu:330},{n:"Large airflow ATX case",p:110,ff:["ATX","mATX"],gpu:400}]};
var CATS=[["Graphics card","gpu"],["Processor","cpu"],["Motherboard","board"],["Memory","ram"],["Storage","ssd"],["Power supply","psu"],["Case","cs"]];
var SHOPS=[["Ardes","ardes.bg"],["Desktop.bg","desktop.bg"],["Plasico","plasico.bg"],["Ozone","ozone.bg"],["Jar Computers","jarcomputers.com"],["eMAG","emag.bg"]];
var SUF={board:" motherboard",ram:" RAM",ssd:" SSD",psu:" power supply",cs:" PC case"};
/* [name, how demanding (higher = harder to run), type] */
var GAMES=[["League of Legends",12,"e"],["Dota 2",18,"e"],["Valorant",15,"e"],["Minecraft",20,"m"],["Rocket League",22,"e"],["Rainbow Six Siege",28,"e"],["Grand Theft Auto V",30,"m"],["Overwatch 2",32,"e"],["Counter-Strike 2",35,"e"],["The Witcher 3",38,"a"],["Elden Ring",40,"m"],["Apex Legends",42,"e"],["Fortnite",45,"m"],["Marvel Rivals",48,"m"],["Baldur’s Gate 3",50,"m"],["Helldivers 2",52,"m"],["Call of Duty: Warzone",55,"m"],["Forza Horizon 5",55,"a"],["Red Dead Redemption 2",58,"a"],["Hogwarts Legacy",65,"a"],["Starfield",68,"m"],["Cyberpunk 2077",70,"a"],["Alan Wake 2",80,"a"],["Black Myth: Wukong",82,"a"]];
var WT={e:[.35,.65],m:[.6,.4],a:[.8,.2]},FOCUS={e:"processor",m:"processor and graphics card about equally",a:"graphics card"};
var TIERS=[["Low","70–80 fps",75],["Medium","100–160 fps",130],["High","400+ fps",400]];
var S={sel:[2,8,21],tier:0,pk:"gpu"};
var $=function(s){return document.querySelector(s)};
function lk(x,i,k){return"https://www.google.com/search?q="+encodeURIComponent("site:"+SHOPS[i][1]+" "+x.n+(SUF[k]||""))}
function shopLinks(x,k){return'<div class="shoplinks">'+SHOPS.map(function(s,i){return'<a class="lnk" target="_blank" rel="noopener" href="'+lk(x,i,k)+'">'+s[0]+'</a>'}).join(" · ")+'</div>'}
function perf(g,c,w){return w[0]*g.s+w[1]*c.s}
function fps(req,p){return Math.round(60*p/req)}
function minBy(a,f){return a.filter(f).sort(function(x,y){return x.p-y.p})[0]}
/* smallest CPU + GPU pair that reaches the needed score for this game; otherwise the strongest pair */
function pick(need,w){
  var ok=null,top=null;
  P.cpu.forEach(function(c){P.gpu.forEach(function(g){
    var p=perf(g,c,w),r={c:c,g:g,p:p,w:c.p+g.p};
    if(!top||p>top.p)top=r;
    if(p>=need&&(!ok||r.w<ok.w))ok=r;
  })});
  var o=ok||top;return{c:o.c,g:o.g,p:o.p,ok:!!ok};
}
function fullBuild(c,g,t){
  var gb=t>=130?32:16,boards=P.board.filter(function(b){return b.sock===c.sock}).sort(function(a,b){return a.p-b.p});
  for(var i=0;i<boards.length;i++){
    var bd=boards[i],cs=minBy(P.cs,function(x){return x.ff.indexOf(bd.ff)>-1&&x.gpu>=g.len+20});
    if(!cs)continue;
    var ram=minBy(P.ram,function(r){return r.mem===bd.mem&&r.gb>=gb})||minBy(P.ram,function(r){return r.mem===bd.mem});
    var psu=minBy(P.psu,function(x){return x.w>=(c.tdp+g.tdp+80)*1.3});
    return{gpu:g,cpu:c,board:bd,ram:ram,ssd:gb>16?P.ssd[1]:P.ssd[0],psu:psu,cs:cs};
  }
}
function games(){
  $("#chips").innerHTML=GAMES.map(function(g,i){return'<button class="alt chip" data-g="'+i+'" aria-pressed="'+(S.sel.indexOf(i)>-1)+'">'+g[0]+'</button>'}).join("");
  $("#tiers").innerHTML=TIERS.map(function(t,i){return'<button class="alt" data-t="'+i+'" aria-pressed="'+(S.tier===i)+'">'+t[0]+' · '+t[1]+'</button>'}).join("");
  if(!S.sel.length){$("#g-out").innerHTML='<div class="panel">Pick at least one game above.</div>';return}
  var t=TIERS[S.tier][2],h="";
  S.sel.slice().sort(function(x,y){return x-y}).forEach(function(gi,k){
    var g=GAMES[gi],w=WT[g[2]],a=pick(g[1]*t/60,w),m=pick(1e9,w),ba=fullBuild(a.c,a.g,t),bm=fullBuild(m.c,m.g,Math.max(t,130)),fa=fps(g[1],a.p),fm=fps(g[1],m.p),same=a.g===m.g&&a.c===m.c;
    h+='<details class="panel gm"'+(k===0?' open':'')+'><summary>'+g[0]+' <span class="tag">target '+TIERS[S.tier][1]+'</span> <span class="tag">max about '+fm+' fps</span></summary>';
    h+='<p style="color:var(--mute);margin:10px 0">'+g[0]+' leans on the '+FOCUS[g[2]]+', so those parts get priority. '+(a.ok?'':'The target is out of reach for the parts we list, so the left column already shows the best we can do. ')+(same&&a.ok?'The smallest parts that reach your target are also the strongest, so both columns match.':'')+'</p>';
    h+='<div class="scroll"><table class="gt"><thead><tr><th>Part</th><th>To reach the target<br><span class="'+(fa>=t?'fps-ok':'fps-max')+'">about '+fa+' fps</span></th><th>For the most fps<br><span class="fps-ok">about '+fm+' fps</span></th></tr></thead><tbody>';
    CATS.forEach(function(c){var x=ba[c[1]],y=bm[c[1]];
      h+='<tr><th>'+c[0]+'</th><td>'+x.n+shopLinks(x,c[1])+'</td><td>'+y.n+'</td></tr>'});
    h+='</tbody></table></div></details>';
  });
  $("#g-out").innerHTML=h;
}
function shops(){
  $("#pt-cats").innerHTML=CATS.map(function(c){return'<button class="alt" data-k="'+c[1]+'" aria-pressed="'+(S.pk===c[1])+'">'+c[0]+'</button>'}).join("");
  var h='<table><thead><tr><th>Part</th>'+SHOPS.map(function(s){return'<th>'+s[0]+'</th>'}).join("")+'</tr></thead><tbody>';
  P[S.pk].forEach(function(x){
    h+='<tr><th style="color:var(--ink)">'+x.n+'</th>'+SHOPS.map(function(s,i){return'<td><a class="lnk" target="_blank" rel="noopener" href="'+lk(x,i,S.pk)+'">Open</a></td>'}).join("")+'</tr>'});
  $("#pt-out").innerHTML=h+'</tbody></table>';
}
function route(){
  var r=location.hash.slice(1);if(["home","games","shops"].indexOf(r)<0)r="home";
  document.querySelectorAll(".page").forEach(function(p){p.classList.toggle("on",p.id==="p-"+r)});
  document.querySelectorAll("nav a").forEach(function(a){if(a.getAttribute("href")==="#"+r)a.setAttribute("aria-current","page");else a.removeAttribute("aria-current")});
  if(r==="games")games();if(r==="shops")shops();
}
$("#chips").onclick=function(e){var b=e.target.closest("[data-g]");if(!b)return;var i=+b.dataset.g,k=S.sel.indexOf(i);if(k>-1)S.sel.splice(k,1);else S.sel.push(i);games()};
$("#tiers").onclick=function(e){var b=e.target.closest("[data-t]");if(b){S.tier=+b.dataset.t;games()}};
$("#pt-cats").onclick=function(e){var k=e.target.dataset.k;if(k){S.pk=k;shops()}};
window.addEventListener("hashchange",route);route();
