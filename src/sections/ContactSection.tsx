import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Linkedin, 
  Github, 
  Copy, 
  Check, 
  Send, 
  MessageSquare, 
  MapPin, 
  Info 
} from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import { SectionHeading } from '../components/SectionHeading';

export const ContactSection: React.FC = () => {
  const { contact, socialLinks } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    senderEmail: '',
    subject: '',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build mailto link so no backend or database is needed
    const subjectLine = encodeURIComponent(
      formData.subject || `DevOps Inquiry from ${formData.name || 'Portfolio Visitor'}`
    );
    const bodyContent = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.senderEmail}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${contact.email}?subject=${subjectLine}&body=${bodyContent}`;
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-600/5 blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Direct Outreach"
          title="Get In Touch"
          subtitle="Looking for an aspiring DevOps &amp; Cloud Engineer? Reach out directly via email to discuss infrastructure, homelab experiments, or job opportunities."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
          {/* Left Column: Direct Contact Info & Channels */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-6"
          >
            <div className="glass-card rounded-2xl p-6 sm:p-7 space-y-6">
              <h3 className="text-xl font-bold text-white mb-2">
                Let&apos;s talk infrastructure
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {contact.availabilityNote}
              </p>

              {/* Email direct box */}
              <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-2">
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider block">
                  Direct Email
                </span>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-mono text-cyan-300 truncate">
                    {contact.email}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    title="Copy Email"
                    className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors shrink-0"
                  >
                    {copied ? (
                      <Check size={16} className="text-emerald-400" />
                    ) : (
                      <Copy size={16} />
                    )}
                  </button>
                </div>
                {copied && (
                  <p className="text-[11px] font-mono text-emerald-400">
                    ✔ Email address copied to clipboard!
                  </p>
                )}
              </div>

              {/* Location */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-2.5 text-xs text-zinc-400 font-mono">
                  <MapPin size={15} className="text-cyan-400 shrink-0" />
                  <span>{contact.location}</span>
                </div>
              </div>

              {/* Verified Social Channels */}
              <div className="pt-4 border-t border-zinc-800/80 flex items-center gap-3">
                {socialLinks.github && (
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-2.5 px-3 rounded-xl bg-zinc-900/90 border border-zinc-800 hover:border-zinc-700 hover:text-white text-zinc-300 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                  >
                    <Github size={16} />
                    <span>GitHub Profile</span>
                  </a>
                )}
                {socialLinks.linkedin && (
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-2.5 px-3 rounded-xl bg-zinc-900/90 border border-zinc-800 hover:border-cyan-500/40 hover:text-cyan-300 text-zinc-300 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                  >
                    <Linkedin size={16} />
                    <span>LinkedIn</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Direct Compose Message Form (Works 100% Client-Side via mailto) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="glass-card rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-2 text-zinc-300 text-sm font-semibold">
                <MessageSquare size={16} className="text-cyan-400" />
                <span>Send a Direct Message</span>
              </div>
              <p className="text-xs text-zinc-400 mb-6 flex items-start gap-1.5 font-mono">
                <Info size={13} className="text-cyan-400 shrink-0 mt-0.5" />
                <span>Submitting opens your default email client with your message pre-drafted via a mailto: link. No backend server or database is involved.</span>
              </p>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Recruiter / Engineering Manager"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900/90 border border-zinc-800 focus:border-cyan-500/80 focus:ring-1 focus:ring-cyan-500/80 text-sm text-white placeholder-zinc-600 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@company.com"
                      value={formData.senderEmail}
                      onChange={(e) => setFormData({ ...formData, senderEmail: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900/90 border border-zinc-800 focus:border-cyan-500/80 focus:ring-1 focus:ring-cyan-500/80 text-sm text-white placeholder-zinc-600 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                    Subject / Discussion Topic
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="DevOps Opportunity / Homelab Discussion"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900/90 border border-zinc-800 focus:border-cyan-500/80 focus:ring-1 focus:ring-cyan-500/80 text-sm text-white placeholder-zinc-600 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Hi Parv, I reviewed your K3s homelab and CloudVault projects..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900/90 border border-zinc-800 focus:border-cyan-500/80 focus:ring-1 focus:ring-cyan-500/80 text-sm text-white placeholder-zinc-600 outline-none transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 transition-all shadow-lg shadow-cyan-950/40 flex items-center justify-center gap-2 group"
                >
                  <Send size={16} className="group-hover:translate-x-0.5 transition-transform" />
                  <span>Open in Default Email Client</span>
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
