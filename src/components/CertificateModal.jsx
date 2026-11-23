// src/components/CertificateModal.jsx
import React, { useEffect, useState } from 'react';
import { X, ExternalLink } from 'lucide-react';

export function CertificateModal({ certificate, onClose, t }) {
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    if (!certificate) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') handleClose();
    };

    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [certificate]);

  if (!certificate) return null;

  const handleClose = () => {
    setIsLeaving(true);
    setTimeout(() => {
      setIsLeaving(false);
      onClose();
    }, 180);
  };

  return (
    <div
      className={`award-modal ${isLeaving ? 'is-leaving' : ''}`}
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
    >
      <button
        type="button"
        className="award-modal-close"
        onClick={handleClose}
        aria-label="Close"
      >
        <X size={22} />
      </button>

      <div
        className={`award-modal-panel ${isLeaving ? 'is-leaving' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="award-modal-stage">
          <img
            src={certificate.image}
            alt={certificate.title}
            className="award-modal-image"
          />
        </div>

        <div className="award-modal-caption">
          <h3>{certificate.title}</h3>
          <p>{certificate.subtitle}</p>
          <p style={{ marginTop: '6px', fontSize: '12px', color: 'var(--text-tertiary)' }}>
            {t('Credential ID')}: <strong>{certificate.credentialId}</strong>
          </p>

          {certificate.pdf && (
            <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'center' }}>
              <a
                href={certificate.pdf}
                target="_blank"
                rel="noreferrer"
                className="button primary"
                download
              >
                <ExternalLink size={15} />
                <span>{t('Verify Certificate')}</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
