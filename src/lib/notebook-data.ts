// ============================================================
// notebook-data.ts — Data kurikulum PHP Notebook untuk Laravel
// Setiap notebook berisi array "cells" (markdown atau code)
// ============================================================

export interface MarkdownCell {
    type: "markdown";
    content: string;
}

export interface CodeCell {
    type: "code";
    defaultCode: string;
}

export type Cell = MarkdownCell | CodeCell;

export interface Notebook {
    id: string;
    title: string;
    description: string;
    icon: string; // emoji
    cells: Cell[];
}

// ────────────────────────────────────────────────────────────
// NOTEBOOK 1 — Konsep Dasar & Variabel
// ────────────────────────────────────────────────────────────
const notebook1: Notebook = {
    id: "konsep-dasar-variabel",
    title: "Konsep Dasar & Variabel",
    description:
        "Apa itu pemrograman? Apa itu variabel? Aturan penamaan, sintaks $, dan echo.",
    icon: "📦",
    cells: [
        {
            type: "markdown",
            content: `# 📦 Konsep Dasar & Variabel

## Apa Itu Pemrograman?

Pemrograman adalah **cara kita memberikan instruksi kepada komputer**. Bayangkan kamu menulis resep masakan — komputer akan mengikuti langkah demi langkah persis seperti yang kamu tulis.

PHP adalah bahasa pemrograman yang sangat populer untuk membuat **website dinamis**. Laravel, framework PHP paling terkenal, dibangun di atas PHP. Jadi, memahami dasar PHP adalah langkah pertama yang wajib!

---

## Apa Itu Variabel?

> 🧠 **Analogi:** Variabel itu seperti **kotak berlabel**. Kamu bisa menaruh apa saja ke dalam kotak itu — angka, teks, atau data lainnya. Label di kotak itu adalah **nama variabel**, dan isi kotak itu adalah **nilainya**.

Dalam PHP, semua variabel diawali dengan tanda **dolar** (\`$\`):

\`\`\`php
$nama = "Budi";
$umur = 25;
\`\`\`

### Aturan Penamaan Variabel:
- **Harus** diawali dengan \`$\` diikuti huruf atau underscore (\`_\`)
- **Tidak boleh** diawali angka (contoh: \`$1nama\` ❌)
- **Case-sensitive:** \`$Nama\` dan \`$nama\` adalah variabel yang berbeda
- Gunakan nama yang **deskriptif**: \`$harga_produk\` lebih baik dari \`$x\`

## Perintah \`echo\`

\`echo\` digunakan untuk **menampilkan output** ke layar. Ini adalah perintah yang paling sering kamu gunakan.`,
        },
        {
            type: "code",
            defaultCode: `<?php
// Membuat variabel dan menampilkannya
$nama = "Budi";
$umur = 25;

echo "Halo, nama saya " . $nama . "\\n";
echo "Umur saya " . $umur . " tahun\\n";
?>`,
        },
        {
            type: "markdown",
            content: `## Menggabungkan Teks (Concatenation)

Dalam PHP, kita menggunakan **titik** (\`.\`) untuk menggabungkan string (teks). Ini berbeda dari bahasa lain yang biasanya menggunakan \`+\`.

> 💡 **Tips:** Tanda \`\\n\` digunakan untuk membuat **baris baru** di output.

### Latihan

Coba ubah kode di bawah ini — ganti nama dan kota menjadi data kamu sendiri!`,
        },
        {
            type: "code",
            defaultCode: `<?php
// Latihan: Ganti nilai variabel di bawah ini!
$nama = "Andi";
$kota = "Jakarta";
$hobi = "membaca";

echo "Perkenalkan, saya " . $nama . "\\n";
echo "Saya tinggal di " . $kota . "\\n";
echo "Hobi saya adalah " . $hobi . "\\n";
?>`,
        },
    ],
};

