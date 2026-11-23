// src/views/ExperienceView.jsx
import React, { useState } from 'react';
import { Briefcase, Calendar, ChevronDown, Check } from 'lucide-react';
import { SectionTitle } from '../components/SectionTitle';
import { experiences } from '../data/portfolioData';

function ExperienceItem({ item, index, lang, t }) {
  const [isOpen, setIsOpen] = useState(false);

  const achievements = lang === 'en' ? item.achievementsEn : item.achievements;
  const description = lang === 'en' ? item.descriptionEn : item.description;

  return (
    <article className="experience-card reveal" style={{ '--reveal-index': index }}>
      <div className="experience-image-wrap is-photo">
        <img
          className="experience-image"
          src={item.image}
          alt={`${item.role} — ${item.company}`}
          loading="lazy"
        />
      </div>

      <div className="experience-card-content">
        <h3>{item.role}</h3>

        <div className="experience-card-top">
          <div className="experience-statuses">
            <span className="experience-type">{item.type}</span>
            {item.active && (
              <span className="experience-status">
                <span className="experience-status-dot" />
                {t('Active')}
              </span>
            )}
          </div>
          <span className="experience-date">
            <Calendar size={15} />
            <span>{item.year}</span>
          </span>
        </div>

        <p className="experience-company">{item.company}</p>
        <p className="experience-description">{description}</p>

        <div className="experience-tags">
          {item.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <button
          type="button"
          className="experience-toggle"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
        >
          <span>{isOpen ? t('Hide Achievement Details') : t('View Achievement Details')}</span>
          <ChevronDown className={isOpen ? '' : 'is-closed'} size={18} />
        </button>

        <div className="experience-details" data-open={isOpen ? 'true' : undefined}>
          <div className="experience-details-inner">
            <h4>{t('KEY ACHIEVEMENTS & RESPONSIBILITIES')}</h4>
            <ul>
              {achievements.map((ach, idx) => (
                <li key={idx}>
                  <Check size={16} className="experience-check-icon" />
                  <span>{ach}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}

export function ExperienceView({ lang, t }) {
  return (
    <section className="page-section experience-page">
      <div className="experience-panel">
        <SectionTitle
          icon={<Briefcase size={22} />}
          title={t('Experience')}
          subtitle={t('ExperienceSubtitle')}
        />

        <div className="experience-list">
          {experiences.map((exp, index) => (
            <ExperienceItem
              key={exp.id}
              item={exp}
              index={index}
              lang={lang}
              t={t}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
