// src/data/portfolioData.js
import hanifAvatar from '../assets/hanif.jpg';

// Project images
import webMonitoring from '../assets/Web-Monitoring.jpg';
import bangkitDashboard from '../assets/bangkit/dashboard.png';
import bangkitHeart from '../assets/bangkit/heart.png';
import posUmkm1 from '../assets/POS-UMKM.png';
import posUmkm2 from '../assets/POS-UMKM-2.png';
import posUmkm3 from '../assets/POS-UMKM-3.png';
import posUmkm4 from '../assets/POS-UMKM-4.png';
import posUmkm5 from '../assets/POS-UMKM-5.png';
import posUmkm6 from '../assets/POS-UMKM-6.png';
import posUmkm7 from '../assets/POS-UMKM-7.png';
import posUmkm8 from '../assets/POS-UMKM-8.png';
import posUmkm9 from '../assets/POS-UMKM-9.png';
import mindCare1 from '../assets/Mind-Care.jpg';
import mindCare2 from '../assets/Mind-Care-2.jpg';
import mindCare3 from '../assets/Mind-Care-3.jpg';
import mindCare4 from '../assets/Mind-Care-4.jpg';
import perpusLogin from '../assets/perpus/login.png';
import perpusPetugasDash from '../assets/perpus/dashboard - petugas.png';
import perpusKoleksi from '../assets/perpus/koleksi buku - petugas.png';
import perpusAnggota from '../assets/perpus/data anggota - petugas.png';
import perpusPeminjaman from '../assets/perpus/peminjaman - petugas.png';
import perpusLaporan from '../assets/perpus/laporan - petugas.png';
import perpusUserDash from '../assets/perpus/dashboard - pengguna .png';
import perpusJelajah from '../assets/perpus/jelajah buku - pengguna.png';
import perpusProfile from '../assets/perpus/profile - pengguna.png';
import perpusKartu from '../assets/perpus/kartu - pengguna.png';

// Certificate previews
import certGcpEngPreview from '../assets/certificates/previews/sertifikat_course_133_4067362_181124110545.png';
import certGcpMlPreview from '../assets/certificates/previews/sertifikat_course_658_4067362_291124015440.png';
import certGcpBackendPreview from '../assets/certificates/previews/sertifikat_course_342_4067362_281024224858.png';
import certJsPreview from '../assets/certificates/previews/sertifikat_course_256_4067362_211024130344.png';
import certSePreview from '../assets/certificates/previews/sertifikat_course_237_4067362_110924010626.png';
import certLogicPreview from '../assets/certificates/previews/sertifikat_course_302_4067362_110924100954.png';
import certAiPreview from '../assets/certificates/previews/sertifikat_course_653_4067362_281024164230.png';
import certGitPreview from '../assets/certificates/previews/sertifikat_course_317_4067362_110924145240.png';
import certLspPreview from '../assets/certificates/previews/sertifikat_lsp.png';
import certBangkitPreview from '../assets/certificates/previews/sertifikat_bangkit_1.png';

// Certificate PDFs
import certGcpEngPdf from '../assets/certificates/sertifikat_course_133_4067362_181124110545.pdf';
import certGcpMlPdf from '../assets/certificates/sertifikat_course_658_4067362_291124015440.pdf';
import certGcpBackendPdf from '../assets/certificates/sertifikat_course_342_4067362_281024224858.pdf';
import certJsPdf from '../assets/certificates/sertifikat_course_256_4067362_211024130344.pdf';
import certSePdf from '../assets/certificates/sertifikat_course_237_4067362_110924010626.pdf';
import certLogicPdf from '../assets/certificates/sertifikat_course_302_4067362_110924100954.pdf';
import certAiPdf from '../assets/certificates/sertifikat_course_653_4067362_281024164230.pdf';
import certGitPdf from '../assets/certificates/sertifikat_course_317_4067362_110924145240.pdf';
import certLspPdf from '../assets/certificates/Sertifikat_LSP_Hanif Muthiar Tsani.pdf';
import certBangkitPdf from '../assets/certificates/[Bangkit 2024 Batch 2] Certificate - C249B4KY1710.pdf';

