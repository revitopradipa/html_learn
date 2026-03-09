export type TagContent = {
  tag: string;
  description: string;
  attributes: { name: string; description: string }[];
  laravelContext: string;
  codeExample?: string; // Contoh kode PHP+HTML (untuk topik lanjutan)
};

export type Topic = {
  id: string;
  title: string;
  tags: TagContent[];
  isAdvanced?: boolean; // Topik lanjutan dengan layout tutorial
};


export const curriculumData: Topic[] = [
  {
    id: "basic-structure",
    title: "Struktur Dasar & Semantik",
    tags: [
      {
        tag: "<html>",
        description: "Elemen akar (root) dari dokumen HTML. Semua elemen HTML lainnya berada di dalam tag ini.",
        attributes: [
          { name: "lang", description: "Menentukan bahasa dokumen (contoh: lang=\"id\"). Penting untuk SEO dan aksesibilitas." }
        ],
        laravelContext: "Di Laravel Blade, tag ini biasanya diletakkan pada layout induk (master layout) misal `resources/views/layouts/app.blade.php`. Mengatur `lang=\"{{ str_replace('_', '-', app()->getLocale()) }}\"` sangat disarankan."
      },
      {
        tag: "<meta>",
        description: "Menyediakan metadata tentang dokumen HTML, seperti pengaturan charset dan viewport.",
        attributes: [
          { name: "charset", description: "Menentukan karakter encoding (biasanya \"UTF-8\")." },
          { name: "name", description: "Nama metadata, misal \"viewport\" atau \"description\"." },
          { name: "content", description: "Isi dari metadata tersebut." }
        ],
        laravelContext: "Sering digunakan di layout Blade untuk CSRF token: `<meta name=\"csrf-token\" content=\"{{ csrf_token() }}\">` yang berguna untuk AJAX request di Laravel."
      },
      {
        tag: "<body>",
        description: "Menampung seluruh konten yang akan ditampilkan di web browser.",
        attributes: [],
        laravelContext: "Di dalam tag ini pada layout master Blade, kita menggunakan `@yield('content')` untuk menyuntikkan (inject) konten dari view lain."
      },
      {
        tag: "<header>",
        description: "Mendefinisikan header untuk sebuah dokumen atau section. Biasanya berisi navbar atau logo.",
        attributes: [],
        laravelContext: "Bisa dipisahkan menjadi komponen Blade tersendiri (misal: `<x-header />` atau `@include('partials.header')`) untuk membuat kode lebih rapi."
      },
      {
        tag: "<footer>",
        description: "Mendefinisikan footer atau bagian paling bawah dari dokumen/section.",
        attributes: [],
        laravelContext: "Sama seperti header, footer di Laravel biasanya dipisah ke dalam file komponen Blade tersendiri agar mudah diubah di satu tempat."
      },
      {
        tag: "<nav>",
        description: "Mendefinisikan blok navigasi (kumpulan link).",
        attributes: [],
        laravelContext: "Digunakan di dalam master layout untuk menu. Di Laravel, href di dalam nav sering menggunakan fungsi `route('nama.route')`."
      },
      {
        tag: "<div>",
        description: "Elemen kontainer generik tanpa makna semantis khusus. Sangat sering digunakan untuk layouting.",
        attributes: [],
        laravelContext: "Dalam styling Tailwind untuk Blade, `<div>` adalah elemen yang paling banyak kita berikan class seperti `flex`, `grid`, `container`, dll."
      },
      {
        tag: "<span>",
        description: "Elemen kontainer generik inline. Digunakan untuk memberi styling teks dalam baris yang sama.",
        attributes: [],
        laravelContext: "Sering dipadukan dengan Alpine.js di dalam proyek Laravel untuk badge status atau memanipulasi sebagian kecil teks/ikon."
      }
    ]
  },
  {
    id: "links-images",
    title: "Links & Images",
    tags: [
      {
        tag: "<a>",
        description: "Anchor tag, digunakan untuk membuat tautan hiper (hyperlink) ke halaman lain, file, email, dll.",
        attributes: [
          { name: "href", description: "Menentukan URL tujuan tautan." },
          { name: "target=\"_blank\"", description: "Membuka tautan di tab atau jendela baru." },
          { name: "rel", description: "Menentukan hubungan antara halaman saat ini dan tautan tujuan (misal: \"noopener noreferrer\" untuk keamanan)." }
        ],
        laravelContext: "Di Laravel, JANGAN pernah menebak-nebak URL manual. Selalu gunakan helper route: `<a href=\"{{ route('user.profile', $id) }}\">`. Ini mencegah link rusak jika URL dirubah di file web.php."
      },
      {
        tag: "<img>",
        description: "Menampilkan gambar pada halaman web.",
        attributes: [
          { name: "src", description: "Lokasi file gambar." },
          { name: "alt", description: "Teks alternatif jika gambar gagal dimuat (penting untuk screen reader)." },
          { name: "width/height", description: "Ukuran gambar dalam piksel." },
          { name: "loading", description: "Nilai \"lazy\" agar gambar baru dimuat saat discroll (lazy-loading)." }
        ],
        laravelContext: "Di Blade, panggil gambar dari folder public menggunakan asset(): `<img src=\"{{ asset('images/logo.png') }}\">` atau menggunakan URL fitur storage Laravel dari hasil upload."
      }
    ]
  },
  {
    id: "typography",
    title: "Typography & Formatting",
    tags: [
      {
        tag: "<h1>-<h6>",
        description: "Mendefinisikan judul atau heading. <h1> untuk judul terpenting, <h6> untuk yang paling tidak penting.",
        attributes: [],
        laravelContext: "Sangat penting untuk layout artikel blog atau judul halaman CMS yang dibangun pakai Laravel. Biasanya dicetak dinamis misal `<h1>{{ $post->title }}</h1>`."
      },
      {
        tag: "<p>",
        description: "Mendefinisikan sebuah paragraf teks.",
        attributes: [],
        laravelContext: "Untuk mencetak deskripsi dari database, misal `<p>{{ $user->bio }}</p>`. Hati-hati jangan mencetak HTML unescaped kecuali pakai `{!! $content !!}`."
      },
      {
        tag: "<b> / <strong>",
        description: "Membuat teks tebal. <strong> memberikan penekanan semantis (lebih penting) daripada sekadar <b>.",
        attributes: [],
        laravelContext: "Membantu menyorot hasil pencarian dinamis atau data krusial di tabel view Laravel."
      },
      {
        tag: "<i> / <em>",
        description: "Membuat teks miring. <em> memberikan penekanan intonasi semantis.",
        attributes: [],
        laravelContext: "Bisa digunakan untuk sub-judul, kutipan, atau text sekunder pada tampilan aplikasi Laravel."
      },
      {
        tag: "<br>",
        description: "Menambahkan baris baru (line break) tanpa membuat paragraf baru.",
        attributes: [],
        laravelContext: "Gunakan fungsi `nl2br(e($text))` di Blade untuk mengubah jeda baris dari textarea database menjadi `<br>` yang aman."
      },
      {
        tag: "<hr>",
        description: "Horizontal rule, membuat garis pemisah horizon.",
        attributes: [],
        laravelContext: "Membantu memisahkan list iterasi `@foreach` di Blade jika tidak pakai CSS border."
      }
    ]
  },
  {
    id: "lists",
    title: "Lists (Daftar)",
    tags: [
      {
        tag: "<ul>",
        description: "Unordered List (daftar tidak berurut). Item ditampilkan menggunakan titik (bullet point).",
        attributes: [],
        laravelContext: "Sangat sering dikombinasikan dengan iterasi data Laravel. Contoh: `<ul> @foreach($users as $user) ... @endforeach </ul>`."
      },
      {
        tag: "<ol>",
        description: "Ordered List (daftar berurut). Item ditampilkan dengan angka atau huruf.",
        attributes: [
          { name: "type", description: "Tipe list, misal \"1\", \"A\", \"a\", \"I\", \"i\"." },
          { name: "start", description: "Menentukan angka permulaan list." }
        ],
        laravelContext: "Penting saat membuat sistem tutorial/langkah-langkah dinamis dari database Laravel. `start` bisa dikombinasikan dengan data pagination `$loop->iteration` atau index offest."
      },
      {
        tag: "<li>",
        description: "List Item (elemen daftar). Harus selalu berada di dalam <ul> atau <ol>.",
        attributes: [],
        laravelContext: "Pencetakan item dari database `<li>{{ $item->name }}</li>`. Dapat menggunakan `$loop->odd` untuk styling ganjil-genap di Tailwind."
      }
    ]
  },
  {
    id: "tables",
    title: "Tables (Tabel - Penting untuk CRUD)",
    tags: [
      {
        tag: "<table>",
        description: "Membungkus struktur data tabular.",
        attributes: [],
        laravelContext: "Tulang punggung dari halaman Index (Read pada CRUD) di controller resource Laravel (menampilkan list User, Produk, dll)."
      },
      {
        tag: "<thead> & <tbody>",
        description: "Membagi tabel menjadi bagian kepala (judul kolom) dan badan (isi data).",
        attributes: [],
        laravelContext: "Di Blade, `<tbody>` adalah tempat di mana kita menaruh `@foreach` atau `@forelse` untuk melooping data dari model Eloquent."
      },
      {
        tag: "<tr>",
        description: "Table Row (baris pada tabel).",
        attributes: [],
        laravelContext: "Setiap satu model (satu baris database) pada loop `@foreach` direpresentasikan menjadi sebuah elemen `<tr>`."
      },
      {
        tag: "<th> & <td>",
        description: "<th> untuk sel heading vertikal/horizontal (tebal & di tengah). <td> untuk sel data biasa.",
        attributes: [
          { name: "colspan", description: "Menggabungkan kolom." },
          { name: "rowspan", description: "Menggabungkan baris." }
        ],
        laravelContext: "Di dalam `<td>` kita sering juga menaruh tombol Action form (misal Edit/Delete) menggunakan komponen Blade atau tag form untuk request ke Laravel."
      }
    ]
  },
  {
    id: "forms",
    title: "Forms & Inputs (Fokus Utama Laravel)",
    tags: [
      {
        tag: "<form>",
        description: "Merupakan blok dasar untuk mengirim data ke server. Wajib mengerti sebelum membuat sistem Create atau Update.",
        attributes: [
          { name: "action", description: "URL kemana data form dikirim." },
          { name: "method", description: "GET digunakan untuk search, POST untuk menyimpan data. Ingat Laravel sering butuh @method('PUT') / @method('DELETE') karena HTML hanya support GET/POST." },
          { name: "enctype", description: "Wajib diset `multipart/form-data` jika mau upload file ke Laravel." }
        ],
        laravelContext: "Sangat, Sangat Krusial! `<form action=\"{{ route('user.store') }}\" method=\"POST\">`. Selain itu, JANGAN lupa menambahkan token `@csrf` di dalam form agar tidak error 419 Page Expired."
      },
      {
        tag: "<input>",
        description: "Elemen dinamis untuk memasukkan berbagai jenis data (teks, file, pilihan). Tanpa tag penutup.",
        attributes: [
          { name: "type", description: "Beragam jenis (text, email, password, file, radio, checkbox, hidden)." },
          { name: "name", description: "NAMA Variabel yang akan ditangkap di `Controller` Laravel (misal `$request->input('nama_variabel')`)." },
          { name: "value", description: "Nilai default elemen. Digunakan untuk old() binding." },
          { name: "placeholder, required, readonly, disabled", description: "Masing-masing untuk teks bantuan, wajib diisi, tak bisa diedit, dimatikan sementara." }
        ],
        laravelContext: "Atribut `name` WAJIB ada agar data terbaca oleh backend, misanya `$request->name`. Atribut `value` wajib diisi state Laravel: `value=\"{{ old('name', $user->name ?? '') }}\"` agar input error form tidak hilang."
      },
      {
        tag: "<select> & <option>",
        description: "Membuat dropdown (pilihan menu tarik-turun).",
        attributes: [
          { name: "name (untuk <select>)", description: "Nama variabel dikirim ke backend." },
          { name: "value (untuk <option>)", description: "Nilai internal tiap baris." },
          { name: "selected", description: "Manandakan opsi default mana yang diaktifkan." }
        ],
        laravelContext: "Sering digunakan untuk input relasi (misal milih Kategori artikel), dilooping dengan `@foreach($categories as $cat) <option value=\"{{$cat->id}}\" {{ old('id') == $cat->id ? 'selected' : '' }}>{{$cat->name}}</option> @endforeach`"
      },
      {
        tag: "<textarea>",
        description: "Kotak input multi-baris panjang (untuk deskripsi/alamat).",
        attributes: [
          { name: "name", description: "Nama variabel dikirim ke server." },
          { name: "rows", description: "Tinggi awal baris kotak." }
        ],
        laravelContext: "Sama fungsinya seperti text input, tapi `value` untuk textarea berbeda: `<textarea name=\"body\">{{ old('body') }}</textarea>`."
      },
      {
        tag: "<button>",
        description: "Tombol klik. Dapat digunakan dalam maupun luar form.",
        attributes: [
          { name: "type", description: "\"submit\" (Default dalam form) untuk mensubmit form. \"button\" (Hanya javascript yang klik, tidak kirim form)." }
        ],
        laravelContext: "Jika punya multiple form di satu halaman (seperti Delete List Button Action), pastikan tipe tombolnya `type=\"submit\"` jika berada di dalam form terpisah."
      }
    ]
  },
  {
    id: "global",
    title: "Global Attributes",
    tags: [
      {
        tag: "class & id",
        description: "Atribut yang bisa disematkan di SEMUA tag HTML.",
        attributes: [
          { name: "class", description: "Bisa ditambahkan berkali-kali ke satu elemen, digunakan untuk CSS / Tailwind." },
          { name: "id", description: "Harus unik se-dokumen (tidak boleh ada 2 elemen ber-id sama), dipakai JavaScript manipulasi." }
        ],
        laravelContext: "Tailwind CSS sangat bergantung pada `class` (misal `<div class=\"text-red-500 font-bold max-w-lg mx-auto\">`). Sementara `id` digunakan Alpine.js atau plain javascript (misal `document.getElementById()`)."
      },
      {
        tag: "style",
        description: "Menambahkan inline CSS pada elemen langsung.",
        attributes: [],
        laravelContext: "Di Laravel & Tailwind hal ini sebaiknya DIHINDARI dan kita lebih direkomendasikan pakai framework utility CSS Tailwind. Kecuali jika nilai width / warnanya dinamis dari backend misal: `style=\"width: {{ $progress }}%;\"`"
      }
    ]
  },
  {
    id: "php-in-html",
    title: "🚀 Lanjutan: PHP di dalam HTML",
    isAdvanced: true,
    tags: [
      {
        tag: "<?php ?>",
        description: "Tag pembuka dan penutup PHP. Semua kode PHP harus ditulis di antara tag ini agar dieksekusi oleh server sebelum dikirim ke browser.",
        attributes: [
          { name: "<?php", description: "Tag pembuka PHP. Wajib ada untuk memulai blok kode PHP." },
          { name: "?>", description: "Tag penutup PHP. Bisa dihilangkan di file yang HANYA berisi PHP." }
        ],
        laravelContext: "Di Laravel Blade, kamu TIDAK perlu menulis `<?php ?>` secara manual. Blade sudah menyediakan sintaks yang lebih rapi: `{{ }}` untuk echo dan `@directive` untuk kontrol. Namun memahami dasar ini penting agar tahu apa yang terjadi di balik layar.",
        codeExample: "<!-- file: profil.php -->\n<html>\n<body>\n  <?php\n    $nama = \"Budi\";\n    $umur = 25;\n  ?>\n  <h1>Profil Pengguna</h1>\n  <p>Nama: <?= $nama ?></p>\n  <p>Umur: <?= $umur ?> tahun</p>\n</body>\n</html>"
      },
      {
        tag: "<?= $var ?>",
        description: "Shorthand (singkatan) dari `<?php echo $var; ?>`. Digunakan untuk langsung mencetak nilai variabel ke dalam HTML. Ini adalah cara paling dasar menampilkan data dinamis.",
        attributes: [
          { name: "<?= ?>", description: "Sama dengan <?php echo ?>. Singkat dan sering dipakai di template." }
        ],
        laravelContext: "Di Blade, padanan dari `<?= $var ?>` adalah `{{ $var }}`. Bedanya, `{{ }}` otomatis menjalankan `htmlspecialchars()` untuk mencegah serangan XSS — jadi lebih aman! Gunakan `{!! $var !!}` jika memang ingin mencetak HTML mentah.",
        codeExample: "<!-- PHP biasa -->\n<h1><?= $judul ?></h1>\n<p><?= $deskripsi ?></p>\n\n<!-- Blade (Laravel) — lebih aman & rapi -->\n<h1>{{ $judul }}</h1>\n<p>{{ $deskripsi }}</p>"
      },
      {
        tag: "echo dalam HTML",
        description: "Perintah `echo` bisa digunakan di dalam blok PHP untuk menghasilkan (generate) tag HTML secara dinamis. Server memproses PHP terlebih dahulu, lalu hasilnya (berupa HTML murni) dikirim ke browser.",
        attributes: [],
        laravelContext: "Konsep ini persis yang terjadi di Blade. Ketika kamu menulis `<h1>{{ $title }}</h1>`, Blade mengkompilasinya menjadi `<h1><?php echo e($title); ?></h1>`. Jadi Blade hanyalah 'gula sintaks' di atas PHP biasa.",
        codeExample: "<?php $warna = \"blue\"; ?>\n<div style=\"color: <?= $warna ?>\">\n  <?php echo \"<strong>Teks ini dibuat oleh PHP!</strong>\"; ?>\n</div>"
      },
      {
        tag: "include & require",
        description: "Perintah PHP untuk menyisipkan file PHP lain ke dalam file saat ini. `include` memberikan warning jika file tidak ditemukan, sedangkan `require` akan menghentikan eksekusi (fatal error).",
        attributes: [
          { name: "include", description: "Menyisipkan file. Jika gagal, hanya warning (program lanjut)." },
          { name: "require", description: "Menyisipkan file. Jika gagal, fatal error (program berhenti)." },
          { name: "include_once / require_once", description: "Sama seperti di atas, tapi file hanya di-include satu kali meskipun dipanggil berkali-kali." }
        ],
        laravelContext: "Konsep ini adalah dasar dari `@include('partials.header')` dan `@extends('layouts.app')` di Blade. Laravel mengabstraksi `include/require` PHP menjadi directive Blade yang lebih elegan dan terorganisir.",
        codeExample: "<!-- header.php -->\n<nav>Menu Navigasi</nav>\n\n<!-- index.php -->\n<?php include 'header.php'; ?>\n<main>\n  <h1>Halaman Utama</h1>\n</main>"
      }
    ]
  },
  {
    id: "looping-html",
    title: "🔁 Lanjutan: Looping untuk Generate Elemen HTML",
    isAdvanced: true,
    tags: [
      {
        tag: "for → <li>",
        description: "Menggunakan `for` loop PHP untuk menghasilkan elemen <li> secara otomatis. Daripada menulis 10 tag <li> secara manual, cukup tulis satu loop yang mengulangnya. Ini adalah penerapan prinsip DRY (Don't Repeat Yourself).",
        attributes: [
          { name: "Pola", description: "`for ($i = 1; $i <= 10; $i++) { echo \"<li>Item ke-$i</li>\"; }`" },
          { name: "Hasil", description: "Browser menerima 10 buah tag <li> yang sudah di-generate oleh server." }
        ],
        laravelContext: "Di Blade: `@for($i = 1; $i <= 10; $i++) <li>Item ke-{{ $i }}</li> @endfor`. Meskipun `@for` tersedia, dalam praktik Laravel lebih sering menggunakan `@foreach` karena data biasanya berasal dari database (array/collection).",
        codeExample: "<ul>\n<?php for ($i = 1; $i <= 5; $i++) { ?>\n  <li>Item ke-<?= $i ?></li>\n<?php } ?>\n</ul>"
      },
      {
        tag: "foreach → <tr>",
        description: "Menggunakan `foreach` untuk menampilkan setiap item dari array sebagai baris tabel (<tr>). Ini adalah pola yang PALING SERING digunakan di aplikasi web nyata — menampilkan daftar data dari database ke tabel HTML.",
        attributes: [
          { name: "Pola", description: "`foreach ($users as $user) { echo \"<tr><td>{$user['nama']}</td></tr>\"; }`" },
          { name: "Keunggulan", description: "Jumlah baris tabel otomatis menyesuaikan jumlah data. Tambah data = tambah baris, tanpa ubah kode." }
        ],
        laravelContext: "Ini adalah pola UTAMA di Laravel untuk halaman Index/Read pada CRUD: `@foreach($users as $user) <tr><td>{{ $user->name }}</td><td>{{ $user->email }}</td></tr> @endforeach`. Data `$users` biasanya dikirim dari Controller via `User::all()` atau `User::paginate(10)`.",
        codeExample: "<?php\n$users = [\n  ['nama' => 'Andi', 'email' => 'andi@mail.com'],\n  ['nama' => 'Siti', 'email' => 'siti@mail.com'],\n];\n?>\n<table>\n  <tr><th>Nama</th><th>Email</th></tr>\n  <?php foreach ($users as $user) { ?>\n  <tr>\n    <td><?= $user['nama'] ?></td>\n    <td><?= $user['email'] ?></td>\n  </tr>\n  <?php } ?>\n</table>"
      },
      {
        tag: "foreach → Card UI",
        description: "Menggunakan loop untuk menghasilkan komponen kartu (card) HTML yang berulang. Sangat umum untuk halaman katalog produk, daftar artikel blog, atau galeri portofolio. Setiap iterasi menghasilkan satu card lengkap dengan gambar, judul, dan deskripsi.",
        attributes: [
          { name: "Pola", description: "`foreach ($products as $p) { echo \"<div class='card'><h3>{$p['nama']}</h3><p>Rp {$p['harga']}</p></div>\"; }`" }
        ],
        laravelContext: "Di Laravel + Tailwind, pola ini jadi sangat elegan: `@foreach($products as $product) <div class=\"bg-white rounded-lg shadow p-4\"><h3>{{ $product->name }}</h3><p>{{ $product->formatted_price }}</p></div> @endforeach`. Bisa juga dipisahkan ke komponen Blade: `<x-product-card :product=\"$product\" />`.",
        codeExample: "<?php\n$products = [\n  ['nama' => 'Kaos Laravel', 'harga' => 'Rp 150.000'],\n  ['nama' => 'Stiker PHP', 'harga' => 'Rp 25.000'],\n];\n?>\n<?php foreach ($products as $p) { ?>\n<div class=\"card\">\n  <h3><?= $p['nama'] ?></h3>\n  <p><?= $p['harga'] ?></p>\n</div>\n<?php } ?>"
      },
      {
        tag: "foreach → <option>",
        description: "Menggunakan loop untuk mengisi dropdown <select> secara dinamis dari array atau data database. Setiap elemen array menjadi satu <option>. Pola ini wajib dikuasai untuk form yang punya relasi (misal: pilih Kategori, pilih Kota).",
        attributes: [
          { name: "Pola", description: "`foreach ($kota as $k) { echo \"<option value='$k'>$k</option>\"; }`" },
          { name: "Selected", description: "Menambahkan logika `selected` untuk menandai opsi yang sebelumnya dipilih user." }
        ],
        laravelContext: "Di Blade dengan old() binding: `@foreach($categories as $cat) <option value=\"{{ $cat->id }}\" {{ old('category_id') == $cat->id ? 'selected' : '' }}>{{ $cat->name }}</option> @endforeach`. Ini memastikan jika form gagal validasi, pilihan user tidak hilang."
      },
      {
        tag: "$loop variable",
        description: "Variabel khusus di Blade yang memberikan informasi tentang iterasi saat ini di dalam loop: apakah ini iterasi pertama, terakhir, genap, ganjil, atau berapa indeksnya. Sangat berguna untuk styling kondisional.",
        attributes: [
          { name: "$loop->index", description: "Indeks iterasi saat ini (mulai dari 0)." },
          { name: "$loop->iteration", description: "Nomor iterasi saat ini (mulai dari 1)." },
          { name: "$loop->first / $loop->last", description: "Boolean: apakah iterasi pertama/terakhir." },
          { name: "$loop->even / $loop->odd", description: "Boolean: apakah iterasi genap/ganjil (untuk zebra-striping tabel)." },
          { name: "$loop->count", description: "Total jumlah item dalam array." }
        ],
        laravelContext: "Contoh zebra-striping tabel: `<tr class=\"{{ $loop->even ? 'bg-gray-50' : 'bg-white' }}\">`. Atau menghilangkan border pada item terakhir: `<div class=\"{{ !$loop->last ? 'border-b' : '' }}\">`. Variable ini HANYA tersedia di Blade `@foreach`."
      }
    ]
  },
  {
    id: "dynamic-forms",
    title: "📝 Lanjutan: Form Dinamis dengan PHP",
    isAdvanced: true,
    tags: [
      {
        tag: "action dinamis",
        description: "Atribut `action` pada form bisa diisi secara dinamis menggunakan PHP, sehingga form bisa mengirim data ke URL yang berbeda tergantung konteks (misal: form create vs form edit mengirim ke route yang berbeda).",
        attributes: [
          { name: "Create", description: "`<form action=\"/users\" method=\"POST\">` — menyimpan data baru." },
          { name: "Update", description: "`<form action=\"/users/<?= $id ?>\" method=\"POST\">` — mengupdate data berdasarkan ID." }
        ],
        laravelContext: "Di Blade, gunakan helper `route()`: `<form action=\"{{ route('users.store') }}\">` untuk create, dan `<form action=\"{{ route('users.update', $user) }}\">` untuk update. Jangan pernah hardcode URL!",
        codeExample: "<!-- Form Create (tambah baru) -->\n<form action=\"/users\" method=\"POST\">\n  <input name=\"nama\" placeholder=\"Nama\">\n  <button type=\"submit\">Simpan</button>\n</form>\n\n<!-- Form Edit (ubah data) -->\n<form action=\"/users/<?= $user['id'] ?>\" method=\"POST\">\n  <input name=\"nama\" value=\"<?= $user['nama'] ?>\">\n  <button type=\"submit\">Update</button>\n</form>"
      },
      {
        tag: "value dinamis",
        description: "Mengisi nilai default input form dari variabel PHP. Penting untuk halaman Edit, di mana form harus menampilkan data yang sudah ada di database agar user bisa mengubahnya.",
        attributes: [
          { name: "Pola", description: "`<input name=\"nama\" value=\"<?= $user['nama'] ?>\">` — input terisi data dari database." },
          { name: "Textarea", description: "`<textarea name=\"bio\"><?= $user['bio'] ?></textarea>` — perhatikan value ada di antara tag, bukan di atribut." }
        ],
        laravelContext: "Di Blade, gabungkan dengan `old()` untuk error handling: `value=\"{{ old('nama', $user->nama) }}\"`. Fungsi `old()` akan mengembalikan input sebelumnya jika validasi gagal, atau fallback ke `$user->nama` jika tidak ada old input.",
        codeExample: "<!-- Halaman Edit: input terisi dari database -->\n<input name=\"nama\" value=\"<?= $user['nama'] ?>\">\n<input name=\"email\" value=\"<?= $user['email'] ?>\">\n<textarea name=\"bio\"><?= $user['bio'] ?></textarea>"
      },
      {
        tag: "Validasi Visual",
        description: "Menggunakan kondisi PHP (`if`) untuk menampilkan pesan error validasi di bawah input yang bermasalah. Ini memberikan feedback yang jelas kepada user tentang apa yang perlu diperbaiki.",
        attributes: [
          { name: "Pola", description: "`if (isset($errors['email'])) { echo \"<span class='text-red-500'>{$errors['email']}</span>\"; }`" }
        ],
        laravelContext: "Blade menyediakan directive khusus: `@error('email') <span class=\"text-red-500 text-sm\">{{ $message }}</span> @enderror`. Validasinya sendiri dilakukan di Controller atau Form Request Laravel, bukan di view.",
        codeExample: "<input name=\"email\" value=\"<?= $old['email'] ?? '' ?>\">\n<?php if (isset($errors['email'])) { ?>\n  <span style=\"color: red;\"><?= $errors['email'] ?></span>\n<?php } ?>"
      },
      {
        tag: "Conditional Rendering",
        description: "Menampilkan atau menyembunyikan elemen HTML berdasarkan kondisi PHP. Misalnya: tombol Delete hanya muncul untuk admin, badge 'Baru' hanya muncul untuk produk yang dibuat < 7 hari lalu.",
        attributes: [
          { name: "Pola", description: "`if ($role === 'admin') { echo '<button>Hapus</button>'; }`" },
          { name: "Alternatif", description: "Bisa juga pakai ternary: `<?= $stok > 0 ? '<span class=\"text-green-500\">Tersedia</span>' : '<span class=\"text-red-500\">Habis</span>' ?>`" }
        ],
        laravelContext: "Di Blade: `@if(auth()->user()->isAdmin()) <button>Hapus</button> @endif`. Atau lebih advanced dengan `@can('delete', $post) ... @endcan` menggunakan sistem authorization Laravel (Policies/Gates).",
        codeExample: "<?php if ($user['role'] === 'admin') { ?>\n  <button class=\"btn-danger\">Hapus User</button>\n<?php } ?>\n\n<span>\n  <?= $product['stok'] > 0\n    ? '<span style=\"color:green\">Tersedia</span>'\n    : '<span style=\"color:red\">Habis</span>' ?>\n</span>"
      }
    ]
  }
];

