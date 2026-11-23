import {
  Award,
  Briefcase,
  Code2,
  FolderGit2,
  LayoutDashboard,
  Mail
} from 'lucide-react';
import { profile } from '../data/portfolioData';

const navItems = [
  { id: 'dashboard', labelKey: 'Dashboard', icon: LayoutDashboard },
  { id: 'experience', labelKey: 'Experience', icon: Briefcase },
  { id: 'projects', labelKey: 'Projects', icon: FolderGit2 },
  { id: 'certificates', labelKey: 'Awards & Certs', icon: Award },
  { id: 'stack', labelKey: 'Tech Stack', icon: Code2 },
  { id: 'contact', labelKey: 'Contact', icon: Mail }
];

export function Sidebar({ activeTab, onNavigate, t, isOpen, onClose }) {
  return (
    <>
      <button
        type="button"
        className={`sidebar-overlay ${isOpen ? 'is-visible' : ''}`}
        onClick={onClose}
        aria-label={t('Close menu')}
        aria-hidden={!isOpen}
        tabIndex={isOpen ? 0 : -1}
      />

      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="menu-label">{t('MENU')}</div>
        <nav className="nav" aria-label={t('Main navigation')}>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                className={`nav-item ${isActive ? 'active' : ''}`}
                onClick={() => {
                  onNavigate(item.id);
                  onClose();
                }}
                aria-current={isActive ? 'page' : undefined}
              >
                <Icon size={18} strokeWidth={1.8} />
                <span>{t(item.labelKey)}</span>
              </button>
            );
          })}
        </nav>

        <div className="sidebar-footer">
          <strong>{t('Designed & built by')}</strong>
          <span>{profile.name}</span>
          <small>© {new Date().getFullYear()} {t('All Rights Reserved.')}</small>
        </div>
      </aside>
    </>
  );
}
