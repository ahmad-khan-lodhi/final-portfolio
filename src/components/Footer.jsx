import React from 'react';
import { FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-12 bg-[#0D1B2A] border-t border-[#415A77]/30 relative z-10 text-center">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-2xl font-bold font-heading text-[#E0E1DD] tracking-tight mb-4">
          Ahmad Khan Lodhi<span className="text-[#778DA9]">.</span>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-[#778DA9] mb-6">
          <a href="#hero" className="hover:text-[#E0E1DD] transition-colors">Home</a>
          <a href="#about" className="hover:text-[#E0E1DD] transition-colors">About</a>
          <a href="#skills" className="hover:text-[#E0E1DD] transition-colors">Skills</a>
          <a href="#projects" className="hover:text-[#E0E1DD] transition-colors">Projects</a>
          <a href="#services" className="hover:text-[#E0E1DD] transition-colors">Services</a>
          <a href="#contact" className="hover:text-[#E0E1DD] transition-colors">Contact</a>
        </nav>

        <div className="flex items-center justify-center gap-4 mb-6">
          <a
            href="https://www.linkedin.com/in/ahmad-khan-lodhi-765731362"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-full bg-[#1B263B] border border-[#415A77]/40 flex items-center justify-center text-[#778DA9] hover:text-[#E0E1DD] hover:border-[#778DA9] transition-all"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="mailto:01ahmadlodhi@gmail.com"
            className="w-10 h-10 rounded-full bg-[#1B263B] border border-[#415A77]/40 flex items-center justify-center text-[#778DA9] hover:text-[#E0E1DD] hover:border-[#778DA9] transition-all"
          >
            <FaEnvelope />
          </a>
        </div>

        <p className="text-xs text-[#778DA9]/70 font-medium">
          &copy; {new Date().getFullYear()} Ahmad Khan Lodhi. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
