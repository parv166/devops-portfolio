import React from 'react';
import { 
  Terminal, 
  Cpu,
  Shield
} from 'lucide-react';

interface TechIconProps {
  name: string;
  className?: string;
  size?: number;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, className = "w-5 h-5", size = 20 }) => {
  const normalized = name.toLowerCase().replace(/[^a-z0-9]/g, '');

  switch (normalized) {
    case 'aws':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
          <path d="M18.5 13.8C17.5 14.8 15.5 15.8 12.8 15.8C8.8 15.8 5.6 13.5 4 10.7C3.7 10.2 4.2 9.6 4.7 9.9C7.2 11.4 9.9 12.3 12.8 12.3C14.7 12.3 16.7 11.8 18.2 11C18.8 10.7 19.3 11.3 18.9 11.8C18.8 12 18.7 12.2 18.5 12.4" stroke="#FF9900" strokeWidth="2" strokeLinecap="round"/>
          <path d="M19.2 13.8L21 12.2M19.2 13.8L18.8 11.5" stroke="#FF9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 6.5L8.5 11M8.5 11L10 6.5M8.5 11V14" stroke="#FF9900" strokeWidth="1.8" strokeLinecap="round"/>
        </svg>
      );

    case 'azure':
    case 'microsoftazure':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path fill="#0089D6" d="M13.05 4.24l-5.6 10.42 4.97 4.73 7.82-14.07a.64.64 0 00-.57-.93h-6.07a.65.65 0 00-.55.35v.01z" />
          <path fill="#0072C6" d="M4.22 18.17a.66.66 0 00.58.44h8.34l-3.23-5.26-5.69 4.82z" />
        </svg>
      );

    case 'docker':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
          <rect x="5" y="10" width="2" height="2" fill="#0db7ed" rx="0.5"/>
          <rect x="8" y="10" width="2" height="2" fill="#0db7ed" rx="0.5"/>
          <rect x="11" y="10" width="2" height="2" fill="#0db7ed" rx="0.5"/>
          <rect x="8" y="7" width="2" height="2" fill="#0db7ed" rx="0.5"/>
          <rect x="11" y="7" width="2" height="2" fill="#0db7ed" rx="0.5"/>
          <rect x="14" y="10" width="2" height="2" fill="#0db7ed" rx="0.5"/>
          <path d="M22 11.5C21.8 11.5 21.6 11.5 21.5 11.6C21.1 10.6 20.2 9.8 19 9.8C18.9 9.8 18.7 9.8 18.6 9.8C18.1 9 17.2 8.5 16.2 8.5V11H3.5C2.7 11 2 11.7 2 12.5C2 16.5 5 19 10 19C15.8 19 19.5 16.2 20.8 13.2C21.8 13.1 22.5 12.4 22 11.5Z" stroke="#0db7ed" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );

    case 'kubernetes':
    case 'k8s':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
          <path d="M12 2L3.5 7V17L12 22L20.5 17V7L12 2Z" stroke="#326CE5" strokeWidth="1.8" strokeLinejoin="round"/>
          <circle cx="12" cy="12" r="3" stroke="#326CE5" strokeWidth="1.5"/>
          <line x1="12" y1="5" x2="12" y2="9" stroke="#326CE5" strokeWidth="1.5"/>
          <line x1="12" y1="15" x2="12" y2="19" stroke="#326CE5" strokeWidth="1.5"/>
          <line x1="6" y1="8.5" x2="9.5" y2="10.5" stroke="#326CE5" strokeWidth="1.5"/>
          <line x1="14.5" y1="13.5" x2="18" y2="15.5" stroke="#326CE5" strokeWidth="1.5"/>
          <line x1="6" y1="15.5" x2="9.5" y2="13.5" stroke="#326CE5" strokeWidth="1.5"/>
          <line x1="14.5" y1="10.5" x2="18" y2="8.5" stroke="#326CE5" strokeWidth="1.5"/>
        </svg>
      );

    case 'k3s':
      return (
        <div className={`${className} bg-amber-500/20 text-amber-300 font-bold text-[10px] flex items-center justify-center rounded border border-amber-500/40 font-mono`} style={{ width: size, height: size }}>
          K3s
        </div>
      );

    case 'helm':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" stroke="#0F1689" strokeWidth="2"/>
          <path d="M12 6L15 12L12 18L9 12Z" stroke="#0F1689" strokeWidth="1.5" fill="#326CE5"/>
        </svg>
      );

    case 'traefik':
      return (
        <div className={`${className} bg-cyan-500/20 text-cyan-300 font-bold text-[10px] flex items-center justify-center rounded border border-cyan-500/40 font-mono`} style={{ width: size, height: size }}>
          Trf
        </div>
      );

    case 'terraform':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path fill="#844FBA" d="M1.5 2.5l7 4.04v8.08l-7-4.04V2.5zm7.8 4.5l7-4.04v8.08l-7 4.04V7zm7-4.04l6.2 3.58v8.08l-6.2-3.58V3.46zM9.3 15.62l7-4.04v8.08l-7 4.04v-8.08z" />
        </svg>
      );

    case 'jenkins':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" stroke="#D33833" strokeWidth="1.8"/>
          <path d="M8 12C8 9.8 9.8 8 12 8C14.2 8 16 9.8 16 12C16 14.2 14.2 16 12 16" stroke="#D33833" strokeWidth="1.5"/>
          <circle cx="12" cy="12" r="1.5" fill="#D33833"/>
        </svg>
      );

    case 'githubactions':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" stroke="#2088FF" strokeWidth="1.8"/>
          <path d="M8 12L11 15L16 9" stroke="#2088FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );

    case 'argocd':
      return (
        <div className={`${className} bg-orange-500/20 text-orange-400 font-bold text-[10px] flex items-center justify-center rounded border border-orange-500/40 font-mono`} style={{ width: size, height: size }}>
          Argo
        </div>
      );

    case 'trivy':
      return <Shield className={`${className} text-rose-400`} size={size} />;

    case 'linux':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path fill="#FCC624" d="M12 2C9.5 2 8 4 8 6.5v4C8 12.5 7 14 5 15.5c-1 0.7-1 2 0.5 2.5 3 1 6 1 6.5 2 0.5-1 3.5-1 6.5-2 1.5-0.5 1.5-1.8 0.5-2.5-2-1.5-3-3-3-5V6.5C16 4 14.5 2 12 2z"/>
          <circle cx="10" cy="6" r="1" fill="#000"/>
          <circle cx="14" cy="6" r="1" fill="#000"/>
          <ellipse cx="12" cy="8.5" rx="1.5" ry="1" fill="#FFA500"/>
        </svg>
      );

    case 'ubuntu':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" stroke="#E95420" strokeWidth="1.8"/>
          <circle cx="12" cy="4" r="2" fill="#E95420"/>
          <circle cx="5" cy="16" r="2" fill="#E95420"/>
          <circle cx="19" cy="16" r="2" fill="#E95420"/>
        </svg>
      );

    case 'python':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
          <path d="M11.9 2C8.5 2 8.7 3.5 8.7 3.5V5H12V5.5H5.8C5.8 5.5 2 5.1 2 9.5C2 13.9 5.3 13.7 5.3 13.7H7.3V12.2C7.3 10.5 8.8 10.5 8.8 10.5H12C13.5 10.5 13.5 9 13.5 9V3.5C13.5 3.5 13.8 2 11.9 2Z" fill="#3776AB"/>
          <circle cx="7" cy="4" r="0.8" fill="#FFF"/>
          <path d="M12.1 22C15.5 22 15.3 20.5 15.3 20.5V19H12V18.5H18.2C18.2 18.5 22 18.9 22 14.5C22 10.1 18.7 10.3 18.7 10.3H16.7V11.8C16.7 13.5 15.2 13.5 15.2 13.5H12C10.5 13.5 10.5 15 10.5 15V20.5C10.5 20.5 10.2 22 12.1 22Z" fill="#FFD43B"/>
          <circle cx="17" cy="20" r="0.8" fill="#FFF"/>
        </svg>
      );

    case 'bash':
      return <Terminal className={`${className} text-emerald-400`} size={size} />;

    case 'javascript':
    case 'js':
      return (
        <div className={`${className} bg-amber-400 text-black font-bold text-[10px] flex items-center justify-center rounded font-mono`} style={{ width: size, height: size }}>
          JS
        </div>
      );

    case 'typescript':
    case 'ts':
      return (
        <div className={`${className} bg-blue-600 text-white font-bold text-[10px] flex items-center justify-center rounded font-mono`} style={{ width: size, height: size }}>
          TS
        </div>
      );

    case 'git':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
          <rect x="2" y="2" width="20" height="20" rx="4" transform="rotate(45 12 12)" stroke="#F05032" strokeWidth="1.6"/>
          <circle cx="12" cy="8" r="1.8" fill="#F05032"/>
          <circle cx="12" cy="16" r="1.8" fill="#F05032"/>
          <circle cx="16" cy="12" r="1.8" fill="#F05032"/>
          <line x1="12" y1="8" x2="12" y2="16" stroke="#F05032" strokeWidth="1.5"/>
          <path d="M12 12L16 12" stroke="#F05032" strokeWidth="1.5"/>
        </svg>
      );

    case 'github':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      );

    default:
      return <Cpu className={`${className} text-cyan-400`} size={size} />;
  }
};
