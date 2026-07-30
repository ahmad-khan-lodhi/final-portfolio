import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedinIn } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#E0E1DD] tracking-tight mb-4">
            Get In Touch
          </h2>
          <p className="text-[#778DA9] text-base sm:text-lg">
            Let's discuss development opportunities, IT troubleshooting contracts, or collaboration roles
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-[#1B263B]/60 border border-[#415A77]/30 rounded-2xl p-6 backdrop-blur-md flex items-center gap-4 hover:border-[#778DA9]/60 transition-all shadow-xl"
          >
            <div className="w-12 h-12 rounded-xl bg-[#415A77]/30 border border-[#778DA9]/40 flex items-center justify-center text-[#778DA9] text-xl flex-shrink-0">
              <FaEnvelope />
            </div>
            <div className="overflow-hidden">
              <div className="text-xs font-semibold text-[#778DA9] uppercase">Email Me</div>
              <a
                href="mailto:01ahmadlodhi@gmail.com"
                className="text-sm font-bold text-[#E0E1DD] hover:text-[#778DA9] transition-colors truncate block"
              >
                01ahmadlodhi@gmail.com
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-[#1B263B]/60 border border-[#415A77]/30 rounded-2xl p-6 backdrop-blur-md flex items-center gap-4 hover:border-[#778DA9]/60 transition-all shadow-xl"
          >
            <div className="w-12 h-12 rounded-xl bg-[#415A77]/30 border border-[#778DA9]/40 flex items-center justify-center text-[#778DA9] text-xl flex-shrink-0">
              <FaPhoneAlt />
            </div>
            <div>
              <div className="text-xs font-semibold text-[#778DA9] uppercase">Call / WhatsApp</div>
              <a
                href="tel:+923024209944"
                className="text-sm font-bold text-[#E0E1DD] hover:text-[#778DA9] transition-colors"
              >
                (+92) 302-4209944
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-[#1B263B]/60 border border-[#415A77]/30 rounded-2xl p-6 backdrop-blur-md flex items-center gap-4 hover:border-[#778DA9]/60 transition-all shadow-xl"
          >
            <div className="w-12 h-12 rounded-xl bg-[#415A77]/30 border border-[#778DA9]/40 flex items-center justify-center text-[#778DA9] text-xl flex-shrink-0">
              <FaMapMarkerAlt />
            </div>
            <div>
              <div className="text-xs font-semibold text-[#778DA9] uppercase">Location</div>
              <div className="text-sm font-bold text-[#E0E1DD]">Johar Town, Lahore</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="bg-[#1B263B]/60 border border-[#415A77]/30 rounded-2xl p-6 backdrop-blur-md flex items-center gap-4 hover:border-[#778DA9]/60 transition-all shadow-xl"
          >
            <div className="w-12 h-12 rounded-xl bg-[#415A77]/30 border border-[#778DA9]/40 flex items-center justify-center text-[#778DA9] text-xl flex-shrink-0">
              <FaLinkedinIn />
            </div>
            <div>
              <div className="text-xs font-semibold text-[#778DA9] uppercase">LinkedIn</div>
              <a
                href="https://www.linkedin.com/in/ahmad-khan-lodhi-765731362"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-bold text-[#778DA9] hover:underline"
              >
                Visit Profile
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
