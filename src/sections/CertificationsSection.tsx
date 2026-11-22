import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import { SectionHeading } from '../components/SectionHeading';

export const CertificationsSection: React.FC = () => {
  const { certifications } = portfolioData;

  if (!certifications || certifications.length === 0) {
    return null;
  }

  return (
    <section id="certifications" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Verified Credentials"
          title="Certifications &amp; Milestones"
          subtitle="Cloud credentials, specialized certifications, and active learning roadmap milestones."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, idx) => {
            const isCompleted = cert.status === 'Active';
            const isInProgress = cert.status === 'In Progress';

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass-card glass-card-hover rounded-2xl p-6 sm:p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-cyan-400">
                      <ShieldCheck size={24} />
                    </div>

                    <span
                      className={`px-2.5 py-1 rounded-full text-xs font-mono font-medium flex items-center gap-1.5 ${
                        isCompleted
                          ? 'bg-emerald-500/15 border border-emerald-500/30 text-emerald-300'
                          : isInProgress
                          ? 'bg-cyan-500/15 border border-cyan-500/30 text-cyan-300'
                          : 'bg-zinc-850 border border-zinc-700 text-zinc-400'
                      }`}
                    >
                      {isCompleted ? (
                        <>
                          <CheckCircle2 size={12} className="text-emerald-400" />
                          <span>Active</span>
                        </>
                      ) : isInProgress ? (
                        <>
                          <Clock size={12} className="text-cyan-400 animate-spin" />
                          <span>In Progress</span>
                        </>
                      ) : (
                        <span>Planned</span>
                      )}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white mb-1">
                    {cert.name}
                  </h3>
                  <p className="text-xs font-medium text-cyan-400 font-mono mb-2">
                    {cert.issuer}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400 font-mono">
                  <span>Target/Date: {cert.issueDate}</span>
                  {cert.credentialUrl ? (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-cyan-300 hover:text-cyan-200 underline underline-offset-4"
                    >
                      <span>Verify</span>
                      <ExternalLink size={12} />
                    </a>
                  ) : (
                    <span className="text-zinc-600">Verification Pending</span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