export const profile = {
  name: "Hanif Muthiar Tsani",
  role: "Backend Developer",
  city: "Bandung",
  province: "Jawa Barat",
  country: "Indonesia",
  avatar: hanifAvatar,
  githubUsername: "HanifMuthiarT",
  email: "hanifmuthiartsani791@gmail.com",
  phone: "+6283874227036",
  whatsapp: "https://wa.me/6283874227036",
  linkedin: "https://linkedin.com/in/hanif-muthiar-tsani-843629285",
  github: "https://github.com/HanifMuthiarT",
  resumePdf: "/resume/Hanif%20Muthiar%20Tsani%20-%20CV.pdf",
  timeZone: "Asia/Jakarta",
  gmtOffset: "GMT+7",
  bioEn: "A Computer Science graduate with expertise in Data Management and Backend Development. Experienced in designing efficient MySQL database schemas and building fast, stable RESTful APIs using Laravel, Go, JavaScript, and FastAPI. Known for being analytical, meticulous, and quick to understand application requirements in order to translate them into systems that function optimally. Applies MVC, OOP, and SDLC principles to produce well-structured code.",
  bioId: "Lulusan Teknik Informatika dengan keahlian utama pada Manajemen Data dan Pengembangan Backend. Terbiasa merancang skema database MySQL yang efisien serta membangun RESTful API yang cepat dan stabil menggunakan Laravel, Golang, JavaScript, dan FastAPI. Dikenal sebagai pribadi yang analitis, teliti, dan cepat memahami alur kebutuhan aplikasi untuk diwujudkan ke dalam sistem yang berfungsi optimal. Menerapkan prinsip MVC, OOP, dan SDLC untuk menghasilkan kode yang terstruktur.",
  nowEn: "Currently open to full-time roles & freelance projects",
  nowId: "Terbuka untuk pekerjaan full-time & proyek freelance",
  education: {
    degree: "S1",
    majorEn: "Informatics Engineering",
    majorId: "Teknik Informatika",
    institutionEn: "Langlangbuana University",
    institutionId: "Universitas Langlangbuana",
    periodEn: "Graduated 2026",
    periodId: "Lulus 2026",
    gpa: "3.53"
  }
};

export const marqueeTech = [
  {
    name: "Laravel",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg"
  },
  {
    name: "React.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
  },
  {
    name: "Flutter",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"
  },
  {
    name: "MySQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
  },
  {
    name: "Google Cloud",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg"
  },
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
  },
  {
    name: "Python",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
  },
  {
    name: "Tailwind CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
  }
];

export const experiences = [
  {
    id: "raharja",
    role: "Web Developer",
    company: "PT. Raharja Sinergi Komunikasi",
    type: "Fullstack Engineering",
    year: "Apr 2025 – Agu 2025",
    active: false,
    image: webMonitoring,
    description: "Mengembangkan website monitoring data pajak daerah (backend & frontend) dengan pelaporan real-time.",
    descriptionEn: "Develop a website for monitoring local tax data (backend and frontend) with real-time reporting.",
    tags: ["Laravel", "MySQL", "Bootstrap", "REST API", "Reporting"],
    achievements: [
      "Mengembangkan fungsionalitas backend menggunakan Laravel dan PHP untuk mendukung proses pencatatan dan pemantauan data perpajakan.",
      "Merancang dan mengimplementasikan struktur basis data MySQL yang dinormalisasi untuk mengatur data terkait perpajakan dan mengurangi redundansi data.",
      "Mengintegrasikan API RESTful untuk mendukung komunikasi antar komponen aplikasi dan pertukaran data.",
      "Mengembangkan antarmuka interaktif menggunakan Bootstrap dan JavaScript untuk menampilkan informasi pemantauan perpajakan bagi pengguna internal."
    ],
    achievementsEn: [
      "Developed backend functionality using Laravel and PHP to support tax data recording and monitoring processes.",
      "Designed and implemented normalized MySQL database structures to organize tax-related data and reduce data redundancy.",
      "Integrated RESTful APIs to support communication between application components and data exchange.",
      "Developed interactive interfaces using Bootstrap and JavaScript to display tax monitoring information for internal users."
    ]
  },
  {
    id: "bangkit",
    role: "Cloud Computing Cohort",
    company: "Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka",
    type: "Google Bangkit Program",
    year: "Sep 2024 – Des 2024",
    active: false,
    image: bangkitDashboard,
    description: "Program intensif standar industri di bidang Cloud Computing & Machine Learning Deployment dengan Google Cloud Platform.",
    descriptionEn: "An industry-standard intensive program in Cloud Computing & Machine Learning Deployment using Google Cloud Platform.",
    tags: ["Google Cloud", "Compute Engine", "Cloud Storage", "IAM", "Express.js"],
    achievements: [
      "Telah menerapkan layanan API RESTful menggunakan Google Cloud Platform untuk mendukung komunikasi antara backend dan frontend.",
      "Berkontribusi sebagai Insinyur Cloud dalam Proyek Capstone dengan menerapkan model Pembelajaran Mesin sebagai API untuk integrasi aplikasi.",
      "Bekerja dengan layanan penerapan cloud agar model tersebut dapat diakses melalui komunikasi berbasis API.",
      "Telah menyelesaikan pelatihan terstruktur di bidang Komputasi Awan dan Pengembangan Backend melalui Bangkit Academy."
    ],
    achievementsEn: [
      "Deployed RESTful API services using Google Cloud Platform to support backend and frontend communication.",
      "Contributed as a Cloud Engineer in the Capstone Project by deploying a Machine Learning model as an API for application integration.",
      "Worked with cloud deployment services to make the model accessible through API-based communication.",
      "Completed structured training in Cloud Computing and Backend Development through Bangkit Academy."
    ]
  },
  
];

