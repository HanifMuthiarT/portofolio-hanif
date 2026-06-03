// src/data/portofolioHanif.js

export const portofolioHanif = {
  profile: {
    name: "Hanif Muthiar Tsani",
    headline: "Software Developer | S1 Teknik Informatika Graduate",
    bio: "Software Developer dengan fokus pada pengembangan aplikasi Web dan Mobile.Berpengalaman dalam membangun aplikasi menggunakan Laravel, Flutter, serta integrasi REST API, serta terbiasa bekerja dengan database MySQL. Memiliki kemampuan dalam problem solving, analisis sistem, dan pengembangan aplikasi dari backend maupun frontend.",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Hanif",
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
    },
    {
      role: "Technical Support / Intern",
      company: "PT. Marktel",
      date: "Juni 2021 - Januari 2022",
      tasks: [
        "Berkontribusi dalam pembuatan dan konfigurasi terminal server",
        "Menghubungkan perangkat ke jaringan LAN untuk mendukung operasional"
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
        link: "https://github.com/username/project-pajak",
        image: new URL('../assets/Web-Monitoring.jpg', import.meta.url).href
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
          new URL('../assets/POS-UMKM-3.png', import.meta.url).href
        ]
      }
    ],
    personal: [
      {
        title: "MindCare — Aplikasi Deteksi Tingkat Stres",
        desc: "Aplikasi mobile berbasis Android untuk memprediksi tingkat stres melalui ekspresi wajah secara real-time menggunakan kombinasi algoritma Convolutional Neural Network (MobileNetV2) dan Random Forest.",
        tech: ["Flutter", "Python", "TensorFlow", "Dart"],
        link: "https://github.com/username/mindcare-app",
        image: [
          new URL('../assets/Mind-Care.jpg', import.meta.url).href,
          new URL('../assets/Mind-Care-2.jpg', import.meta.url).href,
          new URL('../assets/Mind-Care-3.jpg', import.meta.url).href
        ]
      },
      {
        title: "Parking System",
        clientName: "Universitas Langlangbuana", // Silakan isi nama client jika ada
        desc: "Membangun sistem manajemen parkir berbasis web untuk Universitas Langlangbuana, yang mencakup fitur reservasi tempat parkir, pelacakan kendaraan untuk meningkatkan efisiensi operasional parkir kampus.",
        tech: ["CodeIgniter3", "MySQL", "Bootstrap"], // Sesuaikan dengan tech stack asli Anda
        link: "https://github.com/username/project-ticketing",
        image: new URL('../assets/Web-Monitoring.jpg', import.meta.url).href
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