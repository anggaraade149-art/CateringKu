import './style.css'

// 1. DATA SIMULASI (MOCK DATA)
const CATEGORIES = {
  pernikahan: { id: 'pernikahan', name: 'Catering Pernikahan', icon: 'ph-fill ph-heart', desc: 'Paket lengkap pesta pernikahan mewah & romantis' },
  prasmanan: { id: 'prasmanan', name: 'Catering Prasmanan', icon: 'ph-fill ph-bowl-food', desc: 'Sajian prasmanan prasasti untuk berbagai acara' },
  perusahaan: { id: 'perusahaan', name: 'Catering Perusahaan', icon: 'ph-fill ph-buildings', desc: 'Konsumsi meeting, event, & harian karyawan' },
  nasibox: { id: 'nasibox', name: 'Catering Nasi Box', icon: 'ph-fill ph-package', desc: 'Nasi kotak praktis, higienis, & lezat' },
  harian: { id: 'harian', name: 'Catering Harian', icon: 'ph-fill ph-calendar-star', desc: 'Makanan rumah sehat berlangganan' }
};

const DEFAULT_PROVIDERS = [
  {
    id: 'raja',
    name: 'Raja Catering',
    categories: ['pernikahan', 'prasmanan', 'perusahaan'],
    rating: 4.8,
    reviews: 184,
    distance: 1.2,
    address: 'Jl. Pemuda No. 12, Jakarta Timur',
    ownerEmail: 'owner@cateringku.com',
    coords: { x: 45, y: 38 },
    desc: 'Spesialis katering berskala besar dengan cita rasa masakan nusantara premium dan dekorasi prasmanan mewah.',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    minPrice: 45000,
    customMenuEnabled: true,
    liveCookingEnabled: true,
    packages: [
      {
        id: 'raja-a',
        name: 'Paket Prasmanan A (Hemat)',
        price: 45000,
        minOrder: 100,
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=60',
        menu: ['Nasi Putih Premium', 'Sop Kimlo Hangat', 'Ayam Goreng Mentega Gurih', 'Kakap Asam Manis Krispi', 'Kerupuk Udang', 'Sambal Merah Spesial', 'Es Buah Segar'],
        desc: 'Paket prasmanan lezat dengan harga bersahabat, cocok untuk arisan keluarga, syukuran, atau ulang tahun.'
      },
      {
        id: 'raja-b',
        name: 'Paket Prasmanan B (Premium)',
        price: 75000,
        minOrder: 100,
        image: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=600&auto=format&fit=crop&q=60',
        menu: ['Nasi Putih / Nasi Goreng Butter', 'Sop Bakso Sosis Komplet', 'Daging Sapi Lada Hitam / Teriyaki', 'Kakap Saus Padang', 'Sate Ayam Madura (2 tusuk/pax)', 'Kerupuk Udang & Emping', 'Sambal Hejo & Sambal Merah', 'Es Manado Segar', 'Buah Potong Segar (Semangka, Melon)'],
        desc: 'Menu prasmanan lengkap dengan variasi hidangan daging sapi pilihan dan sate, menghadirkan kemewahan cita rasa.'
      },
      {
        id: 'raja-c',
        name: 'Paket Pernikahan Silver',
        price: 95000,
        minOrder: 200,
        image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=600&auto=format&fit=crop&q=60',
        menu: ['Nasi Putih & Nasi Goreng Hongkong', 'Sup Buntut Sapi Premium', 'Rolade Daging Saus Cokelat', 'Udang Saus Padang Pedas Manis', 'Ayam Panggang Bumbu Rujak', 'Salad Solo Segar', 'Es Doger Tradisional', 'Aneka Pudding Gelas Cantik', 'Air Mineral Cup'],
        desc: 'Paket katering pernikahan silver yang ekonomis namun tetap berkelas, lengkap dengan gubukan/stall hidangan penutup.'
      }
    ]
  },
  {
    id: 'budi',
    name: 'Budi Catering',
    categories: ['nasibox', 'harian', 'prasmanan'],
    rating: 4.6,
    reviews: 95,
    distance: 2.4,
    address: 'Jl. Merdeka Barat No. 89, Jakarta Pusat',
    coords: { x: 30, y: 55 },
    desc: 'Penyedia nasi box higienis dan katering harian terpercaya dengan cita rasa masakan rumah autentik & bernutrisi.',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    minPrice: 22000,
    customMenuEnabled: true,
    liveCookingEnabled: false,
    packages: [
      {
        id: 'budi-a',
        name: 'Paket Nasi Box Ekonomis',
        price: 22000,
        minOrder: 20,
        image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=600&auto=format&fit=crop&q=60',
        menu: ['Nasi Kuning Wangi', 'Ayam Goreng Serundeng', 'Sambal Goreng Kentang Ati Ampela', 'Telur Balado Pedas', 'Lalap Timun Segar', 'Sambal Korek Korek'],
        desc: 'Nasi box kuning tumpeng mini praktis untuk acara syukuran kantor atau bekal rapat.'
      },
      {
        id: 'budi-b',
        name: 'Paket Nasi Box Tumpeng Mini Premium',
        price: 35000,
        minOrder: 15,
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&auto=format&fit=crop&q=60',
        menu: ['Nasi Timbel Wangi Daun Pisang', 'Ayam Bakar Madu Lunak', 'Empal Gepuk Sapi Gurih', 'Tahu & Tempe Goreng Bandung', 'Sayur Asem Segar (Cup Terpisah)', 'Lalapan Daun Kemangi & Labu Siam', 'Sambal Terasi Dadak Ulek'],
        desc: 'Nasi timbel komplit dengan lauk empal sapi dan ayam bakar madu dibalut daun pisang yang harum.'
      },
      {
        id: 'budi-c',
        name: 'Langganan Harian Family (3 Porsi)',
        price: 65000,
        minOrder: 1, // Berarti per hari
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&auto=format&fit=crop&q=60',
        menu: ['Lauk Utama Berganti Setiap Hari (Ayam/Daging/Ikan)', 'Lauk Pendamping (Tahu/Tempe/Sayur Tumis/Sayur Kuah)', 'Sambal & Kerupuk Kaleng', 'Porsi pas untuk makan malam keluarga beranggotakan 3 orang.'],
        desc: 'Langganan katering harian keluarga. Menu bervariasi setiap hari agar tidak bosan, diantar hangat sebelum jam makan malam.'
      }
    ]
  },
  {
    id: 'cinta',
    name: 'Cinta Catering',
    categories: ['pernikahan', 'prasmanan', 'harian'],
    rating: 4.9,
    reviews: 320,
    distance: 3.1,
    address: 'Jl. Boulevard Raya Blok DG-12, Kelapa Gading',
    coords: { x: 62, y: 28 },
    desc: 'Catering premium spesialis pesta pernikahan romantis dan gathering perusahaan eksklusif dengan tim plating profesional.',
    image: 'https://images.unsplash.com/photo-1478147427282-58a87a120781?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    minPrice: 115000,
    customMenuEnabled: false,
    liveCookingEnabled: true,
    packages: [
      {
        id: 'cinta-a',
        name: 'Wedding Gold Package',
        price: 115000,
        minOrder: 300,
        image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&auto=format&fit=crop&q=60',
        menu: ['Nasi Putih Jasmine', 'Sup Ayam Jamur Tiram', 'Daging Lada Hitam Paprika', 'Ayam Rica-Rica Kemangi', 'Gurame Asam Manis Nanas', 'Cah Jagung Muda Brokoli', 'Es Krim Cup Strawberry/Cokelat', 'Aneka Mini Pastry & Roll Cake', 'Soft Drink / Orange Juice', 'Air Mineral Gelas'],
        desc: 'Pilihan paket pernikahan terpopuler dengan kombinasi menu oriental-nusantara yang lezat dan berkelas.'
      },
      {
        id: 'cinta-b',
        name: 'Wedding Platinum Royal Package',
        price: 160000,
        minOrder: 400,
        image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&auto=format&fit=crop&q=60',
        menu: ['Nasi Putih & Nasi Kebuli Kambing', 'Sup Kimlo Jamur Kuping Spesial', 'Roast Beef Blackpepper Sauce (Stall)', 'Dimsum Ayam Kukus Hangat (Stall)', 'Kambing Guling Utuh Oven (Stall)', 'Sate Padang Daging Sapi (Stall)', 'Es Doger Kelapa Muda & Alpukat', 'Aneka Pudding Susu Flas Varian Rasa', 'Air Mineral Botol Mini'],
        desc: 'Paket pernikahan katering termewah kami dengan 4 gubukan stall makanan premium yang siap memanjakan lidah para tamu agung.'
      }
    ]
  },
  {
    id: 'sunda',
    name: 'Dapur Sunda Catering',
    categories: ['nasibox', 'prasmanan'],
    rating: 4.5,
    reviews: 58,
    distance: 4.2,
    address: 'Jl. Riau No. 45, Bandung (Cabang Jakarta)',
    coords: { x: 22, y: 35 },
    desc: 'Sajian hidangan khas Sunda autentik dengan lalapan melimpah, nasi liwet wangi daun jeruk, dan sambal ulek dadakan super pedas.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    minPrice: 25000,
    packages: [
      {
        id: 'sunda-a',
        name: 'Nasi Liwet Sunda Box',
        price: 25000,
        minOrder: 25,
        image: 'https://images.unsplash.com/photo-1616030846238-c8a32d72b08a?w=600&auto=format&fit=crop&q=60',
        menu: ['Nasi Liwet Gurih Peda Merah', 'Ayam Goreng Basah Lengkuas', 'Pencok Kacang Panjang Sunda', 'Tahu & Tempe Goreng Garing', 'Sambal Goang Pedas Gila', 'Lalap Daun Pohpohan & Terong Gelatik', 'Kerupuk Putih Aci'],
        desc: 'Nasi kotak khas Sunda dengan nasi liwet gurih yang kaya rempah, pas untuk santap siang rapat bernuansa lokal.'
      }
    ]
  },
  {
    id: 'fit',
    name: 'Fit & Fresh Clean Catering',
    categories: ['harian', 'perusahaan'],
    rating: 4.7,
    reviews: 112,
    distance: 5.0,
    address: 'Kawasan Bisnis Sudirman Kav. 21, Jakarta Selatan',
    coords: { x: 78, y: 68 },
    desc: 'Katering sehat bersertifikat, dipantau oleh nutrisionis profesional untuk menjaga asupan kalori harian Anda agar tetap seimbang.',
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    minPrice: 70000,
    packages: [
      {
        id: 'fit-a',
        name: 'Paket Diet Sehat Weight Loss (5 Hari)',
        price: 350000,
        minOrder: 1,
        image: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?w=600&auto=format&fit=crop&q=60',
        menu: ['Menu Makan Siang & Malam Sehat Rendah Kalori', 'Daging Dada Ayam Panggang Rosemary / Ikan Salmon Panggang', 'Karbohidrat Kompleks (Nasi Merah/Hitam/Ubi Ungu)', 'Sayur Rebus Organik / Salad dressing Minyak Zaitun', 'Buah Segar Pendamping', 'Bebas MSG, Rendah Natrium, Rendah Minyak Jenuh'],
        desc: 'Program katering sehat selama 5 hari (Senin-Jumat) untuk membantu penurunan berat badan secara berkala tanpa menyiksa.'
      }
    ]
  }
];

let PROVIDERS = [...DEFAULT_PROVIDERS];

const DEFAULT_USERS = [
  {
    email: 'user@cateringku.com',
    password: 'user123',
    name: 'Budi Handoko',
    phone: '08123456789',
    address: 'Jl. Jenderal Sudirman No. 45, Semanggi, Jakarta Selatan',
    role: 'user'
  },
  {
    email: 'owner@cateringku.com',
    password: 'owner123',
    name: 'Adi Owner Catering',
    phone: '08129876543',
    address: 'Jl. Pemuda No. 12, Pulo Gadung, Jakarta Timur',
    role: 'owner'
  },
  {
    email: 'admin@cateringku.com',
    password: 'admin123',
    name: 'Admin Cateringku',
    phone: '08999999999',
    address: 'Kantor Pusat Cateringku, Jakarta',
    role: 'admin'
  }
];

const PROMOS = [
  { id: 'p1', title: 'Diskon Pernikahan 15%', desc: 'Gunakan kode NIKAHYUK untuk potongan s.d Rp 2 Juta', code: 'NIKAHYUK', color: 'from-amber-600 to-amber-800' },
  { id: 'p2', title: 'Gratis Ongkir Event Perusahaan', desc: 'Bebas ongkos kirim seluruh area Jabodetabek min. 100 pax', code: 'FREEONGKIR', color: 'from-primary-dark to-primary-light' },
  { id: 'p3', title: 'Hemat Harian s.d Rp 100rb', desc: 'Berlangganan katering harian hemat khusus bulan ini', code: 'HEMATHARIAN', color: 'from-orange-600 to-red-800' }
];

const CUSTOM_MENU_ITEMS = [
  { id: 'u1', category: 'utama', name: 'Ayam Goreng Lengkuas', price: 12000 },
  { id: 'u2', category: 'utama', name: 'Ayam Bakar Madu', price: 13000 },
  { id: 'u3', category: 'utama', name: 'Daging Sapi Lada Hitam', price: 18000 },
  { id: 'u4', category: 'utama', name: 'Empal Gepuk Sapi', price: 16000 },
  { id: 'u5', category: 'utama', name: 'Kakap Asam Manis', price: 14000 },

  { id: 'p1', category: 'pendamping', name: 'Sambal Goreng Kentang Ati', price: 6000 },
  { id: 'p2', category: 'pendamping', name: 'Telur Balado Pedas', price: 5000 },
  { id: 'p3', category: 'pendamping', name: 'Perkedel Kentang', price: 4000 },
  { id: 'p4', category: 'pendamping', name: 'Tahu & Tempe Bacem Gurih', price: 3000 },

  { id: 's1', category: 'sayur', name: 'Sayur Asem Segar Solo', price: 5000 },
  { id: 's2', category: 'sayur', name: 'Cah Jagung Muda Brokoli', price: 6000 },
  { id: 's3', category: 'sayur', name: 'Mie Goreng Ulang Tahun', price: 4000 },
  { id: 's4', category: 'sayur', name: 'Tumis Buncis Wortel Bakso', price: 4500 },

  { id: 'c1', category: 'pelengkap', name: 'Sambal Terasi Ulek Dadak', price: 1500 },
  { id: 'c2', category: 'pelengkap', name: 'Sambal Korek Super Pedas', price: 1500 },
  { id: 'c3', category: 'pelengkap', name: 'Sambal Goang Daun Jeruk', price: 1500 },
  { id: 'c4', category: 'pelengkap', name: 'Kerupuk Aci Putih Kaleng', price: 1000 }
];

// 2. STATE APLIKASI
let state = {
  currentView: 'home', // 'home', 'providers', 'packages', 'checkout', 'orders', 'chat', 'login', 'register', 'account', 'admin', 'owner'
  selectedCategory: 'pernikahan',
  selectedProviderId: 'raja',
  selectedPackage: null,
  cart: [], // array berisi { providerId, packageId, package, quantity, notes, liveCookingSelected }
  orders: [
    {
      id: 'ORD-98218-XYZ',
      date: '19 Mei 2026',
      providerName: 'Raja Catering',
      packageName: 'Paket Prasmanan A (Hemat)',
      quantity: 120,
      totalPrice: 5400000 + 150000 + 5000,
      status: 'Sudah Sampai Tujuan',
      statusHistory: {
        'Menunggu Pembayaran': '10:00 WIB',
        'Pembayaran Terkonfirmasi': '10:05 WIB',
        'Menyiapkan Bahan': '10:10 WIB',
        'Mulai Memasak': '10:30 WIB',
        'Mulai Mengemas': '11:15 WIB',
        'Sedang Diantar': '11:30 WIB',
        'Sudah Sampai Tujuan': '12:05 WIB'
      },
      address: 'Gedung Serbaguna RW 04, Menteng, Jakarta Pusat'
    }
  ],
  userAddress: 'Jl. Jenderal Sudirman No. 45, Semanggi, Jakarta Selatan',
  activeMapMarkerId: null,
  activePaymentOrderId: null,
  activeTrackingOrderId: null,
  users: [...DEFAULT_USERS],
  currentUser: null,
  providers: [...DEFAULT_PROVIDERS],
  cateringRegistrations: [],
  providerSortBy: 'default',
  tempReviewRating: 5,
  activeReviewOrderId: null,
  customMenuWizardProviderId: null,
  customMenuWizardStep: 1,
  customMenuSelectedSize: null,
  customMenuSelectedItems: [],
  ownerActiveTab: 'dashboard',
  inventory: [
    { name: 'Beras Premium', stock: 150, unit: 'kg', minStock: 50, perPax: 0.1 },
    { name: 'Daging Ayam Fillet', stock: 80, unit: 'kg', minStock: 30, perPax: 0.12 },
    { name: 'Daging Sapi Lada Hitam', stock: 45, unit: 'kg', minStock: 20, perPax: 0.1 },
    { name: 'Sayuran Segar (Wortel/Brokoli)', stock: 60, unit: 'kg', minStock: 25, perPax: 0.08 },
    { name: 'Bumbu & Rempah Pilihan', stock: 35, unit: 'kg', minStock: 15, perPax: 0.02 },
    { name: 'Minyak Goreng', stock: 120, unit: 'liter', minStock: 40, perPax: 0.05 },
    { name: 'Telur Ayam', stock: 50, unit: 'kg', minStock: 15, perPax: 0.06 }
  ],
  productionShifts: {}
};

// PREMIUM CUSTOM DIALOG SYSTEM
window.showAlert = function (title, message, onClose) {
  const modalDiv = document.createElement('div');
  modalDiv.className = 'fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in';
  modalDiv.innerHTML = `
    <div class="bg-white w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl p-6 space-y-4 transform scale-95 transition-all duration-300">
      <div class="flex items-center gap-3 text-primary">
        <div class="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-xl flex-shrink-0">
          <i class="ph-fill ph-info text-primary"></i>
        </div>
        <h3 class="text-base font-extrabold text-slate-900 font-serif">${title}</h3>
      </div>
      <p class="text-xs text-slate-500 leading-relaxed">${message}</p>
      <div class="flex pt-2">
        <button id="alert-btn-ok" class="w-full bg-primary hover:bg-primary-light text-white font-bold text-xs py-3 rounded-xl transition-colors shadow-md shadow-primary/10 cursor-pointer">OK</button>
      </div>
    </div>
  `;
  document.body.appendChild(modalDiv);

  setTimeout(() => {
    modalDiv.querySelector('div').classList.remove('scale-95');
  }, 10);

  const cleanup = () => {
    modalDiv.querySelector('div').classList.add('scale-95');
    modalDiv.classList.add('opacity-0');
    setTimeout(() => {
      modalDiv.remove();
    }, 300);
  };

  modalDiv.querySelector('#alert-btn-ok').onclick = () => {
    cleanup();
    if (onClose) onClose();
  };
};

window.showConfirm = function (title, message, onConfirm, onCancel) {
  const modalDiv = document.createElement('div');
  modalDiv.className = 'fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in';
  modalDiv.innerHTML = `
    <div class="bg-white w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl p-6 space-y-4 transform scale-95 transition-all duration-300">
      <div class="flex items-center gap-3 text-primary">
        <div class="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-xl flex-shrink-0">
          <i class="ph-fill ph-question text-primary"></i>
        </div>
        <h3 class="text-base font-extrabold text-slate-900 font-serif">${title}</h3>
      </div>
      <p class="text-xs text-slate-500 leading-relaxed">${message}</p>
      <div class="flex gap-2 pt-2">
        <button id="confirm-btn-cancel" class="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs py-3 rounded-xl transition-colors cursor-pointer">Batal</button>
        <button id="confirm-btn-ok" class="flex-1 bg-primary hover:bg-primary-light text-white font-bold text-xs py-3 rounded-xl transition-colors shadow-md shadow-primary/10 cursor-pointer">Konfirmasi</button>
      </div>
    </div>
  `;
  document.body.appendChild(modalDiv);

  setTimeout(() => {
    modalDiv.querySelector('div').classList.remove('scale-95');
  }, 10);

  const cleanup = () => {
    modalDiv.querySelector('div').classList.add('scale-95');
    modalDiv.classList.add('opacity-0');
    setTimeout(() => {
      modalDiv.remove();
    }, 300);
  };

  modalDiv.querySelector('#confirm-btn-cancel').onclick = () => {
    cleanup();
    if (onCancel) onCancel();
  };

  modalDiv.querySelector('#confirm-btn-ok').onclick = () => {
    cleanup();
    if (onConfirm) onConfirm();
  };
};

// HELPER FUNCTIONS & SIMULASI STATUS KATERING
function getCurrentTimeStr() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  return `${hours}:${minutes} WIB`;
}

function saveStateToLocalStorage() {
  state.providers = PROVIDERS;
  localStorage.setItem('cateringku_state', JSON.stringify(state));
}

function loadStateFromLocalStorage() {
  const saved = localStorage.getItem('cateringku_state');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      state = { ...state, ...parsed };
      if (state.providers) {
        PROVIDERS = state.providers;
      }
      if (state.currentUser && state.currentUser.address) {
        state.userAddress = state.currentUser.address;
      }
    } catch (e) {
      console.error("Failed to parse saved state", e);
    }
  }
}

// Global simulation timer cache
let orderSimulations = {};

