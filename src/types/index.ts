export interface Paper {
  id: string;
  title: string;
  titleEn?: string;
  authors: string[];
  venue: string;
  year: number;
  abstract: string;
  tags: string[];
  pdfUrl?: string;
  doi?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
  logo?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  imageUrl?: string;
  featured: boolean;
}

export interface Profile {
  name: string;
  nameEn: string;
  title: string;
  bio: string;
  university: string;
  department: string;
  email: string;
  github?: string;
  twitter?: string;
  linkedin?: string;
  skills: SkillCategory[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface NavItem {
  label: string;
  href: string;
}
