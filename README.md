# Premium DevOps & Cloud Engineer Portfolio

A modern, high-performance developer portfolio website designed specifically for an **Aspiring DevOps & Cloud Engineer**. Built with React, Vite, TypeScript, Tailwind CSS, Framer Motion, and Lucide React. Engineered with deep-space dark aesthetics (Linear, Vercel, and Stripe design inspiration), subtle glow accents, and responsive micro-interactions.

---

## 🚀 Key Features

- **Single Source of Truth (`src/data/portfolio.ts`)**: All personal details, project descriptions, skills, credentials, social links, and resume settings are centralized in one structured TypeScript file. Update your entire portfolio without touching JSX or component code.
- **Interactive DevOps Terminal**: Features real-time cluster commands (`kubectl get pods`, `terraform plan`, `gh workflow run`), animated pods health table, and copyable commands.
- **Zero-Backend Direct Contact**: Interactive message composer and instant one-click email clipboard copy with toast feedback.
- **Configurable Resume System**: Dynamic resume download button that automatically hides if no resume file is configured.
- **Cloud-Native Design Aesthetics**: Subtle cyan, violet, and blue glow borders, dark charcoal glassmorphism cards, and JetBrains Mono monospace typography.
- **Azure Static Web Apps Ready**: Preconfigured with `staticwebapp.config.json` (SPA routing fallbacks, security headers, MIME types) and `.github/workflows/azure-static-web-apps.yml` for automated CI/CD.
- **Production Build Output**: Produces optimized static assets in `dist/`.

---

## 📁 Project Architecture

```
devops-portfolio/
├── .github/
│   └── workflows/
│       └── azure-static-web-apps.yml   # Automated GitHub Actions deployment to Azure
├── public/
│   ├── favicon.svg                     # High-res SVG favicon
│   ├── staticwebapp.config.json        # Azure Static Web Apps routing & security
│   ├── images/
│   │   └── projects/                   # Project architecture diagrams & visuals
│   │       ├── cloudvault.svg
│   │       └── pulsecheck.svg
│   └── resume/
│       └── sample-resume.pdf           # Sample PDF (replace with your official resume)
├── src/
│   ├── components/
│   │   ├── Footer.tsx                  # Dynamic copyright, social links & back-to-top
│   │   ├── Navbar.tsx                  # Responsive header with mobile drawer & active nav
│   │   ├── SectionHeading.tsx          # Section title with domain badge & gradient styling
│   │   ├── TechIcon.tsx                # SVG tech icons (AWS, Azure, Docker, K8s, etc.)
│   │   └── TerminalHero.tsx            # Animated interactive DevOps control plane terminal
│   ├── data/
│   │   └── portfolio.ts                # ⭐ CENTRAL DATA FILE: All editable information
│   ├── sections/
│   │   ├── AboutSection.tsx            # Engineering philosophy, background & goals
│   │   ├── CertificationsSection.tsx   # Verified credentials & milestone badges
│   │   ├── ContactSection.tsx          # Direct email composer & social outreach
│   │   ├── EducationSection.tsx        # Degree, coursework & campus highlights
│   │   ├── HeroSection.tsx             # Main hero with availability indicator & terminal
│   │   ├── ProjectsSection.tsx         # Cloud & DevOps architecture projects
│   │   └── SkillsSection.tsx           # Categorized skills with interactive filters
│   ├── types/
│   │   └── portfolio.ts                # TypeScript interfaces for portfolio data
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

## 🛠️ Getting Started

### 1. Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm** or **pnpm**

### 2. Installation
```bash
# Clone or navigate to the repository
cd devops-portfolio