// ────────────────────────────────────────────────────────────
// NOTEBOOK 2 — Tipe Data
// ────────────────────────────────────────────────────────────
const notebook2: Notebook = {
    id: "tipe-data",
    title: "Tipe Data",
    description:
        "Memahami String, Integer, Float, dan Boolean. Cara memeriksa tipe data.",
    icon: "🏷️",
    cells: [
        {
            type: "markdown",
            content: `# 🏷️ Tipe Data dalam PHP

Setiap variabel dalam PHP menyimpan data dengan **tipe** tertentu. Memahami tipe data sangat penting karena menentukan **operasi apa yang bisa dilakukan** pada data tersebut.

---

## 4 Tipe Data Dasar

| Tipe | Deskripsi | Contoh |
|------|-----------|--------|
| **String** | Teks, diapit tanda kutip | \`"Halo Dunia"\` |
| **Integer** | Bilangan bulat | \`42\`, \`-7\` |
| **Float** | Bilangan desimal | \`3.14\`, \`9.99\` |
| **Boolean** | Benar atau Salah | \`true\`, \`false\` |

> 🧠 **Analogi:** Bayangkan loker penyimpanan di stasiun. Ada loker untuk koper (String), loker untuk dokumen kecil (Integer), loker khusus barang rapuh (Float), dan saklar on/off (Boolean). Masing-masing punya "bentuk" yang berbeda.`,
        },
        {
            type: "code",
            defaultCode: `<?php
// Contoh berbagai tipe data
$nama = "Laravel";       // String
$versi = 11;             // Integer
$rating = 4.85;          // Float
$gratis = true;          // Boolean

echo "Framework: " . $nama . "\\n";
echo "Versi: " . $versi . "\\n";
echo "Rating: " . $rating . "\\n";
echo "Gratis: " . ($gratis ? "Ya" : "Tidak") . "\\n";
?>`,
        },
        {
            type: "markdown",
            content: `## Memeriksa Tipe Data

PHP menyediakan beberapa fungsi untuk memeriksa tipe data:

- \`gettype($var)\` — mengembalikan nama tipe sebagai string
- \`var_dump($var)\` — menampilkan tipe DAN nilai (sangat berguna untuk debugging!)
- \`is_string()\`, \`is_int()\`, \`is_float()\`, \`is_bool()\` — mengecek tipe tertentu`,
        },
        {
            type: "code",
            defaultCode: `<?php
$teks = "Belajar PHP";
$angka = 100;
$desimal = 3.14;
$benar = true;

echo "--- Menggunakan gettype() ---\\n";
echo "Tipe dari teks: " . gettype($teks) . "\\n";
echo "Tipe dari angka: " . gettype($angka) . "\\n";
echo "Tipe dari desimal: " . gettype($desimal) . "\\n";
echo "Tipe dari benar: " . gettype($benar) . "\\n";

echo "\\n--- Menggunakan var_dump() ---\\n";
var_dump($teks);
var_dump($angka);
var_dump($desimal);
var_dump($benar);
?>`,
        },
    ],
};

