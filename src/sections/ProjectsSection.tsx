import React from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  ArrowUpRight,
  Workflow,
  AlertCircle,
  GitCommit
} from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import { SectionHeading } from '../components/SectionHeading';

export const ProjectsSection: React.FC = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      {/* Background ambient light */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-violet-600/5 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Featured Implementations"
          title="DevOps &amp; Cloud Projects"
          subtitle="Real-world hands-on implementations covering K3s GitOps, AWS serverless storage, and automated container CI/CD pipelines."
        />

        <div className="space-y-16">
          {projects.map((project, index) => {
            const isEven = index % 2 === 1;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6 }}
                className="glass-card rounded-2xl border border-zinc-800/90 overflow-hidden shadow-xl hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch`}>
                  {/* Visual Image / Architecture Preview */}
                  <div
                    className={`lg:col-span-6 bg-[#0a0d15] relative overflow-hidden group flex flex-col justify-center border-b lg:border-b-0 ${
                      isEven ? 'lg:order-2 lg:border-l border-zinc-800/80' : 'lg:border-r border-zinc-800/80'
                    }`}
                  >
                    <div className="relative p-6 sm:p-8 flex items-center justify-center">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-auto rounded-xl shadow-2xl border border-zinc-800/60 group-hover:scale-[1.02] transition-transform duration-500 object-cover"
                        loading="lazy"
                      />
                    </div>

                    {/* Architecture Highlights Tags */}
                    {project.architectureHighlights && (
                      <div className="px-6 pb-6 pt-0 flex flex-wrap gap-2">
                        {project.architectureHighlights.map((tag, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-zinc-900/90 border border-zinc-700/60 text-zinc-300"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Project Details */}
                  <div
                    className={`lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between ${
                      isEven ? 'lg:order-1' : ''
                    }`}
                  >
                    <div>
                      {/* Sub-tagline */}
                      <span className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider block mb-2">
                        {project.tagline}
                      </span>

                      {/* Title */}
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-zinc-300 leading-relaxed mb-5">
                        {project.description}
                      </p>

                      {/* Verified Workflow Strip */}
                      {project.workflow && (
                        <div className="mb-5 p-3 rounded-xl bg-zinc-900/90 border border-zinc-800 text-[11px] font-mono text-zinc-400 flex items-start gap-2">
                          <GitCommit size={14} className="text-cyan-400 shrink-0 mt-0.5" />
                          <div>
                            <span className="text-cyan-300 font-semibold block mb-0.5">Verified Pipeline Architecture:</span>
                            <span className="text-zinc-400 leading-relaxed">{project.workflow}</span>
                          </div>
                        </div>
                      )}

                      {/* Tech Stack Badges */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-cyan-950/30 text-cyan-300 border border-cyan-800/40"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Key Features List */}
                      <div className="mb-5 space-y-2">
                        <h4 className="text-xs font-mono text-zinc-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                          <Workflow size={14} className="text-cyan-400" />
                          Actual Implementation Details:
                        </h4>
                        <ul className="space-y-1.5 pl-1">
                          {project.keyFeatures.map((feature, fIdx) => (
                            <li key={fIdx} className="text-xs text-zinc-300 flex items-start gap-2">
                              <span className="text-emerald-400 shrink-0 mt-0.5">✔</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Actual Contribution */}
                      <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800 text-xs text-zinc-300 mb-5">
                        <strong className="text-cyan-300 font-mono block mb-1">My Personal Contribution:</strong>
                        <p className="text-zinc-400 leading-relaxed font-sans">{project.myContribution}</p>
                      </div>

                      {/* Honest Limitations / Scope (if defined) */}
                      {project.limitations && project.limitations.length > 0 && (
                        <div className="p-3.5 rounded-xl bg-amber-950/20 border border-amber-900/40 text-xs text-zinc-300 mb-6 space-y-1.5">
                          <h5 className="text-[11px] font-mono text-amber-400 font-semibold uppercase tracking-wider flex items-center gap-1.5">
                            <AlertCircle size={13} className="text-amber-400" />
                            Honest Architecture Scope &amp; Limitations:
                          </h5>
                          <ul className="space-y-1 pl-1 text-[11px] text-zinc-400">
                            {project.limitations.map((limit, lIdx) => (
                              <li key={lIdx} className="flex items-start gap-1.5">
                                <span className="text-amber-500/80">•</span>
                                <span>{limit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* Action Links */}
                    <div className="pt-4 border-t border-zinc-800/80 flex flex-wrap items-center gap-3">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-zinc-200 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 hover:border-zinc-500 transition-colors shadow-sm"
                        >
                          <Github size={14} />
                          <span>View GitHub Repository</span>
                        </a>
                      )}

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 transition-all shadow-sm"
                        >
                          <span>Live Demo</span>
                          <ArrowUpRight size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
