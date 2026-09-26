// src/data/portofolioHanif.js
import hanifAvatar from '../assets/hanif.jpg';

export const portofolioHanif = {
  profile: {
    name: "Hanif Muthiar Tsani",
    tagline: "/* Full Stack Developer */",
    // headline: "I build reliable digital systems.",
    subheadline: "A Bandung-based developer focused on building products that scale, perform, and deliver real impact. Working at the intersection of backend engineering, web, and mobile to turn complex problems into elegant solutions.",
    bio: "Fullstack Developer dengan fokus pada pengembangan aplikasi Web dan Mobile. Berpengalaman dalam membangun arsitektur aplikasi menggunakan Laravel, React, Flutter, serta integrasi REST API, manajemen basis data MySQL berkinerja tinggi, dan orkestrasi Google Cloud Platform (GCP). Memiliki spesialisasi dalam problem solving analitis, perancangan sistem backend tangguh, dan antarmuka responsif.",
    avatar: hanifAvatar,
    location: "Bandung, Jawa Barat, Indonesia",
    email: "hanifmuthiartsani791@gmail.com",
    phone: "+6283874227036",
    linkedin: "https://linkedin.com/in/hanif-muthiar-tsani-843629285",
    github: "https://github.com/HanifMuthiarT",
    status: "Available for new projects & opportunities"
  },

  // Tech stack & tools with categorization for creative icon display
  techStack: [
    // Developer Tools
    {
      name: "VS Code",
      category: "tools",
      iconKey: "vscode",
      badge: "Daily Driver",
      description: "Primary IDE with advanced debugging, linting, and extensions"
    },
    {
      name: "Git",
      category: "tools",
      iconKey: "git",
      badge: "Version Control",
      description: "Branching strategies, rebase, and collaborative workflows"
    },
    {
      name: "GitHub",
      category: "tools",
      iconKey: "github",
      badge: "CI/CD & Remote",
      description: "Code hosting, pull requests, actions, and open source"
    },
    {
      name: "Postman",
      category: "tools",
      iconKey: "postman",
      badge: "API Testing",
      description: "API design, endpoint validation, and automated collections"
    },
    {
      name: "Google Cloud",
      category: "tools",
      iconKey: "gcp",
      badge: "Cloud Platform",
      description: "Compute Engine, Cloud Storage, IAM, and Serverless deployment"
    },
    {
      name: "MySQL",
      category: "tools",
      iconKey: "mysql",
      badge: "Relational DB",
      description: "Database design, indexing, relationships, and query optimization"
    },
    {
      name: "Figma",
      category: "tools",
      iconKey: "figma",
      badge: "UI/UX Design",
      description: "Prototyping, wireframing, and design system inspection"
    },
    {
      name: "Terminal & Bash",
      category: "tools",
      iconKey: "terminal",
      badge: "DevOps / CLI",
      description: "Shell scripting, server administration, and automation"
    },

    // Programming Languages
    {
      name: "PHP",
      category: "languages",
      iconKey: "php",
      badge: "Primary Backend",
      description: "Object-oriented backend services and MVC architecture"
    },
    {
      name: "JavaScript",
      category: "languages",
      iconKey: "javascript",
      badge: "Core Web",
      description: "ES6+, asynchronous programming, and DOM manipulation"
    },
    {
      name: "Python",
      category: "languages",
      iconKey: "python",
      badge: "AI & Scripting",
      description: "Data analysis, machine learning pipelines, and automation"
    },
    {
      name: "Dart",
      category: "languages",
      iconKey: "dart",
      badge: "Mobile Lang",
      description: "Cross-platform mobile app development with Flutter"
    },
    {
      name: "HTML5",
      category: "languages",
      iconKey: "html5",
      badge: "Semantic Web",
      description: "Semantic structuring, SEO accessibility, and web standards"
    },
    {
      name: "CSS3",
      category: "languages",
      iconKey: "css3",
      badge: "Styling",
      description: "Flexbox, Grid, CSS animations, and responsive media queries"
    },
    {
      name: "SQL",
      category: "languages",
      iconKey: "sql",
      badge: "Querying",
      description: "Complex joins, aggregations, triggers, and transactions"
    },

    // Frameworks & Libraries
    {
      name: "Laravel",
      category: "frameworks",
      iconKey: "laravel",
      badge: "MVC Powerhouse",
      description: "Eloquent ORM, robust routing, middleware, and REST APIs"
    },
    {
      name: "React.js",
      category: "frameworks",
      iconKey: "react",
      badge: "Modern Frontend",
      description: "Component architecture, hooks, state management, and SPAs"
    },
    {
      name: "Flutter",
      category: "frameworks",
      iconKey: "flutter",
      badge: "Cross-Platform",
      description: "High-performance native mobile apps for Android & iOS"
    },
    {
      name: "Tailwind CSS",
      category: "frameworks",
      iconKey: "tailwind",
      badge: "Utility Styling",
      description: "Modern, customizable, responsive design system utility engine"
    },
    {
      name: "CodeIgniter 3",
      category: "frameworks",
      iconKey: "codeigniter",
      badge: "Lightweight MVC",
      description: "Fast-loading lightweight PHP enterprise frameworks"
    },
    {
      name: "Bootstrap",
      category: "frameworks",
      iconKey: "bootstrap",
      badge: "Responsive UI",
      description: "Rapid prototyping and enterprise grid layouts"
    },
    {
      name: "Node.js",
      category: "frameworks",
      iconKey: "nodejs",
      badge: "Runtime",
      description: "Scalable event-driven backend microservices and APIs"
    },
    {
      name: "REST API",
      category: "frameworks",
      iconKey: "api",
      badge: "Integration",
      description: "Stateless JSON endpoints, JWT auth, and webhook sync"
    }
  ],

  education: [
    {
      instance: "Universitas Langlangbuana",
      degree: "S1 Teknik Informatika",
      period: "2022 - 2026",
      details: "IPK / Cumulative GPA: 3.53 / 4.00",
      description: "Mempelajari rekayasa perangkat lunak, algoritma & struktur data, arsitektur basis data relasional, kecerdasan buatan, serta manajemen proyek teknologi informasi."
    },
    {
      instance: "SMK Negeri 1 Katapang",
      degree: "Teknik Mekatronika",
      period: "2018 - 2022",
      details: "Nilai Rata-Rata: 81.78 / 100",
      description: "Fondasi logika sistem, pemrograman mikrokontroler, otomasi industri, dan pemecahan masalah teknis perangkat keras terintegrasi."
    }
  ],

  experiences: [
    {
      role: "Web Developer",
      company: "PT. Raharja Sinergi Komunikasi",
      date: "April 2025 - Agustus 2025",
      type: "Fullstack Engineering",
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
      type: "Google Certified Cohort",
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
        originLabel: "Instansi / Enterprise",
        category: "Enterprise System",
        desc: "Membangun sistem dashboard monitoring pengolahan data pajak berbasis web terintegrasi untuk mempermudah analisis data berkala, rekapitulasi data pendapatan daerah, serta validasi berkas otomatis.",
        impact: "// 40% faster tax reporting, automated multi-period ledger & reconciliation",
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
        desc: "Aplikasi berbasis web & cloud yang memungkinkan pengguna untuk memantau kesehatan ritme jantung keluarga secara real-time, dilengkapi notifikasi ambang batas bahaya dan riwayat analitik medis.",
        impact: "// Real-time BPM metrics, Google Bangkit cohort capstone distinction",
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
        originLabel: "Client Project",
        category: "Web Application",
        desc: "Sistem Point of Sales (POS) berbasis web responsif yang dirancang untuk UMKM dengan arsitektur offline-first. Dilengkapi manajemen inventori stok dinamis, transaksi barcode kasir multi-role, absensi karyawan, hingga rekapitulasi laporan laba-rugi otomatis.",
        impact: "// Offline-first sync with IndexedDB, multi-role cashier & zero-latency POS",
        tech: ["React.js", "Tailwind CSS", "IndexedDB", "Node.js"],
        link: "https://github.com/HanifMuthiarT",
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
        originLabel: "Personal & AI Research",
        category: "AI & Mobile App",
        desc: "Aplikasi mobile Android cerdas untuk memprediksi tingkat stres melalui ekspresi wajah secara real-time, mengombinasikan Convolutional Neural Network (MobileNetV2) dengan ensemble Random Forest untuk akurasi klasifikasi tinggi.",
        impact: "// MobileNetV2 + Random Forest, 92%+ facial emotion classification accuracy",
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
        originLabel: "Academic / Campus Project",
        category: "Web Application",
        desc: "Sistem manajemen perpustakaan modern berbasis web multi-role (Petugas & Pengguna) untuk memudahkan penelusuran katalog buku, sirkulasi peminjaman, tracking denda keterlambatan, serta pencetakan kartu anggota digital.",
        impact: "// Digital cataloging, automated fine calculation & printable member RFID card",
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
      date: "2024",
      topic: "Cloud Architecture & GCP Deployment",
      credentialId: "L4PQ5YW14ZO1",
      pdf: new URL('../assets/certificates/sertifikat_course_133_4067362_181124110545.pdf', import.meta.url).href,
      thumbnail: new URL('../assets/certificates/previews/sertifikat_course_133_4067362_181124110545.png', import.meta.url).href
    },
    {
      id: "gcp-ml",
      title: "Belajar Penerapan Machine Learning dengan Google Cloud",
      provider: "Dicoding Indonesia",
      date: "2024",
      topic: "Vertex AI & Cloud ML Pipelines",
      credentialId: "QLZ9V011EX5D",
      pdf: new URL('../assets/certificates/sertifikat_course_658_4067362_291124015440.pdf', import.meta.url).href,
      thumbnail: new URL('../assets/certificates/previews/sertifikat_course_658_4067362_291124015440.png', import.meta.url).href
    },
    {
      id: "gcp-backend",
      title: "Belajar Membuat Aplikasi Back-End untuk Pemula dengan Google Cloud",
      provider: "Dicoding Indonesia",
      date: "2024",
      topic: "REST API & Microservices on Cloud",
      credentialId: "81P244MLNZOY",
      pdf: new URL('../assets/certificates/sertifikat_course_342_4067362_281024224858.pdf', import.meta.url).href,
      thumbnail: new URL('../assets/certificates/previews/sertifikat_course_342_4067362_281024224858.png', import.meta.url).href
    },
    {
      id: "js-basic",
      title: "Belajar Dasar Pemrograman JavaScript",
      provider: "Dicoding Indonesia",
      date: "2024",
      topic: "Modern ECMAScript & Async Programming",
      credentialId: "0LZ0461LNP65",
      pdf: new URL('../assets/certificates/sertifikat_course_256_4067362_211024130344.pdf', import.meta.url).href,
      thumbnail: new URL('../assets/certificates/previews/sertifikat_course_256_4067362_211024130344.png', import.meta.url).href
    },
    {
      id: "se-foundation",
      title: "Memulai Dasar Pemrograman untuk Menjadi Pengembang Software",
      provider: "Dicoding Indonesia",
      date: "2024",
      topic: "Software Engineering Foundations",
      credentialId: "MRZME1WRLPYQ",
      pdf: new URL('../assets/certificates/sertifikat_course_237_4067362_110924010626.pdf', import.meta.url).href,
      thumbnail: new URL('../assets/certificates/previews/sertifikat_course_237_4067362_110924010626.png', import.meta.url).href
    },
    {
      id: "prog-logic",
      title: "Pengenalan ke Logika Pemrograman (Programming Logic 101)",
      provider: "Dicoding Indonesia",
      date: "2024",
      topic: "Algorithm & Computational Thinking",
      credentialId: "MRZME1RD3PYQ",
      pdf: new URL('../assets/certificates/sertifikat_course_302_4067362_110924100954.pdf', import.meta.url).href,
      thumbnail: new URL('../assets/certificates/previews/sertifikat_course_302_4067362_110924100954.png', import.meta.url).href
    },
    {
      id: "ai-basic",
      title: "Belajar Dasar AI",
      provider: "Dicoding Indonesia",
      date: "2024",
      topic: "Artificial Intelligence Concepts",
      credentialId: "4EXG77JK1PRL",
      pdf: new URL('../assets/certificates/sertifikat_course_653_4067362_281024164230.pdf', import.meta.url).href,
      thumbnail: new URL('../assets/certificates/previews/sertifikat_course_653_4067362_281024164230.png', import.meta.url).href
    },
    {
      id: "git-basic",
      title: "Belajar Dasar Git dengan GitHub",
      provider: "Dicoding Indonesia",
      date: "2024",
      topic: "Version Control & GitHub",
      credentialId: "NVP7QDVN4ZR0",
      pdf: new URL('../assets/certificates/sertifikat_course_317_4067362_110924145240.pdf', import.meta.url).href,
      thumbnail: new URL('../assets/certificates/previews/sertifikat_course_317_4067362_110924145240.png', import.meta.url).href
    }
  ],

  softSkills: [
    "Analytical Problem Solving",
    "Systems Architecture",
    "Cross-functional Communication",
    "Continuous Learning & Adaptation",
    "Team Collaboration & Agile"
  ]
};