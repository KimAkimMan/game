# 🏇 TASK UNTUK ANTIGRAVITY: Upgrade Game Index Jadi Web Komunitas (Web Storage) + Tambah Uma Musume

> Baca file ini sampai selesai sebelum menulis kode. Kerjakan **per fase**, jalankan `npm run build` di akhir tiap fase, dan berhenti untuk melapor kalau ada error yang tidak bisa diselesaikan.

---

## 0. Konteks Proyek

- Proyek: website katalog game gacha (Genshin Impact, ZZZ, Blue Archive, Honkai: Star Rail).
- Stack: **Next.js 16 (App Router)**, **React 19**, **TypeScript strict**, **Tailwind CSS v4**, **lucide-react**, font Poppins.
- Semua data statis ada di `lib/gameData.ts`.
- Referensi arsitektur lengkap: `DEVELOPMENT_GUIDE.md` (baca dulu).
- Komponen utama: `Navbar`, `Hero`, `About`, `GameMenu`, `VideoSection`, `CharacterSection`, `EventGallery`, `Contact`, `Footer`, `SocialIcons`.

## 1. Tujuan

1. Menambah game baru **Uma Musume Pretty Derby** ke website.
2. Menambah **fitur komunitas** yang datanya disimpan di **Web Storage (`localStorage`)** dulu, tanpa backend sungguhan.
3. Membuat **storage layer yang bisa diganti** ke Supabase/Firebase di masa depan tanpa mengubah komponen UI.

## 2. Aturan Wajib (JANGAN dilanggar)

1. **Jangan ubah** aturan desain di `DEVELOPMENT_GUIDE.md` bagian 7: `z-[1000]` pada Navbar, kartu karakter `h-[380px]`, avatar `w-[175px] h-[175px] object-cover`.
2. **Jangan menghapus atau merusak** fitur yang sudah ada (slider, wallpaper dinamis, lightbox, video playlist).
3. **SSR-safe**: `localStorage` hanya boleh diakses di dalam `useEffect` atau event handler pada komponen dengan `"use client"`. Jangan pernah mengaksesnya saat render di server (mencegah hydration error).
4. Semua akses storage **wajib lewat `lib/storage.ts`** (lihat Fase 1). Komponen dilarang memanggil `localStorage` langsung.
5. Gunakan TypeScript strict: tanpa `any`, semua tipe didefinisikan di `lib/types.ts`.
6. Gaya UI harus konsisten dengan tema gelap yang ada (background `#11131a`, Tailwind, rounded, hover halus).
7. Semua teks UI dalam **Bahasa Indonesia**.
8. **Aset Uma Musume**: jangan mengunduh atau membuat aset resmi sendiri. Pakai **placeholder** (`/uma/placeholder.png`) dan biarkan pengguna mengganti gambarnya. Tambahkan disclaimer fan site di Footer: *"Situs fan non-komersial. Semua karakter & aset adalah milik pemegang hak ciptanya (Cygames, HoYoverse, Nexon, dll.)."*
9. Jangan menambah dependensi berat. Kalau perlu library baru, jelaskan alasannya dulu.

## 3. Batasan Web Storage (harus dipahami & dijelaskan di UI)

`localStorage` hanya tersimpan **di browser masing-masing pengguna**. Artinya:

- Voting, komentar, dan leaderboard **tidak benar-benar dibagikan antar pengguna**; ini mode **demo/lokal**.
- Kapasitas kecil (~5 MB), jadi **jangan menyimpan gambar upload sebagai base64 besar**.
- Tampilkan banner kecil di halaman komunitas: *"Mode lokal: data hanya tersimpan di browser ini. Sinkronisasi online akan hadir nanti."*
- Karena itu storage layer harus dibuat modular supaya mudah diganti ke backend nyata (Fase 1).

---

## 4. FASE 1: Fondasi (Types + Storage Layer + Auth Lokal)

### 4.1 Buat `lib/types.ts`

