export interface Profile {
  name: string;
  roleTitle: string;
  status: string;
  location: string;
  shortBio: string;
  fullBio: string[];
  email: string;
  github: string;
  linkedin: string;
  twitter?: string;
  resumeUrl: string;
  primaryFocus: string[];
  seeking: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  problem: string;
  approach: string;
  architecture?: string[];
  technologies: string[];
  implementationDetails: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  imageUrl?: string;
  featured: boolean;
  metrics?: string[];
  category: 'Full-Stack' | 'Backend & Systems' | 'Developer Tools' | 'Web Applications';
}

export interface SkillCategory {
  title: string;
  description?: string;
  skills: string[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  type: string;
  highlights: string[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  details?: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  link?: string;
}
