import React from 'react';
import { motion } from 'framer-motion';
import Orbit from './Orbit';

/**
 * HeroImage displays the central profile photograph with a continuous vertical floating animation,
 * a soft purple/blue backdrop glow, and the orbiting technology icons component.
 */
const HeroImage = () => {
  return (
    <div className="relative flex items-center justify-center w-full max-w-[500px] aspect-square mx-auto my-6 sm:my-0">
      {/* Soft Twilight Sky Ambient Glow Behind Profile Picture */}
      <div className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-tr from-[#415A77]/40 via-[#778DA9]/30 to-[#E0E1DD]/15 blur-3xl pointer-events-none animate-pulse-glow" />

      {/* Technology Orbit Layer */}
      <Orbit />

      {/* Floating Profile Image Wrapper */}
      <motion.div
        className="relative z-20 w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full p-1.5 bg-gradient-to-b from-[#778DA9]/60 via-[#415A77]/40 to-transparent backdrop-blur-sm shadow-2xl shadow-[#0D1B2A]"
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {/* Inner Profile Card Container */}
        <div className="w-full h-full rounded-full overflow-hidden border-2 border-[#E0E1DD]/20 bg-[#0D1B2A]/90 shadow-inner relative group">
          <img
            src="/assets/profile.png"
            alt="Ahmad Khan Lodhi"
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />

          {/* Subtle Inner Radial Overlay */}
          <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-[#E0E1DD]/10 pointer-events-none" />
        </div>
      </motion.div>
    </div>
  );
};

export default HeroImage;
