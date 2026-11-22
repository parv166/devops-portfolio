import React from 'react';
import {
  siAmazonaws,
  siMicrosoftazure,
  siDocker,
  siKalilinux,
  siUbuntu,
  siGnubash,
  siPython,
  siGit,
  siGithub,
  siTerraform,
  siJenkins,
  siKubernetes,
  siHelm,
  siArgo,
  siTrivy,
  siLinux,
  siTraefikproxy,
  type SimpleIcon,
} from 'simple-icons';
import {
  Network,
  Shield,
  Layers,
  Activity,
  Server,
  Lock,
  Globe,
  Radio,
  GitBranch,
  Cpu,
  Boxes,
  Database,
  KeyRound,
  Cloud,
} from 'lucide-react';

interface TechIconProps {
  name: string;
  className?: string;
  size?: number;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, className = '', size = 28 }) => {
  const normalized = name.toLowerCase().replace(/[^a-z0-9]/g, '');

  const renderSimpleIcon = (icon: SimpleIcon, color?: string, label?: string) => (
    <svg
      role="img"
      aria-label={label || icon.title}
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={color || `#${icon.hex}`}
      className={`${className} shrink-0`}
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <path d={icon.path} />
    </svg>
  );

  switch (normalized) {
    // 1. Cloud & AWS
    case 'aws':
    case 'amazonaws':
      // Official AWS brand orange for dark UI contrast
      return renderSimpleIcon(siAmazonaws, '#FF9900', 'Amazon Web Services');

    case 'azure':
    case 'microsoftazure':
    case 'azurefundamentals':
      // Official Microsoft Azure Blue
      return renderSimpleIcon(siMicrosoftazure, '#0078D4', 'Microsoft Azure');

    case 'cognito':
    case 'amazoncognito':
      return <Lock className={`${className} text-amber-400 shrink-0`} size={size} strokeWidth={1.75} style={{ width: `${size}px`, height: `${size}px` }} />;

    case 's3':
    case 'amazons3':
    case 'dynamodb':
    case 'amazondynamodb':
      return <Database className={`${className} text-amber-400 shrink-0`} size={size} strokeWidth={1.75} style={{ width: `${size}px`, height: `${size}px` }} />;

    case 'lambda':
    case 'awslambda':
      return <Cpu className={`${className} text-orange-400 shrink-0`} size={size} strokeWidth={1.75} style={{ width: `${size}px`, height: `${size}px` }} />;

    case 'apigateway':
    case 'amazonapigateway':
      return <Network className={`${className} text-rose-400 shrink-0`} size={size} strokeWidth={1.75} style={{ width: `${size}px`, height: `${size}px` }} />;

    case 'cloudfront':
    case 'amazoncloudfront':
      return <Globe className={`${className} text-violet-400 shrink-0`} size={size} strokeWidth={1.75} style={{ width: `${size}px`, height: `${size}px` }} />;

    case 'ecr':
    case 'amazonecr':
      return <Boxes className={`${className} text-orange-400 shrink-0`} size={size} strokeWidth={1.75} style={{ width: `${size}px`, height: `${size}px` }} />;

    // 2. Containerization
    case 'docker':
      return renderSimpleIcon(siDocker, '#2496ED', 'Docker');

    case 'dockercompose':
    case 'compose':
      return (
        <svg
          role="img"
          aria-label="Docker Compose"
          viewBox="0 0 24 24"
          width={size}
          height={size}
          fill="none"
          stroke="#2496ED"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`${className} shrink-0`}
          style={{ width: `${size}px`, height: `${size}px` }}
        >
          <rect x="3" y="3" width="18" height="5" rx="1.5" fill="#2496ED" fillOpacity="0.25" />
          <rect x="3" y="9.5" width="18" height="5" rx="1.5" fill="#2496ED" fillOpacity="0.4" />
          <rect x="3" y="16" width="18" height="5" rx="1.5" fill="#2496ED" fillOpacity="0.65" />
          <circle cx="6.5" cy="5.5" r="0.75" fill="#FFF" />
          <circle cx="9.5" cy="5.5" r="0.75" fill="#FFF" />
          <circle cx="6.5" cy="12" r="0.75" fill="#FFF" />
          <circle cx="9.5" cy="12" r="0.75" fill="#FFF" />
          <circle cx="6.5" cy="18.5" r="0.75" fill="#FFF" />
          <circle cx="9.5" cy="18.5" r="0.75" fill="#FFF" />
        </svg>
      );

    case 'kubernetes':
    case 'k8s':
      return renderSimpleIcon(siKubernetes, '#326CE5', 'Kubernetes');

    case 'k3s':
      return (
        <div
          className={`${className} bg-amber-500/15 text-amber-300 font-bold flex items-center justify-center rounded-lg border border-amber-500/40 font-mono text-[11px] shrink-0`}
          style={{ width: `${size}px`, height: `${size}px` }}
        >
          K3s
        </div>
      );

    case 'helm':
      return renderSimpleIcon(siHelm, '#326CE5', 'Helm');

    case 'traefik':
      return renderSimpleIcon(siTraefikproxy, '#24A1C1', 'Traefik');

    case 'containernetworking':
    case 'network':
    case 'networking':
    case 'tcpip':
      return <Network className={`${className} text-cyan-400 shrink-0`} size={size} strokeWidth={1.8} style={{ width: `${size}px`, height: `${size}px` }} />;

    case 'containerimagemanagement':
    case 'dockerimagebuild':
    case 'dockerbuild':
      return <Boxes className={`${className} text-sky-400 shrink-0`} size={size} strokeWidth={1.75} style={{ width: `${size}px`, height: `${size}px` }} />;

    // 3. CI/CD & GitOps
    case 'githubactions':
      return (
        <svg
          role="img"
          aria-label="GitHub Actions"
          viewBox="0 0 24 24"
          width={size}
          height={size}
          fill="none"
          className={`${className} shrink-0`}
          style={{ width: `${size}px`, height: `${size}px` }}
        >
          <circle cx="12" cy="12" r="9.5" stroke="#2088FF" strokeWidth="1.8" />
          <path d="M7.5 12.5L10.5 15.5L16.5 9.5" stroke="#2088FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case 'jenkins':
      return renderSimpleIcon(siJenkins, '#D24939', 'Jenkins');

    case 'buildautomation':
      return <Layers className={`${className} text-cyan-400 shrink-0`} size={size} strokeWidth={1.75} style={{ width: `${size}px`, height: `${size}px` }} />;

    case 'sshdeployment':
    case 'ssh':
      return (
        <svg
          role="img"
          aria-label="SSH"
          viewBox="0 0 24 24"
          width={size}
          height={size}
          fill="none"
          stroke="#38BDF8"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`${className} shrink-0`}
          style={{ width: `${size}px`, height: `${size}px` }}
        >
          <rect x="2.5" y="3.5" width="19" height="17" rx="3" stroke="#38BDF8" strokeWidth="1.5" />
          <line x1="2.5" y1="8.5" x2="21.5" y2="8.5" stroke="#38BDF8" strokeWidth="1.2" opacity="0.5" />
          <path d="M5.5 13l2 2-2 2" stroke="#38BDF8" strokeWidth="1.8" />
          <circle cx="15.5" cy="13.5" r="2.2" stroke="#34D399" strokeWidth="1.6" />
          <path d="M15.5 15.7v3m0 -1.4h1.8" stroke="#34D399" strokeWidth="1.6" />
        </svg>
      );

    case 'argocd':
    case 'argo':
      return renderSimpleIcon(siArgo, '#EF7B4D', 'Argo CD');

    case 'trivy':
      return renderSimpleIcon(siTrivy, '#38BDF8', 'Trivy');

    // 4. Operating Systems
    case 'ubuntu':
      return renderSimpleIcon(siUbuntu, '#E95420', 'Ubuntu');

    case 'kalilinux':
    case 'kali':
      return renderSimpleIcon(siKalilinux, '#557C94', 'Kali Linux');

    case 'linux':
      return renderSimpleIcon(siLinux, '#FCC624', 'Linux');

    case 'processmanagement':
      return <Activity className={`${className} text-emerald-400 shrink-0`} size={size} strokeWidth={1.8} style={{ width: `${size}px`, height: `${size}px` }} />;

    case 'portmanagement':
      return <Server className={`${className} text-cyan-400 shrink-0`} size={size} strokeWidth={1.8} style={{ width: `${size}px`, height: `${size}px` }} />;

    // 5. Networking
    case 'dns':
      return <Globe className={`${className} text-cyan-400 shrink-0`} size={size} strokeWidth={1.8} style={{ width: `${size}px`, height: `${size}px` }} />;

    case 'http':
    case 'https':
    case 'httphttps':
      return <Globe className={`${className} text-emerald-400 shrink-0`} size={size} strokeWidth={1.8} style={{ width: `${size}px`, height: `${size}px` }} />;

    case 'vpc':
      return <Cloud className={`${className} text-sky-400 shrink-0`} size={size} strokeWidth={1.8} style={{ width: `${size}px`, height: `${size}px` }} />;

    case 'securitygroups':
      return <Shield className={`${className} text-emerald-400 shrink-0`} size={size} strokeWidth={1.8} style={{ width: `${size}px`, height: `${size}px` }} />;

    case 'portscanning':
      return <Radio className={`${className} text-rose-400 shrink-0`} size={size} strokeWidth={1.8} style={{ width: `${size}px`, height: `${size}px` }} />;

    // 6. Scripting Languages
    case 'python':
      return renderSimpleIcon(siPython, '#3776AB', 'Python');

    case 'bash':
      return renderSimpleIcon(siGnubash, '#4EAA25', 'Bash');

    // 7. Version Control
    case 'git':
      return renderSimpleIcon(siGit, '#F05032', 'Git');

    case 'github':
      return renderSimpleIcon(siGithub, '#FFFFFF', 'GitHub');

    case 'branchingstrategies':
      return <GitBranch className={`${className} text-orange-400 shrink-0`} size={size} strokeWidth={1.8} style={{ width: `${size}px`, height: `${size}px` }} />;

    // 8. Infrastructure as Code
    case 'terraform':
      return renderSimpleIcon(siTerraform, '#844FBA', 'Terraform');

    // 9. Security
    case 'iam':
    case 'iamfundamentals':
      return <KeyRound className={`${className} text-amber-400 shrink-0`} size={size} strokeWidth={1.8} style={{ width: `${size}px`, height: `${size}px` }} />;

    case 'cicdsecretsmanagement':
    case 'secretsmanagement':
      return <Lock className={`${className} text-emerald-400 shrink-0`} size={size} strokeWidth={1.8} style={{ width: `${size}px`, height: `${size}px` }} />;

    case 'containersecurity':
      return <Shield className={`${className} text-rose-400 shrink-0`} size={size} strokeWidth={1.8} style={{ width: `${size}px`, height: `${size}px` }} />;

    // Additional Web & Language tags if needed
    case 'javascript':
    case 'js':
      return (
        <div
          className={`${className} bg-amber-400 text-black font-bold text-[11px] flex items-center justify-center rounded-lg font-mono shrink-0`}
          style={{ width: `${size}px`, height: `${size}px` }}
        >
          JS
        </div>
      );

    case 'typescript':
    case 'ts':
      return (
        <div
          className={`${className} bg-blue-600 text-white font-bold text-[11px] flex items-center justify-center rounded-lg font-mono shrink-0`}
          style={{ width: `${size}px`, height: `${size}px` }}
        >
          TS
        </div>
      );

    default:
      return <Cpu className={`${className} text-cyan-400 shrink-0`} size={size} strokeWidth={1.8} style={{ width: `${size}px`, height: `${size}px` }} />;
  }
};
