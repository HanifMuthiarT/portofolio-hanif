// src/themes/emerald/EmeraldOverviewView.jsx
import { useState } from 'react';
import { User, GraduationCap, Code2, ChevronRight } from 'lucide-react';
import { profile, marqueeTech } from '../../data/portfolioData';
import { GithubContributionsCard } from '../../components/GithubContributionsCard';

export function EmeraldOverviewView({ lang, onNavigate, t }) {
  const bio = lang === 'id' ? profile.bioId : profile.bioEn;
  const edu = profile.education;
  const [today] = useState(() => new Date());
  const formattedDate = today.toLocaleDateString(lang === 'id' ? 'id-ID' : 'en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: profile.timeZone
  });

  return (
    <div className="emerald-overview-grid mt-4 grid grid-cols-1 items-start gap-4 lg:grid-cols-[1.15fr_0.85fr] lg:gap-6">
      {/* Left Column: About & Education */}
      <div className="space-y-6">
        {/* About Card */}
        <section className="bg-white dark:bg-gray-900 border border-gray-200/90 dark:border-gray-800 rounded-3xl p-5 sm:p-6 shadow-xs transition-colors">
          <div className="flex items-center gap-2.5 text-teal-700 dark:text-teal-400 mb-4">
            <User className="w-5 h-5 stroke-[2.2]" />
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              {lang === 'id' ? 'Tentang Saya' : 'About'}
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-[15px] leading-relaxed">
            {bio}
          </p>
        </section>

        {/* Education Card */}
        <section className="bg-white dark:bg-gray-900 border border-gray-200/90 dark:border-gray-800 rounded-3xl p-5 sm:p-6 shadow-xs transition-colors">
          <div className="flex items-center gap-2.5 text-teal-700 dark:text-teal-400 mb-4">
            <GraduationCap className="w-5 h-5 stroke-[2.2]" />
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              {lang === 'id' ? 'Pendidikan' : 'Education'}
            </h2>
          </div>
          <div className="flex items-center gap-4">
            {/* S1 Degree Badge */}
            <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-950/70 border border-teal-200/70 dark:border-teal-800 text-teal-700 dark:text-teal-300 font-extrabold text-lg flex items-center justify-center shrink-0 select-none shadow-xs">
              {edu.degree}
            </div>
            {/* Major & Institution */}
            <div className="space-y-0.5">
              <h3 className="font-bold text-gray-900 dark:text-white text-base">
                {lang === 'id' ? edu.majorId : edu.majorEn}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-[13px] leading-relaxed">
                {lang === 'id' ? edu.institutionId : edu.institutionEn} ·{' '}
                <span className="whitespace-nowrap">
                  {lang === 'id' ? edu.periodId : edu.periodEn} · GPA {edu.gpa}
                </span>
              </p>
            </div>
          </div>
        </section>

        <aside className="now-card">
          <div className="now-header">
            <div className="now-title">
              <strong>{lang === 'id' ? 'Sekarang' : 'Now'}</strong>
            </div>
            <div className="now-date">
              <span>{formattedDate}</span>
              <span className="now-dot" />
            </div>
          </div>
          <div className="now-content">
            {lang === 'id' ? 'Terbuka untuk ' : 'Currently open to '}
            <a href={`mailto:${profile.email}?subject=Full-time%20role%20enquiry`}>
              {t('full-time roles')}
            </a>
          </div>
        </aside>
      </div>

      {/* Right Column: Tech Stack Card */}
      <div className="space-y-4">
        <section className="tech-marquee-card self-start" aria-label="Tech Stack">
          <div className="tech-marquee-head">
            <div className="tech-marquee-title">
              <Code2 size={18} className="tech-marquee-icon" />
              <h2>Tech Stack</h2>
            </div>
            <button
              type="button"
              className="tech-marquee-all"
              onClick={() => onNavigate('stack')}
            >
              <span>{lang === 'id' ? 'Lihat semua' : 'View all'}</span>
              <ChevronRight size={14} />
            </button>
          </div>

          <div className="tech-marquee">
            <div className="tech-marquee-track">
              {[0, 1].map((copyIdx) => (
                <div
                  key={copyIdx}
                  className="tech-marquee-group"
                  aria-hidden={copyIdx === 1}
                >
                  {marqueeTech.map((item) => (
                    <div key={item.name} className="tech-chip">
                      <div className="tech-chip-logo">
                        <img src={item.logo} alt="" loading="lazy" width={32} height={32} />
                      </div>
                      <span>{item.name}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        <GithubContributionsCard t={t} />
      </div>
    </div>
  );
}
