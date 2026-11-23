// src/views/DashboardView.jsx
import { useState, useEffect, useMemo } from 'react';
import {
  Mail,
  FileText,
  GraduationCap,
  Code2,
  ChevronRight
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '../components/SocialIcons';
import { GithubContributionsCard } from '../components/GithubContributionsCard';
import { profile, marqueeTech } from '../data/portfolioData';

export function DashboardView({ onOpenResume, onNavigate, lang, t }) {
  // Clock state
  const [time, setTime] = useState(new Date());
  const [is24H, setIs24H] = useState(false);

  // Live timer tick
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Format Jakarta time
  const formattedJakartaTime = useMemo(() => {
    return time.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: !is24H,
      timeZone: profile.timeZone
    });
  }, [time, is24H]);

  // Visitor local timezone offset check
  const visitorOffset = -time.getTimezoneOffset(); // in minutes
  const jakartaOffset = 420; // GMT+7 is +420 mins
  const isSameTimezone = visitorOffset === jakartaOffset;

  // Format Today's Date for "Now" Card
  const formattedDate = useMemo(() => {
    return time.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      timeZone: profile.timeZone
    });
  }, [time]);

  return (
    <section className="dashboard">
      {/* Top Bento Row: Hero + Time + Now */}
      <div className="dashboard-top">
        {/* Left: Hero Card */}
        <div className="hero-card">
          <div className="hero-content">
            <div className="hero-main">
              <div className="hero-name">
                <h1>{profile.name}</h1>
                <span className="hero-location">
                  {profile.city}, {profile.country}
                </span>
              </div>

              <div className="hero-description">
                <p>{lang === 'en' ? profile.bioEn : profile.bioId}</p>
              </div>

              <div className="hero-actions">
                <a
                  className="button primary"
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedinIcon size={17} />
                  <span>LinkedIn</span>
                </a>
                <a
                  className="button outline"
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <GithubIcon size={17} />
                  <span>GitHub</span>
                </a>
                <a
                  className="button outline"
                  href={`mailto:${profile.email}`}
                >
                  <Mail size={17} />
                  <span>Email</span>
                </a>
                <button
                  type="button"
                  className="button outline"
                  onClick={onOpenResume}
                >
                  <FileText size={17} />
                  <span>{t('Resume')}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Side Cards (Time & Now) */}
        <div className="dashboard-side">
          {/* Time Card */}
          <aside className="time-card">
            <div className="time-header">
              <div className="time-heading">
                <span className="time-status" />
                <strong>{t('MY TIME')}</strong>
              </div>
              <button
                type="button"
                className="time-zone"
                onClick={() => setIs24H((prev) => !prev)}
                title={`Switch to ${is24H ? '12-hour' : '24-hour'} format`}
              >
                {is24H ? '12H' : '24H'}
              </button>
            </div>
            <div className="time-main">{formattedJakartaTime}</div>
            <div className="time-location">{profile.gmtOffset} · {profile.country}</div>

            <div className="time-divider" />
            {isSameTimezone ? (
              <div className="time-location" translate="no">
                {t('Same as your time')}
              </div>
            ) : (
              <>
                <div className="your-time-label">{t('YOUR TIME')}</div>
                <div className="your-time">
                  {time.toLocaleTimeString('en-US', {
                    hour: 'numeric',
                    minute: '2-digit',
                    hour12: !is24H
                  })}
                </div>
              </>
            )}
          </aside>

          {/* Now Card */}
          <aside className="now-card">
            <div className="now-header">
              <div className="now-title">
                <strong>{t('Now')}</strong>
              </div>
              <div className="now-date">
                <span>{formattedDate}</span>
                <span className="now-dot" />
              </div>
            </div>
            <div className="now-content">
              {lang === 'en' ? (
                <>
                  Currently open to{' '}
                  <a href={`mailto:${profile.email}?subject=Full-time%20role%20enquiry`}>
                    full-time roles
                  </a>
                </>
              ) : (
                <>
                  Terbuka untuk{' '}
                  <a href={`mailto:${profile.email}?subject=Full-time%20role%20enquiry`}>
                    pekerjaan full-time
                  </a>
                </>
              )}
            </div>
          </aside>
        </div>
      </div>

      {/* Bottom Showcase: (Education + Tech Marquee) and GitHub Contributions */}
      <div className="dashboard-showcase">
        {/* Left Column: Education + Tech Marquee */}
        <div className="dashboard-showcase-left">
          {/* Education Card */}
          <article className="mini-card education-narrow">
            <div className="mini-head">
              <GraduationCap size={17} className="mini-icon" />
              <span>{t('Education')}</span>
            </div>
            <div className="mini-body">
              <div className="mini-value">{profile.education.degree}</div>
              <div className="mini-side">
                <p className="mini-caption">
                  {lang === 'en'
                    ? profile.education.majorEn
                    : profile.education.majorId}
                </p>
                <p className="mini-meta">
                  <span>
                    {lang === 'en'
                      ? profile.education.institutionEn
                      : profile.education.institutionId}
                  </span>
                  {' · '}
                  <span className="mini-nowrap">
                    {lang === 'en'
                      ? profile.education.periodEn
                      : profile.education.periodId}
                  </span>
                  {' · '}
                  <span className="mini-nowrap">
                    GPA: {profile.education.gpa}
                  </span>
                </p>
              </div>
            </div>
          </article>

          {/* Tech Stack Marquee Card */}
          <section className="tech-marquee-card" aria-label="Tech Stack">
            <div className="tech-marquee-head">
              <div className="tech-marquee-title">
                <Code2 size={18} className="tech-marquee-icon" />
                <h2>{t('Tech Stack')}</h2>
              </div>
              <button
                type="button"
                className="tech-marquee-all"
                onClick={() => onNavigate('stack')}
              >
                <span>{t('View all')}</span>
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
                          <img
                            src={item.logo}
                            alt=""
                            loading="lazy"
                            width={32}
                            height={32}
                          />
                        </div>
                        <span>{item.name}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Right Column: GitHub Contributions Card */}
        <div className="dashboard-showcase-right">
          <GithubContributionsCard t={t} />
        </div>
      </div>
    </section>
  );
}