// ────────────────────────────────────────────────────────────
// NOTEBOOK 3 — Operator Aritmatika & Logika
// ────────────────────────────────────────────────────────────
const notebook3: Notebook = {
    id: "operator",
    title: "Operator Aritmatika & Logika",
    description:
        "Operasi matematika dasar dan operator logika (&&, ||, !).",
    icon: "🔢",
    cells: [
        {
            type: "markdown",
            content: `# 🔢 Operator Aritmatika & Logika

Operator adalah **simbol khusus** yang digunakan untuk melakukan operasi pada variabel dan nilai.

---

## Operator Aritmatika

| Operator | Fungsi | Contoh |
|----------|--------|--------|
| \`+\` | Penjumlahan | \`5 + 3\` → \`8\` |
| \`-\` | Pengurangan | \`10 - 4\` → \`6\` |
| \`*\` | Perkalian | \`6 * 7\` → \`42\` |
| \`/\` | Pembagian | \`15 / 3\` → \`5\` |
| \`%\` | Modulus (sisa bagi) | \`10 % 3\` → \`1\` |

> 🧠 **Analogi:** Operator aritmatika ini persis seperti kalkulator. Modulus (\`%\`) mungkin baru — ia mengembalikan **sisa** dari pembagian. Contoh: 10 dibagi 3 = 3 sisa **1**.`,
        },
        {
            type: "code",
            defaultCode: `<?php
$a = 15;
$b = 4;

echo "a = $a, b = $b\\n";
echo "─────────────────────\\n";
echo "Penjumlahan: " . ($a + $b) . "\\n";
echo "Pengurangan: " . ($a - $b) . "\\n";
echo "Perkalian:   " . ($a * $b) . "\\n";
echo "Pembagian:   " . ($a / $b) . "\\n";
echo "Modulus:     " . ($a % $b) . "\\n";
?>`,
        },
        {
            type: "markdown",
            content: `## Operator Logika

Operator logika digunakan untuk membuat **keputusan** berdasarkan kondisi. Hasilnya selalu \`true\` atau \`false\`.

| Operator | Nama | Deskripsi |
|----------|------|-----------|
| \`&&\` | AND | Benar jika **kedua** kondisi benar |
| \`\\|\\|\` | OR | Benar jika **salah satu** kondisi benar |
| \`!\` | NOT | Membalik nilai: benar jadi salah, salah jadi benar |

> 🧠 **Analogi:** 
> - **AND (&&):** Untuk masuk bioskop, kamu harus punya tiket **DAN** berumur cukup.
> - **OR (||):** Kamu bisa bayar pakai tunai **ATAU** kartu.
> - **NOT (!):** Jika lampu menyala = true, maka \`!true\` = false (lampu mati).`,
        },
        {
            type: "code",
            defaultCode: `<?php
$umur = 20;
$punya_ktp = true;
$punya_sim = false;

// Operator AND (&&): kedua kondisi harus benar
$boleh_masuk = ($umur >= 17) && $punya_ktp;
echo "Boleh masuk (umur >= 17 DAN punya KTP): ";
echo ($boleh_masuk ? "Ya" : "Tidak") . "\\n";

// Operator OR (||): salah satu kondisi cukup
$punya_identitas = $punya_ktp || $punya_sim;
echo "Punya identitas (KTP ATAU SIM): ";
echo ($punya_identitas ? "Ya" : "Tidak") . "\\n";

// Operator NOT (!): membalik nilai
echo "Tidak punya SIM: ";
echo (!$punya_sim ? "Ya, benar" : "Salah") . "\\n";
?>`,
        },
    ],
};

