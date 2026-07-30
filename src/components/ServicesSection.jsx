import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaTabletAlt, FaBug } from 'react-icons/fa';

const SERVICES = [
  {
    icon: FaCode,
    title: 'Software Development',
    desc: 'Creating desktop scripts, automation systems, and clean backends using Python, C++, and Java. Focusing on execution efficiency and clear documentation.',
  },
  {
    icon: FaTabletAlt,
    title: 'Mobile App & Prototyping',
    desc: 'Designing responsive frontends and app structures. Implementing user-focused mockups and interactions using Figma and Flutter framework technologies.',
  },
  {
    icon: FaBug,
    title: 'IT Troubleshooting & QA',
    desc: 'Analyzing, diagnostics, and debugging code anomalies and system errors. Structuring test cases, UML specifications, and optimizing database management workflows.',
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#E0E1DD] tracking-tight mb-4">
            Services
          </h2>
          <p className="text-[#778DA9] text-base sm:text-lg">
            Technical services I offer in development, prototyping, and operations management
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => {
            const IconComp = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="bg-[#1B263B]/60 border border-[#415A77]/30 rounded-2xl p-8 backdrop-blur-md hover:border-[#778DA9]/60 hover:-translate-y-1 transition-all duration-300 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#415A77]/30 border border-[#778DA9]/40 flex items-center justify-center text-[#778DA9] text-2xl mb-6 shadow-lg shadow-[#0D1B2A]/50">
                    <IconComp />
                  </div>
                  <h3 className="text-xl font-bold text-[#E0E1DD] mb-3">{service.title}</h3>
                  <p className="text-[#E0E1DD]/80 text-sm leading-relaxed">{service.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
