// src/themes/emerald/EmeraldHeader.jsx
import { useState } from 'react';
import { FileText, MapPin, Moon, Sun, Globe, Menu } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../../components/SocialIcons';
import { profile } from '../../data/portfolioData';

export function EmeraldHeader({
  activeTab,
  onNavigate,
  theme,
  onToggleTheme,
  lang,
  onToggleLang,
  onOpenResume,
  onOpenSidebar,
  sidebarOpen
}) {
  const [showPhoto, setShowPhoto] = useState(true);
  const navItems = [
    { id: 'dashboard', label: lang === 'id' ? 'Ringkasan' : 'Overview' },
    { id: 'experience', label: lang === 'id' ? 'Pengalaman' : 'Experience' },
    { id: 'projects', label: lang === 'id' ? 'Proyek' : 'Projects' },
    { id: 'certificates', label: lang === 'id' ? 'Sertifikat' : 'Certificates' },
    { id: 'stack', label: 'Tech Stack' },
    { id: 'contact', label: lang === 'id' ? 'Kontak' : 'Contact' }
  ];

  return (
    <header className="bg-white dark:bg-gray-900 rounded-2xl sm:rounded-3xl border border-gray-200/90 dark:border-gray-800 shadow-xs overflow-hidden transition-colors">
      {/* Patterned Emerald Banner */}
      <div className="relative h-24 sm:h-32 emerald-banner-bg emerald-banner-pattern flex items-start justify-end p-3 sm:p-6 select-none">
        {/* Banner Controls */}
        <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-end z-10">
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white text-[11px] sm:text-xs font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span>
              {lang === 'id' ? 'Tersedia untuk peluang' : 'Available for opportunities'}
            </span>
          </div>

          {/* Language Switcher */}
          <button
            type="button"
            onClick={() => onToggleLang(lang === 'en' ? 'id' : 'en')}
            className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white text-[11px] sm:text-xs font-semibold hover:bg-black/60 transition-colors"
            title={lang === 'id' ? 'Ganti ke Bahasa Inggris' : 'Switch to Indonesian'}
            aria-label="Toggle language"
          >
            <Globe className="w-3.5 h-3.5 text-emerald-300" />
            <span>{lang.toUpperCase()}</span>
          </button>

          {/* Theme Mode Toggle (Moon / Sun) */}
          <button
            type="button"
            onClick={onToggleTheme}
            className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-black/60 transition-colors"
            title={theme === 'dark' ? 'Switch to Light mode' : 'Switch to Dark mode'}
            aria-label="Toggle theme mode"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-300" />
            ) : (
              <Moon className="w-4 h-4 text-slate-100" />
            )}
          </button>

          <button
            type="button"
            className="mobile-sidebar-toggle"
            onClick={onOpenSidebar}
            aria-label={lang === 'id' ? 'Buka menu' : 'Open menu'}
            aria-expanded={sidebarOpen}
          >
            <Menu className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Profile Info Area */}
      <div className="px-5 sm:px-8">
        <div className="flex flex-wrap items-start gap-x-4 gap-y-2">
          <div className="flex items-start gap-3 sm:gap-4 min-w-0">
            {/* Avatar overlapping banner */}
            <button
              type="button"
              onClick={() => setShowPhoto((prev) => !prev)}
              className="relative group cursor-pointer shrink-0 rounded-full -mt-11 sm:-mt-14 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
              title="Klik untuk beralih antara inisial HM dan foto"
              aria-label={
                showPhoto
                  ? (lang === 'id' ? 'Tampilkan inisial' : 'Show initials')
                  : (lang === 'id' ? 'Tampilkan foto' : 'Show photo')
              }
            >
              <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full ring-4 ring-white dark:ring-gray-900 border-2 border-emerald-100 dark:border-emerald-800 bg-[#ccfbf1] dark:bg-emerald-950 flex items-center justify-center shadow-md overflow-hidden transition-transform group-hover:scale-105">
                {showPhoto ? (
                  <img
                    src={profile.avatar}
                    alt={profile.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-[#0f766e] dark:text-emerald-300 font-extrabold text-xl sm:text-3xl tracking-tight select-none">
                    HM
                  </span>
                )}
              </div>
              <span
                className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white dark:border-gray-900"
                title="Online"
              />
            </button>

            {/* Profile Name & Title */}
            <div className="space-y-1 min-w-0 pt-2 sm:pt-3">
              <h1 className="text-[22px] sm:text-[28px] font-extrabold text-gray-900 dark:text-white tracking-tight leading-tight">
                {profile.name}
              </h1>
              <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap text-xs sm:text-sm">
                <span className="font-semibold text-teal-700 dark:text-teal-400">
                  {profile.role}
                </span>
                <span className="text-gray-300 dark:text-gray-700">·</span>
                <span className="inline-flex items-center gap-1 text-gray-500 dark:text-gray-400">
                  <MapPin className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                  <span className="truncate">
                    {profile.city}, {profile.country}
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-2.5 flex-wrap sm:ml-auto pt-2 sm:pt-3">
            <button
              type="button"
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl bg-[#0e746b] hover:bg-[#0b5c54] text-white font-medium text-[13px] sm:text-sm transition-all shadow-xs active:scale-95"
            >
              <FileText className="w-4 h-4" />
              <span>Resume</span>
            </button>

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl bg-white dark:bg-gray-800 border border-gray-300/90 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-200 font-medium text-[13px] sm:text-sm transition-all active:scale-95"
            >
              <GithubIcon size={16} />
              <span>GitHub</span>
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl bg-white dark:bg-gray-800 border border-gray-300/90 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-200 font-medium text-[13px] sm:text-sm transition-all active:scale-95"
            >
              <LinkedinIcon size={16} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

      </div>

      <nav className="emerald-desktop-nav" aria-label="Main navigation">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onNavigate(item.id)}
              aria-current={isActive ? 'page' : undefined}
              className={`py-3 text-sm font-medium transition-colors whitespace-nowrap ${
                isActive
                  ? 'emerald-tab-active'
                  : 'text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200'
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </nav>
    </header>
  );
}
