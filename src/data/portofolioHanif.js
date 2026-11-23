// src/data/portofolioHanif.js
// Satu-satunya sumber konten portofolio. Semua deskripsi disimpan di sini,
// komponen UI hanya menampilkan — jangan menulis teks permanen di JSX.
import hanifAvatar from '../assets/hanif.jpg';

export const portofolioHanif = {
  profile: {
    name: "Hanif Muthiar Tsani",
    role: "Full Stack Developer",
    tagline: "Full Stack Developer & Web Application Engineer",
    headline: "Membangun aplikasi web yang rapi, cepat, dan bisa diandalkan.",
    subheadline:
      "Saya adalah developer asal Bandung yang bekerja di pengembangan web dan mobile. Fokus saya adalah menyusun sistem backend yang kuat, merangkai API yang jelas, dan menghadirkan antarmuka yang nyaman dipakai orang lain.",
    bio:
      "Fullstack Developer dengan fokus pada pengembangan aplikasi Web dan Mobile. Berpengalaman dalam membangun arsitektur aplikasi menggunakan Laravel, React, Flutter, serta integrasi REST API, manajemen basis data MySQL berkinerja tinggi, dan orkestrasi Google Cloud Platform (GCP). Memiliki spesialisasi dalam problem solving analitis, perancangan sistem backend tangguh, dan antarmuka responsif.",
    avatar: hanifAvatar,
    location: "Bandung, Jawa Barat, Indonesia",
    email: "hanifmuthiartsani791@gmail.com",
    phone: "+6283874227036",
    linkedin: "https://linkedin.com/in/hanif-muthiar-tsani-843629285",
    github: "https://github.com/HanifMuthiarT",
    status: "Tersedia untuk proyek dan peluang kerja baru",
    now: "Menyelesaikan studi S1 Teknik Informatika dan membuka diri untuk peran full-stack, backend, maupun frontend.",
    timezone: "Asia/Jakarta",
    timezoneLabel: "WIB (GMT+7)",
    coreStack: ["Laravel", "React.js", "Flutter", "MySQL", "Google Cloud", "REST API"]
  },

  // Cara kerja — dipakai di bagian "Tentang" supaya HR melihat kebiasaan kerja,
  // bukan hanya daftar teknologi.
  softSkills: [
    {
      name: "Analytical Problem Solving",
      description: "Memecah masalah besar menjadi bagian kecil yang bisa diuji dan diukur."
    },
    {
      name: "Systems Architecture",
      description: "Merancang struktur aplikasi yang mudah dikembangkan dan dirawat."
    },
    {
      name: "Cross-functional Communication",
      description: "Menerjemahkan kebutuhan tim non-teknis menjadi spesifikasi teknis yang jelas."
    },
    {
      name: "Continuous Learning & Adaptation",
      description: "Mengikuti perubahan tooling dan praktik baru tanpa kehilangan fokus pada hasil."
    },
    {
      name: "Team Collaboration & Agile",
      description: "Bekerja dalam ritme iteratif, terbuka terhadap review, dan konsisten pada tenggat."
    }
  ],

  // Blueprint sistem — pembeda portofolio ini. Empat lapisan kerja yang
  // benar-benar dipakai di proyek, bukan diagram dekoratif.
  blueprint: [
    {
      id: "interface",
      number: "01",
      label: "Antarmuka",
      description:
        "Menyusun halaman web dan aplikasi mobile yang responsif, dengan alur yang mudah diikuti pengguna.",
      tools: ["React.js", "Tailwind CSS", "Flutter", "Bootstrap"]
    },
    {
      id: "logic",
      number: "02",
      label: "API & Logika",
      description:
        "Membangun endpoint REST, validasi input, autentikasi, dan aturan bisnis yang tidak bercampur dengan tampilan.",
      tools: ["Laravel", "Node.js", "REST API", "CodeIgniter 3"]
    },
    {
      id: "data",
      number: "03",
      label: "Data",
      description:
        "Merancang skema relasional, query yang terukur, serta penyimpanan lokal untuk kebutuhan offline-first.",
      tools: ["MySQL", "SQL", "IndexedDB"]
    },
    {
      id: "cloud",
      number: "04",
      label: "Cloud & Operasi",
      description:
        "Menempatkan aplikasi di Google Cloud dengan konfigurasi akses, penyimpanan aset, dan alur deployment yang jelas.",
      tools: ["Google Cloud", "Compute Engine", "Cloud Storage", "IAM"]
    }
  ],

  // Tech stack & tools dengan kategori untuk tetap mudah dipindai.
  techStack: [
    {
      name: "VS Code",
      category: "tools",
      iconKey: "vscode",
      badge: "Editor utama",
      description: "Editor harian untuk debugging, linting, dan pengembangan terintegrasi."
    },
    {
      name: "Git",
      category: "tools",
      iconKey: "git",
      badge: "Version control",
      description: "Strategi branching, rebase, dan alur kerja kolaboratif."
    },
    {
      name: "GitHub",
      category: "tools",
      iconKey: "github",
      badge: "Kolaborasi & CI/CD",
      description: "Hosting kode, pull request, GitHub Actions, dan kontribusi open source."
    },
    {
      name: "Postman",
      category: "tools",
      iconKey: "postman",
      badge: "Pengujian API",
      description: "Desain API, validasi endpoint, dan koleksi pengujian otomatis."
    },
    {
      name: "Google Cloud",
      category: "tools",
      iconKey: "gcp",
      badge: "Platform cloud",
      description: "Compute Engine, Cloud Storage, IAM, dan deployment serverless."
    },
    {
      name: "MySQL",
      category: "tools",
      iconKey: "mysql",
      badge: "Database relasional",
      description: "Desain skema, indexing, relasi, dan optimasi query."
    },
    {
      name: "Figma",
      category: "tools",
      iconKey: "figma",
      badge: "UI/UX design",
      description: "Prototyping, wireframing, dan pemeriksaan design system."
    },
    {
      name: "Terminal & Bash",
      category: "tools",
      iconKey: "terminal",
      badge: "CLI & DevOps",
      description: "Shell scripting, administrasi server, dan otomasi tugas berulang."
    },

    {
      name: "PHP",
      category: "languages",
      iconKey: "php",
      badge: "Backend utama",
      description: "Layanan backend berorientasi objek dan arsitektur MVC."
    },
    {
      name: "JavaScript",
      category: "languages",
      iconKey: "javascript",
      badge: "Bahasa web",
      description: "ES6+, pemrograman asinkron, dan manipulasi DOM."
    },
    {
      name: "Python",
      category: "languages",
      iconKey: "python",
      badge: "AI & scripting",
      description: "Analisis data, pipeline machine learning, dan otomasi."
    },
    {
      name: "Dart",
      category: "languages",
      iconKey: "dart",
      badge: "Bahasa mobile",
      description: "Pengembangan aplikasi mobile lintas platform bersama Flutter."
    },
    {
      name: "HTML5",
      category: "languages",
      iconKey: "html5",
      badge: "Web semantik",
      description: "Struktur semantik, SEO, aksesibilitas, dan standar web."
    },
    {
      name: "CSS3",
      category: "languages",
      iconKey: "css3",
      badge: "Styling",
      description: "Flexbox, Grid, animasi, dan tata letak responsif."
    },
    {
      name: "SQL",
      category: "languages",
      iconKey: "sql",
      badge: "Query database",
      description: "Join kompleks, agregasi, trigger, dan transaksi."
    },

    {
      name: "Laravel",
      category: "frameworks",
      iconKey: "laravel",
      badge: "MVC framework",
      description: "Eloquent ORM, routing, middleware, dan pembangunan REST API."
    },
    {
      name: "React.js",
      category: "frameworks",
      iconKey: "react",
      badge: "Frontend modern",
      description: "Arsitektur komponen, hooks, state management, dan SPA."
    },
    {
      name: "Flutter",
      category: "frameworks",
      iconKey: "flutter",
      badge: "Lintas platform",
      description: "Aplikasi mobile berkinerja tinggi untuk Android dan iOS."
    },
    {
      name: "Tailwind CSS",
      category: "frameworks",
      iconKey: "tailwind",
      badge: "Utility styling",
      description: "Sistem desain utility yang dapat disesuaikan dan responsif."
    },
    {
      name: "CodeIgniter 3",
      category: "frameworks",
      iconKey: "codeigniter",
      badge: "MVC ringan",
      description: "Framework PHP ringan untuk aplikasi yang perlu dimuat cepat."
    },
    {
      name: "Bootstrap",
      category: "frameworks",
      iconKey: "bootstrap",
      badge: "UI responsif",
      description: "Prototyping cepat dan tata letak grid untuk aplikasi enterprise."
    },
    {
      name: "Node.js",
      category: "frameworks",
      iconKey: "nodejs",
      badge: "Runtime",
      description: "Backend microservices dan API yang skalabel dengan event loop."
    },
    {
      name: "REST API",
      category: "frameworks",
      iconKey: "api",
      badge: "Integrasi",
      description: "Endpoint JSON stateless, autentikasi JWT, dan sinkronisasi webhook."
    }
  ],

  education: [
    {
      instance: "Universitas Langlangbuana",
      degree: "S1 Teknik Informatika",
      period: "2022 - 2026",
      details: "IPK 3.53 / 4.00",
      description:
        "Mempelajari rekayasa perangkat lunak, algoritma dan struktur data, arsitektur basis data relasional, kecerdasan buatan, serta manajemen proyek teknologi informasi."
    },
    {
      instance: "SMK Negeri 1 Katapang",
      degree: "Teknik Mekatronika",
      period: "2018 - 2022",
      details: "Rata-rata 81.78 / 100",
      description:
        "Fondasi logika sistem, pemrograman mikrokontroler, otomasi industri, dan pemecahan masalah teknis perangkat keras terintegrasi."
    }
  ],

  experiences: [
    {
      role: "Web Developer",
      company: "PT. Raharja Sinergi Komunikasi",
      date: "April 2025 - Agustus 2025",
      type: "Fullstack Engineering",
      tech: ["Laravel", "MySQL", "Bootstrap", "REST API"],
      tasks: [
        "Mengembangkan website monitoring data pajak berbasis web (backend & frontend) dengan arsitektur modular.",
        "Membangun dan mengelola fitur sistem untuk pengolahan data agregat dan pelaporan real-time.",
        "Mengintegrasikan database MySQL ke dalam sistem aplikasi dengan query efisien dan keamanan data teruji."
      ]
    },
    {
      role: "Cloud Computing Cohort",
      company: "Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka",
      date: "September 2024 - Desember 2024",
      type: "Program Bangkit Academy",
      tech: ["Google Cloud", "Compute Engine", "Cloud Storage", "IAM"],
      tasks: [
        "Menyelesaikan program pembelajaran intensif standar industri di bidang Cloud Computing & Machine Learning Deployment.",
        "Mengembangkan dan mendeploy aplikasi berbasis microservices API pada Google Cloud Platform (GCP).",
        "Mengimplementasikan Google Compute Engine, Cloud Storage, Cloud Functions, dan IAM security best practices."
      ]
    }
  ],

  projects: {
    instansi: [
      {
        id: "tax-monitoring",
        title: "Website Monitoring Data Pajak Daerah",
        clientName: "PT. Raharja Sinergi Komunikasi",
        origin: "instansi",
        originLabel: "Perusahaan / Instansi",
        category: "Enterprise System",
        desc: "Membangun sistem dashboard monitoring pengolahan data pajak berbasis web terintegrasi untuk mempermudah analisis data berkala, rekapitulasi data pendapatan daerah, serta validasi berkas otomatis.",
        impact: "Pelaporan pajak menjadi 40% lebih cepat, dengan rekapitulasi dan rekonsiliasi otomatis untuk beberapa periode sekaligus.",
        flow: [
          { label: "Bootstrap", note: "Dashboard monitoring" },
          { label: "Laravel", note: "Routing, validasi, agregasi" },
          { label: "MySQL", note: "Data pajak & rekapitulasi" },
          { label: "Laporan", note: "Ekspor & validasi berkas" }
        ],
        tech: ["Laravel", "MySQL", "Bootstrap", "REST API"],
        link: "https://github.com/HanifMuthiarT/monitoring-dashboard",
        image: [new URL('../assets/Web-Monitoring.jpg', import.meta.url).href]
      },
      {
        id: "heart-tracker",
        title: "Family Heart Tracker — Pemantauan Jantung Keluarga",
        clientName: "Bangkit Academy by Google, Tokopedia, Gojek, Traveloka",
        origin: "academy",
        originLabel: "Bangkit Academy (Google)",
        category: "HealthTech & Cloud",
        desc: "Aplikasi berbasis web dan cloud yang memungkinkan pengguna memantau kesehatan ritme jantung keluarga secara real-time, dilengkapi notifikasi ambang batas bahaya dan riwayat analitik medis.",
        impact: "Metrik detak jantung real-time dan penghargaan sebagai capstone unggulan program Bangkit Academy.",
        flow: [
          { label: "Web app", note: "Pemantauan detak jantung" },
          { label: "Express API", note: "Endpoint data & notifikasi" },
          { label: "Google Cloud", note: "Compute Engine & Cloud Storage" },
          { label: "Riwayat", note: "Grafik & ambang batas" }
        ],
        tech: ["JavaScript", "REST API", "Google Cloud", "Express.js"],
        link: "https://github.com/HanifMuthiarT/Family_health_Tracker",
        image: [
          new URL('../assets/bangkit/dashboard.png', import.meta.url).href,
          new URL('../assets/bangkit/heart.png', import.meta.url).href
        ]
      }
    ],

    client: [
      {
        id: "pos-umkm",
        title: "POS UMKM — Sistem Kasir & Retail Offline-First",
        clientName: "Client Retail Project",
        origin: "client",
        originLabel: "Proyek Klien",
        category: "Web Application",
        desc: "Sistem Point of Sales (POS) berbasis web responsif yang dirancang untuk UMKM dengan arsitektur offline-first. Dilengkapi manajemen inventori stok dinamis, transaksi barcode kasir multi-role, absensi karyawan, hingga rekapitulasi laporan laba-rugi otomatis.",
        impact: "Sinkronisasi offline-first dengan IndexedDB, kasir multi-role, dan transaksi yang tetap lancar tanpa koneksi.",
        flow: [
          { label: "React + Tailwind", note: "Kasir & inventori" },
          { label: "IndexedDB", note: "Penyimpanan offline-first" },
          { label: "Sinkronisasi", note: "Data kembali ke server" },
          { label: "Laporan", note: "Laba-rugi & absensi" }
        ],
        tech: ["React.js", "Tailwind CSS", "IndexedDB", "Node.js"],
        link: "https://github.com/HanifMuthiarT/umkm-pos",
        image: [
          new URL('../assets/POS-UMKM.png', import.meta.url).href,
          new URL('../assets/POS-UMKM-2.png', import.meta.url).href,
          new URL('../assets/POS-UMKM-3.png', import.meta.url).href,
          new URL('../assets/POS-UMKM-4.png', import.meta.url).href,
          new URL('../assets/POS-UMKM-5.png', import.meta.url).href,
          new URL('../assets/POS-UMKM-6.png', import.meta.url).href,
          new URL('../assets/POS-UMKM-7.png', import.meta.url).href,
          new URL('../assets/POS-UMKM-8.png', import.meta.url).href,
          new URL('../assets/POS-UMKM-9.png', import.meta.url).href
        ]
      }
    ],

    personal: [
      {
        id: "mind-care",
        title: "MindCare — Deteksi Tingkat Stres Real-Time",
        clientName: "Research & Personal Project",
        origin: "personal",
        originLabel: "Proyek Pribadi & Riset AI",
        category: "AI & Mobile App",
        desc: "Aplikasi mobile Android cerdas untuk memprediksi tingkat stres melalui ekspresi wajah secara real-time, mengombinasikan Convolutional Neural Network (MobileNetV2) dengan ensemble Random Forest untuk akurasi klasifikasi tinggi.",
        impact: "MobileNetV2 dan Random Forest dengan akurasi klasifikasi ekspresi wajah di atas 92%.",
        flow: [
          { label: "Kamera Flutter", note: "Input ekspresi wajah" },
          { label: "MobileNetV2", note: "Ekstraksi fitur CNN" },
          { label: "Random Forest", note: "Klasifikasi tingkat stres" },
          { label: "Hasil", note: "Prediksi real-time di Android" }
        ],
        tech: ["Flutter", "Python", "TensorFlow", "Dart"],
        link: "https://github.com/HanifMuthiarT/mind_care",
        image: [
          new URL('../assets/Mind-Care.jpg', import.meta.url).href,
          new URL('../assets/Mind-Care-2.jpg', import.meta.url).href,
          new URL('../assets/Mind-Care-3.jpg', import.meta.url).href,
          new URL('../assets/Mind-Care-4.jpg', import.meta.url).href
        ]
      },
      {
        id: "perpus-digital",
        title: "Perpustakaan Digital — Sistem Manajemen Terpadu",
        clientName: "Academic & Campus Project",
        origin: "academy",
        originLabel: "Proyek Akademik / Kampus",
        category: "Web Application",
        desc: "Sistem manajemen perpustakaan modern berbasis web multi-role (Petugas & Pengguna) untuk memudahkan penelusuran katalog buku, sirkulasi peminjaman, tracking denda keterlambatan, serta pencetakan kartu anggota digital.",
        impact: "Katalog digital, perhitungan denda otomatis, dan kartu anggota yang dapat dicetak.",
        flow: [
          { label: "Blade + Bootstrap", note: "Antarmuka petugas & pengguna" },
          { label: "Laravel", note: "Sirkulasi & aturan denda" },
          { label: "MySQL", note: "Katalog, anggota, peminjaman" },
          { label: "Kartu anggota", note: "Cetak & unduh" }
        ],
        tech: ["Laravel", "MySQL", "Bootstrap", "Blade"],
        link: "https://github.com/HanifMuthiarT/Ruang-Pustaka---Aplikasi-ManajemenPerpustakaan-Digital",
        image: [
          new URL('../assets/perpus/login.png', import.meta.url).href,
          new URL('../assets/perpus/dashboard - petugas.png', import.meta.url).href,
          new URL('../assets/perpus/koleksi buku - petugas.png', import.meta.url).href,
          new URL('../assets/perpus/data anggota - petugas.png', import.meta.url).href,
          new URL('../assets/perpus/peminjaman - petugas.png', import.meta.url).href,
          new URL('../assets/perpus/laporan - petugas.png', import.meta.url).href,
          new URL('../assets/perpus/dashboard - pengguna .png', import.meta.url).href,
          new URL('../assets/perpus/jelajah buku - pengguna.png', import.meta.url).href,
          new URL('../assets/perpus/profile - pengguna.png', import.meta.url).href,
          new URL('../assets/perpus/kartu - pengguna.png', import.meta.url).href
        ]
      }
    ]
  },

  certificates: [
    {
      id: "gcp-engineer",
      title: "Menjadi Google Cloud Engineer",
      provider: "Dicoding Indonesia",
      date: "2024 - 2027",
      topic: "Cloud Architecture & GCP Deployment",
      credentialId: "L4PQ5YW14ZO1",
      pdf: new URL('../assets/certificates/sertifikat_course_133_4067362_181124110545.pdf', import.meta.url).href,
      thumbnail: new URL('../assets/certificates/previews/sertifikat_course_133_4067362_181124110545.png', import.meta.url).href
    },
    {
      id: "gcp-ml",
      title: "Belajar Penerapan Machine Learning dengan Google Cloud",
      provider: "Dicoding Indonesia",
      date: "2024 - 2027",
      topic: "Vertex AI & Cloud ML Pipelines",
      credentialId: "QLZ9V011EX5D",
      pdf: new URL('../assets/certificates/sertifikat_course_658_4067362_291124015440.pdf', import.meta.url).href,
      thumbnail: new URL('../assets/certificates/previews/sertifikat_course_658_4067362_291124015440.png', import.meta.url).href
    },
    {
      id: "gcp-backend",
      title: "Belajar Membuat Aplikasi Back-End untuk Pemula dengan Google Cloud",
      provider: "Dicoding Indonesia",
      date: "2024 - 2027",
      topic: "REST API & Microservices on Cloud",
      credentialId: "81P244MLNZOY",
      pdf: new URL('../assets/certificates/sertifikat_course_342_4067362_281024224858.pdf', import.meta.url).href,
      thumbnail: new URL('../assets/certificates/previews/sertifikat_course_342_4067362_281024224858.png', import.meta.url).href
    },
    {
      id: "js-basic",
      title: "Belajar Dasar Pemrograman JavaScript",
      provider: "Dicoding Indonesia",
      date: "2024 - 2027",
      topic: "Modern ECMAScript & Async Programming",
      credentialId: "0LZ0461LNP65",
      pdf: new URL('../assets/certificates/sertifikat_course_256_4067362_211024130344.pdf', import.meta.url).href,
      thumbnail: new URL('../assets/certificates/previews/sertifikat_course_256_4067362_211024130344.png', import.meta.url).href
    },
    {
      id: "se-foundation",
      title: "Memulai Dasar Pemrograman untuk Menjadi Pengembang Software",
      provider: "Dicoding Indonesia",
      date: "2024 - 2027",
      topic: "Software Engineering Foundations",
      credentialId: "MRZME1WRLPYQ",
      pdf: new URL('../assets/certificates/sertifikat_course_237_4067362_110924010626.pdf', import.meta.url).href,
      thumbnail: new URL('../assets/certificates/previews/sertifikat_course_237_4067362_110924010626.png', import.meta.url).href
    },
    {
      id: "prog-logic",
      title: "Pengenalan ke Logika Pemrograman (Programming Logic 101)",
      provider: "Dicoding Indonesia",
      date: "2024 - 2027",
      topic: "Algorithm & Computational Thinking",
      credentialId: "MRZME1RD3PYQ",
      pdf: new URL('../assets/certificates/sertifikat_course_302_4067362_110924100954.pdf', import.meta.url).href,
      thumbnail: new URL('../assets/certificates/previews/sertifikat_course_302_4067362_110924100954.png', import.meta.url).href
    },
    {
      id: "ai-basic",
      title: "Belajar Dasar AI",
      provider: "Dicoding Indonesia",
      date: "2024 - 2027",
      topic: "Artificial Intelligence Concepts",
      credentialId: "4EXG77JK1PRL",
      pdf: new URL('../assets/certificates/sertifikat_course_653_4067362_281024164230.pdf', import.meta.url).href,
      thumbnail: new URL('../assets/certificates/previews/sertifikat_course_653_4067362_281024164230.png', import.meta.url).href
    },
    {
      id: "git-basic",
      title: "Belajar Dasar Git dengan GitHub",
      provider: "Dicoding Indonesia",
      date: "2024 - 2027",
      topic: "Version Control & GitHub",
      credentialId: "NVP7QDVN4ZR0",
      pdf: new URL('../assets/certificates/sertifikat_course_317_4067362_110924145240.pdf', import.meta.url).href,
      thumbnail: new URL('../assets/certificates/previews/sertifikat_course_317_4067362_110924145240.png', import.meta.url).href
    }
  ]
};
