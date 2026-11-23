// src/components/LiveChat.jsx
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, MessageCircle, Mail } from 'lucide-react';
import { profile } from '../data/portfolioData';

export function LiveChat({ t, lang }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text:
        lang === 'id'
          ? `Halo! 👋 Saya asisten virtual portofolio Hanif Muthiar Tsani. Ada yang bisa saya bantu terkait proyek, lowongan kerja, atau tech stack Hanif?`
          : `Hi there! 👋 I'm Hanif Muthiar Tsani's virtual assistant. How can I help you regarding projects, job opportunities, or tech stack?`,
      time: 'Just now'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  const quickPrompts = lang === 'id' ? [
    { label: '💼 Tawaran Kerja', query: 'Apakah Hanif terbuka untuk pekerjaan full-time atau freelance?' },
    { label: '🚀 Tech Stack', query: 'Apa tech stack utama yang dikuasai Hanif?' },
    { label: '📞 Hubungi Langsung', query: 'Bagaimana cara menghubungi Hanif via WhatsApp?' }
  ] : [
    { label: '💼 Job Opportunity', query: 'Is Hanif open to full-time or contract roles?' },
    { label: '🚀 Tech Stack', query: 'What is Hanif\'s core technology stack?' },
    { label: '📞 Contact Directly', query: 'How can I reach Hanif on WhatsApp?' }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = (textToSend) => {
    const text = textToSend || inputValue;
    if (!text.trim()) return;

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: text.trim(),
      time: 'Just now'
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');

    // Simulated smart assistant response
    setTimeout(() => {
      let replyText = '';
      const lower = text.toLowerCase();

      if (lower.includes('job') || lower.includes('role') || lower.includes('kerja') || lower.includes('freelance') || lower.includes('hiring')) {
        replyText = lang === 'id'
          ? 'Hanif sangat terbuka untuk posisi Full Stack Developer, Backend Developer, atau Frontend Developer (Full-time, Contract, maupun Freelance). Anda dapat langsung mengontaknya via email atau WhatsApp!'
          : 'Hanif is actively open to Full Stack Developer, Backend, or Frontend positions (Full-time, Contract, or Freelance). Feel free to reach out via email or WhatsApp!';
      } else if (lower.includes('tech') || lower.includes('stack') || lower.includes('laravel') || lower.includes('react')) {
        replyText = lang === 'id'
          ? 'Hanif menguasai Laravel, React.js, Node.js, Flutter, MySQL, REST API, dan Google Cloud Platform (GCP). Beliau juga memiliki sertifikasi resmi dari Google & Dicoding.'
          : 'Hanif specializes in Laravel, React.js, Node.js, Flutter, MySQL, REST API, and Google Cloud Platform (GCP). He also holds official certifications from Google & Dicoding.';
      } else if (lower.includes('wa') || lower.includes('whatsapp') || lower.includes('hubungi') || lower.includes('contact')) {
        replyText = lang === 'id'
          ? `Anda bisa menghubungi Hanif langsung melalui WhatsApp di +62 838-7422-7036 atau email hanifmuthiartsani791@gmail.com.`
          : `You can reach Hanif directly via WhatsApp at +62 838-7422-7036 or email at hanifmuthiartsani791@gmail.com.`;
      } else {
        replyText = lang === 'id'
          ? `Terima kasih atas pesannya! Untuk diskusi lebih lanjut, Anda bisa terhubung langsung dengan Hanif melalui WhatsApp atau form di halaman Kontak.`
          : `Thanks for your message! For further discussions, you can connect directly with Hanif via WhatsApp or via the Contact tab.`;
      }

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'bot',
          text: replyText,
          time: 'Just now'
        }
      ]);
    }, 600);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          type="button"
          className="chat-button"
          onClick={() => setIsOpen(true)}
          aria-label={t('Open live chat')}
          title={t('Live chat')}
        >
          <MessageSquare size={24} />
        </button>
      )}

      {/* Chat Window Panel */}
      {isOpen && (
        <div className="chat-panel" role="dialog" aria-modal="true">
          {/* Header */}
          <div className="chat-header">
            <div className="chat-header-info">
              <div className="chat-avatar-status">
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="chat-avatar"
                  width={34}
                  height={34}
                />
                <span className="chat-online-dot" />
              </div>
              <div>
                <strong>{profile.name}</strong>
                <p>{t('Online')}</p>
              </div>
            </div>
            <button
              type="button"
              className="chat-close"
              onClick={() => setIsOpen(false)}
              aria-label={t('Close live chat')}
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="chat-body">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`chat-bubble ${m.sender === 'user' ? 'user' : 'bot'}`}
              >
                <p>{m.text}</p>
                <span className="chat-time">{m.time}</span>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick suggestions */}
          <div className="chat-prompts">
            {quickPrompts.map((p, i) => (
              <button
                key={i}
                type="button"
                className="chat-prompt-pill"
                onClick={() => handleSend(p.query)}
              >
                {p.label}
              </button>
            ))}
          </div>

          {/* Quick Links */}
          <div className="chat-actions-bar">
            <a
              href={profile.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="chat-direct-link wa"
            >
              <MessageCircle size={14} />
              <span>WhatsApp</span>
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="chat-direct-link mail"
            >
              <Mail size={14} />
              <span>Email</span>
            </a>
          </div>

          {/* Input field */}
          <form
            className="chat-composer"
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={t('ChatPlaceholder')}
              className="chat-composer-field"
            />
            <button
              type="submit"
              className="chat-send-btn"
              disabled={!inputValue.trim()}
              aria-label={t('Send')}
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
