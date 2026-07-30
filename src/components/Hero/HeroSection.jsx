import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedinIn, FaEnvelope, FaArrowRight, FaDownload } from 'react-icons/fa';
import HeroImage from './HeroImage';

const TYPED_TITLES = [
  'Software Developer',
  'Tech Support Specialist',
  'AI Automation Enthusiast',
  'Flutter Mobile Dev',
];

const HeroSection = ({ onOpenResume }) => {
  const [typedText, setTypedText] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing animation logic
  useEffect(() => {
    const currentFullText = TYPED_TITLES[titleIndex];
    let timer;

    if (!isDeleting && charIndex <= currentFullText.length) {
      setTypedText(currentFullText.substring(0, charIndex));
      timer = setTimeout(() => setCharIndex((prev) => prev + 1), 100);
    } else if (isDeleting && charIndex >= 0) {
      setTypedText(currentFullText.substring(0, charIndex));
      timer = setTimeout(() => setCharIndex((prev) => prev - 1), 50);
    } else if (!isDeleting && charIndex > currentFullText.length) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex < 0) {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % TYPED_TITLES.length);
      setCharIndex(0);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, titleIndex]);

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <motion.div
            className="lg:col-span-7 z-10"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#778DA9] font-semibold tracking-widest text-sm uppercase mb-3">
              Welcome to my space
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-[#E0E1DD] tracking-tight leading-tight mb-6">
              Hi, I'm <br />
              <span className="text-white">Ahmad Khan Lodhi</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#778DA9] via-[#E0E1DD] to-[#778DA9]">
                {typedText}
              </span>
              <span className="animate-pulse text-[#778DA9] font-extralight ml-1">|</span>
            </h1>

            <p className="text-[#778DA9]/90 text-lg leading-relaxed max-w-2xl mb-8 font-normal">
              Results-driven Computer Science graduate based in Lahore, specializing in software development, troubleshooting, mobile apps, and AI-driven automation workflows.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-[#E0E1DD] bg-gradient-to-r from-[#415A77] to-[#778DA9] hover:from-[#364b63] hover:to-[#637792] shadow-lg shadow-[#1B263B]/80 hover:-translate-y-0.5 transition-all duration-200"
              >
                View My Work <FaArrowRight className="text-sm" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-[#E0E1DD] bg-[#1B263B]/80 border border-[#415A77]/40 hover:bg-[#415A77]/30 hover:border-[#778DA9]/60 hover:-translate-y-0.5 transition-all duration-200 backdrop-blur-md"
              >
                View Resume <FaDownload className="text-sm" />
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/ahmad-khan-lodhi-765731362"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full bg-[#1B263B]/80 border border-[#415A77]/40 flex items-center justify-center text-[#778DA9] hover:text-[#E0E1DD] hover:border-[#778DA9] hover:bg-[#415A77]/30 hover:shadow-lg transition-all duration-200"
                title="LinkedIn Profile"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="mailto:01ahmadlodhi@gmail.com"
                className="w-11 h-11 rounded-full bg-[#1B263B]/80 border border-[#415A77]/40 flex items-center justify-center text-[#778DA9] hover:text-[#E0E1DD] hover:border-[#778DA9] hover:bg-[#415A77]/30 hover:shadow-lg transition-all duration-200"
                title="Email Me"
              >
                <FaEnvelope />
              </a>
            </div>
          </motion.div>

          {/* Right Profile Picture with Orbit Animation */}
          <motion.div
            className="lg:col-span-5 flex justify-center z-10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <HeroImage />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