function showToast(orderId, providerName, status) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'fixed top-20 right-4 z-50 flex flex-col gap-2.5 w-80 pointer-events-none';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'bg-white rounded-2xl shadow-xl border-l-4 border-primary p-4 pointer-events-auto flex items-start gap-3 animate-fade-in translate-x-12 opacity-0 transition-all duration-300';

  let statusIcon = 'ph-fill ph-bell';
  let message = '';
  let colorClass = 'text-primary';

  switch (status) {
    case 'Pembayaran Terkonfirmasi':
      statusIcon = 'ph-fill ph-check-circle';
      colorClass = 'text-emerald-500';
      message = 'Pembayaran terkonfirmasi! Pesanan akan segera diproses.';
      break;
    case 'Menyiapkan Bahan':
      statusIcon = 'ph-fill ph-leaf';
      colorClass = 'text-lime-600';
      message = 'Mitra katering sedang menyiapkan bahan-bahan segar.';
      break;
    case 'Mulai Memasak':
      statusIcon = 'ph-fill ph-fire';
      colorClass = 'text-orange-500';
      message = 'Dapur katering mulai memasak hidangan Anda!';
      break;
    case 'Mulai Mengemas':
      statusIcon = 'ph-fill ph-package';
      colorClass = 'text-amber-600';
      message = 'Makanan sedang dikemas dengan rapi & higienis.';
      break;
    case 'Sedang Diantar':
      statusIcon = 'ph-fill ph-moped';
      colorClass = 'text-blue-500';
      message = 'Kurir sedang mengantarkan pesanan ke lokasi Anda.';
      break;
    case 'Sudah Sampai Tujuan':
      statusIcon = 'ph-fill ph-house-line';
      colorClass = 'text-emerald-600';
      message = 'Hore! Pesanan Anda sudah sampai di tujuan.';
      break;
  }

  toast.innerHTML = `
    <div class="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 text-lg ${colorClass}">
      <i class="${statusIcon}"></i>
    </div>
    <div class="flex-1 min-w-0">
      <h4 class="text-xs font-bold text-slate-900">${providerName}</h4>
      <p class="text-[10px] text-slate-500 mt-0.5">${message}</p>
      <span class="text-[9px] text-slate-400 mt-1 block font-mono">${orderId}</span>
    </div>
    <button class="text-slate-400 hover:text-slate-600 text-xs self-start" onclick="this.parentElement.remove()">
      <i class="ph ph-x"></i>
    </button>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.remove('translate-x-12', 'opacity-0');
  }, 10);

  setTimeout(() => {
    toast.classList.add('translate-x-12', 'opacity-0');
    setTimeout(() => toast.remove(), 300);
  }, 5000);
}

function startOrderSimulation(orderId) {
  if (orderSimulations[orderId]) return;

  const steps = [
    'Menunggu Pembayaran',
    'Pembayaran Terkonfirmasi',
    'Menyiapkan Bahan',
    'Mulai Memasak',
    'Mulai Mengemas',
    'Sedang Diantar',
    'Sudah Sampai Tujuan'
  ];

  const intervalId = setInterval(() => {
    const order = state.orders.find(o => o.id === orderId);
    if (!order) {
      clearInterval(intervalId);
      delete orderSimulations[orderId];
      return;
    }

    if (orderSimulations[orderId]?.paused) return;

    const currentIndex = steps.indexOf(order.status);
    if (currentIndex === -1 || currentIndex === steps.length - 1) {
      clearInterval(intervalId);
      delete orderSimulations[orderId];
      return;
    }

    const nextStatus = steps[currentIndex + 1];
    order.status = nextStatus;

    if (!order.statusHistory) order.statusHistory = {};
    order.statusHistory[nextStatus] = getCurrentTimeStr();

    showToast(order.id, order.providerName, nextStatus);
    saveStateToLocalStorage();
    renderApp();
  }, 8000);

  orderSimulations[orderId] = {
    intervalId: intervalId,
    paused: false
  };
}

function initActiveSimulations() {
  state.orders.forEach(order => {
    const isProcessing = order.status !== 'Menunggu Pembayaran' && order.status !== 'Sudah Sampai Tujuan';
    if (isProcessing) {
      startOrderSimulation(order.id);
    }
  });
}

loadStateFromLocalStorage();

if (!state.currentUser) {
  if (state.currentView !== 'landing' && state.currentView !== 'login' && state.currentView !== 'register') {
    state.currentView = 'landing';
  }
} else if (state.currentUser && (state.currentView === 'login' || state.currentView === 'register' || state.currentView === 'landing')) {
  state.currentView = state.currentUser.role === 'admin' ? 'admin' : (state.currentUser.role === 'owner' ? 'owner' : 'home');
}

initActiveSimulations();

// 3. SELEKTOR DOM UTAMA
const app = document.querySelector('#app');

// 4. ROUTER & RENDER ENGINE
function navigateTo(view, params = {}) {
  // Navigation Guard: if user is not logged in, they can only access 'landing', 'login', and 'register'
  if (!state.currentUser) {
    if (view !== 'landing' && view !== 'login' && view !== 'register') {
      state.currentView = 'login';
      saveStateToLocalStorage();
      renderApp();
      return;
    }
  } else {
    // If logged in, block login/register/landing views and redirect to dashboard
    if (view === 'login' || view === 'register' || view === 'landing') {
      state.currentView = state.currentUser.role === 'admin' ? 'admin' : (state.currentUser.role === 'owner' ? 'owner' : 'home');
      saveStateToLocalStorage();
      renderApp();
      return;
    }
  }

  state.currentView = view;
  if (params.category) state.selectedCategory = params.category;
  if (params.providerId) state.selectedProviderId = params.providerId;
  if (params.package) state.selectedPackage = params.package;

  if (view !== 'providers') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  saveStateToLocalStorage();
  renderApp();
}
window.navigateTo = navigateTo;


function renderApp() {
  let mainContent = '';

  switch (state.currentView) {
    case 'home':
      mainContent = renderHomeView();
      break;
    case 'providers':
      mainContent = renderProvidersView();
      break;
    case 'packages':
      mainContent = renderPackagesView();
      break;
    case 'checkout':
      mainContent = renderCheckoutView();
      break;
    case 'orders':
      mainContent = renderOrdersView();
      break;
    case 'chat':
      mainContent = renderChatView();
      break;
    case 'login':
      mainContent = renderLoginView();
      break;
    case 'register':
      mainContent = renderRegisterView();
      break;
    case 'account':
      mainContent = renderAccountView();
      break;
    case 'admin':
      mainContent = renderAdminView();
      break;
    case 'owner':
      mainContent = renderOwnerView();
      break;
    case 'landing':
      mainContent = renderLandingView();
      break;
    default:
      mainContent = renderHomeView();
  }

  const isFullView = state.currentView === 'admin' || state.currentView === 'owner' || state.currentView === 'landing' || state.currentView === 'login' || state.currentView === 'register';
  app.innerHTML = `
    <!-- Top Address/Navigation Bar -->
    ${renderTopBar()}
    
    <!-- Main Content Area -->
    <main class="${isFullView ? 'min-h-screen' : 'pb-24 pt-16 min-h-screen'}">
      ${mainContent}
    </main>
    
    <!-- Active Drawer / Modal Overlay -->
    ${renderActiveModal()}
    
    <!-- Bottom Mobile Navigation Bar -->
    ${renderBottomNavBar()}
  `;

  attachEventListeners();
}

function renderTopBar() {
  if (state.currentView === 'admin' || state.currentView === 'owner' || state.currentView === 'landing' || state.currentView === 'login' || state.currentView === 'register') {
    return '';
  }
  if (state.currentView === 'providers') {
    return `
      <header class="fixed top-0 left-0 right-0 z-40 bg-white shadow-sm border-b border-slate-100 h-16 flex items-center px-4 justify-between">
        <button onclick="window.goBackToHome()" class="w-10 h-10 rounded-full flex items-center justify-center text-slate-800 hover:bg-slate-100 transition-colors">
          <i class="ph ph-arrow-left text-2xl font-bold"></i>
        </button>
        <div class="flex-1 px-3 text-center">
          <h1 class="text-sm font-semibold text-slate-900">${CATEGORIES[state.selectedCategory].name}</h1>
          <p class="text-[10px] text-slate-500 truncate max-w-[200px] mx-auto"><i class="ph ph-map-pin text-primary inline"></i> ${state.userAddress}</p>
        </div>
        <button onclick="window.openAddressModal()" class="w-10 h-10 rounded-full flex items-center justify-center text-primary hover:bg-slate-100 transition-colors">
          <i class="ph ph-pencil-simple-line text-xl"></i>
        </button>
      </header>
    `;
  }

  if (state.currentView === 'packages') {
    const provider = PROVIDERS.find(p => p.id === state.selectedProviderId);
    return `
      <header class="fixed top-0 left-0 right-0 z-40 bg-white shadow-sm border-b border-slate-100 h-16 flex items-center px-4 justify-between">
        <button onclick="window.goBackToProviders()" class="w-10 h-10 rounded-full flex items-center justify-center text-slate-800 hover:bg-slate-100 transition-colors">
          <i class="ph ph-arrow-left text-2xl font-bold"></i>
        </button>
        <div class="flex-1 px-3 text-center">
          <h1 class="text-base font-bold text-slate-950 truncate max-w-[220px] mx-auto">${provider.name}</h1>
        </div>
        <div class="w-10 h-10 flex items-center justify-center">
          <i class="ph ph-storefront text-2xl text-primary"></i>
        </div>
      </header>
    `;
  }

  return `
    <header class="fixed top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-100 h-16 flex items-center justify-between px-6 shadow-sm">
      <div class="flex items-center gap-2">
        <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-primary to-primary-light flex items-center justify-center text-white shadow-lg shadow-primary/20">
          <i class="ph-fill ph-fork-knife text-xl"></i>
        </div>
        <span class="text-xl font-bold text-slate-900 tracking-tight font-serif">Catering<span class="text-primary">ku</span></span>
      </div>
      <button onclick="window.openAddressModal()" class="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 transition-all max-w-[200px] md:max-w-xs cursor-pointer">
        <i class="ph-fill ph-map-pin text-primary text-sm flex-shrink-0"></i>
        <span class="text-xs font-semibold truncate flex-1 text-left">${state.userAddress}</span>
        <i class="ph ph-caret-down text-slate-500 text-[10px] flex-shrink-0"></i>
      </button>
    </header>
  `;
}

function renderLandingView() {
  return `
    <div class="relative w-full h-screen overflow-hidden font-sans">
      <div class="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80" alt="Catering Background" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-black/60"></div>
      </div>
      
      <div class="relative z-10 flex flex-col h-full">
        <nav class="w-full flex items-center justify-between md:justify-center px-6 py-8 text-white text-sm md:text-base font-medium gap-4 md:gap-12">
          <a href="#" class="hidden md:block hover:text-amber-500 transition-colors">Makanan</a>
          <a href="#" class="hidden md:block hover:text-amber-500 transition-colors">Paket Catering</a>
          
          <div class="flex items-center gap-2 mx-auto md:mx-0 bg-white/95 px-5 py-2.5 rounded-2xl shadow-xl border border-slate-100/50">
            <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-primary to-primary-light flex items-center justify-center text-white shadow-lg shadow-primary/20">
              <i class="ph-fill ph-fork-knife text-xl"></i>
            </div>
            <span class="text-xl font-bold text-slate-900 tracking-tight font-serif">Catering<span class="text-primary">ku</span></span>
          </div>
          
          <a href="#" class="hidden md:block hover:text-amber-500 transition-colors">Tentang</a>
          <a href="#" class="hidden md:block hover:text-amber-500 transition-colors">Makanan</a>
        </nav>
        
        <div class="flex-1 flex flex-col justify-center items-start px-6 md:px-24 max-w-5xl">
          <h1 class="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight uppercase mb-6 tracking-wide drop-shadow-lg">
            Cari Catering Murah?<br />
            Cateringku Solusinya
          </h1>
          <p class="text-white/95 text-base md:text-xl font-medium mb-12 max-w-2xl leading-relaxed drop-shadow-md">
            Telah menerima lebih dari 2Juta pelanggan, dan sudah di akui uleh chef chef ternama
          </p>
          
          <div>
            <button onclick="navigateTo('login')" class="px-8 py-3 md:px-10 md:py-4 border-2 border-white text-white font-bold text-sm md:text-base rounded-md hover:bg-white hover:text-slate-900 transition-all cursor-pointer uppercase tracking-wider shadow-lg bg-black/20 backdrop-blur-sm">
              Pesan Sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderHomeView() {
  let categoriesHtml = '';
  Object.values(CATEGORIES).forEach(cat => {
    categoriesHtml += `
      <div onclick="window.selectCategory('${cat.id}')" class="flex flex-col items-center group cursor-pointer">
        <div class="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center mb-2.5 hover-lift transition-all group-hover:border-primary/20">
          <div class="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-slate-50 text-slate-700 group-hover:bg-primary/5 group-hover:text-primary transition-colors flex items-center justify-center">
            <i class="${cat.icon} text-2xl md:text-3xl"></i>
          </div>
        </div>
        <span class="text-xs font-bold text-slate-800 text-center group-hover:text-primary transition-colors leading-tight">${cat.name.replace('Catering ', '')}</span>
      </div>
    `;
  });

  let promosHtml = '';
  PROMOS.forEach(promo => {
    promosHtml += `
      <div class="flex-shrink-0 w-80 md:w-96 rounded-2xl bg-gradient-to-r ${promo.color} text-white p-5 shadow-lg relative overflow-hidden mr-4">
        <div class="absolute -right-4 -bottom-4 w-28 h-28 bg-white/10 rounded-full blur-xl"></div>
        <div class="absolute -left-6 -top-6 w-24 h-24 bg-white/5 rounded-full blur-lg"></div>
        
        <div class="relative z-10 flex flex-col justify-between h-full">
          <div>
            <span class="bg-white/20 text-white font-extrabold text-[10px] px-2 py-0.5 rounded-full tracking-wider uppercase">PROMO TERBATAS</span>
            <h3 class="text-lg font-bold mt-2 font-serif">${promo.title}</h3>
            <p class="text-xs text-white/90 mt-1 leading-normal font-light">${promo.desc}</p>
          </div>
          <div class="flex items-center justify-between mt-4 pt-3 border-t border-white/10">
            <div class="text-[10px] font-mono tracking-widest bg-white/20 px-2.5 py-1 rounded">KODE: ${promo.code}</div>
            <button onclick="window.claimPromo('${promo.code}')" class="bg-white text-primary text-xs font-bold px-4 py-1.5 rounded-full hover:bg-slate-100 transition-colors shadow-md">Salin Kode</button>
          </div>
        </div>
      </div>
    `;
  });

  let recommendedHtml = '';
  PROVIDERS.slice(0, 3).forEach(p => {
    recommendedHtml += `
      <div onclick="window.selectProvider('${p.id}')" class="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden hover-lift flex flex-col md:flex-row cursor-pointer transition-all">
        <div class="relative h-44 md:h-auto md:w-44 flex-shrink-0 overflow-hidden">
          <img src="${p.image}" alt="${p.name}" class="w-full h-full object-cover" />
          <div class="absolute top-3 left-3 bg-white/95 backdrop-blur px-2.5 py-0.5 rounded-full text-[10px] font-bold text-slate-800 shadow-sm">
            <i class="ph ph-map-pin text-primary inline"></i> ${p.distance} km
          </div>
        </div>
        <div class="p-5 flex-1 flex flex-col justify-between">
          <div>
            <div class="flex justify-between items-start gap-2">
              <h3 class="text-base font-bold text-slate-900 leading-tight">${p.name}</h3>
              <div class="flex items-center gap-1 bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded text-xs font-bold">
                <i class="ph-fill ph-star text-amber-500"></i> ${p.rating}
              </div>
            </div>
            <p class="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">${p.desc}</p>
            
            <div class="flex flex-wrap gap-1 mt-3">
              ${p.categories.map(cId => `
                <span class="text-[9px] font-semibold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full uppercase tracking-wider">${CATEGORIES[cId].name.replace('Catering ', '')}</span>
              `).join('')}
            </div>
          </div>
          
          <div class="flex justify-between items-center mt-4 pt-3 border-t border-slate-50">
            <div>
              <span class="text-[10px] text-slate-500">Harga Mulai</span>
              <div class="text-sm font-extrabold text-primary">Rp ${p.minPrice.toLocaleString('id-ID')} <span class="text-[10px] text-slate-500 font-normal">/ porsi</span></div>
            </div>
            <span class="text-xs text-primary font-bold flex items-center gap-0.5 group-hover:translate-x-1 transition-transform">
              Lihat Menu <i class="ph ph-arrow-right font-bold"></i>
            </span>
          </div>
        </div>
      </div>
    `;
  });

  return `
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
          ${categoriesHtml}
        </div>
      </section>

      <section class="mb-8 overflow-hidden">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-lg font-extrabold text-slate-900 font-serif">Promo Spesial</h2>
          <span class="text-xs text-primary font-semibold">Lihat Semua</span>
        </div>
        <div class="flex overflow-x-auto pb-4 scrollbar-none snap-x snap-mandatory">
          ${promosHtml}
        </div>
      </section>

      <section class="mb-6">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-lg font-extrabold text-slate-900 font-serif">Katering Terdekat Rekomendasi</h2>
          <span onclick="window.selectCategory('prasmanan')" class="text-xs text-primary font-semibold cursor-pointer">Lihat Semua</span>
        </div>
        <div class="grid grid-cols-1 gap-4">
          ${recommendedHtml}
        </div>
      </section>
    </div>
  `;
}

function renderProvidersView() {
  let filteredProviders = PROVIDERS.filter(p => p.categories.includes(state.selectedCategory));

  // Apply sorting
  if (state.providerSortBy === 'rating') {
    filteredProviders.sort((a, b) => b.rating - a.rating);
  } else if (state.providerSortBy === 'price') {
    filteredProviders.sort((a, b) => a.minPrice - b.minPrice);
  }

  let providersListHtml = '';

  if (filteredProviders.length === 0) {
    providersListHtml = `
      <div class="text-center py-10 px-4">
        <i class="ph ph-warning-circle text-4xl text-slate-400 mb-2"></i>
        <h4 class="text-sm font-bold text-slate-700">Tidak ada katering ditemukan</h4>
        <p class="text-xs text-slate-500 mt-1">Saat ini belum ada mitra kami di kategori ini di dekat area Anda.</p>
      </div>
    `;
  } else {
    filteredProviders.forEach(p => {
      const isActive = state.activeMapMarkerId === p.id;
      providersListHtml += `
        <div onclick="window.selectProviderFromList('${p.id}')" 
             id="provider-card-${p.id}"
             class="flex-shrink-0 w-80 md:w-96 bg-white border ${isActive ? 'border-primary shadow-md ring-2 ring-primary/10' : 'border-slate-100 shadow-sm'} rounded-2xl p-4 cursor-pointer hover:shadow transition-all duration-300">
          <div class="flex gap-3">
            <img src="${p.image}" alt="${p.name}" class="w-16 h-16 rounded-xl object-cover flex-shrink-0" />
            <div class="flex-1 min-w-0">
              <div class="flex justify-between items-start gap-1">
                <h3 class="text-sm font-bold text-slate-900 truncate leading-tight">${p.name}</h3>
                <div class="flex items-center gap-0.5 bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded text-[10px] font-bold flex-shrink-0">
                  <i class="ph-fill ph-star text-amber-500 text-[10px]"></i> ${p.rating}
                </div>
              </div>
              <p class="text-xs text-slate-500 mt-1 line-clamp-1 leading-normal">${p.address}</p>
              
              <div class="flex items-center gap-3 mt-2 text-[10px] text-slate-500 font-medium">
                <span><i class="ph ph-map-pin text-primary inline"></i> ${p.distance} km</span>
                <span>•</span>
                <span>Min. order Rp ${(p.packages[0]?.price * p.packages[0]?.minOrder || p.minPrice * 20).toLocaleString('id-ID')}</span>
              </div>
            </div>
          </div>
          
          <div class="flex justify-between items-center mt-3 pt-3 border-t border-slate-50">
            <span class="text-[10px] text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded flex items-center gap-0.5">
              <i class="ph ph-clock-countdown"></i> Buka • Siap Diantar
            </span>
            <button onclick="event.stopPropagation(); window.selectProvider('${p.id}')" class="bg-primary hover:bg-primary-light text-white text-[11px] font-bold px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1 shadow shadow-primary/10">
              Pilih Catering <i class="ph ph-caret-right font-bold text-[10px]"></i>
            </button>
          </div>
        </div>
      `;
    });
  }

  let mapMarkersSvg = '';
  filteredProviders.forEach(p => {
    const isActive = state.activeMapMarkerId === p.id;
    mapMarkersSvg += `
      <g class="cursor-pointer" onclick="event.stopPropagation(); window.selectProviderFromMap('${p.id}')">
        ${isActive ? `
          <circle cx="${p.coords.x}%" cy="${p.coords.y}%" r="18" fill="none" stroke="#7A0C16" stroke-width="2" class="radar-pulse" opacity="0.6" />
          <circle cx="${p.coords.x}%" cy="${p.coords.y}%" r="28" fill="none" stroke="#7A0C16" stroke-width="1" opacity="0.3" class="radar-pulse" />
        ` : ''}
        
        <ellipse cx="${p.coords.x}%" cy="${p.coords.y + 2}%" rx="8" ry="3" fill="#000000" opacity="0.2" />
        
        <path d="M ${p.coords.x}%,${p.coords.y}% 
                 C ${p.coords.x - 2}%,${p.coords.y - 4}% ${p.coords.x - 4}%,${p.coords.y - 6}% ${p.coords.x - 4}%,${p.coords.y - 10}% 
                 A 4 4 0 0 1 ${p.coords.x + 4}%,${p.coords.y - 10}% 
                 C ${p.coords.x + 4}%,${p.coords.y - 6}% ${p.coords.x + 2}%,${p.coords.y - 4}% ${p.coords.x}%,${p.coords.y}% Z" 
              fill="${isActive ? '#7A0C16' : '#9E1B24'}" 
              stroke="#FFFFFF" 
              stroke-width="1" />
              
        <circle cx="${p.coords.x}%" cy="${p.coords.y - 10}%" r="2.5" fill="${isActive ? '#E5A93B' : '#FFFFFF'}" />
        
        <g transform="translate(0, -22)">
          <rect x="${p.coords.x - 14}%" y="${p.coords.y - 4}%" width="60" height="14" rx="4" fill="${isActive ? '#7A0C16' : '#FFFFFF'}" stroke="${isActive ? '#E5A93B' : '#E2E8F0'}" stroke-width="1" />
          <text x="${p.coords.x}%" y="${p.coords.y + 0.5}%" dominant-baseline="middle" text-anchor="middle" font-family="Outfit" font-size="7" font-weight="bold" fill="${isActive ? '#FFFFFF' : '#334155'}">
            ${p.name}
          </text>
        </g>
      </g>
    `;
  });

  return `
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
        
        ${mapMarkersSvg}
      </svg>
      
      <div class="absolute top-4 left-4 right-4 z-20 flex justify-between pointer-events-none items-center">
        <div class="flex gap-2 pointer-events-auto">
          <div class="bg-white/95 backdrop-blur px-3 py-2 rounded-2xl shadow-md border border-slate-100 flex items-center gap-2">
            <div class="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
            <span class="text-xs font-bold text-slate-800">${filteredProviders.length} Catering</span>
          </div>
          
          <div class="bg-white/95 backdrop-blur px-2.5 py-1 rounded-2xl shadow-md border border-slate-100 flex items-center gap-1.5">
            <i class="ph ph-sliders text-xs text-primary font-bold"></i>
            <select onchange="window.setProviderSort(this.value)" class="text-[10px] font-bold text-slate-800 focus:outline-none bg-transparent border-none py-1 pr-1 cursor-pointer">
              <option value="default" ${state.providerSortBy === 'default' ? 'selected' : ''}>Terdekat (Default)</option>
              <option value="rating" ${state.providerSortBy === 'rating' ? 'selected' : ''}>Rating Tertinggi</option>
              <option value="price" ${state.providerSortBy === 'price' ? 'selected' : ''}>Harga Termurah</option>
            </select>
          </div>
        </div>
        
        <button onclick="window.locateUser()" class="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-slate-700 hover:bg-slate-50 transition-colors pointer-events-auto border border-slate-100 flex-shrink-0">
          <i class="ph ph-navigation-arrow-fill text-lg text-primary"></i>
        </button>
      </div>
      
      <div class="absolute bottom-6 left-0 right-0 z-20 px-4 pointer-events-none">
        <div class="max-w-4xl mx-auto w-full flex flex-col gap-2 pointer-events-auto">
          <div class="w-12 h-1.5 bg-slate-300 rounded-full mx-auto shadow-sm mb-1"></div>
          <div id="drawer-cards-container" class="flex gap-4 overflow-x-auto pb-4 scrollbar-none snap-x snap-mandatory pt-1 px-1">
            ${providersListHtml}
          </div>
        </div>
      </div>
    </div>
  `;
}

window.setProviderSort = function (val) {
  state.providerSortBy = val;
  saveStateToLocalStorage();
  renderApp();
};

