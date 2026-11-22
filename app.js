/* Parts list. "p" is only a relative cost rank used to prefer smaller parts. It is never shown. */
var P={
cpu:[{n:"Ryzen 5 5600",p:105,sock:"AM4",tdp:65,s:62},{n:"Core i5-12400F",p:120,sock:"LGA1700",tdp:65,s:60},{n:"Ryzen 5 7600",p:195,sock:"AM5",tdp:65,s:76},{n:"Core i5-14600K",p:280,sock:"LGA1700",tdp:125,s:86},{n:"Ryzen 7 7800X3D",p:360,sock:"AM5",tdp:120,s:97},
{n:"Ryzen 3 4100",p:60,sock:"AM4",tdp:65,s:45},
{n:"Ryzen 5 5500",p:80,sock:"AM4",tdp:65,s:57},
{n:"Ryzen 5 5600GT",p:110,sock:"AM4",tdp:65,s:61},
{n:"Ryzen 7 5700X3D",p:210,sock:"AM4",tdp:105,s:80},
{n:"Core i3-12100F",p:80,sock:"LGA1700",tdp:58,s:50},
{n:"Core i5-13400F",p:170,sock:"LGA1700",tdp:65,s:68},
{n:"Core i5-14400F",p:185,sock:"LGA1700",tdp:65,s:70},
{n:"Core i5-13600K",p:270,sock:"LGA1700",tdp:125,s:82},
{n:"Core i7-14700K",p:400,sock:"LGA1700",tdp:125,s:92},
{n:"Ryzen 5 7500F",p:170,sock:"AM5",tdp:65,s:74},
{n:"Ryzen 5 9600X",p:240,sock:"AM5",tdp:65,s:82},
{n:"Ryzen 7 7700",p:270,sock:"AM5",tdp:65,s:80},
{n:"Ryzen 7 9700X",p:330,sock:"AM5",tdp:65,s:86},
{n:"Ryzen 7 9800X3D",p:500,sock:"AM5",tdp:120,s:100}],
gpu:[{n:"Radeon RX 6600",p:200,tdp:132,len:240,s:38},{n:"GeForce RTX 4060",p:290,tdp:115,len:240,s:48},{n:"Radeon RX 7700 XT",p:430,tdp:245,len:280,s:68},{n:"Radeon RX 7900 GRE",p:550,tdp:260,len:280,s:78},{n:"GeForce RTX 4070 Super",p:600,tdp:220,len:245,s:82},{n:"GeForce RTX 4070 Ti Super",p:820,tdp:285,len:305,s:92},{n:"GeForce RTX 4080 Super",p:1000,tdp:320,len:310,s:100},
{n:"Radeon RX 6500 XT",p:130,tdp:107,len:200,s:24},
{n:"Intel Arc B580",p:250,tdp:190,len:270,s:50},
{n:"Radeon RX 7600",p:260,tdp:165,len:240,s:42},
{n:"GeForce RTX 5060",p:330,tdp:145,len:240,s:56},
{n:"GeForce RTX 5060 Ti 16GB",p:420,tdp:180,len:270,s:63},
{n:"Radeon RX 9060 XT 16GB",p:400,tdp:160,len:280,s:62},
{n:"Radeon RX 7800 XT",p:490,tdp:263,len:280,s:74},
{n:"GeForce RTX 5070",p:640,tdp:250,len:300,s:85},
{n:"Radeon RX 9070 XT",p:700,tdp:304,len:320,s:90}],
board:[{n:"A520M",p:75,sock:"AM4",mem:"DDR4",ff:"mATX"},{n:"B660M",p:100,sock:"LGA1700",mem:"DDR4",ff:"mATX"},{n:"B650M",p:125,sock:"AM5",mem:"DDR5",ff:"mATX"},{n:"B650 ATX",p:160,sock:"AM5",mem:"DDR5",ff:"ATX"},{n:"Z790 ATX",p:200,sock:"LGA1700",mem:"DDR5",ff:"ATX"},
{n:"B450M",p:70,sock:"AM4",mem:"DDR4",ff:"mATX"},
{n:"B550M",p:90,sock:"AM4",mem:"DDR4",ff:"mATX"},
{n:"B550 ATX",p:120,sock:"AM4",mem:"DDR4",ff:"ATX"},
{n:"H610M",p:65,sock:"LGA1700",mem:"DDR4",ff:"mATX"},
{n:"B760M DDR5",p:120,sock:"LGA1700",mem:"DDR5",ff:"mATX"},
{n:"A620M",p:95,sock:"AM5",mem:"DDR5",ff:"mATX"},
{n:"B850 ATX",p:210,sock:"AM5",mem:"DDR5",ff:"ATX"}],
ram:[{n:"16 GB DDR4",p:40,mem:"DDR4",gb:16},{n:"32 GB DDR4",p:70,mem:"DDR4",gb:32},{n:"16 GB DDR5",p:55,mem:"DDR5",gb:16},{n:"32 GB DDR5",p:95,mem:"DDR5",gb:32},
{n:"16 GB DDR4-3600",p:45,mem:"DDR4",gb:16},
{n:"16 GB DDR5-6000",p:62,mem:"DDR5",gb:16},
{n:"32 GB DDR5-6400",p:105,mem:"DDR5",gb:32},
{n:"64 GB DDR5",p:190,mem:"DDR5",gb:64}],
ssd:[{n:"500 GB NVMe",p:38,gb:500,nvme:1},{n:"1 TB NVMe",p:62,gb:1000,nvme:1},{n:"2 TB NVMe",p:110,gb:2000,nvme:1},
{n:"500 GB SATA SSD",p:30,gb:500,nvme:0},
{n:"1 TB SATA SSD",p:55,gb:1000,nvme:0},
{n:"1 TB NVMe PCIe 3.0",p:52,gb:1000,nvme:1},
{n:"4 TB NVMe",p:260,gb:4000,nvme:1}],
psu:[{n:"550 W Bronze",p:55,w:550},{n:"650 W Gold",p:70,w:650},{n:"750 W Gold",p:90,w:750},{n:"850 W Gold",p:120,w:850},{n:"1000 W Gold",p:160,w:1000},
{n:"450 W Bronze",p:40,w:450},
{n:"500 W Bronze",p:45,w:500},
{n:"600 W Bronze",p:50,w:600},
{n:"650 W Bronze",p:65,w:650},
{n:"750 W Bronze",p:78,w:750}],
cs:[{n:"Compact mATX case",p:55,ff:["mATX"],gpu:300},{n:"Mid-tower ATX case",p:75,ff:["ATX","mATX"],gpu:330},{n:"Large airflow ATX case",p:110,ff:["ATX","mATX"],gpu:400},
{n:"Budget mATX case",p:40,ff:["mATX"],gpu:280},
{n:"Budget ATX case",p:50,ff:["ATX","mATX"],gpu:310},
{n:"Mesh-front airflow ATX case",p:90,ff:["ATX","mATX"],gpu:360},
{n:"Premium full-tower ATX case",p:160,ff:["ATX","mATX"],gpu:420}]};
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
"Large airflow ATX case":[["Size","Large mid-tower"],["CPU cooler height","up to about 175 mm"],["Expansion slots","7"],["Drive bays","2× 2.5-inch, 2× 3.5-inch (typical)"]],
"Ryzen 3 4100":[["Cores / threads","4 / 8"],["Clock","3.8 GHz base, 4.0 GHz boost"],["Cache","4 MB L3"],["Architecture","Zen 2"],["Built-in graphics","None"],["Memory","DDR4"],["PCIe","3.0"]],
"Ryzen 5 5500":[["Cores / threads","6 / 12"],["Clock","3.6 GHz base, 4.2 GHz boost"],["Cache","16 MB L3"],["Architecture","Zen 3"],["Built-in graphics","None"],["Memory","DDR4"],["PCIe","3.0"]],
"Ryzen 5 5600GT":[["Cores / threads","6 / 12"],["Clock","3.6 GHz base, 4.6 GHz boost"],["Cache","16 MB L3"],["Architecture","Zen 3"],["Built-in graphics","Radeon, 7 compute units"],["Memory","DDR4"],["PCIe","3.0"]],
"Ryzen 7 5700X3D":[["Cores / threads","8 / 16"],["Clock","3.0 GHz base, 4.1 GHz boost"],["Cache","96 MB L3 (3D V-Cache)"],["Architecture","Zen 3"],["Built-in graphics","None"],["Memory","DDR4"],["PCIe","4.0"]],
"Core i3-12100F":[["Cores / threads","4 / 8"],["Clock","3.3 GHz base, 4.3 GHz boost"],["Cache","12 MB L3"],["Architecture","Alder Lake"],["Built-in graphics","None (F model)"],["Memory","DDR4 or DDR5, set by the board"],["Max turbo power","89 W"],["PCIe","5.0 graphics slot"]],
"Core i5-13400F":[["Cores / threads","10 (6 fast + 4 efficient) / 16"],["Clock","Fast cores 2.5 GHz base, 4.6 GHz boost"],["Cache","20 MB L3"],["Architecture","Raptor Lake"],["Built-in graphics","None (F model)"],["Memory","DDR4 or DDR5, set by the board"],["Max turbo power","148 W"],["PCIe","5.0 graphics slot"]],
"Core i5-14400F":[["Cores / threads","10 (6 fast + 4 efficient) / 16"],["Clock","Fast cores 2.5 GHz base, 4.7 GHz boost"],["Cache","20 MB L3"],["Architecture","Raptor Lake Refresh"],["Built-in graphics","None (F model)"],["Memory","DDR4 or DDR5, set by the board"],["Max turbo power","148 W"],["PCIe","5.0 graphics slot"]],
"Core i5-13600K":[["Cores / threads","14 (6 fast + 8 efficient) / 20"],["Clock","Fast cores 3.5 GHz base, 5.1 GHz boost"],["Cache","24 MB L3"],["Architecture","Raptor Lake"],["Built-in graphics","Intel UHD 770"],["Memory","DDR4 or DDR5, set by the board"],["Max turbo power","181 W"],["PCIe","5.0 graphics slot"]],
"Core i7-14700K":[["Cores / threads","20 (8 fast + 12 efficient) / 28"],["Clock","Fast cores 3.4 GHz base, 5.6 GHz boost"],["Cache","33 MB L3"],["Architecture","Raptor Lake Refresh"],["Built-in graphics","Intel UHD 770"],["Memory","DDR4 or DDR5, set by the board"],["Max turbo power","253 W"],["PCIe","5.0 graphics slot"]],
"Ryzen 5 7500F":[["Cores / threads","6 / 12"],["Clock","3.7 GHz base, 5.0 GHz boost"],["Cache","32 MB L3"],["Architecture","Zen 4"],["Built-in graphics","None"],["Memory","DDR5"],["PCIe","5.0"]],
"Ryzen 5 9600X":[["Cores / threads","6 / 12"],["Clock","3.9 GHz base, 5.4 GHz boost"],["Cache","32 MB L3"],["Architecture","Zen 5"],["Built-in graphics","Radeon, 2 compute units"],["Memory","DDR5"],["PCIe","5.0"]],
"Ryzen 7 7700":[["Cores / threads","8 / 16"],["Clock","3.8 GHz base, 5.3 GHz boost"],["Cache","32 MB L3"],["Architecture","Zen 4"],["Built-in graphics","Radeon, 2 compute units"],["Memory","DDR5"],["PCIe","5.0"]],
"Ryzen 7 9700X":[["Cores / threads","8 / 16"],["Clock","3.8 GHz base, 5.5 GHz boost"],["Cache","32 MB L3"],["Architecture","Zen 5"],["Built-in graphics","Radeon, 2 compute units"],["Memory","DDR5"],["PCIe","5.0"]],
"Ryzen 7 9800X3D":[["Cores / threads","8 / 16"],["Clock","4.7 GHz base, 5.2 GHz boost"],["Cache","96 MB L3 (3D V-Cache)"],["Architecture","Zen 5"],["Built-in graphics","Radeon, 2 compute units"],["Memory","DDR5"],["PCIe","5.0"]],
"Radeon RX 6500 XT":[["Memory","4 GB GDDR6, 64-bit"],["Shader cores","1,024"],["Boost clock","2,815 MHz"],["Interface","PCIe 4.0 x4"],["Power connector","None or 1× 6-pin (varies)"],["Features","Ray tracing, FSR upscaling"]],
"Intel Arc B580":[["Memory","12 GB GDDR6, 192-bit"],["Shader cores","20 Xe cores"],["Boost clock","2,670 MHz"],["Interface","PCIe 4.0 x8"],["Power connector","1× 8-pin (typical)"],["Features","Ray tracing, XeSS upscaling"]],
"Radeon RX 7600":[["Memory","8 GB GDDR6, 128-bit"],["Shader cores","2,048"],["Boost clock","2,655 MHz"],["Interface","PCIe 4.0 x8"],["Power connector","1× 8-pin (typical)"],["Features","Ray tracing, FSR 3"]],
"GeForce RTX 5060":[["Memory","8 GB GDDR7, 128-bit"],["Shader cores","3,840 CUDA"],["Boost clock","2,497 MHz"],["Interface","PCIe 5.0 x8"],["Power connector","1× 8-pin (typical)"],["Features","Ray tracing, DLSS 4 with multi frame generation"]],
"GeForce RTX 5060 Ti 16GB":[["Memory","16 GB GDDR7, 128-bit"],["Shader cores","4,608 CUDA"],["Boost clock","2,572 MHz"],["Interface","PCIe 5.0 x8"],["Power connector","1× 8-pin (typical)"],["Features","Ray tracing, DLSS 4 with multi frame generation"]],
"Radeon RX 9060 XT 16GB":[["Memory","16 GB GDDR6, 128-bit"],["Shader cores","2,048"],["Boost clock","3,130 MHz"],["Interface","PCIe 5.0 x16"],["Power connector","1× 8-pin (typical)"],["Features","Ray tracing, FSR 4"]],
"Radeon RX 7800 XT":[["Memory","16 GB GDDR6, 256-bit"],["Shader cores","3,840"],["Boost clock","2,430 MHz"],["Interface","PCIe 4.0 x16"],["Power connector","2× 8-pin (typical)"],["Features","Ray tracing, FSR 3"]],
"GeForce RTX 5070":[["Memory","12 GB GDDR7, 192-bit"],["Shader cores","6,144 CUDA"],["Boost clock","2,512 MHz"],["Interface","PCIe 5.0 x16"],["Power connector","1× 16-pin (12V-2x6)"],["Features","Ray tracing, DLSS 4 with multi frame generation"]],
"Radeon RX 9070 XT":[["Memory","16 GB GDDR6, 256-bit"],["Shader cores","4,096"],["Boost clock","2,970 MHz"],["Interface","PCIe 5.0 x16"],["Power connector","2× 8-pin (typical)"],["Features","Ray tracing, FSR 4"]],
"B450M":[["Chipset","AMD B450"],["Works with","Ryzen 1000–5000 (BIOS update may be needed)"],["Memory slots","2–4× DDR4"],["Graphics slot","PCIe 3.0 x16"],["M.2 slots","1 (typical)"],["Overclocking","CPU and memory"]],
"B550M":[["Chipset","AMD B550"],["Works with","Ryzen 3000 and 5000"],["Memory slots","2–4× DDR4"],["Graphics slot","PCIe 4.0 x16"],["M.2 slots","2 (typical)"],["Overclocking","CPU and memory"]],
"B550 ATX":[["Chipset","AMD B550"],["Works with","Ryzen 3000 and 5000"],["Memory slots","4× DDR4"],["Graphics slot","PCIe 4.0 x16"],["M.2 slots","2–3 (typical)"],["Overclocking","CPU and memory"]],
"H610M":[["Chipset","Intel H610"],["Works with","12th–14th gen Core (BIOS update may be needed)"],["Memory slots","2× DDR4 (typical)"],["Graphics slot","PCIe 4.0 x16"],["M.2 slots","1 (typical)"],["Overclocking","None"]],
"B760M DDR5":[["Chipset","Intel B760"],["Works with","12th–14th gen Core"],["Memory slots","2–4× DDR5"],["Graphics slot","PCIe 4.0 or 5.0 x16 (varies)"],["M.2 slots","2–3 (typical)"],["Overclocking","Memory only"]],
"A620M":[["Chipset","AMD A620"],["Works with","Ryzen 7000, 8000 and 9000"],["Memory slots","2–4× DDR5"],["Graphics slot","PCIe 4.0 x16 (typical)"],["M.2 slots","1–2 (typical)"],["Overclocking","Memory only"]],
"B850 ATX":[["Chipset","AMD B850"],["Works with","Ryzen 7000, 8000 and 9000"],["Memory slots","4× DDR5"],["Graphics slot","PCIe 5.0 x16 (typical)"],["M.2 slots","2–3 (typical), PCIe 5.0 on the first"],["Overclocking","CPU and memory"]],
"16 GB DDR4-3600":[["Kit","2× 8 GB"],["Speed","DDR4-3600"],["Latency","CL18"],["Voltage","1.35 V"],["Profile","XMP"]],
"16 GB DDR5-6000":[["Kit","2× 8 GB"],["Speed","DDR5-6000"],["Latency","CL30"],["Voltage","1.35 V"],["Profile","EXPO / XMP"]],
"32 GB DDR5-6400":[["Kit","2× 16 GB"],["Speed","DDR5-6400"],["Latency","CL32"],["Voltage","1.40 V"],["Profile","XMP"]],
"64 GB DDR5":[["Kit","2× 32 GB"],["Speed","DDR5-6000"],["Latency","CL30"],["Voltage","1.35 V"],["Profile","EXPO / XMP"]],
"500 GB SATA SSD":[["Capacity","500 GB"],["Type","2.5-inch SATA III"],["Read speed","about 550 MB/s"],["Write speed","about 500 MB/s"]],
"1 TB SATA SSD":[["Capacity","1 TB"],["Type","2.5-inch SATA III"],["Read speed","about 550 MB/s"],["Write speed","about 520 MB/s"]],
"1 TB NVMe PCIe 3.0":[["Capacity","1 TB"],["Type","M.2 2280 NVMe, PCIe 3.0 x4"],["Read speed","about 3,400 MB/s"],["Write speed","about 3,000 MB/s"]],
"4 TB NVMe":[["Capacity","4 TB"],["Type","M.2 2280 NVMe, PCIe 4.0 x4"],["Read speed","about 5,000 MB/s"],["Write speed","about 4,000 MB/s"]],
"450 W Bronze":[["Efficiency","80 PLUS Bronze (about 85% at half load)"],["Size","ATX"],["Cables","Non-modular (typical)"],["Graphics connectors","1× 6+2-pin"]],
"500 W Bronze":[["Efficiency","80 PLUS Bronze (about 85% at half load)"],["Size","ATX"],["Cables","Non-modular (typical)"],["Graphics connectors","1× 6+2-pin"]],
"600 W Bronze":[["Efficiency","80 PLUS Bronze (about 85% at half load)"],["Size","ATX"],["Cables","Non-modular (typical)"],["Graphics connectors","2× 6+2-pin"]],
"650 W Bronze":[["Efficiency","80 PLUS Bronze (about 85% at half load)"],["Size","ATX"],["Cables","Non-modular (typical)"],["Graphics connectors","2× 6+2-pin"]],
"750 W Bronze":[["Efficiency","80 PLUS Bronze (about 85% at half load)"],["Size","ATX"],["Cables","Non-modular (typical)"],["Graphics connectors","2–3× 6+2-pin"]],
"Budget mATX case":[["Size","Compact"],["CPU cooler height","up to about 150 mm"],["Expansion slots","4"],["Drive bays","1× 2.5-inch, 1× 3.5-inch (typical)"]],
"Budget ATX case":[["Size","Mid-tower"],["CPU cooler height","up to about 160 mm"],["Expansion slots","7"],["Drive bays","2× 2.5-inch, 1× 3.5-inch (typical)"]],
"Mesh-front airflow ATX case":[["Size","Mid-tower, mesh front"],["CPU cooler height","up to about 170 mm"],["Expansion slots","7"],["Drive bays","2× 2.5-inch, 2× 3.5-inch (typical)"]],
"Premium full-tower ATX case":[["Size","Full tower"],["CPU cooler height","up to about 185 mm"],["Expansion slots","8"],["Drive bays","3× 2.5-inch, 3× 3.5-inch (typical)"]]};
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
var LEVELS=[["Cheapest",260],["Medium",450],["Good",900],["Expensive",1e9]];
var S={sel:[2,8,21],tier:2,pk:"gpu",cg:4,gc:"All"};
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
    return{gpu:g,cpu:c,board:bd,ram:ram,ssd:minBy(P.ssd,function(x){return x.nvme&&x.gb>=(gb>16?1000:500)}),psu:psu,cs:cs};
  }
}
/* Best processor + graphics card for this game within a cost level (the cost cap is internal and never shown) */
function bestUnder(cap,w,need){
  var best=null;
  P.cpu.forEach(function(c){P.gpu.forEach(function(g){
    var cost=c.p+g.p;if(cost>cap)return;
    var p=perf(g,c,w),ok=need&&p>=need;
    if(!best||(ok&&!best.ok)||(ok===best.ok&&(ok?cost<best.w:(p>best.p||(p===best.p&&cost<best.w)))))best={c:c,g:g,p:p,w:cost,ok:ok};
  })});
  return best;
}
/* Guides and tips */
var GUIDES=[{"cat": "Choosing parts", "t": "How to choose a graphics card", "i": "The graphics card has the biggest effect on gaming speed, so it should get the largest share of your budget.", "ol": false, "items": [["Match it to your screen.", "A 1080p screen works well with an entry or mid-range card. 1440p and 4K need stronger cards, and a 144 Hz screen needs a faster card than a 60 Hz one to use its speed."], ["Check the video memory (VRAM).", "8 GB is the minimum for new games at 1080p. 12 to 16 GB is safer for 1440p and for keeping the card several years."], ["Don’t pair a very strong card with a weak processor.", "The processor can hold the card back, especially in competitive games at high frame rates."], ["Check that it fits.", "Compare the card’s length with your case, and check its power connectors against your power supply."], ["Look at the features.", "NVIDIA has DLSS, AMD has FSR and Intel has XeSS. They raise speed by drawing the game at a lower resolution and sharpening it."], ["Read reviews of the exact model.", "Cooling and noise differ a lot between brands, even with the same chip."]], "link": ["Try it in the configurator", "#config"]}, {"cat": "Choosing parts", "t": "How to choose a processor", "i": "For gaming, the processor matters less than the graphics card, but a weak one limits you at high frame rates.", "ol": false, "items": [["6 cores and 12 threads are enough for nearly all games.", "More cores help if you stream, edit video or keep many programs open."], ["For the highest frame rates in competitive games,", "look at processors with extra cache, such as AMD’s X3D chips."], ["Check the socket.", "A processor only fits a board with the same socket. In our list that means AM4, AM5 or LGA1700. AM5 is the newest, so it has the longest upgrade path."], ["Read the letters.", "Intel “F” models have no built-in graphics, so you need a graphics card. “K” models can be overclocked."], ["Check whether a cooler is included.", "Some processors come with one and some don’t, so you may need to buy a cooler separately."], ["Plan for heat.", "High-end processors use more power, so they need a good cooler and a stronger motherboard."]], "link": ["Try it in the configurator", "#config"]}, {"cat": "Choosing parts", "t": "How much memory (RAM) do you need", "i": "Memory is cheap to get right and annoying to fix later, so check these points before you buy.", "ol": false, "items": [["16 GB is the minimum for gaming today.", "32 GB is comfortable if you also stream, edit or keep many things open."], ["Buy two sticks, not one.", "Two sticks run in dual channel, which is noticeably faster than one."], ["DDR4 and DDR5 are not interchangeable.", "Your motherboard supports only one type, so check it first."], ["Good speeds:", "DDR5-6000 with CL30 for AMD AM5, and DDR4-3200 to 3600 with CL16 to CL18 for older boards. Faster kits cost more for small gains."], ["Turn on XMP (Intel) or EXPO (AMD) in the BIOS.", "Without it, memory runs at a slow default speed."]], "link": ["Try it in the configurator", "#config"]}, {"cat": "Choosing parts", "t": "How to choose storage", "i": "Storage decides how fast Windows starts and how quickly games load.", "ol": false, "items": [["Use an NVMe SSD (M.2) for Windows and your games.", "It is much faster than a hard drive and faster than a SATA SSD."], ["1 TB is the sweet spot.", "Modern games often take 50 to 150 GB each."], ["PCIe 3.0 or 4.0 makes little difference in games.", "Both load games in nearly the same time, so don’t pay extra for the fastest model."], ["Keep 10 to 20% free.", "A nearly full SSD slows down."], ["Use a hard drive only for backups and old files.", "It is cheap for lots of space but slow."]], "link": ["Try it in the configurator", "#config"]}, {"cat": "Choosing parts", "t": "How to choose a power supply", "i": "The power supply feeds every other part. A bad one can damage them, so don’t save money here.", "ol": false, "items": [["Calculate the wattage.", "Add your processor and graphics card power, add about 80 W for everything else, then add 30% headroom. The configurator does this for you."], ["Quality matters more than watts.", "Choose a known brand with a long warranty. 7 to 10 years is a good sign."], ["The 80 PLUS label shows efficiency, not quality.", "Bronze is fine for most builds. Gold wastes less power and often uses better parts."], ["Check the connectors.", "Your graphics card’s plug (6+2-pin or the newer 16-pin) must be on the power supply or come as an adapter."], ["Use only the cables that came with your power supply.", "Cables from another unit can have different wiring and damage parts."]], "link": ["Try it in the configurator", "#config"]}, {"cat": "Choosing parts", "t": "How to check that parts fit together", "i": "Most mistakes come from parts that don’t fit. Go through this list before you buy.", "ol": false, "items": [["Socket.", "The processor and motherboard must use the same socket."], ["Memory type.", "DDR4 or DDR5 must match the motherboard."], ["Board size.", "ATX or micro-ATX boards must fit your case."], ["Graphics card length.", "Leave about 2 cm between the card and the front of the case."], ["Cooler height.", "A tall CPU cooler must fit under your case’s side panel."], ["Power.", "Wattage and connectors must suit your graphics card."], ["BIOS version.", "Some boards need an update before they run a newer processor. Check the board maker’s support list."]], "link": ["Open the configurator, which checks the first five for you", "#config"]}, {"cat": "Building", "t": "How to build a PC, step by step", "i": "Take your time. Nothing needs force, and if something doesn’t fit, stop and check the manual.", "ol": true, "items": [["Prepare.", "Use a clean table, a Phillips screwdriver, the manuals and a flashlight. Touch a bare metal part of the case first to discharge static."], ["Install the processor.", "Do this outside the case. Match the small triangle on the chip with the socket and close the lever. Never force it."], ["Install the memory.", "Check the manual for the right slots (often slots 2 and 4 for two sticks) and press until both clips click."], ["Install the M.2 SSD,", "and remove the protective film from its heatsink pad."], ["Mount the cooler.", "Remove the plastic film, add thermal paste if the cooler doesn’t have it, and tighten the screws in a cross pattern. Plug in its fan cable."], ["Fit the board in the case.", "Make sure the case’s standoffs match your board size, then screw the board down."], ["Install the power supply", "with its fan facing a vent. Connect the 24-pin cable and the processor cable (4+4 or 8-pin) at the top of the board."], ["Install the graphics card", "in the top x16 slot and push the power cables in fully."], ["Connect the front panel", "cables (power button, USB, audio) using the diagram in the manual, and plug in the case fans."], ["Check and boot.", "Close the case, plug the monitor into the graphics card (not the motherboard) and turn the PC on."]], "link": null}, {"cat": "Building", "t": "After the build: first setup", "i": "A new PC needs a few settings before it runs at full speed.", "ol": false, "items": [["Enter the BIOS", "(press Del or F2 as the PC starts) and check that all your parts show up."], ["Turn on XMP or EXPO", "so your memory runs at its rated speed."], ["Check that Resizable BAR is on.", "It helps modern graphics cards and is often on by default."], ["Install Windows from a USB stick,", "made with Microsoft’s official media creation tool."], ["Install drivers from the makers’ websites.", "Use NVIDIA, AMD or Intel for graphics, and the motherboard maker for chipset and network drivers."], ["Set your monitor to its full refresh rate.", "In Windows go to Settings, System, Display, Advanced display. Many people play at 60 Hz without noticing."], ["Watch temperatures", "with a free monitoring tool while you play your first games."]], "link": null}, {"cat": "Fixing problems", "t": "PC won’t start or shows no picture", "i": "Work through these in order. Most of the time it is a loose cable or a memory stick that isn’t fully seated.", "ol": true, "items": [["Check the basics.", "The power supply switch is on, the cable is in the wall, and the 24-pin and processor power cables are fully pushed in."], ["Check the monitor cable.", "It must go into the graphics card, not the motherboard."], ["Re-seat the memory.", "Remove it and push it back until both clips click. Try one stick in the slot the manual recommends."], ["Read the debug lights", "on the motherboard (CPU, DRAM, VGA, BOOT). The one that stays on points to the problem."], ["Re-seat the graphics card", "and its power cables."], ["Reset the BIOS.", "Remove the small round battery for a minute, or use the clear CMOS jumper or button."], ["Check the BIOS version.", "A new processor on an older board may need a BIOS update before it starts."], ["Strip it down.", "Leave only the processor, cooler, one memory stick and the power supply, then add parts back one by one."]], "link": null}, {"cat": "Fixing problems", "t": "Games stutter or run slowly", "i": "Slow games are often caused by a setting, not by weak parts.", "ol": false, "items": [["Check the monitor cable and refresh rate.", "The cable must be in the graphics card, and Windows must be set to your monitor’s full refresh rate."], ["Update the graphics driver", "from NVIDIA, AMD or Intel."], ["Check temperatures.", "A processor or graphics card above about 90°C slows itself down."], ["Close background programs", "like browsers with many tabs and game launchers."], ["Turn on XMP or EXPO,", "and install games on the SSD, not a hard drive."], ["Lower the heavy settings first:", "shadows, volumetric effects, ray tracing and view distance."], ["Use DLSS, FSR or XeSS", "in Quality mode for extra speed with little loss in looks."]], "link": null}, {"cat": "Fixing problems", "t": "Keep your PC cool and quiet", "i": "A cool PC is faster, quieter and lasts longer.", "ol": false, "items": [["Plan the airflow.", "Fans at the front pull cool air in. Fans at the rear and top push hot air out."], ["Keep cables tidy", "so they don’t block the air."], ["Know the normal temperatures.", "A processor is about 30 to 50°C idle and 60 to 85°C while gaming. A graphics card is about 60 to 80°C while gaming. Over about 90°C is too hot."], ["Clean the dust every 3 to 6 months", "with a soft brush or compressed air. Hold the fans still while you do it."], ["Adjust the fan curves", "in the BIOS for a quiet PC when it is idle."], ["Replace the thermal paste", "every few years if temperatures slowly climb."], ["Leave space around the PC.", "Don’t push it against a wall or into a closed cabinet."]], "link": null}, {"cat": "Tips", "t": "Choose settings that look good and run fast", "i": "A few settings give most of the speed for little loss in picture quality.", "ol": false, "items": [["Match the resolution to your screen.", "Don’t run higher than your monitor shows."], ["Turn on G-Sync or FreeSync", "if your monitor supports it, and cap the frame rate slightly below its refresh rate."], ["Lower shadows, volumetric effects and ray tracing first.", "They cost the most speed for the least visible gain."], ["Keep textures high", "if your graphics card has enough video memory."], ["Use DLSS, FSR or XeSS in Quality mode.", "It is almost free speed."]], "link": null}, {"cat": "Tips", "t": "Upgrading an old PC: what first?", "i": "You often don’t need a whole new PC. Upgrade in this order.", "ol": true, "items": [["Move to an SSD", "if you still start Windows from a hard drive. It is the biggest change you will feel."], ["Add memory", "up to 16 or 32 GB. Match the type (DDR3, DDR4 or DDR5) your board uses."], ["Upgrade the graphics card.", "It is the best upgrade for gaming. Check that your power supply and case suit it."], ["Upgrade the processor", "only if your board supports a faster one. Otherwise you need a new board and often new memory too."], ["Check the power supply.", "If it is old or very weak, replace it before adding a stronger graphics card."]], "link": ["Open the configurator", "#config"]}, {"cat": "Tips", "t": "Buying parts smart", "i": "A few habits save money and trouble.", "ol": false, "items": [["Compare several shops.", "Use the Shops page to open each part in six Bulgarian shops. Prices move quickly, especially for memory and graphics cards."], ["Check the warranty.", "In the EU, new goods have a 2-year legal guarantee, and some makers give 3 to 5 years."], ["Know your return rights.", "For online orders you generally have 14 days to return a purchase. Keep the box and the receipt."], ["Spend on what matters:", "the graphics card first, then a good power supply and case. Skip RGB and brand premiums."], ["Tray or bulk processors", "come without a box and often without a cooler, and the warranty can be different."], ["Buy used parts only from sellers you trust,", "and test them as soon as they arrive."]], "link": ["Compare parts in shops", "#shops"]}, {"cat": "Tips", "t": "Glossary: words you will see", "i": "Short explanations of common terms.", "ol": false, "items": [["TDP / power draw:", "how much power a part uses, which sets how strong your power supply and cooler need to be."], ["VRAM:", "the graphics card’s own memory, used for textures and resolution."], ["XMP / EXPO:", "a BIOS setting that makes memory run at its advertised speed."], ["PCIe:", "the connection between the motherboard and cards or SSDs. Higher numbers are faster."], ["NVMe:", "a fast type of SSD that plugs into the motherboard’s M.2 slot."], ["DLSS / FSR / XeSS:", "features that draw the game at a lower resolution and sharpen it to raise speed."], ["Bottleneck:", "when one part is too slow and holds back another."], ["ATX / micro-ATX:", "sizes of motherboards and cases. A smaller board fits a bigger case, not the other way round."], ["Refresh rate (Hz):", "how many times per second your monitor updates the picture."], ["fps:", "frames per second, how smoothly a game runs."]], "link": null}];
var TIPS=["Put most of your budget into the graphics card for gaming.", "Buy memory in pairs and turn on XMP or EXPO.", "Plug the monitor into the graphics card, not the motherboard.", "Set your monitor to its full refresh rate in Windows.", "Don’t save money on the power supply.", "Clean the dust out every 3 to 6 months.", "Check that the case fits your graphics card before you buy.", "Compare at least three shops before you buy.", "Keep your graphics driver up to date.", "Back up your important files."];
var GCATS=["All","Choosing parts","Building","Fixing problems","Tips"];
function guides(){
  $("#gd-tips").innerHTML=TIPS.map(function(t){return'<li>'+t+'</li>'}).join("");
  $("#gd-cats").innerHTML=GCATS.map(function(c){return'<button class="alt chip" data-c="'+c+'" aria-pressed="'+(S.gc===c)+'">'+c+'</button>'}).join("");
  $("#gd-out").innerHTML=GUIDES.filter(function(g){return S.gc==="All"||g.cat===S.gc}).map(function(g){
    var tag=g.ol?"ol":"ul";
    return'<details class="panel gm gd"><summary>'+g.t+' <span class="tag">'+g.cat+'</span></summary><p style="color:var(--mute);margin:10px 0 0">'+g.i+'</p><'+tag+'>'+g.items.map(function(x){return'<li><b>'+x[0]+'</b> '+x[1]+'</li>'}).join("")+'</'+tag+'>'+(g.link?'<p style="margin:14px 0 0"><a class="lnk" href="'+g.link[1]+'">'+g.link[0]+' →</a></p>':"")+'</details>'}).join("");
}
function shops(){
  $("#pt-cats").innerHTML=CATS.map(function(c){return'<button class="alt" data-k="'+c[1]+'" aria-pressed="'+(S.pk===c[1])+'">'+c[0]+'</button>'}).join("");
  var h='<table><thead><tr><th>Part</th>'+SHOPS.map(function(s){return'<th>'+s[0]+'</th>'}).join("")+'</tr></thead><tbody>';
  P[S.pk].slice().sort(function(a,b){return a.p-b.p}).forEach(function(x){
    h+='<tr><th style="color:var(--ink)">'+item(x,S.pk,0)+'</th>'+SHOPS.map(function(s,i){return'<td><a class="lnk" target="_blank" rel="noopener" href="'+lk(x,i,S.pk)+'">Open</a></td>'}).join("")+'</tr>'});
  $("#pt-out").innerHTML=h+'</tbody></table>';
}
/* Configurator: pick each part yourself, with compatibility checks (like a step-by-step PC builder) */
var STEPS=[["1. Computer case",[["Case","cs"]]],["2. Main components",[["Processor","cpu"],["Motherboard","board"],["Memory","ram"],["Graphics card","gpu"],["Storage","ssd"],["Power supply","psu"]]]];
var CF={cs:-1,cpu:-1,board:-1,ram:-1,gpu:-1,ssd:-1,psu:-1};
function cfp(k){return CF[k]>-1?P[k][CF[k]]:null}
function conflict(k,x){
  var c=cfp("cpu"),b=cfp("board"),r=cfp("ram"),g=cfp("gpu"),cs=cfp("cs");
  if(k==="cpu"&&b&&x.sock!==b.sock)return"your board uses socket "+b.sock+", this needs "+x.sock;
  if(k==="board"){
    if(c&&c.sock!==x.sock)return"socket "+x.sock+", but your processor uses "+c.sock;
    if(r&&r.mem!==x.mem)return"uses "+x.mem+", but your memory is "+r.mem;
    if(cs&&cs.ff.indexOf(x.ff)<0)return x.ff+" board does not fit your case";
  }
  if(k==="ram"&&b&&x.mem!==b.mem)return"your board uses "+b.mem+", this is "+x.mem;
  if(k==="gpu"&&cs&&cs.gpu<x.len+20)return"too long for your case";
  if(k==="cs"){
    if(b&&x.ff.indexOf(b.ff)<0)return"does not fit your "+b.ff+" board";
    if(g&&x.gpu<g.len+20)return"too short for your graphics card";
  }
  if(k==="psu"&&c&&g&&x.w<(c.tdp+g.tdp+80)*1.3)return"too weak for your processor and graphics card";
  return"";
}
function config(){
  var h="";
  STEPS.forEach(function(st){
    h+='<h2 style="font-size:22px">'+st[0]+'</h2>';
    st[1].forEach(function(sl){
      var k=sl[1],cur=cfp(k),warn=cur?conflict(k,cur):"";
      h+='<div class="panel slot"><label for="cf-'+k+'">'+sl[0]+'</label><select id="cf-'+k+'" data-k="'+k+'"><option value="-1">Choose '+sl[0].toLowerCase()+'</option>';
      P[k].map(function(x,i){return i}).sort(function(a,b){return P[k][a].p-P[k][b].p}).forEach(function(i){var x=P[k][i],r=conflict(k,x);h+='<option value="'+i+'"'+(CF[k]===i?' selected':'')+'>'+x.n+' ('+SPECS[x.n][0][1]+')'+(r?' – not compatible: '+r:'')+'</option>'});
      h+='</select>'+(warn?'<p class="bad" style="margin:8px 0 0">⚠ '+warn+'</p>':'')+(cur?'<div style="margin-top:12px">'+item(cur,k,1)+'</div>':'')+'</div>';
    });
  });
  $("#cf-slots").innerHTML=h;
  var c=cfp("cpu"),b=cfp("board"),r=cfp("ram"),g=cfp("gpu"),cs=cfp("cs"),p=cfp("psu");
  function ln(ok,t,pending){return'<li class="'+(ok===null?'':ok?'ok':'bad')+'">'+(ok===null?'– ':ok?'✓ ':'✗ ')+t+(ok===null?' ('+pending+')':'')+'</li>'}
  var s='<div class="panel"><h2 style="margin:0 0 10px;font-size:22px">Your configuration</h2><ul class="checks">';
  s+=ln(c&&b?c.sock===b.sock:null,"Processor fits the motherboard socket","choose both");
  s+=ln(r&&b?r.mem===b.mem:null,"Memory type matches the motherboard","choose both");
  s+=ln(b&&cs?cs.ff.indexOf(b.ff)>-1:null,"Motherboard fits the case","choose both");
  s+=ln(g&&cs?cs.gpu>=g.len+20:null,"Graphics card fits the case","choose both");
  s+=ln(c&&g&&p?p.w>=(c.tdp+g.tdp+80)*1.3:null,"Power supply is strong enough","choose processor, graphics card and power supply");
  s+='</ul>';
  if(c&&g){var d=c.tdp+g.tdp+80;s+='<p style="margin:14px 0 0">Your parts draw about <b>'+d+' W</b>. Choose a power supply of at least <b>'+(Math.ceil(d*1.3/50)*50)+' W</b>.</p>'}
  s+='<h3 style="margin:18px 0 6px">How fast will it run?</h3><select id="cf-game" aria-label="Game">'+GAMES.map(function(x,i){return'<option value="'+i+'"'+(S.cg===i?' selected':'')+'>'+x[0]+'</option>'}).join("")+'</select>';
  var gm=GAMES[S.cg];
  s+='<p style="margin:10px 0 0">'+(c&&g?'About <b class="fps-ok">'+fps(gm,perf(g,c,WT[gm[2]]))+' fps</b> in '+gm[0]+' at 1080p high settings.':'Choose a processor and a graphics card to see the speed.')+'</p>';
  s+='<h3 style="margin:18px 0 6px">Fill it for me</h3><div class="row">'+LEVELS.map(function(l,i){return'<button class="alt chip" data-fill="'+i+'">'+l[0]+' parts for '+gm[0]+'</button>'}).join("")+'</div>';
  s+='<div class="row" style="margin-top:18px"><button data-act="copy">Copy link to this configuration</button><button class="alt" data-act="reset">Start over</button></div><p id="cf-msg" style="color:var(--mute);margin:8px 0 0"></p></div>';
  $("#cf-sum").innerHTML=s;
}
function cfLink(){var q=new URLSearchParams();Object.keys(CF).forEach(function(k){if(CF[k]>-1)q.set(k,CF[k])});return location.origin+location.pathname+(q.toString()?"?"+q:"")+"#config"}
function cfLoad(){try{var q=new URLSearchParams(location.search);Object.keys(CF).forEach(function(k){var v=parseInt(q.get(k),10);if(v>=0&&v<P[k].length)CF[k]=v})}catch(e){}}
function route(){
  var r=location.hash.slice(1);if(["home","guides","config","shops"].indexOf(r)<0)r="home";
  document.querySelectorAll(".page").forEach(function(p){p.classList.toggle("on",p.id==="p-"+r)});
  document.querySelectorAll("nav a").forEach(function(a){if(a.getAttribute("href")==="#"+r)a.setAttribute("aria-current","page");else a.removeAttribute("aria-current")});
  if(r==="guides")guides();if(r==="config")config();if(r==="shops")shops();
}
$("#gd-cats").onclick=function(e){var b=e.target.closest("[data-c]");if(b){S.gc=b.dataset.c;guides()}};
$("#pt-cats").onclick=function(e){var k=e.target.dataset.k;if(k){S.pk=k;shops()}};
$("#cf-slots").onchange=function(e){var k=e.target.dataset.k;if(k){CF[k]=+e.target.value;config()}};
$("#cf-sum").onchange=function(e){if(e.target.id==="cf-game"){S.cg=+e.target.value;config()}};
$("#cf-sum").onclick=function(e){
  var f=e.target.closest("[data-fill]"),a=e.target.closest("[data-act]");
  if(f){var i=+f.dataset.fill,g=GAMES[S.cg],r=bestUnder(LEVELS[i][1],WT[g[2]],g[3]?g[3]*100/g[1]:0),b=fullBuild(r.c,r.g,i>=2?130:75);Object.keys(CF).forEach(function(k){CF[k]=P[k].indexOf(b[k])});config()}
  if(a&&a.dataset.act==="reset"){Object.keys(CF).forEach(function(k){CF[k]=-1});config()}
  if(a&&a.dataset.act==="copy"){var u=cfLink(),m=function(t){var el=$("#cf-msg");if(el)el.textContent=t};try{navigator.clipboard.writeText(u).then(function(){m("Link copied.")},function(){m(u)})}catch(x){m(u)}}
};
cfLoad();
window.addEventListener("hashchange",route);route();
