// src/App.jsx
import { useState, useEffect, useRef } from 'react';
import { portofolioHanif } from './data/portofolioHanif';

// Komponen Pembungkus Animasi Scroll (Fade In Up)
function FadeInUpSection({ children, className = "", id }) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); 
        }
      });
    }, {
      rootMargin: '0px 0px -100px 0px' 
    });

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div
      id={id}
      ref={domRef}
      className={`transform transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      } ${className}`}
    >
      {children}
    </div>
  );
}

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const [formData, setFormData] = useState({ nama: '', email: '', pesan: '' });
  
  // State manajemen modal gambar proyek dengan sistem transisi smooth
  const [isImageModalMounted, setIsImageModalMounted] = useState(false); // Mengontrol keberadaan DOM
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);       // Mengontrol animasi visual (pop-in/out)
  const [selectedImages, setSelectedImages] = useState([]);              // Menyimpan array gambar
  const [currentImageIndex, setCurrentImageIndex] = useState(0);         // Indeks gambar yang aktif
  const [selectedProjectLink, setSelectedProjectLink] = useState(null);
  const [selectedProjectTitle, setSelectedProjectTitle] = useState('');
  const imageModalCloseTimeout = useRef(null);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = (e) => {
    e.stopPropagation();
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`🎉 Terima kasih ${formData.nama}!\nPesan Anda telah terkirim.`);
    setFormData({ nama: '', email: '', pesan: '' });
    setIsModalOpen(false);
  };

  const scrollToSection = (id) => {
    setIsMenuOpen(false); 
    const element = document.getElementById(id);
    if (element) {
      const offset = 70; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Fungsi untuk membuka modal gambar (Mendukung String tunggal maupun Array)
  const openImageModal = (e, imageSrc, title, link) => {
    if (e && e.stopPropagation) e.stopPropagation();
    if (imageModalCloseTimeout.current) {
      clearTimeout(imageModalCloseTimeout.current);
      imageModalCloseTimeout.current = null;
    }

    // Normalisasi data: jika input berupa string tunggal, bungkus menjadi array
    if (Array.isArray(imageSrc)) {
      setSelectedImages(imageSrc);
    } else if (typeof imageSrc === 'string' && imageSrc !== '') {
      setSelectedImages([imageSrc]);
    } else {
      setSelectedImages([]);
    }
    
    setCurrentImageIndex(0); // Reset ke gambar pertama
    setSelectedProjectTitle(title || '');
    setSelectedProjectLink(link || null);
    
    setIsImageModalMounted(true);
    setTimeout(() => {
      setIsImageModalOpen(true);
    }, 50);
  };

  // Fungsi penutup modal gambar
  const closeImageModal = () => {
    setIsImageModalOpen(false); 
    
    imageModalCloseTimeout.current = setTimeout(() => {
      setIsImageModalMounted(false);
      setSelectedImages([]);
      setCurrentImageIndex(0);
      setSelectedProjectLink(null);
      setSelectedProjectTitle('');
      imageModalCloseTimeout.current = null;
    }, 300);
  };

  // Fungsi Navigasi Gambar Galeri
  const nextImage = (e) => {
    if (e) e.stopPropagation();
    if (selectedImages.length > 1) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedImages.length);
    }
  };

  const prevImage = (e) => {
    if (e) e.stopPropagation();
    if (selectedImages.length > 1) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedImages.length) % selectedImages.length);
    }
  };

  // Handler keyboard (Esc untuk keluar, Panah Kiri/Kanan untuk ganti gambar)
  useEffect(() => {
    if (!isImageModalMounted) return;
    const handleKeyDown = (ev) => {
      if (ev.key === 'Escape') closeImageModal();
      if (ev.key === 'ArrowRight') nextImage();
      if (ev.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isImageModalMounted, selectedImages]);

  return (
    <div className={`w-full min-h-screen font-sans antialiased transition-colors duration-300 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
      
      {/* 1. RESPONSIVE NAVBAR */}
      <header className={`sticky top-0 left-0 right-0 z-50 px-6 sm:px-16 py-3.5 border-b transition-colors duration-300 ${theme === 'dark' ? 'bg-black border-zinc-800 text-white' : 'bg-white border-gray-200 text-black'}`}>
        <div className="max-w-6xl mx-auto flex items-center justify-between relative">
          
          <div 
            onClick={() => scrollToSection('tentang')} 
            className="cursor-pointer font-black text-xl tracking-tight flex items-center gap-2 z-50"
          >
            <span>HMT</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {[
              { id: 'tentang', label: 'About Me' },
              { id: 'skills', label: 'Skills' },
              { id: 'pengalaman', label: 'Experience' },
              { id: 'projects', label: 'Project' },
              { id: 'kontak', label: 'Contact' }
            ].map((item) => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)} 
                className={`text-base font-medium transition-colors duration-200 cursor-pointer ${theme === 'dark' ? 'text-zinc-400 hover:text-white' : 'text-gray-500 hover:text-black'}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3 sm:gap-4 z-50 relative">
            <button 
              onClick={toggleTheme}
              className={`px-4 py-2 rounded-md border text-sm font-bold transition-all duration-150 cursor-pointer select-none active:scale-95 ${
                theme === 'dark' 
                  ? 'bg-black text-white border-zinc-700 hover:bg-white hover:text-black hover:border-white active:bg-zinc-900' 
                  : 'bg-white text-black border-gray-300 hover:bg-black hover:text-white hover:border-black active:bg-gray-100'
              }`}
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="block md:hidden p-2 focus:outline-none cursor-pointer active:opacity-60"
              aria-label="Toggle Menu"
            >
              <div className={`w-6 h-0.5 bg-current mb-1.5 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-current mb-1.5 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-current transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        <div className={`md:hidden fixed inset-x-0 top-[65px] p-6 border-b shadow-xl flex flex-col gap-5 transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto z-40' : 'opacity-0 -translate-y-4 pointer-events-none -z-50'
        } ${theme === 'dark' ? 'bg-zinc-950 border-zinc-800' : 'bg-gray-50 border-gray-200'}`}>
          {[
            { id: 'tentang', label: 'About Me' },
            { id: 'skills', label: 'Skills' },
            { id: 'pengalaman', label: 'Experience' },
            { id: 'projects', label: 'Project' },
            { id: 'kontak', label: 'Contact Me' }
          ].map((item) => (
            <button 
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-left text-lg font-bold py-2.5 px-4 rounded-md transition-colors ${
                theme === 'dark' 
                  ? 'text-zinc-300 hover:bg-zinc-900 hover:text-white active:bg-zinc-900' 
                  : 'text-gray-600 hover:bg-gray-200 hover:text-black active:bg-gray-200'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </header>

      {/* MAIN CONTAINER LAYOUT */}
      <main className="w-full">
        
        {/* 2. HERO SECTION */}
        <section id="tentang" className="max-w-6xl mx-auto px-6 sm:px-16 flex flex-col md:grid md:grid-cols-12 gap-8 items-center justify-center min-h-[calc(100vh-70px)] py-8 scroll-mt-20">
          <div className="md:col-span-7 space-y-6 order-2 md:order-1 w-full">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight leading-tight">
              Hello I'm <span className="font-black">Hanif Muthiar Tsani</span>.<br />
              <span className="relative inline-block mt-2 font-black text-3xl sm:text-4xl lg:text-5xl">
                Fullstack <span className="underline decoration-teal-500 decoration-4 underline-offset-8">Developer</span>.
              </span>
            </h1>
            
            <p className={`text-base sm:text-lg leading-relaxed font-normal pt-2 text-justify ${theme === 'dark' ? 'text-zinc-300' : 'text-gray-700'}`}>
              Software Developer dengan fokus pada pengembangan aplikasi Web dan Mobile. Berpengalaman dalam membangun aplikasi menggunakan Laravel, Flutter, serta integrasi REST API, serta terbiasa bekerja dengan database MySQL. Memiliki kemampuan dalam problem solving, analisis sistem, dan pengembangan aplikasi dari backend maupun frontend.
            </p>
            
            <div className="flex flex-wrap gap-2.5 pt-3">
              {portofolioHanif.profile.tags && portofolioHanif.profile.tags.map((tag, idx) => (
                <span key={idx} className={`border px-4 py-1.5 rounded-sm text-sm font-semibold transition-colors duration-300 ${theme === 'dark' ? 'border-zinc-800 text-zinc-300 hover:bg-teal-500 hover:text-black hover:border-teal-500' : 'border-gray-300 text-gray-700 hover:bg-teal-600 hover:text-white hover:border-teal-600'}`}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="md:col-span-5 flex justify-center md:justify-end order-1 md:order-2 w-full">
            <div className={`w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 border-4 overflow-hidden relative group transition-all duration-300 ${theme === 'dark' ? 'border-teal-500 shadow-[8px_8px_0px_0px_rgba(20,184,166,0.25)]' : 'border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'}`}>
              <img 
                src={portofolioHanif.profile.avatar} 
                alt="Hanif Avatar" 
                className="w-full h-full object-cover filter grayscale contrast-120 group-hover:grayscale-0 transition-all duration-500" 
              />
            </div>
          </div>
        </section>

        {/* 3. MY SKILLS SECTION */}
        <FadeInUpSection id="skills" className={`max-w-6xl mx-auto px-6 sm:px-16 py-20 border-t scroll-mt-24 ${theme === 'dark' ? 'border-zinc-800' : 'border-gray-200'}`}>
          <div className="text-center mb-12 space-y-2">
            <h2 className="text-3xl font-light">My <span className="font-black">Skills</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { 
                name: 'Full-Stack Developer', 
                tech: 'Memiliki kapabilitas dalam membangun aplikasi utuh, mulai dari merancang antarmuka pengguna (Front-End) yang interaktif hingga mengelola logika server (Back-End) serta aplikasi mobile lintas platform.', 
                subTech: 'PHP, Laravel, CodeIgniter 3, MySQL, JavaScript, React.js, Tailwind CSS, Bootstrap, Flutter, Dart, Python, REST API',
                isTechnical: true,
                icon: (
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                )
              },
              { 
                name: 'Problem Solving', 
                tech: 'Analitis dan tenang dalam melacak sumber error (debugging), mampu membedah masalah kompleks pada baris kode, serta merumuskan perbaikan yang efektif agar sistem kembali berjalan optimal.', 
                isTechnical: false,
                icon: (
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                )
              },
              { 
                name: 'Teamwork', 
                tech: 'Dapat berkolaborasi secara solid di dalam tim, menghargai ragam pendapat, dan berkontribusi aktif menggunakan versi kontrol (Git) demi mencapai target penyelesaian aplikasi secara tepat waktu.', 
                isTechnical: false,
                icon: (
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                )
              },
              { 
                name: 'Communication', 
                tech: 'Mampu menyampaikan ide teknis secara jelas, berdiskusi aktif dalam merumuskan kebutuhan proyek bersama klien atau tim, serta menyusun dokumentasi sistem yang mudah dipahami.', 
                isTechnical: false,
                icon: (
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                )
              }
            ].map((skill, index) => (
              <div 
                key={index} 
                className={`p-8 border rounded-2xl flex flex-col items-start justify-start text-left transition-all duration-300 ${
                  theme === 'dark' 
                    ? 'bg-zinc-900/50 text-white border-zinc-800/80 hover:border-zinc-700' 
                    : 'bg-gray-50 text-black border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm">
                  {skill.icon}
                </div>
                
                <h3 className="font-bold text-xl mb-2 tracking-tight">{skill.name}</h3>
                <p className={`text-sm leading-relaxed ${skill.isTechnical ? 'mb-6' : ''} ${theme === 'dark' ? 'text-zinc-400' : 'text-gray-600'}`}>{skill.tech}</p>
                
                {skill.isTechnical && skill.subTech && (
                  <div className="mt-auto pt-4 border-t w-full border-zinc-800/60 dark:border-zinc-800/30">
                    <p className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase mb-2">Tech Stack:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {skill.subTech.split(', ').map((techName, i) => (
                        <span 
                          key={i} 
                          className={`text-xs px-2 py-0.5 font-medium rounded-md ${
                            theme === 'dark' 
                              ? 'bg-zinc-800/60 text-zinc-300 border border-zinc-700/50' 
                              : 'bg-zinc-200/50 text-zinc-800 border border-zinc-300/60'
                          }`}
                        >
                          {techName}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </FadeInUpSection>

        {/* 4. EXPERIENCE SECTION */}
        <FadeInUpSection id="pengalaman" className={`max-w-6xl mx-auto px-6 sm:px-16 py-20 border-t scroll-mt-24 ${theme === 'dark' ? 'border-zinc-800' : 'border-gray-200'}`}>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-light">My <span className="font-black">Experience</span></h2>
            </div>

            <div className="space-y-6">
              {portofolioHanif.experiences && portofolioHanif.experiences.map((exp, idx) => (
                <div 
                  key={idx} 
                  className={`p-6 sm:p-8 border rounded-lg transition-all duration-300 ${
                    theme === 'dark'
                      ? 'bg-black border-zinc-800 text-white hover:border-zinc-500'
                      : 'bg-white border-gray-200 text-black hover:border-gray-400'
                  }`}
                >
                  <div className={`flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b pb-4 mb-4 ${theme === 'dark' ? 'border-zinc-800' : 'border-gray-100'}`}>
                    <div>
                      <h3 className="font-black text-xl">{exp.role}</h3>
                      <p className={`text-base font-bold ${theme === 'dark' ? 'text-teal-400' : 'text-teal-600'}`}>{exp.company}</p>
                    </div>
                    <span className={`text-xs font-mono px-3 py-1 rounded-sm border ${theme === 'dark' ? 'text-zinc-400 border-zinc-800 bg-zinc-950' : 'text-gray-500 border-gray-200 bg-gray-50'}`}>{exp.date}</span>
                  </div>
                  <ul className="text-sm sm:text-base space-y-3 pl-1">
                    {exp.tasks && exp.tasks.map((task, tIdx) => (
                      <li key={tIdx} className="leading-relaxed flex items-start gap-2">
                        <span className={`text-base leading-none ${theme === 'dark' ? 'text-teal-400' : 'text-teal-600'}`}>▪</span>
                        <span className={theme === 'dark' ? 'text-zinc-300' : 'text-gray-600'}>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </FadeInUpSection>

        {/* 5. PORTFOLIO PROJECTS */}
        <FadeInUpSection id="projects" className={`max-w-6xl mx-auto px-6 sm:px-16 py-20 border-t scroll-mt-24 ${theme === 'dark' ? 'border-zinc-800' : 'border-gray-200'}`}>
          <div className="max-w-5xl mx-auto space-y-12">
            
            <div className="text-center">
              <h2 className="text-3xl font-light">Featured <span className="font-black">Projects</span></h2>
            </div>

            {/* Instansi Projects */}
            {portofolioHanif.projects?.Instansi && (
              <div className="space-y-4">
                <p className={`text-xs font-bold uppercase tracking-widest border-l-4 pl-2 ${theme === 'dark' ? 'border-indigo-500 text-indigo-400' : 'border-indigo-600 text-indigo-600'}`}>01 / Government & Institutional Projects</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {portofolioHanif.projects.Instansi.map((proj, i) => (
                    <div 
                      key={i} 
                      className={`border p-6 rounded-lg flex flex-col justify-between transition-all duration-300 relative group ${
                        theme === 'dark'
                          ? 'bg-black border-zinc-800 text-white hover:border-indigo-500 hover:shadow-[4px_4px_0px_0px_rgba(99,102,241,0.15)]'
                          : 'bg-white border-gray-200 text-black hover:border-indigo-600 hover:shadow-[4px_4px_0px_0px_rgba(79,70,229,1)]'
                      }`}
                    >
                      <div className="space-y-3">
                        <div className="flex justify-between items-start gap-4">
                          <h4 className="font-black text-lg leading-tight group-hover:text-indigo-500 transition-colors">{proj.title}</h4>
                          <span className={`text-[10px] font-black tracking-wider uppercase px-2 py-0.5 rounded-sm border whitespace-nowrap ${
                            theme === 'dark' ? 'bg-indigo-950/50 border-indigo-800 text-indigo-400' : 'bg-indigo-50 border-indigo-200 text-indigo-700'
                          }`}>
                            Instansi
                          </span>
                        </div>
                        <p className={`text-xs font-bold ${theme === 'dark' ? 'text-zinc-500' : 'text-gray-400'}`}>Mitra: {proj.clientName}</p>
                        <p className={`text-sm sm:text-base font-normal leading-relaxed pt-1 ${theme === 'dark' ? 'text-zinc-300' : 'text-gray-600'}`}>{proj.desc}</p>
                      </div>

                      <div className="mt-6 pt-3 border-t flex items-center justify-between gap-4 border-gray-100 dark:border-zinc-800">
                        <div className="flex flex-wrap gap-2">
                          {proj.tech.map((t, ti) => (
                            <span key={ti} className={`text-xs font-mono px-2 py-0.5 rounded border ${theme === 'dark' ? 'text-indigo-300 border-indigo-900/50 bg-indigo-950/20' : 'text-indigo-700 border-indigo-100 bg-indigo-50/50'}`}>{t}</span>
                          ))}
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <button
                            onClick={(e) => openImageModal(e, proj.image, proj.title, proj.link)}
                            className={`project-view-button px-3 py-1.5 border text-xs font-black uppercase tracking-wider rounded transition-all duration-150 ease-out active:scale-95 ${theme === 'dark' ? 'bg-zinc-900 border-zinc-700 text-indigo-400 hover:bg-indigo-500 hover:text-black' : 'bg-gray-50 border-gray-300 text-indigo-700 hover:bg-indigo-600 hover:text-white'}`}
                            aria-label="Open project image"
                          >
                            View
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Client Projects */}
            {portofolioHanif.projects?.client && (
              <div className="space-y-4 pt-4">
                <p className={`text-xs font-bold uppercase tracking-widest border-l-4 pl-2 ${theme === 'dark' ? 'border-teal-500 text-teal-400' : 'border-teal-600 text-teal-600'}`}>02 / Client Projects</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {portofolioHanif.projects.client.map((proj, i) => (
                    <div 
                      key={i} 
                      className={`border p-6 rounded-lg flex flex-col justify-between transition-all duration-300 relative group ${
                        theme === 'dark'
                          ? 'bg-black border-zinc-800 text-white hover:border-teal-500 hover:shadow-[4px_4px_0px_0px_rgba(20,184,166,0.15)]'
                          : 'bg-white border-gray-200 text-black hover:border-teal-600 hover:shadow-[4px_4px_0px_0px_rgba(13,148,136,1)]'
                      }`}
                    >
                      <div className="space-y-3">
                        <div className="flex justify-between items-start gap-4">
                          <h4 className="font-black text-lg leading-tight group-hover:text-teal-500 transition-colors">{proj.title}</h4>
                          <span className={`text-[10px] font-black tracking-wider uppercase px-2 py-0.5 rounded-sm border whitespace-nowrap ${
                            theme === 'dark' ? 'bg-teal-950/50 border-teal-800 text-teal-400' : 'bg-teal-50 border-teal-200 text-teal-700'
                          }`}>
                            Client
                          </span>
                        </div>
                        <p className={`text-xs font-bold ${theme === 'dark' ? 'text-zinc-500' : 'text-gray-400'}`}>Client: {proj.clientName}</p>
                        <p className={`text-sm sm:text-base font-normal leading-relaxed pt-1 ${theme === 'dark' ? 'text-zinc-300' : 'text-gray-600'}`}>{proj.desc}</p>
                      </div>

                      <div className="mt-6 pt-3 border-t flex items-center justify-between gap-4 border-gray-100 dark:border-zinc-800">
                        <div className="flex flex-wrap gap-2">
                          {proj.tech.map((t, ti) => (
                            <span key={ti} className={`text-xs font-mono px-2 py-0.5 rounded border ${theme === 'dark' ? 'text-teal-300 border-teal-900/50 bg-teal-950/20' : 'text-teal-700 border-teal-100 bg-teal-50/50'}`}>{t}</span>
                          ))}
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <button
                            onClick={(e) => openImageModal(e, proj.image, proj.title, proj.link)}
                            className={`project-view-button px-3 py-1.5 border text-xs font-black uppercase tracking-wider rounded transition-all duration-150 ease-out active:scale-95 ${theme === 'dark' ? 'bg-zinc-900 border-zinc-700 text-teal-400 hover:bg-teal-500 hover:text-black' : 'bg-gray-50 border-gray-300 text-teal-700 hover:bg-teal-600 hover:text-white'}`}
                            aria-label="Open project image"
                          >
                            View
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Personal & Thesis Projects */}
            {portofolioHanif.projects?.personal && (
              <div className="space-y-4 pt-4">
                <p className={`text-xs font-bold uppercase tracking-widest border-l-4 pl-2 ${theme === 'dark' ? 'border-amber-500 text-amber-400' : 'border-amber-600 text-amber-600'}`}>03 / Research & Personal Projects</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {portofolioHanif.projects.personal.map((proj, i) => (
                    <div 
                      key={i} 
                      className={`border p-6 rounded-lg flex flex-col justify-between transition-all duration-300 relative group ${
                        theme === 'dark'
                          ? 'bg-black border-zinc-800 text-white hover:border-amber-500 hover:shadow-[4px_4px_0px_0px_rgba(245,158,11,0.15)]'
                          : 'bg-white border-gray-200 text-black hover:border-amber-600 hover:shadow-[4px_4px_0px_0px_rgba(217,119,6,1)]'
                      }`}
                    >
                      <div className="space-y-3">
                        <div className="flex justify-between items-start gap-4">
                          <h4 className="font-black text-lg leading-tight group-hover:text-amber-500 transition-colors">{proj.title}</h4>
                          <span className={`text-[10px] font-black tracking-wider uppercase px-2 py-0.5 rounded-sm border whitespace-nowrap ${
                            theme === 'dark' ? 'bg-amber-950/50 border-amber-800 text-amber-400' : 'bg-amber-50 border-amber-200 text-amber-700'
                          }`}>
                            Personal
                          </span>
                        </div>
                        <p className={`text-sm sm:text-base font-normal leading-relaxed ${theme === 'dark' ? 'text-zinc-300' : 'text-gray-600'}`}>{proj.desc}</p>
                      </div>

                      <div className="mt-6 pt-3 border-t flex items-center justify-between gap-4 border-gray-100 dark:border-zinc-800">
                        <div className="flex flex-wrap gap-2">
                          {proj.tech.map((t, ti) => (
                            <span key={ti} className={`text-xs font-mono px-2 py-0.5 rounded border ${theme === 'dark' ? 'text-amber-300 border-amber-900/50 bg-amber-950/20' : 'text-amber-700 border-amber-100 bg-amber-50/50'}`}>{t}</span>
                          ))}
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={(e) => openImageModal(e, proj.image, proj.title, proj.link)}
                            className={`project-view-button px-3 py-1.5 border text-xs font-black uppercase tracking-wider rounded transition-all duration-150 ease-out active:scale-95 ${theme === 'dark' ? 'bg-zinc-900 border-zinc-700 text-amber-400 hover:bg-amber-500 hover:text-black' : 'bg-gray-50 border-gray-300 text-amber-700 hover:bg-amber-600 hover:text-white'}`}
                            aria-label="Open project image"
                          >
                            View
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </FadeInUpSection>

        {/* 6. SERTIFIKASI & PENDIDIKAN */}
        <FadeInUpSection className={`max-w-6xl mx-auto px-6 sm:px-16 py-20 border-t ${theme === 'dark' ? 'border-zinc-800' : 'border-gray-200'}`}>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            
            <div id="sertifikat" className="space-y-6 scroll-mt-24">
              <h3 className={`text-2xl font-black border-b-2 pb-2 ${theme === 'dark' ? 'border-teal-500' : 'border-teal-600'}`}>Certificates</h3>
              <div className="space-y-4">
                {portofolioHanif.certificates && portofolioHanif.certificates.map((cert, idx) => (
                  <div 
                    key={idx} 
                    className={`p-4 border rounded-sm flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 transition-all duration-300 ${
                      theme === 'dark' ? 'border-zinc-800 bg-black hover:border-teal-500' : 'border-gray-200 bg-white hover:border-teal-600'
                    }`}
                  >
                    <div className="space-y-1">
                      <h4 className="font-bold text-sm sm:text-base leading-tight">{cert.title}</h4>
                      <p className={`text-xs font-bold ${theme === 'dark' ? 'text-zinc-500' : 'text-gray-500'}`}>{cert.provider}</p>
                    </div>

                    {cert.date && (
                      <span className={`text-xs font-mono px-2.5 py-1 border rounded-sm whitespace-nowrap self-start sm:self-auto ${
                        theme === 'dark' 
                          ? 'text-zinc-400 border-zinc-800 bg-zinc-950' 
                          : 'text-gray-500 border-gray-200 bg-gray-50'
                      }`}>
                        {cert.date}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div id="pendidikan" className="space-y-6 scroll-mt-24">
              <h3 className={`text-2xl font-black border-b-2 pb-2 ${theme === 'dark' ? 'border-amber-500' : 'border-amber-600'}`}>Education</h3>
              <div className="space-y-4">
                {portofolioHanif.education && portofolioHanif.education.map((edu, idx) => (
                  <div 
                    key={idx} 
                    className={`relative pl-4 border-l-2 transition-all duration-300 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 ${
                      theme === 'dark' ? 'border-amber-500 hover:border-amber-400' : 'border-amber-600 hover:border-amber-500'
                    }`}
                  >
                    <div className="space-y-1">
                      <p className="font-extrabold text-base sm:text-lg leading-tight">{edu.instance}</p>
                      <h4 className={`text-sm font-bold ${theme === 'dark' ? 'text-zinc-400' : 'text-gray-600'}`}>{edu.degree}</h4>
                      <p className="text-xs text-gray-400 font-medium pt-0.5">{edu.details}</p>
                    </div>

                    {edu.period && (
                      <span className={`text-xs font-mono px-2.5 py-1 border rounded-sm whitespace-nowrap self-start sm:self-auto ${
                        theme === 'dark' 
                          ? 'text-zinc-400 border-zinc-800 bg-zinc-950' 
                          : 'text-gray-500 border-gray-200 bg-gray-50'
                      }`}>
                        {edu.period}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeInUpSection>

        {/* 7. CONTACT STRIP */}
        <div id="kontak" className="py-20 max-w-6xl mx-auto border-t scroll-mt-24 px-6 sm:px-16 border-zinc-800">
          <div className="text-center space-y-2 mb-16">
            <h3 className="text-4xl font-bold tracking-tight text-white">Get In Touch</h3>
            <p className={`text-sm ${theme === 'dark' ? 'text-zinc-400' : 'text-gray-500'}`}>
              Have a project in mind or want to discuss opportunities? I'd love to hear from you!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-start">
            <div className="lg:col-span-5 space-y-10">
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-white tracking-tight mb-4">Contact Information</h4>
                
                <a 
                  href="mailto:hanif@example.com"
                  className={`p-4 border rounded-xl flex items-center gap-4 transition-all group ${
                    theme === 'dark' 
                      ? 'bg-zinc-900/40 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/70' 
                      : 'bg-gray-50 border-gray-200 hover:border-gray-300 hover:bg-gray-100'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                    theme === 'dark' ? 'bg-zinc-800 text-zinc-400 group-hover:text-white' : 'bg-gray-200 text-gray-600 group-hover:text-black'
                  }`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 font-medium">Email</p>
                    <p className={`text-sm font-semibold transition-colors ${theme === 'dark' ? 'text-zinc-200 group-hover:text-white' : 'text-zinc-800 group-hover:text-black'}`}>
                      hanif@example.com
                    </p>
                  </div>
                </a>

                <a 
                  href="https://portofolio-hanif.netlify.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`p-4 border rounded-xl flex items-center gap-4 transition-all group ${
                    theme === 'dark' 
                      ? 'bg-zinc-900/40 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/70' 
                      : 'bg-gray-50 border-gray-200 hover:border-gray-300 hover:bg-gray-100'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                    theme === 'dark' ? 'bg-zinc-800 text-zinc-400 group-hover:text-white' : 'bg-gray-200 text-gray-600 group-hover:text-black'
                  }`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 font-medium">Portfolio</p>
                    <p className={`text-sm font-semibold transition-colors ${theme === 'dark' ? 'text-zinc-200 group-hover:text-white' : 'text-zinc-800 group-hover:text-black'}`}>
                      portofolio-hanif.netlify.app
                    </p>
                  </div>
                </a>

                <div className={`p-4 border rounded-xl flex items-center gap-4 ${
                  theme === 'dark' ? 'bg-zinc-900/40 border-zinc-800' : 'bg-gray-50 border-gray-200'
                }`}>
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                    theme === 'dark' ? 'bg-zinc-800 text-zinc-400' : 'bg-gray-200 text-gray-600'
                  }`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 font-medium">Location</p>
                    <p className={`text-sm font-semibold ${theme === 'dark' ? 'text-zinc-200' : 'text-zinc-800'}`}>
                      Bandung, West Java, Indonesia[cite: 1]
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-lg font-bold text-white tracking-tight">Languages</h4>
                <div className="flex flex-wrap gap-2">
                  <span className={`text-xs px-3 py-1.5 font-medium rounded-full ${theme === 'dark' ? 'bg-zinc-900/60 text-zinc-300 border border-zinc-800' : 'bg-gray-100 text-gray-800'}`}>
                    <span className="text-zinc-500 mr-1.5 font-mono">ID</span> Indonesian (Native)
                  </span>
                  <span className={`text-xs px-3 py-1.5 font-medium rounded-full ${theme === 'dark' ? 'bg-zinc-900/60 text-zinc-300 border border-zinc-800' : 'bg-gray-100 text-gray-800'}`}>
                    <span className="text-zinc-500 mr-1.5 font-mono">GB</span> English (Professional)
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 w-full">
              <div className={`p-8 border rounded-2xl ${
                theme === 'dark' ? 'bg-zinc-900/20 border-zinc-800/80' : 'bg-white border-gray-200'
              }`}>
                <h4 className="text-xl font-bold text-white tracking-tight mb-6">Send a Message</h4>
                
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-zinc-400 block">Your Name</label>
                    <input 
                      type="text" 
                      placeholder="Your Name"
                      className={`w-full px-4 py-3 bg-transparent border rounded-xl text-sm focus:outline-none transition-colors ${
                        theme === 'dark' ? 'border-zinc-800 text-white placeholder-zinc-600 focus:border-zinc-600' : 'border-gray-200 text-black placeholder-gray-400 focus:border-gray-400'
                      }`}
                      required
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-zinc-400 block">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="your.email@example.com"
                      className={`w-full px-4 py-3 bg-transparent border rounded-xl text-sm focus:outline-none transition-colors ${
                        theme === 'dark' ? 'border-zinc-800 text-white placeholder-zinc-600 focus:border-zinc-600' : 'border-gray-200 text-black placeholder-gray-400 focus:border-gray-400'
                      }`}
                      required
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-zinc-400 block">Message</label>
                    <textarea 
                      rows="4"
                      placeholder="Tell me about your project or opportunity..."
                      className={`w-full px-4 py-3 bg-transparent border rounded-xl text-sm focus:outline-none transition-colors resize-none ${
                        theme === 'dark' ? 'border-zinc-800 text-white placeholder-zinc-600 focus:border-zinc-600' : 'border-gray-200 text-black placeholder-gray-400 focus:border-gray-400'
                      }`}
                      required
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className={`w-full py-3.5 font-bold rounded-xl active:scale-[0.99] transition-all text-sm mt-2 flex items-center justify-center gap-2 ${
                      theme === 'dark' 
                        ? 'bg-white text-black hover:bg-zinc-200' 
                        : 'bg-zinc-900 text-white hover:bg-zinc-800'
                    }`}
                  >
                    <svg className="w-4 h-4 transform rotate-45 -mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <footer className={`text-center py-8 text-xs font-bold text-gray-400 border-t ${theme === 'dark' ? 'border-zinc-800' : 'border-gray-200'}`}>
          © 2026 {portofolioHanif.profile.name} — Strict Adaptive Neo-Brutalism Theme
        </footer>
      </main>

      {/* MODAL CONTACT POP-UP */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 z-50">
          <div className={`border p-6 sm:p-8 max-w-sm w-full transition-colors duration-300 ${theme === 'dark' ? 'bg-black border-zinc-700 shadow-[6px_6px_0px_0px_rgba(20,184,166,0.3)]' : 'bg-white border-gray-300 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]'}`}>
            <div className="flex justify-between items-center mb-5 border-b pb-2 dark:border-zinc-800 border-gray-200">
              <h3 className="font-black text-base uppercase tracking-wider">Kirim Pesan</h3>
              <button onClick={() => setIsModalOpen(false)} className="hover:text-gray-400 font-bold text-base cursor-pointer">✕</button>
            </div>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-black uppercase tracking-wider mb-1 text-gray-400">Nama / Instansi</label>
                <input type="text" id="nama" value={formData.nama} onChange={handleInputChange} placeholder="HRD / Perusahaan" className={`w-full border p-2.5 rounded-none text-sm font-medium focus:outline-none ${theme === 'dark' ? 'bg-zinc-900 border-zinc-700 text-white focus:border-teal-500' : 'bg-white border-gray-200 text-black focus:border-teal-600'}`} required />
              </div>
              <div>
                <label className="block text-xs font-black uppercase tracking-wider mb-1 text-gray-400">Email Anda</label>
                <input type="email" id="email" value={formData.email} onChange={handleInputChange} placeholder="name@company.com" className={`w-full border p-2.5 rounded-none text-sm font-medium focus:outline-none ${theme === 'dark' ? 'bg-zinc-900 border-zinc-700 text-white focus:border-teal-500' : 'bg-white border-gray-200 text-black focus:border-teal-600'}`} required />
              </div>
              <div>
                <label className="block text-xs font-black uppercase tracking-wider mb-1 text-gray-400">Pesan Penawaran</label>
                <textarea id="pesan" rows="4" value={formData.pesan} onChange={handleInputChange} placeholder="Tuliskan pesan Anda..." className={`w-full border p-2.5 rounded-none text-sm font-medium focus:outline-none resize-none ${theme === 'dark' ? 'bg-zinc-900 border-zinc-700 text-white focus:border-teal-500' : 'bg-white border-gray-200 text-black focus:border-teal-600'}`} required></textarea>
              </div>
              <button type="submit" className={`w-full font-bold py-3 text-sm uppercase tracking-widest border transition-colors duration-200 shadow-sm cursor-pointer ${theme === 'dark' ? 'bg-teal-500 text-black border-teal-500 hover:bg-black hover:text-teal-500' : 'bg-teal-600 text-white border-teal-600 hover:bg-white hover:text-teal-600'}`}>
                Kirim Sekarang
              </button>
            </form>
          </div>
        </div>
      )}

      {/* GALERI IMAGE VIEWER MODAL (Mendukung Multi-Image) */}
      {isImageModalMounted && (
        <div 
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs transition-opacity duration-300 ease-out ${
            isImageModalOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={closeImageModal}
        >
          <div 
            onClick={(e) => e.stopPropagation()} 
            className={`w-full max-w-4xl border rounded-xl shadow-2xl flex flex-col transition-all duration-300 ease-out transform ${
              theme === 'dark' ? 'bg-zinc-950 border-zinc-800 text-white' : 'bg-white border-gray-200 text-black'
            } ${
              isImageModalOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
            }`}
          >
            {/* Header Modal */}
            <div className={`p-4 flex items-center justify-between border-b ${theme === 'dark' ? 'border-zinc-900' : 'border-gray-100'}`}>
              <div className="flex items-baseline gap-2 truncate pr-4">
                <h3 className="font-bold text-lg tracking-tight truncate">{selectedProjectTitle}</h3>
                {selectedImages.length > 1 && (
                  <span className="text-xs font-mono text-zinc-500 shrink-0">
                    ({currentImageIndex + 1}/{selectedImages.length})
                  </span>
                )}
              </div>
              <button 
                onClick={closeImageModal} 
                className={`p-1.5 rounded-md transition-colors ${
                  theme === 'dark' ? 'hover:bg-zinc-900 text-zinc-400 hover:text-white' : 'hover:bg-gray-100 text-gray-500 hover:text-black'
                }`}
              >
                ✕
              </button>
            </div>

            {/* Konten Gambar Utama + Tombol Navigasi Lintas Slider */}
            <div className={`p-6 flex items-center justify-center overflow-y-auto max-h-[65vh] relative group ${theme === 'dark' ? 'bg-zinc-900/10' : 'bg-gray-50/50'}`}>
              
              {/* Tombol Navigasi Kiri (Prev) */}
              {selectedImages.length > 1 && (
                <button
                  onClick={prevImage}
                  className="absolute left-4 z-10 p-2 rounded-full border bg-black/40 text-white backdrop-blur-xs transition-all hover:bg-black/80 shadow-md active:scale-90 border-zinc-700/50"
                  aria-label="Previous image"
                >
                  ‹
                </button>
              )}

              {/* Tampilan Gambar Aktif */}
              {selectedImages.length > 0 ? (
                <img 
                  src={selectedImages[currentImageIndex]} 
                  alt={`${selectedProjectTitle} - ${currentImageIndex + 1}`} 
                  className="w-full h-auto max-h-[60vh] object-contain rounded-md shadow-md select-none border border-zinc-800/20 transition-all duration-300" 
                />
              ) : (
                <div className="text-sm text-gray-500 py-12">No image available</div>
              )}

              {/* Tombol Navigasi Kanan (Next) */}
              {selectedImages.length > 1 && (
                <button
                  onClick={nextImage}
                  className="absolute right-4 z-10 p-2 rounded-full border bg-black/40 text-white backdrop-blur-xs transition-all hover:bg-black/80 shadow-md active:scale-90 border-zinc-700/50"
                  aria-label="Next image"
                >
                  ›
                </button>
              )}
            </div>

            {/* Indikator Dot Slider Bawah (Hanya muncul jika gambar > 1) */}
            {selectedImages.length > 1 && (
              <div className="flex justify-center gap-1.5 pb-4">
                {selectedImages.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => setCurrentImageIndex(dotIdx)}
                    className={`h-1.5 rounded-full transition-all duration-200 ${
                      dotIdx === currentImageIndex ? 'w-6 bg-teal-500' : 'w-1.5 bg-zinc-600 hover:bg-zinc-400'
                    }`}
                    aria-label={`Go to slide ${dotIdx + 1}`}
                  />
                ))}
              </div>
            )}

            {/* Bagian Bawah Modal */}
            <div className={`p-4 flex items-center justify-end gap-3 border-t ${theme === 'dark' ? 'border-zinc-900' : 'border-gray-100'}`}>
              {selectedProjectLink && (
                <a 
                  href={selectedProjectLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-5 py-2 text-sm font-bold text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-lg active:scale-95 transition-all shadow-sm shadow-black/20"
                >
                  Open Github
                </a>
              )}
              <button 
                onClick={closeImageModal} 
                className={`px-5 py-2 text-sm font-semibold border rounded-lg active:scale-95 transition-all ${
                  theme === 'dark' 
                    ? 'border-zinc-800 bg-transparent text-zinc-300 hover:bg-zinc-900 hover:text-white' 
                    : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:text-black'
                }`}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;