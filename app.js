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

/* Full specs. CPUs and GPUs: from the chip makers. Other parts: typical specs for that class. */
var SPECS={
"Ryzen 5 5600":[["Cores / threads","6 / 12"],["Clock","3.5 GHz base, 4.4 GHz boost"],["Cache","32 MB L3"],["Architecture","Zen 3"],["Built-in graphics","None"],["Memory","DDR4"],["PCIe","4.0"]],
"Core i5-12400F":[["Cores / threads","6 / 12"],["Clock","2.5 GHz base, 4.4 GHz boost"],["Cache","18 MB L3"],["Architecture","Alder Lake"],["Built-in graphics","None (F model)"],["Memory","DDR4 or DDR5, set by the board"],["Max turbo power","117 W"],["PCIe","5.0 graphics slot"]],
"Ryzen 5 7600":[["Cores / threads","6 / 12"],["Clock","3.8 GHz base, 5.1 GHz boost"],["Cache","32 MB L3"],["Architecture","Zen 4"],["Built-in graphics","Radeon, 2 compute units"],["Memory","DDR5"],["PCIe","5.0"]],
"Core i5-14600K":[["Cores / threads","14 (6 fast + 8 efficient) / 20"],["Clock","Fast cores 3.5 GHz base, 5.3 GHz boost"],["Cache","24 MB L3"],["Architecture","Raptor Lake Refresh"],["Built-in graphics","Intel UHD 770"],["Memory","DDR4 or DDR5, set by the board"],["Max turbo power","181 W"],["Unlocked","Yes (can be overclocked)"]],
"Ryzen 7 7800X3D":[["Cores / threads","8 / 16"],["Clock","4.2 GHz base, 5.0 GHz boost"],["Cache","96 MB L3 (3D V-Cache)"],["Architecture","Zen 4"],["Built-in graphics","Radeon, 2 compute units"],["Memory","DDR5"],["PCIe","5.0"]],
"Radeon RX 6600":[["Memory","8 GB GDDR6, 128-bit"],["Shader cores","1,792"],["Boost clock","2,491 MHz"],["Interface","PCIe 4.0 x8"],["Power connector","1× 8-pin (typical)"],["Features","Ray tracing, FSR upscaling"]],
"GeForce RTX 4060":[["Memory","8 GB GDDR6, 128-bit"],["Shader cores","3,072 CUDA"],["Boost clock","2,460 MHz"],["Interface","PCIe 4.0 x8"],["Power connector","1× 8-pin (typical)"],["Features","Ray tracing, DLSS 3 with frame generation"]],
"Radeon RX 7700 XT":[["Memory","12 GB GDDR6, 192-bit"],["Shader cores","3,456"],["Boost clock","2,544 MHz"],["Interface","PCIe 4.0 x16"],["Power connector","2× 8-pin (typical)"],["Features","Ray tracing, FSR 3"]],
"Radeon RX 7900 GRE":[["Memory","16 GB GDDR6, 256-bit"],["Shader cores","5,120"],["Boost clock","2,245 MHz"],["Interface","PCIe 4.0 x16"],["Power connector","2× 8-pin (typical)"],["Features","Ray tracing, FSR 3"]],
"GeForce RTX 4070 Super":[["Memory","12 GB GDDR6X, 192-bit"],["Shader cores","7,168 CUDA"],["Boost clock","2,475 MHz"],["Interface","PCIe 4.0 x16"],["Power connector","1× 16-pin (12VHPWR)"],["Features","Ray tracing, DLSS 3 with frame generation"]],
"GeForce RTX 4070 Ti Super":[["Memory","16 GB GDDR6X, 256-bit"],["Shader cores","8,448 CUDA"],["Boost clock","2,610 MHz"],["Interface","PCIe 4.0 x16"],["Power connector","1× 16-pin (12VHPWR)"],["Features","Ray tracing, DLSS 3 with frame generation"]],
"GeForce RTX 4080 Super":[["Memory","16 GB GDDR6X, 256-bit"],["Shader cores","10,240 CUDA"],["Boost clock","2,550 MHz"],["Interface","PCIe 4.0 x16"],["Power connector","1× 16-pin (12VHPWR)"],["Features","Ray tracing, DLSS 3 with frame generation"]],
"A520M":[["Chipset","AMD A520"],["Works with","Ryzen 3000 and 5000"],["Memory slots","2–4× DDR4"],["Graphics slot","PCIe 4.0 with Ryzen 5000"],["M.2 slots","1 (typical)"],["Overclocking","Memory only"]],
"B660M":[["Chipset","Intel B660"],["Works with","12th–14th gen Core (BIOS update may be needed)"],["Memory slots","2–4× DDR4"],["Graphics slot","PCIe 4.0 x16"],["M.2 slots","2 (typical)"],["Overclocking","Memory only"]],
"B650M":[["Chipset","AMD B650"],["Works with","Ryzen 7000, 8000 and 9000"],["Memory slots","2–4× DDR5"],["M.2 slots","2 (typical), PCIe 5.0 on the first"],["Overclocking","CPU and memory"]],
"B650 ATX":[["Chipset","AMD B650"],["Works with","Ryzen 7000, 8000 and 9000"],["Memory slots","4× DDR5"],["M.2 slots","2–3 (typical), PCIe 5.0 on the first"],["Extra","More PCIe slots than the micro-ATX version"],["Overclocking","CPU and memory"]],
"Z790 ATX":[["Chipset","Intel Z790"],["Works with","12th–14th gen Core"],["Memory slots","4× DDR5"],["Graphics slot","PCIe 5.0 x16"],["M.2 slots","3–5 (typical)"],["Overclocking","CPU (K chips) and memory"]],
"16 GB DDR4":[["Kit","2× 8 GB"],["Speed","DDR4-3200"],["Latency","CL16"],["Voltage","1.35 V"],["Profile","XMP"]],
"32 GB DDR4":[["Kit","2× 16 GB"],["Speed","DDR4-3200"],["Latency","CL16"],["Voltage","1.35 V"],["Profile","XMP"]],
"16 GB DDR5":[["Kit","2× 8 GB"],["Speed","DDR5-5600"],["Latency","CL36"],["Voltage","1.25 V"],["Profile","XMP / EXPO"]],
"32 GB DDR5":[["Kit","2× 16 GB"],["Speed","DDR5-6000"],["Latency","CL30–36"],["Voltage","1.35 V"],["Profile","XMP / EXPO"]],
"500 GB NVMe":[["Capacity","500 GB"],["Type","M.2 2280 NVMe, PCIe 4.0 x4"],["Read speed","about 3,500 MB/s"],["Write speed","about 2,500 MB/s"]],
"1 TB NVMe":[["Capacity","1 TB"],["Type","M.2 2280 NVMe, PCIe 4.0 x4"],["Read speed","about 5,000 MB/s"],["Write speed","about 4,000 MB/s"]],
"2 TB NVMe":[["Capacity","2 TB"],["Type","M.2 2280 NVMe, PCIe 4.0 x4"],["Read speed","about 5,000 MB/s"],["Write speed","about 4,500 MB/s"]],
"550 W Bronze":[["Efficiency","80 PLUS Bronze (about 85% at half load)"],["Size","ATX"],["Cables","Non-modular (typical)"],["Graphics connectors","1–2× 6+2-pin"]],
"650 W Gold":[["Efficiency","80 PLUS Gold (about 90% at half load)"],["Size","ATX"],["Cables","Semi-modular (typical)"],["Graphics connectors","2× 6+2-pin"]],
"750 W Gold":[["Efficiency","80 PLUS Gold (about 90% at half load)"],["Size","ATX"],["Cables","Fully modular (typical)"],["Graphics connectors","3× 6+2-pin"]],
"850 W Gold":[["Efficiency","80 PLUS Gold (about 90% at half load)"],["Size","ATX"],["Cables","Fully modular (typical)"],["Graphics connectors","6+2-pin and 16-pin (12VHPWR)"]],
"1000 W Gold":[["Efficiency","80 PLUS Gold (about 90% at half load)"],["Size","ATX"],["Cables","Fully modular (typical)"],["Graphics connectors","6+2-pin and 16-pin (12VHPWR)"]],
"Compact mATX case":[["Size","Compact"],["CPU cooler height","up to about 155 mm"],["Expansion slots","4"],["Drive bays","2× 2.5-inch, 1× 3.5-inch (typical)"]],
"Mid-tower ATX case":[["Size","Mid-tower"],["CPU cooler height","up to about 165 mm"],["Expansion slots","7"],["Drive bays","2× 2.5-inch, 2× 3.5-inch (typical)"]],
"Large airflow ATX case":[["Size","Large mid-tower"],["CPU cooler height","up to about 175 mm"],["Expansion slots","7"],["Drive bays","2× 2.5-inch, 2× 3.5-inch (typical)"]]};
function specList(x,k){
  var d=[];
  if(k==="gpu")d=[["Power draw",x.tdp+" W"],["Card length (typical)",x.len+" mm"]];
  if(k==="cpu")d=[["Socket",x.sock],["Base power (TDP)",x.tdp+" W"]];
  if(k==="board")d=[["Socket",x.sock],["Memory type",x.mem],["Board size",x.ff]];
  if(k==="ram")d=[["Total size",x.gb+" GB"],["Type",x.mem]];
  if(k==="psu")d=[["Wattage",x.w+" W"],["Covers CPU + GPU up to",Math.floor(x.w/1.3-80)+" W"]];
  if(k==="cs")d=[["Board sizes",x.ff.join(", ")],["Max graphics card length",x.gpu+" mm"]];
  return d.concat(SPECS[x.n]||[]);
}
/* Pictures: a drawing for each part type. To show a real photo, put it in an images folder named like the part, for example images/geforce-rtx-4060.jpg */
var ICONS={'gpu': '<rect x="8" y="22" width="100" height="38" rx="4"/><circle cx="38" cy="41" r="13"/><circle cx="78" cy="41" r="13"/><path d="M110 18v46M14 64h60v6H14z"/>', 'cpu': '<rect x="35" y="15" width="50" height="50" rx="4"/><rect x="47" y="27" width="26" height="26" rx="2"/><path d="M45 8v7M60 8v7M75 8v7M45 65v7M60 65v7M75 65v7M28 28h7M28 40h7M28 52h7M85 28h7M85 40h7M85 52h7"/>', 'board': '<rect x="20" y="8" width="80" height="64" rx="3"/><rect x="32" y="18" width="18" height="18" rx="2"/><path d="M62 18h28M62 24h28M62 30h28M62 36h28M30 54h60M30 62h60"/>', 'ram': '<rect x="10" y="26" width="100" height="26" rx="2"/><rect x="20" y="33" width="14" height="12"/><rect x="40" y="33" width="14" height="12"/><rect x="60" y="33" width="14" height="12"/><rect x="80" y="33" width="14" height="12"/><path d="M16 56v6M26 56v6M36 56v6M46 56v6M56 56v6M66 56v6M76 56v6M86 56v6M96 56v6"/>', 'ssd': '<rect x="14" y="24" width="92" height="32" rx="3"/><rect x="22" y="32" width="22" height="16" rx="1"/><rect x="50" y="32" width="14" height="16" rx="1"/><path d="M106 34v12M72 34h20M72 42h20"/>', 'psu': '<rect x="20" y="14" width="80" height="52" rx="4"/><circle cx="60" cy="40" r="17"/><path d="M60 23v34M43 40h34"/>', 'cs': '<rect x="34" y="6" width="52" height="68" rx="4"/><circle cx="60" cy="24" r="9"/><path d="M44 42h32M44 50h32M44 58h32"/>'};
function slug(n){return n.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")}
function pic(x,k){return'<div class="pic"><svg viewBox="0 0 120 80" aria-hidden="true">'+ICONS[k]+'</svg><img src="images/'+slug(x.n)+'.jpg" alt="'+x.n+'" loading="lazy" onerror="this.remove()"></div>'}
function item(x,k,links){return'<div class="pr">'+pic(x,k)+'<div><b>'+x.n+'</b>'+specHtml(x,k)+(links?shopLinks(x,k):"")+'</div></div>'}
function specHtml(x,k){return'<div class="spec">'+specList(x,k).map(function(r){return'<span><b>'+r[0]+':</b> '+r[1]+'</span>'}).join("")+'</div>'}
var SUF={board:" motherboard",ram:" RAM",ssd:" SSD",psu:" power supply",cs:" PC case"};
/* [name, fps on the strongest parts at 1080p high (esports games on low), type, optional fps cap] */
var GAMES=[["League of Legends",700,"e"],["Dota 2",450,"e"],["Valorant",800,"e"],["Minecraft",600,"m"],["Rocket League",800,"e"],["Rainbow Six Siege",600,"e"],["Grand Theft Auto V",230,"m"],["Overwatch 2",500,"e"],["Counter-Strike 2",450,"e"],["The Witcher 3",190,"a"],["Elden Ring",150,"m",60],["Apex Legends",320,"e"],["Fortnite",300,"m"],["Marvel Rivals",220,"m"],["Baldur’s Gate 3",170,"m"],["Helldivers 2",150,"m"],["Call of Duty: Warzone",230,"m"],["Forza Horizon 5",230,"a"],["Red Dead Redemption 2",160,"a"],["Hogwarts Legacy",140,"a"],["Starfield",140,"m"],["Cyberpunk 2077",180,"a"],["Alan Wake 2",120,"a"],["Black Myth: Wukong",110,"a"]];
var WT={e:[.35,.65],m:[.6,.4],a:[.8,.2]},FOCUS={e:"processor",m:"processor and graphics card about equally",a:"graphics card"};
var TIERS=[["Low","70–80 fps",75],["Medium","100–160 fps",130],["High","400+ fps",400]];
var S={sel:[2,8,21],tier:0,pk:"gpu"};
var $=function(s){return document.querySelector(s)};
function lk(x,i,k){return"https://www.google.com/search?q="+encodeURIComponent("site:"+SHOPS[i][1]+" "+x.n+(SUF[k]||""))}
function shopLinks(x,k){return'<div class="shoplinks">'+SHOPS.map(function(s,i){return'<a class="lnk" target="_blank" rel="noopener" href="'+lk(x,i,k)+'">'+s[0]+'</a>'}).join(" · ")+'</div>'}
function perf(g,c,w){return w[0]*g.s+w[1]*c.s}
function fps(g,p){var f=Math.round(g[1]*p/100/5)*5;return g[3]?Math.min(f,g[3]):f}
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
    var g=GAMES[gi],w=WT[g[2]],eff=Math.min(t,g[3]||1e9),a=pick(eff*100/g[1],w),m=pick(1e9,w),ba=fullBuild(a.c,a.g,t),bm=fullBuild(m.c,m.g,Math.max(t,130)),fa=fps(g,a.p),fm=fps(g,m.p),same=a.g===m.g&&a.c===m.c;
    h+='<details class="panel gm"'+(k===0?' open':'')+'><summary>'+g[0]+' <span class="tag">target '+TIERS[S.tier][1]+'</span> <span class="tag">max about '+fm+' fps</span></summary>';
    h+='<p style="color:var(--mute);margin:10px 0">'+g[0]+' leans on the '+FOCUS[g[2]]+', so those parts get priority. '+(g[3]?g[0]+' is locked to '+g[3]+' fps, so extra power won’t add more. ':'')+(a.ok?'':'The target is out of reach for the parts we list, so the left column already shows the best we can do. ')+(same&&a.ok?'The smallest parts that reach your target are also the strongest, so both columns match.':'')+'</p>';
    h+='<div class="scroll"><table class="gt"><thead><tr><th>Part</th><th>To reach the target<br><span class="'+(fa>=eff?'fps-ok':'fps-max')+'">about '+fa+' fps</span></th><th>For the most fps<br><span class="fps-ok">about '+fm+' fps</span></th></tr></thead><tbody>';
    CATS.forEach(function(c){var x=ba[c[1]],y=bm[c[1]];
      h+='<tr><th>'+c[0]+'</th><td>'+item(x,c[1],1)+'</td><td>'+item(y,c[1],0)+'</td></tr>'});
    h+='</tbody></table></div></details>';
  });
  $("#g-out").innerHTML=h;
}
function shops(){
  $("#pt-cats").innerHTML=CATS.map(function(c){return'<button class="alt" data-k="'+c[1]+'" aria-pressed="'+(S.pk===c[1])+'">'+c[0]+'</button>'}).join("");
  var h='<table><thead><tr><th>Part</th>'+SHOPS.map(function(s){return'<th>'+s[0]+'</th>'}).join("")+'</tr></thead><tbody>';
  P[S.pk].forEach(function(x){
    h+='<tr><th style="color:var(--ink)">'+item(x,S.pk,0)+'</th>'+SHOPS.map(function(s,i){return'<td><a class="lnk" target="_blank" rel="noopener" href="'+lk(x,i,S.pk)+'">Open</a></td>'}).join("")+'</tr>'});
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
