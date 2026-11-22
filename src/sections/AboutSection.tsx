import React from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  GraduationCap, 
  Compass, 
  Cpu, 
  Target, 
  Sparkles, 
  CheckCircle2 
} from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import { SectionHeading } from '../components/SectionHeading';

export const AboutSection: React.FC = () => {
  const { about } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Engineering Foundation"
          title="About Me"
          subtitle="My journey, core operational mindset, and goals in Cloud & DevOps engineering."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6"
        >
          {/* Main Introduction Card */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-8 glass-card glass-card-hover rounded-2xl p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                <User size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Introduction</h3>
                <p className="text-xs text-zinc-500 font-mono">Profile &amp; Systems Philosophy</p>
              </div>
            </div>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-6">
              {about.introduction}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-zinc-800/80">
              <div className="space-y-1.5">
                <span className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider flex items-center gap-1.5">
                  <GraduationCap size={14} /> Education Context
                </span>
                <p className="text-xs text-zinc-400 leading-normal">
                  {about.educationalBackground}
                </p>
              </div>

              <div className="space-y-1.5">
                <span className="text-xs font-mono text-violet-400 font-semibold uppercase tracking-wider flex items-center gap-1.5">
                  <Compass size={14} /> Career Interests
                </span>
                <p className="text-xs text-zinc-400 leading-normal">
                  {about.careerInterests}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Professional Goals Card */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-4 glass-card glass-card-hover rounded-2xl p-6 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-400">
                  <Target size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Professional Goals</h3>
                  <p className="text-xs text-zinc-500 font-mono">Development Roadmap</p>
                </div>
              </div>

              <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                {about.professionalGoals}
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800 text-xs font-mono text-zinc-400 flex items-center gap-2">
              <Sparkles size={14} className="text-cyan-400 shrink-0" />
              <span>&ldquo;Understand systems from the inside out — build, test, automate.&rdquo;</span>
            </div>
          </motion.div>

          {/* Technical Interests Card */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-12 glass-card rounded-2xl p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                <Cpu size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Technical Interests &amp; Core Focus Areas</h3>
                <p className="text-xs text-zinc-500 font-mono">Specialized Engineering Domains</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {about.technicalInterests.map((interest, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/80 hover:border-cyan-500/30 transition-all flex items-center gap-2.5 group"
                >
                  <CheckCircle2 size={16} className="text-cyan-400 shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-xs sm:text-sm text-zinc-300 group-hover:text-white font-medium">
                    {interest}
                  </span>
                </div>
              ))}
            </div>

            {/* 4 Pillars of Engineering highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 pt-6 border-t border-zinc-800/80">
              {about.keyHighlights.map((highlight, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#090c14] border border-zinc-800/60">
                  <span className="text-xs font-mono font-bold text-cyan-400 block mb-1">
                    {highlight.label}
                  </span>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