// ────────────────────────────────────────────────────────────
// NOTEBOOK 4 — Logika Percabangan / Control Flow
// ────────────────────────────────────────────────────────────
const notebook4: Notebook = {
    id: "percabangan",
    title: "Logika Percabangan / Control Flow",
    description:
        "If, Else, ElseIf, dan Switch. Membuat keputusan dalam program.",
    icon: "🔀",
    cells: [
        {
            type: "markdown",
            content: `# 🔀 Logika Percabangan / Control Flow

Dalam kehidupan sehari-hari, kita selalu membuat keputusan:
- *"Jika hujan, bawa payung. Jika tidak, pakai topi."*

Dalam pemrograman, kita menggunakan **if-else** untuk membuat keputusan serupa.

---

> 🧠 **Analogi:** Bayangkan seorang **penjaga pintu (bouncer)** di sebuah website. Ia memeriksa:
> - Apakah umur pengunjung > 18 tahun?
> - Jika **ya**, boleh masuk.
> - Jika **tidak**, ditolak.

## Sintaks If-Else

\`\`\`php
if (kondisi) {
    // kode jika kondisi BENAR
} elseif (kondisi_lain) {
    // kode jika kondisi_lain BENAR
} else {
    // kode jika SEMUA kondisi SALAH
}
\`\`\``,
        },
        {
            type: "code",
            defaultCode: `<?php
// Simulasi: Penjaga pintu website
$umur = 20;

echo "Umur pengunjung: $umur tahun\\n";
echo "─────────────────────────\\n";

if ($umur >= 18) {
    echo "✅ Selamat datang! Anda boleh mengakses website ini.\\n";
} elseif ($umur >= 13) {
    echo "⚠️ Akses terbatas. Beberapa konten tidak tersedia.\\n";
} else {
    echo "❌ Maaf, Anda belum cukup umur.\\n";
}

// Coba ganti nilai $umur menjadi 15 atau 10!
?>`,
        },
        {
            type: "markdown",
            content: `## Switch Statement

Ketika kamu punya **banyak kondisi** yang membandingkan satu variabel terhadap beberapa nilai, \`switch\` lebih rapi daripada banyak \`if-elseif\`.

> 💡 **Penting:** Jangan lupa \`break\` setelah setiap \`case\`, atau PHP akan menjalankan case berikutnya juga!`,
        },
        {
            type: "code",
            defaultCode: `<?php
$hari = "Senin";

echo "Hari ini: $hari\\n";
echo "─────────────────────────\\n";

switch ($hari) {
    case "Senin":
        echo "📚 Waktunya belajar PHP!\\n";
        break;
    case "Selasa":
    case "Rabu":
        echo "💻 Latihan coding...\\n";
        break;
    case "Sabtu":
    case "Minggu":
        echo "🎉 Akhir pekan! Tapi tetap review materi ya.\\n";
        break;
    default:
        echo "📝 Hari biasa, tetap produktif!\\n";
        break;
}
?>`,
        },
    ],
};

// ────────────────────────────────────────────────────────────
// NOTEBOOK 5 — Konsep Perulangan / Looping
// ────────────────────────────────────────────────────────────
const notebook5: Notebook = {
    id: "perulangan",
    title: "Konsep Perulangan / Looping",
    description:
        "Kenapa butuh loop? Prinsip DRY. For loop dan While loop.",
    icon: "🔁",
    cells: [
        {
            type: "markdown",
            content: `# 🔁 Konsep Perulangan / Looping

## Kenapa Kita Butuh Loop?

Bayangkan kamu harus menampilkan angka 1 sampai 100. Tanpa loop, kamu harus menulis \`echo\` **100 kali**! 😱

> 🧠 **Prinsip DRY:** Don't Repeat Yourself. Jika kamu menulis kode yang sama berulang kali, itu tandanya kamu butuh **loop**.

---

## For Loop

\`for\` digunakan ketika kamu **tahu pasti** berapa kali pengulangan akan terjadi.

\`\`\`php
for ($i = 0; $i < 5; $i++) {
    // kode yang diulang
}
\`\`\`

Penjelasan:
1. \`$i = 0\` — titik mulai (inisialisasi)
2. \`$i < 5\` — kondisi: lanjutkan selama ini benar
3. \`$i++\` — tambah 1 setiap iterasi`,
        },
        {
            type: "code",
            defaultCode: `<?php
echo "=== Menghitung 1 sampai 10 ===\\n";

for ($i = 1; $i <= 10; $i++) {
    echo "Angka ke-$i\\n";
}

echo "\\n=== Tabel Perkalian 5 ===\\n";
for ($i = 1; $i <= 10; $i++) {
    $hasil = 5 * $i;
    echo "5 x $i = $hasil\\n";
}
?>`,
        },
        {
            type: "markdown",
            content: `## While Loop

\`while\` digunakan ketika kamu **tidak tahu pasti** kapan pengulangan akan berhenti — kamu hanya punya kondisi.

> 🧠 **Analogi:** While loop itu seperti memancing: *"Selama ember belum penuh, terus pancing."* Kamu tidak tahu pasti berapa ikan yang dibutuhkan.

\`\`\`php
while (kondisi) {
    // kode yang diulang
    // PASTIKAN kondisi berubah agar loop berhenti!
}
\`\`\`

> ⚠️ **Hati-hati Infinite Loop!** Jika kondisi tidak pernah menjadi \`false\`, program akan berjalan selamanya.`,
        },
        {
            type: "code",
            defaultCode: `<?php
// Simulasi: Menabung sampai target tercapai
$tabungan = 0;
$target = 100000;
$minggu = 0;
$uang_per_minggu = 15000;

echo "🎯 Target tabungan: Rp " . number_format($target, 0, ',', '.') . "\\n";
echo "💰 Menabung Rp " . number_format($uang_per_minggu, 0, ',', '.') . " per minggu\\n";
echo "─────────────────────────────\\n";

while ($tabungan < $target) {
    $minggu++;
    $tabungan += $uang_per_minggu;
    echo "Minggu $minggu: Rp " . number_format($tabungan, 0, ',', '.') . "\\n";
}

echo "─────────────────────────────\\n";
echo "🎉 Target tercapai dalam $minggu minggu!\\n";
?>`,
        },
    ],
};

