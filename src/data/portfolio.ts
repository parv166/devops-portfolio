import { PortfolioData } from '../types/portfolio';

/**
 * =========================================================================
 * CENTRALIZED PORTFOLIO DATA (Single Source of Truth)
 * =========================================================================
 * Update your personal information, links, projects, skills, education,
 * and resume settings here. All UI components consume this file directly.
 * =========================================================================
 */
export const portfolioData: PortfolioData = {
  // 1. Personal & Hero Information
  personal: {
    name: "[YOUR NAME]",
    headline: "Aspiring DevOps & Cloud Engineer",
    subheadline: "Passionate about cloud infrastructure, container orchestration, CI/CD automation, and site reliability engineering.",
    shortBio: "Bridging the gap between software development and cloud operations. Dedicated to architecting reproducible, secure, and observable infrastructure with modern DevOps practices.",
    location: "India / Open to Global Remote",
    status: {
      available: true,
      label: "Open to Junior DevOps, Cloud Engineer Roles & Internships",
    },
    terminalGreeting: "devops-engineer@cloud-workstation:~$ ./welcome.sh --mode=production",
  },

  // 2. About Me Section
  about: {
    introduction: "I am an aspiring DevOps and Cloud Engineer with a strong foundational focus on distributed systems, infrastructure as code, and cloud automation. I enjoy untangling complex build and deployment pipelines, configuring containerized microservices, and monitoring production health metrics.",
    educationalBackground: "Currently pursuing my degree in Computer Science / Information Technology, building a disciplined foundation in operating systems, computer networking, and system design.",
    careerInterests: "Targeting roles in Cloud Engineering, DevOps, Platform Engineering, and Site Reliability Engineering (SRE). Excited to collaborate on real-world infrastructure scaling and automated release cycles.",
    technicalInterests: [
      "Infrastructure as Code (Terraform, CloudFormation)",
      "Container Orchestration (Kubernetes, Docker)",
      "Cloud Architectures (AWS, Azure)",
      "Continuous Integration & Continuous Deployment (GitHub Actions, Jenkins)",
      "Observability & Golden Signals Monitoring (Prometheus, Grafana)",
      "Linux Systems Administration & Shell Automation",
    ],
    professionalGoals: "To architect zero-downtime deployment pipelines, automate repetitive operational toil, and build resilient, cost-effective cloud infrastructures adhering to least-privilege security standards.",
    keyHighlights: [
      {
        label: "Systems Mindset",
        description: "Focusing on automation, reproducibility, and declarative configurations rather than manual server management.",
      },
      {
        label: "Cloud Native",
        description: "Hands-on experience configuring containerized services, ingress controllers, and cloud-hosted workloads.",
      },
      {
        label: "Security First",
        description: "Committed to least-privilege IAM scoping, secrets management, and automated security scans in CI.",
      },
      {
        label: "Observability Driven",
        description: "Believing that software cannot be maintained reliably without proactive metrics, logging, and alerting.",
      },
    ],
  },

  // 3. Social & Professional Links
  socialLinks: {
    github: "https://github.com/your-username",
    linkedin: "https://linkedin.com/in/your-profile",
    email: "your.email@example.com",
    twitter: "https://x.com/your-handle",
  },

  // 4. Technical Skills
  // Note: No fake percentages or claimed expert levels. Grouped cleanly by domain.
  skills: [
    // Cloud
    { name: "AWS", category: "Cloud", iconKey: "aws", tag: "EC2, S3, IAM, Lambda, VPC", featured: true },
    { name: "Microsoft Azure", category: "Cloud", iconKey: "azure", tag: "Virtual Machines, Blob, Entra ID", featured: true },

    // DevOps
    { name: "Docker", category: "DevOps", iconKey: "docker", tag: "Containerization, Multi-stage Builds", featured: true },
    { name: "Kubernetes", category: "DevOps", iconKey: "kubernetes", tag: "Deployments, Services, ConfigMaps", featured: true },
    { name: "Jenkins", category: "DevOps", iconKey: "jenkins", tag: "Declarative Pipelines, Automation", featured: false },
    { name: "GitHub Actions", category: "DevOps", iconKey: "githubactions", tag: "CI/CD Workflows, Runners", featured: true },
    { name: "Terraform", category: "DevOps", iconKey: "terraform", tag: "Infrastructure as Code, Modules", featured: true },

    // Operating Systems
    { name: "Linux", category: "Operating Systems", iconKey: "linux", tag: "Kernel, Process Mgmt, Networking", featured: true },
    { name: "Ubuntu", category: "Operating Systems", iconKey: "ubuntu", tag: "Server Administration, systemd", featured: false },
    { name: "Windows", category: "Operating Systems", iconKey: "windows", tag: "PowerShell, Server Environment", featured: false },

    // Programming & Scripting
    { name: "Python", category: "Programming", iconKey: "python", tag: "Automation, Boto3, Scripting", featured: true },
    { name: "Bash", category: "Programming", iconKey: "bash", tag: "Shell Scripting, Cron, Tooling", featured: true },
    { name: "JavaScript", category: "Programming", iconKey: "javascript", tag: "Node.js Runtimes, APIs", featured: false },
    { name: "TypeScript", category: "Programming", iconKey: "typescript", tag: "Type-safe Tooling, Web Apps", featured: false },

    // Monitoring & Observability
    { name: "Grafana", category: "Monitoring", iconKey: "grafana", tag: "Dashboards, Alerts, Visualization", featured: true },
    { name: "Prometheus", category: "Monitoring", iconKey: "prometheus", tag: "Metrics Scraping, PromQL, Alertmanager", featured: true },

    // Version Control
    { name: "Git", category: "Version Control", iconKey: "git", tag: "Branching, Rebasing, GitOps", featured: true },
    { name: "GitHub", category: "Version Control", iconKey: "github", tag: "Pull Requests, Security Advisories", featured: false },
  ],

  // 5. Projects Section
  projects: [
    {
      id: "cloudvault-aws",
      title: "CloudVault – AWS Serverless Project",
      tagline: "Event-Driven Secure Cloud Storage with Automated Metadata Ingestion",
      description: "A serverless cloud architecture designed for secure asset ingestion, validation, and encrypted storage. Eliminates server maintenance overhead by leveraging managed AWS compute and storage services with strict least-privilege IAM access policies.",
      technologies: ["AWS S3", "AWS Lambda", "API Gateway", "Terraform", "Python", "CloudWatch"],
      image: "/images/projects/cloudvault.svg",
      githubUrl: "https://github.com/your-username/cloudvault-aws",
      liveUrl: "", // Leave empty if not hosted or link when available
      keyFeatures: [
        "Pre-signed URL generation via API Gateway and Lambda for direct, secure S3 uploads.",
        "Automated event-driven trigger validating file signatures and storing metadata.",
        "Infrastructure declared in modular Terraform code for one-command repeatable provisioning.",
        "Server-side KMS encryption at rest and TLS 1.3 in transit.",
      ],
      myContribution: "Architected the serverless pipeline blueprint, implemented the Python Lambda ingestion handler, authored Terraform scripts for automated resource creation, and configured CloudWatch metric filters.",
      architectureHighlights: [
        "Least-privilege IAM Execution Roles",
        "Zero Idle-Cost Serverless Execution",
        "Modular Terraform State Management",
      ],
      featured: true,
    },
    {
      id: "pulsecheck-monitoring",
      title: "PulseCheck – Application Monitoring Project",
      tagline: "Full-Stack Observability Pipeline with Prometheus, Grafana & Alertmanager",
      description: "A production-grade telemetry stack configured to scrape system metrics, container states, and application latency across Docker and Kubernetes environments. Includes customizable Grafana dashboards and proactive Alertmanager notification dispatch.",
      technologies: ["Prometheus", "Grafana", "Docker", "Kubernetes", "Node Exporter", "Alertmanager"],
      image: "/images/projects/pulsecheck.svg",
      githubUrl: "https://github.com/your-username/pulsecheck-monitoring",
      liveUrl: "", // Leave empty if not hosted or link when available
      keyFeatures: [
        "Configured Prometheus target discovery for host infrastructure and container metrics.",
        "Created production Grafana dashboards visualizing p95/p99 latency, RPS, memory, and CPU limits.",
        "Implemented Alertmanager routing policies with threshold triggers for high error rates.",
        "Packaged complete stack into containerized Docker Compose and K8s manifest sets for zero-friction launch.",
      ],
      myContribution: "Designed the Prometheus scrape configurations, built custom Grafana dashboards focusing on Google SRE Golden Signals (Latency, Traffic, Errors, Saturation), and tested Alertmanager triggers against simulated node saturation.",
      architectureHighlights: [
        "Standard SRE Golden Signals Observability",
        "Reproducible Docker & K8s Configuration",
        "Target Auto-Discovery and Custom PromQL Queries",
      ],
      featured: true,
    },
  ],

  // 6. Education Section
  education: [
    {
      degree: "[YOUR DEGREE, e.g. Bachelor of Technology in Computer Science & Engineering]",
      institution: "[YOUR COLLEGE / UNIVERSITY NAME]",
      period: "2022 – 2026",
      location: "India",
      relevantCoursework: [
        "Operating Systems",
        "Computer Networks",
        "Cloud Computing Architecture",
        "Database Management Systems",
        "Distributed Computing",
        "Software Engineering & Agile",
      ],
      achievements: [
        "Active member of campus Developer & Cloud Computing Club.",
        "Organized student workshops on Git version control and Docker fundamentals.",
      ],
    },
  ],

  // 7. Certifications Section
  // Display only real certifications you provide; keep empty array or fill when completed.
  certifications: [
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services (AWS)",
      issueDate: "In Progress / Targeted 2026",
      credentialUrl: "", // Add verification link when certified
      status: "In Progress",
    },
    {
      name: "HashiCorp Certified: Terraform Associate",
      issuer: "HashiCorp",
      issueDate: "Planned",
      credentialUrl: "",
      status: "Planned",
    },
  ],

  // 8. Downloadable Resume Configuration
  // If no resume is available, set `available: false` and the download buttons will gracefully hide across the website.
  resume: {
    available: true,
    fileUrl: "/resume/sample-resume.pdf",
    fileName: "DevOps_Cloud_Engineer_Resume.pdf",
    lastUpdated: "November 2026",
  },

  // 9. Contact Information
  contact: {
    email: "your.email@example.com",
    linkedin: "https://linkedin.com/in/your-profile",
    github: "https://github.com/your-username",
    location: "Available for Remote & Relocation Opportunities",
    availabilityNote: "Currently seeking entry-level DevOps Engineer, Cloud Engineer, or Cloud/Infrastructure Internships. Let's connect to discuss how I can contribute to your infrastructure team.",
    preferredContactMethod: "email",
  },
};
