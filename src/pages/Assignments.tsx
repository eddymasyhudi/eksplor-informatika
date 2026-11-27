import { PageTransition } from "../components/PageTransition";
import { Calendar, CheckCircle2, AlertCircle, ExternalLink, Code2 } from "lucide-react";
import { cn } from "../lib/utils";

const tasks = [
  {
    title: "Proyek Web Sederhana (HTML & CSS)",
    grade: "SMA Kelas 10",
    desc: "Buat halaman web portfolio pribadi menggunakan HTML5 dan Tailwind CSS. Pastikan web responsif.",
    deadline: "20 Oktober 2026",
    urgency: "high", // high, medium, low
    platform: "Google Classroom",
    type: "Proyek Praktikum"
  },
  {
    title: "Simulasi Jaringan Packet Tracer",
    grade: "SMK Kelas 11",
    desc: "Rancang topologi Star dan setting IP statis untuk 5 PC dan 1 Server menggunakan Cisco Packet Tracer.",
    deadline: "25 Oktober 2026",
    urgency: "medium",
    platform: "Google Forms",
    type: "Tugas Praktik"
  },
  {
    title: "Game Labirin Scratch",
    grade: "SMP Kelas 8",
    desc: "Kembangkan game labirin sederhana. Sprite harus bisa dikontrol menggunakan tombol panah keyboard.",
    deadline: "30 Oktober 2026",
    urgency: "low",
    platform: "Google Classroom",
    type: "Tugas Portofolio"
  }
];

export function Assignments() {
  return (
    <PageTransition>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Tugas & Proyek</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Pantau tenggat waktu, pelajari instruksi proyek praktikum, dan kumpulkan hasil kerjamu di sini.
          </p>
        </div>

        <div className="space-y-6">
          {tasks.map((task, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col md:flex-row gap-6 relative overflow-hidden">
              {/* Urgency Indicator */}
              <div className={cn(
                "absolute left-0 top-0 bottom-0 w-2",
                task.urgency === "high" ? "bg-red-500" : task.urgency === "medium" ? "bg-orange-500" : "bg-emerald-500"
              )} />
              
              <div className="flex-1 pl-4">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="px-2.5 py-1 bg-slate-900 text-white text-xs font-bold rounded-md">
                    {task.grade}
                  </span>
                  <span className="text-sm font-medium text-slate-500 flex items-center gap-1">
                    <Code2 size={14} /> {task.type}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{task.title}</h3>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                  {task.desc}
                </p>
                
                <div className="flex items-center gap-2 text-sm font-semibold">
                  {task.urgency === "high" ? <AlertCircle size={16} className="text-red-500" /> : <Calendar size={16} className="text-slate-400" />}
                  <span className={cn(
                    task.urgency === "high" ? "text-red-600" : "text-slate-600"
                  )}>
                    Tenggat: {task.deadline}
                  </span>
                </div>
              </div>

              <div className="md:w-64 flex flex-col justify-end gap-3 border-t md:border-t-0 md:border-l border-slate-100 pt-4 md:pt-0 md:pl-6">
                <button className="w-full bg-slate-900 hover:bg-slate-800 text-white py-2.5 rounded-lg text-sm font-bold transition-colors flex items-center justify-center gap-2">
                  Kumpulkan Tugas <ExternalLink size={16} />
                </button>
                <p className="text-xs text-center text-slate-500">
                  via {task.platform}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Project Guidelines Banner */}
        <div className="mt-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-8 text-white flex flex-col md:flex-row items-center gap-6 shadow-lg shadow-emerald-500/20">
          <div className="p-4 bg-white/20 rounded-full">
            <CheckCircle2 size={40} className="text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Pedoman Pengerjaan Proyek</h3>
            <p className="text-emerald-50 text-sm leading-relaxed">
              Semua baris kode harus ditulis rapi dan diberikan komentar. Plagiarisme kode akan mengakibatkan nilai 0. Fokuslah pada pemahaman logika, bukan sekadar copy-paste. Jangan ragu untuk bertanya saat jam konsultasi!
            </p>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
