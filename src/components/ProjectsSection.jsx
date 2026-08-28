import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGasPump, FaRobot, FaCoffee, FaUtensils, FaFigma, FaClinicMedical } from 'react-icons/fa';

const PROJECTS = [
  {
    id: 'pump-report',
    title: 'Pump Daily Report Generator',
    category: 'mobile',
    icon: FaGasPump,
    tags: ['Flutter', 'Dart', 'Mobile App', 'Report Automation'],
    description:
      'A mobile application developed to simplify daily fuel station reporting. Allows station operators to generate professional daily reports in seconds by entering sales, cash, stock, fuel supply, and expense details.',
    highlights: [
      'Auto-filled date & dynamic smart fields that hide empty values.',
      'Petrol & Diesel tracking, fuel supply/stock, office expense recording.',
      'One-click clean, formatted daily report generation.',
    ],
  },
  {
    id: 'medical-inventory',
    title: 'Medical Inventory & Stock Management System',
    category: 'mobile',
    icon: FaClinicMedical,
    tags: ['Flutter', 'Dart', 'Mobile App', 'Local Database'],
    description:
      'A mobile application developed for a medical clinic to efficiently manage medicine inventory, stock, billing, and reports. The application works offline using local database storage.',
    highlights: [
      'Medicine search, inventory management, and stock tracking.',
      'Add medicines to cart, calculate totals, and create editable bills.',
      'Stock reports with sorting and filtering options.',
      'Local database storage for offline use.',
      'Database backup and sharing functionality.',
    ],
  },
  {
    id: 'ai-scheduler',
    title: 'AI-Based Task Scheduler',
    category: 'ai',
    icon: FaRobot,
    tags: ['Python', 'Scikit-learn', 'Pandas'],
    description:
      'Designed and coded a smart workload scheduler using Python, Pandas, and Scikit-learn. The algorithm automatically prioritizes tasks based on deadline urgency and complexity coefficients to reduce workflow errors.',
    highlights: [
      'Automates daily task prioritization based on urgency.',
      'Reduces scheduling errors and balances workload.',
    ],
  },
  {
    id: 'coffee-shop',
    title: 'Coffee Shop UI Clone',
    category: 'mobile',
    icon: FaCoffee,
    tags: ['React Native', 'Mobile Layout', 'CSS Flexbox'],
    description:
      'Coded a replica coffee ordering layout inside React Native. Optimized view responsiveness, navigation gestures, animations, and image render grids for a smooth mobile experience.',
    highlights: [
      'Smooth mobile gestures and navigation views.',
      'Responsive ordering catalog layout.',
    ],
  },
  {
    id: 'restaurant-figma',
    title: 'Restaurant UI Figma Design',
    category: 'design',
    icon: FaUtensils,
    tags: ['Figma', 'Prototyping', 'UI/UX'],
    description:
      'Created a detailed visual prototype layout for a luxury restaurant order system on Figma. Followed atomic design concepts, creating custom vector assets, typography scales, and visual alignment layers.',
    highlights: [
      'Atomic design system & custom vector assets.',
      'Interactive visual ordering prototype.',
    ],
    link: 'https://figma.com',
    linkText: 'Figma File',
  },
];

const FILTER_BUTTONS = [
  { name: 'All Projects', value: 'all' },
  { name: 'AI & Automation', value: 'ai' },
  { name: 'Mobile Apps', value: 'mobile' },
  { name: 'Design & Figma', value: 'design' },
];

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects =
    activeFilter === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 relative z-10 bg-[#0D1B2A]/60 border-t border-[#415A77]/20">
      <div className="container mx-auto px-6 max-w-7xl">

        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#E0E1DD] tracking-tight mb-4">
            My Projects
          </h2>
          <p className="text-[#778DA9] text-base sm:text-lg">
            A showcase of mobile report generators, automated schedulers, interface clones, and technical prototypes
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {FILTER_BUTTONS.map((btn) => (
            <button
              key={btn.value}
              onClick={() => setActiveFilter(btn.value)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${activeFilter === btn.value
                ? 'bg-gradient-to-r from-[#415A77] to-[#778DA9] text-[#E0E1DD] shadow-lg shadow-[#1B263B]'
                : 'bg-[#1B263B]/80 border border-[#415A77]/40 text-[#778DA9] hover:text-[#E0E1DD] hover:bg-[#415A77]/30'
                }`}
            >
              {btn.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const IconComp = project.icon;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="bg-[#1B263B]/60 border border-[#415A77]/30 rounded-2xl overflow-hidden backdrop-blur-md hover:border-[#778DA9]/60 transition-all duration-300 flex flex-col justify-between group shadow-xl"
                >
                  <div className="p-8">
                    {/* Header Image Placeholder / Icon Banner */}
                    <div className="w-full h-44 rounded-xl bg-gradient-to-br from-[#0D1B2A] via-[#1B263B] to-[#415A77]/30 border border-[#415A77]/30 flex flex-col items-center justify-center mb-6 group-hover:border-[#778DA9]/40 transition-all">
                      <div className="w-14 h-14 rounded-2xl bg-[#415A77]/30 border border-[#778DA9]/40 flex items-center justify-center text-[#778DA9] text-2xl mb-3 shadow-lg shadow-[#0D1B2A]/50 group-hover:scale-110 transition-transform">
                        <IconComp />
                      </div>
                      <h4 className="text-[#E0E1DD] font-bold text-base">{project.title}</h4>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-lg text-xs font-semibold bg-[#415A77]/30 border border-[#415A77]/40 text-[#E0E1DD]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Description */}
                    <h3 className="text-xl font-bold text-[#E0E1DD] mb-3">{project.title}</h3>
                    <p className="text-[#E0E1DD]/80 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Bullet Highlights */}
                    <ul className="space-y-1.5 text-xs text-[#778DA9] pl-4 list-disc mb-4">
                      {project.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  </div>

                  {project.link && (
                    <div className="px-8 pb-6 pt-2 border-t border-[#415A77]/20">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-bold text-[#778DA9] hover:text-[#E0E1DD]"
                      >
                        <FaFigma /> {project.linkText}
                      </a>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