function renderPackagesView() {
  const provider = PROVIDERS.find(p => p.id === state.selectedProviderId);
  if (!provider) return '<p class="text-center py-20">Penyedia catering tidak ditemukan.</p>';

  let packagesHtml = '';
  provider.packages.forEach(pkg => {
    packagesHtml += `
      <div class="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden hover-lift flex flex-col justify-between">
        <div>
          <div class="relative h-44 overflow-hidden bg-slate-100">
            <img src="${pkg.image}" alt="${pkg.name}" class="w-full h-full object-cover" />
            <div class="absolute top-3 right-3 bg-white/95 backdrop-blur px-2.5 py-0.5 rounded-full text-[10px] font-bold text-primary shadow-sm border border-slate-100">
              Min. Order ${pkg.minOrder} Pax
            </div>
          </div>
          
          <div class="p-5">
            <h3 class="text-base font-bold text-slate-900 leading-tight mb-2">${pkg.name}</h3>
            <p class="text-xs text-slate-500 mb-4 line-clamp-2 leading-relaxed">${pkg.desc}</p>
            
            <div class="space-y-1.5 mb-4">
              <span class="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Preview Menu:</span>
              <ul class="space-y-1">
                ${pkg.menu.slice(0, 4).map(item => `
                  <li class="text-xs text-slate-700 flex items-center gap-1.5">
                    <i class="ph ph-check-circle text-emerald-500 flex-shrink-0 text-sm"></i>
                    <span class="truncate">${item}</span>
                  </li>
                `).join('')}
                ${pkg.menu.length > 4 ? `
                  <li class="text-[10px] text-primary font-bold pl-5">+ ${pkg.menu.length - 4} Menu Lainnya</li>
                ` : ''}
              </ul>
            </div>
          </div>
        </div>
        
        <div class="p-5 pt-0 border-t border-slate-50 mt-auto">
          <div class="flex justify-between items-center py-4">
            <div>
              <span class="text-[10px] text-slate-400">Harga / Pax</span>
              <div class="text-lg font-black text-primary">Rp ${pkg.price.toLocaleString('id-ID')}</div>
            </div>
            <div class="text-right">
              <span class="text-[10px] text-slate-400">Estimasi Total</span>
              <div class="text-xs font-bold text-slate-800">Rp ${(pkg.price * pkg.minOrder).toLocaleString('id-ID')}</div>
            </div>
          </div>
          
          <div class="grid grid-cols-2 gap-2">
            <button onclick="window.openPackageDetail('${provider.id}', '${pkg.id}')" class="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs py-3 px-4 rounded-xl transition-colors">
              Detail Menu
            </button>
            <button onclick="window.addToCartAndCheckout('${provider.id}', '${pkg.id}')" class="bg-primary hover:bg-primary-light text-white font-bold text-xs py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-1 shadow shadow-primary/20">
              Pesan Sekarang
            </button>
          </div>
        </div>
      </div>
    `;
  });

  if (provider.customMenuEnabled) {
    packagesHtml += `
      <div class="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl border border-amber-200 p-6 shadow-sm flex flex-col justify-between hover-lift">
        <div class="space-y-4">
          <div class="flex items-center gap-2">
            <span class="bg-amber-100 text-amber-800 text-[9px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">Layanan Kustom</span>
            <span class="bg-primary/10 text-primary text-[9px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-0.5"><i class="ph-fill ph-sparkles"></i> Populer</span>
          </div>
          <div>
            <h3 class="text-base font-extrabold text-slate-900 leading-tight">Nasi Box Kustom (Custom Menu)</h3>
            <p class="text-xs text-slate-500 mt-1.5 leading-relaxed">Sesuaikan porsi katering Anda! Pilih ukuran kotak box dan lauk pauk sesuka hati, harga dihitung otomatis sesuai lauk yang dipilih.</p>
          </div>
          
          <div class="space-y-2 border-t border-amber-100 pt-4 text-xs text-slate-600">
            <div class="flex items-center gap-2"><i class="ph ph-check-circle text-amber-600 text-base"></i> Pilihan Ukuran Box (Personal / Spesial / Premium)</div>
            <div class="flex items-center gap-2"><i class="ph ph-check-circle text-amber-600 text-base"></i> Checklist lauk (Lauk Utama, Lauk Pendamping, Sayur, Sambal)</div>
            <div class="flex items-center gap-2"><i class="ph ph-check-circle text-amber-600 text-base"></i> Transparansi harga real-time</div>
          </div>
        </div>
        
        <div class="pt-6 mt-auto">
          <button onclick="window.openCustomMenuWizard('${provider.id}')" class="w-full bg-amber-500 hover:bg-amber-600 text-white font-extrabold text-xs py-3.5 px-4 rounded-xl transition-all shadow-md shadow-amber-500/10 flex items-center justify-center gap-1.5 cursor-pointer">
            <i class="ph ph-sliders"></i> Kustomisasi Nasi Box Sekarang
          </button>
        </div>
      </div>
    `;
  }

  return `
    <div class="max-w-4xl mx-auto px-4 py-4">
      <section class="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden mb-8">
        <div class="h-48 md:h-64 relative bg-slate-800">
          <img src="${provider.image}" alt="${provider.name}" class="w-full h-full object-cover opacity-80" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>
          
          <div class="absolute bottom-6 left-6 right-6 text-white">
            <span class="bg-primary/95 text-white font-extrabold text-[9px] px-2.5 py-1 rounded-full uppercase tracking-wider mb-2.5 inline-block">MITRA UTAMA</span>
            <h2 class="text-2xl md:text-3xl font-extrabold font-serif mb-1.5 leading-none">${provider.name}</h2>
            <p class="text-xs text-white/80 line-clamp-1 leading-relaxed"><i class="ph ph-map-pin inline"></i> ${provider.address}</p>
          </div>
        </div>
        
        <div class="p-5 md:p-6 grid grid-cols-3 gap-4 text-center border-t border-slate-100 bg-slate-50/50">
          <div class="border-r border-slate-100">
            <span class="text-[10px] text-slate-400 block mb-0.5">Penilaian</span>
            <div class="text-sm font-extrabold text-slate-900 flex items-center justify-center gap-1">
              <i class="ph-fill ph-star text-amber-500"></i> ${provider.rating} <span class="text-[10px] text-slate-400 font-normal">(${provider.reviews})</span>
            </div>
          </div>
          <div class="border-r border-slate-100">
            <span class="text-[10px] text-slate-400 block mb-0.5">Jarak Lokasi</span>
            <div class="text-sm font-extrabold text-slate-900"><i class="ph ph-motorcycle text-slate-400"></i> ${provider.distance} km</div>
          </div>
          <div>
            <span class="text-[10px] text-slate-400 block mb-0.5">Estimasi Antar</span>
            <div class="text-sm font-extrabold text-emerald-600">60 - 90 Menit</div>
          </div>
        </div>
        
        <div class="p-5 border-t border-slate-100">
          <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Deskripsi Penyedia</h4>
          <p class="text-xs text-slate-600 leading-relaxed">${provider.desc}</p>
        </div>
      </section>

      <section class="mb-6">
        <div class="flex justify-between items-center mb-4">
          <div>
            <h2 class="text-lg font-extrabold text-slate-900 font-serif">Menu Paket yang Tersedia</h2>
            <p class="text-xs text-slate-500">Pilihlah salah satu paket hidangan katering di bawah ini</p>
          </div>
          <span class="text-xs text-slate-400">${provider.packages.length} Paket Menu</span>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          ${packagesHtml}
        </div>
      </section>
    </div>
  `;
}

function renderCheckoutView() {
  if (state.cart.length === 0) {
    return `
      <div class="max-w-md mx-auto text-center py-20 px-6">
        <i class="ph ph-shopping-cart text-6xl text-slate-300 mb-4"></i>
        <h3 class="text-lg font-bold text-slate-800">Keranjang Belanja Kosong</h3>
        <p class="text-xs text-slate-500 mt-2 mb-6">Silakan pilih menu paket katering yang Anda inginkan terlebih dahulu di beranda.</p>
        <button onclick="navigateTo('home')" class="bg-primary hover:bg-primary-light text-white text-xs font-bold px-6 py-3 rounded-xl transition-colors shadow">Kembali ke Beranda</button>
      </div>
    `;
  }

  const cartItem = state.cart[0];
  const provider = state.providers.find(p => p.id === cartItem.providerId) || PROVIDERS.find(p => p.id === cartItem.providerId);
  const subtotal = cartItem.package.price * cartItem.quantity;
  const deliveryFee = Math.round(cartItem.package.minOrder * 1000 * 0.15) + 15000;
  const appFee = 5000;
  const liveCookingFee = (provider && provider.liveCookingEnabled && cartItem.liveCookingSelected) ? (5000 * cartItem.quantity) : 0;
  const totalPrice = subtotal + deliveryFee + appFee + liveCookingFee;

  return `
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
            <p class="text-xs text-slate-500 mt-0.5 leading-relaxed">${state.userAddress}</p>
          </div>
        </div>
      </section>

      <section class="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm mb-4">
        <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-3">Rincian Paket</span>
        
        <div class="flex gap-3 pb-4 border-b border-slate-100">
          <img src="${cartItem.package.image}" alt="${cartItem.package.name}" class="w-14 h-14 rounded-xl object-cover flex-shrink-0" />
          <div class="flex-1 min-w-0">
            <h4 class="text-xs font-bold text-slate-900 truncate leading-tight">${cartItem.package.name}</h4>
            <p class="text-[10px] text-slate-400 mt-1">${provider ? provider.name : 'Mitra Katering'}</p>
            <div class="text-xs font-extrabold text-primary mt-1.5">Rp ${cartItem.package.price.toLocaleString('id-ID')} <span class="text-[10px] text-slate-400 font-normal">/ pax</span></div>
          </div>
        </div>
        
        <div class="flex justify-between items-center py-4 border-b border-slate-100">
          <span class="text-xs text-slate-600 font-medium">Jumlah Pesanan (Pax)</span>
          <div class="flex items-center gap-3">
            <button onclick="window.updateQuantity(${cartItem.quantity - 5})" class="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center font-bold text-lg cursor-pointer">-</button>
            <span class="text-sm font-bold text-slate-800 w-10 text-center">${cartItem.quantity}</span>
            <button onclick="window.updateQuantity(parseInt(${cartItem.quantity}) + 5)" class="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center font-bold text-lg cursor-pointer">+</button>
          </div>
        </div>
        
        <div class="pt-4 pb-1">
          <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">Catatan Pesanan (Opsional)</label>
          <input type="text" 
                 id="checkout-notes"
                 value="${cartItem.notes || ''}" 
                 onchange="window.updateNotes(this.value)"
                 placeholder="Contoh: Kurangi kepedasan, minta lauk dipisah..." 
                 class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-primary transition-colors text-slate-700" />
        </div>

        ${provider && provider.liveCookingEnabled ? `
          <div class="mt-4 p-4 bg-orange-50/70 border border-orange-100 rounded-2xl flex items-center justify-between transition-all">
            <div class="flex gap-2.5 items-start">
              <div class="w-8 h-8 rounded-full bg-orange-500/10 text-orange-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                <i class="ph-fill ph-fire text-lg animate-pulse"></i>
              </div>
              <div class="min-w-0">
                <h4 class="text-xs font-bold text-slate-900">Layanan Live Cooking</h4>
                <p class="text-[9px] text-slate-500 mt-0.5 leading-normal">Koki memasak langsung di lokasi acara Anda!</p>
                <span class="text-[9px] font-black text-orange-600 mt-1 block">+Rp 5.000 / pax</span>
              </div>
            </div>
            <label class="relative inline-flex items-center cursor-pointer flex-shrink-0 ml-2">
              <input type="checkbox" ${cartItem.liveCookingSelected ? 'checked' : ''} onchange="window.toggleLiveCooking(this.checked)" class="sr-only peer" />
              <div class="w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-orange-500"></div>
            </label>
          </div>
        ` : ''}
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
          <span>Subtotal (${cartItem.quantity} Pax)</span>
          <span>Rp ${subtotal.toLocaleString('id-ID')}</span>
        </div>
        ${cartItem.liveCookingSelected ? `
          <div class="flex justify-between text-xs text-slate-600">
            <span>Biaya Live Cooking (+Rp 5.000/pax)</span>
            <span>Rp ${liveCookingFee.toLocaleString('id-ID')}</span>
          </div>
        ` : ''}
        <div class="flex justify-between text-xs text-slate-600">
          <span>Biaya Pengantaran & Layanan</span>
          <span>Rp ${deliveryFee.toLocaleString('id-ID')}</span>
        </div>
        <div class="flex justify-between text-xs text-slate-600">
          <span>Biaya Aplikasi</span>
          <span>Rp ${appFee.toLocaleString('id-ID')}</span>
        </div>
        <div class="border-t border-slate-100 pt-2.5 flex justify-between text-sm font-extrabold text-slate-950">
          <span>Total Pembayaran</span>
          <span class="text-primary text-base">Rp ${totalPrice.toLocaleString('id-ID')}</span>
        </div>
      </section>

      <button onclick="window.placeOrder('${totalPrice}')" class="w-full bg-primary hover:bg-primary-light text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 cursor-pointer">
        <i class="ph ph-file-text text-xl"></i> Konfirmasi & Buat Pesanan
      </button>
    </div>
  `;
}

function getStatusBadge(status) {
  let colorClasses = 'bg-slate-100 text-slate-700 border-slate-200';
  let icon = 'ph-clock';
  let isPulse = false;

  switch (status) {
    case 'Menunggu Pembayaran':
      colorClasses = 'bg-amber-50 text-amber-700 border-amber-200';
      icon = 'ph-wallet';
      isPulse = true;
      break;
    case 'Pembayaran Terkonfirmasi':
      colorClasses = 'bg-emerald-50 text-emerald-700 border-emerald-200';
      icon = 'ph-check-circle';
      break;
    case 'Menyiapkan Bahan':
      colorClasses = 'bg-lime-50 text-lime-700 border-lime-200';
      icon = 'ph-leaf';
      isPulse = true;
      break;
    case 'Mulai Memasak':
      colorClasses = 'bg-orange-50 text-orange-700 border-orange-200';
      icon = 'ph-fire';
      isPulse = true;
      break;
    case 'Mulai Mengemas':
      colorClasses = 'bg-yellow-50 text-yellow-800 border-yellow-200';
      icon = 'ph-package';
      isPulse = true;
      break;
    case 'Sedang Diantar':
      colorClasses = 'bg-blue-50 text-blue-700 border-blue-200';
      icon = 'ph-moped';
      isPulse = true;
      break;
    case 'Sudah Sampai Tujuan':
      colorClasses = 'bg-green-100 text-green-800 border-green-300';
      icon = 'ph-house-line';
      break;
  }

  return `
    <span class="px-2.5 py-0.5 rounded-full border text-[10px] font-bold flex items-center gap-1 ${colorClasses} ${isPulse ? 'animate-pulse' : ''}">
      <i class="ph-fill ${icon}"></i> ${status}
    </span>
  `;
}

function renderOrdersView() {
  let ordersListHtml = '';

  if (state.orders.length === 0) {
    ordersListHtml = `
      <div class="text-center py-20 px-6">
        <i class="ph ph-receipt text-6xl text-slate-300 mb-3"></i>
        <h3 class="text-base font-bold text-slate-800">Belum Ada Riwayat Pesanan</h3>
        <p class="text-xs text-slate-500 mt-1 mb-6">Nikmati kemudahan memesan catering katering lewat Cateringku.</p>
        <button onclick="navigateTo('home')" class="bg-primary hover:bg-primary-light text-white text-xs font-bold px-6 py-3 rounded-xl transition-colors shadow">Pesan Sekarang</button>
      </div>
    `;
  } else {
    state.orders.forEach(order => {
      ordersListHtml += `
        <div onclick="window.handleOrderCardClick('${order.id}')" class="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm mb-4 hover:border-slate-300 transition-all cursor-pointer relative overflow-hidden group">
          <div class="flex justify-between items-center pb-3 border-b border-slate-100 mb-3">
            <div>
              <span class="text-[10px] text-slate-400 block">ID Pesanan</span>
              <span class="text-xs font-bold text-slate-800">${order.id}</span>
            </div>
            ${getStatusBadge(order.status)}
          </div>
          
          <div class="flex gap-3">
            <div class="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 flex-shrink-0">
              <i class="ph-fill ph-fork-knife text-xl"></i>
            </div>
            <div class="flex-1 min-w-0">
              <span class="text-[10px] text-slate-400 font-medium block">${order.date}</span>
              <h4 class="text-sm font-bold text-slate-900 truncate mt-0.5">${order.providerName}</h4>
              <p class="text-xs text-slate-600 truncate mt-1">${order.packageName} (${order.quantity} Pax)</p>
              
              <div class="mt-2 flex flex-wrap gap-1.5 items-center">
                ${order.liveCooking ? `
                  <span class="inline-flex items-center gap-0.5 bg-orange-50 text-orange-700 border border-orange-200/50 text-[9px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider">
                    <i class="ph-fill ph-fire"></i> Live Cooking
                  </span>
                ` : ''}
                ${order.customMenu ? `
                  <span class="inline-flex items-center gap-0.5 bg-amber-50 text-amber-700 border border-amber-200/50 text-[9px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider">
                    <i class="ph ph-sliders"></i> Kustom Box
                  </span>
                ` : ''}
              </div>
              
              ${order.customMenu ? `
                <div class="mt-2.5 p-2.5 bg-slate-50 border border-slate-100 rounded-xl text-left">
                  <span class="text-[8px] font-black text-slate-400 uppercase block tracking-wider mb-1">Isi Box Kustom:</span>
                  <div class="flex flex-wrap gap-1">
                    ${order.customMenu.map(m => `
                      <span class="text-[9px] bg-white border border-slate-200/60 text-slate-700 px-2 py-0.5 rounded-lg shadow-sm font-semibold">${m}</span>
                    `).join('')}
                  </div>
                </div>
              ` : ''}
              
              ${order.reviewed ? `
                <div class="mt-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-left">
                  <div class="flex items-center gap-1.5 text-[10px]">
                    <span class="text-slate-400">Rating Anda:</span>
                    <div class="flex text-amber-500 text-[10px] gap-0.5">
                      ${Array.from({ length: order.reviewRating }).map(() => `<i class="ph-fill ph-star"></i>`).join('')}
                    </div>
                  </div>
                  <p class="text-[10px] text-slate-600 mt-1 italic leading-relaxed">"${order.reviewText}"</p>
                </div>
              ` : ''}
            </div>
          </div>
          
          <div class="flex justify-between items-center mt-4 pt-4 border-t border-slate-50">
            <div>
              <span class="text-[10px] text-slate-400">Total Transaksi</span>
              <div class="text-sm font-extrabold text-primary">Rp ${order.totalPrice.toLocaleString('id-ID')}</div>
            </div>
            
            <div class="flex gap-2 items-center">
              ${order.status === 'Menunggu Pembayaran' ? `
                <button onclick="event.stopPropagation(); window.openPaymentModal('${order.id}')" class="bg-primary hover:bg-primary-light text-white text-[11px] font-bold px-3 py-2 rounded-lg transition-all shadow-md shadow-primary/10 cursor-pointer">
                  Bayar Sekarang
                </button>
              ` : `
                <button onclick="event.stopPropagation(); window.openTrackingModal('${order.id}')" class="bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-bold px-3 py-2 rounded-lg transition-all shadow-md shadow-emerald-600/10 flex items-center gap-1 cursor-pointer">
                  <i class="ph ph-map-pin"></i> Lacak
                </button>
              `}
              ${order.status === 'Sudah Sampai Tujuan' ? `
                ${!order.reviewed ? `
                  <button onclick="event.stopPropagation(); window.openReviewModal('${order.id}')" class="bg-amber-500 hover:bg-amber-600 text-white text-[11px] font-bold px-3 py-2 rounded-lg transition-colors cursor-pointer flex items-center gap-1">
                    <i class="ph-fill ph-star"></i> Tulis Ulasan
                  </button>
                ` : ''}
                <button onclick="event.stopPropagation(); window.reorder('${order.providerName}')" class="bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-bold px-3 py-2 rounded-lg transition-colors cursor-pointer">
                  Beli Lagi
                </button>
              ` : `
                <button onclick="event.stopPropagation(); window.showAlert('Layanan Bantuan', 'Layanan pengaduan/CS sedang dihubungi. Tim kami akan segera merespons.')" class="border border-slate-200 hover:bg-slate-50 text-slate-600 text-[11px] font-bold px-3 py-2 rounded-lg transition-colors cursor-pointer">
                  Bantuan
                </button>
              `}
            </div>
          </div>
        </div>
      `;
    });
  }

  return `
    <div class="max-w-md mx-auto px-4 py-4">
      <h2 class="text-xl font-extrabold text-slate-900 mb-6 font-serif">Aktivitas Pemesanan</h2>
      <div class="space-y-4">
        ${ordersListHtml}
      </div>
    </div>
  `;
}

function renderChatView() {
  return `
    <div class="max-w-md mx-auto px-4 py-20 text-center">
      <div class="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6 text-primary shadow-inner">
        <i class="ph-fill ph-chats-teardrop text-4xl"></i>
      </div>
      <h2 class="text-lg font-bold text-slate-900 font-serif">Kotak Masuk Chat</h2>
      <p class="text-xs text-slate-500 mt-2 mb-6 max-w-xs mx-auto leading-relaxed">Hubungi langsung penyedia katering pilihan Anda untuk koordinasi pengantaran atau kustomisasi menu khusus secara instan.</p>
      <button onclick="navigateTo('home')" class="bg-primary hover:bg-primary-light text-white text-xs font-bold px-6 py-3 rounded-xl transition-colors shadow">Mulai Mencari Catering</button>
    </div>
  `;
}

let loginErrorMessage = '';
let registerErrorMessage = '';

function renderLoginView() {
  return `
    <div class="min-h-screen flex flex-col justify-center bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 relative animate-fade-in">
      <!-- Background decoration -->
      <div class="absolute inset-0 z-0 bg-gradient-to-tr from-slate-100 to-slate-50 opacity-40"></div>
      
      <div class="relative z-10 max-w-md w-full mx-auto">
        <div class="text-center mb-8">
          <div class="w-16 h-16 rounded-2xl bg-gradient-to-tr from-primary to-primary-light flex items-center justify-center text-white shadow-xl shadow-primary/20 mx-auto mb-4 hover-scale cursor-pointer" onclick="navigateTo('landing')">
            <i class="ph-fill ph-fork-knife text-3xl"></i>
          </div>
          <h2 class="text-2xl font-extrabold text-slate-900 tracking-tight font-serif">Selamat Datang</h2>
          <p class="text-xs text-slate-500 mt-1">Masuk untuk memesan katering terbaik & terdekat</p>
        </div>

        ${loginErrorMessage ? `
          <div class="bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl p-3.5 mb-5 flex items-start gap-2 animate-fade-in">
            <i class="ph ph-warning-circle text-lg flex-shrink-0"></i>
            <span>${loginErrorMessage}</span>
          </div>
        ` : ''}

        <div class="bg-white rounded-2xl border border-slate-100 p-6 shadow-md space-y-4">
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
          <button onclick="navigateTo('landing')" class="mt-4 text-xs font-semibold text-slate-400 hover:text-primary transition-colors flex items-center justify-center gap-1 mx-auto cursor-pointer">
            <i class="ph ph-arrow-left"></i> Kembali ke Beranda
          </button>
        </div>
      </div>
    </div>
  `;
}

window.setLoginRole = function (role) {
  const inputRole = document.getElementById('login-role');
  const btnUser = document.getElementById('btn-login-user');
  const btnAdmin = document.getElementById('btn-login-admin');

  if (inputRole && btnUser && btnAdmin) {
    inputRole.value = role;
    if (role === 'user') {
      btnUser.className = "flex-1 text-center py-2 text-xs font-bold rounded-lg transition-all cursor-pointer bg-white text-slate-800 shadow-sm border border-slate-200/50";
      btnAdmin.className = "flex-1 text-center py-2 text-xs font-bold rounded-lg transition-all cursor-pointer text-slate-500 hover:text-slate-800";
    } else {
      btnAdmin.className = "flex-1 text-center py-2 text-xs font-bold rounded-lg transition-all cursor-pointer bg-white text-slate-800 shadow-sm border border-slate-200/50";
      btnUser.className = "flex-1 text-center py-2 text-xs font-bold rounded-lg transition-all cursor-pointer text-slate-500 hover:text-slate-800";
    }
  }
};

window.quickFillLogin = function (role) {
  window.setLoginRole(role);
  const emailInput = document.getElementById('login-email');
  const passInput = document.getElementById('login-password');

  if (emailInput && passInput) {
    if (role === 'user') {
      emailInput.value = 'user@cateringku.com';
      passInput.value = 'user123';
    } else {
      emailInput.value = 'admin@cateringku.com';
      passInput.value = 'admin123';
    }
  }
};

window.handleLoginSubmit = function (e) {
  e.preventDefault();
  loginErrorMessage = '';

  const email = document.getElementById('login-email')?.value.trim();
  const password = document.getElementById('login-password')?.value;
  const role = document.getElementById('login-role')?.value;

  const user = state.users.find(u => {
    const emailMatch = u.email.toLowerCase() === email.toLowerCase();
    const passwordMatch = u.password === password;
    if (role === 'admin') {
      return emailMatch && passwordMatch && u.role === 'admin';
    } else {
      return emailMatch && passwordMatch && (u.role === 'user' || u.role === 'owner');
    }
  });

  if (user) {
    state.currentUser = user;
    state.userAddress = user.address || state.userAddress;
    saveStateToLocalStorage();

    window.showAlert("Login Berhasil", `Selamat Datang, ${user.name}! Anda berhasil masuk.`, () => {
      // Redirect logic
      if (state.redirectAfterLogin) {
        const target = state.redirectAfterLogin;
        state.redirectAfterLogin = null;
        navigateTo(target);
      } else {
        if (user.role === 'admin') {
          navigateTo('admin');
        } else if (user.role === 'owner') {
          navigateTo('owner');
        } else {
          navigateTo('home');
        }
      }
    });
  } else {
    loginErrorMessage = `Email atau password salah untuk tipe akun ${role === 'admin' ? 'Admin' : 'User'}.`;
    renderApp();
  }
};