// ────────────────────────────────────────────────────────────
// NOTEBOOK 6 — Struktur Data: Array
// ────────────────────────────────────────────────────────────
const notebook6: Notebook = {
    id: "array",
    title: "Struktur Data: Array",
    description:
        "Apa itu array? Indexed array dan associative array. Sangat penting di Laravel!",
    icon: "📚",
    cells: [
        {
            type: "markdown",
            content: `# 📚 Struktur Data: Array

## Apa Itu Array?

> 🧠 **Analogi:** Array itu seperti **rak buku**. Setiap slot di rak punya nomor urut (indeks), dan kamu bisa menyimpan satu buku di setiap slot.

Array memungkinkan kamu menyimpan **banyak nilai** dalam satu variabel. Tanpa array, untuk menyimpan 100 nama mahasiswa, kamu butuh 100 variabel! 😵

---

## Indexed Array (Array Berindeks)

Setiap elemen punya **indeks angka** yang dimulai dari **0**.

\`\`\`php
$buah = ["Apel", "Mangga", "Jeruk"];
// Indeks:   0        1        2
\`\`\``,
        },
        {
            type: "code",
            defaultCode: `<?php
// Membuat indexed array
$bahasa = ["PHP", "JavaScript", "Python", "Go"];

echo "=== Daftar Bahasa Pemrograman ===\\n";
echo "Bahasa pertama: " . $bahasa[0] . "\\n";
echo "Bahasa kedua: " . $bahasa[1] . "\\n";
echo "Total bahasa: " . count($bahasa) . "\\n";

// Menambahkan elemen baru
$bahasa[] = "Rust";
echo "\\nSetelah ditambah Rust:\\n";
echo "Total bahasa: " . count($bahasa) . "\\n";
echo "Bahasa terakhir: " . $bahasa[count($bahasa) - 1] . "\\n";
?>`,
        },
        {
            type: "markdown",
            content: `## Associative Array (Array Asosiatif)

Ini adalah **fitur paling penting** yang harus kamu kuasai! Di Laravel, data dari database hampir selalu dikembalikan sebagai associative array.

> 🧠 **Analogi:** Jika indexed array seperti rak bernomor, maka associative array seperti **kamus** — kamu mencari berdasarkan **kata kunci (key)**, bukan nomor urut.

\`\`\`php
$mahasiswa = [
    "nama" => "Siti",
    "umur" => 21,
    "jurusan" => "Informatika"
];
\`\`\`

> [!IMPORTANT]
> Di **Laravel**, ketika kamu mengambil data dari database, hasilnya sering berbentuk associative array. Contoh: \`$user['name']\`, \`$user['email']\`. Kuasai konsep ini sekarang!`,
        },
        {
            type: "code",
            defaultCode: `<?php
// Associative Array — seperti data dari database Laravel
$produk = [
    "nama" => "Laravel Tshirt",
    "harga" => 150000,
    "stok" => 25,
    "tersedia" => true,
];

echo "=== Detail Produk ===\\n";
echo "Nama    : " . $produk["nama"] . "\\n";
echo "Harga   : Rp " . number_format($produk["harga"], 0, ',', '.') . "\\n";
echo "Stok    : " . $produk["stok"] . " pcs\\n";
echo "Status  : " . ($produk["tersedia"] ? "Tersedia ✅" : "Habis ❌") . "\\n";

// Mengubah nilai
$produk["stok"] = $produk["stok"] - 1;
echo "\\nSetelah 1 terjual, stok: " . $produk["stok"] . " pcs\\n";
?>`,
        },
    ],
};

