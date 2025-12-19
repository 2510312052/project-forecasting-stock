# project-forecasting-stock
Sistem Pendukung Keputusan Perencanaan Stok Berbasis Analisis Tren dan Forecasting Permintaan Menggunakan Moving Average

## 📌 Deskripsi Proyek
Aplikasi web sederhana untuk forecasting penjualan barang menggunakan metode **Moving Average**.  
Dilengkapi dengan:  
- Input data penjualan
- Forecasting otomatis
- Tabel trend penjualan (Naik/Turun/Stabil)
- Rekomendasi tambah/kurangi stok
- Fitur reset data untuk mulai dari awal

Proyek ini dibuat sebagai **Pengganti UAS Logika Pemrograman** dengan penerapan OOP, algoritma matematis, dan teknologi modern berbasis Node.js.

---

## 📌 Fitur Aplikasi
1. Input data penjualan per bulan
2. Forecasting stok menggunakan **moving average periode 3**
3. Trend penjualan (Naik / Turun / Stabil)
4. Rekomendasi jumlah stok (Tambah / Kurangi / Stabil) dengan toleransi ±1
5. Reset data untuk memulai perhitungan baru
6. CRUD untuk tabel `Sales` menggunakan Sequelize ORM
7. Frontend menggunakan **EJS** dengan template inheritance (`layout.ejs`)

---

## 📌 Teknologi
- **Backend:** Node.js + Express
- **Frontend:** EJS (Embedded JavaScript Template)
- **Database:** SQLite via Sequelize ORM
- **Algoritma:** Moving Average untuk forecasting
- **Async Programming:** Async/Await untuk query database
- **Version Control:** Git + GitHub

---

## 📌 Struktur Folder
uas-forecasting-stock/
├── models/ # Sequelize models (Product.js, Sales.js, db.js)
├── services/ # Algoritma forecasting (forecastService.js)
├── views/ # Template EJS (layout.ejs, index.ejs, form.ejs)
├── public/ # Optional: css/js/images
├── routes/ # Optional: route file jika dipisah
├── app.js # File utama Node.js
├── package.json
├── package-lock.json
└── README.md


---                                          

## 📌 Instalasi & Menjalankan Aplikasi
1. **Clone repo:**
```bash
git clone https://github.com/username/uas-forecasting-stock.git
```
---

### 2. Install Dependencies

Pastikan Node.js sudah terinstall, lalu jalankan:

```bash
npm install
```

---

### 3. Setup database


```bash
npm run db:setup
```

Perintah ini akan menghasilkan file `database.sqlite` secara otomatis.

---

### 4. Menjalankan Aplikasi

```bash
npm run dev
```

Jika berhasil, akan muncul pesan bahwa server berjalan.

---

### 5. Buka browser

Buka browser dan akses:

```
http://localhost:3000
```



## Anggota Kelompok

* Cahaya Nur Hayati (2510312045)
* Tamam Ahmad Hafizh (2510312052)
* Rafly Achmad Fahrezzy (2510312057)
