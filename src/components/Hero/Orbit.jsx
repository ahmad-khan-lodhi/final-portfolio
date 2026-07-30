import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import OrbitItem from './OrbitItem';
import {
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiPhp,
  SiDart,
  SiReact,
  SiLaravel,
  SiFlutter,
  SiNextdotjs,
  SiTailwindcss,
  SiMysql,
  SiGit,
  SiGithub,
  SiDocker,
  SiFigma,
  SiGoogle,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { TbBrandVscode, TbBrandOpenai, TbBrandGithubCopilot } from 'react-icons/tb';

// Tech Icons Configuration
const INNER_RING_ICONS = [
  { name: 'C++', icon: SiCplusplus, color: '#00599C' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'Java', icon: FaJava, color: '#ED8B00' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'PHP', icon: SiPhp, color: '#777BB4' },
  { name: 'Dart', icon: SiDart, color: '#0175C2' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'GitHub', icon: SiGithub, color: '#F0F6FC' },
];

const OUTER_RING_ICONS = [
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
  { name: 'Flutter', icon: SiFlutter, color: '#02569B' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#F8FAFC' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'VS Code', icon: TbBrandVscode, color: '#007ACC' },
  { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
  { name: 'ChatGPT', icon: TbBrandOpenai, color: '#10A37F' },
  { name: 'Gemini', icon: SiGoogle, color: '#8E75FF' },
  { name: 'GitHub Copilot', icon: TbBrandGithubCopilot, color: '#A855F7' },
];

const Orbit = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsive radius adjustments
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Radius values
  const innerRadius = isMobile ? 115 : 165;
  const outerRadius = isMobile ? 165 : 240;

  // Revolution durations (seconds)
  const innerDuration = 20;
  const outerDuration = 28;

  return (
    <div
      className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 
        ========================================
        1. DECORATIVE ORBIT RINGS & PARTICLES
        ========================================
      */}

      {/* Inner Gradient Ring SVG */}
      <div
        className="absolute rounded-full border border-[#415A77]/30 pointer-events-none transition-all duration-500"
        style={{
          width: innerRadius * 2,
          height: innerRadius * 2,
          boxShadow: '0 0 35px rgba(119, 141, 169, 0.15), inset 0 0 25px rgba(65, 90, 119, 0.12)',
        }}
      />

      {/* Outer Dotted / Dashed Ring SVG */}
      <svg
        className="absolute pointer-events-none transition-all duration-500 animate-spin-slow"
        style={{
          width: outerRadius * 2 + 10,
          height: outerRadius * 2 + 10,
          animationDuration: '60s',
        }}
      >
        <circle
          cx={outerRadius + 5}
          cy={outerRadius + 5}
          r={outerRadius}
          fill="none"
          stroke="url(#orbitGradient)"
          strokeWidth="1.5"
          strokeDasharray="6 8"
          className="opacity-50"
        />
        <defs>
          <linearGradient id="orbitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#415A77" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#778DA9" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#E0E1DD" stopOpacity="0.8" />
          </linearGradient>
        </defs>
      </svg>

      {/* Glowing Ambient Particles Around Orbit */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => {
          const particleAngle = (i * 360) / 8;
          const pRad = (particleAngle * Math.PI) / 180;
          const pDist = (innerRadius + outerRadius) / 2;
          const px = Math.cos(pRad) * pDist;
          const py = Math.sin(pRad) * pDist;

          return (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-1.5 h-1.5 rounded-full bg-[#778DA9]/70 blur-[1px]"
              style={{
                top: `calc(50% + ${py}px)`,
                left: `calc(50% + ${px}px)`,
              }}
              animate={{
                scale: [0.8, 1.6, 0.8],
                opacity: [0.3, 0.9, 0.3],
              }}
              transition={{
                duration: 3 + (i % 3),
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.4,
              }}
            />
          );
        })}
      </div>

      {/* 
        ========================================
        2. INNER ORBIT RING & ICONS (Rotates Clockwise)
        ========================================
      */}
      <motion.div
        className="absolute w-full h-full flex items-center justify-center pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: innerDuration,
        }}
        style={{
          animationPlayState: isHovered ? 'paused' : 'running',
        }}
      >
        {INNER_RING_ICONS.map((item, index) => {
          const angle = (index * 360) / INNER_RING_ICONS.length;
          return (
            <OrbitItem
              key={`inner-${item.name}`}
              Icon={item.icon}
              name={item.name}
              color={item.color}
              angle={angle}
              radius={innerRadius}
              duration={innerDuration}
              reverse={false}
            />
          );
        })}
      </motion.div>

      {/* 
        ========================================
        3. OUTER ORBIT RING & ICONS (Rotates Counter-Clockwise)
        ========================================
      */}
      <motion.div
        className="absolute w-full h-full flex items-center justify-center pointer-events-none"
        animate={{ rotate: -360 }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: outerDuration,
        }}
        style={{
          animationPlayState: isHovered ? 'paused' : 'running',
        }}
      >
        {OUTER_RING_ICONS.map((item, index) => {
          const angle = (index * 360) / OUTER_RING_ICONS.length;
          return (
            <OrbitItem
              key={`outer-${item.name}`}
              Icon={item.icon}
              name={item.name}
              color={item.color}
              angle={angle}
              radius={outerRadius}
              duration={outerDuration}
              reverse={true}
            />
          );
        })}
      </motion.div>
    </div>
  );
};

export default Orbit;
