// src/views/ContactView.jsx
import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { LinkedinIcon, GithubIcon, WhatsAppIcon } from '../components/SocialIcons';
import { SectionTitle } from '../components/SectionTitle';
import { profile } from '../data/portfolioData';

export function ContactView({ lang, t }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;

    // Direct mailto bridge
    const mailtoSubject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.open(`mailto:${profile.email}?subject=${mailtoSubject}&body=${mailtoBody}`);

    setSent(true);
    setTimeout(() => {
      setSent(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section className="page-section contact-page">
      <div className="contact-panel">
        <SectionTitle
          icon={<Mail size={22} />}
          title={t('Contact')}
          subtitle={t('ContactSubtitle')}
        />

        {/* Contact Info Grid */}
        <div className="contact-info-grid">
          {/* Email Card */}
          <a
            className="contact-info-card reveal"
            style={{ '--reveal-index': 0 }}
            href={`mailto:${profile.email}`}
          >
            <span className="contact-icon contact-icon-email">
              <Mail size={18} />
            </span>
            <span className="contact-info-text">
              <small>{t('Email')}</small>
              <strong>{profile.email}</strong>
            </span>
          </a>

          {/* Location Card */}
          <div
            className="contact-info-card reveal"
            style={{ '--reveal-index': 1 }}
          >
            <span className="contact-icon contact-icon-location">
              <MapPin size={18} />
            </span>
            <span className="contact-info-text">
              <strong>{profile.city}, {profile.province}</strong>
              <small translate="no">{profile.country} · {profile.gmtOffset}</small>
            </span>
          </div>
        </div>

        {/* Social Media Card */}
        <section className="contact-social-card reveal" style={{ '--reveal-index': 2 }}>
          <h2>{t('Social Media')}</h2>
          <div className="contact-social-list">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="contact-social-item"
            >
              <span className="contact-social-icon linkedin">
                <LinkedinIcon size={17} />
              </span>
              <span>
                <strong>LinkedIn</strong>
                <small>/in/hanif-muthiar-tsani</small>
              </span>
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="contact-social-item"
            >
              <span className="contact-social-icon github">
                <GithubIcon size={17} />
              </span>
              <span>
                <strong>GitHub</strong>
                <small>@{profile.githubUsername}</small>
              </span>
            </a>

            <a
              href={profile.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="contact-social-item"
            >
              <span className="contact-social-icon whatsapp">
                <WhatsAppIcon size={17} />
              </span>
              <span>
                <strong>WhatsApp</strong>
                <small>{profile.phone}</small>
              </span>
            </a>
          </div>
        </section>

        {/* Availability Banner */}
        <section className="contact-availability reveal" style={{ '--reveal-index': 3 }}>
          <div className="availability-title">
            <span className="availability-dot" />
            <strong>{t('Available for Projects')}</strong>
          </div>
          <p>{t('AvailabilityText')}</p>
        </section>

        {/* Quick Message Form */}
        <section className="contact-form-card reveal" style={{ '--reveal-index': 4 }}>
          <h2>{t('Send Message')}</h2>
          {sent ? (
            <div className="contact-form-success">
              <CheckCircle2 size={24} className="success-icon" />
              <p>{t('Message sent!')}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">{t('Your Name')}</label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">{t('Your Email')}</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">{t('Message')}</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hi Hanif, I would like to discuss a project..."
                />
              </div>
              <button type="submit" className="button primary form-submit-btn">
                <Send size={16} />
                <span>{t('Send Message')}</span>
              </button>
            </form>
          )}
        </section>
      </div>
    </section>
  );
}
