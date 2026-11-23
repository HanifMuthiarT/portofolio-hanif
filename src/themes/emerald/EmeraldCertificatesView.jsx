// src/themes/emerald/EmeraldCertificatesView.jsx
import { Award, Calendar, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { awards } from '../../data/portfolioData';

export function EmeraldCertificatesView({ onSelectCertificate, lang }) {
  return (
    <section className="mt-6">
      <div className="bg-white dark:bg-gray-900 border border-gray-200/90 dark:border-gray-800 rounded-3xl p-6 sm:p-8 shadow-xs transition-colors">
        <div className="flex items-center gap-2.5 text-teal-700 dark:text-teal-400 mb-2">
          <Award className="w-5 h-5 stroke-[2.2]" />
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            {lang === 'id' ? 'Sertifikat & Pelatihan' : 'Certificates & Training'}
          </h2>
        </div>
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
          {lang === 'id'
            ? `${awards.length} sertifikat kompetensi dari berbagai penyelenggara. Klik kartu untuk melihat pratinjau dan PDF.`
            : `${awards.length} professional certificates and training credentials. Click a card to preview the certificate and open its PDF.`}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {awards.map((cert) => (
            <button
              key={cert.id}
              type="button"
              onClick={() => onSelectCertificate(cert)}
              className="group flex flex-col text-left rounded-2xl border border-gray-200/90 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/40 hover:border-teal-500/40 hover:shadow-md transition-all overflow-hidden"
            >
              <div className="relative w-full aspect-[4/3] bg-gray-100 dark:bg-gray-900 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  loading="lazy"
                  decoding="async"
                  className={`w-full h-full ${cert.imageFit === 'contain' ? 'object-contain' : 'object-cover object-top'} transition-transform duration-300 group-hover:scale-[1.03]`}
                />
                <span className="absolute top-2.5 right-2.5 inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/90 text-teal-700 shadow-xs">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>

              <div className="flex flex-col flex-1 gap-2 p-4">
                <h3 className="font-bold text-sm text-gray-900 dark:text-white leading-snug line-clamp-2">
                  {cert.title}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {cert.issuer}
                </p>

                <div className="mt-auto pt-3 border-t border-gray-200/70 dark:border-gray-700/60 flex items-center justify-between gap-2 text-[11px]">
                  <span className="inline-flex items-center gap-1 text-gray-500 dark:text-gray-400">
                    <Calendar className="w-3.5 h-3.5" />
                    {cert.date}
                  </span>
                  <span
                    className="inline-flex items-center gap-1 font-mono font-medium text-teal-700 dark:text-teal-400"
                    title={cert.credentialId}
                  >
                    <ShieldCheck className="w-3.5 h-3.5" />
                    {cert.credentialId}
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
