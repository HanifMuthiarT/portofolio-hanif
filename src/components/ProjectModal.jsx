// src/components/ProjectModal.jsx
import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export function ProjectModal({ project, onClose, lang, t }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    setActiveImageIndex(0);
  }, [project]);

  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleClose();
      } else if (e.key === 'ArrowRight' && project.images?.length > 1) {
        setActiveImageIndex((prev) => (prev + 1) % project.images.length);
      } else if (e.key === 'ArrowLeft' && project.images?.length > 1) {
        setActiveImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
      }
    };

    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project]);

  if (!project) return null;

  const handleClose = () => {
    setIsLeaving(true);
    setTimeout(() => {
      setIsLeaving(false);
      onClose();
    }, 180);
  };

  const images = project.images || [];
  const currentImg = images[activeImageIndex] || images[0];

  return (
    <div
      className={`project-modal ${isLeaving ? 'is-leaving' : ''}`}
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
    >
      <button
        type="button"
        className="project-modal-close"
        onClick={handleClose}
        aria-label="Close"
      >
        <X size={20} />
      </button>

      <div
        className={`project-modal-panel ${isLeaving ? 'is-leaving' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Stage / Main Image */}
        <div className="project-modal-stage">
          <img
            src={currentImg}
            alt={project.title}
            className="project-modal-image"
          />

          {images.length > 1 && (
            <>
              <button
                type="button"
                className="project-modal-nav prev"
                onClick={() =>
                  setActiveImageIndex(
                    (prev) => (prev - 1 + images.length) % images.length
                  )
                }
                aria-label="Previous image"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                className="project-modal-nav next"
                onClick={() =>
                  setActiveImageIndex((prev) => (prev + 1) % images.length)
                }
                aria-label="Next image"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}
        </div>

        {/* Thumbnails if multiple */}
        {images.length > 1 && (
          <div className="project-modal-thumbs">
            {images.map((img, i) => (
              <button
                key={i}
                type="button"
                className={`project-modal-thumb ${
                  i === activeImageIndex ? 'active' : ''
                }`}
                onClick={() => setActiveImageIndex(i)}
                aria-label={`Thumbnail ${i + 1}`}
              >
                <img src={img} alt="" loading="lazy" />
              </button>
            ))}
          </div>
        )}

        {/* Info */}
        <div className="project-modal-info">
          <div className="project-modal-top">
            <div>
              <span className="project-category">{project.category}</span>
              <h3>{lang === 'en' ? (project.titleEn || project.title) : project.title}</h3>
            </div>
          </div>

          <p>{lang === 'en' ? (project.descriptionEn || project.description) : project.description}</p>

          <div className="tags">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>

        {/* Foot actions */}
        <div className="project-modal-foot">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="button outline"
            >
              <GithubIcon size={16} />
              <span>{t('View Code')}</span>
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="button primary"
            >
              <ExternalLink size={16} />
              <span>{t('Live Demo')}</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
