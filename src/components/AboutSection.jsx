import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative z-10 bg-[#0D1B2A]/60 border-t border-[#415A77]/20">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#E0E1DD] tracking-tight mb-4">
            About Me
          </h2>
          <p className="text-[#778DA9] text-base sm:text-lg">
            A brief look into my background, objective, and academic journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* My Story & Objective */}
          <motion.div
            className="lg:col-span-6 bg-[#1B263B]/60 border border-[#415A77]/30 rounded-2xl p-8 backdrop-blur-md shadow-xl"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-[#E0E1DD] mb-4">My Story & Objective</h3>
            <p className="text-[#E0E1DD]/90 leading-relaxed mb-4">
              I am a recently graduated Computer Science major from the University of Central Punjab. My focus revolves around building reliable software, troubleshooting systems, and leveraging AI to optimize daily workflows.
            </p>
            <p className="text-[#E0E1DD]/90 leading-relaxed mb-8">
              I seek to bring my technical expertise and problem-solving skills as a Technical Support Executive or Software Engineer to help teams deliver reliable IT solutions, streamline operational efficiency, and maintain system excellence.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#415A77]/30">
              <div className="text-center">
                <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#778DA9] to-[#E0E1DD]">
                  3.25
                </div>
                <div className="text-xs text-[#778DA9] mt-1 uppercase font-medium">UCP CGPA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#778DA9] to-[#E0E1DD]">
                  5+
                </div>
                <div className="text-xs text-[#778DA9] mt-1 uppercase font-medium">Core Tech Stacks</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#778DA9] to-[#E0E1DD]">
                  4
                </div>
                <div className="text-xs text-[#778DA9] mt-1 uppercase font-medium">Projects</div>
              </div>
            </div>
          </motion.div>

          {/* Education & Experience Timeline */}
          <motion.div
            className="lg:col-span-6 space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-[#E0E1DD] mb-6">Education & Work</h3>

            <div className="relative pl-6 border-l-2 border-[#415A77]/40 space-y-8">
              {/* Timeline Item 1 */}
              <div className="relative">
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-[#778DA9] ring-4 ring-[#0D1B2A]" />
                <span className="text-xs font-semibold text-[#778DA9] uppercase tracking-wider">
                  Mar 2022 - Feb 2026
                </span>
                <h4 className="text-lg font-bold text-[#E0E1DD] mt-1">Bachelor of Computer Science</h4>
                <p className="text-sm font-medium text-[#778DA9]">University of Central Punjab, Lahore</p>
                <p className="text-[#E0E1DD]/80 text-sm mt-2 leading-relaxed">
                  Major in Software Development with a Minor in Quality Assurance. Achieved a solid 3.25 CGPA.
                </p>
              </div>

              {/* Timeline Item 2 */}
              <div className="relative">
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-[#415A77] ring-4 ring-[#0D1B2A]" />
                <span className="text-xs font-semibold text-[#778DA9] uppercase tracking-wider">
                  Jul 2024 - Sep 2024
                </span>
                <h4 className="text-lg font-bold text-[#E0E1DD] mt-1">Manager Intern</h4>
                <p className="text-sm font-medium text-[#778DA9]">Vital Petroleum, Lahore</p>
                <p className="text-[#E0E1DD]/80 text-sm mt-2 leading-relaxed">
                  Supervised daily management, handled client correspondence, audited inventory levels, and sharpened team coordination capabilities.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
