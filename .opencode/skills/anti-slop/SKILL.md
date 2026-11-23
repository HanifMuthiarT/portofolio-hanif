---
name: anti-slop
description: Pakai skill ini sebelum menambah atau mengubah tampilan portofolio. Berisi aturan desain, gaya bahasa, dan checklist agar hasilnya tidak terlihat seperti template AI generik (neon terminal, glow, placeholder, klaim palsu).
---

# Anti-Slop — panduan desain portofolio ini

Tujuan: portofolio ini harus terbaca seperti karya orang sungguhan yang rapi, bukan
template "developer portfolio" yang dihasilkan mesin. Konten dan kejujuran lebih
penting daripada efek visual.

## 1. Prinsip utama

1. **Konten dulu, desain kemudian.** Semua teks hidup di `src/data/portofolioHanif.js`.
   Komponen hanya menampilkan data. Jangan menulis deskripsi permanen di JSX.
2. **Satu ide per bagian.** Setiap section punya satu tugas: pengenalan, pengalaman,
   proyek, keahlian, pendidikan, sertifikat, kontak.
3. **Tampilkan yang benar-benar ada.** Jangan menyembunyikan pengalaman kerja,
   jangan menambah "klien" atau "penghargaan" yang tidak ada di data.
4. **Interaksi harus jujur.** Form kontak membuka aplikasi email via `mailto:`,
   bukan alert "pesan terkirim". Tombol CV memanggil dialog cetak, bukan
   mengunduh file yang tidak ada.
5. **Hierarki lebih penting dari dekorasi.** Pembaca harus menemukan nama, peran,
   pengalaman, dan cara menghubungi dalam hitungan detik.

## 2. Larangan keras (ciri khas AI-slop)

- ❌ Tema gelap neon (`#00FF66`, `#0b0f12`), glow, scanline, grid tipis, shimmer,
  mouse spotlight, efek typewriter, dan animasi melayang.
- ❌ Mock browser / macOS title bar dengan URL palsu di atas halaman.
- ❌ Awalan `//`, `/* ... */`, `> _`, atau komentar kode sebagai label UI.
- ❌ Metrik palsu atau tidak jelas seperti "100% production ready", "10x faster",
  "passionate developer", "crafting digital experiences".
- ❌ Gradient text, emoji sebagai bullet, badge warna-warni per kartu, dan
  terlalu banyak kartu bersarang.
- ❌ Font generic yang berdiri sendiri tanpa hierarki (mis. Inter di semua tempat).
- ❌ Teks placeholder, `lorem ipsum`, atau judul yang tidak menjelaskan isi.

## 3. Sistem visual yang dipakai — tema "Aleksi Tappura"

- **Referensi:** aleksitappura.com — hitam arang, teks abu, judul hampir putih,
  font Geist, satu kolom lapang, aurora gradient yang sangat tipis.
- **Kerangka:** sidebar kiri berisi identitas, daftar navigasi bersih, aksi
  cetak, dan toggle tema; konten utama berupa section-section dengan kartu
  transparan bergaris rambut. Beranda **hanya perkenalan diri** — jangan
  memuat statistik, daftar fakta, galeri, atau ringkasan detail. Pembaca yang
  ingin detail tinggal klik menu sidebar. Foto profil diletakkan di "Tentang".
- **Tema:** **gelap sebagai default** (sesuai referensi); terang tetap tersedia
  lewat toggle. Override terang ada di `[data-theme='light']`. Pilihan disimpan
  di `localStorage`. Jangan memakai warna hardcoded di JSX — selalu `bg-paper`,
  `text-ink`, `border-line`, `text-muted`, `text-faint`, `bg-overlay`, dst.
- **Palet gelap (default):** paper `#111111`, surface `#151515`, soft `#1a1a1a`,
  ink `#f5f5f5`, muted `#a3a3a3`, faint `#7d7d7d`, line `#262626`.
  Aksen mengikuti `ink` (monokrom), bukan warna neon.
