// src/themes/emerald/EmeraldLayout.jsx
import { useState } from 'react';
import { EmeraldHeader } from './EmeraldHeader';
import { Sidebar } from '../../components/Sidebar';
import { profile } from '../../data/portfolioData';

export function EmeraldLayout({ children, lang, ...headerProps }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="emerald-shell">
      <a
        href="#emerald-main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-teal-800 focus:shadow-md"
      >
        {lang === 'id' ? 'Lompat ke konten' : 'Skip to content'}
      </a>

      <Sidebar
        activeTab={headerProps.activeTab}
        onNavigate={headerProps.onNavigate}
        t={headerProps.t}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="emerald-page-content mx-auto flex min-h-[100dvh] w-full max-w-[1713px] flex-col px-4 pt-2 sm:px-8 sm:pt-4 lg:px-12">
        <EmeraldHeader
          lang={lang}
          sidebarOpen={sidebarOpen}
          onOpenSidebar={() => setSidebarOpen(true)}
          {...headerProps}
        />

        <main id="emerald-main" tabIndex={-1} className="flex-1 focus:outline-none">
          {children}
        </main>

        <footer className="py-4 text-center text-xs text-gray-500 dark:text-gray-400">
          <span>
            © {new Date().getFullYear()} {profile.name}.{' '}
            {lang === 'id' ? 'Hak cipta dilindungi.' : 'All rights reserved.'}
          </span>
        </footer>
      </div>
    </div>
  );
}