function renderRegisterView() {
  return `
    <div class="min-h-screen flex flex-col justify-center bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 relative animate-fade-in">
      <!-- Background decoration -->
      <div class="absolute inset-0 z-0 bg-gradient-to-tr from-slate-100 to-slate-50 opacity-40"></div>
      
      <div class="relative z-10 max-w-md w-full mx-auto">
        <div class="text-center mb-6">
          <div class="w-16 h-16 rounded-2xl bg-gradient-to-tr from-primary to-primary-light flex items-center justify-center text-white shadow-xl shadow-primary/20 mx-auto mb-4 hover-scale cursor-pointer" onclick="navigateTo('landing')">
            <i class="ph-fill ph-fork-knife text-3xl"></i>
          </div>
          <h2 class="text-2xl font-extrabold text-slate-900 tracking-tight font-serif">Daftar Akun Baru</h2>
          <p class="text-xs text-slate-500 mt-1">Bergabunglah dengan Cateringku untuk mulai memesan</p>
        </div>

        ${registerErrorMessage ? `
          <div class="bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl p-3.5 mb-5 flex items-start gap-2 animate-fade-in">
            <i class="ph ph-warning-circle text-lg flex-shrink-0"></i>
            <span>${registerErrorMessage}</span>
          </div>
        ` : ''}

        <div class="bg-white rounded-2xl border border-slate-100 p-6 shadow-md">
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
          <button onclick="navigateTo('landing')" class="mt-4 text-xs font-semibold text-slate-400 hover:text-primary transition-colors flex items-center justify-center gap-1 mx-auto cursor-pointer">
            <i class="ph ph-arrow-left"></i> Kembali ke Beranda
          </button>
        </div>
      </div>
    </div>
  `;
}

window.handleRegisterSubmit = function (e) {
  e.preventDefault();
  registerErrorMessage = '';

  const name = document.getElementById('reg-name')?.value.trim();
  const email = document.getElementById('reg-email')?.value.trim();
  const phone = document.getElementById('reg-phone')?.value.trim();
  const password = document.getElementById('reg-password')?.value;
  const address = document.getElementById('reg-address')?.value.trim();

  // Check duplicate
  const exists = state.users.find(u => u.email.toLowerCase() === email.toLowerCase());
  if (exists) {
    registerErrorMessage = `Email "${email}" sudah terdaftar pada akun lain.`;
    renderApp();
    return;
  }

  const newUser = {
    name,
    email,
    phone,
    password,
    address,
    role: 'user'
  };

  state.users.push(newUser);
  state.currentUser = newUser;
  state.userAddress = address;
  saveStateToLocalStorage();

  window.showAlert("Registrasi Berhasil", `Registrasi Berhasil! Selamat datang, ${name}.`, () => {
    if (state.redirectAfterLogin) {
      const target = state.redirectAfterLogin;
      state.redirectAfterLogin = null;
      navigateTo(target);
    } else {
      navigateTo('home');
    }
  });
};

function renderAccountView() {
  if (!state.currentUser) {
    setTimeout(() => navigateTo('login'), 10);
    return '<p class="text-center py-20 text-xs">Mengarahkan ke halaman login...</p>';
  }

  const user = state.currentUser;
  const isAdmin = user.role === 'admin';
  const isOwner = user.role === 'owner';
  const isUser = user.role === 'user';

  const pendingReg = state.cateringRegistrations.find(r => r.userId === user.email && r.status === 'pending');
  const approvedReg = state.cateringRegistrations.find(r => r.userId === user.email && r.status === 'approved');
  const rejectedReg = state.cateringRegistrations.find(r => r.userId === user.email && r.status === 'rejected');

  let roleBadge = 'bg-slate-100 text-slate-800';
  let roleLabel = 'Pelanggan';
  if (isAdmin) { roleBadge = 'bg-amber-100 text-amber-800'; roleLabel = 'Administrator'; }
  if (isOwner) { roleBadge = 'bg-emerald-100 text-emerald-800'; roleLabel = 'Owner Catering'; }

  return `
    <div class="max-w-md mx-auto px-6 py-6 animate-fade-in">
      <h2 class="text-xl font-extrabold text-slate-900 mb-6 font-serif">Profil Saya</h2>
      
      <!-- Card Profil -->
      <div class="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm text-center mb-6">
        <div class="w-20 h-20 rounded-full bg-primary/5 text-primary flex items-center justify-center mx-auto mb-4 border-2 border-primary/10">
          <i class="ph ph-user text-4xl"></i>
        </div>
        <h3 class="text-base font-extrabold text-slate-900 leading-tight">${user.name}</h3>
        <p class="text-xs text-slate-500 mt-1">${user.email}</p>
        <span class="inline-block mt-3 px-3 py-1 rounded-full text-[10px] font-bold ${roleBadge} uppercase tracking-wider">
          ${roleLabel}
        </span>
      </div>

      <!-- Info Details -->
      <div class="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm space-y-4 mb-6">
        <div>
          <span class="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Nomor Telepon</span>
          <span class="text-xs font-semibold text-slate-800 block mt-1">${user.phone || '-'}</span>
        </div>
        <div class="border-t border-slate-50 pt-3">
          <span class="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Alamat Utama</span>
          <span class="text-xs font-semibold text-slate-700 block mt-1 leading-relaxed">${user.address || '-'}</span>
        </div>
      </div>

      ${isAdmin ? `
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
      ` : ''}

      ${isOwner ? `
        <!-- Owner Dashboard Entry -->
        <div class="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl text-white p-5 shadow-md mb-6 relative overflow-hidden">
          <div class="absolute -right-8 -bottom-8 w-24 h-24 bg-white/10 rounded-full blur-lg"></div>
          <div class="relative z-10">
            <h4 class="text-sm font-bold font-serif flex items-center gap-2"><i class="ph-fill ph-storefront"></i> Dashboard Owner Catering</h4>
            <p class="text-[10px] text-white/90 mt-1 leading-relaxed">Kelola pesanan, pantau stok bahan, dan atur jadwal produksi katering Anda melalui dashboard khusus owner.</p>
            <button onclick="navigateTo('owner')" class="mt-4 bg-white text-emerald-800 hover:bg-slate-100 font-bold text-xs px-4 py-2.5 rounded-xl transition-all shadow flex items-center justify-center gap-1.5 cursor-pointer">
              <i class="ph ph-chart-line-up text-base"></i> Masuk Dashboard Owner
            </button>
          </div>
        </div>
      ` : ''}

      ${isUser ? `
        <!-- Catering Registration CTA -->
        <div class="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm mb-6">
          <div class="flex items-start gap-3">
            <div class="w-10 h-10 rounded-xl bg-primary/5 text-primary flex items-center justify-center flex-shrink-0">
              <i class="ph-fill ph-storefront text-xl"></i>
            </div>
            <div class="flex-1">
              <h4 class="text-sm font-extrabold text-slate-900">Punya Usaha Catering?</h4>
              <p class="text-[10px] text-slate-500 mt-1 leading-relaxed">Daftarkan usaha catering Anda di platform Cateringku dan jangkau lebih banyak pelanggan!</p>
            </div>
          </div>
          
          ${pendingReg ? `
            <div class="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-xl flex items-center gap-2 text-[10px] text-amber-800">
              <i class="ph ph-clock text-base animate-pulse"></i>
              <span><strong>Pendaftaran "${pendingReg.cateringName}"</strong> sedang ditinjau oleh Admin.</span>
            </div>
          ` : rejectedReg ? `
            <div class="mt-4 p-3 bg-red-50 border border-red-200 rounded-xl flex items-center gap-2 text-[10px] text-red-700">
              <i class="ph ph-x-circle text-base"></i>
              <span>Pendaftaran "${rejectedReg.cateringName}" ditolak. Silakan coba daftarkan kembali.</span>
            </div>
            <button onclick="window.openCateringRegistration()" class="mt-3 w-full bg-primary hover:bg-primary-light text-white font-bold text-xs py-3 rounded-xl transition-colors shadow cursor-pointer flex items-center justify-center gap-1.5">
              <i class="ph ph-plus-circle"></i> Daftarkan Ulang Catering
            </button>
          ` : `
            <button onclick="window.openCateringRegistration()" class="mt-4 w-full bg-primary hover:bg-primary-light text-white font-bold text-xs py-3 rounded-xl transition-colors shadow cursor-pointer flex items-center justify-center gap-1.5">
              <i class="ph ph-plus-circle"></i> Daftarkan Catering Saya
            </button>
          `}
        </div>
      ` : ''}

      <!-- Action Buttons -->
      <div class="space-y-3">
        <button onclick="window.handleLogout()" class="w-full border border-red-200 bg-red-50/50 hover:bg-red-50 text-red-700 font-bold py-3.5 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer text-xs">
          <i class="ph ph-sign-out text-base"></i> Keluar dari Akun
        </button>
      </div>
    </div>
  `;
}

window.handleLogout = function () {
  window.showConfirm("Keluar Akun", "Apakah Anda yakin ingin keluar dari akun Anda?", () => {
    state.currentUser = null;
    saveStateToLocalStorage();
    window.showAlert("Keluar Akun", "Anda berhasil keluar.", () => {
      navigateTo('home');
    });
  });
};

window.handleLogout = function () {
  window.showConfirm("Keluar Akun", "Apakah Anda yakin ingin keluar dari akun Anda?", () => {
    state.currentUser = null;
    saveStateToLocalStorage();
    window.showAlert("Keluar Akun", "Anda berhasil keluar.", () => {
      navigateTo('home');
    });
  });
};

window.setOwnerTab = function (tabName) {
  state.ownerActiveTab = tabName;
  saveStateToLocalStorage();
  renderApp();
};

window.ownerUpdateOrderStatus = function (orderId, newStatus) {
  const order = state.orders.find(o => o.id === orderId);
  if (!order) return;

  order.status = newStatus;
  if (!order.statusHistory) order.statusHistory = {};

  const steps = TRACKING_STEPS.map(s => s.status);
  const targetIdx = steps.indexOf(newStatus);

  steps.forEach((stepName, idx) => {
    if (idx <= targetIdx) {
      if (!order.statusHistory[stepName]) {
        order.statusHistory[stepName] = getCurrentTimeStr();
      }
    } else {
      delete order.statusHistory[stepName];
    }
  });

  if (newStatus === 'Sudah Sampai Tujuan' || newStatus === 'Menunggu Pembayaran') {
    if (orderSimulations[orderId]) {
      clearInterval(orderSimulations[orderId].intervalId);
      delete orderSimulations[orderId];
    }
  } else {
    if (!orderSimulations[orderId]) {
      startOrderSimulation(orderId);
    }
  }

  saveStateToLocalStorage();
  showToast(order.id, order.providerName, newStatus);
  window.showAlert("Status Pesanan Diperbarui", `Status pesanan ${orderId} berhasil diubah menjadi "${newStatus}".`, () => {
    renderApp();
  });
};

window.ownerRestock = function (idx, qty) {
  const amount = parseInt(qty);
  if (isNaN(amount) || amount <= 0) {
    window.showAlert("Input Tidak Valid", "Masukkan jumlah stok yang valid (angka lebih besar dari 0).");
    return;
  }

  if (!state.inventory) {
    state.inventory = [
      { name: 'Beras Premium', stock: 150, unit: 'kg', minStock: 50, perPax: 0.1 },
      { name: 'Daging Ayam Fillet', stock: 80, unit: 'kg', minStock: 30, perPax: 0.12 },
      { name: 'Daging Sapi Lada Hitam', stock: 45, unit: 'kg', minStock: 20, perPax: 0.1 },
      { name: 'Sayuran Segar (Wortel/Brokoli)', stock: 60, unit: 'kg', minStock: 25, perPax: 0.08 },
      { name: 'Bumbu & Rempah Pilihan', stock: 35, unit: 'kg', minStock: 15, perPax: 0.02 },
      { name: 'Minyak Goreng', stock: 120, unit: 'liter', minStock: 40, perPax: 0.05 },
      { name: 'Telur Ayam', stock: 50, unit: 'kg', minStock: 15, perPax: 0.06 }
    ];
  }

  state.inventory[idx].stock += amount;
  saveStateToLocalStorage();
  renderApp();
  window.showAlert("Stok Ditambahkan", `Berhasil menambahkan ${amount} ${state.inventory[idx].unit} ke dalam stok ${state.inventory[idx].name}.`);
};

window.ownerUpdateShift = function (orderId, shiftVal) {
  if (!state.productionShifts) state.productionShifts = {};
  state.productionShifts[orderId] = shiftVal;
  saveStateToLocalStorage();
  renderApp();
  window.showAlert("Shift Produksi Diperbarui", `Shift produksi untuk pesanan ${orderId} berhasil diset ke "${shiftVal}".`);
};

window.ownerToggleAddPackageForm = function () {
  state.ownerShowAddPackageForm = !state.ownerShowAddPackageForm;
  saveStateToLocalStorage();
  renderApp();
};

window.ownerSubmitNewPackage = function (providerId) {
  const name = document.getElementById('owner-pkg-name')?.value.trim();
  const image = document.getElementById('owner-pkg-image')?.value.trim();
  const price = parseInt(document.getElementById('owner-pkg-price')?.value);
  const minOrder = parseInt(document.getElementById('owner-pkg-minorder')?.value);
  const desc = document.getElementById('owner-pkg-desc')?.value.trim();
  const menuRaw = document.getElementById('owner-pkg-menu')?.value.trim();

  if (!name || !price || !minOrder || !desc || !menuRaw) {
    window.showAlert("Validasi Gagal", "Semua field harus diisi dengan benar.");
    return;
  }

  const menu = menuRaw.split(',').map(m => m.trim()).filter(m => m.length > 0);
  if (menu.length === 0) {
    window.showAlert("Validasi Gagal", "Daftar menu tidak boleh kosong. Pisahkan setiap item menu dengan tanda koma.");
    return;
  }

  const provider = PROVIDERS.find(p => p.id === providerId);
  if (!provider) return;

  const newPkg = {
    id: providerId + '-' + Math.floor(1000 + Math.random() * 9000),
    name: name,
    price: price,
    minOrder: minOrder,
    image: image || 'https://images.unsplash.com/photo-1555244162-803834f70033?w=600&auto=format&fit=crop&q=60',
    menu: menu,
    desc: desc
  };

  if (!provider.packages) provider.packages = [];
  provider.packages.push(newPkg);
  state.providers = PROVIDERS;
  state.ownerShowAddPackageForm = false;
  saveStateToLocalStorage();
  window.showAlert("Paket Ditambahkan", `Paket "${name}" berhasil ditambahkan ke daftar menu katering Anda.`, () => {
    renderApp();
  });
};

window.ownerDeletePackage = function (providerId, pkgIdx) {
  const provider = PROVIDERS.find(p => p.id === providerId);
  if (!provider || !provider.packages || !provider.packages[pkgIdx]) return;

  const pkgName = provider.packages[pkgIdx].name;
  window.showConfirm("Hapus Paket", `Apakah Anda yakin ingin menghapus paket "${pkgName}"? Tindakan ini tidak bisa dibatalkan.`, () => {
    provider.packages.splice(pkgIdx, 1);
    state.providers = PROVIDERS;
    saveStateToLocalStorage();
    window.showAlert("Paket Dihapus", `Paket "${pkgName}" berhasil dihapus dari daftar menu katering Anda.`, () => {
      renderApp();
    });
  });
};