# Install dependencies
npm install
```

### 3. Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Production Build
```bash
npm run build
```
The compiled, minified static files will be generated in the `dist/` directory.

### 5. Local Production Preview
```bash
npm run preview
```

---

## ✏️ Customizing Your Information

To personalize the website, open **`src/data/portfolio.ts`**:

### A. Personal Information (`personal`)
```typescript
personal: {
  name: "Your Name",
  headline: "Aspiring DevOps & Cloud Engineer",
  subheadline: "Passionate about cloud infrastructure, container orchestration...",
  shortBio: "Bridging the gap between software development and cloud operations...",
  location: "Your City, Country",
  status: {
    available: true,
    label: "Open to Junior DevOps & Cloud Roles",
  },
}
```

### B. Projects (`projects`)
Edit existing entries or add new ones:
```typescript
{
  id: "cloudvault-aws",
  title: "CloudVault – AWS Serverless Project",
  tagline: "Event-Driven Secure Cloud Storage",
  description: "...",
  technologies: ["AWS S3", "AWS Lambda", "API Gateway", "Terraform", "Python"],
  image: "/images/projects/cloudvault.svg",
  githubUrl: "https://github.com/your-username/cloudvault-aws",
  liveUrl: "", // Add if deployed
  keyFeatures: ["Feature 1", "Feature 2"],
  myContribution: "Your specific contribution...",
}
```

### C. Resume Settings (`resume`)
- Place your PDF resume in `public/resume/your-resume.pdf`.
- Update the config in `src/data/portfolio.ts`:
```typescript
resume: {
  available: true,
  fileUrl: "/resume/your-resume.pdf",
  fileName: "Your_Name_DevOps_Resume.pdf",
  lastUpdated: "November 2026",
}
```
> **Tip:** If you do not have a resume ready yet, set `available: false` and the download buttons across the website will cleanly hide.

---

## ☁️ Deployment Guide: Azure Static Web Apps

### Step 1: Push Code to GitHub
```bash
git init
git add .
git commit -m "Initial commit of DevOps Portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

### Step 2: Create Azure Static Web App
1. Log in to the [Azure Portal](https://portal.azure.com).
2. Search for **Static Web Apps** and click **Create**.
3. Choose your Subscription and Resource Group.
4. Name your app (e.g., `devops-portfolio`).
5. Plan type: **Free** (covers custom domains, free SSL, and global CDN).
6. Under **Deployment details**, select **GitHub** and authorize Azure.
7. Select your GitHub repository and the `main` branch.
8. Under **Build Details**:
   - **Build Presets**: `Custom`
   - **App location**: `/`
   - **Api location**: Leave empty
   - **Output location**: `dist`
9. Click **Review + Create**, then **Create**.

Azure will automatically generate a GitHub Actions workflow in `.github/workflows/` and deploy your website within 2-3 minutes.

---

## 🌐 Custom Domain Setup (Namecheap + Azure + HTTPS)

To link your Namecheap custom domain (e.g. `yourname.com` or `devops.yourname.com`):

### 1. In Azure Portal
1. Navigate to your Static Web App resource.
2. In the left menu, select **Custom domains**.
3. Click **+ Add** -> **Custom domain on other DNS**.
4. Enter your domain (e.g. `www.yourname.com` or `yourname.com`).
5. Azure will generate DNS validation records:
   - For `www.yourname.com`: A **CNAME** pointing to your Azure default hostname (e.g., `proud-island-12345.azurestaticapps.net`).
   - For apex domain `yourname.com`: An **ALIAS** or **TXT** token for validation.

### 2. In Namecheap DNS Manager
1. Log in to [Namecheap](https://www.namecheap.com).
2. Go to **Domain List** -> Click **Manage** next to your domain.
3. Switch to the **Advanced DNS** tab.
4. Add the following DNS Records:
   - **Type**: `CNAME Record`
     - **Host**: `www`
     - **Value**: `<your-app-name>.azurestaticapps.net`
     - **TTL**: `Automatic`
   - **Type**: `ALIAS Record` or `URL Redirect Record` (for root domain `@` to `www`):
     - **Host**: `@`
     - **Value**: `http://www.yourname.com`
5. Save changes.

### 3. Automatic Free SSL / HTTPS
Azure Static Web Apps automatically generates and renews a **free managed SSL certificate** once DNS propagates (usually 5 to 30 minutes). No manual certificate handling or renewal fees required.

---

## 🔒 Azure Static Web Apps Configuration (`staticwebapp.config.json`)

The included `staticwebapp.config.json` provides:
- **SPA Rewrite Rule**: Routes all client paths back to `/index.html`.
- **Security Headers**:
  - `X-Frame-Options: SAMEORIGIN` (Clickjacking prevention)
  - `X-Content-Type-Options: nosniff` (MIME sniffing prevention)
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Permissions-Policy: camera=(), microphone=(), geolocation=()`
- **Custom MIME Types**: Full support for `.json` and `.pdf` downloads.

---

## 📄 License

MIT License. Designed and authored for modern engineering portfolios. Feel free to use and adapt!
