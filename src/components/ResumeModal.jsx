// src/components/ResumeModal.jsx
import { useCallback, useEffect, useState } from 'react';
import { FileText, Download, X } from 'lucide-react';
import { profile } from '../data/portfolioData';

export function ResumeModal({ isOpen, onClose, t }) {
  const [isLeaving, setIsLeaving] = useState(false);
  const handleClose = useCallback(() => {
    setIsLeaving(true);
    window.setTimeout(() => {
      setIsLeaving(false);
      onClose();
    }, 200);
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleClose();
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
  }, [isOpen, handleClose]);

  if (!isOpen) return null;

  return (
    <div
      className={`resume-modal ${isLeaving ? 'is-leaving' : ''}`}
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-label="Preview resume"
    >
      <div
        className={`resume-modal-panel ${isLeaving ? 'is-leaving' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="resume-modal-header">
          <div className="resume-modal-title">
            <span className="resume-modal-title-icon">
              <FileText size={18} />
            </span>
            <div>
              <h3>Hanif Muthiar Tsani - CV</h3>
              <p>Secure Document Viewer</p>
            </div>
          </div>
          <div className="resume-modal-actions">
            <a
              className="resume-modal-download"
              href={profile.resumePdf}
              download="Hanif Muthiar Tsani - CV.pdf"
            >
              <Download size={15} />
              <span>{t('Download PDF')}</span>
            </a>
            <span className="resume-modal-divider" />
            <button
              type="button"
              className="resume-modal-close"
              onClick={handleClose}
              aria-label={t('Close preview')}
            >
              <X size={19} />
            </button>
          </div>
        </div>
        <div className="resume-modal-frame">
          <iframe
            src={`${profile.resumePdf}#toolbar=1&navpanes=1&view=FitH`}
            title={`${profile.name} Resume`}
          />
        </div>
      </div>
    </div>
  );
}
