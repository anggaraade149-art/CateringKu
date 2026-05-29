(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={pernikahan:{id:`pernikahan`,name:`Catering Pernikahan`,icon:`ph-fill ph-heart`,desc:`Paket lengkap pesta pernikahan mewah & romantis`},prasmanan:{id:`prasmanan`,name:`Catering Prasmanan`,icon:`ph-fill ph-bowl-food`,desc:`Sajian prasmanan prasasti untuk berbagai acara`},perusahaan:{id:`perusahaan`,name:`Catering Perusahaan`,icon:`ph-fill ph-buildings`,desc:`Konsumsi meeting, event, & harian karyawan`},nasibox:{id:`nasibox`,name:`Catering Nasi Box`,icon:`ph-fill ph-package`,desc:`Nasi kotak praktis, higienis, & lezat`},harian:{id:`harian`,name:`Catering Harian`,icon:`ph-fill ph-calendar-star`,desc:`Makanan rumah sehat berlangganan`}},t=[{id:`raja`,name:`Raja Catering`,categories:[`pernikahan`,`prasmanan`,`perusahaan`],rating:4.8,reviews:184,distance:1.2,address:`Jl. Pemuda No. 12, Jakarta Timur`,coords:{x:45,y:38},desc:`Spesialis katering berskala besar dengan cita rasa masakan nusantara premium dan dekorasi prasmanan mewah.`,image:`https://images.unsplash.com/photo-1555244162-803834f70033?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3`,minPrice:45e3,packages:[{id:`raja-a`,name:`Paket Prasmanan A (Hemat)`,price:45e3,minOrder:100,image:`https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=60`,menu:[`Nasi Putih Premium`,`Sop Kimlo Hangat`,`Ayam Goreng Mentega Gurih`,`Kakap Asam Manis Krispi`,`Kerupuk Udang`,`Sambal Merah Spesial`,`Es Buah Segar`],desc:`Paket prasmanan lezat dengan harga bersahabat, cocok untuk arisan keluarga, syukuran, atau ulang tahun.`},{id:`raja-b`,name:`Paket Prasmanan B (Premium)`,price:75e3,minOrder:100,image:`https://images.unsplash.com/photo-1555244162-803834f70033?w=600&auto=format&fit=crop&q=60`,menu:[`Nasi Putih / Nasi Goreng Butter`,`Sop Bakso Sosis Komplet`,`Daging Sapi Lada Hitam / Teriyaki`,`Kakap Saus Padang`,`Sate Ayam Madura (2 tusuk/pax)`,`Kerupuk Udang & Emping`,`Sambal Hejo & Sambal Merah`,`Es Manado Segar`,`Buah Potong Segar (Semangka, Melon)`],desc:`Menu prasmanan lengkap dengan variasi hidangan daging sapi pilihan dan sate, menghadirkan kemewahan cita rasa.`},{id:`raja-c`,name:`Paket Pernikahan Silver`,price:95e3,minOrder:200,image:`https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=600&auto=format&fit=crop&q=60`,menu:[`Nasi Putih & Nasi Goreng Hongkong`,`Sup Buntut Sapi Premium`,`Rolade Daging Saus Cokelat`,`Udang Saus Padang Pedas Manis`,`Ayam Panggang Bumbu Rujak`,`Salad Solo Segar`,`Es Doger Tradisional`,`Aneka Pudding Gelas Cantik`,`Air Mineral Cup`],desc:`Paket katering pernikahan silver yang ekonomis namun tetap berkelas, lengkap dengan gubukan/stall hidangan penutup.`}]},{id:`budi`,name:`Budi Catering`,categories:[`nasibox`,`harian`,`prasmanan`],rating:4.6,reviews:95,distance:2.4,address:`Jl. Merdeka Barat No. 89, Jakarta Pusat`,coords:{x:30,y:55},desc:`Penyedia nasi box higienis dan katering harian terpercaya dengan cita rasa masakan rumah autentik & bernutrisi.`,image:`https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3`,minPrice:22e3,packages:[{id:`budi-a`,name:`Paket Nasi Box Ekonomis`,price:22e3,minOrder:20,image:`https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=600&auto=format&fit=crop&q=60`,menu:[`Nasi Kuning Wangi`,`Ayam Goreng Serundeng`,`Sambal Goreng Kentang Ati Ampela`,`Telur Balado Pedas`,`Lalap Timun Segar`,`Sambal Korek Korek`],desc:`Nasi box kuning tumpeng mini praktis untuk acara syukuran kantor atau bekal rapat.`},{id:`budi-b`,name:`Paket Nasi Box Tumpeng Mini Premium`,price:35e3,minOrder:15,image:`https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&auto=format&fit=crop&q=60`,menu:[`Nasi Timbel Wangi Daun Pisang`,`Ayam Bakar Madu Lunak`,`Empal Gepuk Sapi Gurih`,`Tahu & Tempe Goreng Bandung`,`Sayur Asem Segar (Cup Terpisah)`,`Lalapan Daun Kemangi & Labu Siam`,`Sambal Terasi Dadak Ulek`],desc:`Nasi timbel komplit dengan lauk empal sapi dan ayam bakar madu dibalut daun pisang yang harum.`},{id:`budi-c`,name:`Langganan Harian Family (3 Porsi)`,price:65e3,minOrder:1,image:`https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&auto=format&fit=crop&q=60`,menu:[`Lauk Utama Berganti Setiap Hari (Ayam/Daging/Ikan)`,`Lauk Pendamping (Tahu/Tempe/Sayur Tumis/Sayur Kuah)`,`Sambal & Kerupuk Kaleng`,`Porsi pas untuk makan malam keluarga beranggotakan 3 orang.`],desc:`Langganan katering harian keluarga. Menu bervariasi setiap hari agar tidak bosan, diantar hangat sebelum jam makan malam.`}]},{id:`cinta`,name:`Cinta Catering`,categories:[`pernikahan`,`prasmanan`,`harian`],rating:4.9,reviews:320,distance:3.1,address:`Jl. Boulevard Raya Blok DG-12, Kelapa Gading`,coords:{x:62,y:28},desc:`Catering premium spesialis pesta pernikahan romantis dan gathering perusahaan eksklusif dengan tim plating profesional.`,image:`https://images.unsplash.com/photo-1478147427282-58a87a120781?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3`,minPrice:115e3,packages:[{id:`cinta-a`,name:`Wedding Gold Package`,price:115e3,minOrder:300,image:`https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&auto=format&fit=crop&q=60`,menu:[`Nasi Putih Jasmine`,`Sup Ayam Jamur Tiram`,`Daging Lada Hitam Paprika`,`Ayam Rica-Rica Kemangi`,`Gurame Asam Manis Nanas`,`Cah Jagung Muda Brokoli`,`Es Krim Cup Strawberry/Cokelat`,`Aneka Mini Pastry & Roll Cake`,`Soft Drink / Orange Juice`,`Air Mineral Gelas`],desc:`Pilihan paket pernikahan terpopuler dengan kombinasi menu oriental-nusantara yang lezat dan berkelas.`},{id:`cinta-b`,name:`Wedding Platinum Royal Package`,price:16e4,minOrder:400,image:`https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&auto=format&fit=crop&q=60`,menu:[`Nasi Putih & Nasi Kebuli Kambing`,`Sup Kimlo Jamur Kuping Spesial`,`Roast Beef Blackpepper Sauce (Stall)`,`Dimsum Ayam Kukus Hangat (Stall)`,`Kambing Guling Utuh Oven (Stall)`,`Sate Padang Daging Sapi (Stall)`,`Es Doger Kelapa Muda & Alpukat`,`Aneka Pudding Susu Flas Varian Rasa`,`Air Mineral Botol Mini`],desc:`Paket pernikahan katering termewah kami dengan 4 gubukan stall makanan premium yang siap memanjakan lidah para tamu agung.`}]},{id:`sunda`,name:`Dapur Sunda Catering`,categories:[`nasibox`,`prasmanan`],rating:4.5,reviews:58,distance:4.2,address:`Jl. Riau No. 45, Bandung (Cabang Jakarta)`,coords:{x:22,y:35},desc:`Sajian hidangan khas Sunda autentik dengan lalapan melimpah, nasi liwet wangi daun jeruk, dan sambal ulek dadakan super pedas.`,image:`https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3`,minPrice:25e3,packages:[{id:`sunda-a`,name:`Nasi Liwet Sunda Box`,price:25e3,minOrder:25,image:`https://images.unsplash.com/photo-1616030846238-c8a32d72b08a?w=600&auto=format&fit=crop&q=60`,menu:[`Nasi Liwet Gurih Peda Merah`,`Ayam Goreng Basah Lengkuas`,`Pencok Kacang Panjang Sunda`,`Tahu & Tempe Goreng Garing`,`Sambal Goang Pedas Gila`,`Lalap Daun Pohpohan & Terong Gelatik`,`Kerupuk Putih Aci`],desc:`Nasi kotak khas Sunda dengan nasi liwet gurih yang kaya rempah, pas untuk santap siang rapat bernuansa lokal.`}]},{id:`fit`,name:`Fit & Fresh Clean Catering`,categories:[`harian`,`perusahaan`],rating:4.7,reviews:112,distance:5,address:`Kawasan Bisnis Sudirman Kav. 21, Jakarta Selatan`,coords:{x:78,y:68},desc:`Katering sehat bersertifikat, dipantau oleh nutrisionis profesional untuk menjaga asupan kalori harian Anda agar tetap seimbang.`,image:`https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3`,minPrice:7e4,packages:[{id:`fit-a`,name:`Paket Diet Sehat Weight Loss (5 Hari)`,price:35e4,minOrder:1,image:`https://images.unsplash.com/photo-1543339308-43e59d6b73a6?w=600&auto=format&fit=crop&q=60`,menu:[`Menu Makan Siang & Malam Sehat Rendah Kalori`,`Daging Dada Ayam Panggang Rosemary / Ikan Salmon Panggang`,`Karbohidrat Kompleks (Nasi Merah/Hitam/Ubi Ungu)`,`Sayur Rebus Organik / Salad dressing Minyak Zaitun`,`Buah Segar Pendamping`,`Bebas MSG, Rendah Natrium, Rendah Minyak Jenuh`],desc:`Program katering sehat selama 5 hari (Senin-Jumat) untuk membantu penurunan berat badan secara berkala tanpa menyiksa.`}]}],n=[...t],r=[{email:`user@cateringku.com`,password:`user123`,name:`Budi Handoko`,phone:`08123456789`,address:`Jl. Jenderal Sudirman No. 45, Semanggi, Jakarta Selatan`,role:`user`},{email:`admin@cateringku.com`,password:`admin123`,name:`Admin Cateringku`,phone:`08999999999`,address:`Kantor Pusat Cateringku, Jakarta`,role:`admin`}],i=[{id:`p1`,title:`Diskon Pernikahan 15%`,desc:`Gunakan kode NIKAHYUK untuk potongan s.d Rp 2 Juta`,code:`NIKAHYUK`,color:`from-amber-600 to-amber-800`},{id:`p2`,title:`Gratis Ongkir Event Perusahaan`,desc:`Bebas ongkos kirim seluruh area Jabodetabek min. 100 pax`,code:`FREEONGKIR`,color:`from-primary-dark to-primary-light`},{id:`p3`,title:`Hemat Harian s.d Rp 100rb`,desc:`Berlangganan katering harian hemat khusus bulan ini`,code:`HEMATHARIAN`,color:`from-orange-600 to-red-800`}],a={currentView:`home`,selectedCategory:`pernikahan`,selectedProviderId:`raja`,selectedPackage:null,cart:[],orders:[{id:`ORD-98218-XYZ`,date:`19 Mei 2026`,providerName:`Raja Catering`,packageName:`Paket Prasmanan A (Hemat)`,quantity:120,totalPrice:5555e3,status:`Sudah Sampai Tujuan`,statusHistory:{"Menunggu Pembayaran":`10:00 WIB`,"Pembayaran Terkonfirmasi":`10:05 WIB`,"Menyiapkan Bahan":`10:10 WIB`,"Mulai Memasak":`10:30 WIB`,"Mulai Mengemas":`11:15 WIB`,"Sedang Diantar":`11:30 WIB`,"Sudah Sampai Tujuan":`12:05 WIB`},address:`Gedung Serbaguna RW 04, Menteng, Jakarta Pusat`}],userAddress:`Jl. Jenderal Sudirman No. 45, Semanggi, Jakarta Selatan`,activeMapMarkerId:null,activePaymentOrderId:null,activeTrackingOrderId:null,users:[...r],currentUser:null,providers:[...t]};function o(){let e=new Date;return`${String(e.getHours()).padStart(2,`0`)}:${String(e.getMinutes()).padStart(2,`0`)} WIB`}function s(){a.providers=n,localStorage.setItem(`cateringku_state`,JSON.stringify(a))}function c(){let e=localStorage.getItem(`cateringku_state`);if(e)try{let t=JSON.parse(e);a={...a,...t},a.providers&&(n=a.providers),a.currentUser&&a.currentUser.address&&(a.userAddress=a.currentUser.address)}catch(e){console.error(`Failed to parse saved state`,e)}}var l={};function u(e,t,n){let r=document.getElementById(`toast-container`);r||(r=document.createElement(`div`),r.id=`toast-container`,r.className=`fixed top-20 right-4 z-50 flex flex-col gap-2.5 w-80 pointer-events-none`,document.body.appendChild(r));let i=document.createElement(`div`);i.className=`bg-white rounded-2xl shadow-xl border-l-4 border-primary p-4 pointer-events-auto flex items-start gap-3 animate-fade-in translate-x-12 opacity-0 transition-all duration-300`;let a=`ph-fill ph-bell`,o=``,s=`text-primary`;switch(n){case`Pembayaran Terkonfirmasi`:a=`ph-fill ph-check-circle`,s=`text-emerald-500`,o=`Pembayaran terkonfirmasi! Pesanan akan segera diproses.`;break;case`Menyiapkan Bahan`:a=`ph-fill ph-leaf`,s=`text-lime-600`,o=`Mitra katering sedang menyiapkan bahan-bahan segar.`;break;case`Mulai Memasak`:a=`ph-fill ph-fire`,s=`text-orange-500`,o=`Dapur katering mulai memasak hidangan Anda!`;break;case`Mulai Mengemas`:a=`ph-fill ph-package`,s=`text-amber-600`,o=`Makanan sedang dikemas dengan rapi & higienis.`;break;case`Sedang Diantar`:a=`ph-fill ph-moped`,s=`text-blue-500`,o=`Kurir sedang mengantarkan pesanan ke lokasi Anda.`;break;case`Sudah Sampai Tujuan`:a=`ph-fill ph-house-line`,s=`text-emerald-600`,o=`Hore! Pesanan Anda sudah sampai di tujuan.`;break}i.innerHTML=`
    <div class="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 text-lg ${s}">
      <i class="${a}"></i>
    </div>
    <div class="flex-1 min-w-0">
      <h4 class="text-xs font-bold text-slate-900">${t}</h4>
      <p class="text-[10px] text-slate-500 mt-0.5">${o}</p>
      <span class="text-[9px] text-slate-400 mt-1 block font-mono">${e}</span>
    </div>
    <button class="text-slate-400 hover:text-slate-600 text-xs self-start" onclick="this.parentElement.remove()">
      <i class="ph ph-x"></i>
    </button>
  `,r.appendChild(i),setTimeout(()=>{i.classList.remove(`translate-x-12`,`opacity-0`)},10),setTimeout(()=>{i.classList.add(`translate-x-12`,`opacity-0`),setTimeout(()=>i.remove(),300)},5e3)}function d(e){if(l[e])return;let t=[`Menunggu Pembayaran`,`Pembayaran Terkonfirmasi`,`Menyiapkan Bahan`,`Mulai Memasak`,`Mulai Mengemas`,`Sedang Diantar`,`Sudah Sampai Tujuan`],n=setInterval(()=>{let r=a.orders.find(t=>t.id===e);if(!r){clearInterval(n),delete l[e];return}if(l[e]?.paused)return;let i=t.indexOf(r.status);if(i===-1||i===t.length-1){clearInterval(n),delete l[e];return}let c=t[i+1];r.status=c,r.statusHistory||={},r.statusHistory[c]=o(),u(r.id,r.providerName,c),s(),h()},8e3);l[e]={intervalId:n,paused:!1}}function f(){a.orders.forEach(e=>{e.status!==`Menunggu Pembayaran`&&e.status!==`Sudah Sampai Tujuan`&&d(e.id)})}c(),f();var p=document.querySelector(`#app`);function m(e,t={}){a.currentView=e,t.category&&(a.selectedCategory=t.category),t.providerId&&(a.selectedProviderId=t.providerId),t.package&&(a.selectedPackage=t.package),e!==`providers`&&window.scrollTo({top:0,behavior:`smooth`}),h()}window.navigateTo=m;function h(){let e=``;switch(a.currentView){case`home`:e=_();break;case`providers`:e=v();break;case`packages`:e=y();break;case`checkout`:e=b();break;case`orders`:e=S();break;case`chat`:e=C();break;case`login`:e=E();break;case`register`:e=D();break;case`account`:e=O();break;case`admin`:e=k();break;default:e=_()}let t=a.currentView===`admin`;p.innerHTML=`
    <!-- Top Address/Navigation Bar -->
    ${g()}
    
    <!-- Main Content Area -->
    <main class="${t?`min-h-screen`:`pb-24 pt-16 min-h-screen`}">
      ${e}
    </main>
    
    <!-- Active Drawer / Modal Overlay -->
    ${I()}
    
    <!-- Bottom Mobile Navigation Bar -->
    ${F()}
  `}function g(){return a.currentView===`admin`?``:a.currentView===`providers`?`
      <header class="fixed top-0 left-0 right-0 z-40 bg-white shadow-sm border-b border-slate-100 h-16 flex items-center px-4 justify-between">
        <button onclick="window.goBackToHome()" class="w-10 h-10 rounded-full flex items-center justify-center text-slate-800 hover:bg-slate-100 transition-colors">
          <i class="ph ph-arrow-left text-2xl font-bold"></i>
        </button>
        <div class="flex-1 px-3 text-center">
          <h1 class="text-sm font-semibold text-slate-900">${e[a.selectedCategory].name}</h1>
          <p class="text-[10px] text-slate-500 truncate max-w-[200px] mx-auto"><i class="ph ph-map-pin text-primary inline"></i> ${a.userAddress}</p>
        </div>
        <button onclick="window.openAddressModal()" class="w-10 h-10 rounded-full flex items-center justify-center text-primary hover:bg-slate-100 transition-colors">
          <i class="ph ph-pencil-simple-line text-xl"></i>
        </button>
      </header>
    `:a.currentView===`packages`?`
      <header class="fixed top-0 left-0 right-0 z-40 bg-white shadow-sm border-b border-slate-100 h-16 flex items-center px-4 justify-between">
        <button onclick="window.goBackToProviders()" class="w-10 h-10 rounded-full flex items-center justify-center text-slate-800 hover:bg-slate-100 transition-colors">
          <i class="ph ph-arrow-left text-2xl font-bold"></i>
        </button>
        <div class="flex-1 px-3 text-center">
          <h1 class="text-base font-bold text-slate-950 truncate max-w-[220px] mx-auto">${n.find(e=>e.id===a.selectedProviderId).name}</h1>
        </div>
        <div class="w-10 h-10 flex items-center justify-center">
          <i class="ph ph-storefront text-2xl text-primary"></i>
        </div>
      </header>
    `:`
    <header class="fixed top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-100 h-16 flex items-center justify-between px-6 shadow-sm">
      <div class="flex items-center gap-2">
        <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-primary to-primary-light flex items-center justify-center text-white shadow-lg shadow-primary/20">
          <i class="ph-fill ph-fork-knife text-xl"></i>
        </div>
        <span class="text-xl font-bold text-slate-900 tracking-tight font-serif">Catering<span class="text-primary">ku</span></span>
      </div>
      <button onclick="window.openAddressModal()" class="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 transition-all max-w-[200px] md:max-w-xs cursor-pointer">
        <i class="ph-fill ph-map-pin text-primary text-sm flex-shrink-0"></i>
        <span class="text-xs font-semibold truncate flex-1 text-left">${a.userAddress}</span>
        <i class="ph ph-caret-down text-slate-500 text-[10px] flex-shrink-0"></i>
      </button>
    </header>
  `}function _(){let t=``;Object.values(e).forEach(e=>{t+=`
      <div onclick="window.selectCategory('${e.id}')" class="flex flex-col items-center group cursor-pointer">
        <div class="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center mb-2.5 hover-lift transition-all group-hover:border-primary/20">
          <div class="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-slate-50 text-slate-700 group-hover:bg-primary/5 group-hover:text-primary transition-colors flex items-center justify-center">
            <i class="${e.icon} text-2xl md:text-3xl"></i>
          </div>
        </div>
        <span class="text-xs font-bold text-slate-800 text-center group-hover:text-primary transition-colors leading-tight">${e.name.replace(`Catering `,``)}</span>
      </div>
    `});let r=``;i.forEach(e=>{r+=`
      <div class="flex-shrink-0 w-80 md:w-96 rounded-2xl bg-gradient-to-r ${e.color} text-white p-5 shadow-lg relative overflow-hidden mr-4">
        <div class="absolute -right-4 -bottom-4 w-28 h-28 bg-white/10 rounded-full blur-xl"></div>
        <div class="absolute -left-6 -top-6 w-24 h-24 bg-white/5 rounded-full blur-lg"></div>
        
        <div class="relative z-10 flex flex-col justify-between h-full">
          <div>
            <span class="bg-white/20 text-white font-extrabold text-[10px] px-2 py-0.5 rounded-full tracking-wider uppercase">PROMO TERBATAS</span>
            <h3 class="text-lg font-bold mt-2 font-serif">${e.title}</h3>
            <p class="text-xs text-white/90 mt-1 leading-normal font-light">${e.desc}</p>
          </div>
          <div class="flex items-center justify-between mt-4 pt-3 border-t border-white/10">
            <div class="text-[10px] font-mono tracking-widest bg-white/20 px-2.5 py-1 rounded">KODE: ${e.code}</div>
            <button onclick="window.claimPromo('${e.code}')" class="bg-white text-primary text-xs font-bold px-4 py-1.5 rounded-full hover:bg-slate-100 transition-colors shadow-md">Salin Kode</button>
          </div>
        </div>
      </div>
    `});let a=``;return n.slice(0,3).forEach(t=>{a+=`
      <div onclick="window.selectProvider('${t.id}')" class="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden hover-lift flex flex-col md:flex-row cursor-pointer transition-all">
        <div class="relative h-44 md:h-auto md:w-44 flex-shrink-0 overflow-hidden">
          <img src="${t.image}" alt="${t.name}" class="w-full h-full object-cover" />
          <div class="absolute top-3 left-3 bg-white/95 backdrop-blur px-2.5 py-0.5 rounded-full text-[10px] font-bold text-slate-800 shadow-sm">
            <i class="ph ph-map-pin text-primary inline"></i> ${t.distance} km
          </div>
        </div>
        <div class="p-5 flex-1 flex flex-col justify-between">
          <div>
            <div class="flex justify-between items-start gap-2">
              <h3 class="text-base font-bold text-slate-900 leading-tight">${t.name}</h3>
              <div class="flex items-center gap-1 bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded text-xs font-bold">
                <i class="ph-fill ph-star text-amber-500"></i> ${t.rating}
              </div>
            </div>
            <p class="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">${t.desc}</p>
            
            <div class="flex flex-wrap gap-1 mt-3">
              ${t.categories.map(t=>`
                <span class="text-[9px] font-semibold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full uppercase tracking-wider">${e[t].name.replace(`Catering `,``)}</span>
              `).join(``)}
            </div>
          </div>
          
          <div class="flex justify-between items-center mt-4 pt-3 border-t border-slate-50">
            <div>
              <span class="text-[10px] text-slate-500">Harga Mulai</span>
              <div class="text-sm font-extrabold text-primary">Rp ${t.minPrice.toLocaleString(`id-ID`)} <span class="text-[10px] text-slate-500 font-normal">/ porsi</span></div>
            </div>
            <span class="text-xs text-primary font-bold flex items-center gap-0.5 group-hover:translate-x-1 transition-transform">
              Lihat Menu <i class="ph ph-arrow-right font-bold"></i>
            </span>
          </div>
        </div>
      </div>
    `}),`
    <div class="max-w-4xl mx-auto px-4 py-4">
      <section class="bg-gradient-to-br from-primary to-primary-light rounded-3xl text-white p-6 md:p-8 relative overflow-hidden shadow-xl mb-8">
        <div class="absolute -right-16 -top-16 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>
        <div class="absolute -left-12 -bottom-12 w-48 h-48 bg-black/10 rounded-full blur-2xl"></div>
        
        <div class="relative z-10 max-w-lg">
          <span class="text-xs font-semibold uppercase tracking-widest text-accent font-medium mb-2 block">CATERING MARKETPLACE INDONESIA</span>
          <h1 class="text-3xl md:text-4xl font-extrabold leading-[1.1] mb-3 font-serif">Katering Lezat, <br/>Instan Tanpa Ribet</h1>
          <p class="text-sm text-white/95 leading-relaxed font-light mb-6">Pesan dari berbagai penyedia katering terdekat untuk acara Anda, dari prasmanan besar hingga makan siang harian kantor.</p>
          
          <div onclick="window.selectCategory('prasmanan')" class="flex items-center bg-white text-slate-500 rounded-2xl p-1 shadow-md cursor-pointer border border-white/20 hover:scale-[1.01] transition-transform">
            <div class="flex items-center gap-2 pl-3 flex-1 min-w-0">
              <i class="ph ph-magnifying-glass text-slate-400 text-lg"></i>
              <span class="text-xs md:text-sm text-slate-400 truncate">Cari catering prasmanan, nasi box, pernikahan...</span>
            </div>
            <button class="bg-primary text-white text-xs font-bold px-4 py-2.5 rounded-xl">Cari</button>
          </div>
        </div>
      </section>

      <section class="mb-8">
        <h2 class="text-lg font-extrabold text-slate-900 mb-4 font-serif">Kategori Layanan</h2>
        <div class="grid grid-cols-5 gap-2 md:gap-4 bg-white p-4 md:p-6 rounded-2xl border border-slate-100 shadow-sm">
          ${t}
        </div>
      </section>

      <section class="mb-8 overflow-hidden">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-lg font-extrabold text-slate-900 font-serif">Promo Spesial</h2>
          <span class="text-xs text-primary font-semibold">Lihat Semua</span>
        </div>
        <div class="flex overflow-x-auto pb-4 scrollbar-none snap-x snap-mandatory">
          ${r}
        </div>
      </section>

      <section class="mb-6">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-lg font-extrabold text-slate-900 font-serif">Katering Terdekat Rekomendasi</h2>
          <span onclick="window.selectCategory('prasmanan')" class="text-xs text-primary font-semibold cursor-pointer">Lihat Semua</span>
        </div>
        <div class="grid grid-cols-1 gap-4">
          ${a}
        </div>
      </section>
    </div>
  `}function v(){let e=n.filter(e=>e.categories.includes(a.selectedCategory)),t=``;e.length===0?t=`
      <div class="text-center py-10 px-4">
        <i class="ph ph-warning-circle text-4xl text-slate-400 mb-2"></i>
        <h4 class="text-sm font-bold text-slate-700">Tidak ada katering ditemukan</h4>
        <p class="text-xs text-slate-500 mt-1">Saat ini belum ada mitra kami di kategori ini di dekat area Anda.</p>
      </div>
    `:e.forEach(e=>{let n=a.activeMapMarkerId===e.id;t+=`
        <div onclick="window.selectProviderFromList('${e.id}')" 
             id="provider-card-${e.id}"
             class="flex-shrink-0 w-80 md:w-96 bg-white border ${n?`border-primary shadow-md ring-2 ring-primary/10`:`border-slate-100 shadow-sm`} rounded-2xl p-4 cursor-pointer hover:shadow transition-all duration-300">
          <div class="flex gap-3">
            <img src="${e.image}" alt="${e.name}" class="w-16 h-16 rounded-xl object-cover flex-shrink-0" />
            <div class="flex-1 min-w-0">
              <div class="flex justify-between items-start gap-1">
                <h3 class="text-sm font-bold text-slate-900 truncate leading-tight">${e.name}</h3>
                <div class="flex items-center gap-0.5 bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded text-[10px] font-bold flex-shrink-0">
                  <i class="ph-fill ph-star text-amber-500 text-[10px]"></i> ${e.rating}
                </div>
              </div>
              <p class="text-xs text-slate-500 mt-1 line-clamp-1 leading-normal">${e.address}</p>
              
              <div class="flex items-center gap-3 mt-2 text-[10px] text-slate-500 font-medium">
                <span><i class="ph ph-map-pin text-primary inline"></i> ${e.distance} km</span>
                <span>•</span>
                <span>Min. order Rp ${(e.packages[0]?.price*e.packages[0]?.minOrder).toLocaleString(`id-ID`)}</span>
              </div>
            </div>
          </div>
          
          <div class="flex justify-between items-center mt-3 pt-3 border-t border-slate-50">
            <span class="text-[10px] text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded flex items-center gap-0.5">
              <i class="ph ph-clock-countdown"></i> Buka • Siap Diantar
            </span>
            <button onclick="event.stopPropagation(); window.selectProvider('${e.id}')" class="bg-primary hover:bg-primary-light text-white text-[11px] font-bold px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1 shadow shadow-primary/10">
              Pilih Catering <i class="ph ph-caret-right font-bold text-[10px]"></i>
            </button>
          </div>
        </div>
      `});let r=``;return e.forEach(e=>{let t=a.activeMapMarkerId===e.id;r+=`
      <g class="cursor-pointer" onclick="event.stopPropagation(); window.selectProviderFromMap('${e.id}')">
        ${t?`
          <circle cx="${e.coords.x}%" cy="${e.coords.y}%" r="18" fill="none" stroke="#7A0C16" stroke-width="2" class="radar-pulse" opacity="0.6" />
          <circle cx="${e.coords.x}%" cy="${e.coords.y}%" r="28" fill="none" stroke="#7A0C16" stroke-width="1" opacity="0.3" class="radar-pulse" />
        `:``}
        
        <ellipse cx="${e.coords.x}%" cy="${e.coords.y+2}%" rx="8" ry="3" fill="#000000" opacity="0.2" />
        
        <path d="M ${e.coords.x}%,${e.coords.y}% 
                 C ${e.coords.x-2}%,${e.coords.y-4}% ${e.coords.x-4}%,${e.coords.y-6}% ${e.coords.x-4}%,${e.coords.y-10}% 
                 A 4 4 0 0 1 ${e.coords.x+4}%,${e.coords.y-10}% 
                 C ${e.coords.x+4}%,${e.coords.y-6}% ${e.coords.x+2}%,${e.coords.y-4}% ${e.coords.x}%,${e.coords.y}% Z" 
              fill="${t?`#7A0C16`:`#9E1B24`}" 
              stroke="#FFFFFF" 
              stroke-width="1" />
              
        <circle cx="${e.coords.x}%" cy="${e.coords.y-10}%" r="2.5" fill="${t?`#E5A93B`:`#FFFFFF`}" />
        
        <g transform="translate(0, -22)">
          <rect x="${e.coords.x-14}%" y="${e.coords.y-4}%" width="60" height="14" rx="4" fill="${t?`#7A0C16`:`#FFFFFF`}" stroke="${t?`#E5A93B`:`#E2E8F0`}" stroke-width="1" />
          <text x="${e.coords.x}%" y="${e.coords.y+.5}%" dominant-baseline="middle" text-anchor="middle" font-family="Outfit" font-size="7" font-weight="bold" fill="${t?`#FFFFFF`:`#334155`}">
            ${e.name}
          </text>
        </g>
      </g>
    `}),`
    <div class="fixed inset-0 top-16 bottom-0 z-0 bg-slate-100 overflow-hidden flex flex-col justify-between">
      <svg id="svg-map" class="w-full h-full cursor-grab active:cursor-grabbing select-none" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        <path d="M 0,100 C 100,120 200,80 300,140 T 400,160 L 400,190 C 300,170 200,110 100,150 T 0,130 Z" fill="#E0F2FE" />
        
        <path d="M 50,50 C 80,40 120,60 110,90 S 60,110 50,80 Z" fill="#DCFCE7" />
        <path d="M 320,240 C 350,220 380,240 370,270 S 330,290 320,260 Z" fill="#DCFCE7" />
        <rect x="250" y="50" width="80" height="60" rx="15" fill="#DCFCE7" opacity="0.8" />
        
        <path d="M 0,200 L 400,200" stroke="#F1F5F9" stroke-width="24" stroke-linecap="round" />
        <path d="M 0,200 L 400,200" stroke="#FFFFFF" stroke-width="18" stroke-linecap="round" />
        <path d="M 0,200 L 400,200" stroke="#E2E8F0" stroke-width="1" stroke-dasharray="6,4" stroke-linecap="round" />
        
        <path d="M 200,0 L 200,400" stroke="#F1F5F9" stroke-width="20" stroke-linecap="round" />
        <path d="M 200,0 L 200,400" stroke="#FFFFFF" stroke-width="14" stroke-linecap="round" />
        <path d="M 200,0 L 200,400" stroke="#E2E8F0" stroke-width="1" stroke-dasharray="6,4" stroke-linecap="round" />
        
        <path d="M 50,0 L 50,400" stroke="#FFFFFF" stroke-width="8" />
        <path d="M 350,0 L 350,400" stroke="#FFFFFF" stroke-width="8" />
        <path d="M 0,80 L 400,80" stroke="#FFFFFF" stroke-width="8" />
        <path d="M 0,320 L 400,320" stroke="#FFFFFF" stroke-width="8" />
        
        <path d="M 0,0 L 400,400" stroke="#FFFFFF" stroke-width="4" opacity="0.6" />
        
        <g>
          <circle cx="50%" cy="50%" r="20" fill="#3B82F6" opacity="0.15">
            <animate attributeName="r" values="8;20;8" dur="3s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0.3;0;0.3" dur="3s" repeatCount="indefinite"/>
          </circle>
          <circle cx="50%" cy="50%" r="8" fill="none" stroke="#FFFFFF" stroke-width="2" />
          <circle cx="50%" cy="50%" r="5" fill="#3B82F6" />
        </g>
        
        ${r}
      </svg>
      
      <div class="absolute top-4 left-4 right-4 z-20 flex justify-between pointer-events-none">
        <div class="bg-white/95 backdrop-blur px-3 py-2 rounded-2xl shadow-md border border-slate-100 flex items-center gap-2 pointer-events-auto">
          <div class="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
          <span class="text-xs font-bold text-slate-800">${e.length} Catering Terdekat</span>
        </div>
        
        <button onclick="window.locateUser()" class="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-slate-700 hover:bg-slate-50 transition-colors pointer-events-auto border border-slate-100">
          <i class="ph ph-navigation-arrow-fill text-lg text-primary"></i>
        </button>
      </div>
      
      <div class="absolute bottom-6 left-0 right-0 z-20 px-4 pointer-events-none">
        <div class="max-w-4xl mx-auto w-full flex flex-col gap-2 pointer-events-auto">
          <div class="w-12 h-1.5 bg-slate-300 rounded-full mx-auto shadow-sm mb-1"></div>
          <div id="drawer-cards-container" class="flex gap-4 overflow-x-auto pb-4 scrollbar-none snap-x snap-mandatory pt-1 px-1">
            ${t}
          </div>
        </div>
      </div>
    </div>
  `}function y(){let e=n.find(e=>e.id===a.selectedProviderId);if(!e)return`<p class="text-center py-20">Penyedia catering tidak ditemukan.</p>`;let t=``;return e.packages.forEach(n=>{t+=`
      <div class="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden hover-lift flex flex-col justify-between">
        <div>
          <div class="relative h-44 overflow-hidden bg-slate-100">
            <img src="${n.image}" alt="${n.name}" class="w-full h-full object-cover" />
            <div class="absolute top-3 right-3 bg-white/95 backdrop-blur px-2.5 py-0.5 rounded-full text-[10px] font-bold text-primary shadow-sm border border-slate-100">
              Min. Order ${n.minOrder} Pax
            </div>
          </div>
          
          <div class="p-5">
            <h3 class="text-base font-bold text-slate-900 leading-tight mb-2">${n.name}</h3>
            <p class="text-xs text-slate-500 mb-4 line-clamp-2 leading-relaxed">${n.desc}</p>
            
            <div class="space-y-1.5 mb-4">
              <span class="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Preview Menu:</span>
              <ul class="space-y-1">
                ${n.menu.slice(0,4).map(e=>`
                  <li class="text-xs text-slate-700 flex items-center gap-1.5">
                    <i class="ph ph-check-circle text-emerald-500 flex-shrink-0 text-sm"></i>
                    <span class="truncate">${e}</span>
                  </li>
                `).join(``)}
                ${n.menu.length>4?`
                  <li class="text-[10px] text-primary font-bold pl-5">+ ${n.menu.length-4} Menu Lainnya</li>
                `:``}
              </ul>
            </div>
          </div>
        </div>
        
        <div class="p-5 pt-0 border-t border-slate-50 mt-auto">
          <div class="flex justify-between items-center py-4">
            <div>
              <span class="text-[10px] text-slate-400">Harga / Pax</span>
              <div class="text-lg font-black text-primary">Rp ${n.price.toLocaleString(`id-ID`)}</div>
            </div>
            <div class="text-right">
              <span class="text-[10px] text-slate-400">Estimasi Total</span>
              <div class="text-xs font-bold text-slate-800">Rp ${(n.price*n.minOrder).toLocaleString(`id-ID`)}</div>
            </div>
          </div>
          
          <div class="grid grid-cols-2 gap-2">
            <button onclick="window.openPackageDetail('${e.id}', '${n.id}')" class="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs py-3 px-4 rounded-xl transition-colors">
              Detail Menu
            </button>
            <button onclick="window.addToCartAndCheckout('${e.id}', '${n.id}')" class="bg-primary hover:bg-primary-light text-white font-bold text-xs py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-1 shadow shadow-primary/20">
              Pesan Sekarang
            </button>
          </div>
        </div>
      </div>
    `}),`
    <div class="max-w-4xl mx-auto px-4 py-4">
      <section class="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden mb-8">
        <div class="h-48 md:h-64 relative bg-slate-800">
          <img src="${e.image}" alt="${e.name}" class="w-full h-full object-cover opacity-80" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>
          
          <div class="absolute bottom-6 left-6 right-6 text-white">
            <span class="bg-primary/95 text-white font-extrabold text-[9px] px-2.5 py-1 rounded-full uppercase tracking-wider mb-2.5 inline-block">MITRA UTAMA</span>
            <h2 class="text-2xl md:text-3xl font-extrabold font-serif mb-1.5 leading-none">${e.name}</h2>
            <p class="text-xs text-white/80 line-clamp-1 leading-relaxed"><i class="ph ph-map-pin inline"></i> ${e.address}</p>
          </div>
        </div>
        
        <div class="p-5 md:p-6 grid grid-cols-3 gap-4 text-center border-t border-slate-100 bg-slate-50/50">
          <div class="border-r border-slate-100">
            <span class="text-[10px] text-slate-400 block mb-0.5">Penilaian</span>
            <div class="text-sm font-extrabold text-slate-900 flex items-center justify-center gap-1">
              <i class="ph-fill ph-star text-amber-500"></i> ${e.rating} <span class="text-[10px] text-slate-400 font-normal">(${e.reviews})</span>
            </div>
          </div>
          <div class="border-r border-slate-100">
            <span class="text-[10px] text-slate-400 block mb-0.5">Jarak Lokasi</span>
            <div class="text-sm font-extrabold text-slate-900"><i class="ph ph-motorcycle text-slate-400"></i> ${e.distance} km</div>
          </div>
          <div>
            <span class="text-[10px] text-slate-400 block mb-0.5">Estimasi Antar</span>
            <div class="text-sm font-extrabold text-emerald-600">60 - 90 Menit</div>
          </div>
        </div>
        
        <div class="p-5 border-t border-slate-100">
          <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Deskripsi Penyedia</h4>
          <p class="text-xs text-slate-600 leading-relaxed">${e.desc}</p>
        </div>
      </section>

      <section class="mb-6">
        <div class="flex justify-between items-center mb-4">
          <div>
            <h2 class="text-lg font-extrabold text-slate-900 font-serif">Menu Paket yang Tersedia</h2>
            <p class="text-xs text-slate-500">Pilihlah salah satu paket hidangan katering di bawah ini</p>
          </div>
          <span class="text-xs text-slate-400">${e.packages.length} Paket Menu</span>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          ${t}
        </div>
      </section>
    </div>
  `}function b(){if(a.cart.length===0)return`
      <div class="max-w-md mx-auto text-center py-20 px-6">
        <i class="ph ph-shopping-cart text-6xl text-slate-300 mb-4"></i>
        <h3 class="text-lg font-bold text-slate-800">Keranjang Belanja Kosong</h3>
        <p class="text-xs text-slate-500 mt-2 mb-6">Silakan pilih menu paket katering yang Anda inginkan terlebih dahulu di beranda.</p>
        <button onclick="navigateTo('home')" class="bg-primary hover:bg-primary-light text-white text-xs font-bold px-6 py-3 rounded-xl transition-colors shadow">Kembali ke Beranda</button>
      </div>
    `;let e=a.cart[0],t=e.package.price*e.quantity,r=Math.round(e.package.minOrder*1e3*.15)+15e3,i=5e3,o=t+r+i;return`
    <div class="max-w-lg mx-auto px-4 py-4">
      <h2 class="text-xl font-extrabold text-slate-900 mb-6 font-serif flex items-center gap-2">
        <i class="ph ph-shopping-bag text-primary"></i> Konfirmasi Pemesanan
      </h2>
      
      <section class="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm mb-4">
        <div class="flex justify-between items-center mb-3">
          <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Alamat Pengantaran</span>
          <button onclick="window.openAddressModal()" class="text-xs text-primary font-bold">Ubah</button>
        </div>
        <div class="flex gap-3">
          <div class="w-8 h-8 rounded-full bg-primary/5 text-primary flex items-center justify-center flex-shrink-0">
            <i class="ph-fill ph-map-pin text-base"></i>
          </div>
          <div>
            <h4 class="text-xs font-bold text-slate-900">Lokasi Utama</h4>
            <p class="text-xs text-slate-500 mt-0.5 leading-relaxed">${a.userAddress}</p>
          </div>
        </div>
      </section>

      <section class="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm mb-4">
        <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-3">Rincian Paket</span>
        
        <div class="flex gap-3 pb-4 border-b border-slate-100">
          <img src="${e.package.image}" alt="${e.package.name}" class="w-14 h-14 rounded-xl object-cover flex-shrink-0" />
          <div class="flex-1 min-w-0">
            <h4 class="text-xs font-bold text-slate-900 truncate leading-tight">${e.package.name}</h4>
            <p class="text-[10px] text-slate-400 mt-1">${n.find(t=>t.id===e.providerId).name}</p>
            <div class="text-xs font-extrabold text-primary mt-1.5">Rp ${e.package.price.toLocaleString(`id-ID`)} <span class="text-[10px] text-slate-400 font-normal">/ pax</span></div>
          </div>
        </div>
        
        <div class="flex justify-between items-center py-4 border-b border-slate-100">
          <span class="text-xs text-slate-600 font-medium">Jumlah Pesanan (Pax)</span>
          <div class="flex items-center gap-3">
            <button onclick="window.updateQuantity(${e.quantity-5})" class="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center font-bold text-lg cursor-pointer">-</button>
            <span class="text-sm font-bold text-slate-800 w-10 text-center">${e.quantity}</span>
            <button onclick="window.updateQuantity(parseInt(${e.quantity}) + 5)" class="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center font-bold text-lg cursor-pointer">+</button>
          </div>
        </div>
        
        <div class="pt-4">
          <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">Catatan Pesanan (Opsional)</label>
          <input type="text" 
                 id="checkout-notes"
                 value="${e.notes||``}" 
                 onchange="window.updateNotes(this.value)"
                 placeholder="Contoh: Kurangi kepedasan, minta lauk dipisah..." 
                 class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-primary transition-colors text-slate-700" />
        </div>
      </section>

      <section class="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm mb-4">
        <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-3">Metode Pembayaran</span>
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <i class="ph-fill ph-wallet text-xl"></i>
            </div>
            <div>
              <h4 class="text-xs font-bold text-slate-900">Metode GoPay / OVO</h4>
              <p class="text-[10px] text-slate-400">Saldo: Rp 450.000 (Hubungkan Dompet)</p>
            </div>
          </div>
          <select class="bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 text-xs text-slate-700 font-bold focus:outline-none">
            <option>GoPay / OVO</option>
            <option>Transfer Bank</option>
            <option>Bayar di Tempat (COD)</option>
          </select>
        </div>
      </section>

      <section class="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm mb-6 space-y-2.5">
        <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Rincian Pembayaran</span>
        <div class="flex justify-between text-xs text-slate-600">
          <span>Subtotal (${e.quantity} Pax)</span>
          <span>Rp ${t.toLocaleString(`id-ID`)}</span>
        </div>
        <div class="flex justify-between text-xs text-slate-600">
          <span>Biaya Pengantaran & Layanan</span>
          <span>Rp ${r.toLocaleString(`id-ID`)}</span>
        </div>
        <div class="flex justify-between text-xs text-slate-600">
          <span>Biaya Aplikasi</span>
          <span>Rp ${i.toLocaleString(`id-ID`)}</span>
        </div>
        <div class="border-t border-slate-100 pt-2.5 flex justify-between text-sm font-extrabold text-slate-950">
          <span>Total Pembayaran</span>
          <span class="text-primary text-base">Rp ${o.toLocaleString(`id-ID`)}</span>
        </div>
      </section>

      <button onclick="window.placeOrder('${o}')" class="w-full bg-primary hover:bg-primary-light text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 cursor-pointer">
        <i class="ph ph-file-text text-xl"></i> Konfirmasi & Buat Pesanan
      </button>
    </div>
  `}function x(e){let t=`bg-slate-100 text-slate-700 border-slate-200`,n=`ph-clock`,r=!1;switch(e){case`Menunggu Pembayaran`:t=`bg-amber-50 text-amber-700 border-amber-200`,n=`ph-wallet`,r=!0;break;case`Pembayaran Terkonfirmasi`:t=`bg-emerald-50 text-emerald-700 border-emerald-200`,n=`ph-check-circle`;break;case`Menyiapkan Bahan`:t=`bg-lime-50 text-lime-700 border-lime-200`,n=`ph-leaf`,r=!0;break;case`Mulai Memasak`:t=`bg-orange-50 text-orange-700 border-orange-200`,n=`ph-fire`,r=!0;break;case`Mulai Mengemas`:t=`bg-yellow-50 text-yellow-800 border-yellow-200`,n=`ph-package`,r=!0;break;case`Sedang Diantar`:t=`bg-blue-50 text-blue-700 border-blue-200`,n=`ph-moped`,r=!0;break;case`Sudah Sampai Tujuan`:t=`bg-green-100 text-green-800 border-green-300`,n=`ph-house-line`;break}return`
    <span class="px-2.5 py-0.5 rounded-full border text-[10px] font-bold flex items-center gap-1 ${t} ${r?`animate-pulse`:``}">
      <i class="ph-fill ${n}"></i> ${e}
    </span>
  `}function S(){let e=``;return a.orders.length===0?e=`
      <div class="text-center py-20 px-6">
        <i class="ph ph-receipt text-6xl text-slate-300 mb-3"></i>
        <h3 class="text-base font-bold text-slate-800">Belum Ada Riwayat Pesanan</h3>
        <p class="text-xs text-slate-500 mt-1 mb-6">Nikmati kemudahan memesan catering katering lewat Cateringku.</p>
        <button onclick="navigateTo('home')" class="bg-primary hover:bg-primary-light text-white text-xs font-bold px-6 py-3 rounded-xl transition-colors shadow">Pesan Sekarang</button>
      </div>
    `:a.orders.forEach(t=>{e+=`
        <div onclick="window.handleOrderCardClick('${t.id}')" class="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm mb-4 hover:border-slate-300 transition-all cursor-pointer relative overflow-hidden group">
          <div class="flex justify-between items-center pb-3 border-b border-slate-100 mb-3">
            <div>
              <span class="text-[10px] text-slate-400 block">ID Pesanan</span>
              <span class="text-xs font-bold text-slate-800">${t.id}</span>
            </div>
            ${x(t.status)}
          </div>
          
          <div class="flex gap-3">
            <div class="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 flex-shrink-0">
              <i class="ph-fill ph-fork-knife text-xl"></i>
            </div>
            <div class="flex-1 min-w-0">
              <span class="text-[10px] text-slate-400 font-medium block">${t.date}</span>
              <h4 class="text-sm font-bold text-slate-900 truncate mt-0.5">${t.providerName}</h4>
              <p class="text-xs text-slate-600 truncate mt-1">${t.packageName} (${t.quantity} Pax)</p>
            </div>
          </div>
          
          <div class="flex justify-between items-center mt-4 pt-4 border-t border-slate-50">
            <div>
              <span class="text-[10px] text-slate-400">Total Transaksi</span>
              <div class="text-sm font-extrabold text-primary">Rp ${t.totalPrice.toLocaleString(`id-ID`)}</div>
            </div>
            
            <div class="flex gap-2">
              ${t.status===`Menunggu Pembayaran`?`
                <button onclick="event.stopPropagation(); window.openPaymentModal('${t.id}')" class="bg-primary hover:bg-primary-light text-white text-[11px] font-bold px-3 py-2 rounded-lg transition-all shadow-md shadow-primary/10 cursor-pointer">
                  Bayar Sekarang
                </button>
              `:`
                <button onclick="event.stopPropagation(); window.openTrackingModal('${t.id}')" class="bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-bold px-3 py-2 rounded-lg transition-all shadow-md shadow-emerald-600/10 flex items-center gap-1 cursor-pointer">
                  <i class="ph ph-map-pin"></i> Lacak
                </button>
              `}
              ${t.status===`Sudah Sampai Tujuan`?`
                <button onclick="event.stopPropagation(); window.reorder('${t.providerName}')" class="bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-bold px-3 py-2 rounded-lg transition-colors cursor-pointer">
                  Beli Lagi
                </button>
              `:`
                <button onclick="event.stopPropagation(); alert('Layanan pengaduan/CS dihubungi')" class="border border-slate-200 hover:bg-slate-50 text-slate-600 text-[11px] font-bold px-3 py-2 rounded-lg transition-colors cursor-pointer">
                  Bantuan
                </button>
              `}
            </div>
          </div>
        </div>
      `}),`
    <div class="max-w-md mx-auto px-4 py-4">
      <h2 class="text-xl font-extrabold text-slate-900 mb-6 font-serif">Aktivitas Pemesanan</h2>
      <div class="space-y-4">
        ${e}
      </div>
    </div>
  `}function C(){return`
    <div class="max-w-md mx-auto px-4 py-20 text-center">
      <div class="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6 text-primary shadow-inner">
        <i class="ph-fill ph-chats-teardrop text-4xl"></i>
      </div>
      <h2 class="text-lg font-bold text-slate-900 font-serif">Kotak Masuk Chat</h2>
      <p class="text-xs text-slate-500 mt-2 mb-6 max-w-xs mx-auto leading-relaxed">Hubungi langsung penyedia katering pilihan Anda untuk koordinasi pengantaran atau kustomisasi menu khusus secara instan.</p>
      <button onclick="navigateTo('home')" class="bg-primary hover:bg-primary-light text-white text-xs font-bold px-6 py-3 rounded-xl transition-colors shadow">Mulai Mencari Catering</button>
    </div>
  `}var w=``,T=``;function E(){return`
    <div class="max-w-md mx-auto px-6 py-8">
      <div class="text-center mb-8">
        <div class="w-16 h-16 rounded-2xl bg-gradient-to-tr from-primary to-primary-light flex items-center justify-center text-white shadow-xl shadow-primary/20 mx-auto mb-4 hover-scale">
          <i class="ph-fill ph-fork-knife text-3xl"></i>
        </div>
        <h2 class="text-2xl font-extrabold text-slate-900 tracking-tight font-serif">Selamat Datang</h2>
        <p class="text-xs text-slate-500 mt-1">Masuk untuk memesan katering terbaik & terdekat</p>
      </div>

      ${w?`
        <div class="bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl p-3.5 mb-5 flex items-start gap-2 animate-fade-in">
          <i class="ph ph-warning-circle text-lg flex-shrink-0"></i>
          <span>${w}</span>
        </div>
      `:``}

      <div class="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm space-y-4">
        <!-- Tab Login -->
        <div class="flex bg-slate-100 p-1 rounded-xl">
          <button onclick="window.setLoginRole('user')" id="btn-login-user" class="flex-1 text-center py-2 text-xs font-bold rounded-lg transition-all cursor-pointer bg-white text-slate-800 shadow-sm border border-slate-200/50">
            User
          </button>
          <button onclick="window.setLoginRole('admin')" id="btn-login-admin" class="flex-1 text-center py-2 text-xs font-bold rounded-lg transition-all cursor-pointer text-slate-500 hover:text-slate-800">
            Admin
          </button>
        </div>

        <form id="login-form" onsubmit="window.handleLoginSubmit(event)" class="space-y-4">
          <input type="hidden" id="login-role" value="user" />
          
          <div>
            <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">Alamat Email</label>
            <div class="relative flex items-center">
              <i class="ph ph-envelope text-slate-400 absolute left-4 text-base"></i>
              <input type="email" id="login-email" required placeholder="nama@email.com" class="w-full bg-slate-50 border border-slate-200 focus:border-primary rounded-xl pl-11 pr-4 py-3 text-xs focus:outline-none transition-colors text-slate-800" />
            </div>
          </div>

          <div>
            <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">Password</label>
            <div class="relative flex items-center">
              <i class="ph ph-lock text-slate-400 absolute left-4 text-base"></i>
              <input type="password" id="login-password" required placeholder="••••••••" class="w-full bg-slate-50 border border-slate-200 focus:border-primary rounded-xl pl-11 pr-4 py-3 text-xs focus:outline-none transition-colors text-slate-800" />
            </div>
          </div>

          <button type="submit" class="w-full bg-primary hover:bg-primary-light text-white font-bold py-3.5 rounded-xl transition-all shadow-md shadow-primary/10 flex items-center justify-center gap-2 cursor-pointer mt-2">
            Masuk <i class="ph ph-arrow-right text-sm"></i>
          </button>
        </form>

        <div class="pt-3 border-t border-slate-100/80 text-center">
          <span class="text-[10px] text-slate-400 uppercase tracking-wider block mb-2">Akun Demo Pengujian</span>
          <div class="flex gap-2">
            <button onclick="window.quickFillLogin('user')" class="flex-1 bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200/65 font-bold text-[10px] py-2 px-2 rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1">
              <i class="ph ph-user"></i> Isi User Demo
            </button>
            <button onclick="window.quickFillLogin('admin')" class="flex-1 bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200/65 font-bold text-[10px] py-2 px-2 rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1">
              <i class="ph ph-shield-star"></i> Isi Admin Demo
            </button>
          </div>
        </div>
      </div>

      <div class="text-center mt-6">
        <p class="text-xs text-slate-500">Belum punya akun? <button onclick="navigateTo('register')" class="text-primary font-bold hover:underline cursor-pointer">Daftar Sekarang</button></p>
      </div>
    </div>
  `}window.setLoginRole=function(e){let t=document.getElementById(`login-role`),n=document.getElementById(`btn-login-user`),r=document.getElementById(`btn-login-admin`);t&&n&&r&&(t.value=e,e===`user`?(n.className=`flex-1 text-center py-2 text-xs font-bold rounded-lg transition-all cursor-pointer bg-white text-slate-800 shadow-sm border border-slate-200/50`,r.className=`flex-1 text-center py-2 text-xs font-bold rounded-lg transition-all cursor-pointer text-slate-500 hover:text-slate-800`):(r.className=`flex-1 text-center py-2 text-xs font-bold rounded-lg transition-all cursor-pointer bg-white text-slate-800 shadow-sm border border-slate-200/50`,n.className=`flex-1 text-center py-2 text-xs font-bold rounded-lg transition-all cursor-pointer text-slate-500 hover:text-slate-800`))},window.quickFillLogin=function(e){window.setLoginRole(e);let t=document.getElementById(`login-email`),n=document.getElementById(`login-password`);t&&n&&(e===`user`?(t.value=`user@cateringku.com`,n.value=`user123`):(t.value=`admin@cateringku.com`,n.value=`admin123`))},window.handleLoginSubmit=function(e){e.preventDefault(),w=``;let t=document.getElementById(`login-email`)?.value.trim(),n=document.getElementById(`login-password`)?.value,r=document.getElementById(`login-role`)?.value,i=a.users.find(e=>e.email.toLowerCase()===t.toLowerCase()&&e.password===n&&e.role===r);if(i)if(a.currentUser=i,a.userAddress=i.address||a.userAddress,s(),alert(`Selamat Datang, ${i.name}! Anda berhasil masuk.`),a.redirectAfterLogin){let e=a.redirectAfterLogin;a.redirectAfterLogin=null,m(e)}else i.role===`admin`?m(`admin`):m(`account`);else w=`Email atau password salah untuk tipe akun ${r===`admin`?`Admin`:`User`}.`,h()};function D(){return`
    <div class="max-w-md mx-auto px-6 py-6">
      <div class="text-center mb-6">
        <h2 class="text-2xl font-extrabold text-slate-900 tracking-tight font-serif">Daftar Akun Baru</h2>
        <p class="text-xs text-slate-500 mt-1">Bergabunglah dengan Cateringku untuk mulai memesan</p>
      </div>

      ${T?`
        <div class="bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl p-3.5 mb-5 flex items-start gap-2 animate-fade-in">
          <i class="ph ph-warning-circle text-lg flex-shrink-0"></i>
          <span>${T}</span>
        </div>
      `:``}

      <div class="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm">
        <form onsubmit="window.handleRegisterSubmit(event)" class="space-y-4">
          <div>
            <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">Nama Lengkap</label>
            <div class="relative flex items-center">
              <i class="ph ph-user text-slate-400 absolute left-4 text-base"></i>
              <input type="text" id="reg-name" required placeholder="Budi Santoso" class="w-full bg-slate-50 border border-slate-200 focus:border-primary rounded-xl pl-11 pr-4 py-3 text-xs focus:outline-none transition-colors text-slate-800" />
            </div>
          </div>

          <div>
            <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">Alamat Email</label>
            <div class="relative flex items-center">
              <i class="ph ph-envelope text-slate-400 absolute left-4 text-base"></i>
              <input type="email" id="reg-email" required placeholder="budi@email.com" class="w-full bg-slate-50 border border-slate-200 focus:border-primary rounded-xl pl-11 pr-4 py-3 text-xs focus:outline-none transition-colors text-slate-800" />
            </div>
          </div>

          <div>
            <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">Nomor Telepon</label>
            <div class="relative flex items-center">
              <i class="ph ph-phone text-slate-400 absolute left-4 text-base"></i>
              <input type="tel" id="reg-phone" required placeholder="0812XXXXXXXX" class="w-full bg-slate-50 border border-slate-200 focus:border-primary rounded-xl pl-11 pr-4 py-3 text-xs focus:outline-none transition-colors text-slate-800" />
            </div>
          </div>

          <div>
            <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">Password</label>
            <div class="relative flex items-center">
              <i class="ph ph-lock text-slate-400 absolute left-4 text-base"></i>
              <input type="password" id="reg-password" required placeholder="••••••••" class="w-full bg-slate-50 border border-slate-200 focus:border-primary rounded-xl pl-11 pr-4 py-3 text-xs focus:outline-none transition-colors text-slate-800" />
            </div>
          </div>

          <div>
            <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">Alamat Pengantaran</label>
            <div class="relative flex items-start">
              <i class="ph ph-map-pin text-slate-400 absolute left-4 top-3 text-base"></i>
              <textarea id="reg-address" required rows="2" placeholder="Jl. Diponegoro No. 12..." class="w-full bg-slate-50 border border-slate-200 focus:border-primary rounded-xl pl-11 pr-4 py-2.5 text-xs focus:outline-none transition-colors text-slate-800 resize-none"></textarea>
            </div>
          </div>

          <button type="submit" class="w-full bg-primary hover:bg-primary-light text-white font-bold py-3.5 rounded-xl transition-all shadow-md shadow-primary/10 flex items-center justify-center gap-2 cursor-pointer mt-2">
            Daftar Akun Baru <i class="ph ph-user-plus text-sm"></i>
          </button>
        </form>
      </div>

      <div class="text-center mt-6">
        <p class="text-xs text-slate-500">Sudah punya akun? <button onclick="navigateTo('login')" class="text-primary font-bold hover:underline cursor-pointer">Login Di Sini</button></p>
      </div>
    </div>
  `}window.handleRegisterSubmit=function(e){e.preventDefault(),T=``;let t=document.getElementById(`reg-name`)?.value.trim(),n=document.getElementById(`reg-email`)?.value.trim(),r=document.getElementById(`reg-phone`)?.value.trim(),i=document.getElementById(`reg-password`)?.value,o=document.getElementById(`reg-address`)?.value.trim();if(a.users.find(e=>e.email.toLowerCase()===n.toLowerCase())){T=`Email "${n}" sudah terdaftar pada akun lain.`,h();return}let c={name:t,email:n,phone:r,password:i,address:o,role:`user`};if(a.users.push(c),a.currentUser=c,a.userAddress=o,s(),alert(`Registrasi Berhasil! Selamat datang, ${t}.`),a.redirectAfterLogin){let e=a.redirectAfterLogin;a.redirectAfterLogin=null,m(e)}else m(`account`)};function O(){if(!a.currentUser)return setTimeout(()=>m(`login`),10),`<p class="text-center py-20 text-xs">Mengarahkan ke halaman login...</p>`;let e=a.currentUser,t=e.role===`admin`;return`
    <div class="max-w-md mx-auto px-6 py-6 animate-fade-in">
      <h2 class="text-xl font-extrabold text-slate-900 mb-6 font-serif">Profil Saya</h2>
      
      <!-- Card Profil -->
      <div class="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm text-center mb-6">
        <div class="w-20 h-20 rounded-full bg-primary/5 text-primary flex items-center justify-center mx-auto mb-4 border-2 border-primary/10">
          <i class="ph ph-user text-4xl"></i>
        </div>
        <h3 class="text-base font-extrabold text-slate-900 leading-tight">${e.name}</h3>
        <p class="text-xs text-slate-500 mt-1">${e.email}</p>
        <span class="inline-block mt-3 px-3 py-1 rounded-full text-[10px] font-bold ${t?`bg-amber-100 text-amber-800`:`bg-slate-100 text-slate-800`} uppercase tracking-wider">
          ${t?`Administrator`:`Pelanggan`}
        </span>
      </div>

      <!-- Info Details -->
      <div class="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm space-y-4 mb-6">
        <div>
          <span class="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Nomor Telepon</span>
          <span class="text-xs font-semibold text-slate-800 block mt-1">${e.phone||`-`}</span>
        </div>
        <div class="border-t border-slate-50 pt-3">
          <span class="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Alamat Utama</span>
          <span class="text-xs font-semibold text-slate-700 block mt-1 leading-relaxed">${e.address||`-`}</span>
        </div>
      </div>

      ${t?`
        <!-- Admin Entry Card -->
        <div class="bg-gradient-to-br from-amber-600 to-amber-800 rounded-2xl text-white p-5 shadow-md mb-6 relative overflow-hidden">
          <div class="absolute -right-8 -bottom-8 w-24 h-24 bg-white/10 rounded-full blur-lg"></div>
          <div class="relative z-10">
            <h4 class="text-sm font-bold font-serif">Akses Area Administrator</h4>
            <p class="text-[10px] text-white/90 mt-1 leading-relaxed">Kelola data mitra katering, tambahkan paket menu baru, serta pantau dan ubah status pesanan secara real-time.</p>
            <button onclick="navigateTo('admin')" class="mt-4 bg-white text-amber-800 hover:bg-slate-100 font-bold text-xs px-4 py-2.5 rounded-xl transition-all shadow flex items-center justify-center gap-1.5 cursor-pointer">
              <i class="ph ph-shield-star text-base"></i> Masuk Dashboard Admin
            </button>
          </div>
        </div>
      `:``}

      <!-- Action Buttons -->
      <div class="space-y-3">
        <button onclick="window.handleLogout()" class="w-full border border-red-200 bg-red-50/50 hover:bg-red-50 text-red-700 font-bold py-3.5 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer text-xs">
          <i class="ph ph-sign-out text-base"></i> Keluar dari Akun
        </button>
      </div>
    </div>
  `}window.handleLogout=function(){confirm(`Apakah Anda yakin ingin keluar dari akun Anda?`)&&(a.currentUser=null,s(),alert(`Anda berhasil keluar.`),m(`home`))};function k(){if(!a.currentUser||a.currentUser.role!==`admin`)return setTimeout(()=>m(`home`),10),`<p class="text-center py-20 text-xs">Akses ditolak. Mengarahkan...</p>`;let e=a.adminActiveTab||`dashboard`,t=a.orders.length,r=a.orders.reduce((e,t)=>e+t.totalPrice,0),i=a.orders.filter(e=>e.status!==`Sudah Sampai Tujuan`&&e.status!==`Menunggu Pembayaran`).length,o=n.length;return`
    <div class="bg-slate-50 min-h-screen pb-12">
      <!-- Admin Header -->
      <header class="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-sm px-6 py-4 flex justify-between items-center">
        <div class="flex items-center gap-3">
          <button onclick="navigateTo('account')" class="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer">
            <i class="ph ph-arrow-left text-lg"></i>
          </button>
          <div>
            <h1 class="text-sm font-black text-slate-900 tracking-tight flex items-center gap-1.5 font-serif">
              <i class="ph-fill ph-shield text-amber-500"></i> Dashboard Admin
            </h1>
            <p class="text-[10px] text-slate-500 font-medium font-sans">Pengelolaan Layanan Cateringku</p>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <span class="text-[10px] font-bold bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full">
            Admin: ${a.currentUser.name}
          </span>
          <button onclick="navigateTo('home')" class="text-xs text-primary font-bold hover:underline cursor-pointer flex items-center gap-1">
            <i class="ph ph-house"></i> Area User
          </button>
        </div>
      </header>

      <!-- Admin Sub-Navigation -->
      <div class="bg-white border-b border-slate-100 px-6 py-1 flex gap-6 overflow-x-auto scrollbar-none sticky top-[69px] z-20 shadow-sm">
        <button onclick="window.setAdminTab('dashboard')" class="py-3.5 text-xs font-extrabold cursor-pointer relative transition-all ${e===`dashboard`?`text-primary`:`text-slate-400 hover:text-slate-600`}">
          Ringkasan
          ${e===`dashboard`?`<span class="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"></span>`:``}
        </button>
        <button onclick="window.setAdminTab('orders')" class="py-3.5 text-xs font-extrabold cursor-pointer relative transition-all ${e===`orders`?`text-primary`:`text-slate-400 hover:text-slate-600`}">
          Kelola Pesanan
          ${i>0?`<span class="bg-primary text-white text-[9px] px-1.5 py-0.5 rounded-full ml-1 font-bold animate-pulse">${i}</span>`:``}
          ${e===`orders`?`<span class="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"></span>`:``}
        </button>
        <button onclick="window.setAdminTab('providers')" class="py-3.5 text-xs font-extrabold cursor-pointer relative transition-all ${e===`providers`?`text-primary`:`text-slate-400 hover:text-slate-600`}">
          Kelola Mitra
          ${e===`providers`?`<span class="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"></span>`:``}
        </button>
      </div>

      <div class="max-w-4xl mx-auto px-6 py-6">
        ${e===`dashboard`?A(r,t,i,o):``}
        ${e===`orders`?j():``}
        ${e===`providers`?M():``}
      </div>
    </div>
  `}window.setAdminTab=function(e){a.adminActiveTab=e,s(),h()};function A(e,t,n,r){let i={"Menunggu Pembayaran":0,"Pembayaran Terkonfirmasi":0,"Menyiapkan Bahan":0,"Mulai Memasak":0,"Mulai Mengemas":0,"Sedang Diantar":0,"Sudah Sampai Tujuan":0};return a.orders.forEach(e=>{i[e.status]!==void 0&&i[e.status]++}),`
    <div class="space-y-6 animate-fade-in">
      <!-- Row Ringkasan Card -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm">
          <div class="w-8 h-8 rounded-xl bg-primary/5 text-primary flex items-center justify-center mb-3">
            <i class="ph ph-wallet text-lg"></i>
          </div>
          <span class="text-[9px] text-slate-400 font-bold uppercase tracking-wider block">Total Pendapatan</span>
          <div class="text-sm font-black text-slate-900 mt-1">Rp ${e.toLocaleString(`id-ID`)}</div>
        </div>

        <div class="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm">
          <div class="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
            <i class="ph ph-receipt text-lg"></i>
          </div>
          <span class="text-[9px] text-slate-400 font-bold uppercase tracking-wider block">Total Pesanan</span>
          <div class="text-sm font-black text-slate-900 mt-1">${t} Transaksi</div>
        </div>

        <div class="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm">
          <div class="w-8 h-8 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mb-3">
            <i class="ph ph-cooking-pot text-lg"></i>
          </div>
          <span class="text-[9px] text-slate-400 font-bold uppercase tracking-wider block">Pesanan Aktif</span>
          <div class="text-sm font-black text-primary mt-1">${n} Aktif</div>
        </div>

        <div class="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm">
          <div class="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
            <i class="ph ph-storefront text-lg"></i>
          </div>
          <span class="text-[9px] text-slate-400 font-bold uppercase tracking-wider block">Jumlah Mitra</span>
          <div class="text-sm font-black text-slate-900 mt-1">${r} Brand</div>
        </div>
      </div>

      <!-- Detail Status Breakdown -->
      <div class="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm">
        <h3 class="text-xs font-bold text-slate-800 uppercase tracking-wider mb-4 flex items-center gap-1.5">
          <i class="ph ph-chart-bar text-primary"></i> Status Proses Pesanan
        </h3>
        
        <div class="space-y-3">
          ${Object.entries(i).map(([e,n])=>{let r=t>0?Math.round(n/t*100):0,i=`bg-slate-300`;return e===`Menunggu Pembayaran`?i=`bg-amber-400`:e===`Pembayaran Terkonfirmasi`?i=`bg-emerald-400`:[`Menyiapkan Bahan`,`Mulai Memasak`,`Mulai Mengemas`].includes(e)?i=`bg-orange-400`:e===`Sedang Diantar`?i=`bg-blue-500`:e===`Sudah Sampai Tujuan`&&(i=`bg-emerald-600`),`
              <div>
                <div class="flex justify-between items-center text-xs mb-1">
                  <span class="font-medium text-slate-600">${e}</span>
                  <span class="font-bold text-slate-800">${n} (${r}%)</span>
                </div>
                <div class="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div class="h-full rounded-full ${i}" style="width: ${r}%"></div>
                </div>
              </div>
            `}).join(``)}
        </div>
      </div>
    </div>
  `}function j(){let e=``;return a.orders.length===0?e=`
      <div class="text-center py-10 bg-white border border-slate-100 rounded-2xl animate-fade-in">
        <i class="ph ph-receipt text-3xl text-slate-400 mb-1"></i>
        <h4 class="text-xs font-bold text-slate-700">Belum ada pesanan</h4>
      </div>
    `:a.orders.forEach(t=>{e+=`
        <div class="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm space-y-4 animate-fade-in">
          <div class="flex justify-between items-start pb-3.5 border-b border-slate-100">
            <div>
              <span class="text-[9px] text-slate-400 font-bold block uppercase">ID PESANAN</span>
              <span class="text-xs font-mono font-bold text-slate-800">${t.id}</span>
              <span class="text-[9px] text-slate-400 font-medium block mt-1">${t.date}</span>
            </div>
            <div>
              ${x(t.status)}
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <div>
              <span class="text-[9px] text-slate-400 font-bold uppercase tracking-wider block">Katering & Menu</span>
              <h4 class="text-xs font-extrabold text-slate-900 mt-1">${t.providerName}</h4>
              <p class="text-xs text-slate-600 mt-0.5">${t.packageName} (${t.quantity} Pax)</p>
            </div>
            <div>
              <span class="text-[9px] text-slate-400 font-bold uppercase tracking-wider block">Alamat Pengiriman</span>
              <p class="text-xs text-slate-600 leading-normal mt-1">${t.address}</p>
            </div>
          </div>

          <div class="flex flex-col md:flex-row justify-between items-stretch md:items-center pt-3.5 border-t border-slate-50 gap-3">
            <div>
              <span class="text-[9px] text-slate-400 font-bold uppercase tracking-wider block text-left">Total Pembayaran</span>
              <div class="text-sm font-black text-primary text-left">Rp ${t.totalPrice.toLocaleString(`id-ID`)}</div>
            </div>

            <div class="flex flex-wrap gap-1.5 justify-end">
              <span class="text-[9px] text-slate-400 font-bold uppercase tracking-wider block w-full mb-1 text-left md:text-right">Perbarui Status:</span>
              ${L.map(e=>{let n=e.status===t.status,r=`bg-slate-100 hover:bg-slate-200 text-slate-600`;return n&&(r=`bg-primary text-white pointer-events-none ring-2 ring-primary/20`),`
                  <button onclick="window.adminUpdateOrderStatus('${t.id}', '${e.status}')" class="px-2 py-1 rounded text-[8px] font-bold transition-all cursor-pointer ${r}">
                    ${e.status.split(` `)[0]}
                  </button>
                `}).join(``)}
            </div>
          </div>
        </div>
      `}),`
    <div class="space-y-4 animate-fade-in text-left">
      <div class="flex justify-between items-center mb-2">
        <h3 class="text-xs font-bold text-slate-800 uppercase tracking-wider">Semua Pesanan Katering</h3>
        <span class="text-[10px] font-bold bg-slate-200 text-slate-600 px-2 py-0.5 rounded-full">${a.orders.length} Pesanan</span>
      </div>
      
      <div class="space-y-4">
        ${e}
      </div>
    </div>
  `}window.adminUpdateOrderStatus=function(e,t){let n=a.orders.find(t=>t.id===e);if(!n)return;n.status=t,n.statusHistory||={};let r=L.map(e=>e.status),i=r.indexOf(t);r.forEach((e,t)=>{t<=i?n.statusHistory[e]||(n.statusHistory[e]=o()):delete n.statusHistory[e]}),t===`Sudah Sampai Tujuan`||t===`Menunggu Pembayaran`?l[e]&&(clearInterval(l[e].intervalId),delete l[e]):l[e]||d(e),s(),u(n.id,n.providerName,t),alert(`Status Pesanan ${e} berhasil diubah menjadi "${t}"!`),h()};function M(){let e=a.adminForm||null;if(e===`add_provider`)return N();if(e===`add_package`)return P();let t=``;return n.forEach(e=>{t+=`
      <div class="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm space-y-4 animate-fade-in text-left">
        <div class="flex gap-4">
          <img src="${e.image}" alt="${e.name}" class="w-16 h-16 rounded-xl object-cover flex-shrink-0" />
          <div class="flex-1 min-w-0">
            <div class="flex justify-between items-start gap-1">
              <h4 class="text-sm font-extrabold text-slate-900 truncate">${e.name}</h4>
              <span class="flex items-center gap-0.5 bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded text-[9px] font-bold">
                <i class="ph-fill ph-star text-amber-500"></i> ${e.rating}
              </span>
            </div>
            <p class="text-xs text-slate-500 mt-1 leading-normal"><i class="ph ph-map-pin text-primary inline"></i> ${e.address}</p>
            <p class="text-[10px] text-slate-400 mt-1 font-medium">Jarak: ${e.distance} km • Min. Order: Rp ${e.minPrice.toLocaleString(`id-ID`)} / porsi</p>
          </div>
        </div>

        <div class="pt-3 border-t border-slate-50 space-y-3">
          <div class="flex justify-between items-center">
            <span class="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Daftar Paket Hidangan:</span>
            <button onclick="window.showAddPackageForm('${e.id}')" class="text-[10px] text-primary font-bold hover:underline flex items-center gap-0.5 cursor-pointer">
              <i class="ph ph-plus-circle"></i> Tambah Paket Menu
            </button>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            ${e.packages.map(t=>`
              <div class="bg-slate-50 border border-slate-100 rounded-xl p-3.5 relative overflow-hidden group">
                <div class="flex justify-between items-start gap-2">
                  <h5 class="text-xs font-bold text-slate-900 truncate w-32">${t.name}</h5>
                  <span class="text-[9px] bg-primary/5 text-primary px-2 py-0.5 rounded-full font-bold flex-shrink-0">
                    Rp ${t.price.toLocaleString(`id-ID`)}
                  </span>
                </div>
                <p class="text-[10px] text-slate-500 mt-1 line-clamp-1 leading-relaxed">${t.desc}</p>
                <div class="text-[8px] text-slate-400 mt-1.5 font-semibold">Min: ${t.minOrder} Pax • ${t.menu.length} Pilihan Menu</div>
                <button onclick="window.adminDeletePackage('${e.id}', '${t.id}')" class="absolute right-2 bottom-2 text-red-500 hover:text-red-700 text-xs md:opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                  <i class="ph ph-trash"></i> Hapus
                </button>
              </div>
            `).join(``)}
            ${e.packages.length===0?`
              <div class="text-center py-4 bg-slate-50 border border-dashed border-slate-200 rounded-xl col-span-2">
                <span class="text-[10px] text-slate-400">Belum ada paket menu.</span>
              </div>
            `:``}
          </div>
        </div>

        <div class="pt-3 border-t border-slate-50 flex justify-end">
          <button onclick="window.adminDeleteProvider('${e.id}')" class="text-red-600 hover:text-red-700 text-[10px] font-bold flex items-center gap-1 cursor-pointer">
            <i class="ph ph-trash"></i> Hapus Mitra Katering
          </button>
        </div>
      </div>
    `}),`
    <div class="space-y-4 animate-fade-in text-left">
      <div class="flex justify-between items-center">
        <div>
          <h3 class="text-xs font-bold text-slate-800 uppercase tracking-wider">Mitra Katering Terdaftar</h3>
          <p class="text-[10px] text-slate-400">Kelola daftar mitra dan paket menu mereka</p>
        </div>
        <button onclick="window.showAddProviderForm()" class="bg-primary hover:bg-primary-light text-white text-[11px] font-bold px-3 py-2 rounded-xl transition-all shadow shadow-primary/10 flex items-center gap-1 cursor-pointer">
          <i class="ph ph-plus-circle text-base"></i> Tambah Mitra Baru
        </button>
      </div>

      <div class="space-y-4">
        ${t}
      </div>
    </div>
  `}window.showAddProviderForm=function(){a.adminForm=`add_provider`,h()},window.showAddPackageForm=function(e){a.adminForm=`add_package`,a.adminSelectedProviderId=e,h()},window.cancelAdminForm=function(){a.adminForm=null,a.adminSelectedProviderId=null,h()};function N(){return`
    <div class="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm space-y-4 animate-fade-in text-left">
      <div class="flex items-center justify-between pb-3.5 border-b border-slate-100">
        <div>
          <h3 class="text-base font-extrabold text-slate-900 font-serif">Tambah Mitra Katering Baru</h3>
          <p class="text-xs text-slate-500 mt-0.5 font-sans">Daftarkan penyedia katering baru ke dalam sistem</p>
        </div>
        <button onclick="window.cancelAdminForm()" class="w-8 h-8 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center hover:bg-slate-200 transition-colors cursor-pointer">
          <i class="ph ph-x"></i>
        </button>
      </div>

      <form onsubmit="window.handleRegisterProviderSubmit(event)" class="space-y-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">Nama Mitra Katering</label>
            <input type="text" id="add-prov-name" required placeholder="Berkah Catering Jakarta" class="w-full bg-slate-50 border border-slate-200 focus:border-primary rounded-xl px-4 py-3 text-xs focus:outline-none transition-colors text-slate-800" />
          </div>
          <div>
            <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">Kategori Layanan (Pilih yang sesuai)</label>
            <div class="flex flex-wrap gap-2 pt-1">
              ${Object.values(e).map(e=>`
                <label class="flex items-center gap-1.5 text-xs text-slate-700 bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 cursor-pointer hover:bg-slate-100 select-none">
                  <input type="checkbox" name="add-prov-cats" value="${e.id}" class="accent-primary" />
                  <span>${e.name.replace(`Catering `,``)}</span>
                </label>
              `).join(``)}
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">Jarak Lokasi (km)</label>
            <input type="number" id="add-prov-distance" step="0.1" required placeholder="2.5" class="w-full bg-slate-50 border border-slate-200 focus:border-primary rounded-xl px-4 py-3 text-xs focus:outline-none transition-colors text-slate-800" />
          </div>
          <div>
            <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">Harga Minimal (Rp)</label>
            <input type="number" id="add-prov-minprice" required placeholder="30000" class="w-full bg-slate-50 border border-slate-200 focus:border-primary rounded-xl px-4 py-3 text-xs focus:outline-none transition-colors text-slate-800" />
          </div>
          <div>
            <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">Foto Sampul Mitra (Link URL)</label>
            <input type="url" id="add-prov-image" required placeholder="https://images.unsplash.com/..." value="https://images.unsplash.com/photo-1555244162-803834f70033?w=600" class="w-full bg-slate-50 border border-slate-200 focus:border-primary rounded-xl px-4 py-3 text-xs focus:outline-none transition-colors text-slate-800" />
          </div>
        </div>

        <div>
          <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">Alamat Lengkap</label>
          <input type="text" id="add-prov-address" required placeholder="Jl. Raya Katering No. 10, Jakarta Selatan" class="w-full bg-slate-50 border border-slate-200 focus:border-primary rounded-xl px-4 py-3 text-xs focus:outline-none transition-colors text-slate-800" />
        </div>

        <div>
          <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">Deskripsi Singkat</label>
          <textarea id="add-prov-desc" required rows="2" placeholder="Spesialis katering keluarga dengan rasa autentik..." class="w-full bg-slate-50 border border-slate-200 focus:border-primary rounded-xl px-4 py-3 text-xs focus:outline-none transition-colors text-slate-800 resize-none"></textarea>
        </div>

        <div class="flex justify-end gap-2 pt-2 border-t border-slate-100">
          <button type="button" onclick="window.cancelAdminForm()" class="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs py-3 px-5 rounded-xl transition-colors cursor-pointer">
            Batal
          </button>
          <button type="submit" class="bg-primary hover:bg-primary-light text-white font-bold text-xs py-3 px-5 rounded-xl transition-colors shadow shadow-primary/10 cursor-pointer">
            Simpan Mitra Baru
          </button>
        </div>
      </form>
    </div>
  `}window.handleRegisterProviderSubmit=function(e){e.preventDefault();let t=document.getElementById(`add-prov-name`)?.value.trim(),r=parseFloat(document.getElementById(`add-prov-distance`)?.value),i=parseInt(document.getElementById(`add-prov-minprice`)?.value),o=document.getElementById(`add-prov-image`)?.value,c=document.getElementById(`add-prov-address`)?.value.trim(),l=document.getElementById(`add-prov-desc`)?.value.trim(),u=document.getElementsByName(`add-prov-cats`),d=[];if(u.forEach(e=>{e.checked&&d.push(e.value)}),d.length===0){alert(`Harap pilih minimal satu kategori layanan.`);return}let f={id:`prov-`+Math.floor(1e3+Math.random()*9e3),name:t,categories:d,rating:5,reviews:1,distance:r,address:c,coords:{x:Math.floor(20+Math.random()*60),y:Math.floor(20+Math.random()*60)},desc:l,image:o,minPrice:i,packages:[]};n.push(f),s(),alert(`Mitra "${t}" berhasil ditambahkan! Silakan tambahkan paket hidangan menu.`),a.adminForm=null,h()};function P(){let e=a.adminSelectedProviderId,t=n.find(t=>t.id===e);return t?`
    <div class="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm space-y-4 animate-fade-in text-left">
      <div class="flex items-center justify-between pb-3.5 border-b border-slate-100">
        <div>
          <h3 class="text-base font-extrabold text-slate-900 font-serif">Tambah Paket Menu</h3>
          <p class="text-xs text-slate-500 mt-0.5">Menambahkan paket hidangan baru untuk <strong>${t.name}</strong></p>
        </div>
        <button onclick="window.cancelAdminForm()" class="w-8 h-8 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center hover:bg-slate-200 transition-colors cursor-pointer">
          <i class="ph ph-x"></i>
        </button>
      </div>

      <form onsubmit="window.handleRegisterPackageSubmit(event)" class="space-y-4">
        <input type="hidden" id="add-pkg-provid" value="${e}" />

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">Nama Paket Menu</label>
            <input type="text" id="add-pkg-name" required placeholder="Paket Tumpeng Syukuran Gold" class="w-full bg-slate-50 border border-slate-200 focus:border-primary rounded-xl px-4 py-3 text-xs focus:outline-none transition-colors text-slate-800" />
          </div>
          <div>
            <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">Foto Paket Menu (URL Gambar)</label>
            <input type="url" id="add-pkg-image" required placeholder="https://images.unsplash.com/..." value="https://images.unsplash.com/photo-1544025162-d76694265947?w=600" class="w-full bg-slate-50 border border-slate-200 focus:border-primary rounded-xl px-4 py-3 text-xs focus:outline-none transition-colors text-slate-800" />
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">Harga Per Porsi / Pax (Rp)</label>
            <input type="number" id="add-pkg-price" required placeholder="45000" class="w-full bg-slate-50 border border-slate-200 focus:border-primary rounded-xl px-4 py-3 text-xs focus:outline-none transition-colors text-slate-800" />
          </div>
          <div>
            <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">Minimal Order (Pax / Porsi)</label>
            <input type="number" id="add-pkg-minorder" required placeholder="50" class="w-full bg-slate-50 border border-slate-200 focus:border-primary rounded-xl px-4 py-3 text-xs focus:outline-none transition-colors text-slate-800" />
          </div>
        </div>

        <div>
          <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">Daftar Menu Hidangan (Pisahkan dengan tanda koma)</label>
          <textarea id="add-pkg-menu" required rows="2" placeholder="Nasi Tumpeng Kuning, Ayam Goreng Lengkuas, Telur Balado, Sambal Kentang Ati, Udang Goreng Tepung..." class="w-full bg-slate-50 border border-slate-200 focus:border-primary rounded-xl px-4 py-3 text-xs focus:outline-none transition-colors text-slate-800 resize-none"></textarea>
        </div>

        <div>
          <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">Deskripsi Paket</label>
          <textarea id="add-pkg-desc" required rows="2" placeholder="Paket tumpeng komplit premium untuk berbagai acara syukuran atau peresmian..." class="w-full bg-slate-50 border border-slate-200 focus:border-primary rounded-xl px-4 py-3 text-xs focus:outline-none transition-colors text-slate-800 resize-none"></textarea>
        </div>

        <div class="flex justify-end gap-2 pt-2 border-t border-slate-100">
          <button type="button" onclick="window.cancelAdminForm()" class="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs py-3 px-5 rounded-xl transition-colors cursor-pointer">
            Batal
          </button>
          <button type="submit" class="bg-primary hover:bg-primary-light text-white font-bold text-xs py-3 px-5 rounded-xl transition-colors shadow shadow-primary/10 cursor-pointer">
            Simpan Paket Baru
          </button>
        </div>
      </form>
    </div>
  `:(setTimeout(window.cancelAdminForm,10),``)}window.handleRegisterPackageSubmit=function(e){e.preventDefault();let t=document.getElementById(`add-pkg-provid`)?.value,r=document.getElementById(`add-pkg-name`)?.value.trim(),i=document.getElementById(`add-pkg-image`)?.value,o=parseInt(document.getElementById(`add-pkg-price`)?.value),c=parseInt(document.getElementById(`add-pkg-minorder`)?.value),l=document.getElementById(`add-pkg-desc`)?.value.trim(),u=(document.getElementById(`add-pkg-menu`)?.value||``).split(`,`).map(e=>e.trim()).filter(e=>e!==``);if(u.length===0){alert(`Harap masukkan minimal satu item menu hidangan.`);return}let d=n.find(e=>e.id===t);if(!d)return;let f={id:t+`-`+Math.floor(100+Math.random()*900),name:r,price:o,minOrder:c,image:i,menu:u,desc:l};d.packages.push(f),s(),alert(`Paket Menu "${r}" berhasil ditambahkan ke ${d.name}!`),a.adminForm=null,h()},window.adminDeleteProvider=function(e){if(confirm(`Apakah Anda yakin ingin menghapus mitra katering ini dari platform?`)){let t=n.findIndex(t=>t.id===e);t!==-1&&(n.splice(t,1),s(),alert(`Mitra katering berhasil dihapus.`),h())}},window.adminDeletePackage=function(e,t){if(confirm(`Apakah Anda yakin ingin menghapus paket menu ini?`)){let r=n.find(t=>t.id===e);if(r){let e=r.packages.findIndex(e=>e.id===t);e!==-1&&(r.packages.splice(e,1),s(),alert(`Paket menu berhasil dihapus.`),h())}}};function F(){if(a.currentView===`admin`)return``;let e=a.currentView===`home`,t=a.currentView===`orders`,n=a.currentView===`chat`,r=[`account`,`login`,`register`].includes(a.currentView);return`
    <nav class="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-100 shadow-[0_-4px_16px_rgba(0,0,0,0.04)] h-16 flex items-center justify-around px-4">
      <button onclick="navigateTo('home')" class="flex flex-col items-center gap-1 cursor-pointer flex-1 py-1">
        <i class="ph-fill ph-house text-2xl ${e?`text-primary`:`text-slate-400`} transition-colors"></i>
        <span class="text-[9px] font-bold ${e?`text-primary`:`text-slate-500`} tracking-wider uppercase">Beranda</span>
      </button>
      <button onclick="navigateTo('orders')" class="flex flex-col items-center gap-1 cursor-pointer flex-1 py-1">
        <i class="ph-fill ph-receipt text-2xl ${t?`text-primary`:`text-slate-400`} transition-colors"></i>
        <span class="text-[9px] font-bold ${t?`text-primary`:`text-slate-500`} tracking-wider uppercase">Pesanan</span>
      </button>
      <button onclick="navigateTo('chat')" class="flex flex-col items-center gap-1 cursor-pointer flex-1 py-1">
        <i class="ph-fill ph-chats-teardrop text-2xl ${n?`text-primary`:`text-slate-400`} transition-colors"></i>
        <span class="text-[9px] font-bold ${n?`text-primary`:`text-slate-500`} tracking-wider uppercase">Pesan</span>
      </button>
      <button onclick="window.navigateToAccount()" class="flex flex-col items-center gap-1 cursor-pointer flex-1 py-1">
        <i class="ph-fill ph-user text-2xl ${r?`text-primary`:`text-slate-400`} transition-colors"></i>
        <span class="text-[9px] font-bold ${r?`text-primary`:`text-slate-500`} tracking-wider uppercase">Akun</span>
      </button>
    </nav>
  `}function I(){if(a.selectedPackage){let e=a.selectedPackage;return B(e)}return a.activePaymentOrderId?R(a.activePaymentOrderId):a.activeTrackingOrderId?z(a.activeTrackingOrderId):``}var L=[{status:`Menunggu Pembayaran`,title:`Menunggu Pembayaran`,desc:`Pesanan telah dibuat. Silakan lakukan pembayaran agar pesanan diproses.`,icon:`ph-wallet`},{status:`Pembayaran Terkonfirmasi`,title:`Pembayaran Terkonfirmasi`,desc:`Pembayaran Anda berhasil dikonfirmasi. Mitra mulai memverifikasi pesanan.`,icon:`ph-credit-card`},{status:`Menyiapkan Bahan`,title:`Menyiapkan Bahan Makanan`,desc:`Bahan-bahan segar sedang dipersiapkan dan dicuci bersih oleh tim katering.`,icon:`ph-leaf`},{status:`Mulai Memasak`,title:`Hidangan Sedang Dimasak`,desc:`Koki terampil kami sedang memasak menu katering pilihan Anda.`,icon:`ph-fire`},{status:`Mulai Mengemas`,title:`Pesanan Mulai Dikemas`,desc:`Makanan sedang ditata rapi dalam wadah saji steril dan diberi label.`,icon:`ph-package`},{status:`Sedang Diantar`,title:`Pesanan Sedang Diantar`,desc:`Kurir sedang dalam perjalanan mengirimkan katering hangat Anda.`,icon:`ph-moped`},{status:`Sudah Sampai Tujuan`,title:`Sampai di Tujuan`,desc:`Katering lezat telah sampai di lokasi Anda. Selamat menikmati!`,icon:`ph-house-line`}];function R(e){let t=a.orders.find(t=>t.id===e);return t?`
    <div class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end justify-center p-0 md:p-4 animate-fade-in" onclick="window.closeActiveModals()">
      <div class="bg-white w-full max-w-lg rounded-t-3xl md:rounded-3xl overflow-hidden shadow-2xl animate-slide-up flex flex-col max-h-[90vh]" onclick="event.stopPropagation()">
        
        <div class="p-6 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h3 class="text-base font-extrabold text-slate-900 font-serif">Pembayaran Katering</h3>
            <p class="text-[10px] text-slate-400 mt-0.5">ID Pesanan: ${t.id}</p>
          </div>
          <button onclick="window.closeActiveModals()" class="w-8 h-8 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center hover:bg-slate-200 transition-colors cursor-pointer">
            <i class="ph ph-x text-lg"></i>
          </button>
        </div>
        
        <div class="p-6 overflow-y-auto flex-1 space-y-5 scrollbar-none">
          <div class="bg-slate-50 rounded-2xl p-4 border border-slate-100">
            <div class="flex justify-between items-start">
              <div>
                <h4 class="text-xs font-bold text-slate-800">${t.providerName}</h4>
                <p class="text-[10px] text-slate-500 mt-0.5">${t.packageName} (${t.quantity} Pax)</p>
              </div>
              <span class="text-xs font-black text-primary bg-primary/5 px-2.5 py-1 rounded-lg">
                Rp ${t.totalPrice.toLocaleString(`id-ID`)}
              </span>
            </div>
          </div>
          
          <div class="space-y-3">
            <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Pilih Metode Pembayaran</label>
            
            <label class="flex items-center justify-between p-4 rounded-2xl border border-primary bg-primary/5 cursor-pointer hover:bg-primary/5 transition-all">
              <div class="flex items-center gap-3">
                <input type="radio" name="pay-method" checked class="accent-primary w-4 h-4" />
                <div class="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <i class="ph-fill ph-wallet text-xl"></i>
                </div>
                <div>
                  <h4 class="text-xs font-bold text-slate-900">GoPay / OVO (E-Wallet)</h4>
                  <p class="text-[10px] text-slate-500">Saldo: Rp 450.000 • Terhubung</p>
                </div>
              </div>
              <span class="text-[10px] font-extrabold text-primary bg-white border border-primary/20 px-2 py-0.5 rounded-full">Dipilih</span>
            </label>
            
            <label class="flex items-center justify-between p-4 rounded-2xl border border-slate-100 hover:border-slate-300 transition-all cursor-pointer">
              <div class="flex items-center gap-3">
                <input type="radio" name="pay-method" class="accent-primary w-4 h-4" />
                <div class="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <i class="ph-fill ph-bank text-xl"></i>
                </div>
                <div>
                  <h4 class="text-xs font-bold text-slate-900">Transfer Virtual Account</h4>
                  <p class="text-[10px] text-slate-500">BCA, Mandiri, BNI, BRI</p>
                </div>
              </div>
            </label>
            
            <label class="flex items-center justify-between p-4 rounded-2xl border border-slate-100 hover:border-slate-300 transition-all cursor-pointer">
              <div class="flex items-center gap-3">
                <input type="radio" name="pay-method" class="accent-primary w-4 h-4" />
                <div class="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                  <i class="ph-fill ph-hand-coins text-xl"></i>
                </div>
                <div>
                  <h4 class="text-xs font-bold text-slate-900">Bayar Di Tempat (COD)</h4>
                  <p class="text-[10px] text-slate-500">Bayar setelah pesanan sampai</p>
                </div>
              </div>
            </label>
          </div>
          
          <div class="p-4 rounded-2xl bg-amber-50 border border-amber-100 flex gap-3 text-amber-800">
            <i class="ph ph-shield-check text-2xl flex-shrink-0"></i>
            <div>
              <h5 class="text-xs font-bold">Pembayaran Aman & Terenkripsi</h5>
              <p class="text-[10px] text-amber-800/90 mt-0.5 leading-normal">Dana Anda akan ditampung sementara oleh Cateringku dan baru diserahkan ke mitra setelah pesanan katering sampai di tujuan.</p>
            </div>
          </div>
        </div>
        
        <div class="p-5 border-t border-slate-100 bg-slate-50/50">
          <button onclick="window.processPaymentSubmit('${t.id}')" class="w-full bg-primary hover:bg-primary-light text-white font-bold py-3.5 rounded-2xl transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 cursor-pointer">
            <i class="ph ph-credit-card text-lg"></i> Bayar Sekarang (Simulasi)
          </button>
        </div>
      </div>
    </div>
  `:``}window.processPaymentSubmit=function(e){let t=a.orders.find(t=>t.id===e);t&&(t.status=`Pembayaran Terkonfirmasi`,t.statusHistory||={},t.statusHistory[`Pembayaran Terkonfirmasi`]=o(),a.activePaymentOrderId=null,a.activeTrackingOrderId=e,s(),d(e),alert(`Pembayaran Berhasil! Pesanan katering Anda dikonfirmasi dan mitra kami mulai menyiapkan pesanan Anda.`),h())};function z(e){let t=a.orders.find(t=>t.id===e);if(!t)return``;let n=L.findIndex(e=>e.status===t.status),r=``;L.forEach((e,i)=>{let a=i<n,o=i===n,s=t.statusHistory&&t.statusHistory[e.status]?t.statusHistory[e.status]:``,c=``,l=``,u=``,d=``;a?(c=`bg-primary text-white ring-4 ring-primary/10`,l=`bg-primary`,u=`text-slate-800 font-bold`,d=`text-slate-500`):o?(c=`bg-accent text-white ring-4 ring-accent/30 scale-110`,l=`bg-slate-200`,u=`text-primary font-black`,d=`text-slate-700 font-medium`):(c=`bg-slate-100 text-slate-400`,l=`bg-slate-200`,u=`text-slate-400 font-medium`,d=`text-slate-300`);let f=i===L.length-1;r+=`
      <div class="flex gap-4 relative">
        <div class="flex flex-col items-center flex-shrink-0 z-10 w-9">
          <div class="w-9 h-9 rounded-full flex items-center justify-center text-base transition-all duration-300 ${c}">
            <i class="ph ${e.icon}"></i>
          </div>
          ${f?``:`
            <div class="w-0.5 h-16 transition-all duration-300 ${l}"></div>
          `}
        </div>
        
        <div class="flex-1 pb-6">
          <div class="flex justify-between items-start gap-2">
            <h4 class="text-xs ${u} transition-colors duration-300">${e.title}</h4>
            ${s?`
              <span class="text-[9px] font-mono text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full flex items-center gap-0.5 flex-shrink-0">
                <i class="ph ph-clock"></i> ${s}
              </span>
            `:``}
          </div>
          <p class="text-[10px] ${d} mt-1 leading-relaxed transition-colors duration-300">${e.desc}</p>
          
          ${o&&e.status===`Mulai Memasak`?`
            <div class="mt-2.5 flex items-center gap-2 bg-orange-50 border border-orange-100 p-2 rounded-xl text-orange-800 animate-pulse w-fit">
              <i class="ph-fill ph-fire text-sm"></i>
              <span class="text-[9px] font-bold">Dapur sedang sibuk memasak hidangan panas...</span>
            </div>
          `:``}
          
          ${o&&e.status===`Sedang Diantar`?`
            <div class="mt-2.5 p-2.5 bg-blue-50 border border-blue-100 rounded-xl flex items-center gap-3 w-full">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" alt="Kurir" class="w-8 h-8 rounded-full object-cover border border-blue-200" />
              <div class="flex-1 min-w-0">
                <div class="text-[9px] font-bold text-slate-800">Asep Kurir (Katering Delivery)</div>
                <div class="text-[8px] text-blue-600 font-semibold mt-0.5"><i class="ph ph-phone inline"></i> +62 812-3456-7890 • Hubungi Kurir</div>
              </div>
            </div>
          `:``}
        </div>
      </div>
    `});let i=l[e]&&!l[e].paused;return`
    <div class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end justify-center p-0 md:p-4 animate-fade-in" onclick="window.closeActiveModals()">
      <div class="bg-white w-full max-w-lg rounded-t-3xl md:rounded-3xl overflow-hidden shadow-2xl animate-slide-up flex flex-col max-h-[92vh]" onclick="event.stopPropagation()">
        
        <div class="p-6 border-b border-slate-100 flex items-center justify-between">
          <div>
            <span class="bg-emerald-50 text-emerald-700 text-[9px] font-extrabold px-2.5 py-0.5 rounded-full border border-emerald-100 uppercase tracking-wider mb-1 inline-block">Status Katering</span>
            <h3 class="text-base font-extrabold text-slate-900 font-serif">Pelacakan Pengiriman</h3>
            <p class="text-[10px] text-slate-400 mt-0.5">Order ID: ${t.id} • ${t.providerName}</p>
          </div>
          <button onclick="window.closeActiveModals()" class="w-8 h-8 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center hover:bg-slate-200 transition-colors cursor-pointer">
            <i class="ph ph-x text-lg"></i>
          </button>
        </div>
        
        <div class="p-6 overflow-y-auto flex-1 scrollbar-none space-y-6">
          <div class="pl-1.5 pt-2">
            ${r}
          </div>
          
          <div class="bg-slate-50 rounded-2xl p-4 border border-slate-100 flex gap-3 text-slate-600">
            <i class="ph-fill ph-map-pin text-xl text-primary flex-shrink-0 mt-0.5"></i>
            <div>
              <h5 class="text-xs font-bold text-slate-800">Alamat Pengantaran</h5>
              <p class="text-[10px] text-slate-500 mt-1 leading-normal">${t.address}</p>
            </div>
          </div>

          <div class="bg-slate-100 rounded-2xl p-4 border border-slate-200 space-y-3">
            <div class="flex justify-between items-center">
              <span class="text-[10px] font-bold text-slate-600 uppercase tracking-wider flex items-center gap-1">
                <i class="ph ph-game-controller text-sm text-primary"></i> Panel Simulasi Katering (Sandbox)
              </span>
              <span class="text-[8px] bg-slate-200 px-2 py-0.5 rounded text-slate-500 font-mono">DIPERLUKAN TESTING</span>
            </div>
            
            <div class="grid grid-cols-2 gap-2">
              <button onclick="window.simStepPrevious('${t.id}')" class="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-bold text-[10px] py-2 px-3 rounded-xl transition-colors flex items-center justify-center gap-1 cursor-pointer">
                <i class="ph ph-skip-back text-xs"></i> Tahap Sebelumnya
              </button>
              <button onclick="window.simStepNext('${t.id}')" class="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-bold text-[10px] py-2 px-3 rounded-xl transition-colors flex items-center justify-center gap-1 cursor-pointer">
                Tahap Selanjutnya <i class="ph ph-skip-forward text-xs"></i>
              </button>
            </div>
            
            <div class="flex items-center justify-between pt-1">
              <div class="text-[9px] text-slate-500 flex items-center gap-1">
                <span class="w-1.5 h-1.5 rounded-full ${i?`bg-emerald-500 animate-pulse`:`bg-slate-400`}"></span>
                Auto-Advance (8s): <strong>${i?`Aktif`:`Nonaktif`}</strong>
              </div>
              
              <button onclick="window.simToggleAuto('${t.id}')" class="text-[9px] font-extrabold text-primary hover:underline cursor-pointer">
                ${i?`Jeda Simulasi`:`Jalankan Simulasi`}
              </button>
            </div>

            <div class="pt-2 border-t border-slate-200/60">
              <span class="text-[8px] font-bold text-slate-500 uppercase tracking-wider block mb-1.5">Lompat Ke Status:</span>
              <div class="flex flex-wrap gap-1">
                ${L.map(e=>{let n=e.status===t.status;return`
                    <button onclick="window.simJumpToStatus('${t.id}', '${e.status}')" class="px-2 py-0.5 rounded text-[8px] font-semibold transition-all cursor-pointer ${n?`bg-primary text-white`:`bg-white hover:bg-slate-50 text-slate-600 border border-slate-200`}">
                      ${e.status.split(` `)[0]}
                    </button>
                  `}).join(``)}
              </div>
            </div>
          </div>
        </div>
        
        <div class="p-5 border-t border-slate-100 bg-slate-50/50 flex gap-2">
          <button onclick="alert('Pihak Catering telah dihubungi via Chat.')" class="flex-1 border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs py-3 rounded-xl transition-colors flex items-center justify-center gap-1 cursor-pointer">
            <i class="ph ph-chat-teardrop text-base text-primary"></i> Hubungi Toko
          </button>
          <button onclick="window.closeActiveModals()" class="flex-1 bg-primary hover:bg-primary-light text-white font-bold text-xs py-3 rounded-xl transition-all shadow-md shadow-primary/10 cursor-pointer">
            Selesai
          </button>
        </div>
      </div>
    </div>
  `}window.simStepPrevious=function(e){let t=a.orders.find(t=>t.id===e);if(!t)return;let n=L.map(e=>e.status),r=n.indexOf(t.status);if(r>0){t.status=n[r-1];for(let e=r;e<n.length;e++)t.statusHistory&&delete t.statusHistory[n[e]];s(),h()}},window.simStepNext=function(e){let t=a.orders.find(t=>t.id===e);if(!t)return;let n=L.map(e=>e.status),r=n.indexOf(t.status);if(r<n.length-1){let e=n[r+1];t.status=e,t.statusHistory||={},t.statusHistory[e]=o(),s(),u(t.id,t.providerName,e),h()}},window.simToggleAuto=function(e){l[e]?l[e].paused=!l[e].paused:d(e),h()},window.simJumpToStatus=function(e,t){let n=a.orders.find(t=>t.id===e);if(!n)return;let r=L.map(e=>e.status),i=r.indexOf(t);i!==-1&&(n.status=t,n.statusHistory||={},r.forEach((e,t)=>{t<=i?n.statusHistory[e]||(n.statusHistory[e]=o()):delete n.statusHistory[e]}),s(),u(n.id,n.providerName,t),t===`Sudah Sampai Tujuan`||t===`Menunggu Pembayaran`?l[e]&&(clearInterval(l[e].intervalId),delete l[e]):l[e]||d(e),h())};function B(e){return`
    <div class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end justify-center p-0 md:p-4 animate-fade-in" onclick="window.closeActiveModals()">
      <div class="bg-white w-full max-w-lg rounded-t-3xl md:rounded-3xl overflow-hidden shadow-2xl animate-slide-up flex flex-col max-h-[85vh]" onclick="event.stopPropagation()">
        <div class="h-44 md:h-52 relative bg-slate-200">
          <img src="${e.image}" alt="${e.name}" class="w-full h-full object-cover" />
          <div class="absolute top-4 right-4 bg-white/95 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-slate-800 shadow">
            Minimal Order ${e.minOrder} Pax
          </div>
          <button onclick="window.closeActiveModals()" class="absolute top-4 left-4 w-9 h-9 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/75 transition-colors cursor-pointer">
            <i class="ph ph-x text-xl font-bold"></i>
          </button>
        </div>
        
        <div class="p-6 overflow-y-auto flex-1 scrollbar-none">
          <h3 class="text-lg font-extrabold text-slate-900 leading-tight font-serif">${e.name}</h3>
          <p class="text-xs text-primary font-black mt-1">Rp ${e.price.toLocaleString(`id-ID`)} <span class="text-slate-400 font-normal">/ pax</span></p>
          
          <div class="mt-4 pt-4 border-t border-slate-100">
            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">Deskripsi Paket</h4>
            <p class="text-xs text-slate-600 leading-relaxed">${e.desc}</p>
          </div>
          
          <div class="mt-6">
            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
              <i class="ph ph-list-bullets text-primary text-base"></i> Daftar Menu Hidangan Lengkap
            </h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              ${e.menu.map(e=>`
                <div class="flex items-start gap-2 bg-slate-50 border border-slate-100 p-2.5 rounded-xl">
                  <div class="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 text-xs">
                    <i class="ph ph-check"></i>
                  </div>
                  <span class="text-xs font-medium text-slate-700 leading-tight">${e}</span>
                </div>
              `).join(``)}
            </div>
          </div>
          
          <div class="mt-6 p-4 rounded-2xl bg-amber-50 border border-amber-100 flex gap-3 text-amber-800">
            <i class="ph ph-info text-2xl flex-shrink-0 mt-0.5"></i>
            <div>
              <h5 class="text-xs font-bold">Informasi Pengantaran & Penyajian</h5>
              <p class="text-[10px] text-amber-800/90 mt-0.5 leading-normal">Katering dikirim dengan pemanas makanan wadah stainless steel eksklusif (gratis peminjaman untuk prasmanan). Order harus dilakukan minimal H-3 sebelum acara.</p>
            </div>
          </div>
        </div>
        
        <div class="p-5 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between gap-4">
          <div>
            <span class="text-[10px] text-slate-400 block">Total Min. Transaksi</span>
            <span class="text-sm font-extrabold text-slate-900">Rp ${(e.price*e.minOrder).toLocaleString(`id-ID`)}</span>
          </div>
          <button onclick="window.addToCartAndCheckout('${a.selectedProviderId}', '${e.id}')" class="bg-primary hover:bg-primary-light text-white text-xs font-bold px-6 py-3.5 rounded-xl transition-all shadow-md shadow-primary/10 cursor-pointer">
            Pesan Paket Ini
          </button>
        </div>
      </div>
    </div>
  `}window.selectCategory=function(e){m(`providers`,{category:e});let t=n.filter(t=>t.categories.includes(e));t.length>0?a.activeMapMarkerId=t[0].id:a.activeMapMarkerId=null,h(),setTimeout(()=>{a.activeMapMarkerId&&V(a.activeMapMarkerId)},100)},window.goBackToHome=function(){m(`home`)},window.navigateToAccount=function(){a.currentUser?m(`account`):m(`login`)},window.goBackToProviders=function(){m(`providers`)},window.selectProvider=function(e){m(`packages`,{providerId:e})},window.selectProviderFromMap=function(e){a.activeMapMarkerId=e,h(),V(e)},window.selectProviderFromList=function(e){a.activeMapMarkerId=e,h()};function V(e){let t=document.getElementById(`provider-card-${e}`),n=document.getElementById(`drawer-cards-container`);if(t&&n){let e=t.offsetLeft,r=n.offsetWidth,i=t.offsetWidth;n.scrollTo({left:e-r/2+i/2,behavior:`smooth`})}}window.openPackageDetail=function(e,t){let r=n.find(t=>t.id===e)?.packages.find(e=>e.id===t);m(`packages`,{providerId:e,package:r})},window.closePackageDetail=function(){a.selectedPackage=null,h()},window.closeActiveModals=function(){a.selectedPackage=null,a.activePaymentOrderId=null,a.activeTrackingOrderId=null,h()},window.handleOrderCardClick=function(e){let t=a.orders.find(t=>t.id===e);t&&(t.status===`Menunggu Pembayaran`?window.openPaymentModal(e):window.openTrackingModal(e))},window.openPaymentModal=function(e){a.activePaymentOrderId=e,h()},window.openTrackingModal=function(e){a.activeTrackingOrderId=e,h()},window.addToCartAndCheckout=function(e,t){let r=n.find(t=>t.id===e)?.packages.find(e=>e.id===t);a.cart=[{providerId:e,packageId:t,package:r,quantity:r.minOrder,notes:``}],a.currentUser?m(`checkout`):(alert(`Anda harus masuk (login) terlebih dahulu untuk melanjutkan pemesanan katering.`),a.redirectAfterLogin=`checkout`,m(`login`))},window.updateQuantity=function(e){if(a.cart.length===0)return;let t=a.cart[0].package;if(e<t.minOrder){alert(`Pemesanan minimal untuk paket ini adalah ${t.minOrder} Pax.`);return}a.cart[0].quantity=e,h()},window.updateNotes=function(e){a.cart.length>0&&(a.cart[0].notes=e)},window.placeOrder=function(e){let t=a.cart[0],r=n.find(e=>e.id===t.providerId),i=`ORD-`+Math.floor(1e4+Math.random()*9e4)+`-ID`,c={id:i,date:`Hari ini`,providerName:r.name,packageName:t.package.name,quantity:t.quantity,totalPrice:parseInt(e),status:`Menunggu Pembayaran`,statusHistory:{"Menunggu Pembayaran":o()},address:a.userAddress};a.orders=[c,...a.orders],a.cart=[],a.activePaymentOrderId=i,s(),alert(`Pesanan katering Anda berhasil dibuat! Selesaikan pembayaran agar pesanan Anda dapat diproses oleh mitra.`),m(`orders`)},window.reorder=function(e){let t=n.find(t=>t.name===e);t?window.selectProvider(t.id):m(`home`)},window.openAddressModal=function(){let e=prompt(`Masukkan alamat pengantaran katering baru:`,a.userAddress);if(e&&e.trim()!==``){if(a.userAddress=e,a.currentUser){a.currentUser.address=e;let t=a.users.find(e=>e.email.toLowerCase()===a.currentUser.email.toLowerCase());t&&(t.address=e)}s(),h()}},window.locateUser=function(){alert(`Menyelaraskan koordinat GPS... Lokasi berhasil diperbarui.`)},window.claimPromo=function(e){navigator.clipboard.writeText(e),alert(`Kode promo "${e}" berhasil disalin! Tempelkan pada catatan pesanan.`)},h();