export const projects = [
  {
    id: "tax-monitoring",
    title: "Website Monitoring Data Pajak Daerah",
    titleEn: "Regional Tax Data Monitoring System",
    client: "PT. Raharja Sinergi Komunikasi",
    category: "Enterprise System",
    language: "PHP",
    languageColor: "#777bb4",
    link: "https://github.com/HanifMuthiarT/monitoring-dashboard",
    demo: "",
    images: [webMonitoring],
    shotFit: "cover",
    tags: ["Laravel", "MySQL", "Bootstrap", "REST API", "Reporting"],
    description: "Sistem dashboard monitoring pengolahan data pajak berbasis web terintegrasi untuk mempermudah analisis data berkala, rekapitulasi data pendapatan daerah, serta validasi berkas otomatis.",
    descriptionEn: "Integrated web-based tax monitoring dashboard system facilitating periodic data analytics, revenue reconciliation, and automated validation."
  },
  {
    id: "pos-umkm",
    title: "POS UMKM — Sistem Kasir & Retail Offline-First",
    titleEn: "POS UMKM — Offline-First Retail & Cashier System",
    client: "Client Retail Project",
    category: "Web Application",
    language: "JavaScript",
    languageColor: "#eab308",
    link: "https://github.com/HanifMuthiarT/umkm-pos",
    demo: "",
    images: [
      posUmkm1,
      posUmkm2,
      posUmkm3,
      posUmkm4,
      posUmkm5,
      posUmkm6,
      posUmkm7,
      posUmkm8,
      posUmkm9
    ],
    shotFit: "cover",
    tags: ["React.js", "Tailwind CSS", "IndexedDB", "Node.js", "Barcode Scanner"],
    description: "Sistem Point of Sales (POS) berbasis web responsif dengan arsitektur offline-first IndexedDB, manajemen stok dinamis, transaksi barcode multi-role, absensi karyawan, dan laporan laba-rugi otomatis.",
    descriptionEn: "Responsive web Point of Sales system designed for retail with offline-first IndexedDB synchronization, dynamic inventory management, barcode checkout, and automated P&L reporting."
  },
  {
    id: "heart-tracker",
    title: "Family Heart Tracker — Pemantauan Jantung Real-Time",
    titleEn: "Family Heart Tracker — Real-Time Health & Cloud System",
    client: "Bangkit Academy (Google, Tokopedia, Gojek, Traveloka)",
    category: "HealthTech & Cloud",
    language: "JavaScript",
    languageColor: "#eab308",
    link: "https://github.com/HanifMuthiarT/Family_health_Tracker",
    demo: "",
    images: [bangkitDashboard, bangkitHeart],
    shotFit: "cover",
    tags: ["Google Cloud", "Compute Engine", "Express.js", "REST API", "IoT Ready"],
    description: "Aplikasi web dan cloud yang memungkinkan pemantauan ritme detak jantung keluarga secara real-time, dilengkapi notifikasi ambang batas bahaya, visualisasi metrik, dan arsitektur cloud terdistribusi.",
    descriptionEn: "Web and cloud platform for real-time family heart rhythm telemetry with danger threshold alerts, analytical medical charts, and Google Cloud infrastructure."
  },
  {
    id: "mind-care",
    title: "MindCare — Deteksi Tingkat Stres Real-Time",
    titleEn: "MindCare — Real-Time AI Stress Detection App",
    client: "Research & Personal Project",
    category: "AI & Mobile App",
    language: "Dart",
    languageColor: "#00B4AB",
    link: "https://github.com/HanifMuthiarT/mind_care",
    demo: "",
    images: [mindCare1, mindCare2, mindCare3, mindCare4],
    shotFit: "contain",
    tags: ["Flutter", "Python", "TensorFlow", "MobileNetV2", "Random Forest"],
    description: "Aplikasi mobile Android cerdas untuk mendeteksi tingkat stres melalui ekspresi wajah secara real-time, mengombinasikan CNN MobileNetV2 dengan Random Forest dengan akurasi klasifikasi >92%.",
    descriptionEn: "Intelligent Android mobile application for real-time facial stress detection combining MobileNetV2 convolutional neural networks and Random Forest ensemble classification (>92% accuracy)."
  },
  {
    id: "perpus-digital",
    title: "Perpustakaan Digital — Sistem Manajemen Terpadu",
    titleEn: "Digital Library — Integrated Campus Management System",
    client: "Academic & Campus Project",
    category: "Web Application",
    language: "PHP",
    languageColor: "#777bb4",
    link: "https://github.com/HanifMuthiarT/Ruang-Pustaka---Aplikasi-ManajemenPerpustakaan-Digital",
    demo: "",
    images: [
      perpusLogin,
      perpusPetugasDash,
      perpusKoleksi,
      perpusAnggota,
      perpusPeminjaman,
      perpusLaporan,
      perpusUserDash,
      perpusJelajah,
      perpusProfile,
      perpusKartu
    ],
    shotFit: "cover",
    tags: ["Laravel", "MySQL", "Bootstrap", "Blade", "Digital Card"],
    description: "Sistem informasi manajemen perpustakaan modern multi-role (Petugas & Pengguna) untuk katalog buku online, sirkulasi peminjaman, perhitungan denda keterlambatan, dan pencetakan kartu anggota digital.",
    descriptionEn: "Multi-role library management web system featuring online catalog search, book borrowing circulation, automated fine calculations, and digital member card generation."
  }
];

