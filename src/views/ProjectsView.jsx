// src/views/ProjectsView.jsx
import React, { useState, useMemo } from 'react';
import { FolderGit2, ExternalLink, Search, X } from 'lucide-react';
import { GithubIcon } from '../components/SocialIcons';
import { SectionTitle } from '../components/SectionTitle';
import { projects, profile } from '../data/portfolioData';

export function ProjectsView({ onSelectProject, lang, t }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = useMemo(() => {
    const list = Array.from(new Set(projects.map((p) => p.category)));
    return ['All', ...list];
  }, []);

  const filteredProjects = useMemo(() => {
    return projects.filter((item) => {
      if (selectedCategory !== 'All' && item.category !== selectedCategory) {
        return false;
      }
      const q = searchQuery.trim().toLowerCase();
      if (!q) return true;
      const combined = `${item.title} ${item.titleEn} ${item.description} ${item.descriptionEn} ${item.tags.join(' ')} ${item.category}`.toLowerCase();
      return combined.includes(q);
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section className="page-section projects-page">
      <div className="projects-panel">
        {/* Header */}
        <div className="projects-head">
          <SectionTitle
            icon={<FolderGit2 size={22} />}
            title={t('Projects')}
            subtitle={t('ProjectsSubtitle').replace('{count}', projects.length)}
          />
          <a
            className="projects-github"
            href={`https://github.com/${profile.githubUsername}?tab=repositories`}
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon size={16} />
            <span>@{profile.githubUsername}</span>
            <ExternalLink size={13} />
          </a>
        </div>

        {/* Search Bar */}
        <div className="project-search">
          <Search size={17} />
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t('Search projects...')}
            aria-label="Search projects"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              aria-label={t('Clear search')}
            >
              <X size={15} />
            </button>
          )}
        </div>

        {/* Toolbar with Categories & Count */}
        <div className="project-toolbar">
          <div className="project-filters" role="tablist" aria-label="Filter projects by category">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`project-filter ${isActive ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat === 'All' ? t('All') : cat}
                </button>
              );
            })}
          </div>

          <p className="projects-count">
            Showing {filteredProjects.length} of {projects.length} projects
            {selectedCategory !== 'All' ? ` · ${selectedCategory}` : ''}
          </p>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="projects-empty">
            <Search size={22} />
            <h3>{t('No projects found')}</h3>
            <p>{t('Try a different keyword or category.')}</p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="projects-grid">
            {filteredProjects.map((p, index) => (
              <article
                key={p.id}
                className="project-card reveal"
                style={{ '--reveal-index': Math.min(index, 11) }}
                onClick={() => onSelectProject(p)}
                tabIndex={0}
                role="button"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    if (!e.target?.closest('a, button')) {
                      e.preventDefault();
                      onSelectProject(p);
                    }
                  }
                }}
              >
                <div className="project-shot-wrap">
                  <img
                    className={p.shotFit === 'contain' ? 'project-shot is-contain' : 'project-shot'}
                    src={p.images?.[0]}
                    alt={p.title}
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="project-category">{p.category}</span>
                </div>

                <div className="project-card-body">
                  <h3>{lang === 'en' ? (p.titleEn || p.title) : p.title}</h3>
                  <p>{lang === 'en' ? (p.descriptionEn || p.description) : p.description}</p>

                  <div className="tags">
                    {p.tags.slice(0, 4).map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                    {p.tags.length > 4 && (
                      <span>+{p.tags.length - 4}</span>
                    )}
                  </div>

                  <div className="project-footer">
                    <span className="project-lang">
                      <i style={{ background: p.languageColor || 'var(--accent)' }} />
                      <span>{p.language}</span>
                    </span>

                    {p.link && (
                      <a
                        className="project-open"
                        href={p.link}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <GithubIcon size={13} />
                        <span>Repository</span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
