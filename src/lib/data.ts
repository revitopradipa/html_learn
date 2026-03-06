export type TagContent = {
  tag: string;
  description: string;
  attributes: { name: string; description: string }[];
  laravelContext: string;
};

export type Topic = {
  id: string;
  title: string;
  tags: TagContent[];
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
  }
];
