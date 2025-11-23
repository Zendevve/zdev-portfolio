export enum TechStack {
  CPP = 'C++',
  TypeScript = 'TypeScript',
  Lua = 'Lua',
  React = 'React',
  SCSS = 'SCSS',
  HTML = 'HTML',
  JavaScript = 'JavaScript'
}

export enum Domain {
  SYSTEMS = 'Systems Engineering',
  WEB = 'Modern Web',
  EMBEDDED = 'Embedded/Scripting',
  UIUX = 'UI/UX Architecture'
}

export interface Project {
  id: string;
  name: string;
  description: string;
  tech: TechStack[];
  domain: Domain;
  metrics?: string; // Qualitative metric since quantitative is missing
  isFork: boolean;
  highlight: boolean;
}

export interface StatPoint {
  subject: string;
  A: number;
  fullMark: number;
}
