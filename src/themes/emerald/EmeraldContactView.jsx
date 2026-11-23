// src/themes/emerald/EmeraldContactView.jsx
import { useState } from 'react';
import { Mail, MapPin, Phone, Send, MessageCircle, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from '../../components/SocialIcons';
import { profile } from '../../data/portfolioData';

export function EmeraldContactView({ lang }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [opened, setOpened] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;

    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );

    window.open(`mailto:${profile.email}?subject=${subject}&body=${body}`);
    setOpened(true);
  };

  const mailtoFallback = `mailto:${profile.email}?subject=${encodeURIComponent(
    `Portfolio inquiry from ${form.name || 'website visitor'}`
  )}&body=${encodeURIComponent(form.message)}`;

  const contactRows = [
    {
      href: `mailto:${profile.email}`,
      icon: <Mail className="w-4 h-4" />,
      label: lang === 'id' ? 'Email' : 'Email',
      value: profile.email,
      external: false
    },
    {
      href: `tel:${profile.phone}`,
      icon: <Phone className="w-4 h-4" />,
      label: lang === 'id' ? 'Telepon' : 'Phone',
      value: profile.phone,
      external: false
    },
    {
      href: profile.whatsapp,
      icon: <MessageCircle className="w-4 h-4" />,
      label: 'WhatsApp',
      value: lang === 'id' ? 'Chat langsung' : 'Chat directly',
      external: true
    }
  ];

  const socials = [
    { href: profile.linkedin, icon: <LinkedinIcon size={16} />, label: 'LinkedIn', meta: '/in/hanif-muthiar-tsani' },
    { href: profile.github, icon: <GithubIcon size={16} />, label: 'GitHub', meta: `@${profile.githubUsername}` },
    { href: profile.whatsapp, icon: <WhatsAppIcon size={16} />, label: 'WhatsApp', meta: profile.phone }
  ];

  return (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-start">
      {/* Left: contact details */}
      <div className="space-y-6">
        <section className="bg-white dark:bg-gray-900 border border-gray-200/90 dark:border-gray-800 rounded-3xl p-6 sm:p-7 shadow-xs transition-colors">
          <div className="flex items-center gap-2.5 text-teal-700 dark:text-teal-400 mb-2">
            <Mail className="w-5 h-5 stroke-[2.2]" />
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              {lang === 'id' ? 'Hubungi Saya' : 'Get in Touch'}
            </h2>
          </div>
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-5">
            {lang === 'id'
              ? 'Terbuka untuk pekerjaan full-time, proyek freelance, dan kolaborasi pengembangan sistem.'
              : 'Open to full-time roles, freelance projects, and engineering collaboration.'}
          </p>

          <div className="space-y-2.5">
            {contactRows.map((row) => (
              <a
                key={row.label}
                href={row.href}
                target={row.external ? '_blank' : undefined}
                rel={row.external ? 'noreferrer' : undefined}
                className="flex items-center gap-3 px-3.5 py-3 rounded-2xl border border-gray-100 dark:border-gray-800 bg-gray-50/60 dark:bg-gray-800/40 hover:border-teal-500/40 hover:bg-white dark:hover:bg-gray-800 transition-colors group"
              >
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-teal-50 dark:bg-teal-950/70 text-teal-700 dark:text-teal-300 shrink-0">
                  {row.icon}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[11px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                    {row.label}
                  </span>
                  <span className="block text-sm font-medium text-gray-800 dark:text-gray-200 break-all">
                    {row.value}
                  </span>
                </span>
                <ArrowUpRight className="w-4 h-4 text-gray-300 dark:text-gray-600 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors shrink-0" />
              </a>
            ))}

            <div className="flex items-center gap-3 px-3.5 py-3 rounded-2xl border border-gray-100 dark:border-gray-800 bg-gray-50/60 dark:bg-gray-800/40">
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-teal-50 dark:bg-teal-950/70 text-teal-700 dark:text-teal-300 shrink-0">
                <MapPin className="w-4 h-4" />
              </span>
              <span className="min-w-0">
                <span className="block text-[11px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                  {lang === 'id' ? 'Lokasi' : 'Location'}
                </span>
                <span className="block text-sm font-medium text-gray-800 dark:text-gray-200">
                  {profile.city}, {profile.province} · {profile.country} ({profile.gmtOffset})
                </span>
              </span>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-900 border border-gray-200/90 dark:border-gray-800 rounded-3xl p-6 sm:p-7 shadow-xs transition-colors">
          <h2 className="text-sm font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-3">
            {lang === 'id' ? 'Media Sosial' : 'Social'}
          </h2>
          <div className="space-y-2">
            {socials.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300 hover:text-teal-700 dark:hover:text-teal-400 transition-colors"
              >
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400">
                  {item.icon}
                </span>
                <strong className="font-semibold">{item.label}</strong>
                <span className="text-gray-400 dark:text-gray-500 truncate">{item.meta}</span>
              </a>
            ))}
          </div>
        </section>
      </div>

      {/* Right: message form */}
      <section className="bg-white dark:bg-gray-900 border border-gray-200/90 dark:border-gray-800 rounded-3xl p-6 sm:p-7 shadow-xs transition-colors">
        <div className="flex items-center gap-2.5 text-teal-700 dark:text-teal-400 mb-2">
          <Send className="w-5 h-5 stroke-[2.2]" />
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            {lang === 'id' ? 'Kirim Pesan' : 'Send a Message'}
          </h2>
        </div>
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-5">
          {lang === 'id'
            ? 'Pesan akan dibuka di aplikasi email Anda, siap untuk dikirim.'
            : 'Your message opens in your email app, ready to send.'}
        </p>

        {opened ? (
          <div className="rounded-2xl border border-teal-200/80 dark:border-teal-800 bg-teal-50/60 dark:bg-teal-950/40 p-4 text-sm text-gray-700 dark:text-gray-300 space-y-2">
            <p className="font-semibold text-teal-800 dark:text-teal-300">
              {lang === 'id' ? 'Aplikasi email sedang dibuka.' : 'Your email app is opening.'}
            </p>
            <p>
              {lang === 'id'
                ? 'Jika tidak terbuka, kirim langsung lewat tautan di bawah ini.'
                : 'If nothing opens, send it directly using the link below.'}
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <a
                href={mailtoFallback}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0e746b] hover:bg-[#0b5c54] text-white text-xs font-semibold transition-colors"
              >
                {lang === 'id' ? 'Buka email' : 'Open email'}
              </a>
              <button
                type="button"
                onClick={() => setOpened(false)}
                className="px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 text-xs font-semibold text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                {lang === 'id' ? 'Tulis pesan lagi' : 'Write again'}
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="block">
                <span className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1.5">
                  {lang === 'id' ? 'Nama' : 'Name'}
                </span>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder={lang === 'id' ? 'Nama Anda' : 'Your name'}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50/60 dark:bg-gray-800/60 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600 transition-colors"
                />
              </label>
              <label className="block">
                <span className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1.5">
                  Email
                </span>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@email.com"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50/60 dark:bg-gray-800/60 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600 transition-colors"
                />
              </label>
            </div>

            <label className="block">
              <span className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1.5">
                {lang === 'id' ? 'Pesan' : 'Message'}
              </span>
              <textarea
                required
                rows={6}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder={
                  lang === 'id'
                    ? 'Halo Hanif, saya ingin berdiskusi tentang...'
                    : 'Hi Hanif, I would like to discuss...'
                }
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50/60 dark:bg-gray-800/60 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600 transition-colors resize-y"
              />
            </label>

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#0e746b] hover:bg-[#0b5c54] text-white font-semibold text-sm transition-all active:scale-95"
            >
              <Send className="w-4 h-4" />
              <span>{lang === 'id' ? 'Kirim lewat email' : 'Send via email'}</span>
            </button>
          </form>
        )}
      </section>
    </div>
  );
}
