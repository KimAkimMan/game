# 🎮 Panduan Pengembangan & Arsitektur Web (Game Index)

Dokumen ini berisi panduan lengkap struktur kode, arsitektur komponen, cara menambah data baru, serta referensi penting untuk melanjutkan pengembangan website ini.

---

## 🚀 1. Tech Stack & Dependensi

- **Framework**: [Next.js](https://nextjs.org/) 16.4.5 (App Router, Turbopack)
- **UI Library**: React 19.3.0 & React DOM 19.3.0
- **Language**: TypeScript 5 (Strict type checking)
- **Styling**: Tailwind CSS v4 & Custom CSS Utilities
- **Icons**: [Lucide React](https://lucide.dev/) + Custom Vector Icons (`SocialIcons.tsx`)
- **Typography**: Font *Poppins* melalui `next/font/google` (zero layout shift)

---

## 📁 2. Struktur Folder & File Proyek

```text
game/
├── app/
│   ├── globals.css              # Setup Tailwind, scrollbar halus, dan variabel tema
│   ├── layout.tsx               # Root layout, Google Fonts (Poppins), Metadata SEO
│   └── page.tsx                 # Halaman utama (orchestrator semua komponen)
├── components/
│   ├── Navbar.tsx               # Header fixed (z-[1000]), drawer menu responsif
│   ├── Hero.tsx                 # Banner utama & tombol shortcut lompat ke game
│   ├── About.tsx                # Profil kurator (KIM/FALL) & ikon sosial
│   ├── GameMenu.tsx             # Grid 6 game pilihan dengan hover efek
│   ├── VideoSection.tsx         # Video player YouTube interaktif & playlist switcher
│   ├── CharacterSection.tsx     # Inti web: slider karakter, tab game, wallpaper dinamis
│   ├── EventGallery.tsx         # Galeri event per game + Lightbox Zoom Modal
│   ├── Contact.tsx              # Informasi kontak & form kirim pesan interaktif
│   ├── Footer.tsx               # Hak cipta, kebijakan privasi, & tautan arsip
│   └── SocialIcons.tsx          # Ikon SVG mandiri (Facebook, Instagram, Twitter/X)
├── lib/
│   └── gameData.ts              # Database terpusat (216 karakter, filter, wallpaper, event)
├── public/
│   ├── gi/                      # Wallpaper faksi/region Genshin Impact
│   ├── ba/                      # Wallpaper faksi/akademi Blue Archive
│   ├── hsr/                     # Wallpaper faksi/dunia Honkai: Star Rail
│   └── iseng/                   # Arsip aset gambar karakter, logo faksi, & galeri event
├── DEVELOPMENT_GUIDE.md         # File dokumentasi ini
├── package.json                 # Konfigurasi dependensi dan script npm
└── tsconfig.json                # Konfigurasi TypeScript
```

---

## 🛠️ 3. Perintah Pengembangan (Scripts)

| Perintah | Deskripsi |
| :--- | :--- |
| `npm run dev` | Menjalankan server lokal pengembangan di `http://localhost:3000` |
| `npm run build` | Melakukan kompilasi produksi & memeriksa error TypeScript |
| `npm run start` | Menjalankan build produksi yang sudah di-compile |
| `npm run lint` | Menjalankan ESLint untuk cek kerapihan kode |

---

## 🧩 4. Arsitektur Komponen & Penjelasannya

### A. Komponen Navigasi (`components/Navbar.tsx`)
- Menggunakan `fixed top-0` dengan class `z-[1000]` agar **tidak pernah tertimpa** oleh slider karakter atau konten video saat di-scroll.
- Memiliki efek `backdrop-blur-md` yang otomatis aktif saat layar digulir (`scrollY > 20`).
- Terintegrasi dengan menu drawer untuk tampilan HP (mobile-friendly).

### B. Komponen Karakter (`components/CharacterSection.tsx`)
Merupakan komponen paling kompleks dan kaya fitur di website ini:
1. **Pilihan 4 Game Utama**: Genshin Impact, Zenless Zone Zero, Blue Archive, Honkai: Star Rail.
2. **Background Dinamis Layar Penuh**:
   - Wallpaper berganti secara halus (*crossfade*) sesuai tombol faksi/region yang sedang aktif.
   - Dilengkapi *overlay gradien* hitam pekat-transparan (`#11131a`) agar kartu karakter tetap kontras dan nyaman di mata.
3. **Kartu Karakter Seragam**:
   - Tinggi kartu dikunci presisi pada `h-[380px]` dan lebar `w-[270px] sm:w-[290px]`.
   - Foto avatar bulat penuh `175px x 175px` dengan `object-cover` tajam (tidak mengecil/buram).
4. **Tombol Navigasi Slide**:
   - Menggunakan posisi `top-1/2 -translate-y-1/2` di container kartu, sehingga tombol **selalu pas di tengah vertikal kartu** dan tidak akan turun ke bawah.
   - Tombol otomatis berstatus *disabled* dengan opacity rendah ketika sudah mencapai ujung kiri/kanan slider.

### C. Komponen Video (`components/VideoSection.tsx`)
- Pemutar video utama berbasis YouTube `iframe`.
- Daftar putar di samping kanan: ketika thumbnail video diklik, video player utama langsung memuat video tersebut seketika tanpa me-refresh halaman.

### D. Komponen Galeri Event (`components/EventGallery.tsx`)
- Tab filter berdasarkan 6 game.
- Dilengkapi fitur **Modal Lightbox Zoom**: ketika foto event diklik, foto akan membesar di tengah layar dengan background gelap dan tombol tutup (X).

---

## 📝 5. Panduan Cara Menambah Data Baru

Semua data tersentralisasi di satu file: [`lib/gameData.ts`](file:///c:/Users/Windows%2011/Documents/webGame/game/lib/gameData.ts).

### 1. Menambah Karakter Baru
Buka `lib/gameData.ts`, cari game yang diinginkan (misal `genshin`, `zenles`, `bluearchive`, atau `honkai`), lalu tambahkan objek baru ke dalam array `characters`:

```typescript
{
  category: "mondstadt",                  // Harus sama dengan id filter faksi
  image: "/iseng/nama_gambar.png",       // Path gambar (simpan di folder public/)
  name: "Nama Karakter",
  feedback: "Kutipan atau deskripsi singkat karakter."
}
```

### 2. Menambah Faksi / Filter Baru
Tambahkan ke dalam array `filters` pada game terkait:

```typescript
{
  id: "faksi_baru",
  label: "Nama Tampilan Faksi"
}
```

### 3. Menambah Background Faksi Baru
1. Letakkan gambar resolusi tinggi di folder `public/gi/`, `public/hsr/`, atau `public/ba/`.
2. Daftarkan path-nya di dictionary background pada `lib/gameData.ts`:
   - `GENSHIN_BACKGROUNDS` untuk Genshin.
   - `ZZZ_BACKGROUNDS` untuk ZZZ.
   - `BLUE_ARCHIVE_BACKGROUNDS` untuk Blue Archive.
   - `HSR_BACKGROUNDS` untuk Honkai: Star Rail.
3. Hubungkan kata kunci filternya pada `useMemo` di `components/CharacterSection.tsx`.

---

## 💡 6. Ide Roadmap Fitur Berikutnya (Next Improvements)

Jika Anda ingin melanjutkan penambahan fitur, berikut ide-ide rekomendasi yang siap diintegrasikan:

1. **Live Search Bar di Bagian Karakter**:
   - Input pencarian cepat di atas slider karakter agar user bisa mengetik nama karakter favoritnya langsung dari 216+ karakter yang ada.
2. **Gacha Simulator Mini-Game**:
   - Tombol "1x Pull" & "10x Pull" dengan animasi bintang 4 (ungu) & bintang 5 (emas) menggunakan karakter yang sudah ada di database `gameData.ts`.
3. **Pop-up Detail Karakter HD**:
   - Saat kartu karakter diklik, muncul modal yang menampilkan splash art ukuran penuh, status elemen, dan voice line quote.
4. **Floating Theme BGM Audio Player**:
   - Pemutar musik santai mengambang di pojok kanan bawah dengan lagu tema masing-masing game.
5. **Fitur "Favorite Waifu / Husbando" (Wishlist)**:
   - Ikon hati ❤️ pada kartu karakter yang bisa disimpan ke dalam `localStorage` browser.

---

## ⚠️ 7. Aturan Desain yang Harus Tetap Dijaga

1. **Kerapihan Header**: Jangan pernah mengecilkan nilai `z-index` pada `Navbar.tsx` di bawah `100` agar menu tetap berada di atas seluruh elemen saat halaman digulir.
2. **Ukuran Kartu Karakter**: Pertahankan class `h-[380px]` dan ukuran avatar `w-[175px] h-[175px]` dengan `object-cover` agar tampilan tetap seragam dan rapi di semua game.
3. **Penyimpanan Aset Statis**: Selalu simpan gambar atau video baru di dalam direktori `public/` agar Next.js dapat menyajikan aset secara efisien.
