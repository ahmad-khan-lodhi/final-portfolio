import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaFilePdf } from 'react-icons/fa';

const Navbar = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['hero', 'about', 'skills', 'projects', 'services', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180 && rect.bottom >= 180) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0D1B2A]/90 backdrop-blur-md border-b border-[#415A77]/30 py-3 shadow-xl shadow-[#0D1B2A]/50'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        <a href="#hero" className="text-2xl font-bold font-heading text-[#E0E1DD] tracking-tight">
          Ahmad Khan Lodhi<span className="text-[#778DA9]">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-[#778DA9] relative py-1 ${
                activeSection === link.href.substring(1)
                  ? 'text-[#778DA9] font-semibold'
                  : 'text-[#E0E1DD]/80'
              }`}
            >
              {link.name}
              {activeSection === link.href.substring(1) && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#415A77] to-[#778DA9] rounded-full" />
              )}
            </a>
          ))}

          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-[#E0E1DD] bg-[#1B263B] border border-[#415A77]/40 hover:bg-[#415A77]/40 hover:border-[#778DA9]/60 transition-all duration-200"
          >
            <FaFilePdf className="text-[#778DA9]" /> Resume
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[#E0E1DD] text-2xl focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0D1B2A]/98 border-b border-[#415A77]/40 backdrop-blur-xl px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#E0E1DD] font-medium py-2 hover:text-[#778DA9] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenResume();
            }}
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-[#E0E1DD] bg-[#415A77] hover:bg-[#344a63] transition-all mt-2"
          >
            <FaFilePdf /> View Resume
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
