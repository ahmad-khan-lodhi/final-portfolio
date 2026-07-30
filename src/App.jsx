import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/Hero/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

function App() {
  const [showResumeModal, setShowResumeModal] = useState(false);

  return (
    <div className="min-h-screen bg-bgPrimary text-slate-100 relative overflow-hidden font-sans">
      {/* Background Glow Blobs */}
      <div className="glow-blob glow-blob-1" />
      <div className="glow-blob glow-blob-2" />

      {/* Navigation Header */}
      <Navbar onOpenResume={() => setShowResumeModal(true)} />

      {/* Main Sections */}
      <main>
        <HeroSection onOpenResume={() => setShowResumeModal(true)} />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ServicesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* PDF Resume Preview & Download Modal */}
      {showResumeModal && (
        <ResumeModal onClose={() => setShowResumeModal(false)} />
      )}
    </div>
  );
}

export default App;
