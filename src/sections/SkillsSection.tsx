import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Cloud, 
  Terminal, 
  Code2, 
  Server, 
  GitBranch, 
  Layers,
  Check,
  Shield,
  FileCode,
  Network
} from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import { SectionHeading } from '../components/SectionHeading';
import { TechIcon } from '../components/TechIcon';

const categoryIcons: Record<string, React.ReactNode> = {
  All: <Layers size={14} />,
  'Cloud Platforms': <Cloud size={14} />,
  Containerization: <Server size={14} />,
  'CI/CD Tools & GitOps': <GitBranch size={14} />,
  'Operating Systems': <Terminal size={14} />,
  Networking: <Network size={14} />,
  'Scripting Languages': <Code2 size={14} />,
  'Version Control': <GitBranch size={14} />,
  'Infrastructure as Code': <FileCode size={14} />,
  Security: <Shield size={14} />,
};

export const SkillsSection: React.FC = () => {
  const { skills } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Cloud Platforms',
    'Containerization',
    'CI/CD Tools & GitOps',
    'Operating Systems',
    'Networking',
    'Scripting Languages',
    'Version Control',
    'Infrastructure as Code',
    'Security',
  ];

  const filteredSkills = selectedCategory === 'All'
    ? skills
    : skills.filter((s) => s.category === selectedCategory);

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyan-600/5 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Tooling &amp; Infrastructure"
          title="Technical Skills"
          subtitle="Core competencies, cloud platforms, and DevOps automation tooling drawn from my resume and practical projects."
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono transition-all duration-200 ${
                  isSelected
                    ? 'bg-cyan-500/15 border-cyan-500/40 text-cyan-300 font-semibold shadow-sm shadow-cyan-950/40'
                    : 'bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700'
                } border`}
              >
                <span className={isSelected ? 'text-cyan-400' : 'text-zinc-500'}>
                  {categoryIcons[category] || <Layers size={14} />}
                </span>
                <span>{category}</span>
                {isSelected && (
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 ml-0.5" />
                )}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="group glass-card glass-card-hover rounded-xl p-4 sm:p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="w-11 h-11 rounded-xl bg-zinc-900/90 border border-zinc-800 flex items-center justify-center p-1.5 group-hover:border-cyan-500/40 transition-colors shadow-inner shrink-0">
                      <TechIcon name={skill.iconKey} size={28} />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-400">
                      {skill.category}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors mb-1">
                    {skill.name}
                  </h4>

                  {skill.tag && (
                    <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                      {skill.tag}
                    </p>
                  )}
                </div>

                <div className="mt-4 pt-3 border-t border-zinc-800/60 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                  <span className="flex items-center gap-1 text-emerald-400/90">
                    <Check size={12} />
                    <span>Resume &amp; Project Skills</span>
                  </span>
                  {skill.featured && (
                    <span className="text-cyan-400/80 font-medium">Core Stack</span>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* DevOps Standards Guarantee Note */}
        <div className="mt-12 p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80 max-w-2xl mx-auto text-center text-xs text-zinc-400 font-mono">
          <span className="text-cyan-400"># Engineering Note:</span> Built from genuine lab implementations, container manifests, and pipeline scripts rather than arbitrary proficiency percentages.
        </div>
      </div>
    </section>
  );
};
