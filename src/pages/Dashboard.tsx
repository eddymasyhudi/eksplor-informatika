import { PageTransition } from "../components/PageTransition";
import { ArrowRight, BookOpen, Clock, Code, FileText, Megaphone } from "lucide-react";
import { Link } from "react-router-dom";

export function Dashboard() {
  return (
    <PageTransition>
      <div className="space-y-12 pb-12">
        {/* Hero Section */}
        <section className="relative bg-slate-900 text-white rounded-b-3xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-400 via-transparent to-transparent" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-block px-3 py-1 rounded-full bg-slate-800 text-emerald-400 text-sm font-semibold tracking-wide border border-slate-700">
                  Tahun Ajaran 2026/2027
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                  Selamat Datang di <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Portal Eksplorasi Informatika!</span>
                </h1>
                <p className="text-lg text-slate-300 max-w-xl leading-relaxed">
                  Mari jelajahi dunia teknologi, pelajari logika pemrograman, dan persiapkan dirimu menjadi inovator digital masa depan. Belajar komputer tidak pernah seseru ini!
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Link to="/materi" className="bg-emerald-500 hover:bg-emerald-600 text-slate-900 px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2">
                    Mulai Belajar <ArrowRight size={20} />
                  </Link>
                  <Link to="/tugas" className="bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 px-6 py-3 rounded-lg font-medium transition-colors">
                    Lihat Tugas
                  </Link>
                </div>
              </div>
              <div className="hidden lg:flex justify-center relative">
                <div className="w-72 h-72 rounded-full bg-slate-800 border-4 border-slate-700 overflow-hidden shadow-2xl shadow-emerald-500/20 relative z-10">
                  <img 
                    src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&q=80&w=600" 
                    alt="Guru Informatika" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="absolute top-4 -right-4 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl" />
                <div className="absolute bottom-4 -left-4 w-40 h-40 bg-emerald-500/20 rounded-full blur-2xl" />
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Quick Links */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Code className="text-emerald-500" /> Akses Cepat
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Materi Terbaru", desc: "Akses modul dan video pembelajaran minggu ini.", icon: BookOpen, link: "/materi", color: "bg-blue-50 text-blue-600 border-blue-200" },
                { title: "Tugas & Proyek", desc: "Kumpulkan tugas praktikum dan lihat tenggat waktu.", icon: FileText, link: "/tugas", color: "bg-orange-50 text-orange-600 border-orange-200" },
                { title: "Jadwal Ujian", desc: "Persiapkan dirimu untuk kuis dan evaluasi berkala.", icon: Clock, link: "/asesmen", color: "bg-emerald-50 text-emerald-600 border-emerald-200" },
              ].map((card, i) => (
                <Link key={i} to={card.link} className={`p-6 rounded-2xl border transition-all hover:shadow-lg hover:-translate-y-1 ${card.color} bg-white`}>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${card.color.split(' ')[0]} ${card.color.split(' ')[1]}`}>
                    <card.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{card.title}</h3>
                  <p className="text-slate-600">{card.desc}</p>
                </Link>
              ))}
            </div>
          </section>

          {/* Pengumuman */}
          <section className="bg-slate-50 border border-slate-200 rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Megaphone className="text-orange-500" /> Pengumuman & Berita
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-slate-900 text-white rounded-xl flex flex-col items-center justify-center font-bold">
                    <span className="text-sm text-emerald-400">Okt</span>
                    <span className="text-xl">15</span>
                  </div>
                  <div>
                    <div className="text-xs font-semibold tracking-wider text-orange-500 uppercase mb-1">Kelas SMP & SMA</div>
                    <h4 className="font-bold text-slate-900">Persiapan Ujian Tengah Semester</h4>
                    <p className="text-sm text-slate-600 mt-1">UTS akan dilaksanakan minggu depan. Silakan cek kisi-kisi di menu Asesmen.</p>
                  </div>
                </div>
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-slate-900 text-white rounded-xl flex flex-col items-center justify-center font-bold">
                    <span className="text-sm text-emerald-400">Okt</span>
                    <span className="text-xl">20</span>
                  </div>
                  <div>
                    <div className="text-xs font-semibold tracking-wider text-blue-600 uppercase mb-1">Kelas 10 SMA</div>
                    <h4 className="font-bold text-slate-900">Tugas Praktikum Algoritma</h4>
                    <p className="text-sm text-slate-600 mt-1">Batas akhir pengumpulan proyek kalkulator Python sederhana.</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 text-white rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute -right-4 -top-4 text-slate-800">
                  <Code size={120} />
                </div>
                <div className="relative z-10">
                  <span className="inline-block px-2 py-1 bg-emerald-500 text-slate-900 text-xs font-bold rounded mb-3">Tech News</span>
                  <h4 className="text-lg font-bold mb-2">Mengenal Artificial Intelligence</h4>
                  <p className="text-slate-300 text-sm mb-4">
                    Bagaimana AI seperti ChatGPT bekerja? Mari diskusikan dampaknya dalam pembelajaran di kelas minggu ini.
                  </p>
                  <button className="text-emerald-400 text-sm font-semibold hover:underline flex items-center gap-1">
                    Baca Artikel <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </PageTransition>
  );
}
