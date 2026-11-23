// src/views/AwardsView.jsx
import React from 'react';
import { Award, Calendar, ShieldCheck } from 'lucide-react';
import { SectionTitle } from '../components/SectionTitle';
import { awards } from '../data/portfolioData';

export function AwardsView({ onSelectCertificate, t }) {
  return (
    <section className="page-section awards-page">
      <div className="awards-panel">
        <SectionTitle
          icon={<Award size={22} />}
          title={t('Awards & Certs')}
          subtitle={t('AwardsSubtitle')}
        />

        <div className="awards-section">
          <div className="awards-grid">
            {awards.map((cert, index) => (
              <article
                key={cert.id}
                className="award-card reveal"
                style={{ '--reveal-index': Math.min(index, 11) }}
                onClick={() => onSelectCertificate(cert)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelectCertificate(cert);
                  }
                }}
              >
                <div className="award-image-wrap">
                  <button
                    type="button"
                    className="award-image"
                    onClick={() => onSelectCertificate(cert)}
                    aria-label={`View ${cert.title} image`}
                  >
                    <img
                      src={cert.image}
                      alt={cert.title}
                      loading="lazy"
                      decoding="async"
                    />
                  </button>
                  <span className="award-badge">
                    <ShieldCheck size={21} />
                  </span>
                </div>

                <div className="award-card-content">
                  <div className="award-meta">
                    <span>CERTS</span>
                    <i />
                    <Calendar size={14} />
                    <span className="award-date">{cert.date}</span>
                  </div>

                  <h3>{cert.title}</h3>
                  <p>{cert.issuer}</p>

                  <div className="award-divider" />

                  <div className="award-organizer">
                    <span>CREDENTIAL ID</span>
                    <strong>{cert.credentialId}</strong>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
