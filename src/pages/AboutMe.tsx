import { PageTransition } from "../components/PageTransition";
import { Mail, Linkedin, Clock, MapPin, GraduationCap } from "lucide-react";

export function AboutMe() {
  return (
    <PageTransition>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
          {/* Profile Header */}
          <div className="h-48 bg-slate-900 relative">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-orange-400 via-transparent to-transparent" />
          </div>
          
          <div className="px-8 pb-8 -mt-20 relative z-10 flex flex-col md:flex-row gap-8 items-start">
            <div className="w-40 h-40 rounded-2xl border-4 border-white bg-slate-100 shadow-lg overflow-hidden flex-shrink-0">
              <img 
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=400" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="pt-2 md:pt-24 flex-1">
              <h1 className="text-3xl font-bold text-slate-900">Alfian Edi Masyhudi, S.Kom., M.Kom.</h1>
              <p className="text-lg text-emerald-600 font-medium mt-1">Guru Informatika SMP & SMA/SMK Al-Fithroh Sitarda</p>
              
              <div className="flex flex-wrap gap-4 mt-4 text-sm text-slate-600">
                <span className="flex items-center gap-1.5"><GraduationCap size={16} /> M.Kom. Informatika</span>
                <span className="flex items-center gap-1.5"><MapPin size={16} /> Gresik, Indonesia</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8 border-t border-slate-100 bg-slate-50">
            <div className="lg:col-span-2 space-y-8">
              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-3">Biografi Singkat</h2>
                <p className="text-slate-600 leading-relaxed">
                  Memiliki pengalaman lebih dari 8 tahun dalam dunia pendidikan dan pengembangan perangkat lunak. Saya bersemangat untuk membawa industri teknologi langsung ke dalam ruang kelas. Minat khusus saya meliputi Pengembangan Web Frontend, Dasar-dasar Artificial Intelligence, dan Pembelajaran Berbasis Proyek (Project-Based Learning).
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-3">Visi & Misi Mengajar</h2>
                <div className="bg-white p-6 rounded-2xl border border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-2">Project-Based Learning (PBL)</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Pendekatan pedagogis yang saya gunakan sangat berpusat pada karya nyata. Siswa tidak hanya menghafal teori, tetapi harus mampu menghasilkan produk teknologi (seperti aplikasi, website, atau jaringan) yang dapat menyelesaikan masalah sehari-hari. Tujuannya adalah membangun penalaran logis, kreativitas, dan kesiapan karir di era Society 5.0.
                  </p>
                </div>
              </section>
            </div>

            <div className="space-y-6">
              <section className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h2 className="font-bold text-slate-900 mb-4">Kontak & Konsultasi</h2>
                <div className="space-y-4 text-sm">
                  <a href="mailto:guru@sekolah.edu" className="flex items-center gap-3 text-slate-600 hover:text-emerald-600 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-900">
                      <Mail size={18} />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Email</div>
                      <div>guru@sekolah.edu</div>
                    </div>
                  </a>
                  
                  <a href="#" className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-900">
                      <Linkedin size={18} />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">LinkedIn</div>
                      <div>linkedin.com/in/budisantoso</div>
                    </div>
                  </a>

                  <div className="flex items-center gap-3 text-slate-600 pt-2 border-t border-slate-100">
                    <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-900">
                      <Clock size={18} />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Jam Konsultasi</div>
                      <div className="text-xs">Rabu & Jumat, 14:00 - 15:30</div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
