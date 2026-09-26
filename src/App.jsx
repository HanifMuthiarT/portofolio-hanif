// src/App.jsx
import { useState, useEffect } from 'react';
import { portofolioHanif } from './data/portofolioHanif';
import { TechIcons } from './components/TechIcons';
import {
  Code,
  Terminal,
  ArrowRight,
  ExternalLink,
  Mail,
  Phone,
  ChevronLeft,
  ChevronRight,
  X,
  Layers,
  Download,
  FileText,
  BookOpen,
  Award,
  Menu,
  Send
} from 'lucide-react';

// Terminal Typing Effect Hook
function useTypewriter(words, typeSpeed = 70, deleteSpeed = 40, delay = 2000) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];
    let timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setText(currentWord.substring(0, text.length - 1));
        if (text.length <= 1) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }, deleteSpeed);
    } else {
      timeout = setTimeout(() => {
        setText(currentWord.substring(0, text.length + 1));
        if (text.length === currentWord.length) {
          timeout = setTimeout(() => setIsDeleting(true), delay);
        }
      }, typeSpeed);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typeSpeed, deleteSpeed, delay]);

  return text;
}


export default function App() {
  const { profile, techStack, projects, education, certificates } = portofolioHanif;

  // Distinct style tokens for project origins (Instansi, Client, Academy, Personal)
  const originStyles = {
    instansi: {
      badge: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
      label: 'INSTANSI',
      textColor: 'text-cyan-400',
      hoverTitle: 'group-hover:text-cyan-300',
      hoverArrow: 'group-hover:text-cyan-400',
      cardBorderHover: 'hover:border-cyan-500/50',
      glow: 'bg-cyan-500/10',
      dot: 'bg-cyan-400',
      commentColor: 'text-cyan-400'
    },
    client: {
      badge: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
      label: 'CLIENT',
      textColor: 'text-amber-400',
      hoverTitle: 'group-hover:text-amber-300',
      hoverArrow: 'group-hover:text-amber-400',
      cardBorderHover: 'hover:border-amber-500/50',
      glow: 'bg-amber-500/10',
      dot: 'bg-amber-400',
      commentColor: 'text-amber-400'
    },
    academy: {
      badge: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
      label: 'ACADEMY',
      textColor: 'text-purple-400',
      hoverTitle: 'group-hover:text-purple-300',
      hoverArrow: 'group-hover:text-purple-400',
      cardBorderHover: 'hover:border-purple-500/50',
      glow: 'bg-purple-500/10',
      dot: 'bg-purple-400',
      commentColor: 'text-purple-400'
    },
    personal: {
      badge: 'bg-[#00FF66]/10 text-[#00FF66] border-[#00FF66]/30',
      label: 'PERSONAL',
      textColor: 'text-[#00FF66]',
      hoverTitle: 'group-hover:text-[#00FF66]',
      hoverArrow: 'group-hover:text-[#00FF66]',
      cardBorderHover: 'hover:border-[#00FF66]/50',
      glow: 'bg-[#00FF66]/10',
      dot: 'bg-[#00FF66]',
      commentColor: 'text-[#00FF66]'
    }
  };

  // Flatten all projects with origin key for flexible filtering
  const allProjects = [
    ...projects.instansi.map(p => ({ ...p, origin: p.origin || 'instansi' })),
    ...projects.client.map(p => ({ ...p, origin: p.origin || 'client' })),
    ...projects.personal.map(p => ({ ...p, origin: p.origin || 'personal' }))
  ];

  // State Management
  const [activeNav, setActiveNav] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [projectFilter, setProjectFilter] = useState('all');
  const [techFilter, setTechFilter] = useState('all');
  const [galleryModalOpen, setGalleryModalOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [certificateModalOpen, setCertificateModalOpen] = useState(false);
  const [activeCertificate, setActiveCertificate] = useState(null);

  // Mouse position for interactive flashlight spotlight
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Terminal Dynamic Typewriter Taglines
  const typedTagline = useTypewriter([
    "/* Full Stack Developer */"
  ], 75, 40, 2000);

  // Active section scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'skills', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveNav(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard navigation for image gallery and modals
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setGalleryModalOpen(false);
        setCertificateModalOpen(false);
        return;
      }

      if (!galleryModalOpen || !activeProject) return;

      const images = Array.isArray(activeProject.image) ? activeProject.image : [activeProject.image];
      if (e.key === 'ArrowRight') {
        setActiveImageIndex((prev) => (prev + 1) % images.length);
      } else if (e.key === 'ArrowLeft') {
        setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [galleryModalOpen, activeProject]);

  const scrollTo = (id) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };



  const openGallery = (project, index = 0) => {
    setActiveProject(project);
    setActiveImageIndex(index);
    setGalleryModalOpen(true);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setTimeout(() => {
      alert(`Terima kasih ${formData.name}! Pesan Anda telah terkirim. Hanif akan segera menghubungi Anda.`);
      setFormData({ name: '', email: '', message: '' });
      setIsSending(false);
      setIsContactModalOpen(false);
    }, 600);
  };

  // Filtered projects
  const filteredProjects = projectFilter === 'all'
    ? allProjects
    : allProjects.filter(p => p.group === projectFilter);

  // Filtered tech stack
  const filteredTech = techFilter === 'all'
    ? techStack
    : techStack.filter(t => t.category === techFilter);

  return (
    <div className="min-h-screen bg-[#08090a] text-neutral-200 font-sans selection:bg-[#00FF66] selection:text-black relative">
      
      {/* Ambient Mouse Spotlight (Follows user's cursor across the dark grid) */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 hidden md:block"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 255, 102, 0.045), transparent 80%)`
        }}
      />
      
      {/* ========================================================================= */}
      {/* 1. MOCK WINDOW / BROWSER TITLEBAR (As seen in the reference screenshot) */}
      {/* ========================================================================= */}
      <div className="w-full bg-[#0d0f12] border-b border-[#1b1f26] px-4 py-2 flex items-center justify-between text-xs select-none sticky top-0 z-50 backdrop-blur-md bg-opacity-90">
        <div className="flex items-center gap-2">
          {/* macOS 3 Dots */}
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#ef4444] border border-[#dc2626]/40 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-[#f59e0b] border border-[#d97706]/40 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-[#10b981] border border-[#059669]/40 inline-block"></span>
          </div>
        </div>

        {/* Center Mock URL / Path Bar */}
        <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-md bg-[#161920] border border-[#232733] text-neutral-400 font-mono text-[11px] max-w-sm w-full justify-center">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00FF66]"></span>
          <span className="text-neutral-500">https://</span>
          <span className="text-neutral-200 font-semibold">hanifmuthiar.dev</span>
          <span className="text-neutral-500">/portfolio</span>
        </div>

        {/* Right Status */}
        <div className="flex items-center gap-2 font-mono text-[11px] text-neutral-400">
          <span className="w-2 h-2 rounded-full bg-[#00FF66] animate-pulse"></span>
          <span className="hidden md:inline text-neutral-300">live</span>
          <span className="text-neutral-500">v2.4</span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. MAIN NAVIGATION BAR */}
      {/* ========================================================================= */}
      <nav className="w-full border-b border-[#161a22] bg-[#090b0e]/95 backdrop-blur-md sticky top-[37px] z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          
          {/* Brand Logo (<hanif />) in Neon Green Monospace */}
          <button
            onClick={() => scrollTo('home')}
            className="flex items-center gap-1 font-mono text-base font-bold text-[#00FF66] hover:brightness-125 transition-all group"
          >
            <span className="text-[#00FF66] group-hover:neon-text-glow">&lt;hanif /&gt;</span>
          </button>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-8 text-sm font-mono">
            <button
              onClick={() => scrollTo('home')}
              className={`transition-colors py-1 ${
                activeNav === 'home'
                  ? 'text-[#00FF66] font-semibold border-b-2 border-[#00FF66]'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollTo('projects')}
              className={`transition-colors py-1 ${
                activeNav === 'projects'
                  ? 'text-[#00FF66] font-semibold border-b-2 border-[#00FF66]'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => scrollTo('skills')}
              className={`transition-colors py-1 ${
                activeNav === 'skills'
                  ? 'text-[#00FF66] font-semibold border-b-2 border-[#00FF66]'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              Skills & Tools
            </button>
            <button
              onClick={() => scrollTo('education')}
              className={`transition-colors py-1 ${
                activeNav === 'education'
                  ? 'text-[#00FF66] font-semibold border-b-2 border-[#00FF66]'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              Education & Certs
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className={`transition-colors py-1 ${
                activeNav === 'contact'
                  ? 'text-[#00FF66] font-semibold border-b-2 border-[#00FF66]'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              Contact
            </button>
          </div>

          {/* Contact CTA Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-[#13161c] border border-neutral-700 text-xs font-mono text-neutral-300 hover:text-white hover:border-[#00FF66] transition-all"
            >
              <Mail className="w-3.5 h-3.5 text-[#00FF66]" />
              <span>Let's Talk</span>
            </button>

            {/* Mobile menu hamburger button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-1.5 text-neutral-400 hover:text-white"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-b border-[#1c212a] bg-[#0c0e12] px-4 py-4 space-y-2 font-mono text-sm">
            <button
              onClick={() => scrollTo('home')}
              className="block w-full text-left py-2 px-3 rounded hover:bg-neutral-900 text-neutral-300 hover:text-[#00FF66]"
            >
              // 01. Home
            </button>
            <button
              onClick={() => scrollTo('projects')}
              className="block w-full text-left py-2 px-3 rounded hover:bg-neutral-900 text-neutral-300 hover:text-[#00FF66]"
            >
              // 02. Projects
            </button>
            <button
              onClick={() => scrollTo('skills')}
              className="block w-full text-left py-2 px-3 rounded hover:bg-neutral-900 text-neutral-300 hover:text-[#00FF66]"
            >
              // 03. Skills & Tools
            </button>
            <button
              onClick={() => scrollTo('education')}
              className="block w-full text-left py-2 px-3 rounded hover:bg-neutral-900 text-neutral-300 hover:text-[#00FF66]"
            >
              // 04. Education & Certificates
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="block w-full text-left py-2 px-3 rounded hover:bg-neutral-900 text-neutral-300 hover:text-[#00FF66]"
            >
              // 05. Contact
            </button>
          </div>
        )}
      </nav>

      {/* ========================================================================= */}
      {/* 3. HERO SECTION (Identical structure and aesthetic to Screenshot 1) */}
      {/* ========================================================================= */}
      <section
        id="home"
        className="relative bg-grid-pattern pt-16 pb-24 md:pt-24 md:pb-32 border-b border-[#161a22] overflow-hidden"
      >
        {/* Subtle radial ambient glow at the top */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00FF66]/5 rounded-full blur-3xl pointer-events-none -z-10" />

        {/* Gentle Cyber Scanline */}
        <div className="absolute inset-x-0 h-40 bg-gradient-to-b from-transparent via-[#00FF66]/[0.025] to-transparent pointer-events-none animate-scanline" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.72fr)] items-center gap-10 xl:gap-16">
            <div>
            
            {/* Terminal Typing Comment Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-3.5 py-1.5 rounded-lg bg-[#101216] border border-neutral-800 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#00FF66] animate-neon-pulse inline-block shadow-[0_0_8px_#00FF66]"></span>
              <span className="font-mono text-sm md:text-base font-semibold text-[#00FF66] tracking-wide">
                {typedTagline}
              </span>
              <span className="w-2 h-4 bg-[#00FF66] animate-cursor-blink inline-block ml-0.5"></span>
            </div>

            {/* Giant Bold Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-6">
              Hi, I'm Hanif Muthiar Tsani
              <br />
              <span className="text-neutral-100">{profile.headline}</span>
            </h1>

            {/* Subtitle / Bio Paragraph */}
            <p className="text-base sm:text-lg md:text-xl text-neutral-400 font-normal leading-relaxed mb-8 max-w-2xl">
              {profile.subheadline}
            </p>

            {/* Action Buttons & Status */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {/* Primary Neon Green Button with Shimmer animation */}
              <button
                onClick={() => scrollTo('projects')}
                className="relative overflow-hidden group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded bg-[#00FF66] hover:bg-[#00dd55] text-black font-semibold text-sm transition-all duration-300 shadow-[0_0_25px_rgba(0,255,102,0.3)] hover:shadow-[0_0_35px_rgba(0,255,102,0.5)] hover:-translate-y-0.5 cursor-pointer font-mono"
              >
                {/* Light shimmer sweep */}
                <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 animate-shimmer pointer-events-none" />
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Secondary Terminal Button */}
              <button
                onClick={() => scrollTo('skills')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded bg-[#111317] hover:bg-[#181b22] border border-neutral-700/80 hover:border-neutral-500 text-neutral-300 font-mono text-sm transition-all duration-200 cursor-pointer"
              >
                <Terminal className="w-4 h-4 text-[#00FF66]" />
                <span>Explore Tech Stack</span>
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-neutral-400 hover:text-white font-mono text-sm transition-colors cursor-pointer"
              >
                <span>Get in touch &rarr;</span>
              </button>
            </div>

            {/* Live Availability Tag */}
            <div className="mt-8 flex items-center gap-2.5 text-xs font-mono text-neutral-400">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00FF66] animate-neon-pulse inline-block shadow-[0_0_8px_#00FF66]"></span>
              <span>{profile.status} &bull; Bandung, ID</span>
            </div>
            </div>

            <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
              <div className="absolute -inset-4 rounded-2xl border border-[#00FF66]/20 bg-[#00FF66]/[0.04] blur-sm" />
              <div className="relative overflow-hidden rounded-2xl border border-[#29312d] bg-[#101216] p-2 shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="aspect-[4/5] w-full rounded-xl object-cover object-center"
                />
                <div className="absolute inset-x-2 bottom-2 rounded-b-xl bg-gradient-to-t from-black/80 via-black/30 to-transparent px-5 pb-5 pt-12">
                  <p className="font-mono text-xs text-[#00FF66]">FULL STACK DEVELOPER</p>
                  <p className="mt-1 text-lg font-semibold text-white">{profile.name}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Live Metrics Ticker Bar */}
          <div className="mt-10 pt-6 border-t border-[#181c24] grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono">
            <div className="p-3.5 rounded-xl bg-[#0e1014] border border-[#1b2029] hover:border-neutral-700 transition-all hover:-translate-y-0.5">
              <span className="text-xl sm:text-2xl font-extrabold text-white block">3.53</span>
              <span className="text-[11px] text-neutral-400 block mt-0.5">GPA Distinction</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#0e1014] border border-[#1b2029] hover:border-neutral-700 transition-all hover:-translate-y-0.5">
              <span className="text-xl sm:text-2xl font-extrabold text-[#00FF66] block">5+</span>
              <span className="text-[11px] text-neutral-400 block mt-0.5">Built Projects</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#0e1014] border border-[#1b2029] hover:border-neutral-700 transition-all hover:-translate-y-0.5">
              <span className="text-xl sm:text-2xl font-extrabold text-cyan-400 block">7+</span>
              <span className="text-[11px] text-neutral-400 block mt-0.5">Certifications</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#0e1014] border border-[#1b2029] hover:border-neutral-700 transition-all hover:-translate-y-0.5">
              <span className="text-xl sm:text-2xl font-extrabold text-purple-400 block">100%</span>
              <span className="text-[11px] text-neutral-400 block mt-0.5">Production Ready</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. FEATURED PROJECTS SECTION */}
      {/* ========================================================================= */}
      <section id="projects" className="py-20 md:py-28 border-b border-[#161a22]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          {/* Section Header with Horizontal Rule */}
          <div className="flex items-center gap-4 mb-4">
            <h2 className="font-mono text-sm sm:text-base font-semibold text-[#00FF66] whitespace-nowrap">
              // Featured Projects
            </h2>
            <div className="h-[1px] bg-neutral-800 flex-grow" />
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Projects
              </h3>
              <p className="text-sm sm:text-base text-neutral-400 mt-2 max-w-xl">
                A selection of projects showcasing systems engineering, product development, and technical problem-solving. Each project represents real challenges solved with measurable impact.
              </p>
            </div>

            {/* Filter Tabs with Origin Indicators */}
            <div className="flex flex-wrap gap-1.5 p-1 bg-[#101216] border border-neutral-800 rounded-lg text-xs font-mono">
              <button
                onClick={() => setProjectFilter('all')}
                className={`px-3 py-1.5 rounded transition-all ${
                  projectFilter === 'all'
                    ? 'bg-[#1b1f28] text-white font-semibold shadow-sm'
                    : 'text-neutral-400 hover:text-neutral-200'
                }`}
              >
                All ({allProjects.length})
              </button>
              <button
                onClick={() => setProjectFilter('instansi')}
                className={`px-3 py-1.5 rounded transition-all flex items-center gap-1.5 ${
                  projectFilter === 'instansi'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold'
                    : 'text-neutral-400 hover:text-cyan-400'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                <span>Instansi</span>
              </button>
              <button
                onClick={() => setProjectFilter('academy')}
                className={`px-3 py-1.5 rounded transition-all flex items-center gap-1.5 ${
                  projectFilter === 'academy'
                    ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40 font-semibold'
                    : 'text-neutral-400 hover:text-purple-400'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                <span>Academy</span>
              </button>
              <button
                onClick={() => setProjectFilter('client')}
                className={`px-3 py-1.5 rounded transition-all flex items-center gap-1.5 ${
                  projectFilter === 'client'
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 font-semibold'
                    : 'text-neutral-400 hover:text-amber-400'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                <span>Client</span>
              </button>
              <button
                onClick={() => setProjectFilter('personal')}
                className={`px-3 py-1.5 rounded transition-all flex items-center gap-1.5 ${
                  projectFilter === 'personal'
                    ? 'bg-[#00FF66]/20 text-[#00FF66] border border-[#00FF66]/40 font-semibold'
                    : 'text-neutral-400 hover:text-[#00FF66]'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#00FF66]"></span>
                <span>Personal</span>
              </button>
            </div>
          </div>

          {/* Project Cards Grid (2 columns on desktop) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project, idx) => {
              const images = Array.isArray(project.image) ? project.image : [project.image];
              const thumbnail = images[0];
              const originTheme = originStyles[project.origin] || originStyles.personal;

              return (
                <div
                  key={project.id || idx}
                  className={`terminal-card bg-[#0f1116] border border-[#1b2029] ${originTheme.cardBorderHover} rounded-xl p-6 sm:p-7 flex flex-col justify-between group transition-all duration-300 relative overflow-hidden`}
                >
                  {/* Distinct ambient origin glow */}
                  <div className={`absolute top-0 right-0 w-36 h-36 ${originTheme.glow} rounded-bl-full pointer-events-none transition-opacity opacity-0 group-hover:opacity-100`} />

                  <div>
                    {/* Header: Origin Badge + Client Name + Title + Arrow */}
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        {/* Distinct Origin Tag Badge */}
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider font-semibold border ${originTheme.badge}`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${originTheme.dot}`}></span>
                            {originTheme.label}
                          </span>
                        </div>

                        {/* Client / Academy / Instansi Name with distinctive font color */}
                        <span className={`text-[11px] font-mono ${originTheme.textColor} uppercase tracking-wider block mb-1 font-semibold`}>
                          {project.clientName}
                        </span>

                        <h4 className={`text-xl sm:text-2xl font-bold text-white ${originTheme.hoverTitle} transition-colors leading-snug`}>
                          {project.title}
                        </h4>
                      </div>

                      {/* Top Right Arrow with distinctive hover color */}
                      <button
                        onClick={() => openGallery(project, 0)}
                        title="View Screenshots & Details"
                        className={`text-neutral-500 ${originTheme.hoverArrow} transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1 p-1`}
                      >
                        <ArrowRight className="w-5 h-5 -rotate-45" />
                      </button>
                    </div>

                    {/* Project Description */}
                    <p className="text-sm text-neutral-400 leading-relaxed mb-5 font-normal">
                      {project.desc}
                    </p>

                    {/* Screenshot Preview Trigger Banner */}
                    {thumbnail && (
                      <div
                        onClick={() => openGallery(project, 0)}
                        className="relative rounded-lg overflow-hidden border border-neutral-800/80 mb-5 cursor-pointer group/thumb bg-black/40 aspect-video flex items-center justify-center"
                      >
                        <img
                          src={thumbnail}
                          alt={project.title}
                          className="w-full h-full object-cover object-top opacity-70 group-hover/thumb:opacity-90 group-hover/thumb:scale-[1.02] transition-all duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-3 justify-between">
                          <span className="text-xs font-mono text-white/90 flex items-center gap-1.5 bg-black/60 px-2.5 py-1 rounded backdrop-blur-sm border border-white/10">
                            <Layers className="w-3.5 h-3.5 text-[#00FF66]" />
                            <span>{images.length} {images.length > 1 ? 'Screenshots' : 'Preview'}</span>
                          </span>
                          <span className="text-xs font-mono text-[#00FF66] font-semibold bg-black/60 px-2 py-1 rounded backdrop-blur-sm opacity-0 group-hover/thumb:opacity-100 transition-opacity">
                            View Gallery &rarr;
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Tech Stack Badges (Dark pill tags with monospace text) */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tech.map((techItem, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded bg-[#161920] border border-[#232733] text-xs font-mono text-neutral-300"
                        >
                          {techItem}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer: Divider + Monospace Distinct Impact Comment */}
                  <div className="border-t border-[#1b2029] pt-4 mt-2">
                    <p className={`font-mono text-xs sm:text-sm ${originTheme.commentColor} font-medium leading-relaxed mb-3`}>
                      {project.impact}
                    </p>

                    <div className="flex items-center justify-between text-xs font-mono pt-1">
                      <button
                        onClick={() => openGallery(project, 0)}
                        className="text-neutral-400 hover:text-white underline decoration-neutral-600 underline-offset-4 flex items-center gap-1"
                      >
                        <span>Open details</span>
                      </button>

                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-neutral-400 hover:text-[#00FF66] flex items-center gap-1.5 transition-colors"
                        >
                          <TechIcons.github className="w-3.5 h-3.5" />
                          <span>Repository</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

          {/* Bottom link: View all on GitHub */}
          <div className="mt-12 text-center">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-sm text-neutral-400 hover:text-[#00FF66] transition-colors py-2 px-4 rounded border border-neutral-800 hover:border-neutral-700 bg-[#0f1115]"
            >
              <TechIcons.github className="w-4 h-4 text-[#00FF66]" />
              <span>// View full code repositories on GitHub &rarr;</span>
            </a>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. REQUESTED SECTION: DEVELOPER TOOLS & TECH STACK WITH CREATIVE ICONS    */}
      {/* ========================================================================= */}
      <section id="skills" className="py-20 md:py-28 bg-[#0a0c10] border-b border-[#161a22] relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          {/* Section Header with Horizontal Rule */}
          <div className="flex items-center gap-4 mb-4">
            <h2 className="font-mono text-sm sm:text-base font-semibold text-[#00FF66] whitespace-nowrap">
              // Tech Stack & Tooling
            </h2>
            <div className="h-[1px] bg-neutral-800 flex-grow" />
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Tools, Languages & Frameworks
              </h3>
              <p className="text-sm sm:text-base text-neutral-400 mt-2 max-w-xl">
                The core technologies, developer utilities, and battle-tested frameworks I rely on to architect and deliver reliable software systems.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-1.5 p-1 bg-[#101216] border border-neutral-800 rounded-lg text-xs font-mono">
              <button
                onClick={() => setTechFilter('all')}
                className={`px-3 py-1.5 rounded transition-all ${
                  techFilter === 'all'
                    ? 'bg-[#1b1f28] text-[#00FF66] font-semibold'
                    : 'text-neutral-400 hover:text-neutral-200'
                }`}
              >
                All Tech ({techStack.length})
              </button>
              <button
                onClick={() => setTechFilter('tools')}
                className={`px-3 py-1.5 rounded transition-all ${
                  techFilter === 'tools'
                    ? 'bg-[#1b1f28] text-[#00FF66] font-semibold'
                    : 'text-neutral-400 hover:text-neutral-200'
                }`}
              >
                Developer Tools (VS Code, Git, etc.)
              </button>
              <button
                onClick={() => setTechFilter('languages')}
                className={`px-3 py-1.5 rounded transition-all ${
                  techFilter === 'languages'
                    ? 'bg-[#1b1f28] text-[#00FF66] font-semibold'
                    : 'text-neutral-400 hover:text-neutral-200'
                }`}
              >
                Languages
              </button>
              <button
                onClick={() => setTechFilter('frameworks')}
                className={`px-3 py-1.5 rounded transition-all ${
                  techFilter === 'frameworks'
                    ? 'bg-[#1b1f28] text-[#00FF66] font-semibold'
                    : 'text-neutral-400 hover:text-neutral-200'
                }`}
              >
                Frameworks & DB
              </button>
            </div>
          </div>

          {/* Cards Grid: Each tool presented with rich SVG icon */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredTech.map((item, idx) => {
              const IconComponent = TechIcons[item.iconKey] || TechIcons.terminal;

              return (
                <div
                  key={idx}
                  className="bg-[#101216] border border-[#1b2029] hover:border-neutral-600 rounded-xl p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_24px_-8px_rgba(0,255,102,0.12)] group flex flex-col justify-between"
                >
                  <div>
                    {/* Top Row: Icon + Badge */}
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="p-2.5 rounded-lg bg-[#181c24] border border-[#232733] group-hover:border-[#00FF66]/40 transition-colors flex items-center justify-center">
                        <IconComponent className="w-6 h-6 transition-transform group-hover:scale-110" />
                      </div>

                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#161920] border border-[#222733] text-neutral-400 group-hover:text-[#00FF66] transition-colors">
                        {item.badge}
                      </span>
                    </div>

                    {/* Name */}
                    <h4 className="text-base font-bold text-white group-hover:text-[#00FF66] transition-colors mb-1.5">
                      {item.name}
                    </h4>

                    {/* Description */}
                    <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>

                  {/* Micro Category Tag */}
                  <div className="mt-4 pt-3 border-t border-[#181c24] flex items-center justify-between text-[11px] font-mono text-neutral-500">
                    <span className="capitalize">{item.category}</span>
                    <span className="text-neutral-600 group-hover:text-neutral-400">&bull; configured</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick Summary Bento Bar */}
          <div className="mt-10 p-5 rounded-xl bg-[#0f1116] border border-[#1b2029] flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-neutral-400">
            <div className="flex items-center gap-3">
              <span className="p-2 rounded bg-neutral-900 text-[#00FF66] border border-neutral-800">
                <Code className="w-4 h-4" />
              </span>
              <span>
                <strong className="text-white">Active Stack:</strong> Laravel 11 &bull; React 19 &bull; Flutter &bull; MySQL &bull; Google Cloud Platform &bull; VS Code &bull; Docker
              </span>
            </div>
            <div className="flex items-center gap-2 text-neutral-500">
              <span>// 100% production ready</span>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. EDUCATION & CERTIFICATIONS SECTION (Work Experience removed as requested) */}
      {/* ========================================================================= */}
      <section id="education" className="py-20 md:py-28 border-b border-[#161a22]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          {/* Section Header with Horizontal Rule */}
          <div className="flex items-center gap-4 mb-4">
            <h2 className="font-mono text-sm sm:text-base font-semibold text-[#00FF66] whitespace-nowrap">
              // Education & Credentials
            </h2>
            <div className="h-[1px] bg-neutral-800 flex-grow" />
          </div>

          <div className="mb-12">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Academic Background & Certifications
            </h3>
            <p className="text-sm sm:text-base text-neutral-400 mt-2 max-w-xl">
              Formal computer science education and verified professional certifications from Google Cloud & Dicoding Indonesia.
            </p>
          </div>

          {/* Part 1: Formal Education */}
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-6">
              <BookOpen className="w-5 h-5 text-[#00FF66]" />
              <h4 className="text-xl font-bold text-white tracking-tight">Formal Education</h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className="terminal-card bg-[#0f1116] border border-[#1b2029] hover:border-neutral-600 rounded-xl p-6 sm:p-7 flex flex-col justify-between transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-mono text-[#00FF66] bg-[#00FF66]/10 px-2.5 py-0.5 rounded border border-[#00FF66]/20">
                        {edu.period}
                      </span>
                      <span className="text-xs font-mono text-neutral-300 font-semibold bg-[#161920] px-2.5 py-0.5 rounded border border-[#232733]">
                        {edu.details}
                      </span>
                    </div>

                    <h5 className="text-xl font-bold text-white mb-1.5">{edu.degree}</h5>
                    <p className="text-sm font-semibold text-[#00FF66] mb-3">{edu.instance}</p>
                    <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">{edu.description}</p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs font-mono text-neutral-500">
                    <span>// Verified academic degree</span>
                    <span className="text-neutral-400">&bull; Completed</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Part 2: Certifications Showcase with Visual Previews */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-[#00FF66]" />
                <h4 className="text-xl font-bold text-white tracking-tight">Verified Certifications ({certificates.length})</h4>
              </div>
              <span className="text-xs font-mono text-neutral-400">
                Klik kartu untuk melihat sertifikat PDF
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
              {certificates.map((cert, idx) => (
                <div
                  key={cert.id || idx}
                  onClick={() => {
                    setActiveCertificate(cert);
                    setCertificateModalOpen(true);
                  }}
                  className="terminal-card bg-[#0f1116] border border-[#1b2029] hover:border-neutral-500 rounded-xl overflow-hidden group cursor-pointer flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(0,255,102,0.1)]"
                >
                  {/* Certificate Preview Top Area */}
                  <div className="relative aspect-[16/10] bg-gradient-to-br from-[#12161f] via-[#161b26] to-[#0c0e13] border-b border-[#1b2029] p-4 flex flex-col justify-between overflow-hidden">
                    {/* Decorative certificate border frame */}
                    <div className="absolute inset-2 border border-neutral-800/80 rounded pointer-events-none group-hover:border-[#00FF66]/30 transition-colors" />
                    
                    {cert.thumbnail || cert.image ? (
                      <img
                        src={cert.thumbnail || cert.image}
                        alt={cert.title}
                        className="absolute inset-0 h-full w-full bg-[#26364a] object-contain object-center opacity-90 transition-transform duration-300 group-hover:scale-[1.03]"
                      />
                    ) : cert.pdf ? (
                      <div className="relative z-10 flex h-full flex-col items-center justify-center gap-3 text-center">
                        <FileText className="h-10 w-10 text-[#00FF66]" />
                        <span className="rounded border border-[#00FF66]/30 bg-[#00FF66]/10 px-2.5 py-1 font-mono text-[10px] font-semibold tracking-wider text-[#00FF66]">
                          PDF CERTIFICATE
                        </span>
                        <span className="max-w-xs text-xs font-mono text-neutral-300 line-clamp-2">
                          {cert.title}
                        </span>
                      </div>
                    ) : (
                      <>
                        {/* Certificate Header Banner */}
                        <div className="relative z-10 flex items-center justify-between">
                          <div className="flex items-center gap-1.5 bg-black/60 px-2 py-0.5 rounded border border-neutral-700/60 backdrop-blur-sm">
                            <Award className="w-3.5 h-3.5 text-[#00FF66]" />
                            <span className="text-[10px] font-mono text-neutral-200 font-semibold">{cert.provider}</span>
                          </div>
                          <span className="text-[10px] font-mono text-[#00FF66] bg-[#00FF66]/10 px-2 py-0.5 rounded border border-[#00FF66]/30">
                            {cert.date}
                          </span>
                        </div>

                        {/* Certificate Central Typography */}
                        <div className="relative z-10 my-auto text-center px-2">
                          <span className="text-[9px] font-mono uppercase tracking-widest text-neutral-400 block mb-1">
                            Certificate of Completion
                          </span>
                          <h6 className="text-xs sm:text-sm font-bold text-white line-clamp-2 leading-tight group-hover:text-[#00FF66] transition-colors">
                            {cert.title}
                          </h6>
                          <span className="text-[10px] font-mono text-neutral-400 mt-1 block">
                            Awarded to: <strong className="text-neutral-200">Hanif Muthiar Tsani</strong>
                          </span>
                        </div>

                        {/* Certificate Bottom Watermark */}
                        <div className="relative z-10 flex items-center justify-between text-[9px] font-mono text-neutral-500 pt-1 border-t border-neutral-800/60">
                          <span>{cert.credentialId || 'VERIFIED'}</span>
                          <span className="text-[#00FF66] flex items-center gap-1">
                            <span>Inspect</span>
                            <ArrowRight className="w-2.5 h-2.5 -rotate-45" />
                          </span>
                        </div>
                      </>
                    )}

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                      <span className="px-3 py-1.5 rounded bg-[#00FF66] text-black font-mono font-bold text-xs flex items-center gap-1.5 shadow-lg">
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Lihat Sertifikat</span>
                      </span>
                    </div>
                  </div>

                  {/* Certificate Info Bottom Card */}
                  <div className="p-4 sm:p-5 flex-grow flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
                          {cert.provider}
                        </span>
                        <span className="text-xs font-mono text-[#00FF66] font-semibold">
                          {cert.date}
                        </span>
                      </div>

                      <h5 className="text-sm font-bold text-white group-hover:text-[#00FF66] transition-colors leading-snug mb-2">
                        {cert.title}
                      </h5>

                      <p className="text-xs text-neutral-400 leading-relaxed">
                        {cert.topic}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#181c24] flex items-center justify-between text-[11px] font-mono text-neutral-500">
                      <span>ID: {cert.credentialId || 'DICODING-CERT'}</span>
                      <span className="text-neutral-400 group-hover:text-[#00FF66] flex items-center gap-1">
                        <span>Detail</span>
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. CONTACT & GET IN TOUCH SECTION */}
      {/* ========================================================================= */}
      <section id="contact" className="py-20 md:py-28 relative bg-grid-pattern">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          {/* Header */}
          <div className="flex items-center gap-4 mb-4">
            <h2 className="font-mono text-sm sm:text-base font-semibold text-[#00FF66] whitespace-nowrap">
              // Contact
            </h2>
            <div className="h-[1px] bg-neutral-800 flex-grow" />
          </div>

          <div className="bg-[#101216] border border-[#1f242e] rounded-2xl p-8 sm:p-12 relative overflow-hidden">
            <div className="max-w-2xl">
              <span className="text-xs font-mono text-[#00FF66] tracking-wider uppercase block mb-2">
                /* Available for opportunities */
              </span>

              <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                Let's build reliable digital systems together.
              </h3>

              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mb-8">
                Whether you have a product to build, an enterprise web application that needs scaling, or a technical inquiry, my inbox is always open.
              </p>

              {/* Direct Contact Pills */}
              <div className="flex flex-wrap gap-3 mb-8">
                {/* Direct email link */}
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#181c24] border border-[#232733] hover:border-[#00FF66] text-xs font-mono text-neutral-200 hover:text-white transition-all cursor-pointer"
                >
                  <Mail className="w-4 h-4 text-[#00FF66]" />
                  <span>{profile.email}</span>
                </a>

                {/* WhatsApp Direct */}
                <a
                  href={`https://wa.me/${profile.phone.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#181c24] border border-[#232733] hover:border-[#00FF66] text-xs font-mono text-neutral-200 hover:text-white transition-all"
                >
                  <Phone className="w-4 h-4 text-[#00FF66]" />
                  <span>WhatsApp: {profile.phone}</span>
                </a>

                {/* LinkedIn */}
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#181c24] border border-[#232733] hover:border-[#00FF66] text-xs font-mono text-neutral-200 hover:text-white transition-all"
                >
                  <TechIcons.linkedin className="w-4 h-4 text-[#00FF66]" />
                  <span>LinkedIn Profile</span>
                </a>

                {/* GitHub */}
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#181c24] border border-[#232733] hover:border-[#00FF66] text-xs font-mono text-neutral-200 hover:text-white transition-all"
                >
                  <TechIcons.github className="w-4 h-4 text-[#00FF66]" />
                  <span>GitHub Profile</span>
                </a>
              </div>

              {/* Message Trigger Button */}
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-[#00FF66] hover:bg-[#00dd55] text-black font-semibold text-sm transition-all shadow-[0_0_20px_rgba(0,255,102,0.25)] hover:shadow-[0_0_30px_rgba(0,255,102,0.45)] cursor-pointer font-mono"
              >
                <Send className="w-4 h-4" />
                <span>Send a Direct Message</span>
              </button>

            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. FOOTER */}
      {/* ========================================================================= */}
      <footer className="border-t border-[#161a22] py-10 bg-[#07080a] text-xs font-mono text-neutral-500">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-neutral-400">
            <span className="text-[#00FF66] font-bold">&lt;hanif /&gt;</span>
            <span>&copy; {new Date().getFullYear()} Hanif Muthiar Tsani. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <button onClick={() => scrollTo('home')} className="hover:text-[#00FF66] transition-colors">
              // back to top &uarr;
            </button>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#00FF66] transition-colors">
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#00FF66] transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>

      {/* ========================================================================= */}
      {/* 9. INTERACTIVE IMAGE GALLERY MODAL */}
      {/* ========================================================================= */}
      {galleryModalOpen && activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="bg-[#101217] border border-neutral-700/80 rounded-2xl w-full max-w-4xl max-h-[92vh] flex flex-col overflow-hidden shadow-2xl relative">
            
            {/* Modal Header */}
            <div className="px-5 py-4 border-b border-neutral-800 flex items-center justify-between bg-[#14171d]">
              <div>
                <span className="text-xs font-mono text-[#00FF66] uppercase tracking-wider block">
                  {activeProject.clientName}
                </span>
                <h4 className="text-base sm:text-lg font-bold text-white">
                  {activeProject.title}
                </h4>
              </div>

              <button
                onClick={() => setGalleryModalOpen(false)}
                className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Carousel Area */}
            <div className="relative flex-grow flex items-center justify-center bg-black/60 p-2 sm:p-6 overflow-hidden min-h-[300px]">
              {(() => {
                const images = Array.isArray(activeProject.image) ? activeProject.image : [activeProject.image];
                const currentImg = images[activeImageIndex] || images[0];

                return (
                  <div className="relative w-full h-full flex items-center justify-center">
                    <img
                      src={currentImg}
                      alt={`${activeProject.title} slide ${activeImageIndex + 1}`}
                      className="max-h-[58vh] max-w-full object-contain rounded-lg shadow-lg border border-neutral-800"
                    />

                    {/* Left/Right Carousel Controls */}
                    {images.length > 1 && (
                      <>
                        <button
                          onClick={() => setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length)}
                          className="absolute left-2 sm:left-4 p-2 rounded-full bg-black/70 hover:bg-[#00FF66] text-white hover:text-black transition-all border border-neutral-700"
                          aria-label="Previous image"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => setActiveImageIndex((prev) => (prev + 1) % images.length)}
                          className="absolute right-2 sm:right-4 p-2 rounded-full bg-black/70 hover:bg-[#00FF66] text-white hover:text-black transition-all border border-neutral-700"
                          aria-label="Next image"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </>
                    )}
                  </div>
                );
              })()}
            </div>

            {/* Modal Footer: Thumbnails & Meta */}
            <div className="px-5 py-4 border-t border-neutral-800 bg-[#12151b] flex flex-col sm:flex-row items-center justify-between gap-3">
              {/* Thumbnail Strip */}
              {(() => {
                const images = Array.isArray(activeProject.image) ? activeProject.image : [activeProject.image];
                if (images.length <= 1) return <div className="text-xs font-mono text-neutral-400">Single screenshot preview</div>;

                return (
                  <div className="flex items-center gap-2 overflow-x-auto max-w-full py-1">
                    {images.map((img, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveImageIndex(i)}
                        className={`w-12 h-9 rounded overflow-hidden border-2 transition-all flex-shrink-0 ${
                          activeImageIndex === i ? 'border-[#00FF66] scale-105' : 'border-neutral-700 opacity-60 hover:opacity-100'
                        }`}
                      >
                        <img src={img} alt="" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                );
              })()}

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                {activeProject.link && (
                  <a
                    href={activeProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-neutral-800 hover:bg-neutral-700 text-xs font-mono text-white transition-colors"
                  >
                    <TechIcons.github className="w-3.5 h-3.5" />
                    <span>View Repository</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
                <button
                  onClick={() => setGalleryModalOpen(false)}
                  className="px-3.5 py-1.5 rounded bg-[#00FF66] hover:bg-[#00dd55] text-xs font-mono text-black font-semibold transition-colors"
                >
                  Done
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 10. DIRECT CONTACT MODAL */}
      {/* ========================================================================= */}
      {isContactModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-[#101217] border border-neutral-700 rounded-2xl w-full max-w-lg p-6 sm:p-8 shadow-2xl relative">
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-xs font-mono text-[#00FF66]">// Send message</span>
                <h4 className="text-xl font-bold text-white">Get in Touch with Hanif</h4>
              </div>
              <button
                onClick={() => setIsContactModalOpen(false)}
                className="p-1 rounded-lg text-neutral-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleContactSubmit} className="space-y-4 font-mono text-xs">
              <div>
                <label className="block text-neutral-400 mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex Pratama"
                  className="w-full px-3.5 py-2.5 rounded bg-[#181c24] border border-[#282d3b] text-neutral-200 focus:outline-none focus:border-[#00FF66]"
                />
              </div>

              <div>
                <label className="block text-neutral-400 mb-1">Your Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="alex@company.com"
                  className="w-full px-3.5 py-2.5 rounded bg-[#181c24] border border-[#282d3b] text-neutral-200 focus:outline-none focus:border-[#00FF66]"
                />
              </div>

              <div>
                <label className="block text-neutral-400 mb-1">Message / Project Details</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project, timeline, and requirements..."
                  className="w-full px-3.5 py-2.5 rounded bg-[#181c24] border border-[#282d3b] text-neutral-200 focus:outline-none focus:border-[#00FF66] resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsContactModalOpen(false)}
                  className="px-4 py-2 rounded text-neutral-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSending}
                  className="px-5 py-2.5 rounded bg-[#00FF66] hover:bg-[#00dd55] text-black font-bold flex items-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSending ? 'Sending...' : 'Send Message'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 11. CERTIFICATE LIGHTBOX MODAL */}
      {/* ========================================================================= */}
      {certificateModalOpen && activeCertificate && (
        <div
          onClick={() => setCertificateModalOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#101217] border border-neutral-700/80 rounded-2xl w-full max-w-5xl max-h-[92vh] flex flex-col overflow-hidden shadow-2xl relative"
          >
            {/* Modal Header */}
            <div className="px-5 py-4 border-b border-neutral-800 flex items-center justify-between bg-[#14171d]">
              <div>
                <span className="text-xs font-mono text-[#00FF66] uppercase tracking-wider block">
                  {activeCertificate.provider} &bull; {activeCertificate.date}
                </span>
                <h4 className="text-base sm:text-lg font-bold text-white">
                  {activeCertificate.title}
                </h4>
              </div>

              <button
                onClick={() => setCertificateModalOpen(false)}
                className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content / Certificate View */}
            <div className="flex min-h-[320px] flex-1 items-center justify-center overflow-y-auto bg-black/60">
              {activeCertificate.image ? (
                <img
                  src={activeCertificate.image}
                  alt={activeCertificate.title}
                  className="m-4 max-h-[72vh] max-w-full rounded-lg border border-neutral-800 object-contain shadow-2xl"
                />
              ) : activeCertificate.pdf ? (
                <iframe
                  src={activeCertificate.pdf}
                  title={`Sertifikat PDF: ${activeCertificate.title}`}
                  className="h-[72vh] min-h-[360px] w-full bg-white"
                />
              ) : (
                <div className="w-full max-w-xl aspect-[16/10] bg-gradient-to-br from-[#121620] via-[#181e2b] to-[#0f1218] border-2 border-neutral-700 rounded-xl p-6 sm:p-8 flex flex-col justify-between relative shadow-2xl overflow-hidden">
                  <div className="absolute inset-3 border border-neutral-700/60 rounded pointer-events-none" />
                  <div className="absolute inset-4 border border-dashed border-neutral-800/80 rounded pointer-events-none" />

                  {/* Header */}
                  <div className="flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-2">
                      <Award className="w-6 h-6 text-[#00FF66]" />
                      <span className="font-mono text-sm font-bold text-[#00FF66] tracking-wider uppercase">
                        {activeCertificate.provider}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-neutral-400 bg-black/40 px-3 py-1 rounded border border-neutral-800">
                      Tahun: {activeCertificate.date}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="text-center my-auto py-4 relative z-10">
                    <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-2">
                      Sertifikat Kelulusan Resmi
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2 leading-snug">
                      {activeCertificate.title}
                    </h3>
                    <p className="text-sm font-medium text-[#00FF66] mb-1">
                      {activeCertificate.topic}
                    </p>
                    <p className="text-xs font-mono text-neutral-400">
                      Diberikan kepada: <strong className="text-white">Hanif Muthiar Tsani</strong>
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between text-xs font-mono text-neutral-400 pt-3 border-t border-neutral-800 relative z-10">
                    <span>Credential ID: <strong className="text-neutral-200">{activeCertificate.credentialId || 'VERIFIED-01'}</strong></span>
                    <span className="text-[#00FF66] font-semibold">&bull; Status: Terverifikasi</span>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="flex flex-col gap-3 border-t border-neutral-800 bg-[#12151b] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-xs font-mono text-neutral-400">
                {activeCertificate.pdf ? 'Dokumen sertifikat PDF' : activeCertificate.image ? 'Gambar sertifikat aktif' : 'File sertifikat belum tersedia'}
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {activeCertificate.pdf && (
                  <>
                    <a
                      href={activeCertificate.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded border border-neutral-700 px-3 py-1.5 text-xs font-mono text-neutral-200 transition-colors hover:border-[#00FF66] hover:text-[#00FF66]"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      Buka PDF
                    </a>
                    <a
                      href={activeCertificate.pdf}
                      download
                      className="inline-flex items-center gap-2 rounded border border-neutral-700 px-3 py-1.5 text-xs font-mono text-neutral-200 transition-colors hover:border-[#00FF66] hover:text-[#00FF66]"
                    >
                      <Download className="h-3.5 w-3.5" />
                      Unduh
                    </a>
                  </>
                )}
                <button
                  onClick={() => setCertificateModalOpen(false)}
                  className="rounded bg-[#00FF66] px-4 py-1.5 text-xs font-mono font-semibold text-black transition-colors hover:bg-[#00dd55]"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}