export const awards = [
  {
    id: "lsp-software-development",
    title: "Sertifikat Kompetensi - Pemrogram Muda",
    subtitle: "LSP Universitas Langlangbuana • BNSP • 2026",
    issuer: "LSP Universitas Langlangbuana • BNSP",
    date: "31 Agustus 2026",
    credentialId: "62199 2513 0 0000985 2026",
    image: certLspPreview,
    imageFit: "contain",
    pdf: certLspPdf
  },
  {
    id: "bangkit-2024-completion",
    title: "[Bangkit 2024 Batch 2] Certificate of Completion",
    subtitle: "Bangkit Academy • Cloud Computing • 2025",
    issuer: "Bangkit Academy • Google, GoTo, Traveloka • MSIB",
    date: "10 Januari 2025",
    credentialId: "BA24/GRAD/XXIV-01/C249B4KY1710",
    image: certBangkitPreview,
    pdf: certBangkitPdf
  },
  {
    id: "gcp-engineer",
    title: "Menjadi Google Cloud Engineer",
    subtitle: "Dicoding Indonesia • 2024 – 2027",
    issuer: "Dicoding Indonesia & Google",
    date: "November 2024",
    credentialId: "L4PQ5YW14ZO1",
    topic: "Cloud Architecture, Compute Engine, VPC, & GCP Deployment",
    image: certGcpEngPreview,
    pdf: certGcpEngPdf
  },
  {
    id: "gcp-engineer",
    title: "Menjadi Google Cloud Engineer",
    subtitle: "Dicoding Indonesia • 2024 – 2027",
    issuer: "Dicoding Indonesia & Google",
    date: "November 2024",
    credentialId: "L4PQ5YW14ZO1",
    topic: "Cloud Architecture, Compute Engine, VPC, & GCP Deployment",
    image: certGcpEngPreview,
    pdf: certGcpEngPdf
  },
  {
    id: "gcp-ml",
    title: "Belajar Penerapan Machine Learning dengan Google Cloud",
    subtitle: "Dicoding Indonesia • 2024 – 2027",
    issuer: "Dicoding Indonesia & Google",
    date: "November 2024",
    credentialId: "QLZ9V011EX5D",
    topic: "Vertex AI, Model Training, & Cloud ML Pipelines",
    image: certGcpMlPreview,
    pdf: certGcpMlPdf
  },
  {
    id: "gcp-backend",
    title: "Belajar Membuat Aplikasi Back-End untuk Pemula dengan Google Cloud",
    subtitle: "Dicoding Indonesia • 2024 – 2027",
    issuer: "Dicoding Indonesia & Google",
    date: "Oktober 2024",
    credentialId: "81P244MLNZOY",
    topic: "RESTful API, Node.js Microservices on Cloud",
    image: certGcpBackendPreview,
    pdf: certGcpBackendPdf
  },
  {
    id: "js-basic",
    title: "Belajar Dasar Pemrograman JavaScript",
    subtitle: "Dicoding Indonesia • 2024 – 2027",
    issuer: "Dicoding Indonesia",
    date: "Oktober 2024",
    credentialId: "0LZ0461LNP65",
    topic: "ES6+, Asynchronous JS, OOP, Functional Programming",
    image: certJsPreview,
    pdf: certJsPdf
  },
  {
    id: "se-foundation",
    title: "Memulai Dasar Pemrograman untuk Menjadi Pengembang Software",
    subtitle: "Dicoding Indonesia • 2024 – 2027",
    issuer: "Dicoding Indonesia",
    date: "September 2024",
    credentialId: "MRZME1WRLPYQ",
    topic: "Software Engineering Foundations & Development Life Cycle",
    image: certSePreview,
    pdf: certSePdf
  },
  {
    id: "prog-logic",
    title: "Pengenalan ke Logika Pemrograman (Programming Logic 101)",
    subtitle: "Dicoding Indonesia • 2024 – 2027",
    issuer: "Dicoding Indonesia",
    date: "September 2024",
    credentialId: "MRZME1RD3PYQ",
    topic: "Algorithm, Flowcharts, Computational Thinking",
    image: certLogicPreview,
    pdf: certLogicPdf
  },
  {
    id: "ai-basic",
    title: "Belajar Dasar AI",
    subtitle: "Dicoding Indonesia • 2024 – 2027",
    issuer: "Dicoding Indonesia",
    date: "Oktober 2024",
    credentialId: "4EXG77JK1PRL",
    topic: "Artificial Intelligence, Neural Networks, & Machine Learning",
    image: certAiPreview,
    pdf: certAiPdf
  },
  {
    id: "git-basic",
    title: "Belajar Dasar Git dengan GitHub",
    subtitle: "Dicoding Indonesia • 2024 – 2027",
    issuer: "Dicoding Indonesia",
    date: "September 2024",
    credentialId: "NVP7QDVN4ZR0",
    topic: "Version Control, Branching, Pull Requests, & Git Workflows",
    image: certGitPreview,
    pdf: certGitPdf
  }
];

