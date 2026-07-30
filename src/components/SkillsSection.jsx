import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaUsers, FaClock, FaGraduationCap, FaTasks, FaGlobe, FaComments } from 'react-icons/fa';

const SKILLS = [
  { name: 'Python (Automation & Data)', percentage: '85%' },
  { name: 'C++ (Algorithms / Systems)', percentage: '80%' },
  { name: 'Flutter & Dart (Mobile App)', percentage: '75%' },
  { name: 'SQL Databases & Queries', percentage: '78%' },
  { name: 'Java Development', percentage: '70%' },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#E0E1DD] tracking-tight mb-4">
            Technical Expertise
          </h2>
          <p className="text-[#778DA9] text-base sm:text-lg">
            Proficiencies in coding languages, toolkits, and professional competencies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Core Development Progress Bars */}
          <motion.div
            className="bg-[#1B263B]/60 border border-[#415A77]/30 rounded-2xl p-8 backdrop-blur-md shadow-xl"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold text-[#E0E1DD] mb-6">Core Development Skills</h3>
            <div className="space-y-6">
              {SKILLS.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center text-sm font-medium mb-2">
                    <span className="text-[#E0E1DD]">{skill.name}</span>
                    <span className="text-[#778DA9] font-semibold">{skill.percentage}</span>
                  </div>
                  <div className="w-full h-2.5 bg-[#0D1B2A] rounded-full overflow-hidden border border-[#415A77]/20">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[#415A77] via-[#778DA9] to-[#E0E1DD] rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: skill.percentage }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Interpersonal & Languages */}
          <motion.div
            className="bg-[#1B263B]/60 border border-[#415A77]/30 rounded-2xl p-8 backdrop-blur-md shadow-xl flex flex-col justify-between"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h3 className="text-xl font-bold text-[#E0E1DD] mb-6">Methodologies & Interpersonal</h3>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-medium bg-[#0D1B2A]/90 border border-[#415A77]/40 text-[#E0E1DD]">
                  <FaCheckCircle className="text-[#778DA9]" /> Problem Solving
                </span>
                <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-medium bg-[#0D1B2A]/90 border border-[#415A77]/40 text-[#E0E1DD]">
                  <FaUsers className="text-[#778DA9]" /> Teamwork & Collaboration
                </span>
                <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-medium bg-[#0D1B2A]/90 border border-[#415A77]/40 text-[#E0E1DD]">
                  <FaClock className="text-[#778DA9]" /> Time Management
                </span>
                <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-medium bg-[#0D1B2A]/90 border border-[#415A77]/40 text-[#E0E1DD]">
                  <FaGraduationCap className="text-[#778DA9]" /> Adaptable Learner
                </span>
                <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-medium bg-[#0D1B2A]/90 border border-[#415A77]/40 text-[#E0E1DD]">
                  <FaTasks className="text-[#778DA9]" /> MS Office Suite
                </span>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#E0E1DD] mb-4">Languages</h3>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-medium bg-[#415A77]/30 border border-[#415A77]/50 text-[#E0E1DD]">
                  <FaGlobe className="text-[#778DA9]" /> English (Fluent)
                </span>
                <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-medium bg-[#415A77]/30 border border-[#415A77]/50 text-[#E0E1DD]">
                  <FaComments className="text-[#778DA9]" /> Urdu (Native)
                </span>
                <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-medium bg-[#415A77]/30 border border-[#415A77]/50 text-[#E0E1DD]">
                  <FaComments className="text-[#778DA9]" /> Punjabi (Native)
                </span>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
