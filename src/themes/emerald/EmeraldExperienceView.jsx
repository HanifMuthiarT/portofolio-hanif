import { useState } from 'react';
import { Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import { experiences } from '../../data/portfolioData';

export function EmeraldExperienceView({ lang }) {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <section className="emerald-experience-page mt-6">
      <header className="emerald-experience-heading">
        <h2>{lang === 'id' ? 'Pengalaman' : 'Experience'}</h2>
        <span>
          <strong>{experiences.length}</strong>{' '}
          {lang === 'id' ? 'posisi' : 'positions'}
        </span>
      </header>

      <div className="emerald-experience-list">
        {experiences.map((experience) => {
          const isExpanded = expandedId === experience.id;
          const achievements =
            lang === 'id' ? experience.achievements : experience.achievementsEn;
          const visibleAchievements = isExpanded
            ? achievements
            : achievements.slice(0, 2);

          return (
            <div className="emerald-experience-item" key={experience.id}>
              <div className="emerald-experience-rail" aria-hidden="true">
                <div className="emerald-experience-mark">
                  <img src={experience.image} alt="" loading="lazy" />
                </div>
              </div>

              <article className="emerald-experience-content">
                <div className="emerald-experience-title">
                  <h3>{experience.role}</h3>
                  {experience.active && (
                    <span className="emerald-experience-current">
                      <span />
                      {lang === 'id' ? 'Sekarang' : 'Present'}
                    </span>
                  )}
                </div>

                <p className="emerald-experience-company">
                  <strong>{experience.company}</strong>
                  <span>·</span>
                  <span>{experience.type}</span>
                </p>

                <p className="emerald-experience-date">
                  <Calendar size={15} aria-hidden="true" />
                  <span>{experience.year}</span>
                </p>

                <p className="emerald-experience-summary">
                  {lang === 'id'
                    ? experience.description
                    : experience.descriptionEn}
                </p>

                <ul
                  id={`experience-achievements-${experience.id}`}
                  className="emerald-experience-achievements"
                >
                  {visibleAchievements.map((achievement) => (
                    <li key={achievement}>{achievement}</li>
                  ))}
                </ul>

                {achievements.length > 2 && (
                  <button
                    type="button"
                    className="emerald-experience-more"
                    onClick={() =>
                      setExpandedId(isExpanded ? null : experience.id)
                    }
                    aria-expanded={isExpanded}
                    aria-controls={`experience-achievements-${experience.id}`}
                  >
                    {isExpanded
                      ? (lang === 'id' ? 'Lihat lebih sedikit' : 'See less')
                      : (lang === 'id' ? 'Lihat selengkapnya' : 'See more')}
                    {isExpanded ? (
                      <ChevronUp size={16} aria-hidden="true" />
                    ) : (
                      <ChevronDown size={16} aria-hidden="true" />
                    )}
                  </button>
                )}

                <div className="emerald-experience-tags">
                  {experience.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            </div>
          );
        })}
      </div>
    </section>
  );
}
