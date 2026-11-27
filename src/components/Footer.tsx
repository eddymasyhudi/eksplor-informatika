export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm">
          &copy; {new Date().getFullYear()} Portal Eksplorasi Informatika by Al Fithroh Sitarda. All rights reserved.
        </div>
        <div className="flex gap-4 text-sm">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
            System Online
          </span>
        </div>
      </div>
    </footer>
  );
}
