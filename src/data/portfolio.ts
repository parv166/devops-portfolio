import { PortfolioData } from '../types/portfolio';

/**
 * =========================================================================
 * CENTRALIZED PORTFOLIO DATA (Single Source of Truth)
 * =========================================================================
 * Parv Chandegara — Aspiring DevOps & Cloud Engineer
 * All personal information, skills, and projects reflect verified repositories
 * and hands-on implementations without fabricated claims or percentages.
 * =========================================================================
 */
export const portfolioData: PortfolioData = {
  // 1. Personal & Hero Information
  personal: {
    name: "Parv Chandegara",
    headline: "Aspiring DevOps & Cloud Engineer",
    subheadline: "Passionate about container orchestration, GitOps workflows, CI/CD automation, and cloud infrastructure.",
    shortBio: "B.Tech Information Technology student (graduating 2027) with hands-on experience provisioning K3s Kubernetes clusters, automating CI/CD pipelines with GitHub Actions and Jenkins, and building AWS serverless backends.",
    location: "India",
    status: {
      available: true,
      label: "Open to Junior DevOps, Cloud & SRE Roles / Internships",
    },
    terminalGreeting: "parv@homelab:~$ kubectl get pods -n hello-devops",
  },

  // 2. About Me Section
  about: {
    introduction: "I am an aspiring DevOps and Cloud Engineer pursuing my B.Tech in Information Technology (graduating 2027). I focus on understanding how modern applications are built, packaged, deployed, and maintained reliably through practical projects and a self-hosted homelab.",
    educationalBackground: "Pursuing Bachelor of Technology in Information Technology with an expected graduation in 2027, building a core foundation in computer networks, operating systems, and software engineering principles.",
    careerInterests: "Targeting entry-level roles and internships in DevOps Engineering, Cloud Operations, Platform Engineering, and Site Reliability Engineering.",
    technicalInterests: [
      "Container Orchestration & Microservices (Kubernetes, K3s, Docker)",
      "GitOps & Continuous Deployment (Argo CD, Helm)",
      "CI/CD Automation & Security Scanning (GitHub Actions, Jenkins, Trivy)",
      "Cloud Infrastructure & Serverless (AWS Lambda, S3, Cognito, API Gateway)",
      "Infrastructure as Code (Terraform)",
      "Linux Systems Administration & Shell Automation (Ubuntu, Bash)",
    ],
    professionalGoals: "To develop strong operational discipline across cloud environments, automate deployment workflows reliably, and continuously improve systems security and reproducibility.",
    keyHighlights: [
      {
        label: "Hands-on Homelab",
        description: "Built a two-node K3s cluster running master and worker nodes with automated Argo CD GitOps synchronization.",
      },
      {
        label: "CI/CD & Security Gates",
        description: "Configured GitHub Actions and Jenkins pipelines incorporating container health checks and Trivy vulnerability gates.",
      },
      {
        label: "Cloud Serverless",
        description: "Engineered AWS serverless storage architecture leveraging Cognito authentication, API Gateway, and Terraform.",
      },
      {
        label: "Disciplined Engineering",
        description: "Focused on declarative infrastructure, reproducible builds, and honest understanding of architectural trade-offs.",
      },
    ],
  },

  // 3. Social & Professional Links
  socialLinks: {
    github: "https://github.com/parv166",
    linkedin: "https://www.linkedin.com/in/parv-chandegara/",
    email: "chandegaraparv@gmail.com",
  },

  // 4. Technical Skills
  skills: [
    // 1. Cloud Platforms
    { name: "AWS", category: "Cloud Platforms", iconKey: "aws", tag: "EC2, VPC, S3, Security Groups, IAM", featured: true },
    { name: "Azure Fundamentals", category: "Cloud Platforms", iconKey: "azure", tag: "Core Cloud Concepts, Virtual Machines, Resource Groups", featured: false },
    { name: "Amazon Cognito", category: "Cloud Platforms", iconKey: "cognito", tag: "User Pools, JWT Authentication, Protected Routes", featured: false },
    { name: "Amazon S3", category: "Cloud Platforms", iconKey: "s3", tag: "Private Bucket Storage, Block Public Access", featured: true },
    { name: "AWS Lambda", category: "Cloud Platforms", iconKey: "lambda", tag: "Python Serverless Compute, File Handlers", featured: true },
    { name: "Amazon API Gateway", category: "Cloud Platforms", iconKey: "apigateway", tag: "HTTP APIs, JWT Authorizer Integration", featured: false },
    { name: "Amazon DynamoDB", category: "Cloud Platforms", iconKey: "dynamodb", tag: "NoSQL Metadata Table, Single Table Keying", featured: false },
    { name: "Amazon CloudFront", category: "Cloud Platforms", iconKey: "cloudfront", tag: "CDN Distribution, S3 Static Hosting", featured: false },
    { name: "Amazon ECR", category: "Cloud Platforms", iconKey: "ecr", tag: "Container Image Registry, Docker Push", featured: false },

    // 2. Containerization
    { name: "Docker", category: "Containerization", iconKey: "docker", tag: "Multi-stage Builds, Non-root Users, Healthcheck", featured: true },
    { name: "Docker Compose", category: "Containerization", iconKey: "dockercompose", tag: "Multi-Container Applications, Bridge Networks, Volumes", featured: true },
    { name: "Container Networking", category: "Containerization", iconKey: "containernetworking", tag: "Bridge Drivers, Port Binding, Host Communication & DNS", featured: false },
    { name: "Container Image Management", category: "Containerization", iconKey: "containerimagemanagement", tag: "Layer Optimization, Image Tagging, Pruning & GHCR/ECR", featured: false },
    { name: "Kubernetes", category: "Containerization", iconKey: "kubernetes", tag: "Deployments, Services, NodePort, Ingress", featured: true },
    { name: "K3s", category: "Containerization", iconKey: "k3s", tag: "Lightweight Two-Node Homelab Cluster", featured: true },
    { name: "Helm", category: "Containerization", iconKey: "helm", tag: "Chart Packaging, Value Templating, Linting", featured: true },
    { name: "Traefik", category: "Containerization", iconKey: "traefik", tag: "Kubernetes Ingress Controller, Host Routing", featured: false },

    // 3. CI/CD Tools & GitOps
    { name: "GitHub Actions", category: "CI/CD Tools & GitOps", iconKey: "githubactions", tag: "Workflows, Helm Lint, Docker Build, GHCR Publish", featured: true },
    { name: "Jenkins", category: "CI/CD Tools & GitOps", iconKey: "jenkins", tag: "Declarative Pipeline, Unit Tests, Container Auditing", featured: true },
    { name: "Build Automation", category: "CI/CD Tools & GitOps", iconKey: "buildautomation", tag: "CI Pipeline Triggers, Automated Build Runs & Validation", featured: false },
    { name: "Docker Image Build", category: "CI/CD Tools & GitOps", iconKey: "dockerimagebuild", tag: "Pipeline Container Packaging, Caching & Testing", featured: false },
    { name: "SSH Deployment", category: "CI/CD Tools & GitOps", iconKey: "sshdeployment", tag: "Automated Remote Key Authentication & Command Execution", featured: false },
    { name: "Argo CD", category: "CI/CD Tools & GitOps", iconKey: "argocd", tag: "Declarative GitOps, Desired State Reconciliation", featured: true },
    { name: "Trivy", category: "CI/CD Tools & GitOps", iconKey: "trivy", tag: "Container Vulnerability Scans, CRITICAL Gate", featured: true },

    // 4. Operating Systems
    { name: "Ubuntu", category: "Operating Systems", iconKey: "ubuntu", tag: "Server Administration, Homelab OS", featured: true },
    { name: "Kali Linux", category: "Operating Systems", iconKey: "kalilinux", tag: "Security Auditing, Diagnostic & Penetration Testing Tools", featured: false },
    { name: "Linux", category: "Operating Systems", iconKey: "linux", tag: "Process Monitoring, Permissions, Networking", featured: true },
    { name: "SSH", category: "Operating Systems", iconKey: "ssh", tag: "Key-Pair Authentication, Remote Shell & Config", featured: true },
    { name: "Process Management", category: "Operating Systems", iconKey: "processmanagement", tag: "Systemd Services, background jobs, top/htop & signals", featured: false },
    { name: "Port Management", category: "Operating Systems", iconKey: "portmanagement", tag: "ss, netstat, lsof, ufw firewalls & port binding inspection", featured: false },

    // 5. Networking
    { name: "TCP/IP", category: "Networking", iconKey: "tcpip", tag: "Addressing, Subnets, Routing, Handshakes & Protocols", featured: true },
    { name: "DNS", category: "Networking", iconKey: "dns", tag: "Domain Resolution, Records (A, CNAME, TXT), CoreDNS", featured: true },
    { name: "HTTP/HTTPS", category: "Networking", iconKey: "https", tag: "Status Codes, Headers, TLS Certificates & Reverse Proxies", featured: false },
    { name: "VPC", category: "Networking", iconKey: "vpc", tag: "Virtual Private Cloud, Subnets, Route Tables, Gateways", featured: true },
    { name: "Security Groups", category: "Networking", iconKey: "securitygroups", tag: "Stateful Inbound/Outbound Rules & Network Isolation", featured: false },
    { name: "Port Scanning", category: "Networking", iconKey: "portscanning", tag: "Nmap, Port Discovery & Service Version Detection", featured: false },

    // 6. Scripting Languages
    { name: "Python", category: "Scripting Languages", iconKey: "python", tag: "FastAPI, Flask, Pytest, Boto3 AWS SDK", featured: true },
    { name: "Bash", category: "Scripting Languages", iconKey: "bash", tag: "Shell Automation, Health Checks, CLI Tooling", featured: true },

    // 7. Version Control
    { name: "Git", category: "Version Control", iconKey: "git", tag: "Branching, Version Control, Commit Hashes", featured: true },
    { name: "GitHub", category: "Version Control", iconKey: "github", tag: "GHCR, Issue Tracking, CI Integration", featured: true },
    { name: "Branching Strategies", category: "Version Control", iconKey: "branchingstrategies", tag: "Feature Branching, Mainline Delivery, Trunk-based GitOps", featured: false },

    // 8. Infrastructure as Code
    { name: "Terraform", category: "Infrastructure as Code", iconKey: "terraform", tag: "Declarative Modules, AWS Provider, State Management", featured: true },

    // 9. Security
    { name: "IAM Fundamentals", category: "Security", iconKey: "iam", tag: "Least-privilege Execution Roles, Scoped Policies", featured: true },
    { name: "CI/CD Secrets Management", category: "Security", iconKey: "secretsmanagement", tag: "Encrypted Pipeline Secrets, Environment Injection", featured: true },
    { name: "Container Security", category: "Security", iconKey: "containersecurity", tag: "Non-root Users, Minimal Base Images, Health Probes", featured: true },
  ],

  // 5. Real Projects Section (Hello DevOps featured first!)
  projects: [
    {
      id: "hello-devops",
      title: "Hello DevOps — CI/CD and GitOps on K3s",
      tagline: "Hands-on Homelab: Developer Push to Automated GitOps Deployment",
      description: "A practical learning homelab demonstrating an automated delivery pipeline and GitOps workflow. When a developer pushes code, GitHub Actions validates Helm charts, builds and health-tests the container image, runs a Trivy vulnerability gate, and publishes to GHCR. It then updates the Helm values file, allowing Argo CD to detect the commit and reconcile deployment into a physical two-node K3s cluster.",
      technologies: ["K3s", "Kubernetes", "Argo CD", "GitHub Actions", "Docker", "Helm", "Traefik", "Trivy", "GHCR", "Python Flask"],
      image: "/images/projects/hello-devops-homelab.png",
      fallbackImage: "/images/projects/hello-devops.svg",
      githubUrl: "https://github.com/parv166/hello-devops",
      liveUrl: "",
      workflow: "Developer Push → GitHub Actions → Helm Lint → Docker Build & Health Check → Trivy Scan → GHCR Publish → Update Helm Image SHA → Argo CD Sync → K3s Two-Node Cluster",
      keyFeatures: [
        "Two-node K3s homelab cluster with separate master (control plane) and worker node.",
        "Python Flask microservice exposing a structured /health endpoint.",
        "Containerized with Docker, incorporating built-in health probes.",
        "GitHub Actions workflow runs Helm template linting and builds the container image.",
        "Trivy vulnerability scanner gates the pipeline on CRITICAL findings (ignoring unfixed findings).",
        "Container images published to GitHub Container Registry (GHCR) with commit SHA and latest tags.",
        "Workflow automatically updates the Helm values.yaml with the newly generated image SHA.",
        "Argo CD continuously monitors the repository and synchronizes desired state into the cluster.",
        "Verified successful historical two-replica rolling deployment during homelab rollout testing.",
        "Current checked-in Helm values intentionally set replicaCount to 0 with autoscaling disabled to conserve homelab resources when not actively testing.",
        "Traefik Ingress routing on hostname hello.local and exposed via NodePort 30080.",
      ],
      myContribution: "Provisioned and configured the two-node K3s Ubuntu homelab, created the containerized Flask app, authored Helm charts and Traefik Ingress rules, verified two-replica GitOps rollouts, wrote the GitHub Actions CI pipeline with Trivy security gates, and configured Argo CD for automated reconciliation.",
      architectureHighlights: [
        "Two-node K3s Homelab Cluster",
        "Automated GitOps via Argo CD",
        "Trivy CRITICAL Security Gate",
        "GHCR Image Delivery Pipeline",
      ],
      limitations: [
        "Learning homelab environment, not a production-grade infrastructure platform.",
        "Current checked-in Helm values set replicaCount to 0 (no pods currently running in cluster to conserve resources).",
        "Traefik Ingress routes to private hostname hello.local; not publicly accessible over the internet.",
        "Centralized monitoring, Prometheus/Grafana logging, and alerting are not configured in this project.",
        "No documented automated backup or disaster recovery mechanism.",
      ],
      featured: true,
    },
    {
      id: "cloudvault-aws",
      title: "CloudVault — AWS Serverless File Storage",
      tagline: "Serverless File Management with Cognito Auth, Lambda & Terraform",
      description: "A serverless cloud web application for secure, authenticated file storage. Features user registration and email confirmation via Amazon Cognito, protected React frontend routes, JWT-authorized API Gateway HTTP endpoints, Python Lambda handlers with per-user file ownership validation, private Amazon S3 storage, and DynamoDB metadata tracking, all provisioned declaratively with Terraform.",
      technologies: ["AWS Lambda", "Amazon S3", "Amazon Cognito", "Amazon API Gateway", "DynamoDB", "CloudFront", "Terraform", "Python", "React", "Vite"],
      image: "/images/projects/cloudvault-dashboard.png",
      fallbackImage: "/images/projects/cloudvault.svg",
      githubUrl: "https://github.com/parv166/CloudVault-AWS-Serverless",
      liveUrl: "https://cloudvault.parvchandegara.me",
      workflow: "React Client → Cognito Auth → API Gateway (JWT) → Lambda (Python) → Private S3 Bucket & DynamoDB Metadata",
      keyFeatures: [
        "User registration, authentication, and email confirmation powered by Amazon Cognito.",
        "Protected React client routes verifying JWT authorization tokens.",
        "Amazon API Gateway HTTP API integrated with Cognito JWT authorizer for secure file operations.",
        "AWS Lambda handlers in Python implementing upload, list, download, and delete operations.",
        "Explicit per-user file ownership validation ensuring users can only access their own uploads.",
        "Private Amazon S3 bucket storage with Block Public Access strictly enabled.",
        "Amazon DynamoDB table storing document metadata with user_id as partition key and file_id as sort key, ensuring strict per-user record isolation.",
        "React frontend hosted using Amazon S3 static web hosting and CloudFront CDN distribution.",
        "Repeatable cloud infrastructure fully codified and managed as Terraform-managed AWS resources.",
      ],
      myContribution: "Architected the serverless infrastructure, implemented Python Lambda handlers with per-user ownership verification, integrated Cognito authentication with the React client, and authored Terraform configuration scripts to provision all AWS resources.",
      architectureHighlights: [
        "Cognito JWT Token Authorization",
        "Strict Per-User Ownership Validation",
        "Private S3 with Public Access Blocked",
        "Terraform-Managed AWS Resources",
      ],
      limitations: [
        "Designed for personal serverless file storage; does not implement multi-part uploads for very large files (>10MB).",
        "Deployed using real AWS resources configured with DynamoDB partition key (user_id) and sort key (file_id).",
      ],
      featured: true,
    },
    {
      id: "pulsecheck",
      title: "PulseCheck — Microservice & Jenkins CI/CD Pipeline",
      tagline: "Containerized FastAPI Service with Automated Unit Testing & Trivy Auditing",
      description: "A containerized Python FastAPI microservice integrated with a declarative Jenkins CI/CD pipeline. Features health check and service endpoints, automated Pytest test execution, a single-stage Python 3.14-slim container running as a dedicated non-root 'app' user with container HEALTHCHECK, Trivy security scanning with JSON report generation, a CRITICAL vulnerability quality gate, and declarative Jenkins stages for Amazon ECR publishing and target EC2 deployment.",
      technologies: ["Jenkins", "Docker", "FastAPI", "Python", "Trivy", "Pytest", "Amazon ECR", "Amazon EC2"],
      image: "/images/projects/pulsecheck.png",
      fallbackImage: "/images/projects/pulsecheck.svg",
      githubUrl: "https://github.com/parv166/pulsecheck",
      liveUrl: "https://pulsecheck.parvchandegara.me",
      workflow: "Git Commit → Jenkinsfile Pipeline → Pytest Unit Tests → Docker Build (User: app) → Trivy Vulnerability Gate → ECR / EC2 Stage",
      keyFeatures: [
        "FastAPI microservice implementing structured /, /health, /version, and /api/demo endpoints.",
        "Single-stage Python 3.14-slim Dockerfile configured to execute under a dedicated non-root 'app' user with built-in container HEALTHCHECK instruction.",
        "Automated unit testing suite executed via Pytest during pipeline execution.",
        "Declarative Jenkinsfile pipeline defining test, container build, and security scanning stages.",
        "Trivy vulnerability scanner scanning images and generating structured JSON audit reports.",
        "Quality gate halting the pipeline if CRITICAL vulnerabilities are identified.",
        "Documented declarative pipeline stages for Amazon ECR image publishing and EC2 target deployment.",
      ],
      myContribution: "Developed the FastAPI endpoints and Pytest suite, authored the single-stage Python 3.14-slim Dockerfile with non-root 'app' user and health checks, and configured the declarative Jenkins pipeline incorporating Trivy vulnerability gates, ECR publishing stages, and EC2 deployment definitions.",
      architectureHighlights: [
        "Declarative Jenkins CI Pipeline",
        "Pytest Automated Test Verification",
        "Single-Stage Python 3.14-slim (User: app)",
        "Trivy CRITICAL Security Gate",
      ],
      limitations: [
        "Jenkinsfile codifies deployment stages for ECR and EC2; these demonstrate CI/CD pipeline stages and require target host credentials/agent configuration for active deployment.",
        "The live web application monitors web service endpoints and tracks server metrics with active health checking.",
      ],
      featured: true,
    },
  ],

  // 6. Education Section
  education: [
    {
      degree: "Bachelor of Technology in Information Technology",
      period: "Expected Graduation: 2027",
      location: "India",
      relevantCoursework: [
        "Operating Systems",
        "Computer Networks",
        "Database Management Systems",
        "Software Engineering",
        "Object-Oriented Programming",
        "Data Structures & Algorithms",
      ],
      achievements: [],
    },
  ],

  // 7. Certifications Section
  // Display only completed, verified certifications. Section is automatically hidden if empty.
  certifications: [],

  // 8. Downloadable Resume Configuration
  // Hidden by default when no verified resume PDF is provided.
  resume: {
    available: false,
    fileUrl: "",
    fileName: "",
  },

  // 9. Contact Information
  contact: {
    email: "chandegaraparv@gmail.com",
    linkedin: "https://www.linkedin.com/in/parv-chandegara/",
    github: "https://github.com/parv166",
    location: "India (Open to Remote Opportunities)",
    availabilityNote: "Currently seeking entry-level DevOps Engineer, Cloud Engineer, or SRE roles and internships. Feel free to connect regarding cloud automation, CI/CD pipelines, or homelab projects.",
    preferredContactMethod: "email",
  },
};
