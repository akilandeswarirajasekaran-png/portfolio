export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  score: string;
  period?: string;
  highlights?: string[];
}

export interface SkillItem {
  name: string;
  category: 'core' | 'language' | 'design' | 'database';
}

export interface PreferredItem {
  title: string;
  description: string;
  iconName: string;
}

export interface InternshipItem {
  id: string;
  organization: string;
  roleOrArea: string;
  description: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
}
