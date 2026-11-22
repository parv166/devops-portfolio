import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileDown, Github, Linkedin, Server, Cloud, ShieldCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import { TerminalHero } from '../components/TerminalHero';

export const HeroSection: React.FC = () => {
  const { personal, socialLinks, resume } = portfolioData;

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial glows and grid */}
      <div className="absolute inset-0 bg-grid opacity-25 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-600/10 via-violet-600/10 to-transparent blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            {/* Availability Indicator */}
            {personal.status.available && (
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-6 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>{personal.status.label}</span>
              </div>
            )}

            {/* Main Name & Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-4 leading-[1.1]">
              Hi, I&apos;m{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400">
                {personal.name}
              </span>
            </h1>

            <p className="text-lg sm:text-xl font-semibold text-zinc-300 mb-4 font-mono tracking-tight flex items-center justify-center lg:justify-start gap-2">
              <span className="text-cyan-400">&gt;</span>
              <span>{personal.headline}</span>
            </p>

            <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              {personal.shortBio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 mb-10">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 transition-all shadow-lg shadow-cyan-950/50 hover:shadow-cyan-900/60 hover:-translate-y-0.5"
              >
                <span>View Projects</span>
                <ArrowRight size={16} />
              </a>

              {resume.available && resume.fileUrl && (
                <a
                  href={resume.fileUrl}
                  download={resume.fileName}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-zinc-300 bg-[#121624] hover:bg-zinc-800 border border-zinc-700/80 hover:border-cyan-500/50 hover:text-cyan-300 transition-all shadow-md hover:-translate-y-0.5"
                >
                  <FileDown size={16} className="text-cyan-400" />
                  <span>Download Resume</span>
                </a>
              )}

              {/* Social Link Quick Badges */}
              <div className="flex items-center gap-2 pl-1">
                {socialLinks.github && (
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub Profile"
                    className="p-3 rounded-xl bg-zinc-900/90 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600 hover:-translate-y-0.5 transition-all shadow-sm"
                  >
                    <Github size={18} />
                  </a>
                )}
                {socialLinks.linkedin && (
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn Profile"
                    className="p-3 rounded-xl bg-zinc-900/90 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600 hover:-translate-y-0.5 transition-all shadow-sm"
                  >
                    <Linkedin size={18} />
                  </a>
                )}
              </div>
            </div>

            {/* Quick Metrics / Cloud Highlights */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-zinc-800/80 max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-2 text-left">
                <Cloud size={16} className="text-cyan-400 shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-white">AWS &amp; Azure</p>
                  <p className="text-[11px] text-zinc-500 font-mono">Cloud Native</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-left">
                <Server size={16} className="text-blue-400 shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-white">K8s &amp; Docker</p>
                  <p className="text-[11px] text-zinc-500 font-mono">Containers</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-left">
                <ShieldCheck size={16} className="text-emerald-400 shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-white">Terraform</p>
                  <p className="text-[11px] text-zinc-500 font-mono">IaC Pipelines</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Terminal Interactive Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <TerminalHero />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