- **Palet terang:** paper `#f7f7f6`, surface `#ffffff`, ink `#111111`,
  muted `#666666`, line `#e4e4e1`.
- **Aurora:** satu lapisan `radial-gradient` biru/ungu/teal dengan opacity
  sangat rendah di belakang konten, tanpa animasi. Jangan dibuat terang atau
  berkedip — itu kembali jadi AI-slop.
- **Kontras tombol:** pada latar `bg-ink` pakai `text-paper`; di kedua tema
  kombinasinya tetap terbalik dan terbaca. Overlay modal/drawer memakai
  `bg-overlay` (hitam tetap), bukan `bg-ink`.
- **Tipografi:** `Geist` untuk semua teks dan judul (font situs referensi),
  `JetBrains Mono` **hanya** untuk label teknis kecil (nama tech, ID sertifikat,
  nomor section, keterangan kecil).
- **Ruang:** lapang, hampir tanpa shadow dan tanpa kartu putih. Biarkan teks
  bernapas; jangan menambah dekorasi hanya karena ruang kosong terlihat "hampa".
- **Gambar:** foto dan screenshot tampil apa adanya, tanpa overlay neon atau
  filter berlebihan.

## 4. Pola yang boleh dan disarankan

- Sidebar navigasi + skip link untuk akses keyboard; bar atas hanya untuk ponsel.
- Penomoran section (`01`, `02`, ...) dengan label kecil uppercase.
- Beranda: kicker mono, nama besar, peran, satu kalimat headline, status,
  dua tombol, dan foto. Tidak ada grid statistik atau ringkasan angka.
- Kartu "Hasil" pada tiap proyek agar pencapaian terbaca tanpa membuka galeri.
- Filter proyek memakai `origin` dari data, bukan field yang tidak ada.
- Toggle tema memakai `aria-pressed`, teks "Mode gelap"/"Mode terang", dan
  tersedia baik di sidebar maupun bar atas ponsel.
- Modal dengan `role="dialog"`, `aria-modal`, tombol tutup, Escape, dan panah
  untuk galeri. Scroll halaman dikunci saat modal terbuka.
- Tombol aksi memakai kata kerja konkret: "Lihat proyek", "Kirim lewat email",
  "Simpan CV (PDF)" — bukan "Explore", "Discover", atau "Get in touch".
- Konten bahasa Indonesia; jangan meniru sakelar ID/EN dari situs referensi
  hanya karena ada di sana.

## 5. Bahasa

- Bahasa Indonesia yang lugas dan sopan, cocok untuk HR maupun klien umum.
- Istilah teknis dipertahankan bila memang lazim (REST API, Laravel, IndexedDB).
- Hindari kalimat motivasional kosong. Gunakan kalimat yang menjelaskan apa yang
  dibangun, untuk siapa, dan hasilnya.

## 6. Checklist sebelum selesai

- [ ] Semua field di `portofolioHanif.js` muncul di halaman (profile, softSkills,
      techStack, education, experiences, projects, certificates).
- [ ] Tidak ada teks yang mengatakan "terkirim" padahal tidak ada pengiriman.
- [ ] Filter proyek menghasilkan jumlah yang benar untuk tiap kategori.
- [ ] Sertifikat bisa dibuka dan diunduh; ID kredensial terbaca.
- [ ] Navigasi, skip link, focus ring, dan Escape berfungsi dengan keyboard.
- [ ] Tampilan cek di lebar ~375px, ~768px, dan ~1280px.
- [ ] `prefers-reduced-motion` dihormati.
- [ ] Tema gelap Aleksi jadi default; toggle terang/gelap berfungsi di desktop & ponsel
      dan tidak ada warna hardcoded yang merusak salah satu tema.
- [ ] Mode cetak (`window.print()`) menghasilkan dokumen yang rapi tanpa tombol.
- [ ] Tidak ada sisa warna neon, `//`, glow, atau title bar palsu.
- [ ] `npm run lint` dan `npm run build` lolos.
