import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Copy, Check, Info } from 'lucide-react';

interface TerminalTab {
  id: string;
  name: string;
  command: string;
  description: string;
  output: React.ReactNode;
}

export const TerminalHero: React.FC = () => {
  const [activeTab, setActiveTab] = useState('k8s');
  const [copied, setCopied] = useState(false);

  const tabs: TerminalTab[] = [
    {
      id: 'k8s',
      name: 'k8s-workload',
      command: 'kubectl get pods -n hello-devops -o wide',
      description: 'Representative snapshot of the 2-replica deployment across the 2-node K3s homelab.',
      output: (
        <div className="space-y-1.5 font-mono text-xs sm:text-[13px] leading-relaxed">
          <div className="text-zinc-500 font-semibold grid grid-cols-12 gap-1 pb-1 border-b border-zinc-800">
            <span className="col-span-4">NAME</span>
            <span className="col-span-2">READY</span>
            <span className="col-span-2">STATUS</span>
            <span className="col-span-2">IP</span>
            <span className="col-span-2 text-right">NODE</span>
          </div>
          <div className="grid grid-cols-12 gap-1 text-zinc-300">
            <span className="col-span-4 text-cyan-300 truncate">hello-devops-74488-7b2g9</span>
            <span className="col-span-2 text-zinc-400">1/1</span>
            <span className="col-span-2 text-emerald-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              Running
            </span>
            <span className="col-span-2 text-zinc-400">10.42.1.28</span>
            <span className="col-span-2 text-right text-zinc-400">k3s-worker</span>
          </div>
          <div className="grid grid-cols-12 gap-1 text-zinc-300">
            <span className="col-span-4 text-cyan-300 truncate">hello-devops-74488-r9k4x</span>
            <span className="col-span-2 text-zinc-400">1/1</span>
            <span className="col-span-2 text-emerald-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              Running
            </span>
            <span className="col-span-2 text-zinc-400">10.42.0.42</span>
            <span className="col-span-2 text-right text-zinc-400">k3s-master</span>
          </div>

          <div className="pt-2 text-zinc-400 border-t border-zinc-800/60 text-[11px] space-y-0.5">
            <p className="text-zinc-500">Service: NodePort 30080 | Traefik Ingress: http://hello.local</p>
            <p className="text-zinc-500">Deployment Config: 2 fixed replicas (HPA disabled in checked-in Helm values)</p>
          </div>
        </div>
      ),
    },
    {
      id: 'gitops',
      name: 'gitops-argocd',
      command: 'kubectl get application hello-devops -n argocd',
      description: 'Argo CD reconciling the Git desired state from parv166/hello-devops into K3s.',
      output: (
        <div className="space-y-2 font-mono text-xs sm:text-[13px] leading-relaxed">
          <div className="text-zinc-500 font-semibold grid grid-cols-12 gap-1 pb-1 border-b border-zinc-800">
            <span className="col-span-3">NAME</span>
            <span className="col-span-3">SYNC STATUS</span>
            <span className="col-span-3">HEALTH</span>
            <span className="col-span-3 text-right">REVISION</span>
          </div>
          <div className="grid grid-cols-12 gap-1 text-zinc-300">
            <span className="col-span-3 text-cyan-300">hello-devops</span>
            <span className="col-span-3 text-emerald-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              Synced
            </span>
            <span className="col-span-3 text-emerald-400">Healthy</span>
            <span className="col-span-3 text-right text-zinc-400 font-mono">main (3a9f02c)</span>
          </div>

          <div className="p-2 rounded bg-zinc-900/80 border border-zinc-800 text-zinc-300 text-[11px] space-y-1">
            <div className="flex items-center justify-between text-zinc-400">
              <span>Repo URL: https://github.com/parv166/hello-devops</span>
              <span className="text-cyan-400">Path: helm/</span>
            </div>
            <p className="text-zinc-400">GitOps Flow: Argo CD detects Helm values.yaml image SHA update → triggers atomic rolling sync</p>
          </div>
        </div>
      ),
    },
    {
      id: 'cicd',
      name: 'github-actions',
      command: 'gh run list --repo parv166/hello-devops --limit 2',
      description: 'Recent GitHub Actions pipeline executions validating Helm, Docker, and Trivy security gate.',
      output: (
        <div className="space-y-2 font-mono text-xs sm:text-[13px] leading-relaxed">
          <div className="space-y-1">
            <div className="flex items-center justify-between text-zinc-300">
              <span className="text-emerald-400 flex items-center gap-1.5">
                <span>✔</span>
                <span className="text-zinc-200">CI/CD Pipeline &amp; GHCR Publish</span>
              </span>
              <span className="text-zinc-500 text-[11px]">commit 3a9f02c</span>
            </div>
            <div className="pl-4 text-[11px] text-zinc-400 space-y-0.5">
              <p>• Step 1: Helm template validation &amp; lint (helm lint helm/)</p>
              <p>• Step 2: Docker build with container healthcheck (/health)</p>
              <p>• Step 3: Trivy vulnerability scan (<span className="text-amber-400">severity: CRITICAL</span>, ignore-unfixed: true)</p>
              <p>• Step 4: Publish to ghcr.io/parv166/hello-devops (SHA + latest)</p>
              <p>• Step 5: Auto-commit new image SHA to helm/values.yaml</p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const currentTab = tabs.find((t) => t.id === activeTab) || tabs[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentTab.command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-2xl mx-auto rounded-xl overflow-hidden glass-card border border-zinc-800/80 shadow-2xl shadow-cyan-950/20 backdrop-blur-xl">
      {/* Terminal Title Bar */}
      <div className="bg-[#0e121d] px-4 py-3 flex items-center justify-between border-b border-zinc-800/80 select-none">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 mr-3">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block hover:opacity-100 transition-opacity" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block hover:opacity-100 transition-opacity" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block hover:opacity-100 transition-opacity" />
          </div>
          <Terminal size={14} className="text-zinc-500" />
          <span className="text-xs font-mono text-zinc-400 hidden sm:inline">
            k3s-homelab-cli
          </span>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1 bg-zinc-900/80 p-0.5 rounded-lg border border-zinc-800">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-2.5 py-1 rounded-md text-xs font-mono transition-all duration-150 ${
                activeTab === tab.id
                  ? 'bg-zinc-800 text-cyan-300 font-medium shadow-sm'
                  : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={handleCopy}
            title="Copy command"
            className="p-1.5 rounded-md hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 transition-colors"
          >
            {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
          </button>
        </div>
      </div>

      {/* Terminal Content Area */}
      <div className="p-4 sm:p-5 bg-[#090b12]/95 min-h-[220px]">
        {/* Command Line */}
        <div className="flex items-center gap-2 font-mono text-xs sm:text-sm mb-3.5 pb-2.5 border-b border-zinc-800/50">
          <span className="text-emerald-400 font-semibold">parv@homelab:~$</span>
          <span className="text-zinc-200 font-medium">{currentTab.command}</span>
          <span className="w-2 h-4 bg-cyan-400 animate-pulse ml-0.5 inline-block" />
        </div>

        {/* Output */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTab.id}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.18 }}
          >
            {currentTab.output}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Terminal Footer Status Bar with Mandatory Disclaimer */}
      <div className="bg-[#0b0e17] px-4 py-2 border-t border-zinc-800/60 flex flex-col sm:flex-row items-start sm:items-center justify-between text-[11px] font-mono text-zinc-500 gap-1">
        <div className="flex items-center gap-1.5 text-zinc-400">
          <Info size={12} className="text-cyan-400 shrink-0" />
          <span>Illustrative output based on my homelab configuration — not live cluster telemetry.</span>
        </div>
        <div className="flex items-center gap-2 text-zinc-500 shrink-0">
          <span>K3s v1.31</span>
          <span>•</span>
          <span className="text-cyan-400">Argo CD</span>
        </div>
      </div>
    </div>
  );
};
