# Parv Chandegara — DevOps & Cloud Engineer Portfolio

A modern, high-performance developer portfolio website engineered for **Parv Chandegara**, an Aspiring DevOps & Cloud Engineer. Built with React, Vite, TypeScript, Tailwind CSS, Framer Motion, and Lucide React. Engineered with deep-space dark aesthetics (Linear, Vercel, and Stripe design inspiration), subtle glow accents, and responsive micro-interactions.

---

## 🚀 Key Highlights & Verified Projects

- **Single Source of Truth (`src/data/portfolio.ts`)**: All personal information, verified skills, real project architectures, and contact details are centralized in one structured TypeScript file.
- **Project 1 (Featured): [Hello DevOps — CI/CD & GitOps on K3s](https://github.com/parv166/hello-devops)**:
  - Hands-on two-node K3s homelab cluster with master (control plane) and worker nodes.
  - Python Flask application with `/health` probe endpoint.
  - Automated GitHub Actions workflow: Helm template linting, Docker build, container health checks, and Trivy vulnerability scan gating CRITICAL findings.
  - Container image publish to GitHub Container Registry (GHCR) and automated `values.yaml` image SHA commit.
  - Continuous GitOps deployment reconciliation powered by Argo CD.
  - Traefik Ingress routing for `hello.local` and exposed via NodePort `30080`.
  - Transparent documentation of homelab learning scope and honest limitations (plain HTTP ingress, no centralized logging).
- **Project 2: [CloudVault — AWS Serverless File Storage](https://github.com/parv166/CloudVault-AWS-Serverless)**:
  - User registration, authentication, and email confirmation via Amazon Cognito.
  - Protected React client routes verifying JWT authorization tokens.
  - API Gateway HTTP API with JWT authorizer for secure file management.
  - Python AWS Lambda handlers with strict per-user file ownership verification.
  - Private Amazon S3 storage with public access strictly blocked, and DynamoDB file metadata storage.
  - Codified end-to-end using modular Terraform declarations.
- **Project 3: [PulseCheck — Microservice & Jenkins CI/CD Pipeline](https://github.com/parv166/pulsecheck)**:
  - Python FastAPI microservice with `/health`, `/version`, and `/api/demo` endpoints.
  - Multi-stage Docker container hardened to run as non-root user (`appuser:appgroup`) with container `HEALTHCHECK`.
  - Pytest unit testing suite executed automatically in CI.
  - Declarative Jenkinsfile pipeline with Trivy vulnerability scanning, JSON report generation, and CRITICAL quality gate.
- **Interactive Homelab Terminal (`TerminalHero.tsx`)**:
  - Live illustrative snapshots based on Parv's actual homelab configuration:
    - Tab 1: `kubectl get pods -n hello-devops -o wide` (Two-replica workload on K3s master and worker nodes)
    - Tab 2: `kubectl get application hello-devops -n argocd` (Argo CD GitOps synchronization)
    - Tab 3: `gh run list --repo parv166/hello-devops` (GitHub Actions workflow execution)
  - Explicitly labeled as an illustrative snapshot based on homelab configuration — zero fabricated production metrics.
- **Zero-Backend Direct Contact**: Interactive message composer and instant one-click email clipboard copy with toast feedback. Opens default email client via `mailto:` with zero server or database requirements.
- **Azure Static Web Apps CI/CD**: Preconfigured with `staticwebapp.config.json` (SPA routing fallbacks, security headers, MIME types) and `.github/workflows/azure-static-web-apps.yml` with resilient token checking.

---

## 📁 Project Architecture

```
devops-portfolio/
├── .github/
│   └── workflows/
│       └── azure-static-web-apps.yml   # Automated GitHub Actions build & Azure deployment
├── public/
│   ├── favicon.svg                     # High-res SVG favicon
│   ├── staticwebapp.config.json        # Azure Static Web Apps routing & security
│   ├── images/
│   │   ├── og-preview.svg              # 1200x630 OpenGraph social share card
│   │   └── projects/                   # Verified architectural diagrams
│   │       ├── hello-devops.svg        # K3s GitOps workflow diagram
│   │       ├── cloudvault.svg          # AWS Serverless architecture diagram
│   │       └── pulsecheck.svg          # Jenkins CI/CD & FastAPI diagram
├── src/
│   ├── components/
│   │   ├── Footer.tsx                  # Dynamic copyright, social links & navigation
│   │   ├── Navbar.tsx                  # Responsive header with mobile drawer & active nav
│   │   ├── SectionHeading.tsx          # Section title with domain badge & gradient styling
│   │   ├── TechIcon.tsx                # SVG tech icons (AWS, Docker, K8s, Helm, Argo CD, etc.)
│   │   └── TerminalHero.tsx            # Animated K3s homelab terminal component
│   ├── data/
│   │   └── portfolio.ts                # ⭐ CENTRAL DATA FILE: All verified information
│   ├── sections/
│   │   ├── AboutSection.tsx            # Engineering philosophy, background & goals
│   │   ├── CertificationsSection.tsx   # Verified credentials (conditionally hidden when empty)
│   │   ├── ContactSection.tsx          # Direct email composer & social outreach
│   │   ├── EducationSection.tsx        # B.Tech IT & core coursework
│   │   ├── HeroSection.tsx             # Main hero with availability indicator & terminal
│   │   ├── ProjectsSection.tsx         # Verified projects with architecture workflows
│   │   └── SkillsSection.tsx           # Categorized skills with interactive filters
│   ├── types/
│   │   └── portfolio.ts                # Strict TypeScript interfaces
│   ├── App.tsx                         # Main app layout
│   ├── index.css                       # Tailwind directives, glowing utilities & dark theme
│   └── main.tsx                        # React DOM mounting
├── index.html                          # SEO metadata, Open Graph tags & Google fonts
├── package.json                        # Dependencies & scripts
├── staticwebapp.config.json            # Azure routing configuration at root
├── tailwind.config.js                  # Custom color tokens & fonts
├── tsconfig.json                       # Strict TypeScript compiler options
└── vite.config.ts                      # Vite build configuration (output: dist/)
```

---

## 🛠️ Local Development & Build

### 1. Prerequisites
- **Node.js**: v18.0.0 or higher (v20+ recommended)
- **npm** or **pnpm**

### 2. Installation
```bash
# Navigate to repository directory
cd devops-portfolio

# Install dependencies (clean install)
npm ci
```

### 3. Start Development Server
```bash
npm run dev
# Or on Windows PowerShell:
npm.cmd run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Production Build & Typecheck
```bash
npm run build
# Or on Windows PowerShell:
npm.cmd run build
```
Executes `tsc -b && vite build`. Compiled, minified static files are output to `dist/`.

### 5. Local Production Preview
```bash
npm run preview
# Or on Windows PowerShell:
npm.cmd run preview
```

---

## 🛡️ Dependency Audit & Security Status

- Audited via `npm audit`: **0 vulnerabilities**.
- Updated to **Vite 6** (`^6.4.6`), which resolves vulnerabilities in legacy `esbuild` and Vite dev server path traversal (GHSA-67mh-4wv8-2f99 and GHSA-4w7w-66w2-5vf9) safely without breaking changes or forced overrides.

---

## ☁️ Deployment Guide: Azure Static Web Apps

### Step 1: Push Code to GitHub
```bash
git add .
git commit -m "feat: complete verified DevOps portfolio"
git push origin main
```

### Step 2: Configure Azure Static Web App
1. Log in to the [Azure Portal](https://portal.azure.com).
2. Create a **Static Web App** (Free Plan).
3. Connect your GitHub repository `parv166/devops-portfolio`, branch `main`.
4. Set Build Preset to `Custom`:
   - **App location**: `/`
   - **Api location**: Leave empty
   - **Output location**: `dist`
5. Azure will automatically generate a deployment token.
6. Add the secret in your GitHub repository:
   - Go to **Settings > Secrets and variables > Actions > New repository secret**.
   - Name: `AZURE_STATIC_WEB_APPS_API_TOKEN`
   - Value: `<your-deployment-token>`

> **Note on CI/CD Resilience**: The workflow `.github/workflows/azure-static-web-apps.yml` validates `npm ci` and `npm run build` on every push. If `AZURE_STATIC_WEB_APPS_API_TOKEN` is not yet configured, the workflow cleanly skips the deployment step with an informational notice while ensuring the build passes.

---

## 🌐 Custom Domain Setup (Namecheap + Azure + HTTPS)

1. In the Azure Portal, open your Static Web App and select **Custom domains**.
2. Click **+ Add > Custom domain on other DNS**.
3. Enter your domain (e.g. `www.parvchandegara.dev`).
4. In Namecheap's **Advanced DNS** dashboard, add:
   - **Type**: `CNAME Record`
   - **Host**: `www`
   - **Value**: `<your-app-name>.azurestaticapps.net`
   - **TTL**: `Automatic`
5. Azure automatically issues and manages a **free SSL/TLS certificate**.

---

## 📄 License

MIT License. Designed and authored for Parv Chandegara's DevOps & Cloud Engineering Portfolio.
