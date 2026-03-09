import Playground from "@/components/Playground";
import CodeBlock from "@/components/CodeBlock";
import TagVisualizer from "@/components/TagVisualizer";
import { curriculumData } from "@/lib/data";
import { BookOpen, Code2, LayoutDashboard, Terminal, Eye, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function HtmlLearning() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans selection:bg-red-200 selection:text-red-900 pb-20">

      {/* Header section */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center space-x-2 text-gray-400 hover:text-gray-600 transition-colors mr-3">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div className="bg-[#FF2D20] p-2 rounded-lg">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-xl font-bold tracking-tight text-gray-900">
              HTML untuk <span className="text-[#FF2D20]">Laravel</span>
            </h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#kurikulum" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">Kurikulum</a>
            <a href="#visualizer" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">Visualizer</a>
            <a href="#playground" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">Playground</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
            Kuasai HTML Sebelum Terjun ke <span className="text-[#FF2D20]">Blade</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Platform belajar interaktif yang dirancang khusus untuk calon Web Developer Laravel.
            Pahami tag, atribut, dan form HTML dengan konteks bagaimana mereka bekerja sama dengan PHP dan Laravel.
          </p>
          <div className="flex justify-center gap-4">
            <a href="#kurikulum" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#FF2D20] hover:bg-red-600 shadow-sm shadow-red-200 transition-all">
              <BookOpen className="w-5 h-5 mr-2" />
              Mulai Belajar
            </a>
            <a href="#playground" className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 shadow-sm transition-all">
              <Terminal className="w-5 h-5 mr-2" />
              Coba Editor
            </a>
          </div>
        </div>
      </section>

      {/* Concept Definition Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-red-50 rounded-2xl p-6 md:p-10 border border-red-100">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Konsep Dasar HTML</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-red-100">
              <h3 className="text-xl font-bold text-[#FF2D20] mb-3">Tag</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Kata kunci atau label yang dibungkus dengan tanda kurung sudut untuk memberi tahu browser bagaimana memformat halaman. Contohnya <code className="bg-gray-100 text-[#FF2D20] px-1 py-0.5 rounded font-mono text-xs">&lt;p&gt;</code> atau <code className="bg-gray-100 text-[#FF2D20] px-1 py-0.5 rounded font-mono text-xs">&lt;div&gt;</code>. Ada tag pembuka dan ada penutup.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-red-100">
              <h3 className="text-xl font-bold text-[#FF2D20] mb-3">Element</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Keseluruhan komponen dari awal tag pembuka hingga tag penutup, beserta konten atau teks apa pun yang ada di antaranya. Contoh: <code className="bg-gray-100 text-[#FF2D20] px-1 py-0.5 rounded font-mono text-xs text-nowrap">&lt;h1&gt;Judul&lt;/h1&gt;</code> adalah satu buah elemen heading.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-red-100">
              <h3 className="text-xl font-bold text-[#FF2D20] mb-3">Attribute</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Informasi atau properti tambahan yang disisipkan di dalam tag pembuka untuk mengatur sifat atau visual khusus (contoh: <code className="bg-gray-100 text-[#FF2D20] px-1 py-0.5 rounded font-mono text-xs">class=&quot;merah&quot;</code> atau <code className="bg-gray-100 text-[#FF2D20] px-1 py-0.5 rounded font-mono text-xs">href=&quot;link&quot;</code>).
              </p>
            </div>
          </div>

          <div className="mt-8 bg-white p-6 rounded-xl shadow-sm border border-red-100">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Contoh Kasus: Tag Tautan (Anchor `&lt;a&gt;`)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-[#FF2D20] text-sm mb-2">Tanpa Atribut (Salah Kaprah)</h4>
                <div className="bg-gray-900 rounded-md p-3 mb-2 overflow-x-auto">
                  <code className="text-green-400 font-mono text-sm whitespace-pre">
                    &lt;a&gt;Klik di sini&lt;/a&gt;
                  </code>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Secara sintaks HTML ini sah sebagai sebuah elemen. Namun tanpa atribut <code className="bg-gray-200 px-1 rounded">href</code>, link ini tidak akan bisa diklik dan tidak mengarah ke manapun.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-green-600 text-sm mb-2">Dengan Atribut (Benar &amp; Semantik)</h4>
                <div className="bg-gray-900 rounded-md p-3 mb-2 overflow-x-auto">
                  <code className="text-green-400 font-mono text-sm whitespace-pre">
                    &lt;a href=&quot;/home&quot;&gt;Klik di sini&lt;/a&gt;
                  </code>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Di sini kita menambahkan atribut khusus <code className="bg-gray-200 px-1 rounded">href</code> agar link berfungsi, dan atribut global <code className="bg-gray-200 px-1 rounded">class</code> untuk memberinya style Tailwind/CSS.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="kurikulum" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center mb-8">
          <BookOpen className="w-8 h-8 text-[#FF2D20] mr-3" />
          <h2 className="text-3xl font-bold text-gray-900">Kurikulum Inti</h2>
        </div>

        <div className="space-y-12">
          {/* === BASIC TOPICS: Card Grid Layout === */}
          {curriculumData.filter(t => !t.isAdvanced).map((topic) => (
            <div key={topic.id} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b border-gray-100 pb-4">
                {topic.title}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {topic.tags.map((item, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-xl p-5 border border-gray-100 hover:border-red-200 transition-colors group flex flex-col">
                    <div className="flex items-start justify-between mb-3">
                      <code className="px-2 py-1 bg-[#FF2D20]/10 text-[#FF2D20] rounded text-lg font-bold font-mono">
                        {item.tag}
                      </code>
                    </div>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    {item.attributes.length > 0 && (
                      <div className="mb-4">
                        <h4 className="text-xs uppercase tracking-wider font-semibold text-gray-500 mb-2">Atribut Penting</h4>
                        <ul className="space-y-2">
                          {item.attributes.map((attr, i) => (
                            <li key={i} className="text-xs text-gray-600 bg-white border border-gray-200 p-2 rounded">
                              <span className="font-mono text-gray-800 font-semibold">{attr.name}</span>: {attr.description}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="mt-auto pt-4 border-t border-red-50">
                      <h4 className="text-xs font-bold text-[#FF2D20] mb-1 flex items-center">
                        <LayoutDashboard className="w-3 h-3 mr-1" /> Konteks Laravel
                      </h4>
                      <p className="text-xs text-gray-700 leading-relaxed italic border-l-2 border-[#FF2D20] pl-2">
                        {item.laravelContext}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* === DIVIDER: Basic → Advanced === */}
          {curriculumData.some(t => t.isAdvanced) && (
            <div className="relative py-8">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200" /></div>
              <div className="relative flex justify-center">
                <span className="bg-gray-50 px-6 py-2 text-sm font-bold text-gray-500 uppercase tracking-wider rounded-full border border-gray-200">
                  ⚡ Materi Lanjutan — PHP × HTML
                </span>
              </div>
            </div>
          )}

          {/* === ADVANCED TOPICS: Full-width Tutorial Layout === */}
          {curriculumData.filter(t => t.isAdvanced).map((topic) => (
            <div key={topic.id} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 pb-2">
                {topic.title}
              </h3>
              <p className="text-sm text-gray-500 mb-6 border-b border-gray-100 pb-4">
                Konsep ini menjembatani HTML dengan PHP — fondasi yang akan kamu gunakan setiap hari di Laravel Blade.
              </p>

              <div className="space-y-6">
                {topic.tags.map((item, idx) => (
                  <div key={idx} className="rounded-xl border border-gray-100 hover:border-red-200 transition-colors overflow-hidden">
                    {/* Item Header */}
                    <div className="bg-gray-50 px-5 py-4 border-b border-gray-100">
                      <div className="flex items-center gap-3">
                        <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-[#FF2D20]/10 text-[#FF2D20] text-xs font-bold flex items-center justify-center">
                          {idx + 1}
                        </span>
                        <code className="px-2 py-1 bg-[#FF2D20]/10 text-[#FF2D20] rounded text-base font-bold font-mono">
                          {item.tag}
                        </code>
                      </div>
                    </div>

                    {/* Item Body */}
                    <div className="p-5">
                      <p className="text-sm text-gray-700 leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Code Example + Details side by side */}
                      <div className={`grid gap-4 ${item.codeExample ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1'}`}>
                        {/* Code Example */}
                        {item.codeExample && (
                          <div>
                            <h4 className="text-xs uppercase tracking-wider font-semibold text-gray-500 mb-2 flex items-center">
                              <Code2 className="w-3 h-3 mr-1" /> Contoh Kode
                            </h4>
                            <CodeBlock code={item.codeExample} />
                          </div>
                        )}

                        {/* Details / Attributes */}
                        <div>
                          {item.attributes.length > 0 && (
                            <div className="mb-4">
                              <h4 className="text-xs uppercase tracking-wider font-semibold text-gray-500 mb-2">Detail</h4>
                              <ul className="space-y-2">
                                {item.attributes.map((attr, i) => (
                                  <li key={i} className="text-xs text-gray-600 bg-gray-50 border border-gray-200 p-2.5 rounded-lg">
                                    <span className="font-mono text-gray-800 font-semibold">{attr.name}</span>
                                    <span className="text-gray-400 mx-1">—</span>
                                    {attr.description}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Laravel Context */}
                          <div className="bg-red-50 rounded-lg p-4 border border-red-100">
                            <h4 className="text-xs font-bold text-[#FF2D20] mb-2 flex items-center">
                              <LayoutDashboard className="w-3 h-3 mr-1" /> Di Laravel Blade
                            </h4>
                            <p className="text-xs text-gray-700 leading-relaxed">
                              {item.laravelContext}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Visualizer Section */}
      <section id="visualizer" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 inline-flex items-center justify-center">
            <Eye className="w-8 h-8 text-[#FF2D20] mr-3" />
            Tag Visualizer
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">Lihat perbandingan langsung antara dua tag HTML yang mirip untuk memahami perbedaan fungsi dan visualnya.</p>
        </div>
        <TagVisualizer />
      </section>

      {/* Playground Section */}
      <section id="playground" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mb-12">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 inline-flex items-center justify-center">
            <Terminal className="w-8 h-8 text-[#FF2D20] mr-3" />
            Interactive Playground
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">Tulis kode HTML sungguhan dan lihat hasilnya secara real-time. Biasakan diri dengan struktur tag sebelum masuk ke framework.</p>
        </div>
        <Playground />
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2026 HTML untuk Laravel. Dibuat dengan cinta untuk kemajuan Developer Indonesia.</p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a href="#" className="hover:text-[#FF2D20] transition-colors">Documentation</a>
            <a href="#" className="hover:text-[#FF2D20] transition-colors">Github</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
