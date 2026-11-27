import { useState } from "react";
import { PageTransition } from "../components/PageTransition";
import { PlayCircle, FileText, MonitorPlay, Download } from "lucide-react";
import { cn } from "../lib/utils";

const materiSMP = [
  { title: "Berpikir Komputasional", desc: "Mempelajari logika dasar, dekomposisi, dan pengenalan pola dalam pemecahan masalah.", topics: ["Dekomposisi", "Pengenalan Pola", "Abstraksi", "Algoritma"] },
  { title: "Literasi Digital", desc: "Cara aman dan etis berselancar di internet, memahami privasi data, dan jejak digital.", topics: ["Keamanan Siber", "Netiket", "Hoaks vs Fakta"] },
  { title: "Jaringan Komputer Dasar", desc: "Mengenal perangkat keras jaringan, LAN, WAN, dan bagaimana internet bekerja.", topics: ["Router & Switch", "IP Address", "Kabel UTP"] },
  { title: "Pemrograman Visual (Scratch)", desc: "Membuat animasi dan game interaktif sederhana menggunakan blok kode Scratch.", topics: ["Event Listener", "Looping", "Kondisional"] },
];

const materiSMA = [
  { title: "Algoritma & Pemrograman (Python)", desc: "Menulis kode Python untuk menyelesaikan masalah matematika dan logika kompleks.", topics: ["Variabel & Tipe Data", "Fungsi", "Struktur Data"] },
  { title: "Analisis Data", desc: "Mengumpulkan, membersihkan, dan memvisualisasikan data menggunakan spreadsheet dan kode.", topics: ["Scraping", "Visualisasi", "Statistika Dasar"] },
  { title: "Kecerdasan Buatan Dasar", desc: "Mengenal Machine Learning, Neural Networks, dan penerapan AI di kehidupan sehari-hari.", topics: ["Machine Learning", "NLP", "Etika AI"] },
  { title: "Dampak Sosial Informatika", desc: "Mengkaji pengaruh teknologi terhadap ekonomi, hukum, dan budaya masyarakat modern.", topics: ["HAKI", "Cyberlaw", "Digital Divide"] },
];

export function Materials() {
  const [activeTab, setActiveTab] = useState<"SMP" | "SMA">("SMP");

  const currentMateri = activeTab === "SMP" ? materiSMP : materiSMA;

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Materi Pembelajaran</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Akses modul pembelajaran, slide presentasi, dan video tutorial yang disesuaikan dengan kurikulum jenjang pendidikanmu.
          </p>
        </div>

        {/* Custom Tabs */}
        <div className="flex justify-center mb-10">
          <div className="bg-slate-100 p-1 rounded-xl inline-flex shadow-sm border border-slate-200">
            <button
              onClick={() => setActiveTab("SMP")}
              className={cn(
                "px-8 py-3 rounded-lg font-bold text-sm transition-all duration-200",
                activeTab === "SMP" ? "bg-white text-blue-700 shadow-sm" : "text-slate-500 hover:text-slate-700"
              )}
            >
              Jenjang SMP (Kelas 7-9)
            </button>
            <button
              onClick={() => setActiveTab("SMA")}
              className={cn(
                "px-8 py-3 rounded-lg font-bold text-sm transition-all duration-200",
                activeTab === "SMA" ? "bg-white text-orange-600 shadow-sm" : "text-slate-500 hover:text-slate-700"
              )}
            >
              Jenjang SMA/SMK (Kelas 10-12)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentMateri.map((item, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-600 text-sm mb-4 h-10">{item.desc}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {item.topics.map((topic, i) => (
                  <span key={i} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded">
                    {topic}
                  </span>
                ))}
              </div>

              <div className="border-t border-slate-100 pt-4 flex items-center gap-3">
                <button className="flex-1 flex items-center justify-center gap-2 bg-blue-50 text-blue-700 hover:bg-blue-100 py-2 rounded-lg text-sm font-semibold transition-colors">
                  <PlayCircle size={16} /> Video
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 py-2 rounded-lg text-sm font-semibold transition-colors">
                  <MonitorPlay size={16} /> Slide
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 bg-slate-50 text-slate-700 hover:bg-slate-100 py-2 rounded-lg text-sm font-semibold transition-colors border border-slate-200">
                  <Download size={16} /> PDF
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
