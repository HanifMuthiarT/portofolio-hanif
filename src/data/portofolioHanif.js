// src/data/portofolioHanif.js
import hanifAvatar from '../assets/hanif.jpg';

export const portofolioHanif = {
  profile: {
    name: "Hanif Muthiar Tsani",
    headline: "Software Developer | S1 Teknik Informatika Graduate",
    bio: "Software Developer dengan fokus pada pengembangan aplikasi Web dan Mobile.Berpengalaman dalam membangun aplikasi menggunakan Laravel, Flutter, serta integrasi REST API, serta terbiasa bekerja dengan database MySQL. Memiliki kemampuan dalam problem solving, analisis sistem, dan pengembangan aplikasi dari backend maupun frontend.",
    avatar: hanifAvatar,
    location: "Bandung, Jawa Barat, 40921",
    email: "hanifmuthiartsani791@gmail.com",
    phone: "+6283874227036",
    linkedin: "linkedin.com/in/hanif-muthiar-tsani-843629285"
  },
  skills: {
    languages: "PHP, JavaScript, Python, Dart, Bahasa Indonesia, Bahasa Inggris",
    frameworks: "Laravel, CodeIgniter 3, Flutter",
    frontend: "Bootstrap, Tailwind CSS",
    backend: "REST API Development, API Integration, MySQL, Google Cloud Platform (GCP)"
  },
  education: [
    {
      instance: "Universitas Langlangbuana",
      degree: "S1 Teknik Informatika",
      period: "2022 - 2026",
      details: "IPK / Cumulative GPA: 3.53 / 4.00"
    },
    {
      instance: "SMK Negeri 1 Katapang",
      degree: "Teknik Mekatronika",
      period: "2018 - 2022",
      details: "Nilai Rata-Rata: 81.78 / 100"
    }
  ],
  experiences: [
    {
      role: "Web Developer",
      company: "PT. Raharja Sinergi Komunikasi",
      date: "April 2025 - Agustus 2025",
      tasks: [
        "Mengembangkan website monitoring data pajak berbasis web (backend & frontend)",
        "Membangun dan mengelola fitur sistem untuk pengolahan data",
        "Mengintegrasikan database MySQL ke dalam sistem aplikasi"
      ]
    },
    {
      role: "Cloud Computing Cohort",
      company: "Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka",
      date: "September 2024 - Desember 2024",
      tasks: [
        "Mengikuti program pembelajaran intensif di bidang Cloud Computing",
        "Mengembangkan dan mendeploy aplikasi berbasis API (backend & frontend)",
        "Menggunakan layanan Google Cloud Platform (GCP) dalam pengembangan aplikasi"
      ]
    }
  ],
  // BAGIAN PROJECT DIPIHA (CLIENT & PERSONAL)
  projects: {
    Instansi: [
      {
        title: "Website Monitoring Data Pajak Daerah",
        clientName: "PT. Raharja Sinergi Komunikasi",
        desc: "Membangun sistem dashboard monitoring pengolahan data pajak berbasis web terintegrasi untuk mempermudah analisis data berkala.",
        tech: ["Laravel", "MySQL", "Bootstrap", "REST API"],
        link: "https://github.com/HanifMuthiarT/monitoring-dashboard",
        image: new URL('../assets/Web-Monitoring.jpg', import.meta.url).href
      },
      {
        title: "Family Heart Tracker — Aplikasi Pemantauan Kesehatan Jantung Keluarga",
        clientName: "Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka ( Cloud Computing Cohort )",
        desc: "Aplikasi berbasis web yang memungkinkan pengguna untuk memantau kesehatan jantung keluarga secara real-time, dengan fitur analisis data dan notifikasi kesehatan.",
        tech: ["JavaScript", "REST API"],
        link: "https://github.com/HanifMuthiarT/Family_health_Tracker",
        image: [
          new URL('../assets/bangkit/dashboard.png', import.meta.url).href,
          new URL('../assets/bangkit/heart.png', import.meta.url).href
        ]
      }
    ],
    
    client: [
      {
        title: "POS UMKM — Sistem Manajemen Retail Offline-First",
        desc: "Sistem Point of Sales (POS) berbasis web yang dirancang khusus untuk UMKM dengan pendekatan offline-first, dilengkapi fitur manajemen inventori stok, pencatatan transaksi kasir multi-role, absensi karyawan, hingga pelaporan keuangan.",
        tech: ["React.js", "Tailwind CSS", "IndexedDB", "Node.js"], // Disesuaikan dari tampilan web modern/Lovable App Anda
        link: "https://github.com/username/pos-umkm",
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
        title: "MindCare — Aplikasi Deteksi Tingkat Stres",
        desc: "Aplikasi mobile berbasis Android untuk memprediksi tingkat stres melalui ekspresi wajah secara real-time menggunakan kombinasi algoritma Convolutional Neural Network (MobileNetV2) dan Random Forest.",
        tech: ["Flutter", "Python", "TensorFlow", "Dart"],
        link: "https://github.com/HanifMuthiarT/mind_care",
        image: [
          new URL('../assets/Mind-Care.jpg', import.meta.url).href,
          new URL('../assets/Mind-Care-2.jpg', import.meta.url).href,
          new URL('../assets/Mind-Care-3.jpg', import.meta.url).href,
          new URL('../assets/Mind-Care-4.jpg', import.meta.url).href,
        ]
      },
      {
        title: "Perpustakaan Digital",
        desc: "Membangun sistem manajemen perpustakaan digital berbasis web untuk memudahkan akses dan pengelolaan koleksi buku serta layanan lainnya.",
        tech: ["Laravel", "MySQL", "Bootstrap"], // Sesuaikan dengan tech stack asli Anda
        link: "https://github.com/username/project-ticketing",
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
  // BAGIAN SERTIFIKAT
  certificates: [
    { title: "Menjadi Google Cloud Engineer", 
      provider: "Dicoding Indonesia",
      date: "2027" },
    { title: "Memulai Dasar Pemrograman untuk Menjadi Pengembang Software", 
      provider: "Dicoding Indonesia",
      date: "2027" },
    { title: "Belajar Dasar Pemrograman JavaScript", 
      provider: "Dicoding Indonesia",
      date: "2027" },
    { title: "Pengenalan ke Logika Pemrograman (Programming Logic 101)", 
      provider: "Dicoding Indonesia",
      date: "2027" },
    { title: "Belajar Membuat Aplikasi Back-End untuk Pemula dengan Google Cloud", 
      provider: "Dicoding Indonesia",
      date: "2027" },
    { title: "Belajar Dasar AI", 
      provider: "Dicoding Indonesia",
      date: "2027" },
    { title: "Belajar Penerapan Machine Learning dengan Google Cloud", 
      provider: "Dicoding Indonesia",
      date: "2027" },
  ],
  softSkills: ["Problem Solving", "Communication", "Teamwork", "Adaptability"]
};