// ────────────────────────────────────────────────────────────
// NOTEBOOK 7 — Looping Array
// ────────────────────────────────────────────────────────────
const notebook7: Notebook = {
    id: "looping-array",
    title: "Looping Array",
    description:
        "Menggunakan foreach untuk menampilkan data. Ini logika yang sama di Laravel Blade!",
    icon: "🔄",
    cells: [
        {
            type: "markdown",
            content: `# 🔄 Looping Array dengan foreach

## Kenapa foreach?

Ketika kamu punya array berisi banyak data (misalnya daftar produk dari database), kamu perlu cara untuk **menampilkan semuanya satu per satu**. Di sinilah \`foreach\` sangat berguna.

> 🧠 **Koneksi ke Laravel:** Di Laravel Blade, kamu akan menulis:
> \`\`\`php
> @foreach($products as $product)
>     <h2>{{ $product['nama'] }}</h2>
> @endforeach
> \`\`\`
> Logikanya **persis sama** dengan foreach PHP biasa! Kuasai di sini, gunakan di Laravel nanti.

---

## Sintaks foreach

\`\`\`php
// Untuk indexed array
foreach ($array as $item) { ... }

// Untuk associative array
foreach ($array as $key => $value) { ... }
\`\`\``,
        },
        {
            type: "code",
            defaultCode: `<?php
// Looping indexed array
$menu = ["Nasi Goreng", "Mie Ayam", "Soto", "Bakso", "Rendang"];

echo "=== Menu Hari Ini ===\\n";
$nomor = 1;
foreach ($menu as $makanan) {
    echo "$nomor. $makanan\\n";
    $nomor++;
}
?>`,
        },
        {
            type: "markdown",
            content: `## foreach dengan Associative Array

Ini adalah pola yang **paling sering** kamu temui di Laravel — menampilkan daftar data dari database.`,
        },
        {
            type: "code",
            defaultCode: `<?php
// Simulasi: Data dari database (array of associative arrays)
$mahasiswa = [
    ["nama" => "Andi", "jurusan" => "Teknik Informatika", "ipk" => 3.7],
    ["nama" => "Siti", "jurusan" => "Sistem Informasi", "ipk" => 3.9],
    ["nama" => "Rudi", "jurusan" => "Ilmu Komputer", "ipk" => 3.5],
    ["nama" => "Dewi", "jurusan" => "Teknik Informatika", "ipk" => 3.8],
];

echo "==========================================\\n";
echo "       DAFTAR MAHASISWA BERPRESTASI       \\n";
echo "==========================================\\n\\n";

foreach ($mahasiswa as $index => $mhs) {
    $nomor = $index + 1;
    echo "[$nomor] {$mhs['nama']}\\n";
    echo "    Jurusan : {$mhs['jurusan']}\\n";
    echo "    IPK     : {$mhs['ipk']}\\n";

    if ($mhs['ipk'] >= 3.8) {
        echo "    Status  : ⭐ Cum Laude\\n";
    }
    echo "\\n";
}

echo "Total mahasiswa: " . count($mahasiswa) . " orang\\n";
?>`,
        },
    ],
};

