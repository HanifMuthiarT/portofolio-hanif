// src/App.jsx
import { useState, useEffect, useCallback } from 'react';
import { EmeraldLayout } from './themes/emerald/EmeraldLayout';
import { EmeraldOverviewView } from './themes/emerald/EmeraldOverviewView';
import { EmeraldExperienceView } from './themes/emerald/EmeraldExperienceView';
import { EmeraldProjectsView } from './themes/emerald/EmeraldProjectsView';
import { EmeraldCertificatesView } from './themes/emerald/EmeraldCertificatesView';
import { EmeraldContactView } from './themes/emerald/EmeraldContactView';
import { TechStackView } from './views/TechStackView';
import { LiveChat } from './components/LiveChat';
import { ResumeModal } from './components/ResumeModal';
import { ProjectModal } from './components/ProjectModal';
import { CertificateModal } from './components/CertificateModal';
import { translations } from './data/translations';

// Map URL path to tab id
const pathToTab = {
  '/': 'dashboard',
  '/overview': 'dashboard',
  '/dashboard': 'dashboard',
  '/experience': 'experience',
  '/projects': 'projects',
  '/certificates': 'certificates',
  '/tech-stack': 'stack',
  '/contact': 'contact',
  // Legacy paths
  '/awards-certs': 'certificates'
};

const tabToPath = {
  dashboard: '/',
  experience: '/experience',
  projects: '/projects',
  stack: '/tech-stack',
  certificates: '/certificates',
  contact: '/contact'
};

function getTabFromLocation() {
  const hash = window.location.hash.replace(/^#/, '');
  if (hash) {
    const clean = hash.startsWith('/') ? hash : `/${hash}`;
    if (pathToTab[clean]) return pathToTab[clean];
  }
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  return pathToTab[path] || 'dashboard';
}

export default function App() {
  const [activeTab, setActiveTab] = useState(getTabFromLocation);
  const [isLoading, setIsLoading] = useState(true);

  // Theme state (light default, saved choice wins)
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('portfolio-theme');
      if (saved === 'light' || saved === 'dark') return saved;
    } catch {
      /* localStorage can be blocked; fall back to light */
    }
    return 'light';
  });

  // Language state
  const [lang, setLang] = useState(() => {
    try {
      const saved = localStorage.getItem('portfolio-lang');
      if (saved === 'id' || saved === 'en') return saved;
    } catch {
      /* ignore */
    }
    return 'en';
  });

  // Modals
  const [resumeOpen, setResumeOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    const timer = window.setTimeout(
      () => setIsLoading(false),
      prefersReducedMotion ? 180 : 1150
    );
    return () => window.clearTimeout(timer);
  }, []);

  // Translation helper for shared modals / chat widget
  const t = useCallback(
    (key) => {
      const dict = translations[lang] || translations.en;
      return dict[key] || key;
    },
    [lang]
  );

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.setAttribute('data-layout', 'emerald');
    try {
      localStorage.setItem('portfolio-theme', theme);
    } catch {
      /* ignore */
    }
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute('lang', lang);
    try {
      localStorage.setItem('portfolio-lang', lang);
    } catch {
      /* ignore */
    }
  }, [lang]);

  // Keep the UI in sync with back/forward navigation and direct hash links
  useEffect(() => {
    const handleLocationChange = () => setActiveTab(getTabFromLocation());

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const handleNavigate = (tabId) => {
    if (!tabToPath[tabId]) return;
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    try {
      window.history.pushState({ tab: tabId }, '', `#${tabToPath[tabId]}`);
    } catch {
      window.location.hash = tabToPath[tabId];
    }
  };

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <>
      {isLoading && (
        <div
          className="portfolio-loading-screen"
          role="status"
          aria-live="polite"
          aria-label={lang === 'id' ? 'Memuat portofolio' : 'Loading portfolio'}
        >
          <div className="portfolio-loader-mark">HM</div>
          <span className="portfolio-loader-name">Hanif Muthiar Tsani</span>
          <span className="portfolio-loader-track" aria-hidden="true">
            <span />
          </span>
        </div>
      )}

      <EmeraldLayout
        lang={lang}
        t={t}
        activeTab={activeTab}
        onNavigate={handleNavigate}
        theme={theme}
        onToggleTheme={handleToggleTheme}
        onToggleLang={setLang}
        onOpenResume={() => setResumeOpen(true)}
      >
        <div className="page-swap" key={activeTab}>
          {activeTab === 'dashboard' && (
            <EmeraldOverviewView lang={lang} onNavigate={handleNavigate} t={t} />
          )}

          {activeTab === 'experience' && <EmeraldExperienceView lang={lang} />}

          {activeTab === 'projects' && (
            <EmeraldProjectsView
              onSelectProject={setSelectedProject}
              lang={lang}
            />
          )}

          {activeTab === 'stack' && <TechStackView lang={lang} t={t} />}

          {activeTab === 'certificates' && (
            <EmeraldCertificatesView
              onSelectCertificate={setSelectedCertificate}
              lang={lang}
            />
          )}

          {activeTab === 'contact' && <EmeraldContactView lang={lang} />}
        </div>
      </EmeraldLayout>

      {/* Floating Live Chat Widget */}
      <LiveChat t={t} lang={lang} />

      {/* Modals */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
        t={t}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        lang={lang}
        t={t}
      />

      <CertificateModal
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
        t={t}
      />
    </>
  );
}