```typescript
export type GameId = "genshin" | "zenles" | "bluearchive" | "honkai" | "uma";

export interface UserProfile {
  id: string;            // crypto.randomUUID()
  username: string;      // 3-20 karakter
  avatar: string;        // emoji atau path /avatars/xx.png
  bio: string;           // maks 120 karakter
  createdAt: number;
}

export interface Comment {
  id: string;
  targetId: string;      // misal "uma:special-week" atau "genshin:amber"
  userId: string;
  username: string;
  avatar: string;
  text: string;          // maks 300 karakter
  createdAt: number;
}

export interface Vote {
  targetId: string;      // id karakter
  userId: string;
  week: string;          // format "2026-W46"
}

export interface ScoreEntry {
  id: string;
  game: string;          // "uma-race"
  userId: string;
  username: string;
  score: number;
  createdAt: number;
}
```

### 4.2 Buat `lib/storage.ts` (adapter yang bisa diganti)

Buat **interface** `StorageAdapter` dengan method async: `get<T>(key)`, `set<T>(key, value)`, `remove(key)`.
Implementasikan `LocalStorageAdapter` dengan:

- Prefix semua key dengan `gameindex:` (misal `gameindex:profile`, `gameindex:comments`, `gameindex:favorites`, `gameindex:votes`, `gameindex:scores`).
- `try/catch` di semua operasi (storage bisa penuh/diblokir). Kalau gagal, `get` mengembalikan `null` dan `set` mengembalikan `false`.
- Cek `typeof window !== "undefined"` sebelum mengakses.
- Parse JSON dengan aman.
- Ekspor satu instance: `export const storage: StorageAdapter = new LocalStorageAdapter();`

> Semua method dibuat **async (Promise)** walau localStorage sebenarnya sinkron, supaya nanti bisa diganti ke Supabase tanpa mengubah pemanggil.

### 4.3 Buat `lib/services/` (lapisan logika)

Satu file per domain, semuanya memanggil `storage` (bukan localStorage):

| File | Fungsi |
| :--- | :--- |
| `profileService.ts` | `getProfile()`, `saveProfile(data)`, `logout()` |
| `favoriteService.ts` | `getFavorites()`, `toggleFavorite(charId)`, `isFavorite(charId)` |
| `voteService.ts` | `vote(charId)`, `getWeeklyRanking(game?)`, `hasVoted(charId)` |
| `commentService.ts` | `getComments(targetId)`, `addComment(...)`, `deleteComment(id)` |
| `scoreService.ts` | `submitScore(...)`, `getLeaderboard(game, limit)` |

Aturan khusus:
- **1 user hanya boleh vote 1 kali per karakter per minggu**, dan maksimal 3 vote per minggu secara total.
- Komentar: sanitasi teks (trim, batasi panjang, hapus tag HTML). Rate limit sederhana: minimal jeda 10 detik antar komentar.
- Leaderboard: simpan maksimal 50 entri per game, urutkan skor tertinggi.

### 4.4 Buat `components/ProfileProvider.tsx`

React Context ("use client") yang memuat profil dari `profileService` di `useEffect`, menyediakan `{ profile, setProfile, logout, loading }`. Bungkus di `app/layout.tsx`.

### 4.5 Buat `components/ProfileModal.tsx`

Modal "Buat Profil" (username, pilih avatar emoji dari 12 pilihan, bio). Muncul saat user pertama kali mencoba vote/komentar/submit skor. Tambahkan tombol profil di `Navbar` (avatar kecil atau tombol "Masuk") **tanpa menurunkan z-index navbar**.

✅ **Selesai Fase 1 jika**: build sukses, profil bisa dibuat/diubah/logout, dan data bertahan setelah refresh.

---

## 5. FASE 2: Tambah Game Uma Musume

### 5.1 Data di `lib/gameData.ts`

Tambahkan game ke-5 `uma` mengikuti pola yang sama dengan game lain (lihat struktur yang ada, **ikuti persis bentuk field-nya**). Isi:

