import React, { useState } from 'react';
import { motion } from 'framer-motion';

/**
 * OrbitItem renders an individual technology icon inside a rounded glassmorphic card.
 * It uses counter-rotation to ensure the icon always remains perfectly upright
 * while orbiting around the center profile picture.
 */
const OrbitItem = ({
  Icon,
  name,
  color,
  angle, // Angle placement around circle (in degrees)
  radius, // Orbit radius in pixels
  duration = 22, // Orbit revolution duration in seconds
  reverse = false, // Rotation direction
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Convert angle to radians for trigonometric offset or CSS rotate/translate
  const angleRad = (angle * Math.PI) / 180;
  const x = Math.cos(angleRad) * radius;
  const y = Math.sin(angleRad) * radius;

  return (
    <div
      className="absolute top-1/2 left-1/2 pointer-events-none"
      style={{
        transform: `translate3d(${x}px, ${y}px, 0)`,
      }}
    >
      {/* 
        Counter-rotation wrapper:
        As parent orbit container rotates (0 -> 360 or 0 -> -360),
        this card counter-rotates in the exact opposite direction (-360 -> 0 or 0 -> 360),
        keeping the icon card 100% upright at all times!
      */}
      <motion.div
        className="pointer-events-auto relative group flex items-center justify-center cursor-pointer"
        animate={{
          rotate: reverse ? [0, 360] : [0, -360],
        }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: duration,
        }}
        whileHover={{ scale: 1.25, zIndex: 50 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        {/* Glassmorphism Icon Card */}
        <div
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#1B263B]/90 backdrop-blur-md border border-[#415A77]/40 flex items-center justify-center transition-all duration-300 shadow-lg shadow-black/50"
          style={{
            borderColor: isHovered ? color : 'rgba(65, 90, 119, 0.4)',
            boxShadow: isHovered
              ? `0 0 25px ${color}80, 0 0 10px ${color}40, inset 0 0 10px ${color}30`
              : '0 8px 20px rgba(13, 27, 42, 0.6)',
          }}
        >
          <Icon
            className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:scale-110"
            style={{ color: color }}
          />
        </div>

        {/* Hover Tooltip / Label */}
        <div
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-[#0D1B2A]/95 text-[#E0E1DD] text-[11px] font-medium rounded-md border border-[#415A77]/40 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap shadow-xl z-50"
          style={{
            borderColor: `${color}66`,
          }}
        >
          {name}
        </div>
      </motion.div>
    </div>
  );
};

export default OrbitItem;
