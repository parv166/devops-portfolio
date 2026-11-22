export interface PersonalInfo {
  name: string;
  headline: string;
  subheadline: string;
  shortBio: string;
  location: string;
  status: {
    available: boolean;
    label: string;
  };
  terminalGreeting: string;
}

export interface AboutInfo {
  introduction: string;
  educationalBackground: string;
  careerInterests: string;
  technicalInterests: string[];
  professionalGoals: string;
  keyHighlights: {
    label: string;
    description: string;
  }[];
}

export interface SocialLinks {
  github: string;
  linkedin?: string;
  email: string;
  twitter?: string;
}

export type SkillCategory = 
  | 'Cloud'
  | 'Containers & Orchestration'
  | 'CI/CD & GitOps'
  | 'Infrastructure as Code'
  | 'Security'
  | 'Operating Systems'
  | 'Programming & Scripting';

export interface SkillItem {
  name: string;
  category: SkillCategory;
  iconKey: string;
  tag?: string;
  featured?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  liveUrl?: string;
  workflow?: string;
  keyFeatures: string[];
  myContribution: string;
  architectureHighlights?: string[];
  limitations?: string[];
  featured?: boolean;
}

export interface EducationItem {
  degree: string;
  institution?: string;
  period: string;
  location?: string;
  relevantCoursework?: string[];
  achievements?: string[];
}

export interface CertificationItem {
  name: string;
  issuer: string;
  issueDate: string;
  credentialUrl?: string;
  badgeId?: string;
  status: 'Active' | 'In Progress' | 'Planned';
}

export interface ResumeConfig {
  available: boolean;
  fileUrl: string;
  fileName: string;
  lastUpdated?: string;
}

export interface ContactInfo {
  email: string;
  linkedin?: string;
  github: string;
  location: string;
  availabilityNote: string;
  preferredContactMethod: 'email' | 'linkedin';
}

export interface PortfolioData {
  personal: PersonalInfo;
  about: AboutInfo;
  socialLinks: SocialLinks;
  skills: SkillItem[];
  projects: ProjectItem[];
  education: EducationItem[];
  certifications: CertificationItem[];
  resume: ResumeConfig;
  contact: ContactInfo;
}
