// src/views/TechStackView.jsx
import { useState } from 'react';
import { Code2, Layout, Server, Smartphone, Cloud } from 'lucide-react';
import { SectionTitle } from '../components/SectionTitle';
import { techStackCategories } from '../data/portfolioData';

const categoryIcons = {
  frontend: Layout,
  backend: Server,
  'mobile-ai': Smartphone,
  'cloud-tools': Cloud
};

export function TechStackView({ lang, t }) {
  const [activeCategoryId, setActiveCategoryId] = useState('frontend');

  const activeCategory =
    techStackCategories.find((c) => c.id === activeCategoryId) ||
    techStackCategories[0];

  const handleNextCategory = () => {
    const currentIdx = techStackCategories.findIndex((c) => c.id === activeCategoryId);
    const nextIdx = (currentIdx + 1) % techStackCategories.length;
    setActiveCategoryId(techStackCategories[nextIdx].id);
  };

  return (
    <section className="page-section techstack-page">
      <div className="techstack-panel">
        <SectionTitle
          icon={<Code2 size={22} />}
          title={t('Tech Stack')}
          subtitle={t('TechStackSubtitle')}
        />

        {/* Category Tabs */}
        <div className="techstack-tabs" role="tablist" aria-label="Technology categories">
          {techStackCategories.map((cat) => {
            const Icon = categoryIcons[cat.id] || Code2;
            const isActive = cat.id === activeCategoryId;
            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`techstack-tab ${isActive ? 'active' : ''}`}
                onClick={() => setActiveCategoryId(cat.id)}
              >
                <Icon size={19} strokeWidth={2} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Grid */}
        <div className="techstack-grid" key={activeCategory.id}>
          {activeCategory.items.map((tech, n) => (
            <article
              key={tech.name}
              className="techstack-card reveal"
              style={{ '--reveal-index': Math.min(n, 11) }}
            >
              <div className={`techstack-mark ${tech.markClass || ''}`} aria-hidden="true">
                <img
                  src={tech.logo}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  width={34}
                  height={34}
                />
              </div>
              <h2>{tech.name}</h2>
              <p>
                {lang === 'id' && tech.descriptionId
                  ? tech.descriptionId
                  : tech.description}
              </p>
            </article>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="techstack-pagination" aria-label="Active category">
          {techStackCategories.map((cat) => (
            <span
              key={cat.id}
              className={cat.id === activeCategoryId ? 'active' : ''}
              onClick={() => setActiveCategoryId(cat.id)}
            />
          ))}
        </div>

        {/* Hint Button */}
        <button
          type="button"
          className="techstack-hint"
          onClick={handleNextCategory}
        >
          <span>›</span>
          Click a category to explore different skills
        </button>
      </div>
    </section>
  );
}
