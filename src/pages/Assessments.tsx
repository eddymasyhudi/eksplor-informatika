import { PageTransition } from "../components/PageTransition";
import { Target, FileEdit, Award, ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const assessments = [
  { title: "Kuis Harian: Logika Gerbang Dasar", grade: "Kelas 10", status: "Tersedia", type: "Pilihan Ganda" },
  { title: "Tryout UTS: Literasi Digital & Jaringan", grade: "Kelas 8", status: "Tersedia", type: "Campuran" },
  { title: "Ujian Tengah Semester (UTS)", grade: "Semua Kelas", status: "Segera Hadir", type: "Ujian Resmi" },
];

export function Assessments() {
  const [rubricOpen, setRubricOpen] = useState(false);

  return (
    <PageTransition>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Asesmen & Evaluasi</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Uji pemahamanmu melalui kuis harian, latihan soal tryout, dan akses ujian resmi.
          </p>
        </div>

        {/* Ujian Aktif */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {assessments.map((item, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col items-center text-center hover:border-emerald-400 transition-colors shadow-sm">
              <div className="w-14 h-14 bg-slate-50 text-slate-700 rounded-full flex items-center justify-center mb-4">
                {item.status === "Segera Hadir" ? <Target size={24} /> : <FileEdit size={24} className="text-emerald-500" />}
              </div>
              <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded mb-2">{item.grade}</span>
              <h3 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h3>
              <p className="text-slate-500 text-sm mb-4">{item.type}</p>
              <button 
                className={`w-full py-2 rounded-lg text-sm font-bold transition-colors ${
                  item.status === "Tersedia" 
                    ? "bg-slate-900 hover:bg-slate-800 text-white" 
                    : "bg-slate-100 text-slate-400 cursor-not-allowed"
                }`}
                disabled={item.status !== "Tersedia"}
              >
                {item.status === "Tersedia" ? "Mulai Ujian" : "Belum Tersedia"}
              </button>
            </div>
          ))}
        </div>

        {/* Rubrik Penilaian Accordion */}
        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
          <button 
            onClick={() => setRubricOpen(!rubricOpen)}
            className="w-full px-6 py-4 flex items-center justify-between bg-slate-50 hover:bg-slate-100 transition-colors"
          >
            <div className="flex items-center gap-3">
              <Award className="text-orange-500" />
              <h3 className="font-bold text-slate-900">Standar Kelulusan & Rubrik Penilaian</h3>
            </div>
            <ChevronDown className={`transition-transform duration-300 ${rubricOpen ? "rotate-180" : ""}`} />
          </button>
          
          <AnimatePresence>
            {rubricOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="p-6 border-t border-slate-200 text-sm text-slate-600 space-y-4">
                  <p>Standar Ketuntasan Minimal (KKM) untuk mata pelajaran Informatika adalah <strong>75</strong>. Penilaian dibagi menjadi tiga komponen utama:</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                      <div className="text-2xl font-black text-emerald-500 mb-1">40%</div>
                      <div className="font-bold text-slate-900 mb-2">Tugas Praktikum</div>
                      <p className="text-xs">Dinilai berdasarkan fungsionalitas kode, kebersihan kode (clean code), dan kreativitas UI/UX.</p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                      <div className="text-2xl font-black text-blue-500 mb-1">30%</div>
                      <div className="font-bold text-slate-900 mb-2">Ujian & Kuis</div>
                      <p className="text-xs">Evaluasi pemahaman teori (UTS, UAS, dan kuis pilihan ganda di portal).</p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                      <div className="text-2xl font-black text-orange-500 mb-1">30%</div>
                      <div className="font-bold text-slate-900 mb-2">Sikap & Keaktifan</div>
                      <p className="text-xs">Keaktifan diskusi di kelas, kedisiplinan pengumpulan tugas, dan kolaborasi tim.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </PageTransition>
  );
}
