# Parv Chandegara — DevOps & Cloud Engineer Portfolio

A modern, high-performance developer portfolio website engineered for **Parv Chandegara**, an Aspiring DevOps & Cloud Engineer. Built with React, Vite, TypeScript, Tailwind CSS, Framer Motion, and Lucide React. Engineered with deep-space dark aesthetics (Linear, Vercel, and Stripe design inspiration), subtle glow accents, and responsive micro-interactions.

Hosted and deployed via **GitHub Pages** using automated **GitHub Actions** workflows.

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
- **GitHub Pages CI/CD**: Preconfigured with `.github/workflows/deploy.yml` utilizing `actions/upload-pages-artifact` and `actions/deploy-pages` with zero secrets required.

---

## 📁 Project Architecture

```
devops-portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml                  # GitHub Actions workflow for GitHub Pages
├── public/
│   ├── favicon.svg                     # High-res SVG favicon
│   ├── CNAME                           # Custom domain binding (parvchandegara.me)
│   ├── 404.html                        # SPA client-side routing fallback
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
├── tailwind.config.js                  # Custom color tokens & fonts
├── tsconfig.json                       # Strict TypeScript compiler options
└── vite.config.ts                      # Vite build configuration (base: '/', output: dist/)
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

## 🌐 Custom Domain Migration Guide (`parvchandegara.me`)

The domain `parvchandegara.me` is currently associated with your `parv166.github.io` repository. Because GitHub Pages does not allow a custom domain to be linked to two repositories at the same time, follow these exact manual steps to complete the transfer:

### Step 1: Remove Domain from `parv166.github.io`
1. Go to **[https://github.com/parv166/parv166.github.io](https://github.com/parv166/parv166.github.io)**.
2. Click **Settings** (top navigation tab) → **Pages** (left sidebar under "Code and automation").
3. Under **Custom domain**, click **Remove** (or clear the text field and click **Save**).
4. Verify the domain text field is now blank on the old repository.

> **Note**: Do not delete or modify your `parv166.github.io` repository itself; removing only the custom domain in Settings leaves all your old repository files completely safe.

### Step 2: Set GitHub Pages Source in `devops-portfolio`
1. Go to **[https://github.com/parv166/devops-portfolio](https://github.com/parv166/devops-portfolio)**.
2. Click **Settings** → **Pages**.
3. Under **Build and deployment > Source**, click the dropdown and select:
   **GitHub Actions** (instead of "Deploy from a branch").

### Step 3: Attach `parvchandegara.me` to `devops-portfolio`
1. On the same **Settings → Pages** page of `devops-portfolio`:
2. In the **Custom domain** input box, enter:
   ```
   parvchandegara.me
   ```
3. Click **Save**.
4. GitHub will automatically initiate DNS verification and issue a free Let's Encrypt TLS/SSL certificate.
5. Once DNS check completes (usually 1–5 minutes), check the box **Enforce HTTPS**.

### Step 4: Namecheap DNS Check
No DNS changes are needed at Namecheap! Because `parvchandegara.me` was already pointing to GitHub Pages for `parv166.github.io`, your existing DNS records (A records pointing to GitHub Pages IPs `185.199.108.153` ... `185.199.111.153` and CNAME for `www`) are already correct and remain unchanged.

---

## 🚀 GitHub Actions Deployment Pipeline (`.github/workflows/deploy.yml`)

The deployment workflow is fully automated and runs without any cloud credentials or secrets:
- **Trigger**: Every push to the `main` branch (and manual trigger via `workflow_dispatch`).
- **Permissions**: Configured with `pages: write` and `id-token: write`.
- **Pipeline Stages**:
  1. `npm ci`: Deterministic, clean dependency installation.
  2. `npm run build`: Type-checks with `tsc -b` and builds with Vite to `dist/`.
  3. `actions/upload-pages-artifact@v3`: Packages the `dist/` directory (including `CNAME` and `404.html`).
  4. `actions/deploy-pages@v4`: Deploys directly to the GitHub Pages environment.

---

## 🛡️ Dependency Audit & Security Status

- Audited via `npm audit`: **0 vulnerabilities**.
- Powered by **Vite 6** (`^6.4.6`), which resolves vulnerabilities in legacy `esbuild` and dev server path traversal (GHSA-67mh-4wv8-2f99 and GHSA-4w7w-66w2-5vf9) safely.

---

## 📄 License

MIT License. Designed and authored for Parv Chandegara's DevOps & Cloud Engineering Portfolio.