export const techStackCategories = [
  {
    id: "frontend",
    label: "Frontend",
    items: [
      {
        name: "React.js",
        description: "Modern component architecture, hooks, and single page applications",
        descriptionId: "Arsitektur komponen modern, hooks, dan aplikasi satu halaman",
        markClass: "react",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
      },
      {
        name: "Tailwind CSS",
        description: "Utility-first modern responsive styling framework",
        descriptionId: "Framework styling modern berbasis utility yang sangat responsif",
        markClass: "tailwind",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
      },
      {
        name: "JavaScript",
        description: "ES6+, asynchronous programming, and DOM manipulation",
        descriptionId: "ES6+, pemrograman asinkron, dan manipulasi antarmuka dinamis",
        markClass: "javascript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
      },
      {
        name: "HTML5 & CSS3",
        description: "Semantic layouts, accessibility, and modern responsive styling",
        descriptionId: "Tata letak semantik, aksesibilitas, dan standar web modern",
        markClass: "html",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
      },
      {
        name: "Bootstrap",
        description: "Responsive grid layouts and rapid component prototyping",
        descriptionId: "Tata letak grid responsif dan pembuatan prototipe cepat",
        markClass: "bootstrap",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
      }
    ]
  },
  {
    id: "backend",
    label: "Backend & Database",
    items: [
      {
        name: "Laravel",
        description: "Eloquent ORM, robust routing, middleware, and secure REST APIs",
        descriptionId: "Eloquent ORM, routing tangguh, middleware, dan REST API terstruktur",
        markClass: "laravel",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg"
      },
      {
        name: "PHP",
        description: "Object-oriented backend services and MVC application design",
        descriptionId: "Layanan backend berorientasi objek dan arsitektur aplikasi MVC",
        markClass: "php",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
      },
      {
        name: "Node.js",
        description: "Scalable backend microservices and event-driven REST APIs",
        descriptionId: "Backend microservices skalabel dan REST API dengan event loop",
        markClass: "node",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
      },
      {
        name: "MySQL",
        description: "Relational database schema design, indexing, and high-performance queries",
        descriptionId: "Desain skema relasional, indexing, dan optimasi query berkinerja tinggi",
        markClass: "mysql",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
      },
      {
        name: "REST API",
        description: "Stateless JSON endpoints, JWT authentication, and external integrations",
        descriptionId: "Endpoint JSON stateless, autentikasi JWT, dan integrasi eksternal",
        markClass: "api",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg"
      }
    ]
  },
  {
    id: "mobile-ai",
    label: "Mobile & AI",
    items: [
      {
        name: "Flutter",
        description: "Cross-platform high performance mobile apps for Android & iOS",
        descriptionId: "Pengembangan aplikasi mobile lintas platform untuk Android & iOS",
        markClass: "flutter",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"
      },
      {
        name: "Dart",
        description: "Strongly typed client-optimized language for Flutter mobile development",
        descriptionId: "Bahasa pemrograman teroptimasi untuk ekosistem Flutter mobile",
        markClass: "dart",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg"
      },
      {
        name: "Python",
        description: "Data analysis, machine learning pipelines, and scripting automation",
        descriptionId: "Analisis data, pipeline machine learning, dan otomasi skrip",
        markClass: "python",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
      },
      {
        name: "TensorFlow",
        description: "CNN model training, MobileNetV2 feature extraction, and classification",
        descriptionId: "Pelatihan model CNN, ekstraksi fitur MobileNetV2, dan klasifikasi AI",
        markClass: "tensorflow",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg"
      }
    ]
  },
  {
    id: "cloud-tools",
    label: "Cloud & Dev Tools",
    items: [
      {
        name: "Google Cloud",
        description: "Compute Engine, Cloud Storage, IAM, and serverless deployment",
        descriptionId: "Compute Engine, Cloud Storage, IAM, dan deployment serverless",
        markClass: "gcp",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg"
      },
      {
        name: "Git & GitHub",
        description: "Branching strategies, CI/CD actions, pull requests, and code review",
        descriptionId: "Strategi branching, GitHub Actions, pull request, dan reviu kode",
        markClass: "git",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
      },
      {
        name: "VS Code",
        description: "Daily development, debugging, linting, and integrated terminal workflows",
        descriptionId: "Editor harian untuk debugging, linting, dan alur kerja terintegrasi",
        markClass: "vscode",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
      },
      {
        name: "Postman",
        description: "API design, automated endpoint validation, and test suite collections",
        descriptionId: "Desain API, validasi endpoint otomatis, dan koleksi pengujian",
        markClass: "postman",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg"
      },
      {
        name: "Figma",
        description: "UI/UX design examination, wireframing, and component design tokens",
        descriptionId: "Pemeriksaan desain UI/UX, wireframing, dan token sistem desain",
        markClass: "figma",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
      }
    ]
  }
];

