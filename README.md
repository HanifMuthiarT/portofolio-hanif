# Portofolio Hanif Muthiar Tsani

Portofolio pribadi berbasis React + Vite + Tailwind CSS v4. Tampilannya berupa
satu kartu profil di tengah halaman: banner bermotif emerald, foto/inisial,
identitas, tombol aksi, lalu tab navigasi. Isi halaman disusun dari dua kolom
kartu yang ringkas.

Seluruh konten berasal dari data, bukan teks yang ditulis ulang di komponen.

## Menjalankan

```bash
npm install
npm run dev      # server pengembangan (Vite)
npm run build    # hasil produksi ke folder dist/
npm run preview  # pratinjau hasil build
npm run lint     # pemeriksaan ESLint
```

## Rute

Navigasi memakai hash agar tetap berjalan di hosting statis tanpa aturan rewrite
server:

| Rute              | Isi                                               |
| ----------------- | ------------------------------------------------- |
| `#/`              | Ringkasan: Tentang, Pendidikan, dan Tech Stack    |
| `#/experience`    | Pengalaman kerja, program intensif, dan riset     |
| `#/projects`      | Daftar proyek dengan pencarian dan filter         |
| `#/certificates`  | Grid sertifikat dengan pratinjau dan unduhan PDF  |
| `#/contact`       | Informasi kontak, media sosial, dan form email    |

Rute lama `#/tech-stack` dan `#/awards-certs` tetap diarahkan ke halaman yang
relevan agar tautan lama tidak rusak.

## Struktur

- `src/App.jsx` — router hash, state tema/bahasa, dan penyusunan halaman.
- `src/themes/emerald/` — tampilan yang dipakai:
  - `EmeraldLayout.jsx` — kerangka halaman, skip link, dan footer.
  - `EmeraldHeader.jsx` — banner, profil, tombol aksi, dan tab navigasi.
  - `EmeraldOverviewView.jsx` — kartu Tentang, Pendidikan, dan Tech Stack.
  - `EmeraldExperienceView.jsx` — daftar pengalaman dengan rincian pencapaian.
  - `EmeraldProjectsView.jsx` — pencarian, filter kategori, dan galeri proyek.
  - `EmeraldCertificatesView.jsx` — grid sertifikat.
  - `EmeraldContactView.jsx` — kontak, media sosial, dan form `mailto:`.
  - `emerald.css` — pola banner, pill teknologi, indikator tab, dan warna dasar.
- `src/data/portfolioData.js` — **satu-satunya sumber konten**: profil,
  pengalaman, proyek, tech stack, sertifikat, dan pendidikan.
- `src/data/translations.js` — teks antarmuka untuk bahasa Inggris dan Indonesia.
- `src/components/` — modal CV/proyek/sertifikat, ikon sosial, dan widget chat.
- `src/views/` dan `src/components/Sidebar.jsx` — layout sidebar sebelumnya,
  disimpan sebagai referensi dan tidak dipakai oleh `App.jsx`.
- `.opencode/skills/anti-slop/SKILL.md` — panduan desain beserta checklist.

## Tema dan interaksi

- **Tema terang adalah default**; tombol bulan/matahari di banner menyimpan
  pilihan di `localStorage` (`portfolio-theme`) dan diterapkan sebelum React
  render agar tidak berkedip. Varian `dark:` Tailwind dipetakan ke atribut
  `data-theme` di `src/index.css`.
- Tombol bahasa (EN/ID) menyimpan pilihan di `portfolio-lang`.
- Foto profil dapat diklik untuk beralih antara inisial **HM** dan foto asli.
- Form kontak membuka aplikasi email pengunjung lewat `mailto:` — tidak ada
  pesan yang diklaim terkirim tanpa benar-benar dikirim.
- Modal CV, galeri proyek, dan pratinjau sertifikat bisa ditutup dengan
  `Escape`; scroll halaman dikunci selama modal terbuka.

## Mengubah konten

Edit `src/data/portfolioData.js`. Untuk mengubah urutan atau label tab, sunting
`navItems` di `src/themes/emerald/EmeraldHeader.jsx` dan pasangan
`pathToTab`/`tabToPath` di `src/App.jsx` agar rute tetap sinkron.

Setelah mengubah tampilan, jalankan `npm run build` dan `npm run lint`, lalu cek
lebar ~375px, ~768px, dan ~1280px.