// ────────────────────────────────────────────────────────────
// NOTEBOOK 8 — Pengenalan Fungsi / Functions
// ────────────────────────────────────────────────────────────
const notebook8: Notebook = {
    id: "fungsi",
    title: "Pengenalan Fungsi / Functions",
    description:
        "Apa itu fungsi? Analogi resep/mesin pabrik. Parameter dan return value.",
    icon: "⚙️",
    cells: [
        {
            type: "markdown",
            content: `# ⚙️ Pengenalan Fungsi / Functions

## Apa Itu Fungsi?

> 🧠 **Analogi:** Fungsi itu seperti **mesin pabrik** atau **resep masakan**:
> 1. Kamu memasukkan **bahan mentah** (parameter/argumen)
> 2. Mesin memproses bahan tersebut
> 3. Keluar **produk jadi** (return value)
>
> Sekali kamu buat resep, kamu bisa pakai berulang kali tanpa menulis ulang langkah-langkahnya!

---

## Kenapa Butuh Fungsi?

1. **Reusable** — tulis sekali, pakai berkali-kali
2. **Terorganisir** — kode lebih rapi dan mudah dibaca
3. **Mudah didebug** — jika ada bug, cukup perbaiki di satu tempat

## Sintaks Fungsi

\`\`\`php
function namaFungsi($parameter1, $parameter2) {
    // proses
    return $hasil;
}
\`\`\``,
        },
        {
            type: "code",
            defaultCode: `<?php
// Fungsi sederhana tanpa parameter
function spiLearnel() {
    echo "Selamat datang di PHP Notebook! 🎉\\n";
}

// Fungsi dengan parameter
function spiLearnom($nama) {
    echo "Halo, $nama! Semangat belajar PHP! 💪\\n";
}

// Panggil fungsi
spiLearnel();
spiLearnom("Budi");
spiLearnom("Siti");
spiLearnom("Andi");
?>`,
        },
        {
            type: "markdown",
            content: `## Fungsi dengan Return Value

Fungsi tidak hanya menampilkan output — ia bisa **mengembalikan nilai** yang bisa disimpan ke variabel atau digunakan dalam operasi lain.

> 💡 **Di Laravel**, hampir semua proses dibungkus dalam fungsi/method. Contoh: \`$user = User::find(1);\` memanggil fungsi \`find()\` yang **mengembalikan** data user.`,
        },
        {
            type: "code",
            defaultCode: `<?php
// Fungsi menghitung diskon
function hitungDiskon($harga, $persen) {
    $diskon = $harga * ($persen / 100);
    $harga_akhir = $harga - $diskon;
    return $harga_akhir;
}

// Fungsi format rupiah
function formatRupiah($angka) {
    return "Rp " . number_format($angka, 0, ',', '.');
}

// Gunakan fungsi
$harga_asli = 250000;
$diskon_persen = 20;
$harga_final = hitungDiskon($harga_asli, $diskon_persen);

echo "=== Kalkulator Diskon ===\\n";
echo "Harga asli  : " . formatRupiah($harga_asli) . "\\n";
echo "Diskon      : $diskon_persen%\\n";
echo "Harga akhir : " . formatRupiah($harga_final) . "\\n";
echo "Hemat       : " . formatRupiah($harga_asli - $harga_final) . "\\n";
?>`,
        },
        {
            type: "markdown",
            content: `## Fungsi dengan Nilai Default

Kamu bisa memberikan **nilai default** pada parameter. Jika pemanggil tidak mengirim argumen, nilai default yang digunakan.`,
        },
        {
            type: "code",
            defaultCode: `<?php
// Fungsi dengan parameter default
function buatProfil($nama, $role = "Student", $kota = "Jakarta") {
    echo "──────────────────\\n";
    echo "👤 Nama  : $nama\\n";
    echo "🎓 Role  : $role\\n";
    echo "📍 Kota  : $kota\\n";
}

// Panggil dengan berbagai cara
buatProfil("Andi");
buatProfil("Siti", "Mentor");
buatProfil("Rudi", "Admin", "Bandung");
?>`,
        },
    ],
};

// ════════════════════════════════════════════════════════════
// EXPORT: Daftar semua notebook
// ════════════════════════════════════════════════════════════
export const notebooks: Notebook[] = [
    notebook1,
    notebook2,
    notebook3,
    notebook4,
    notebook5,
    notebook6,
    notebook7,
    notebook8,
];
