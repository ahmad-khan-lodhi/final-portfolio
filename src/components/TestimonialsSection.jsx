import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 relative z-10 bg-[#0D1B2A]/60 border-t border-[#415A77]/20">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#E0E1DD] tracking-tight mb-4">
            Leadership & Influence
          </h2>
          <p className="text-[#778DA9] text-base sm:text-lg">
            Volunteering contributions and academic mentorship impact
          </p>
        </motion.div>

        <motion.div
          className="bg-[#1B263B]/60 border border-[#415A77]/30 rounded-2xl p-8 sm:p-12 backdrop-blur-md relative shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <FaQuoteLeft className="text-[#778DA9]/30 text-5xl mb-6" />
          <p className="text-[#E0E1DD]/90 text-lg sm:text-xl leading-relaxed italic mb-8">
            "Ahmad has shown strong dedication in raising charitable resources and leading academic mentoring. During his computer science track, he was always ready to provide explanations and detailed walk-throughs to support school-level and junior students in understanding complex algorithms and logic loops."
          </p>
          <div>
            <div className="text-[#E0E1DD] font-bold text-lg">Peer Mentorship Review</div>
            <div className="text-[#778DA9] text-sm font-medium">University of Central Punjab Academic Coordinator</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
