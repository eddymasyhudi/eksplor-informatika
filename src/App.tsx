/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Dashboard } from "./pages/Dashboard";
import { Materials } from "./pages/Materials";
import { Assignments } from "./pages/Assignments";
import { Assessments } from "./pages/Assessments";
import { AboutMe } from "./pages/AboutMe";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-slate-50 font-sans">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/materi" element={<Materials />} />
            <Route path="/tugas" element={<Assignments />} />
            <Route path="/asesmen" element={<Assessments />} />
            <Route path="/profil" element={<AboutMe />} />
            <Route path="*" element={<Dashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