function renderOwnerView() {
  if (!state.currentUser || state.currentUser.role !== 'owner') {
    setTimeout(() => navigateTo('home'), 10);
    return '<p class="text-center py-20 text-xs">Akses ditolak. Mengarahkan...</p>';
  }

  const provider = state.providers.find(p => p.ownerEmail === state.currentUser.email) || PROVIDERS.find(p => p.ownerEmail === state.currentUser.email);

  if (!provider) {
    return `
      <div class="min-h-screen bg-slate-50 flex items-center justify-center p-6 text-center animate-fade-in">
        <div class="bg-white max-w-md w-full rounded-3xl border border-slate-100 p-8 shadow-xl">
          <div class="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <i class="ph-fill ph-storefront text-4xl"></i>
          </div>
          <h3 class="text-lg font-extrabold text-slate-900 font-serif">Menunggu Persetujuan Admin</h3>
          <p class="text-xs text-slate-500 mt-3 mb-8 leading-relaxed">
            Terima kasih telah mendaftarkan katering Anda. Pengajuan Anda sedang direview oleh tim administrasi kami. Setelah dikonfirmasi, Anda akan otomatis dapat mengelola pesanan, stok, dan jadwal produksi di dashboard khusus owner ini.
          </p>
          <div class="flex gap-3">
            <button onclick="navigateTo('account')" class="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs py-3 rounded-xl transition-colors cursor-pointer">Kembali ke Akun</button>
            <button onclick="navigateTo('home')" class="flex-1 bg-primary hover:bg-primary-light text-white font-bold text-xs py-3 rounded-xl transition-all shadow-md shadow-primary/10 cursor-pointer">Ke Beranda</button>
          </div>
        </div>
      </div>
    `;
  }

  const activeTab = state.ownerActiveTab || 'dashboard';

  // Statistics Calculations
  const providerOrders = state.orders.filter(o => o.providerName === provider.name);
  const activeOrders = providerOrders.filter(o => o.status !== 'Sudah Sampai Tujuan' && o.status !== 'Menunggu Pembayaran');
  const activeOrdersCount = activeOrders.length;
  const totalEarnings = providerOrders.filter(o => o.status !== 'Menunggu Pembayaran').reduce((sum, o) => sum + o.totalPrice, 0);
  const totalPaxActive = activeOrders.reduce((sum, o) => sum + o.quantity, 0);

  // Setup initial inventory in state if missing
  if (!state.inventory) {
    state.inventory = [
      { name: 'Beras Premium', stock: 150, unit: 'kg', minStock: 50, perPax: 0.1 },
      { name: 'Daging Ayam Fillet', stock: 80, unit: 'kg', minStock: 30, perPax: 0.12 },
      { name: 'Daging Sapi Lada Hitam', stock: 45, unit: 'kg', minStock: 20, perPax: 0.1 },
      { name: 'Sayuran Segar (Wortel/Brokoli)', stock: 60, unit: 'kg', minStock: 25, perPax: 0.08 },
      { name: 'Bumbu & Rempah Pilihan', stock: 35, unit: 'kg', minStock: 15, perPax: 0.02 },
      { name: 'Minyak Goreng', stock: 120, unit: 'liter', minStock: 40, perPax: 0.05 },
      { name: 'Telur Ayam', stock: 50, unit: 'kg', minStock: 15, perPax: 0.06 }
    ];
  }
  if (!state.productionShifts) {
    state.productionShifts = {};
  }

  // Check if there are material critical warnings
  let criticalMaterialsCount = 0;
  state.inventory.forEach(item => {
    const required = Math.round(totalPaxActive * item.perPax * 10) / 10;
    if (item.stock < required || item.stock < item.minStock) {
      criticalMaterialsCount++;
    }
  });

  // Check capacity conflicts
  let dailyConflictsCount = 0;
  const dates = [...new Set(activeOrders.map(o => o.date))];
  dates.forEach(d => {
    const dailyTotal = activeOrders.filter(o => o.date === d).reduce((sum, o) => sum + o.quantity, 0);
    if (dailyTotal > 500) {
      dailyConflictsCount++;
    }
  });

  // Render Tabs html content
  let tabContentHtml = '';

  if (activeTab === 'dashboard') {
    // RENDER ACTIVE ORDERS AND STATISTICS
    let ordersListHtml = '';
    if (providerOrders.length === 0) {
      ordersListHtml = `
        <div class="text-center py-12 bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
          <i class="ph ph-receipt text-4xl text-slate-300 mb-2"></i>
          <h4 class="text-xs font-bold text-slate-700">Belum ada pesanan katering</h4>
          <p class="text-[10px] text-slate-500 mt-1">Pesanan dari pelanggan katering Anda akan muncul di sini.</p>
        </div>
      `;
    } else {
      providerOrders.forEach(order => {
        ordersListHtml += `
          <div class="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm space-y-4 text-left hover:border-slate-300 transition-all">
            <div class="flex justify-between items-center pb-3 border-b border-slate-100">
              <div>
                <span class="text-[9px] text-slate-400 font-bold uppercase tracking-wider">ID PESANAN</span>
                <h4 class="text-xs font-extrabold text-slate-900 mt-0.5">${order.id}</h4>
              </div>
              <div class="flex items-center gap-2">
                ${getStatusBadge(order.status)}
              </div>
            </div>
            
            <div class="flex justify-between items-start gap-4">
              <div>
                <span class="text-[9px] text-slate-400 font-medium block">${order.date}</span>
                <h3 class="text-xs font-extrabold text-slate-950">${order.packageName}</h3>
                <p class="text-[10px] text-slate-600 mt-0.5">Jumlah: <strong>${order.quantity} Pax</strong> • Total: <strong class="text-primary">Rp ${order.totalPrice.toLocaleString('id-ID')}</strong></p>
                <p class="text-[10px] text-slate-500 mt-1.5"><i class="ph ph-map-pin text-primary inline"></i> ${order.address}</p>
                
                <div class="mt-2 flex flex-wrap gap-1 items-center">
                  ${order.liveCooking ? `
                    <span class="inline-flex items-center gap-0.5 bg-orange-50 text-orange-700 border border-orange-200/50 text-[8px] font-extrabold px-1.5 py-0.5 rounded-md uppercase tracking-wider">
                      <i class="ph-fill ph-fire"></i> Live Cooking
                    </span>
                  ` : ''}
                  ${order.customMenu ? `
                    <span class="inline-flex items-center gap-0.5 bg-amber-50 text-amber-700 border border-amber-200/50 text-[8px] font-extrabold px-1.5 py-0.5 rounded-md uppercase tracking-wider">
                      <i class="ph ph-sliders"></i> Kustom Box
                    </span>
                  ` : ''}
                </div>

                ${order.customMenu ? `
                  <div class="mt-2.5 p-2 bg-slate-50 border border-slate-200/60 rounded-xl max-w-md">
                    <span class="text-[8px] font-black text-slate-400 uppercase block tracking-wider mb-1">Daftar Menu Pilihan Customer:</span>
                    <div class="flex flex-wrap gap-1">
                      ${order.customMenu.map(m => `
                        <span class="text-[9px] bg-white border border-slate-100 text-slate-700 px-1.5 py-0.5 rounded shadow-sm font-semibold">${m}</span>
                      `).join('')}
                    </div>
                  </div>
                ` : ''}
              </div>
            </div>
            
            <div class="mt-4 pt-4 border-t border-slate-100 space-y-2">
              <span class="text-[9px] text-slate-400 font-bold uppercase tracking-wider block">Perbarui Status Proses:</span>
              <div class="flex flex-wrap gap-1.5">
                ${TRACKING_STEPS.map(step => {
                  const isCurrent = step.status === order.status;
                  let btnColor = 'bg-slate-100 hover:bg-slate-200 text-slate-600';
                  if (isCurrent) {
                    btnColor = 'bg-primary text-white pointer-events-none ring-2 ring-primary/20';
                  }
                  return `
                    <button onclick="window.ownerUpdateOrderStatus('${order.id}', '${step.status}')" class="px-2.5 py-1.5 rounded-lg text-[9px] font-bold transition-all cursor-pointer ${btnColor}" title="${step.status}">
                      <i class="ph ${step.icon} mr-0.5"></i> ${step.status}
                    </button>
                  `;
                }).join('')}
              </div>
            </div>
          </div>
        `;
      });
    }

    tabContentHtml = `
      <div class="space-y-6">
        <div class="flex justify-between items-center">
          <div>
            <h3 class="text-xs font-bold text-slate-800 uppercase tracking-wider">Daftar Pesanan Katering Anda</h3>
            <p class="text-[10px] text-slate-400">Kelola dan update proses pengerjaan katering pelanggan</p>
          </div>
        </div>
        <div class="space-y-4">
          ${ordersListHtml}
        </div>
      </div>
    `;
  } else if (activeTab === 'stock') {
    // RENDER STOCK MONITORING PANEL
    let stockItemsHtml = '';
    state.inventory.forEach((item, idx) => {
      const required = Math.round(totalPaxActive * item.perPax * 10) / 10;
      const isCritical = item.stock < item.minStock;
      const isShortage = item.stock < required;

      let statusBadge = '';
      if (isShortage) {
        statusBadge = `<span class="bg-red-50 text-red-700 border border-red-200 text-[8px] font-bold px-2 py-0.5 rounded-full flex items-center gap-0.5"><i class="ph ph-warning"></i> Kurang ${Math.round((required - item.stock) * 10) / 10} ${item.unit}</span>`;
      } else if (isCritical) {
        statusBadge = `<span class="bg-orange-50 text-orange-700 border border-orange-200 text-[8px] font-bold px-2 py-0.5 rounded-full flex items-center gap-0.5"><i class="ph ph-warning-circle"></i> Batas Minimum</span>`;
      } else {
        statusBadge = `<span class="bg-emerald-50 text-emerald-700 border border-emerald-200 text-[8px] font-bold px-2 py-0.5 rounded-full flex items-center gap-0.5"><i class="ph ph-check-circle"></i> Stok Aman</span>`;
      }

      // Bar color
      let barColor = 'bg-primary';
      if (isShortage) barColor = 'bg-red-500';
      else if (isCritical) barColor = 'bg-amber-500';

      const percentage = Math.min(100, Math.round((item.stock / 300) * 100));

      stockItemsHtml += `
        <tr class="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
          <td class="py-4 pl-4">
            <h4 class="text-xs font-bold text-slate-800">${item.name}</h4>
            <span class="text-[9px] text-slate-400">Min. Kebutuhan: ${item.minStock} ${item.unit}</span>
          </td>
          <td class="py-4">
            <div class="flex items-center gap-3">
              <span class="text-xs font-black text-slate-900 w-16 text-right">${item.stock} ${item.unit}</span>
              <div class="w-24 bg-slate-100 rounded-full h-1.5 overflow-hidden hidden md:block">
                <div class="${barColor} h-1.5 rounded-full" style="width: ${percentage}%"></div>
              </div>
            </div>
          </td>
          <td class="py-4">
            <span class="text-xs font-mono font-bold text-slate-700">${required} ${item.unit}</span>
          </td>
          <td class="py-4">
            ${statusBadge}
          </td>
          <td class="py-4 pr-4">
            <div class="flex items-center gap-1">
              <input type="number" id="restock-${idx}" placeholder="+10" class="w-12 bg-slate-50 border border-slate-200 rounded-lg px-1.5 py-1 text-[10px] text-center font-bold focus:outline-none focus:border-emerald-500" />
              <button onclick="window.ownerRestock(${idx}, document.getElementById('restock-${idx}').value)" class="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[9px] px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer flex items-center justify-center">
                Restock
              </button>
            </div>
          </td>
        </tr>
      `;
    });

    tabContentHtml = `
      <div class="space-y-6">
        <div class="bg-white rounded-3xl border border-slate-100 p-5 shadow-sm">
          <h3 class="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">Prakiraan Bahan Mentah</h3>
          <p class="text-[10px] text-slate-500 leading-normal">
            Berdasarkan <strong>${activeOrdersCount} pesanan katering aktif saat ini</strong> (Total katering: <strong>${totalPaxActive} Pax</strong>), berikut estimasi bahan makanan yang harus dipersiapkan koki dapur Anda:
          </p>
        </div>
        
        <div class="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm">
          <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="bg-slate-50/70 border-b border-slate-100 text-[9px] font-black text-slate-400 uppercase tracking-wider">
                  <th class="py-3 pl-4">Bahan Baku</th>
                  <th class="py-3">Stok Saat Ini</th>
                  <th class="py-3">Kebutuhan Pesanan</th>
                  <th class="py-3">Status</th>
                  <th class="py-3 pr-4">Opsi Restock</th>
                </tr>
              </thead>
              <tbody>
                ${stockItemsHtml}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  } else if (activeTab === 'scheduler') {
    // RENDER PRODUCTION SCHEDULER & CAPACITY PLANNING
    let schedulerHtml = '';

    if (activeOrders.length === 0) {
      schedulerHtml = `
        <div class="text-center py-12 bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
          <i class="ph ph-calendar text-4xl text-slate-300 mb-2"></i>
          <h4 class="text-xs font-bold text-slate-700">Belum ada jadwal produksi aktif</h4>
          <p class="text-[10px] text-slate-500 mt-1">Jadwal memasak & pengemasan berdasarkan tanggal pengantaran pesanan aktif akan tercantum di sini.</p>
        </div>
      `;
    } else {
      activeOrders.forEach(order => {
        // Daily total calculations to show warnings
        const dateOrders = activeOrders.filter(o => o.date === order.date);
        const dailyTotal = dateOrders.reduce((sum, o) => sum + o.quantity, 0);
        const isConflict = dailyTotal > 500;

        const currentShift = state.productionShifts[order.id] || '';

        schedulerHtml += `
          <div class="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm space-y-4 text-left relative overflow-hidden">
            ${isConflict ? `
              <div class="absolute left-0 top-0 bottom-0 w-1 bg-red-500"></div>
            ` : ''}
            <div class="flex justify-between items-start">
              <div>
                <span class="bg-slate-100 text-slate-600 text-[8px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">${order.date}</span>
                <h4 class="text-xs font-extrabold text-slate-900 mt-1.5">${order.packageName} (${order.quantity} Pax)</h4>
                <p class="text-[10px] text-slate-500 mt-0.5">Order ID: ${order.id} • ${order.providerName}</p>
              </div>
              <span class="text-xs font-black text-primary bg-primary/5 px-2.5 py-1 rounded-lg">Rp ${order.totalPrice.toLocaleString('id-ID')}</span>
            </div>
            
            <div class="flex items-center justify-between p-3 bg-slate-50 border border-slate-100 rounded-xl gap-2 flex-wrap">
              <div class="flex items-center gap-1.5 text-xs text-slate-700 font-medium">
                <i class="ph ph-clock text-base text-primary"></i> Alokasi Shift Masak:
              </div>
              <select onchange="window.ownerUpdateShift('${order.id}', this.value)" class="bg-white border border-slate-200 rounded-lg px-2 py-1.5 text-[10px] font-bold text-slate-700 focus:outline-none cursor-pointer">
                <option value="" ${currentShift === '' ? 'selected' : ''}>-- Belum Dialokasikan --</option>
                <option value="Pagi (06:00 - 10:00)" ${currentShift === 'Pagi (06:00 - 10:00)' ? 'selected' : ''}>Pagi (06:00 - 10:00)</option>
                <option value="Siang (11:00 - 15:00)" ${currentShift === 'Siang (11:00 - 15:00)' ? 'selected' : ''}>Siang (11:00 - 15:00)</option>
                <option value="Sore (15:00 - 19:00)" ${currentShift === 'Sore (15:00 - 19:00)' ? 'selected' : ''}>Sore (15:00 - 19:00)</option>
              </select>
            </div>

            ${isConflict ? `
              <div class="p-3 bg-red-50 border border-red-100 rounded-xl text-red-800 text-[9px] flex gap-2 items-start animate-pulse">
                <i class="ph ph-warning-octagon text-base flex-shrink-0 mt-0.5"></i>
                <div>
                  <span class="font-extrabold uppercase tracking-wider block">⚠️ Konflik Kapasitas Dapur Harian</span>
                  <p class="mt-0.5 leading-normal">
                    Total porsi pesanan pada tanggal <strong>${order.date}</strong> adalah <strong>${dailyTotal} pax</strong> (Melebihi limit kapasitas harian 500 pax). Harap bagi produksi ke shift <strong>Pagi, Siang, atau Sore</strong> agar menghindari overload dapur!
                  </p>
                </div>
              </div>
            ` : `
              <div class="p-3 bg-emerald-50/70 border border-emerald-100 rounded-xl text-emerald-800 text-[9px] flex gap-2 items-start">
                <i class="ph ph-check-circle text-base flex-shrink-0 mt-0.5"></i>
                <div>
                  <span class="font-extrabold uppercase tracking-wider block">Kapasitas Aman</span>
                  <p class="mt-0.5 leading-normal">Total beban katering harian (${dailyTotal} pax) dalam ambang batas kapasitas operasional aman dapur Anda.</p>
                </div>
              </div>
            `}
          </div>
        `;
      });
    }

    tabContentHtml = `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500 to-orange-600 rounded-3xl text-white p-5 shadow-sm space-y-2">
          <div class="flex items-center gap-2">
            <i class="ph ph-calendar-blank text-2xl"></i>
            <h3 class="text-xs font-black uppercase tracking-wider">Perencanaan Produksi & Kapasitas</h3>
          </div>
          <p class="text-[10px] text-white/90 leading-relaxed font-sans">
            Gunakan penjadwal shift memasak di bawah ini untuk mengorganisasi pembagian kerja kru dapur Anda dan mencegah terjadinya bentrokan pesanan di hari yang sama.
          </p>
        </div>

        <div class="space-y-4">
          ${schedulerHtml}
        </div>
      </div>
    `;
  } else if (activeTab === 'packages') {
    // RENDER PACKAGES MANAGEMENT
    let packagesListHtml = '';
    const pkgs = provider.packages || [];
    
    if (pkgs.length === 0) {
      packagesListHtml = `
        <div class="text-center py-12 bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
          <i class="ph ph-package text-4xl text-slate-300 mb-2"></i>
          <h4 class="text-xs font-bold text-slate-700">Belum ada paket menu</h4>
          <p class="text-[10px] text-slate-500 mt-1">Tambahkan paket menu katering pertama Anda untuk mulai menerima pesanan.</p>
        </div>
      `;
    } else {
      pkgs.forEach((pkg, idx) => {
        packagesListHtml += `
          <div class="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm hover:border-slate-300 transition-all">
            <div class="flex gap-4">
              <img src="${pkg.image}" alt="${pkg.name}" class="w-20 h-20 rounded-xl object-cover border border-slate-100 flex-shrink-0" />
              <div class="flex-1 min-w-0">
                <h4 class="text-sm font-extrabold text-slate-950 font-serif">${pkg.name}</h4>
                <p class="text-[10px] text-slate-500 mt-1 leading-relaxed">${pkg.desc}</p>
                <div class="flex gap-4 mt-2 text-[9px] text-slate-500 font-medium">
                  <span>Harga: <strong class="text-primary">Rp ${pkg.price.toLocaleString('id-ID')}</strong>/pax</span>
                  <span>\u2022</span>
                  <span>Min. Order: <strong>${pkg.minOrder} Pax</strong></span>
                </div>
                <div class="flex flex-wrap gap-1 mt-2">
                  ${pkg.menu.map(m => `<span class="text-[8px] bg-slate-50 border border-slate-100 text-slate-600 px-1.5 py-0.5 rounded-md font-medium">${m}</span>`).join('')}
                </div>
              </div>
              <button onclick="window.ownerDeletePackage('${provider.id}', ${idx})" class="w-8 h-8 rounded-lg bg-red-50 hover:bg-red-100 text-red-500 flex items-center justify-center flex-shrink-0 transition-colors cursor-pointer" title="Hapus Paket">
                <i class="ph ph-trash text-base"></i>
              </button>
            </div>
          </div>
        `;
      });
    }

    tabContentHtml = `
      <div class="space-y-6">
        <div class="flex justify-between items-center">
          <div>
            <h3 class="text-xs font-bold text-slate-800 uppercase tracking-wider">Kelola Paket Menu Katering</h3>
            <p class="text-[10px] text-slate-400">Tambah dan atur paket menu yang ditawarkan kepada pelanggan</p>
          </div>
          <button onclick="window.ownerToggleAddPackageForm()" class="bg-primary hover:bg-primary-light text-white font-bold text-[10px] px-4 py-2.5 rounded-xl transition-all shadow shadow-primary/10 cursor-pointer flex items-center gap-1.5">
            <i class="ph ph-plus-circle text-base"></i> Tambah Paket Baru
          </button>
        </div>

        ${state.ownerShowAddPackageForm ? `
          <div class="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm space-y-4 animate-fade-in">
            <h4 class="text-xs font-extrabold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
              <i class="ph ph-plus-circle text-primary text-base"></i> Form Tambah Paket Baru
            </h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">Nama Paket</label>
                <input type="text" id="owner-pkg-name" placeholder="Contoh: Paket Prasmanan Spesial" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-primary transition-colors text-slate-700" />
              </div>
              <div>
                <label class="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">URL Gambar</label>
                <input type="text" id="owner-pkg-image" placeholder="https://images.unsplash.com/..." class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-primary transition-colors text-slate-700" />
              </div>
              <div>
                <label class="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">Harga per Pax (Rp)</label>
                <input type="number" id="owner-pkg-price" placeholder="45000" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-primary transition-colors text-slate-700" />
              </div>
              <div>
                <label class="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">Minimum Order (Pax)</label>
                <input type="number" id="owner-pkg-minorder" placeholder="30" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-primary transition-colors text-slate-700" />
              </div>
            </div>
            <div>
              <label class="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">Deskripsi Paket</label>
              <textarea id="owner-pkg-desc" rows="2" placeholder="Deskripsi singkat tentang paket ini..." class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-primary transition-colors text-slate-700 resize-none"></textarea>
            </div>
            <div>
              <label class="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">Daftar Menu (pisahkan dengan koma)</label>
              <textarea id="owner-pkg-menu" rows="2" placeholder="Nasi Putih, Ayam Goreng, Sayur Asem, Sambal, Kerupuk, Air Mineral" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-primary transition-colors text-slate-700 resize-none"></textarea>
            </div>
            <div class="flex gap-3 justify-end pt-2">
              <button onclick="window.ownerToggleAddPackageForm()" class="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-[10px] px-4 py-2.5 rounded-xl transition-colors cursor-pointer">Batal</button>
              <button onclick="window.ownerSubmitNewPackage('${provider.id}')" class="bg-primary hover:bg-primary-light text-white font-bold text-[10px] px-5 py-2.5 rounded-xl transition-all shadow shadow-primary/10 cursor-pointer flex items-center gap-1.5">
                <i class="ph ph-check-circle text-base"></i> Simpan Paket
              </button>
            </div>
          </div>
        ` : ''}

        <div class="space-y-4">
          ${packagesListHtml}
        </div>
      </div>
    `;
  }

  return `
    <div class="min-h-screen bg-slate-50 flex flex-col font-sans">
      <!-- Owner Header -->
      <header class="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-sm px-6 py-4 flex justify-between items-center">
        <div class="flex items-center gap-3">
          <button onclick="navigateTo('account')" class="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer">
            <i class="ph ph-arrow-left text-lg"></i>
          </button>
          <div>
            <h1 class="text-sm font-black text-slate-900 tracking-tight flex items-center gap-1.5 font-serif">
              <i class="ph-fill ph-storefront text-emerald-600"></i> Dashboard Owner Catering
            </h1>
            <p class="text-[10px] text-slate-500 font-medium font-sans">${provider.name} • Mitra Terverifikasi</p>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <span class="text-[9px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-100 px-2.5 py-1 rounded-full flex items-center gap-0.5">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Mode Owner
          </span>
          <button onclick="navigateTo('home')" class="text-xs text-primary font-bold hover:underline cursor-pointer flex items-center gap-1">
            <i class="ph ph-house"></i> Area User
          </button>
        </div>
      </header>

      <!-- Owner Statistics -->
      <section class="max-w-4xl w-full mx-auto px-6 pt-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm flex items-center justify-between">
            <div>
              <span class="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Total Pendapatan</span>
              <span class="text-lg font-black text-slate-900 mt-1 block">Rp ${totalEarnings.toLocaleString('id-ID')}</span>
            </div>
            <div class="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-xl">
              <i class="ph-fill ph-wallet"></i>
            </div>
          </div>
          
          <div class="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm flex items-center justify-between">
            <div>
              <span class="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Pesanan Aktif</span>
              <span class="text-lg font-black text-slate-900 mt-1 block">${activeOrdersCount} Pesanan</span>
            </div>
            <div class="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-xl">
              <i class="ph-fill ph-tray"></i>
            </div>
          </div>
          
          <div class="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm flex items-center justify-between">
            <div>
              <span class="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Total Porsi Aktif</span>
              <span class="text-lg font-black text-slate-900 mt-1 block">${totalPaxActive} Pax</span>
            </div>
            <div class="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center text-xl">
              <i class="ph-fill ph-cooking-pot"></i>
            </div>
          </div>
        </div>

        <!-- Status Proses Pesanan Breakdown -->
        <div class="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm mt-4">
          <h3 class="text-xs font-bold text-slate-800 uppercase tracking-wider mb-4 flex items-center gap-1.5">
            <i class="ph ph-chart-bar text-primary"></i> Status Proses Pesanan
          </h3>
          <div class="space-y-3">
            ${(() => {
              const ownerStatusCounts = {
                'Menunggu Pembayaran': 0,
                'Pembayaran Terkonfirmasi': 0,
                'Menyiapkan Bahan': 0,
                'Mulai Memasak': 0,
                'Mulai Mengemas': 0,
                'Sedang Diantar': 0,
                'Sudah Sampai Tujuan': 0
              };
              providerOrders.forEach(o => {
                if (ownerStatusCounts[o.status] !== undefined) ownerStatusCounts[o.status]++;
              });
              const totalOwnerOrders = providerOrders.length;
              return Object.entries(ownerStatusCounts).map(([status, count]) => {
                const pct = totalOwnerOrders > 0 ? Math.round((count / totalOwnerOrders) * 100) : 0;
                let barColor = 'bg-slate-300';
                if (status === 'Menunggu Pembayaran') barColor = 'bg-amber-400';
                else if (status === 'Pembayaran Terkonfirmasi') barColor = 'bg-emerald-400';
                else if (['Menyiapkan Bahan', 'Mulai Memasak', 'Mulai Mengemas'].includes(status)) barColor = 'bg-orange-400';
                else if (status === 'Sedang Diantar') barColor = 'bg-blue-500';
                else if (status === 'Sudah Sampai Tujuan') barColor = 'bg-emerald-600';
                return `
                  <div>
                    <div class="flex justify-between items-center text-xs mb-1">
                      <span class="font-medium text-slate-600">${status}</span>
                      <span class="font-bold text-slate-800">${count} (${pct}%)</span>
                    </div>
                    <div class="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div class="h-full rounded-full ${barColor}" style="width: ${pct}%"></div>
                    </div>
                  </div>
                `;
              }).join('');
            })()}
          </div>
        </div>
      </section>

      <!-- Owner Sub-Navigation -->
      <div class="bg-white border-b border-slate-100 px-6 py-1 flex items-center justify-center gap-6 overflow-x-auto scrollbar-none sticky top-[69px] z-20 shadow-sm mt-6">
        <button onclick="window.setOwnerTab('dashboard')" class="py-3.5 text-xs font-extrabold cursor-pointer relative transition-all ${activeTab === 'dashboard' ? 'text-primary' : 'text-slate-400 hover:text-slate-600'}">
          Kelola Pesanan
          ${activeTab === 'dashboard' ? '<span class="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"></span>' : ''}
        </button>
        
        <button onclick="window.setOwnerTab('packages')" class="py-3.5 text-xs font-extrabold cursor-pointer relative transition-all ${activeTab === 'packages' ? 'text-primary' : 'text-slate-400 hover:text-slate-600'}">
          Kelola Paket
          <span class="bg-slate-200 text-slate-600 text-[8px] px-1.5 rounded-full ml-1 font-bold">${provider.packages ? provider.packages.length : 0}</span>
          ${activeTab === 'packages' ? '<span class="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"></span>' : ''}
        </button>
        
        <button onclick="window.setOwnerTab('stock')" class="py-3.5 text-xs font-extrabold cursor-pointer relative transition-all ${activeTab === 'stock' ? 'text-primary' : 'text-slate-400 hover:text-slate-600'}">
          Stok Bahan
          ${criticalMaterialsCount > 0 ? `<span class="bg-red-500 text-white text-[8px] px-1 rounded-full ml-1 font-bold animate-pulse">${criticalMaterialsCount}</span>` : '<span class="bg-emerald-500 text-white text-[8px] px-1 rounded-full ml-1 font-bold"><i class="ph ph-check"></i></span>'}
          ${activeTab === 'stock' ? '<span class="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"></span>' : ''}
        </button>
        
        <button onclick="window.setOwnerTab('scheduler')" class="py-3.5 text-xs font-extrabold cursor-pointer relative transition-all ${activeTab === 'scheduler' ? 'text-primary' : 'text-slate-400 hover:text-slate-600'}">
          Jadwal Produksi
          ${dailyConflictsCount > 0 ? `<span class="bg-red-500 text-white text-[8px] px-1 rounded-full ml-1 font-bold animate-pulse"><i class="ph ph-warning"></i></span>` : ''}
          ${activeTab === 'scheduler' ? '<span class="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"></span>' : ''}
        </button>
      </div>

      <!-- Owner Content Body -->
      <div class="max-w-4xl w-full mx-auto px-6 py-6 flex-1 mb-16">
        ${tabContentHtml}
      </div>
    </div>
  `;
}

function renderAdminView() {
  if (!state.currentUser || state.currentUser.role !== 'admin') {
    setTimeout(() => navigateTo('home'), 10);
    return '<p class="text-center py-20 text-xs">Akses ditolak. Mengarahkan...</p>';
  }

  const activeTab = state.adminActiveTab || 'dashboard';

  // Calculations
  const totalOrders = state.orders.length;
  const totalRevenue = state.orders.reduce((sum, o) => sum + o.totalPrice, 0);
  const activeOrdersCount = state.orders.filter(o => o.status !== 'Sudah Sampai Tujuan' && o.status !== 'Menunggu Pembayaran').length;
  const totalProviders = PROVIDERS.length;

  return `
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
            Admin: ${state.currentUser.name}
          </span>
          <button onclick="navigateTo('home')" class="text-xs text-primary font-bold hover:underline cursor-pointer flex items-center gap-1">
            <i class="ph ph-house"></i> Area User
          </button>
        </div>
      </header>

      <!-- Admin Sub-Navigation -->
      <div class="bg-white border-b border-slate-100 px-6 py-1 flex gap-6 overflow-x-auto scrollbar-none sticky top-[69px] z-20 shadow-sm">
        <button onclick="window.setAdminTab('dashboard')" class="py-3.5 text-xs font-extrabold cursor-pointer relative transition-all ${activeTab === 'dashboard' ? 'text-primary' : 'text-slate-400 hover:text-slate-600'}">
          Ringkasan
          ${activeTab === 'dashboard' ? '<span class="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"></span>' : ''}
        </button>
        <button onclick="window.setAdminTab('orders')" class="py-3.5 text-xs font-extrabold cursor-pointer relative transition-all ${activeTab === 'orders' ? 'text-primary' : 'text-slate-400 hover:text-slate-600'}">
          Kelola Pesanan
          ${activeOrdersCount > 0 ? `<span class="bg-primary text-white text-[9px] px-1.5 py-0.5 rounded-full ml-1 font-bold animate-pulse">${activeOrdersCount}</span>` : ''}
          ${activeTab === 'orders' ? '<span class="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"></span>' : ''}
        </button>
        <button onclick="window.setAdminTab('providers')" class="py-3.5 text-xs font-extrabold cursor-pointer relative transition-all ${activeTab === 'providers' ? 'text-primary' : 'text-slate-400 hover:text-slate-600'}">
          Kelola Mitra
          ${activeTab === 'providers' ? '<span class="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"></span>' : ''}
        </button>
        <button onclick="window.setAdminTab('registrations')" class="py-3.5 text-xs font-extrabold cursor-pointer relative transition-all ${activeTab === 'registrations' ? 'text-primary' : 'text-slate-400 hover:text-slate-600'}">
          Review Pendaftaran
          ${state.cateringRegistrations.filter(r => r.status === 'pending').length > 0 ? `<span class="bg-primary text-white text-[9px] px-1.5 py-0.5 rounded-full ml-1 font-bold animate-pulse">${state.cateringRegistrations.filter(r => r.status === 'pending').length}</span>` : ''}
          ${activeTab === 'registrations' ? '<span class="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"></span>' : ''}
        </button>
      </div>

      <div class="max-w-4xl mx-auto px-6 py-6">
        ${activeTab === 'dashboard' ? renderAdminOverview(totalRevenue, totalOrders, activeOrdersCount, totalProviders) : ''}
        ${activeTab === 'orders' ? renderAdminOrders() : ''}
        ${activeTab === 'providers' ? renderAdminProviders() : ''}
        ${activeTab === 'registrations' ? renderAdminRegistrations() : ''}
      </div>
    </div>
  `;
}

window.setAdminTab = function (tabName) {
  state.adminActiveTab = tabName;
  saveStateToLocalStorage();
  renderApp();
};

function renderAdminOverview(totalRevenue, totalOrders, activeOrdersCount, totalProviders) {
  const statusCounts = {
    'Menunggu Pembayaran': 0,
    'Pembayaran Terkonfirmasi': 0,
    'Menyiapkan Bahan': 0,
    'Mulai Memasak': 0,
    'Mulai Mengemas': 0,
    'Sedang Diantar': 0,
    'Sudah Sampai Tujuan': 0
  };
  state.orders.forEach(o => {
    if (statusCounts[o.status] !== undefined) {
      statusCounts[o.status]++;
    }
  });

  return `
    <div class="space-y-6 animate-fade-in">
      <!-- Row Ringkasan Card -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm">
          <div class="w-8 h-8 rounded-xl bg-primary/5 text-primary flex items-center justify-center mb-3">
            <i class="ph ph-wallet text-lg"></i>
          </div>
          <span class="text-[9px] text-slate-400 font-bold uppercase tracking-wider block">Total Pendapatan</span>
          <div class="text-sm font-black text-slate-900 mt-1">Rp ${totalRevenue.toLocaleString('id-ID')}</div>
        </div>

        <div class="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm">
          <div class="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
            <i class="ph ph-receipt text-lg"></i>
          </div>
          <span class="text-[9px] text-slate-400 font-bold uppercase tracking-wider block">Total Pesanan</span>
          <div class="text-sm font-black text-slate-900 mt-1">${totalOrders} Transaksi</div>
        </div>

        <div class="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm">
          <div class="w-8 h-8 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mb-3">
            <i class="ph ph-cooking-pot text-lg"></i>
          </div>
          <span class="text-[9px] text-slate-400 font-bold uppercase tracking-wider block">Pesanan Aktif</span>
          <div class="text-sm font-black text-primary mt-1">${activeOrdersCount} Aktif</div>
        </div>

        <div class="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm">
          <div class="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
            <i class="ph ph-storefront text-lg"></i>
          </div>
          <span class="text-[9px] text-slate-400 font-bold uppercase tracking-wider block">Jumlah Mitra</span>
          <div class="text-sm font-black text-slate-900 mt-1">${totalProviders} Brand</div>
        </div>
      </div>

      <!-- Detail Status Breakdown -->
      <div class="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm">
        <h3 class="text-xs font-bold text-slate-800 uppercase tracking-wider mb-4 flex items-center gap-1.5">
          <i class="ph ph-chart-bar text-primary"></i> Status Proses Pesanan
        </h3>
        
        <div class="space-y-3">
          ${Object.entries(statusCounts).map(([status, count]) => {
    const percentage = totalOrders > 0 ? Math.round((count / totalOrders) * 100) : 0;
    let barColor = 'bg-slate-300';
    if (status === 'Menunggu Pembayaran') barColor = 'bg-amber-400';
    else if (status === 'Pembayaran Terkonfirmasi') barColor = 'bg-emerald-400';
    else if (['Menyiapkan Bahan', 'Mulai Memasak', 'Mulai Mengemas'].includes(status)) barColor = 'bg-orange-400';
    else if (status === 'Sedang Diantar') barColor = 'bg-blue-500';
    else if (status === 'Sudah Sampai Tujuan') barColor = 'bg-emerald-600';

    return `
              <div>
                <div class="flex justify-between items-center text-xs mb-1">
                  <span class="font-medium text-slate-600">${status}</span>
                  <span class="font-bold text-slate-800">${count} (${percentage}%)</span>
                </div>
                <div class="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div class="h-full rounded-full ${barColor}" style="width: ${percentage}%"></div>
                </div>
              </div>
            `;
  }).join('')}
        </div>
      </div>
    </div>
  `;
}

function renderAdminOrders() {
  let ordersListHtml = '';

  if (state.orders.length === 0) {
    ordersListHtml = `
      <div class="text-center py-10 bg-white border border-slate-100 rounded-2xl animate-fade-in">
        <i class="ph ph-receipt text-3xl text-slate-400 mb-1"></i>
        <h4 class="text-xs font-bold text-slate-700">Belum ada pesanan</h4>
      </div>
    `;
  } else {
    state.orders.forEach(order => {
      ordersListHtml += `
        <div class="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm space-y-4 animate-fade-in">
          <div class="flex justify-between items-start pb-3.5 border-b border-slate-100">
            <div>
              <span class="text-[9px] text-slate-400 font-bold block uppercase">ID PESANAN</span>
              <span class="text-xs font-mono font-bold text-slate-800">${order.id}</span>
              <span class="text-[9px] text-slate-400 font-medium block mt-1">${order.date}</span>
            </div>
            <div>
              ${getStatusBadge(order.status)}
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <div>
              <span class="text-[9px] text-slate-400 font-bold uppercase tracking-wider block">Katering & Menu</span>
              <h4 class="text-xs font-extrabold text-slate-900 mt-1">${order.providerName}</h4>
              <p class="text-xs text-slate-600 mt-0.5">${order.packageName} (${order.quantity} Pax)</p>
            </div>
            <div>
              <span class="text-[9px] text-slate-400 font-bold uppercase tracking-wider block">Alamat Pengiriman</span>
              <p class="text-xs text-slate-600 leading-normal mt-1">${order.address}</p>
            </div>
          </div>

          <div class="flex flex-col md:flex-row justify-between items-stretch md:items-center pt-3.5 border-t border-slate-50 gap-3">
            <div>
              <span class="text-[9px] text-slate-400 font-bold uppercase tracking-wider block text-left">Total Pembayaran</span>
              <div class="text-sm font-black text-primary text-left">Rp ${order.totalPrice.toLocaleString('id-ID')}</div>
            </div>

            <div class="flex flex-wrap gap-1.5 justify-end">
              <span class="text-[9px] text-slate-400 font-bold uppercase tracking-wider block w-full mb-1 text-left md:text-right">Perbarui Status:</span>
              ${TRACKING_STEPS.map(step => {
        const isCurrent = step.status === order.status;
        let btnColor = 'bg-slate-100 hover:bg-slate-200 text-slate-600';
        if (isCurrent) {
          btnColor = 'bg-primary text-white pointer-events-none ring-2 ring-primary/20';
        }
        return `
                  <button onclick="window.adminUpdateOrderStatus('${order.id}', '${step.status}')" class="px-2 py-1 rounded text-[8px] font-bold transition-all cursor-pointer ${btnColor}">
                    ${step.status.split(' ')[0]}
                  </button>
                `;
      }).join('')}
            </div>
          </div>
        </div>
      `;
    });
  }

  return `
    <div class="space-y-4 animate-fade-in text-left">
      <div class="flex justify-between items-center mb-2">
        <h3 class="text-xs font-bold text-slate-800 uppercase tracking-wider">Semua Pesanan Katering</h3>
        <span class="text-[10px] font-bold bg-slate-200 text-slate-600 px-2 py-0.5 rounded-full">${state.orders.length} Pesanan</span>
      </div>
      
      <div class="space-y-4">
        ${ordersListHtml}
      </div>
    </div>
  `;
}

window.adminUpdateOrderStatus = function (orderId, newStatus) {
  const order = state.orders.find(o => o.id === orderId);
  if (!order) return;

  order.status = newStatus;
  if (!order.statusHistory) order.statusHistory = {};

  const steps = TRACKING_STEPS.map(s => s.status);
  const targetIdx = steps.indexOf(newStatus);

  steps.forEach((stepName, idx) => {
    if (idx <= targetIdx) {
      if (!order.statusHistory[stepName]) {
        order.statusHistory[stepName] = getCurrentTimeStr();
      }
    } else {
      delete order.statusHistory[stepName];
    }
  });

  if (newStatus === 'Sudah Sampai Tujuan' || newStatus === 'Menunggu Pembayaran') {
    if (orderSimulations[orderId]) {
      clearInterval(orderSimulations[orderId].intervalId);
      delete orderSimulations[orderId];
    }
  } else {
    if (!orderSimulations[orderId]) {
      startOrderSimulation(orderId);
    }
  }

  saveStateToLocalStorage();
  showToast(order.id, order.providerName, newStatus);
  window.showAlert("Status Diperbarui", `Status Pesanan ${orderId} berhasil diubah menjadi "${newStatus}"!`, () => {
    renderApp();
  });
};

function renderAdminProviders() {
  const form = state.adminForm || null;

  if (form === 'add_provider') {
    return renderAddProviderForm();
  }

  if (form === 'add_package') {
    return renderAddPackageForm();
  }

  let providersListHtml = '';
  PROVIDERS.forEach(p => {
    providersListHtml += `
      <div class="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm space-y-4 animate-fade-in text-left">
        <div class="flex gap-4">
          <img src="${p.image}" alt="${p.name}" class="w-16 h-16 rounded-xl object-cover flex-shrink-0" />
          <div class="flex-1 min-w-0">
            <div class="flex justify-between items-start gap-1">
              <h4 class="text-sm font-extrabold text-slate-900 truncate">${p.name}</h4>
              <span class="flex items-center gap-0.5 bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded text-[9px] font-bold">
                <i class="ph-fill ph-star text-amber-500"></i> ${p.rating}
              </span>
            </div>
            <p class="text-xs text-slate-500 mt-1 leading-normal"><i class="ph ph-map-pin text-primary inline"></i> ${p.address}</p>
            <p class="text-[10px] text-slate-400 mt-1 font-medium">Jarak: ${p.distance} km • Min. Order: Rp ${p.minPrice.toLocaleString('id-ID')} / porsi</p>
          </div>
        </div>

        <div class="pt-3 border-t border-slate-50 space-y-3">
          <div class="flex justify-between items-center">
            <span class="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Daftar Paket Hidangan:</span>
            <button onclick="window.showAddPackageForm('${p.id}')" class="text-[10px] text-primary font-bold hover:underline flex items-center gap-0.5 cursor-pointer">
              <i class="ph ph-plus-circle"></i> Tambah Paket Menu
            </button>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            ${p.packages.map(pkg => `
              <div class="bg-slate-50 border border-slate-100 rounded-xl p-3.5 relative overflow-hidden group">
                <div class="flex justify-between items-start gap-2">
                  <h5 class="text-xs font-bold text-slate-900 truncate w-32">${pkg.name}</h5>
                  <span class="text-[9px] bg-primary/5 text-primary px-2 py-0.5 rounded-full font-bold flex-shrink-0">
                    Rp ${pkg.price.toLocaleString('id-ID')}
                  </span>
                </div>
                <p class="text-[10px] text-slate-500 mt-1 line-clamp-1 leading-relaxed">${pkg.desc}</p>
                <div class="text-[8px] text-slate-400 mt-1.5 font-semibold">Min: ${pkg.minOrder} Pax • ${pkg.menu.length} Pilihan Menu</div>
                <button onclick="window.adminDeletePackage('${p.id}', '${pkg.id}')" class="absolute right-2 bottom-2 text-red-500 hover:text-red-700 text-xs md:opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                  <i class="ph ph-trash"></i> Hapus
                </button>
              </div>
            `).join('')}
            ${p.packages.length === 0 ? `
              <div class="text-center py-4 bg-slate-50 border border-dashed border-slate-200 rounded-xl col-span-2">
                <span class="text-[10px] text-slate-400">Belum ada paket menu.</span>
              </div>
            ` : ''}
          </div>
        </div>

        <div class="pt-3 border-t border-slate-50 flex justify-end">
          <button onclick="window.adminDeleteProvider('${p.id}')" class="text-red-600 hover:text-red-700 text-[10px] font-bold flex items-center gap-1 cursor-pointer">
            <i class="ph ph-trash"></i> Hapus Mitra Katering
          </button>
        </div>
      </div>
    `;
  });

  return `
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
        ${providersListHtml}
      </div>
    </div>
  `;
}

function renderAdminRegistrations() {
  let listHtml = '';
  const regs = state.cateringRegistrations || [];

  if (regs.length === 0) {
    listHtml = `
      <div class="text-center py-12 bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
        <i class="ph ph-storefront text-4xl text-slate-300 mb-2"></i>
        <h4 class="text-xs font-bold text-slate-700">Belum ada pengajuan pendaftaran</h4>
        <p class="text-[10px] text-slate-500 mt-1">Saat ini belum ada user yang mengajukan pendaftaran usaha katering.</p>
      </div>
    `;
  } else {
    regs.forEach(reg => {
      let statusBadge = '';
      if (reg.status === 'pending') statusBadge = '<span class="bg-amber-50 text-amber-700 border border-amber-200 text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider animate-pulse flex items-center gap-0.5"><i class="ph ph-clock animate-spin"></i> Menunggu Review</span>';
      else if (reg.status === 'approved') statusBadge = '<span class="bg-emerald-50 text-emerald-700 border border-emerald-200 text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-0.5"><i class="ph ph-check-circle"></i> Disetujui</span>';
      else statusBadge = '<span class="bg-red-50 text-red-700 border border-red-200 text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-0.5"><i class="ph ph-x-circle"></i> Ditolak</span>';

      listHtml += `
        <div class="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm space-y-4 text-left">
          <div class="flex justify-between items-center pb-3 border-b border-slate-100">
            <div>
              <span class="text-[9px] text-slate-400 font-bold block uppercase tracking-wider">ID Pengajuan · ${reg.submittedAt}</span>
              <h4 class="text-xs font-extrabold text-slate-900 mt-0.5">Pengirim: ${reg.userName} (${reg.userId})</h4>
            </div>
            ${statusBadge}
          </div>
          
          <div class="flex gap-4">
            <img src="${reg.image}" alt="${reg.cateringName}" class="w-20 h-20 rounded-xl object-cover border border-slate-100 flex-shrink-0" />
            <div class="flex-1 min-w-0">
              <h3 class="text-sm font-extrabold text-slate-950 font-serif leading-none">${reg.cateringName}</h3>
              <p class="text-[10px] text-slate-500 mt-1.5"><i class="ph ph-map-pin text-primary inline"></i> ${reg.address}</p>
              <p class="text-[10px] text-slate-600 mt-2 leading-relaxed italic">"${reg.desc}"</p>
              
              <div class="flex gap-4 mt-3 text-[9px] text-slate-500 font-medium">
                <span>Harga Pax Mulai: <strong class="text-primary">Rp ${reg.minPrice.toLocaleString('id-ID')}</strong></span>
                <span>•</span>
                <span>Kategori: <strong>${reg.categories.map(c => CATEGORIES[c]?.name.replace('Catering ', '') || c).join(', ')}</strong></span>
              </div>
            </div>
          </div>
          
          ${reg.status === 'pending' ? `
            <div class="flex gap-2 justify-end pt-3 border-t border-slate-50">
              <button onclick="window.adminRejectRegistration('${reg.id}')" class="bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 font-bold text-[10px] px-4 py-2.5 rounded-xl transition-colors cursor-pointer flex items-center gap-1.5">
                <i class="ph ph-x-circle text-base"></i> Tolak Pendaftaran
              </button>
              <button onclick="window.adminApproveRegistration('${reg.id}')" class="bg-primary hover:bg-primary-light text-white font-bold text-[10px] px-4 py-2.5 rounded-xl transition-all shadow shadow-primary/10 cursor-pointer flex items-center gap-1.5">
                <i class="ph ph-check-circle text-base"></i> Setujui & Jadikan Owner
              </button>
            </div>
          ` : ''}
        </div>
      `;
    });
  }

  return `
    <div class="space-y-6 animate-fade-in">
      <div class="flex justify-between items-center">
        <div>
          <h3 class="text-xs font-bold text-slate-800 uppercase tracking-wider">Review Pendaftaran Mitra</h3>
          <p class="text-[10px] text-slate-400">Tinjau permohonan pendaftaran usaha katering baru</p>
        </div>
      </div>
      <div class="space-y-4">
        ${listHtml}
      </div>
    </div>
  `;
}

window.adminApproveRegistration = function (regId) {
  window.showConfirm("Setujui Katering", "Apakah Anda yakin ingin menyetujui katering ini? User pendaftar akan ditingkatkan menjadi Owner.", () => {
    const reg = state.cateringRegistrations.find(r => r.id === regId);
    if (!reg) return;

    reg.status = 'approved';

    // Change user role to owner
    const user = state.users.find(u => u.email.toLowerCase() === reg.userId.toLowerCase());
    if (user) {
      user.role = 'owner';
    }

    if (state.currentUser && state.currentUser.email.toLowerCase() === reg.userId.toLowerCase()) {
      state.currentUser.role = 'owner';
    }

    // Add to PROVIDERS
    const providerId = reg.cateringName.toLowerCase().replace(/[^a-z0-9]/g, '-') + '-' + Math.floor(100 + Math.random() * 900);
    const newProvider = {
      id: providerId,
      name: reg.cateringName,
      categories: reg.categories,
      rating: 5.0,
      reviews: 0,
      distance: parseFloat((1 + Math.random() * 5).toFixed(1)),
      address: reg.address,
      coords: { x: Math.floor(20 + Math.random() * 60), y: Math.floor(20 + Math.random() * 60) },
      desc: reg.desc,
      image: reg.image,
      minPrice: reg.minPrice,
      customMenuEnabled: true,
      liveCookingEnabled: true,
      packages: [
        {
          id: providerId + '-std',
          name: 'Paket Prasmanan Standard',
          price: reg.minPrice,
          minOrder: 30,
          image: reg.image,
          menu: ['Nasi Putih Premium', 'Lauk Utama Ayam Goreng', 'Tumis Buncis Wortel', 'Sambal Merah Spesial', 'Kerupuk Aci', 'Air Mineral'],
          desc: 'Paket menu prasmanan hemat lengkap untuk berbagai kebutuhan acara formal & informal Anda.'
        }
      ],
      ownerEmail: reg.userId
    };

    PROVIDERS.push(newProvider);
    state.providers = PROVIDERS;

    saveStateToLocalStorage();
    window.showAlert("Pendaftaran Disetujui", `Usaha "${reg.cateringName}" telah resmi menjadi mitra katering di Cateringku, dan role ${reg.userName} telah di-upgrade menjadi Owner.`, () => {
      renderApp();
    });
  });
};

window.adminRejectRegistration = function (regId) {
  window.showConfirm("Tolak Katering", "Apakah Anda yakin ingin menolak permohonan pendaftaran katering ini?", () => {
    const reg = state.cateringRegistrations.find(r => r.id === regId);
    if (!reg) return;

    reg.status = 'rejected';
    saveStateToLocalStorage();
    window.showAlert("Pendaftaran Ditolak", `Permohonan pendaftaran usaha katering "${reg.cateringName}" ditolak.`, () => {
      renderApp();
    });
  });
};

window.showAddProviderForm = function () {
  state.adminForm = 'add_provider';
  renderApp();
};

window.showAddPackageForm = function (providerId) {
  state.adminForm = 'add_package';
  state.adminSelectedProviderId = providerId;
  renderApp();
};

window.cancelAdminForm = function () {
  state.adminForm = null;
  state.adminSelectedProviderId = null;
  renderApp();
};

function renderAddProviderForm() {
  return `
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
              ${Object.values(CATEGORIES).map(cat => `
                <label class="flex items-center gap-1.5 text-xs text-slate-700 bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 cursor-pointer hover:bg-slate-100 select-none">
                  <input type="checkbox" name="add-prov-cats" value="${cat.id}" class="accent-primary" />
                  <span>${cat.name.replace('Catering ', '')}</span>
                </label>
              `).join('')}
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
  `;
}

window.handleRegisterProviderSubmit = function (e) {
  e.preventDefault();

  const name = document.getElementById('add-prov-name')?.value.trim();
  const distance = parseFloat(document.getElementById('add-prov-distance')?.value);
  const minPrice = parseInt(document.getElementById('add-prov-minprice')?.value);
  const image = document.getElementById('add-prov-image')?.value;
  const address = document.getElementById('add-prov-address')?.value.trim();
  const desc = document.getElementById('add-prov-desc')?.value.trim();

  const catBoxes = document.getElementsByName('add-prov-cats');
  const categories = [];
  catBoxes.forEach(box => {
    if (box.checked) {
      categories.push(box.value);
    }
  });

  if (categories.length === 0) {
    window.showAlert("Validasi Gagal", "Harap pilih minimal satu kategori layanan.");
    return;
  }

  const id = 'prov-' + Math.floor(1000 + Math.random() * 9000);

  const newProvider = {
    id,
    name,
    categories,
    rating: 5.0,
    reviews: 1,
    distance,
    address,
    coords: { x: Math.floor(20 + Math.random() * 60), y: Math.floor(20 + Math.random() * 60) },
    desc,
    image,
    minPrice,
    packages: [],
    customMenuEnabled: false,
    liveCookingEnabled: false
  };

  PROVIDERS.push(newProvider);
  saveStateToLocalStorage();
  window.showAlert("Sukses", `Mitra "${name}" berhasil ditambahkan! Silakan tambahkan paket hidangan menu.`, () => {
    state.adminForm = null;
    renderApp();
  });
};

function renderAddPackageForm() {
  const providerId = state.adminSelectedProviderId;
  const provider = PROVIDERS.find(p => p.id === providerId);
  if (!provider) {
    setTimeout(window.cancelAdminForm, 10);
    return '';
  }

  return `
    <div class="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm space-y-4 animate-fade-in text-left">
      <div class="flex items-center justify-between pb-3.5 border-b border-slate-100">
        <div>
          <h3 class="text-base font-extrabold text-slate-900 font-serif">Tambah Paket Menu</h3>
          <p class="text-xs text-slate-500 mt-0.5">Menambahkan paket hidangan baru untuk <strong>${provider.name}</strong></p>
        </div>
        <button onclick="window.cancelAdminForm()" class="w-8 h-8 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center hover:bg-slate-200 transition-colors cursor-pointer">
          <i class="ph ph-x"></i>
        </button>
      </div>

      <form onsubmit="window.handleRegisterPackageSubmit(event)" class="space-y-4">
        <input type="hidden" id="add-pkg-provid" value="${providerId}" />

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
  `;
}

window.handleRegisterPackageSubmit = function (e) {
  e.preventDefault();

  const providerId = document.getElementById('add-pkg-provid')?.value;
  const name = document.getElementById('add-pkg-name')?.value.trim();
  const image = document.getElementById('add-pkg-image')?.value;
  const price = parseInt(document.getElementById('add-pkg-price')?.value);
  const minOrder = parseInt(document.getElementById('add-pkg-minorder')?.value);
  const desc = document.getElementById('add-pkg-desc')?.value.trim();

  const menuRaw = document.getElementById('add-pkg-menu')?.value || '';
  const menu = menuRaw.split(',').map(m => m.trim()).filter(m => m !== '');

  if (menu.length === 0) {
    window.showAlert("Validasi Gagal", "Harap masukkan minimal satu item menu hidangan.");
    return;
  }

  const provider = PROVIDERS.find(p => p.id === providerId);
  if (!provider) return;

  const id = providerId + '-' + Math.floor(100 + Math.random() * 900);

  const newPackage = {
    id,
    name,
    price,
    minOrder,
    image,
    menu,
    desc
  };

  provider.packages.push(newPackage);
  saveStateToLocalStorage();
  window.showAlert("Sukses", `Paket Menu "${name}" berhasil ditambahkan ke ${provider.name}!`, () => {
    state.adminForm = null;
    renderApp();
  });
};

window.adminDeleteProvider = function (providerId) {
  window.showConfirm("Hapus Mitra", "Apakah Anda yakin ingin menghapus mitra katering ini dari platform?", () => {
    const idx = PROVIDERS.findIndex(p => p.id === providerId);
    if (idx !== -1) {
      PROVIDERS.splice(idx, 1);
      saveStateToLocalStorage();
      window.showAlert("Sukses", "Mitra katering berhasil dihapus.", () => {
        renderApp();
      });
    }
  });
};

window.adminDeletePackage = function (providerId, packageId) {
  window.showConfirm("Hapus Paket", "Apakah Anda yakin ingin menghapus paket menu ini?", () => {
    const provider = PROVIDERS.find(p => p.id === providerId);
    if (provider) {
      const idx = provider.packages.findIndex(pkg => pkg.id === packageId);
      if (idx !== -1) {
        provider.packages.splice(idx, 1);
        saveStateToLocalStorage();
        window.showAlert("Sukses", "Paket menu berhasil dihapus.", () => {
          renderApp();
        });
      }
    }
  });
};

function renderBottomNavBar() {
  if (state.currentView === 'admin' || state.currentView === 'owner' || state.currentView === 'landing' || state.currentView === 'login' || state.currentView === 'register') return '';
  const isHome = state.currentView === 'home';
  const isOrders = state.currentView === 'orders';
  const isChat = state.currentView === 'chat';
  const isAccount = ['account', 'login', 'register'].includes(state.currentView);

  return `
    <nav class="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-100 shadow-[0_-4px_16px_rgba(0,0,0,0.04)] h-16 flex items-center justify-around px-4">
      <button onclick="navigateTo('home')" class="flex flex-col items-center gap-1 cursor-pointer flex-1 py-1">
        <i class="ph-fill ph-house text-2xl ${isHome ? 'text-primary' : 'text-slate-400'} transition-colors"></i>
        <span class="text-[9px] font-bold ${isHome ? 'text-primary' : 'text-slate-500'} tracking-wider uppercase">Beranda</span>
      </button>
      <button onclick="navigateTo('orders')" class="flex flex-col items-center gap-1 cursor-pointer flex-1 py-1">
        <i class="ph-fill ph-receipt text-2xl ${isOrders ? 'text-primary' : 'text-slate-400'} transition-colors"></i>
        <span class="text-[9px] font-bold ${isOrders ? 'text-primary' : 'text-slate-500'} tracking-wider uppercase">Pesanan</span>
      </button>
      <button onclick="navigateTo('chat')" class="flex flex-col items-center gap-1 cursor-pointer flex-1 py-1">
        <i class="ph-fill ph-chats-teardrop text-2xl ${isChat ? 'text-primary' : 'text-slate-400'} transition-colors"></i>
        <span class="text-[9px] font-bold ${isChat ? 'text-primary' : 'text-slate-500'} tracking-wider uppercase">Pesan</span>
      </button>
      <button onclick="window.navigateToAccount()" class="flex flex-col items-center gap-1 cursor-pointer flex-1 py-1">
        <i class="ph-fill ph-user text-2xl ${isAccount ? 'text-primary' : 'text-slate-400'} transition-colors"></i>
        <span class="text-[9px] font-bold ${isAccount ? 'text-primary' : 'text-slate-500'} tracking-wider uppercase">Akun</span>
      </button>
    </nav>
  `;
}

function renderActiveModal() {
  if (state.selectedPackage) {
    const pkg = state.selectedPackage;
    return renderPackageDetailModal(pkg);
  }

  if (state.activePaymentOrderId) {
    return renderPaymentModal(state.activePaymentOrderId);
  }

  if (state.activeTrackingOrderId) {
    return renderTrackingModal(state.activeTrackingOrderId);
  }

  if (state.activeReviewOrderId) {
    return renderReviewModal(state.activeReviewOrderId);
  }

  if (state.customMenuWizardProviderId) {
    return renderCustomMenuWizardModal(state.customMenuWizardProviderId);
  }

  if (state.cateringRegistrationOpen) {
    return renderCateringRegistrationModal();
  }

  return '';
}

function renderReviewModal(orderId) {
  const order = state.orders.find(o => o.id === orderId);
  if (!order) return '';
  const selectedRating = state.tempReviewRating || 5;

  return `
    <div class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end justify-center p-0 md:p-4 animate-fade-in" onclick="window.closeActiveModals()">
      <div class="bg-white w-full max-w-md rounded-t-3xl md:rounded-3xl overflow-hidden shadow-2xl animate-slide-up flex flex-col max-h-[85vh]" onclick="event.stopPropagation()">
        <div class="p-5 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h3 class="text-base font-extrabold text-slate-900 font-serif">Berikan Ulasan & Rating</h3>
            <p class="text-[10px] text-slate-400 mt-0.5">${order.providerName} - ${order.packageName}</p>
          </div>
          <button onclick="window.closeActiveModals()" class="w-8 h-8 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center hover:bg-slate-200 transition-colors cursor-pointer">
            <i class="ph ph-x text-lg"></i>
          </button>
        </div>
        
        <div class="p-6 space-y-6 text-center">
          <div>
            <span class="text-xs text-slate-500 block mb-2">Sentuh bintang untuk menilai layanan katering</span>
            <div class="flex justify-center gap-2 text-3xl">
              ${[1, 2, 3, 4, 5].map(star => `
                <button onclick="window.setTempReviewRating(${star})" class="cursor-pointer transition-transform hover:scale-110">
                  <i class="${star <= selectedRating ? 'ph-fill ph-star text-amber-500' : 'ph ph-star text-slate-300'}"></i>
                </button>
              `).join('')}
            </div>
          </div>
          
          <div class="text-left">
            <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">Tulis Ulasan Masukan Anda</label>
            <textarea id="review-comment-text" required rows="3" placeholder="Bagaimana rasa makanan, ketepatan waktu pengiriman, dan pelayanan katering ini?..." class="w-full bg-slate-50 border border-slate-200 focus:border-primary rounded-xl px-4 py-3 text-xs focus:outline-none transition-colors text-slate-800 resize-none font-sans"></textarea>
          </div>
        </div>
        
        <div class="p-5 border-t border-slate-100 bg-slate-50/50">
          <button onclick="window.submitOrderReview('${order.id}')" class="w-full bg-primary hover:bg-primary-light text-white font-bold py-3.5 rounded-2xl transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 cursor-pointer text-xs">
            Kirim Ulasan & Rating
          </button>
        </div>
      </div>
    </div>
  `;
}

window.openReviewModal = function (orderId) {
  state.activeReviewOrderId = orderId;
  state.tempReviewRating = 5;
  renderApp();
};

window.setTempReviewRating = function (rating) {
  state.tempReviewRating = rating;
  renderApp();
};

window.submitOrderReview = function (orderId) {
  const text = document.getElementById('review-comment-text')?.value.trim();
  if (!text) {
    window.showAlert("Validasi Gagal", "Harap tulis ulasan terlebih dahulu.");
    return;
  }

  const order = state.orders.find(o => o.id === orderId);
  if (!order) return;

  order.reviewed = true;
  order.reviewRating = state.tempReviewRating;
  order.reviewText = text;

  // Find provider to update average rating
  const provider = PROVIDERS.find(p => p.name === order.providerName);
  if (provider) {
    const prevReviews = provider.reviews || 0;
    const prevRating = provider.rating || 5.0;
    const newReviews = prevReviews + 1;
    const newRating = parseFloat(((prevRating * prevReviews + state.tempReviewRating) / newReviews).toFixed(1));
    provider.rating = newRating;
    provider.reviews = newReviews;
  }

  state.activeReviewOrderId = null;
  saveStateToLocalStorage();
  window.showAlert("Ulasan Terkirim", "Terima kasih atas ulasan Anda! Rating katering berhasil diperbarui.", () => {
    renderApp();
  });
};

// ========== CUSTOM MENU WIZARD ==========
const CUSTOM_BOX_SIZES = [
  { id: 'personal', name: 'Personal Box', desc: 'Ukuran kecil 1 porsi', basePrice: 5000, icon: 'ph-package', maxItems: 4 },
  { id: 'spesial', name: 'Spesial Box', desc: 'Ukuran sedang 1-2 porsi', basePrice: 8000, icon: 'ph-cube', maxItems: 6 },
  { id: 'premium', name: 'Premium Box', desc: 'Ukuran besar family', basePrice: 12000, icon: 'ph-crown', maxItems: 8 }
];

function renderCustomMenuWizardModal(providerId) {
  const provider = PROVIDERS.find(p => p.id === providerId);
  if (!provider) return '';

  const step = state.customMenuWizardStep || 1;
  const selectedSize = state.customMenuSelectedSize;
  const selectedItems = state.customMenuSelectedItems || [];

  const categoryLabels = { utama: 'Lauk Utama', pendamping: 'Lauk Pendamping', sayur: 'Sayur & Karbohidrat', pelengkap: 'Pelengkap & Sambal' };
  const categoryIcons = { utama: 'ph-fire', pendamping: 'ph-egg', sayur: 'ph-leaf', pelengkap: 'ph-pepper' };

  const totalItemsPrice = selectedItems.reduce((sum, itemId) => {
    const item = CUSTOM_MENU_ITEMS.find(i => i.id === itemId);
    return sum + (item ? item.price : 0);
  }, 0);
  const boxPrice = selectedSize ? CUSTOM_BOX_SIZES.find(s => s.id === selectedSize)?.basePrice || 0 : 0;
  const pricePerPax = boxPrice + totalItemsPrice;
  const maxItems = selectedSize ? CUSTOM_BOX_SIZES.find(s => s.id === selectedSize)?.maxItems || 6 : 6;

  let bodyHtml = '';

  if (step === 1) {
    bodyHtml = `
      <div class="p-5 space-y-3 overflow-y-auto flex-1">
        <p class="text-xs text-slate-500 leading-relaxed">Pilih ukuran kotak nasi box untuk kustomisasi menu Anda.</p>
        ${CUSTOM_BOX_SIZES.map(size => `
          <button onclick="window.selectCustomBoxSize('${size.id}')" class="w-full text-left p-4 rounded-2xl border-2 transition-all cursor-pointer ${selectedSize === size.id ? 'border-primary bg-primary/5 shadow-md' : 'border-slate-100 bg-white hover:border-slate-300'}">
            <div class="flex items-center gap-3">
              <div class="w-11 h-11 rounded-xl ${selectedSize === size.id ? 'bg-primary text-white' : 'bg-slate-100 text-slate-500'} flex items-center justify-center flex-shrink-0 transition-colors">
                <i class="ph-fill ${size.icon} text-xl"></i>
              </div>
              <div class="flex-1">
                <h4 class="text-sm font-extrabold text-slate-900">${size.name}</h4>
                <p class="text-[10px] text-slate-400 mt-0.5">${size.desc} · Maks. ${size.maxItems} item lauk</p>
              </div>
              <div class="text-right">
                <span class="text-xs font-extrabold text-primary">+Rp ${size.basePrice.toLocaleString('id-ID')}</span>
                <span class="text-[9px] text-slate-400 block">base/pax</span>
              </div>
            </div>
          </button>
        `).join('')}
      </div>
    `;
  } else if (step === 2) {
    const categories = ['utama', 'pendamping', 'sayur', 'pelengkap'];
    bodyHtml = `
      <div class="p-5 space-y-5 overflow-y-auto flex-1">
        <div class="flex justify-between items-center">
          <p class="text-xs text-slate-500">Centang lauk pilihan Anda (maks. ${maxItems} item)</p>
          <span class="text-[10px] font-bold ${selectedItems.length >= maxItems ? 'text-red-500' : 'text-primary'}">${selectedItems.length}/${maxItems} dipilih</span>
        </div>
        ${categories.map(cat => `
          <div>
            <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5 mb-2">
              <i class="ph ${categoryIcons[cat]} text-sm"></i> ${categoryLabels[cat]}
            </span>
            <div class="space-y-1.5">
              ${CUSTOM_MENU_ITEMS.filter(i => i.category === cat).map(item => {
      const checked = selectedItems.includes(item.id);
      const disabled = !checked && selectedItems.length >= maxItems;
      return `
                  <label class="flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${checked ? 'border-primary bg-primary/5' : disabled ? 'border-slate-50 bg-slate-50 opacity-50 cursor-not-allowed' : 'border-slate-100 hover:border-slate-200 bg-white'}">
                    <input type="checkbox" ${checked ? 'checked' : ''} ${disabled ? 'disabled' : ''} onchange="window.toggleCustomMenuItem('${item.id}')" class="w-4 h-4 rounded accent-primary cursor-pointer" />
                    <span class="flex-1 text-xs font-semibold text-slate-800">${item.name}</span>
                    <span class="text-[10px] font-bold text-primary">+Rp ${item.price.toLocaleString('id-ID')}</span>
                  </label>
                `;
    }).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  return `
    <div class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end justify-center p-0 md:p-4 animate-fade-in" onclick="window.closeActiveModals()">
      <div class="bg-white w-full max-w-md rounded-t-3xl md:rounded-3xl overflow-hidden shadow-2xl animate-slide-up flex flex-col max-h-[90vh]" onclick="event.stopPropagation()">
        <div class="p-5 border-b border-slate-100 flex items-center justify-between flex-shrink-0">
          <div>
            <h3 class="text-base font-extrabold text-slate-900 font-serif flex items-center gap-2">
              <i class="ph-fill ph-sliders text-amber-500"></i> Kustom Nasi Box
            </h3>
            <p class="text-[10px] text-slate-400 mt-0.5">${provider.name} · Langkah ${step} dari 2</p>
          </div>
          <button onclick="window.closeActiveModals()" class="w-8 h-8 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center hover:bg-slate-200 transition-colors cursor-pointer">
            <i class="ph ph-x text-lg"></i>
          </button>
        </div>
        
        <div class="flex gap-1 px-5 pt-3">
          <div class="flex-1 h-1 rounded-full ${step >= 1 ? 'bg-primary' : 'bg-slate-200'}"></div>
          <div class="flex-1 h-1 rounded-full ${step >= 2 ? 'bg-primary' : 'bg-slate-200'}"></div>
        </div>
        
        ${bodyHtml}
        
        <div class="p-5 border-t border-slate-100 bg-slate-50/50 flex-shrink-0">
          ${step === 2 ? `
            <div class="flex justify-between items-center mb-3 text-xs">
              <span class="text-slate-500">Estimasi Harga / Pax:</span>
              <span class="font-extrabold text-primary text-sm">Rp ${pricePerPax.toLocaleString('id-ID')}</span>
            </div>
          ` : ''}
          <div class="flex gap-2">
            ${step > 1 ? `
              <button onclick="window.customMenuPrevStep()" class="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs py-3 rounded-xl transition-colors cursor-pointer">Kembali</button>
            ` : `
              <button onclick="window.closeActiveModals()" class="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs py-3 rounded-xl transition-colors cursor-pointer">Batal</button>
            `}
            ${step === 1 ? `
              <button onclick="window.customMenuNextStep()" class="flex-1 bg-primary hover:bg-primary-light text-white font-bold text-xs py-3 rounded-xl transition-colors shadow-md shadow-primary/10 cursor-pointer ${!selectedSize ? 'opacity-50 pointer-events-none' : ''}">Pilih Menu Lauk</button>
            ` : `
              <button onclick="window.confirmCustomMenu('${providerId}')" class="flex-1 bg-primary hover:bg-primary-light text-white font-bold text-xs py-3 rounded-xl transition-colors shadow-md shadow-primary/10 cursor-pointer ${selectedItems.length === 0 ? 'opacity-50 pointer-events-none' : ''}">Pesan Kustom Ini</button>
            `}
          </div>
        </div>
      </div>
    </div>
  `;
}

window.openCustomMenuWizard = function (providerId) {
  state.customMenuWizardProviderId = providerId;
  state.customMenuWizardStep = 1;
  state.customMenuSelectedSize = null;
  state.customMenuSelectedItems = [];
  renderApp();
};

window.selectCustomBoxSize = function (sizeId) {
  state.customMenuSelectedSize = sizeId;
  renderApp();
};

window.customMenuNextStep = function () {
  if (!state.customMenuSelectedSize) return;
  state.customMenuWizardStep = 2;
  renderApp();
};

window.customMenuPrevStep = function () {
  state.customMenuWizardStep = 1;
  renderApp();
};

window.toggleCustomMenuItem = function (itemId) {
  const idx = state.customMenuSelectedItems.indexOf(itemId);
  const maxItems = CUSTOM_BOX_SIZES.find(s => s.id === state.customMenuSelectedSize)?.maxItems || 6;
  if (idx > -1) {
    state.customMenuSelectedItems.splice(idx, 1);
  } else if (state.customMenuSelectedItems.length < maxItems) {
    state.customMenuSelectedItems.push(itemId);
  }
  renderApp();
};

window.confirmCustomMenu = function (providerId) {
  const selectedSize = CUSTOM_BOX_SIZES.find(s => s.id === state.customMenuSelectedSize);
  const selectedItems = state.customMenuSelectedItems.map(id => CUSTOM_MENU_ITEMS.find(i => i.id === id)).filter(Boolean);
  const pricePerPax = selectedSize.basePrice + selectedItems.reduce((s, i) => s + i.price, 0);
  const menuNames = selectedItems.map(i => i.name);

  const customPkg = {
    id: 'custom-package',
    name: `Kustom ${selectedSize.name}`,
    price: pricePerPax,
    minOrder: 10,
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=600&auto=format&fit=crop&q=60',
    menu: menuNames,
    desc: `Nasi box kustom ukuran ${selectedSize.name.toLowerCase()} dengan ${menuNames.length} pilihan lauk.`
  };

  state.cart = [{
    providerId,
    packageId: 'custom-package',
    package: customPkg,
    quantity: customPkg.minOrder,
    notes: '',
    liveCookingSelected: false
  }];

  state.customMenuWizardProviderId = null;

  if (!state.currentUser) {
    window.showAlert("Login Diperlukan", "Anda harus masuk (login) terlebih dahulu.", () => {
      state.redirectAfterLogin = 'checkout';
      navigateTo('login');
    });
  } else {
    navigateTo('checkout');
  }
};

// ========== CATERING REGISTRATION MODAL ==========
function renderCateringRegistrationModal() {
  return `
    <div class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end justify-center p-0 md:p-4 animate-fade-in" onclick="window.closeCateringRegistration()">
      <div class="bg-white w-full max-w-lg rounded-t-3xl md:rounded-3xl overflow-hidden shadow-2xl animate-slide-up flex flex-col max-h-[90vh]" onclick="event.stopPropagation()">
        <div class="p-5 border-b border-slate-100 flex items-center justify-between flex-shrink-0">
          <div>
            <h3 class="text-base font-extrabold text-slate-900 font-serif flex items-center gap-2">
              <i class="ph-fill ph-storefront text-primary"></i> Daftarkan Usaha Catering
            </h3>
            <p class="text-[10px] text-slate-400 mt-0.5">Isi formulir di bawah untuk mendaftarkan usaha katering Anda</p>
          </div>
          <button onclick="window.closeCateringRegistration()" class="w-8 h-8 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center hover:bg-slate-200 transition-colors cursor-pointer">
            <i class="ph ph-x text-lg"></i>
          </button>
        </div>
        
        <div class="p-5 space-y-4 overflow-y-auto flex-1">
          <div class="bg-amber-50 border border-amber-200 rounded-xl p-3 text-[10px] text-amber-800 leading-relaxed flex gap-2">
            <i class="ph ph-info text-base flex-shrink-0 mt-0.5"></i>
            <span>Pendaftaran akan ditinjau oleh Admin. Jika disetujui, akun Anda akan ditingkatkan menjadi <strong>Owner</strong> dan Anda dapat mengelola catering melalui Dashboard Owner.</span>
          </div>
          
          <form id="catering-reg-form" class="space-y-4">
            <div>
              <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">Nama Usaha Catering</label>
              <input type="text" id="reg-cat-name" required placeholder="Contoh: Mama Kitchen Catering" class="w-full bg-slate-50 border border-slate-200 focus:border-primary rounded-xl px-4 py-3 text-xs focus:outline-none transition-colors text-slate-800" />
            </div>
            
            <div>
              <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">Alamat Lengkap Dapur / Kantor</label>
              <input type="text" id="reg-cat-address" required placeholder="Jl. Melati No. 12, Jakarta Selatan" class="w-full bg-slate-50 border border-slate-200 focus:border-primary rounded-xl px-4 py-3 text-xs focus:outline-none transition-colors text-slate-800" />
            </div>
            
            <div>
              <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">Deskripsi Singkat Usaha</label>
              <textarea id="reg-cat-desc" required rows="2" placeholder="Spesialis catering nasi box untuk acara kantor dan keluarga..." class="w-full bg-slate-50 border border-slate-200 focus:border-primary rounded-xl px-4 py-3 text-xs focus:outline-none transition-colors text-slate-800 resize-none"></textarea>
            </div>
            
            <div>
              <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">Foto Usaha (URL Gambar)</label>
              <input type="url" id="reg-cat-image" required placeholder="https://images.unsplash.com/..." value="https://images.unsplash.com/photo-1555244162-803834f70033?w=600" class="w-full bg-slate-50 border border-slate-200 focus:border-primary rounded-xl px-4 py-3 text-xs focus:outline-none transition-colors text-slate-800" />
            </div>

            <div>
              <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">Harga Minimum Per Pax (Rp)</label>
              <input type="number" id="reg-cat-minprice" required placeholder="25000" class="w-full bg-slate-50 border border-slate-200 focus:border-primary rounded-xl px-4 py-3 text-xs focus:outline-none transition-colors text-slate-800" />
            </div>
            
            <div>
              <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">Kategori Layanan</label>
              <div class="grid grid-cols-2 gap-2">
                ${Object.values(CATEGORIES).map(cat => `
                  <label class="flex items-center gap-2 p-2.5 rounded-xl border border-slate-100 bg-white hover:bg-slate-50 cursor-pointer transition-colors">
                    <input type="checkbox" name="reg-cat-cats" value="${cat.id}" class="w-3.5 h-3.5 accent-primary cursor-pointer" />
                    <span class="text-[11px] text-slate-700 font-medium">${cat.name}</span>
                  </label>
                `).join('')}
              </div>
            </div>
          </form>
        </div>
        
        <div class="p-5 border-t border-slate-100 bg-slate-50/50 flex-shrink-0">
          <button onclick="window.submitCateringRegistration()" class="w-full bg-primary hover:bg-primary-light text-white font-bold py-3.5 rounded-2xl transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 cursor-pointer text-xs">
            <i class="ph ph-paper-plane-tilt"></i> Kirim Pendaftaran
          </button>
        </div>
      </div>
    </div>
  `;
}

window.openCateringRegistration = function () {
  state.cateringRegistrationOpen = true;
  renderApp();
};

window.closeCateringRegistration = function () {
  state.cateringRegistrationOpen = false;
  renderApp();
};

window.submitCateringRegistration = function () {
  const name = document.getElementById('reg-cat-name')?.value.trim();
  const address = document.getElementById('reg-cat-address')?.value.trim();
  const desc = document.getElementById('reg-cat-desc')?.value.trim();
  const image = document.getElementById('reg-cat-image')?.value.trim();
  const minPrice = parseInt(document.getElementById('reg-cat-minprice')?.value);

  const catBoxes = document.getElementsByName('reg-cat-cats');
  const categories = [];
  catBoxes.forEach(box => { if (box.checked) categories.push(box.value); });

  if (!name || !address || !desc || !image || !minPrice) {
    window.showAlert("Data Belum Lengkap", "Harap lengkapi semua field formulir pendaftaran.");
    return;
  }
  if (categories.length === 0) {
    window.showAlert("Validasi Gagal", "Harap pilih minimal satu kategori layanan.");
    return;
  }

  const registration = {
    id: 'REG-' + Math.floor(10000 + Math.random() * 90000),
    userId: state.currentUser.email,
    userName: state.currentUser.name,
    cateringName: name,
    address,
    desc,
    image,
    minPrice,
    categories,
    status: 'pending', // pending | approved | rejected
    submittedAt: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
  };

  state.cateringRegistrations.push(registration);
  state.cateringRegistrationOpen = false;
  saveStateToLocalStorage();

  window.showAlert("Pendaftaran Terkirim", "Pendaftaran catering Anda telah dikirim dan sedang menunggu persetujuan dari Admin. Anda akan mendapatkan notifikasi setelah ditinjau.", () => {
    renderApp();
  });
};

const TRACKING_STEPS = [
  {
    status: 'Menunggu Pembayaran',
    title: 'Menunggu Pembayaran',
    desc: 'Pesanan telah dibuat. Silakan lakukan pembayaran agar pesanan diproses.',
    icon: 'ph-wallet'
  },
  {
    status: 'Pembayaran Terkonfirmasi',
    title: 'Pembayaran Terkonfirmasi',
    desc: 'Pembayaran Anda berhasil dikonfirmasi. Mitra mulai memverifikasi pesanan.',
    icon: 'ph-credit-card'
  },
  {
    status: 'Menyiapkan Bahan',
    title: 'Menyiapkan Bahan Makanan',
    desc: 'Bahan-bahan segar sedang dipersiapkan dan dicuci bersih oleh tim katering.',
    icon: 'ph-leaf'
  },
  {
    status: 'Mulai Memasak',
    title: 'Hidangan Sedang Dimasak',
    desc: 'Koki terampil kami sedang memasak menu katering pilihan Anda.',
    icon: 'ph-fire'
  },
  {
    status: 'Mulai Mengemas',
    title: 'Pesanan Mulai Dikemas',
    desc: 'Makanan sedang ditata rapi dalam wadah saji steril dan diberi label.',
    icon: 'ph-package'
  },
  {
    status: 'Sedang Diantar',
    title: 'Pesanan Sedang Diantar',
    desc: 'Kurir sedang dalam perjalanan mengirimkan katering hangat Anda.',
    icon: 'ph-moped'
  },
  {
    status: 'Sudah Sampai Tujuan',
    title: 'Sampai di Tujuan',
    desc: 'Katering lezat telah sampai di lokasi Anda. Selamat menikmati!',
    icon: 'ph-house-line'
  }
];

function renderPaymentModal(orderId) {
  const order = state.orders.find(o => o.id === orderId);
  if (!order) return '';

  return `
    <div class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end justify-center p-0 md:p-4 animate-fade-in" onclick="window.closeActiveModals()">
      <div class="bg-white w-full max-w-lg rounded-t-3xl md:rounded-3xl overflow-hidden shadow-2xl animate-slide-up flex flex-col max-h-[90vh]" onclick="event.stopPropagation()">
        
        <div class="p-6 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h3 class="text-base font-extrabold text-slate-900 font-serif">Pembayaran Katering</h3>
            <p class="text-[10px] text-slate-400 mt-0.5">ID Pesanan: ${order.id}</p>
          </div>
          <button onclick="window.closeActiveModals()" class="w-8 h-8 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center hover:bg-slate-200 transition-colors cursor-pointer">
            <i class="ph ph-x text-lg"></i>
          </button>
        </div>
        
        <div class="p-6 overflow-y-auto flex-1 space-y-5 scrollbar-none">
          <div class="bg-slate-50 rounded-2xl p-4 border border-slate-100">
            <div class="flex justify-between items-start">
              <div>
                <h4 class="text-xs font-bold text-slate-800">${order.providerName}</h4>
                <p class="text-[10px] text-slate-500 mt-0.5">${order.packageName} (${order.quantity} Pax)</p>
              </div>
              <span class="text-xs font-black text-primary bg-primary/5 px-2.5 py-1 rounded-lg">
                Rp ${order.totalPrice.toLocaleString('id-ID')}
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
          <button onclick="window.processPaymentSubmit('${order.id}')" class="w-full bg-primary hover:bg-primary-light text-white font-bold py-3.5 rounded-2xl transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 cursor-pointer">
            <i class="ph ph-credit-card text-lg"></i> Bayar Sekarang (Simulasi)
          </button>
        </div>
      </div>
    </div>
  `;
}

window.processPaymentSubmit = function (orderId) {
  const order = state.orders.find(o => o.id === orderId);
  if (!order) return;

  order.status = 'Pembayaran Terkonfirmasi';
  if (!order.statusHistory) order.statusHistory = {};
  order.statusHistory['Pembayaran Terkonfirmasi'] = getCurrentTimeStr();

  state.activePaymentOrderId = null;
  state.activeTrackingOrderId = orderId;

  saveStateToLocalStorage();
  startOrderSimulation(orderId);

  window.showAlert("Pembayaran Berhasil", 'Pesanan katering Anda dikonfirmasi dan mitra kami mulai menyiapkan pesanan Anda.', () => {
    renderApp();
  });
};

function renderTrackingModal(orderId) {
  const order = state.orders.find(o => o.id === orderId);
  if (!order) return '';

  const currentStatusIndex = TRACKING_STEPS.findIndex(step => step.status === order.status);
  let stepperHtml = '';

  TRACKING_STEPS.forEach((step, idx) => {
    const isCompleted = idx < currentStatusIndex;
    const isActive = idx === currentStatusIndex;
    const isPending = idx > currentStatusIndex;
    const timeLog = order.statusHistory && order.statusHistory[step.status] ? order.statusHistory[step.status] : '';

    let circleClass = '';
    let lineClass = '';
    let textTitleClass = '';
    let textDescClass = '';

    if (isCompleted) {
      circleClass = 'bg-primary text-white ring-4 ring-primary/10';
      lineClass = 'bg-primary';
      textTitleClass = 'text-slate-800 font-bold';
      textDescClass = 'text-slate-500';
    } else if (isActive) {
      circleClass = 'bg-accent text-white ring-4 ring-accent/30 scale-110';
      lineClass = 'bg-slate-200';
      textTitleClass = 'text-primary font-black';
      textDescClass = 'text-slate-700 font-medium';
    } else {
      circleClass = 'bg-slate-100 text-slate-400';
      lineClass = 'bg-slate-200';
      textTitleClass = 'text-slate-400 font-medium';
      textDescClass = 'text-slate-300';
    }

    const isLast = idx === TRACKING_STEPS.length - 1;

    stepperHtml += `
      <div class="flex gap-4 relative">
        <div class="flex flex-col items-center flex-shrink-0 z-10 w-9">
          <div class="w-9 h-9 rounded-full flex items-center justify-center text-base transition-all duration-300 ${circleClass}">
            <i class="ph ${step.icon}"></i>
          </div>
          ${!isLast ? `
            <div class="w-0.5 h-16 transition-all duration-300 ${lineClass}"></div>
          ` : ''}
        </div>
        
        <div class="flex-1 pb-6">
          <div class="flex justify-between items-start gap-2">
            <h4 class="text-xs ${textTitleClass} transition-colors duration-300">${step.title}</h4>
            ${timeLog ? `
              <span class="text-[9px] font-mono text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full flex items-center gap-0.5 flex-shrink-0">
                <i class="ph ph-clock"></i> ${timeLog}
              </span>
            ` : ''}
          </div>
          <p class="text-[10px] ${textDescClass} mt-1 leading-relaxed transition-colors duration-300">${step.desc}</p>
          
          ${isActive && step.status === 'Mulai Memasak' ? `
            <div class="mt-2.5 flex items-center gap-2 bg-orange-50 border border-orange-100 p-2 rounded-xl text-orange-800 animate-pulse w-fit">
              <i class="ph-fill ph-fire text-sm"></i>
              <span class="text-[9px] font-bold">Dapur sedang sibuk memasak hidangan panas...</span>
            </div>
          ` : ''}
          
          ${isActive && step.status === 'Sedang Diantar' ? `
            <div class="mt-2.5 p-2.5 bg-blue-50 border border-blue-100 rounded-xl flex items-center gap-3 w-full">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" alt="Kurir" class="w-8 h-8 rounded-full object-cover border border-blue-200" />
              <div class="flex-1 min-w-0">
                <div class="text-[9px] font-bold text-slate-800">Asep Kurir (Katering Delivery)</div>
                <div class="text-[8px] text-blue-600 font-semibold mt-0.5"><i class="ph ph-phone inline"></i> +62 812-3456-7890 • Hubungi Kurir</div>
              </div>
            </div>
          ` : ''}
        </div>
      </div>
    `;
  });

  const isSimActive = orderSimulations[orderId] && !orderSimulations[orderId].paused;

  return `
    <div class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end justify-center p-0 md:p-4 animate-fade-in" onclick="window.closeActiveModals()">
      <div class="bg-white w-full max-w-lg rounded-t-3xl md:rounded-3xl overflow-hidden shadow-2xl animate-slide-up flex flex-col max-h-[92vh]" onclick="event.stopPropagation()">
        
        <div class="p-6 border-b border-slate-100 flex items-center justify-between">
          <div>
            <span class="bg-emerald-50 text-emerald-700 text-[9px] font-extrabold px-2.5 py-0.5 rounded-full border border-emerald-100 uppercase tracking-wider mb-1 inline-block">Status Katering</span>
            <h3 class="text-base font-extrabold text-slate-900 font-serif">Pelacakan Pengiriman</h3>
            <p class="text-[10px] text-slate-400 mt-0.5">Order ID: ${order.id} • ${order.providerName}</p>
          </div>
          <button onclick="window.closeActiveModals()" class="w-8 h-8 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center hover:bg-slate-200 transition-colors cursor-pointer">
            <i class="ph ph-x text-lg"></i>
          </button>
        </div>
        
        <div class="p-6 overflow-y-auto flex-1 scrollbar-none space-y-6">
          <div class="pl-1.5 pt-2">
            ${stepperHtml}
          </div>
          
          <div class="bg-slate-50 rounded-2xl p-4 border border-slate-100 flex gap-3 text-slate-600">
            <i class="ph-fill ph-map-pin text-xl text-primary flex-shrink-0 mt-0.5"></i>
            <div>
              <h5 class="text-xs font-bold text-slate-800">Alamat Pengantaran</h5>
              <p class="text-[10px] text-slate-500 mt-1 leading-normal">${order.address}</p>
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
              <button onclick="window.simStepPrevious('${order.id}')" class="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-bold text-[10px] py-2 px-3 rounded-xl transition-colors flex items-center justify-center gap-1 cursor-pointer">
                <i class="ph ph-skip-back text-xs"></i> Tahap Sebelumnya
              </button>
              <button onclick="window.simStepNext('${order.id}')" class="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-bold text-[10px] py-2 px-3 rounded-xl transition-colors flex items-center justify-center gap-1 cursor-pointer">
                Tahap Selanjutnya <i class="ph ph-skip-forward text-xs"></i>
              </button>
            </div>
            
            <div class="flex items-center justify-between pt-1">
              <div class="text-[9px] text-slate-500 flex items-center gap-1">
                <span class="w-1.5 h-1.5 rounded-full ${isSimActive ? 'bg-emerald-500 animate-pulse' : 'bg-slate-400'}"></span>
                Auto-Advance (8s): <strong>${isSimActive ? 'Aktif' : 'Nonaktif'}</strong>
              </div>
              
              <button onclick="window.simToggleAuto('${order.id}')" class="text-[9px] font-extrabold text-primary hover:underline cursor-pointer">
                ${isSimActive ? 'Jeda Simulasi' : 'Jalankan Simulasi'}
              </button>
            </div>

            <div class="pt-2 border-t border-slate-200/60">
              <span class="text-[8px] font-bold text-slate-500 uppercase tracking-wider block mb-1.5">Lompat Ke Status:</span>
              <div class="flex flex-wrap gap-1">
                ${TRACKING_STEPS.map(step => {
    const isCurrent = step.status === order.status;
    return `
                    <button onclick="window.simJumpToStatus('${order.id}', '${step.status}')" class="px-2 py-0.5 rounded text-[8px] font-semibold transition-all cursor-pointer ${isCurrent ? 'bg-primary text-white' : 'bg-white hover:bg-slate-50 text-slate-600 border border-slate-200'}">
                      ${step.status.split(' ')[0]}
                    </button>
                  `;
  }).join('')}
              </div>
            </div>
          </div>
        </div>
        
        <div class="p-5 border-t border-slate-100 bg-slate-50/50 flex gap-2">
          <button onclick="window.showAlert('Chat Terkirim', 'Pihak Catering telah dihubungi via Chat.')" class="flex-1 border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs py-3 rounded-xl transition-colors flex items-center justify-center gap-1 cursor-pointer">
            <i class="ph ph-chat-teardrop text-base text-primary"></i> Hubungi Toko
          </button>
          <button onclick="window.closeActiveModals()" class="flex-1 bg-primary hover:bg-primary-light text-white font-bold text-xs py-3 rounded-xl transition-all shadow-md shadow-primary/10 cursor-pointer">
            Selesai
          </button>
        </div>
      </div>
    </div>
  `;
}

window.simStepPrevious = function (orderId) {
  const order = state.orders.find(o => o.id === orderId);
  if (!order) return;
  const steps = TRACKING_STEPS.map(s => s.status);
  const currentIdx = steps.indexOf(order.status);
  if (currentIdx > 0) {
    const prevStatus = steps[currentIdx - 1];
    order.status = prevStatus;
    for (let i = currentIdx; i < steps.length; i++) {
      if (order.statusHistory) delete order.statusHistory[steps[i]];
    }
    saveStateToLocalStorage();
    renderApp();
  }
};

window.simStepNext = function (orderId) {
  const order = state.orders.find(o => o.id === orderId);
  if (!order) return;
  const steps = TRACKING_STEPS.map(s => s.status);
  const currentIdx = steps.indexOf(order.status);
  if (currentIdx < steps.length - 1) {
    const nextStatus = steps[currentIdx + 1];
    order.status = nextStatus;
    if (!order.statusHistory) order.statusHistory = {};
    order.statusHistory[nextStatus] = getCurrentTimeStr();
    saveStateToLocalStorage();
    showToast(order.id, order.providerName, nextStatus);
    renderApp();
  }
};

window.simToggleAuto = function (orderId) {
  if (orderSimulations[orderId]) {
    orderSimulations[orderId].paused = !orderSimulations[orderId].paused;
  } else {
    startOrderSimulation(orderId);
  }
  renderApp();
};

window.simJumpToStatus = function (orderId, targetStatus) {
  const order = state.orders.find(o => o.id === orderId);
  if (!order) return;
  const steps = TRACKING_STEPS.map(s => s.status);
  const targetIdx = steps.indexOf(targetStatus);
  if (targetIdx === -1) return;

  order.status = targetStatus;
  if (!order.statusHistory) order.statusHistory = {};
  steps.forEach((stepName, index) => {
    if (index <= targetIdx) {
      if (!order.statusHistory[stepName]) {
        order.statusHistory[stepName] = getCurrentTimeStr();
      }
    } else {
      delete order.statusHistory[stepName];
    }
  });

  saveStateToLocalStorage();
  showToast(order.id, order.providerName, targetStatus);

  if (targetStatus === 'Sudah Sampai Tujuan' || targetStatus === 'Menunggu Pembayaran') {
    if (orderSimulations[orderId]) {
      clearInterval(orderSimulations[orderId].intervalId);
      delete orderSimulations[orderId];
    }
  } else {
    if (!orderSimulations[orderId]) {
      startOrderSimulation(orderId);
    }
  }
  renderApp();
};

function renderPackageDetailModal(pkg) {
  return `
    <div class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end justify-center p-0 md:p-4 animate-fade-in" onclick="window.closeActiveModals()">
      <div class="bg-white w-full max-w-lg rounded-t-3xl md:rounded-3xl overflow-hidden shadow-2xl animate-slide-up flex flex-col max-h-[85vh]" onclick="event.stopPropagation()">
        <div class="h-44 md:h-52 relative bg-slate-200">
          <img src="${pkg.image}" alt="${pkg.name}" class="w-full h-full object-cover" />
          <div class="absolute top-4 right-4 bg-white/95 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-slate-800 shadow">
            Minimal Order ${pkg.minOrder} Pax
          </div>
          <button onclick="window.closeActiveModals()" class="absolute top-4 left-4 w-9 h-9 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/75 transition-colors cursor-pointer">
            <i class="ph ph-x text-xl font-bold"></i>
          </button>
        </div>
        
        <div class="p-6 overflow-y-auto flex-1 scrollbar-none">
          <h3 class="text-lg font-extrabold text-slate-900 leading-tight font-serif">${pkg.name}</h3>
          <p class="text-xs text-primary font-black mt-1">Rp ${pkg.price.toLocaleString('id-ID')} <span class="text-slate-400 font-normal">/ pax</span></p>
          
          <div class="mt-4 pt-4 border-t border-slate-100">
            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">Deskripsi Paket</h4>
            <p class="text-xs text-slate-600 leading-relaxed">${pkg.desc}</p>
          </div>
          
          <div class="mt-6">
            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
              <i class="ph ph-list-bullets text-primary text-base"></i> Daftar Menu Hidangan Lengkap
            </h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              ${pkg.menu.map(item => `
                <div class="flex items-start gap-2 bg-slate-50 border border-slate-100 p-2.5 rounded-xl">
                  <div class="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 text-xs">
                    <i class="ph ph-check"></i>
                  </div>
                  <span class="text-xs font-medium text-slate-700 leading-tight">${item}</span>
                </div>
              `).join('')}
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
            <span class="text-sm font-extrabold text-slate-900">Rp ${(pkg.price * pkg.minOrder).toLocaleString('id-ID')}</span>
          </div>
          <button onclick="window.addToCartAndCheckout('${state.selectedProviderId}', '${pkg.id}')" class="bg-primary hover:bg-primary-light text-white text-xs font-bold px-6 py-3.5 rounded-xl transition-all shadow-md shadow-primary/10 cursor-pointer">
            Pesan Paket Ini
          </button>
        </div>
      </div>
    </div>
  `;
}

window.selectCategory = function (categoryId) {
  navigateTo('providers', { category: categoryId });
  const filtered = PROVIDERS.filter(p => p.categories.includes(categoryId));
  if (filtered.length > 0) {
    state.activeMapMarkerId = filtered[0].id;
  } else {
    state.activeMapMarkerId = null;
  }
  renderApp();

  setTimeout(() => {
    if (state.activeMapMarkerId) {
      scrollToActiveCard(state.activeMapMarkerId);
    }
  }, 100);
};

window.goBackToHome = function () {
  navigateTo('home');
};

window.navigateToAccount = function () {
  if (state.currentUser) {
    navigateTo('account');
  } else {
    navigateTo('login');
  }
};

window.goBackToProviders = function () {
  navigateTo('providers');
};

window.selectProvider = function (providerId) {
  navigateTo('packages', { providerId: providerId });
};

window.selectProviderFromMap = function (providerId) {
  state.activeMapMarkerId = providerId;
  renderApp();
  scrollToActiveCard(providerId);
};

window.selectProviderFromList = function (providerId) {
  state.activeMapMarkerId = providerId;
  renderApp();
};

function scrollToActiveCard(providerId) {
  const card = document.getElementById(`provider-card-${providerId}`);
  const container = document.getElementById('drawer-cards-container');
  if (card && container) {
    const cardLeft = card.offsetLeft;
    const containerWidth = container.offsetWidth;
    const cardWidth = card.offsetWidth;

    container.scrollTo({
      left: cardLeft - (containerWidth / 2) + (cardWidth / 2),
      behavior: 'smooth'
    });
  }
}

window.openPackageDetail = function (providerId, packageId) {
  const provider = PROVIDERS.find(p => p.id === providerId);
  const pkg = provider?.packages.find(p => p.id === packageId);
  navigateTo('packages', { providerId, package: pkg });
};

window.closePackageDetail = function () {
  state.selectedPackage = null;
  renderApp();
};

window.closeActiveModals = function () {
  state.selectedPackage = null;
  state.activePaymentOrderId = null;
  state.activeTrackingOrderId = null;
  state.activeReviewOrderId = null;
  state.customMenuWizardProviderId = null;
  renderApp();
};

window.handleOrderCardClick = function (orderId) {
  const order = state.orders.find(o => o.id === orderId);
  if (!order) return;
  if (order.status === 'Menunggu Pembayaran') {
    window.openPaymentModal(orderId);
  } else {
    window.openTrackingModal(orderId);
  }
};

window.openPaymentModal = function (orderId) {
  state.activePaymentOrderId = orderId;
  renderApp();
};

window.openTrackingModal = function (orderId) {
  state.activeTrackingOrderId = orderId;
  renderApp();
};

window.addToCartAndCheckout = function (providerId, packageId) {
  const provider = PROVIDERS.find(p => p.id === providerId);
  const pkg = provider?.packages.find(p => p.id === packageId);

  state.cart = [{
    providerId,
    packageId,
    package: pkg,
    quantity: pkg.minOrder,
    notes: '',
    liveCookingSelected: false
  }];

  if (!state.currentUser) {
    window.showAlert("Login Diperlukan", "Anda harus masuk (login) terlebih dahulu untuk melanjutkan pemesanan katering.", () => {
      state.redirectAfterLogin = 'checkout';
      navigateTo('login');
    });
  } else {
    navigateTo('checkout');
  }
};

window.updateQuantity = function (newQty) {
  if (state.cart.length === 0) return;
  const pkg = state.cart[0].package;

  if (newQty < pkg.minOrder) {
    window.showAlert("Minimal Pemesanan", `Pemesanan minimal untuk paket ini adalah ${pkg.minOrder} Pax.`);
    return;
  }

  state.cart[0].quantity = newQty;
  renderApp();
};

window.updateNotes = function (text) {
  if (state.cart.length > 0) {
    state.cart[0].notes = text;
  }
};

window.toggleLiveCooking = function (checked) {
  if (state.cart.length > 0) {
    state.cart[0].liveCookingSelected = checked;
    saveStateToLocalStorage();
    renderApp();
  }
};

window.placeOrder = function (totalPriceFormatted) {
  const cartItem = state.cart[0];
  const provider = PROVIDERS.find(p => p.id === cartItem.providerId);
  const orderId = 'ORD-' + Math.floor(10000 + Math.random() * 90000) + '-ID';

  const newOrder = {
    id: orderId,
    date: 'Hari ini',
    providerName: provider.name,
    packageName: cartItem.package.name,
    quantity: cartItem.quantity,
    totalPrice: parseInt(totalPriceFormatted),
    status: 'Menunggu Pembayaran',
    statusHistory: {
      'Menunggu Pembayaran': getCurrentTimeStr()
    },
    address: state.userAddress,
    liveCooking: cartItem.liveCookingSelected || false,
    customMenu: cartItem.packageId === 'custom-package' ? cartItem.package.menu : null
  };

  state.orders = [newOrder, ...state.orders];
  state.cart = [];
  state.activePaymentOrderId = orderId;

  saveStateToLocalStorage();
  window.showAlert("Pesanan Dibuat", 'Pesanan katering Anda berhasil dibuat! Selesaikan pembayaran agar pesanan Anda dapat diproses oleh mitra.', () => {
    navigateTo('orders');
  });
};

window.reorder = function (providerName) {
  const provider = PROVIDERS.find(p => p.name === providerName);
  if (provider) {
    window.selectProvider(provider.id);
  } else {
    navigateTo('home');
  }
};

window.openAddressModal = function () {
  const modalDiv = document.createElement('div');
  modalDiv.className = 'fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in';
  modalDiv.innerHTML = `
    <div class="bg-white w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl p-6 space-y-4 transform scale-95 transition-all duration-300">
      <div class="flex items-center gap-3 text-primary">
        <div class="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-xl flex-shrink-0">
          <i class="ph-fill ph-map-pin text-primary"></i>
        </div>
        <h3 class="text-base font-extrabold text-slate-900 font-serif">Ubah Alamat Pengantaran</h3>
      </div>
      <div class="space-y-1">
        <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Alamat Baru</label>
        <textarea id="prompt-address-input" rows="3" class="w-full bg-slate-50 border border-slate-200 focus:border-primary rounded-xl px-4 py-3 text-xs focus:outline-none transition-colors text-slate-800 resize-none font-sans">${state.userAddress}</textarea>
      </div>
      <div class="flex gap-2 pt-2">
        <button id="prompt-btn-cancel" class="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs py-3 rounded-xl transition-colors cursor-pointer">Batal</button>
        <button id="prompt-btn-ok" class="flex-1 bg-primary hover:bg-primary-light text-white font-bold text-xs py-3 rounded-xl transition-colors shadow-md shadow-primary/10 cursor-pointer">Simpan Alamat</button>
      </div>
    </div>
  `;
  document.body.appendChild(modalDiv);

  setTimeout(() => {
    modalDiv.querySelector('div').classList.remove('scale-95');
  }, 10);

  const cleanup = () => {
    modalDiv.querySelector('div').classList.add('scale-95');
    modalDiv.classList.add('opacity-0');
    setTimeout(() => {
      modalDiv.remove();
    }, 300);
  };

  modalDiv.querySelector('#prompt-btn-cancel').onclick = () => {
    cleanup();
  };

  modalDiv.querySelector('#prompt-btn-ok').onclick = () => {
    const val = modalDiv.querySelector('#prompt-address-input').value.trim();
    if (val !== '') {
      state.userAddress = val;
      if (state.currentUser) {
        state.currentUser.address = val;
        const u = state.users.find(usr => usr.email.toLowerCase() === state.currentUser.email.toLowerCase());
        if (u) u.address = val;
      }
      saveStateToLocalStorage();
      cleanup();
      renderApp();
    } else {
      window.showAlert("Peringatan", "Alamat tidak boleh kosong.");
    }
  };
};

window.locateUser = function () {
  window.showAlert("GPS Tracker", "Menyelaraskan koordinat GPS... Lokasi berhasil diperbarui.");
};

window.claimPromo = function (code) {
  navigator.clipboard.writeText(code);
  window.showAlert("Promo Berhasil Disalin", `Kode promo "${code}" berhasil disalin! Tempelkan pada catatan pesanan.`);
};

function attachEventListeners() { }

renderApp();