- `filters`: `all`, `turf`, `dirt`, `sprint`, `mile`, `medium`, `long` (label Bahasa Indonesia). *Kalau struktur filter game lain berbeda, sesuaikan.*
- `UMA_BACKGROUNDS`: dictionary wallpaper per filter, semua dulu menunjuk ke `/uma/bg-default.jpg` (placeholder).
- `characters`: isi **contoh minimal 8 karakter** (nama saja yang valid; gambar placeholder):

```typescript
{ category: "all", image: "/uma/placeholder.png", name: "Special Week",   feedback: "TODO: isi deskripsi." },
{ category: "all", image: "/uma/placeholder.png", name: "Silence Suzuka", feedback: "TODO: isi deskripsi." },
{ category: "all", image: "/uma/placeholder.png", name: "Tokai Teio",     feedback: "TODO: isi deskripsi." },
{ category: "all", image: "/uma/placeholder.png", name: "Gold Ship",      feedback: "TODO: isi deskripsi." },
{ category: "all", image: "/uma/placeholder.png", name: "Mejiro McQueen", feedback: "TODO: isi deskripsi." },
{ category: "all", image: "/uma/placeholder.png", name: "Oguri Cap",      feedback: "TODO: isi deskripsi." },
{ category: "all", image: "/uma/placeholder.png", name: "Vodka",          feedback: "TODO: isi deskripsi." },
{ category: "all", image: "/uma/placeholder.png", name: "Daiwa Scarlet",  feedback: "TODO: isi deskripsi." },
```

> ⚠️ **Jangan mengarang data stat, tipe lari, atau cerita karakter.** Kategori sementara `all`, dan tandai `TODO` agar pemilik web yang mengisi data akuratnya.

Tambahkan field opsional `stats?: { speed: number; stamina: number; power: number; guts: number; wit: number }` pada tipe karakter (dibuat opsional agar game lain tidak rusak).

### 5.2 Aset

- Buat folder `public/uma/` dengan `placeholder.png` dan `bg-default.jpg` (boleh gradien/warna polos yang dibuat via SVG/CSS sederhana).
- Tulis `public/uma/README.txt` berisi cara mengganti gambar.

### 5.3 Integrasi komponen

- `CharacterSection.tsx`: tambah tab kelima **Uma Musume**, hubungkan filter + wallpaper ke `useMemo`. Pastikan crossfade wallpaper tetap berjalan.
- `GameMenu.tsx`, `EventGallery.tsx`, `VideoSection.tsx`: tambahkan entri Uma Musume **hanya jika polanya sederhana**; kalau butuh data video/event yang belum ada, buat entri kosong yang aman (tidak crash) dan beri catatan `TODO`.
- Rapikan inkonsistensi: `GameMenu` menampilkan 6 game sedangkan `CharacterSection` hanya 4. **Jangan hapus apa pun**; cukup laporkan temuanmu di ringkasan akhir.

✅ **Selesai Fase 2 jika**: tab Uma Musume muncul, slider berjalan, filter berfungsi, tidak ada error di game lain.

---

## 6. FASE 3: Fitur Komunitas

Semua fitur memakai service dari Fase 1. Buat komponen baru di `components/community/`.

### 6.1 Favorit ❤️
- Ikon hati di kartu karakter (`CharacterSection`) **tanpa mengubah ukuran kartu** (posisikan `absolute` di pojok).
- Pakai `favoriteService`. Buat section **"Koleksi Favoritku"** (di halaman profil/komunitas) yang menampilkan karakter favorit lintas game.

### 6.2 Live Search
- Input pencarian di atas slider karakter: filter nama karakter secara real-time (debounce 200 ms) di game yang aktif, dengan opsi "cari di semua game".
- Tampilkan pesan kosong yang ramah jika tidak ada hasil.

### 6.3 Pop-up Detail Karakter
- Klik kartu → modal berisi gambar besar, nama, deskripsi, (untuk Uma: grafik stat sederhana berbasis `div`/SVG), tombol favorit, tombol vote, dan **kolom komentar** (`commentService`).
- Modal bisa ditutup dengan tombol X, klik di luar, dan tombol `Esc`.

