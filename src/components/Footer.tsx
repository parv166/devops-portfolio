import React from 'react';
import { Terminal, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { personal, socialLinks, certifications } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-zinc-800/80 bg-[#06070a] relative overflow-hidden">
      {/* Subtle top ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-cyan-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-zinc-900">
          {/* Logo & Identity */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-cyan-400">
              <Terminal size={16} />
            </div>
            <div>
              <p className="font-bold text-sm text-white">{personal.name}</p>
              <p className="text-xs text-zinc-500 font-mono">{personal.headline}</p>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400">
            <a href="#home" className="hover:text-cyan-300 transition-colors">Home</a>
            <a href="#about" className="hover:text-cyan-300 transition-colors">About</a>
            <a href="#skills" className="hover:text-cyan-300 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-cyan-300 transition-colors">Projects</a>
            <a href="#education" className="hover:text-cyan-300 transition-colors">Education</a>
            {certifications && certifications.length > 0 && (
              <a href="#certifications" className="hover:text-cyan-300 transition-colors">Certifications</a>
            )}
            <a href="#contact" className="hover:text-cyan-300 transition-colors">Contact</a>
          </div>

          {/* Social Icons & Back to top */}
          <div className="flex items-center gap-3">
            {socialLinks.github && (
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="p-2 rounded-lg bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
              >
                <Github size={16} />
              </a>
            )}
            {socialLinks.linkedin && (
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2 rounded-lg bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
              >
                <Linkedin size={16} />
              </a>
            )}
            {socialLinks.email && (
              <a
                href={`mailto:${socialLinks.email}`}
                aria-label="Direct Email"
                className="p-2 rounded-lg bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
              >
                <Mail size={16} />
              </a>
            )}
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2 rounded-lg bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-cyan-300 hover:border-cyan-500/30 transition-colors ml-2"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-mono">
          <p>© {currentYear} {personal.name}. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span>DevOps &amp; Cloud Engineering</span>
            <span>•</span>
            <span className="text-zinc-400">Kubernetes • GitOps • Serverless</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