export const accentColors = [
  { id: "default", name: "Default", hex: "#111111" },
  { id: "ocean", name: "Ocean", hex: "#2563eb" },
  { id: "emerald", name: "Emerald", hex: "#059669" },
  { id: "violet", name: "Violet", hex: "#7c3aed" },
  { id: "orange", name: "Orange", hex: "#ea580c" },
  { id: "rose", name: "Rose", hex: "#e11d48" }
];

export const emeraldTechStack = [
  {
    category: "BACKEND",
    skills: [
      { name: "Laravel", abbr: "Lv", icon: "laravel" },
      { name: "Node.js", abbr: "Nj", icon: "nodejs" },
      { name: "Python", abbr: "Py", icon: "python" },
      { name: "Go", abbr: "Go", icon: "go" }
    ]
  },
  {
    category: "FRONTEND AND MOBILE",
    skills: [
      { name: "React.js", abbr: "Re", icon: "react" },
      { name: "TypeScript", abbr: "TS", icon: "typescript" },
      { name: "Flutter", abbr: "Fl", icon: "flutter" }
    ]
  },
  {
    category: "DATABASE",
    skills: [
      { name: "MySQL", abbr: "My", icon: "mysql" },
      { name: "PostgreSQL", abbr: "Pg", icon: "postgresql" }
    ]
  },
  {
    category: "CLOUD AND TOOLS",
    skills: [
      { name: "Google Cloud", abbr: "GC", icon: "gcp" },
      { name: "Docker", abbr: "Dk", icon: "docker" },
      { name: "Git", abbr: "Gt", icon: "git" }
    ]
  }
];