### 6.4 Voting Mingguan 🏆
- Halaman/section **"Ranking Minggu Ini"**: top 10 karakter dengan vote terbanyak, filter per game.
- Terapkan aturan vote dari 4.3 dan tampilkan sisa jatah vote user (misal "Sisa 2 vote minggu ini").
- Ranking dihitung dari data lokal; tampilkan banner mode lokal.

### 6.5 Halaman Komunitas `/community`
- Route baru `app/community/page.tsx` berisi tab: **Ranking**, **Favoritku**, **Leaderboard**.
- Tambahkan link "Komunitas" di `Navbar` (desktop + drawer mobile).

---

## 7. FASE 4 (Opsional): Mini Game Balap Uma

Buat `components/community/UmaRace.tsx`:

- Pemain memilih satu karakter dari data Uma, lalu mengatur **alokasi 100 poin stat** (Speed, Stamina, Power, Guts, Wit).
- Simulasi balap otomatis **4 peserta CPU** di lintasan horizontal (animasi `requestAnimationFrame` atau CSS transition, dibersihkan saat unmount).
- Logika sederhana: kecepatan dasar dari Speed, ketahanan dari Stamina (melambat di 1/3 akhir bila rendah), burst akselerasi dari Power, dan sedikit faktor acak dari Wit/Guts.
- Skor = poin berdasarkan posisi finis (1st = 100, 2nd = 70, dst.) + bonus. Kirim ke `scoreService` dan tampilkan **Leaderboard** di `/community`.
- Ini game **orisinal** dengan mekanik terinspirasi tema; jangan menyalin mekanik/asset resmi.

---

## 8. Struktur File yang Diharapkan di Akhir

```text
app/
├── community/page.tsx
├── layout.tsx                 # dibungkus ProfileProvider
└── ...
components/
├── ProfileProvider.tsx
├── ProfileModal.tsx
└── community/
    ├── CharacterModal.tsx
    ├── CommentSection.tsx
    ├── WeeklyRanking.tsx
    ├── FavoritesList.tsx
    ├── SearchBar.tsx
    ├── Leaderboard.tsx
    └── UmaRace.tsx            # opsional (Fase 4)
lib/
├── types.ts
├── storage.ts
├── gameData.ts                # + data Uma Musume
└── services/
    ├── profileService.ts
    ├── favoriteService.ts
    ├── voteService.ts
    ├── commentService.ts
    └── scoreService.ts
public/uma/
├── placeholder.png
├── bg-default.jpg
└── README.txt
```

## 9. Checklist Verifikasi (jalankan di akhir tiap fase)

- [ ] `npm run build` sukses tanpa error TypeScript.
- [ ] `npm run lint` tidak ada error baru.
- [ ] Tidak ada hydration warning di console browser.
- [ ] Tidak ada pemanggilan `localStorage` di luar `lib/storage.ts` (cek dengan pencarian teks).
- [ ] Navbar tetap di atas semua elemen (`z-[1000]` utuh), kartu karakter tetap `h-[380px]`.
- [ ] Refresh halaman: profil, favorit, vote, komentar, dan skor tetap tersimpan.
- [ ] Tampilan responsif di lebar 375 px (HP) dan 1280 px (desktop).
- [ ] Footer memuat disclaimer fan site.

## 10. Format Laporan Akhir

Setelah semua fase selesai, tulis ringkasan singkat:
1. File yang dibuat dan diubah.
2. Fitur yang selesai vs yang dilewati (beserta alasannya).
3. Temuan masalah/inkonsistensi (misalnya jumlah game di `GameMenu`).
4. Daftar `TODO` yang perlu diisi manual oleh pemilik web (gambar Uma Musume, deskripsi, stat, video, event).
5. Langkah migrasi ke backend nyata: cukup buat `SupabaseAdapter` yang mengimplementasikan `StorageAdapter`, lalu ganti satu baris ekspor di `lib/storage.ts`.
