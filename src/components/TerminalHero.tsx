import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Copy, Check } from 'lucide-react';

interface TerminalTab {
  id: string;
  name: string;
  command: string;
  output: React.ReactNode;
}

export const TerminalHero: React.FC = () => {
  const [activeTab, setActiveTab] = useState('k8s');
  const [copied, setCopied] = useState(false);

  const tabs: TerminalTab[] = [
    {
      id: 'k8s',
      name: 'k8s-cluster.sh',
      command: 'kubectl get pods -n production -o wide',
      output: (
        <div className="space-y-1.5 font-mono text-xs sm:text-[13px] leading-relaxed">
          <div className="text-zinc-500 font-semibold grid grid-cols-12 gap-1 pb-1 border-b border-zinc-800">
            <span className="col-span-4">NAME</span>
            <span className="col-span-2">READY</span>
            <span className="col-span-3">STATUS</span>
            <span className="col-span-3 text-right">RESTARTS</span>
          </div>
          <div className="grid grid-cols-12 gap-1 text-zinc-300">
            <span className="col-span-4 text-cyan-300">cloudvault-api-7b89f-k2l9</span>
            <span className="col-span-2 text-zinc-400">3/3</span>
            <span className="col-span-3 text-emerald-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Running
            </span>
            <span className="col-span-3 text-right text-zinc-400">0 (48d)</span>
          </div>
          <div className="grid grid-cols-12 gap-1 text-zinc-300">
            <span className="col-span-4 text-cyan-300">pulsecheck-mon-4df98-m4p1</span>
            <span className="col-span-2 text-zinc-400">2/2</span>
            <span className="col-span-3 text-emerald-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              Running
            </span>
            <span className="col-span-3 text-right text-zinc-400">0 (14d)</span>
          </div>
          <div className="grid grid-cols-12 gap-1 text-zinc-300">
            <span className="col-span-4 text-cyan-300">ingress-nginx-controller-9x</span>
            <span className="col-span-2 text-zinc-400">1/1</span>
            <span className="col-span-3 text-emerald-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              Running
            </span>
            <span className="col-span-3 text-right text-zinc-400">0 (92d)</span>
          </div>
          <div className="pt-2 text-zinc-500 flex items-center gap-2">
            <span className="text-emerald-400">✔</span>
            <span>Cluster Health: 100% healthy (12 nodes, 0 evictions)</span>
          </div>
        </div>
      ),
    },
    {
      id: 'tf',
      name: 'terraform-plan.tf',
      command: 'terraform plan -out=tfplan.binary',
      output: (
        <div className="space-y-1 font-mono text-xs sm:text-[13px] leading-relaxed text-zinc-300">
          <p className="text-zinc-500">Refreshing Terraform state in AWS eu-west-1...</p>
          <p className="text-zinc-400">aws_s3_bucket.cloudvault: Refreshing state... [id=cloudvault-prod-assets]</p>
          <p className="text-zinc-400">aws_lambda_function.ingest: Refreshing state... [id=ingest-handler]</p>
          <div className="my-2 p-2 rounded bg-cyan-950/20 border border-cyan-800/40 text-cyan-300">
            <span>+ resource &quot;aws_cloudwatch_metric_alarm&quot; &quot;p99_latency&quot; &#123;</span>
            <div className="pl-4 text-zinc-300 text-xs">
              <p>+ metric_name = &quot;TargetResponseTime&quot;</p>
              <p>+ threshold   = 250 /* ms */</p>
              <p>+ actions_enabled = true</p>
            </div>
            <span>&#125;</span>
          </div>
          <p className="text-emerald-400 font-medium">Plan: 1 to add, 0 to change, 0 to destroy.</p>
        </div>
      ),
    },
    {
      id: 'pipeline',
      name: 'ci-cd.yaml',
      command: 'gh workflow run deploy-production.yml',
      output: (
        <div className="space-y-1.5 font-mono text-xs sm:text-[13px] leading-relaxed">
          <div className="flex items-center gap-2 text-zinc-400">
            <span className="text-cyan-400 font-bold">1.</span>
            <span>Lint &amp; Static Security Scan (Trivy / Hadolint)</span>
            <span className="ml-auto text-emerald-400 font-bold">PASSED [12s]</span>
          </div>
          <div className="flex items-center gap-2 text-zinc-400">
            <span className="text-cyan-400 font-bold">2.</span>
            <span>Docker Multi-Stage Build &amp; Image Signing</span>
            <span className="ml-auto text-emerald-400 font-bold">PASSED [44s]</span>
          </div>
          <div className="flex items-center gap-2 text-zinc-400">
            <span className="text-cyan-400 font-bold">3.</span>
            <span>Terraform Spec Verification</span>
            <span className="ml-auto text-emerald-400 font-bold">PASSED [8s]</span>
          </div>
          <div className="flex items-center gap-2 text-zinc-400">
            <span className="text-cyan-400 font-bold">4.</span>
            <span>Canary Rollout to K8s Namespace</span>
            <span className="ml-auto text-emerald-400 font-bold">DEPLOYED [21s]</span>
          </div>
          <div className="pt-2 text-emerald-400 font-semibold flex items-center gap-2 border-t border-zinc-800/80">
            <span>✔</span>
            <span>Workflow completed successfully with 0 warnings.</span>
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
            cloud-control-plane
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
          <span className="text-emerald-400 font-semibold">devops@cloud:~$</span>
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

      {/* Terminal Footer Status Bar */}
      <div className="bg-[#0b0e17] px-4 py-2 border-t border-zinc-800/60 flex items-center justify-between text-[11px] font-mono text-zinc-500">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            status: synchronized
          </span>
          <span className="hidden sm:inline">env: production</span>
        </div>
        <div className="flex items-center gap-3 text-zinc-400">
          <span>AWS / K8s / IaC</span>
          <span className="text-cyan-400">UTF-8</span>
        </div>
      </div>
    </div>
  );
};
