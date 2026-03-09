import Link from "next/link";
import { Code2, FileCode, ArrowRight, Lock, Sparkles } from "lucide-react";

const courses = [
  {
    id: "html-learning",
    title: "HTML Learning",
    subtitle: "HTML untuk Laravel",
    description:
      "Kuasai fondasi HTML — tag, atribut, dan form — dengan konteks langsung menuju Laravel Blade.",
    icon: Code2,
    href: "/html-learning",
    available: true,
    gradient: "from-orange-500 via-red-500 to-rose-600",
    glowColor: "shadow-red-500/20",
    iconBg: "bg-gradient-to-br from-orange-400 to-red-600",
    borderHover: "hover:border-red-400/60",
    tag: "Tersedia",
    tagColor: "bg-green-500/15 text-green-400 border-green-500/30",
  },
  {
    id: "php-learning",
    title: "PHP Learning",
    subtitle: "PHP Notebook untuk Laravel",
    description:
      "Pelajari dasar-dasar PHP — variabel, fungsi, array — dengan notebook interaktif sebagai bekal menguasai Laravel.",
    icon: FileCode,
    href: "/php-learning",
    available: true,
    gradient: "from-indigo-500 via-purple-500 to-violet-600",
    glowColor: "shadow-purple-500/20",
    iconBg: "bg-gradient-to-br from-indigo-400 to-purple-600",
    borderHover: "hover:border-purple-400/60",
    tag: "Tersedia",
    tagColor: "bg-green-500/15 text-green-400 border-green-500/30",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white font-sans selection:bg-indigo-500/30 selection:text-indigo-200 overflow-hidden relative">
      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-indigo-600/8 via-purple-600/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-t from-rose-600/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-gradient-to-r from-blue-600/5 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Subtle grid pattern */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Header */}
      <header className="relative z-10 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg blur-sm opacity-40" />
              <div className="relative bg-gradient-to-br from-indigo-500 to-purple-600 p-2 rounded-lg">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
            </div>
            <span className="text-lg font-bold tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Learnspace
            </span>
          </div>
          <div className="text-xs text-gray-500 font-medium tracking-wider uppercase">
            Interactive Learning Platform
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <section className="pt-20 md:pt-28 pb-16 md:pb-20 text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400 mb-6 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 mr-2 animate-pulse" />
            Platform Belajar Interaktif
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-5">
            <span className="bg-gradient-to-b from-white via-white to-gray-500 bg-clip-text text-transparent">
              Pilih Jalur
            </span>
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-rose-400 bg-clip-text text-transparent">
              Belajarmu
            </span>
          </h1>
          <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Mulai perjalanan menjadi Web Developer profesional.
            Pilih materi di bawah dan belajar dengan cara yang interaktif.
          </p>
        </section>

        {/* Course Cards */}
        <section className="pb-32 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {courses.map((course) => {
            const Icon = course.icon;

            const cardClassName = `group relative rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm p-6 md:p-8 transition-all duration-500 ${course.available
              ? `cursor-pointer ${course.borderHover} hover:bg-white/[0.05] hover:shadow-2xl ${course.glowColor} hover:-translate-y-1`
              : "cursor-default opacity-60"
              }`;

            const cardContent = (
              <>
                {/* Gradient border glow on hover */}
                {course.available && (
                  <div
                    className={`absolute -inset-px rounded-2xl bg-gradient-to-r ${course.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10 blur-sm`}
                  />
                )}

                {/* Tag */}
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`relative p-3 rounded-xl ${course.iconBg} shadow-lg`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${course.tagColor}`}
                  >
                    {!course.available && (
                      <Lock className="w-3 h-3 mr-1" />
                    )}
                    {course.tag}
                  </span>
                </div>

                {/* Content */}
                <h2 className="text-xl md:text-2xl font-bold text-white mb-1 tracking-tight">
                  {course.title}
                </h2>
                <p className="text-sm text-gray-500 font-medium mb-3">
                  {course.subtitle}
                </p>
                <p className="text-sm text-gray-400 leading-relaxed mb-6">
                  {course.description}
                </p>

                {/* CTA */}
                {course.available ? (
                  <div className="flex items-center text-sm font-medium text-gray-400 group-hover:text-white transition-colors duration-300">
                    Mulai Belajar
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                ) : (
                  <div className="flex items-center text-sm font-medium text-gray-600">
                    Akan tersedia segera
                  </div>
                )}
              </>
            );

            return course.available ? (
              <Link key={course.id} href={course.href} className={cardClassName}>
                {cardContent}
              </Link>
            ) : (
              <div key={course.id} className={cardClassName}>
                {cardContent}
              </div>
            );
          })}
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-600">
          <p>© 2026 Learnspace. Untuk kemajuan Developer Indonesia.</p>
          <div className="mt-3 sm:mt-0 flex space-x-4">
            <a
              href="#"
              className="hover:text-gray-400 transition-colors"
            >
              Documentation
            </a>
            <a
              href="#"
              className="hover:text-gray-400 transition-colors"
            >
              Github
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
