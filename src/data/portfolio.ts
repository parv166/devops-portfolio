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
    // Cloud
    { name: "AWS", category: "Cloud", iconKey: "aws", tag: "S3, Lambda, API Gateway, DynamoDB, Cognito, CloudFront, ECR", featured: true },
    { name: "Amazon Cognito", category: "Cloud", iconKey: "aws", tag: "User Pools, JWT Authentication, Protected Routes", featured: false },
    { name: "Amazon S3", category: "Cloud", iconKey: "aws", tag: "Private Bucket Storage, Block Public Access", featured: true },
    { name: "AWS Lambda", category: "Cloud", iconKey: "aws", tag: "Python Serverless Compute, File Handlers", featured: true },
    { name: "Amazon API Gateway", category: "Cloud", iconKey: "aws", tag: "HTTP APIs, JWT Authorizer Integration", featured: false },
    { name: "Amazon DynamoDB", category: "Cloud", iconKey: "aws", tag: "NoSQL Metadata Table, Single Table Keying", featured: false },
    { name: "Amazon CloudFront", category: "Cloud", iconKey: "aws", tag: "CDN Distribution, S3 Static Hosting", featured: false },
    { name: "Amazon ECR", category: "Cloud", iconKey: "aws", tag: "Container Image Registry, Docker Push", featured: false },

    // Containers and Orchestration
    { name: "Docker", category: "Containers & Orchestration", iconKey: "docker", tag: "Multi-stage Builds, Non-root Users, Healthcheck", featured: true },
    { name: "Kubernetes", category: "Containers & Orchestration", iconKey: "kubernetes", tag: "Deployments, Services, NodePort, Ingress", featured: true },
    { name: "K3s", category: "Containers & Orchestration", iconKey: "k3s", tag: "Lightweight Two-Node Homelab Cluster", featured: true },
    { name: "Helm", category: "Containers & Orchestration", iconKey: "k8s", tag: "Chart Packaging, Value Templating, Linting", featured: true },
    { name: "Traefik", category: "Containers & Orchestration", iconKey: "k8s", tag: "Kubernetes Ingress Controller, Host Routing", featured: false },

    // CI/CD and GitOps
    { name: "GitHub Actions", category: "CI/CD & GitOps", iconKey: "githubactions", tag: "Workflows, Helm Lint, Docker Build, GHCR Publish", featured: true },
    { name: "Jenkins", category: "CI/CD & GitOps", iconKey: "jenkins", tag: "Declarative Pipeline, Unit Tests, Container Auditing", featured: true },
    { name: "Argo CD", category: "CI/CD & GitOps", iconKey: "kubernetes", tag: "Declarative GitOps, Desired State Reconciliation", featured: true },
    { name: "Git", category: "CI/CD & GitOps", iconKey: "git", tag: "Branching, Version Control, Commit Hashes", featured: true },
    { name: "GitHub", category: "CI/CD & GitOps", iconKey: "github", tag: "GHCR, Issue Tracking, CI Integration", featured: false },

    // Infrastructure as Code
    { name: "Terraform", category: "Infrastructure as Code", iconKey: "terraform", tag: "Declarative Modules, AWS Provider, State Management", featured: true },

    // Security
    { name: "Trivy", category: "Security", iconKey: "linux", tag: "Container Vulnerability Scans, CRITICAL Gate", featured: true },
    { name: "Container Security", category: "Security", iconKey: "docker", tag: "Non-root Users, Minimal Base Images, Health Probes", featured: false },
    { name: "IAM Fundamentals", category: "Security", iconKey: "aws", tag: "Least-privilege Execution Roles, Scoped Policies", featured: false },

    // Operating Systems
    { name: "Linux", category: "Operating Systems", iconKey: "linux", tag: "Process Monitoring, Permissions, Networking", featured: true },
    { name: "Ubuntu", category: "Operating Systems", iconKey: "ubuntu", tag: "Server Administration, Homelab OS", featured: false },

    // Programming and Scripting
    { name: "Python", category: "Programming & Scripting", iconKey: "python", tag: "FastAPI, Flask, Pytest, Boto3 AWS SDK", featured: true },
    { name: "Bash", category: "Programming & Scripting", iconKey: "bash", tag: "Shell Automation, Health Checks, CLI Tooling", featured: true },
    { name: "JavaScript", category: "Programming & Scripting", iconKey: "javascript", tag: "React Frontend Integration, Web APIs", featured: false },
    { name: "TypeScript", category: "Programming & Scripting", iconKey: "typescript", tag: "Type-safe Web Applications & Configurations", featured: false },
  ],

  // 5. Real Projects Section (Hello DevOps featured first!)
  projects: [
    {
      id: "hello-devops",
      title: "Hello DevOps — CI/CD and GitOps on K3s",
      tagline: "Hands-on Homelab: Developer Push to Automated GitOps Deployment",
      description: "A practical learning homelab demonstrating an automated delivery pipeline and GitOps workflow. When a developer pushes code, GitHub Actions validates Helm charts, builds and health-tests the container image, runs a Trivy vulnerability gate, and publishes to GHCR. It then updates the Helm values file, allowing Argo CD to detect the commit and reconcile the 2-replica deployment into a physical two-node K3s cluster.",
      technologies: ["K3s", "Kubernetes", "Argo CD", "GitHub Actions", "Docker", "Helm", "Traefik", "Trivy", "GHCR", "Python Flask"],
      image: "/images/projects/hello-devops-homelab.png",
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
        "Configured with 2 fixed application replicas (HPA is currently disabled in checked-in Helm values).",
        "Traefik Ingress routing on hostname hello.local and exposed via NodePort 30080.",
      ],
      myContribution: "Provisioned and configured the two-node K3s Ubuntu homelab, created the containerized Flask app, authored Helm charts and Traefik Ingress rules, wrote the GitHub Actions CI pipeline with Trivy security gates, and configured Argo CD for automated GitOps reconciliation.",
      architectureHighlights: [
        "Two-node K3s Homelab Cluster",
        "Automated GitOps via Argo CD",
        "Trivy CRITICAL Security Gate",
        "GHCR Image Delivery Pipeline",
      ],
      limitations: [
        "Learning homelab environment, not a production-grade infrastructure platform.",
        "Ingress currently runs on plain HTTP without HTTPS/TLS certificates.",
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
      image: "/images/projects/cloudvault.svg",
      githubUrl: "https://github.com/parv166/CloudVault-AWS-Serverless",
      liveUrl: "",
      workflow: "React Client → Cognito Auth → API Gateway (JWT) → Lambda (Python) → Private S3 Bucket & DynamoDB Metadata",
      keyFeatures: [
        "User registration, authentication, and email confirmation powered by Amazon Cognito.",
        "Protected React client routes verifying JWT authorization tokens.",
        "Amazon API Gateway HTTP API integrated with Cognito JWT authorizer for secure file operations.",
        "AWS Lambda handlers in Python implementing upload, list, download, and delete operations.",
        "Explicit per-user file ownership validation ensuring users can only access their own uploads.",
        "Private Amazon S3 bucket storage with Block Public Access strictly enabled.",
        "Amazon DynamoDB table storing document metadata, file sizes, and timestamps.",
        "React frontend hosted using Amazon S3 static web hosting and CloudFront CDN distribution.",
        "Repeatable cloud infrastructure fully codified and managed through Terraform modules.",
      ],
      myContribution: "Architected the serverless infrastructure, implemented Python Lambda handlers with per-user ownership verification, integrated Cognito authentication with the React client, and authored modular Terraform scripts for all AWS resources.",
      architectureHighlights: [
        "Cognito JWT Token Authorization",
        "Strict Per-User Ownership Validation",
        "Private S3 with Public Access Blocked",
        "Terraform-Managed AWS Resources",
      ],
      featured: true,
    },
    {
      id: "pulsecheck",
      title: "PulseCheck — Microservice & Jenkins CI/CD Pipeline",
      tagline: "Containerized FastAPI Service with Automated Unit Testing & Trivy Auditing",
      description: "A containerized Python FastAPI microservice integrated with a declarative Jenkins CI/CD pipeline. Features health and demo endpoints, automated Pytest test execution, a multi-stage Dockerfile running as a dedicated non-root user, Trivy security scanning with JSON report generation, a CRITICAL vulnerability quality gate, and documented pipeline stages for Amazon ECR publishing and EC2 deployment.",
      technologies: ["Jenkins", "Docker", "FastAPI", "Python", "Trivy", "Pytest", "Amazon ECR", "Amazon EC2"],
      image: "/images/projects/pulsecheck.svg",
      githubUrl: "https://github.com/parv166/pulsecheck",
      liveUrl: "",
      workflow: "Git Commit → Jenkinsfile Pipeline → Pytest Unit Tests → Docker Build (Non-root) → Trivy Vulnerability Gate → ECR / EC2 Stage",
      keyFeatures: [
        "FastAPI microservice implementing structured /, /health, /version, and /api/demo endpoints.",
        "Multi-stage Dockerfile configured to run as a non-root user (appuser:appgroup) with container HEALTHCHECK.",
        "Automated unit testing suite executed via Pytest during pipeline execution.",
        "Declarative Jenkinsfile pipeline defining test, container build, and security scanning stages.",
        "Trivy vulnerability scanner scanning images and generating structured JSON audit reports.",
        "Quality gate halting the pipeline if CRITICAL vulnerabilities are identified.",
        "Documented pipeline stages for Amazon ECR image publishing and EC2 target deployment.",
      ],
      myContribution: "Developed the FastAPI endpoints and unit tests, authored the hardened non-root Dockerfile with container health checks, and configured the declarative Jenkins pipeline with automated Trivy vulnerability gates.",
      architectureHighlights: [
        "Declarative Jenkins CI Pipeline",
        "Pytest Automated Test Verification",
        "Non-Root Hardened Container Image",
        "Trivy CRITICAL Security Gate",
      ],
      limitations: [
        "Jenkinsfile includes deployment stages for ECR and EC2; execution depends on host credentials and environment configuration.",
        "This project focuses on microservice packaging and CI pipeline stages; it is not a Prometheus/Alertmanager/Grafana monitoring stack.",
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
