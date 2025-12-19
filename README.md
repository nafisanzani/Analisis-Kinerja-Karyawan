# Analisis-Kinerja-Karyawan
Perfect! Aku akan buatkan versi **README profesional lengkap dengan diagram alur aplikasi dan diagram class OOP** supaya terlihat seperti dokumentasi portofolio GitHub yang lengkap. Aku sertakan juga **flowchart proses kinerja karyawan** dan **struktur class**.

---

# Aplikasi Analisis Kinerja Karyawan Berbasis Web

![Node.js](https://img.shields.io/badge/Node.js-v20-green) ![License](https://img.shields.io/badge/License-MIT-blue)

## Deskripsi

Aplikasi web yang membantu mengevaluasi kinerja karyawan berdasarkan tiga indikator utama: disiplin, produktivitas, dan kehadiran.
Aplikasi ini akan menghitung rata-rata skor, menentukan status kinerja, dan menampilkan hasilnya dalam bentuk tabel perbandingan.

Aplikasi ini dirancang menggunakan Node.js, Express, EJS, dan Sequelize ORM dengan database SQLite.
Menggunakan konsep OOP agar kode lebih modular dan mudah dikembangkan.

---

## Fitur Utama

* Memasukkan data karyawan (nama, disiplin, produktivitas, kehadiran, departemen)
* Menghitung rata-rata dan menentukan status kinerja secara otomatis
* Menampilkan tabel perbandingan kinerja seluruh karyawan
* Mengelola departemen (tambah, ubah, hapus, dan lihat)
* Antarmuka yang interaktif menggunakan EJS

---

## Teknologi yang Digunakan

| Teknologi         | Fungsi                                    |
| ----------------- | ----------------------------------------- |
| Node.js & Express | Backend server                            |
| EJS               | Template engine frontend                  |
| Sequelize ORM     | Manajemen database                        |
| SQLite            | Database ringan dan cepat                 |
| OOP               | Struktur kode modular, mudah dikembangkan |

---

## Instalasi

1. **Clone repository:**

```bash
git clone <repository-url>
cd nama-proyek
```

2. **Install dependencies:**

```bash
npm install
```

3. **Jalankan aplikasi:**

```bash
npm start
```

4. **Buka aplikasi di browser:**
   `http://localhost:3000`

---

## Struktur Folder

```
project/
│
├─ controllers/   # Fungsi controller MVC
├─ models/        # Sequelize models (Employee, Department)
├─ routes/        # Routing Express
├─ views/         # Halaman EJS (home, form, hasil)
├─ public/        # CSS, JS, assets
├─ app.js         # Entry point aplikasi
└─ package.json
```

---

## Flowchart Alur Aplikasi

```
[User] 
   |
   v
[Form Input Karyawan] --> [Validasi Data] --> [Hitung Rata-rata & Status] --> [Simpan ke DB] --> [Tabel Perbandingan]
```

**Keterangan:**

1. User memasukkan data karyawan melalui form
2. Sistem memvalidasi input (0–100 untuk skor)
3. Sistem menghitung rata-rata dan menentukan status kinerja
4. Hasil disimpan di database (SQLite)
5. Data ditampilkan dalam tabel perbandingan di halaman hasil

---

## Diagram Class OOP

```
+----------------+
|   Employee     |
+----------------+
| - name         |
| - discipline   |
| - productivity |
| - attendance   |
+----------------+
| +averageScore()|
| +status()      |
| +calculatePerformance() |
+----------------+
```

**Penjelasan:**

* **Encapsulation**: Properti class hanya diakses lewat method
* **Modularity**: Method terpisah untuk rata-rata, status, dan perhitungan performa
* **Extensibility**: Mudah menambah indikator baru tanpa mengubah struktur utama

---

## Contoh Tampilan Aplikasi

**1. Home Page**
![Mockup Home] (file:///D:/piku/WhatsApp%20Image%202025-12-19%20at%2023.23.54i.jpeg)

**2. Form Input Data Karyawan**
![Mockup Form](file:///C:/Users/pican/OneDrive/Pictures/Screenshots/Screenshot%202025-12-19%20232659.png)

**3. Tabel Perbandingan Kinerja**
![Mockup Table](file:///D:/piku/WhatsApp%20Image%202025-12-19%20at%2023.23.54.jpeg)

---

## Contoh Penggunaan

1. Buka halaman **Form Input Data Karyawan**
2. Masukkan data karyawan:

```text
Nama: Budi
Disiplin: 80
Produktivitas: 75
Kehadiran: 90
Departemen: HRD
```

3. Klik **Simpan**
4. Hasil akan muncul di **Halaman Tabel Perbandingan**:

| Nama | Disiplin | Produktivitas | Kehadiran | Rata-rata | Status       |
| ---- | -------- | ------------- | --------- | --------- | ------------ |
| Budi | 80       | 75            | 90        | 81.67     | Kinerja Baik |

---

## Kontribusi

1. Fork repository
2. Buat branch baru (`git checkout -b feature-xyz`)
3. Tambahkan fitur atau perbaikan
4. Lakukan pull request

---

## Lisensi

Proyek ini menggunakan **MIT License** – bebas digunakan, dimodifikasi, dan didistribusikan.
