// src/themes/emerald/EmeraldProjectsView.jsx
import { useState, useMemo } from 'react';
import { FolderGit2, Search, Eye } from 'lucide-react';
import { GithubIcon } from '../../components/SocialIcons';
import { projects } from '../../data/portfolioData';

export function EmeraldProjectsView({ onSelectProject, lang }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = useMemo(() => {
    const set = new Set();
    projects.forEach((p) => {
      if (p.category) set.add(p.category);
    });
    return ['All', ...Array.from(set)];
  }, []);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchCat =
        selectedCategory === 'All' || project.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchQuery =
        !query ||
        project.title.toLowerCase().includes(query) ||
        (project.titleEn && project.titleEn.toLowerCase().includes(query)) ||
        project.description.toLowerCase().includes(query) ||
        project.tags.some((t) => t.toLowerCase().includes(query));
      return matchCat && matchQuery;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="mt-6 space-y-6">
      <div className="bg-white dark:bg-gray-900 border border-gray-200/90 dark:border-gray-800 rounded-3xl p-6 sm:p-8 shadow-xs">
        {/* Header */}
        <div className="flex items-center gap-2.5 text-teal-700 dark:text-teal-400 mb-2">
          <FolderGit2 className="w-5 h-5 stroke-[2.2]" />
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            {lang === 'id' ? 'Koleksi Proyek' : 'Featured Projects'}
          </h2>
        </div>
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
          {lang === 'id'
            ? `Kumpulan proyek unggulan dari GitHub — ${projects.length} proyek.`
            : `A collection of work from GitHub — ${projects.length} projects.`}
        </p>

        {/* Toolbar: Search + Category Filters */}
        <div className="space-y-4 mb-8">
          {/* Search bar */}
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={lang === 'id' ? 'Cari nama proyek atau teknologi...' : 'Search projects or tech...'}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50/60 dark:bg-gray-800/60 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600 transition-colors"
            />
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 flex-wrap">
            {categories.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                    active
                      ? 'bg-teal-700 text-white shadow-xs'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Project count indicator */}
          <div className="text-xs text-gray-400 dark:text-gray-500">
            {lang === 'id'
              ? `Menampilkan ${filteredProjects.length} dari ${projects.length} proyek`
              : `Showing ${filteredProjects.length} of ${projects.length} projects`}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="py-12 text-center text-gray-500 dark:text-gray-400">
            {lang === 'id' ? 'Tidak ada proyek yang sesuai filter.' : 'No projects found matching the filter.'}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((proj) => {
              const coverImg = proj.images && proj.images.length > 0 ? proj.images[0] : null;
              const title = lang === 'id' ? proj.title : (proj.titleEn || proj.title);
              const desc = lang === 'id' ? proj.description : (proj.descriptionEn || proj.description);

              return (
                <div
                  key={proj.id}
                  className="group rounded-2xl border border-gray-200/90 dark:border-gray-800 bg-white dark:bg-gray-800/40 hover:border-teal-500/40 hover:shadow-md transition-all flex flex-col overflow-hidden"
                >
                  {/* Thumbnail Container (fixed 16:10 aspect ratio) */}
                  <div
                    className="relative w-full aspect-[16/10] bg-gray-100 dark:bg-gray-900 overflow-hidden cursor-pointer"
                    onClick={() => onSelectProject(proj)}
                  >
                    {coverImg ? (
                      <img
                        src={coverImg}
                        alt={title}
                        className={`w-full h-full transition-transform duration-300 group-hover:scale-105 ${
                          proj.shotFit === 'contain' ? 'object-contain p-2' : 'object-cover'
                        }`}
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">
                        No Preview
                      </div>
                    )}

                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectProject(proj);
                        }}
                        className="px-3.5 py-1.5 rounded-lg bg-white/95 text-gray-900 text-xs font-semibold flex items-center gap-1.5 shadow-sm hover:bg-white"
                      >
                        <Eye className="w-3.5 h-3.5 text-teal-700" />
                        <span>{lang === 'id' ? 'Rincian' : 'Details'}</span>
                      </button>
                    </div>

                    {/* Category Tag Badge */}
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/50 backdrop-blur-md text-white text-[11px] font-medium">
                      {proj.category}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <h3
                        onClick={() => onSelectProject(proj)}
                        className="font-bold text-gray-900 dark:text-white text-base hover:text-teal-700 dark:hover:text-teal-400 cursor-pointer line-clamp-1"
                      >
                        {title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 line-clamp-2 leading-relaxed">
                        {desc}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {proj.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                      {proj.tags.length > 4 && (
                        <span className="px-1.5 py-0.5 text-[11px] text-gray-400">
                          +{proj.tags.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Footer Actions */}
                    <div className="border-t border-gray-100 dark:border-gray-800/80 pt-3 flex items-center justify-between gap-2">
                      {/* Language pill with dot */}
                      {proj.language && (
                        <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
                          <span
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: proj.languageColor || '#0d9488' }}
                          />
                          <span>{proj.language}</span>
                        </div>
                      )}

                      {/* Action buttons */}
                      <div className="flex items-center gap-2 ml-auto">
                        {proj.link && (
                          <a
                            href={proj.link}
                            target="_blank"
                            rel="noreferrer"
                            className="p-1.5 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:text-teal-700 dark:hover:text-teal-400 hover:border-teal-500/50 transition-colors"
                            title="GitHub Repository"
                          >
                            <GithubIcon size={14} />
                          </a>
                        )}
                        <button
                          type="button"
                          onClick={() => onSelectProject(proj)}
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-teal-50 dark:bg-teal-950/70 border border-teal-200/60 dark:border-teal-800 text-teal-700 dark:text-teal-300 text-xs font-semibold hover:bg-teal-100 dark:hover:bg-teal-900/80 transition-colors cursor-pointer"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>{lang === 'id' ? 'Lihat Galeri' : 'Gallery & Details'}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
