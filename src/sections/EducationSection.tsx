import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, BookOpen, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import { SectionHeading } from '../components/SectionHeading';

export const EducationSection: React.FC = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Academic Background"
          title="Education &amp; Core Coursework"
          subtitle="Formal computer science fundamentals and foundational coursework that back my systems knowledge."
        />

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card glass-card-hover rounded-2xl p-6 sm:p-8 relative overflow-hidden"
            >
              {/* Top Accent Stripe */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500" />

              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {item.degree}
                    </h3>
                    <p className="text-sm font-medium text-cyan-300">
                      {item.institution}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap sm:flex-col items-start sm:items-end gap-2 text-xs font-mono text-zinc-400">
                  <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800">
                    <Calendar size={13} className="text-cyan-400" />
                    {item.period}
                  </span>
                  {item.location && (
                    <span className="flex items-center gap-1.5 text-zinc-500">
                      <MapPin size={13} />
                      {item.location}
                    </span>
                  )}
                </div>
              </div>

              {/* Coursework Badges */}
              {item.relevantCoursework && item.relevantCoursework.length > 0 && (
                <div className="mb-6 pt-4 border-t border-zinc-800/80">
                  <h4 className="text-xs font-mono text-zinc-400 font-bold uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <BookOpen size={14} className="text-cyan-400" />
                    Relevant Core Coursework:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.relevantCoursework.map((course, cIdx) => (
                      <span
                        key={cIdx}
                        className="px-3 py-1 rounded-lg text-xs font-medium bg-zinc-900/80 text-zinc-300 border border-zinc-800"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Achievements / Extracurriculars */}
              {item.achievements && item.achievements.length > 0 && (
                <div className="pt-4 border-t border-zinc-800/80">
                  <h4 className="text-xs font-mono text-zinc-400 font-bold uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <Award size={14} className="text-violet-400" />
                    Campus Highlights &amp; Activities:
                  </h4>
                  <ul className="space-y-1.5 pl-1">
                    {item.achievements.map((ach, aIdx) => (
                      <li key={aIdx} className="text-xs text-zinc-300 flex items-start gap-2">
                        <span className="text-violet-400 shrink-0 mt-0.5">•</span>
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
