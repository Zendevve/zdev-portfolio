import { Domain, Project, TechStack, StatPoint } from './types';

export const PROFILE = {
  alias: "ZENDEVVE",
  username: "zdev",
  motto: "Engineering the future, one line at a time.",
  tagline: "ARCHITECTURAL VERSATILITY // SYSTEMS & WEB",
  summary: "A multi-disciplinary engineer bridging the gap between high-performance systems (C++), embedded scripting (Lua), and type-safe modern web architecture (TypeScript). Prioritizing rigorous code integrity and architectural complexity over volume."
};

export const PROJECTS: Project[] = [
  {
    id: "001",
    name: "vector-game",
    description: "Grid-based challenge logic implementation. Demonstrates a pivot to defensive programming and type safety in modern application architecture.",
    tech: [TechStack.TypeScript, TechStack.React],
    domain: Domain.WEB,
    metrics: "Type-Safe Architecture",
    isFork: false,
    highlight: true
  },
  {
    id: "002",
    name: "v-hud",
    description: "Systems-level UI re-implementation for GTA: San Andreas. Involves memory management, rendering logic, and low-level performance optimization.",
    tech: [TechStack.CPP],
    domain: Domain.SYSTEMS,
    metrics: "Direct Memory Mgmt",
    isFork: true,
    highlight: true
  },
  {
    id: "003",
    name: "ZenBags",
    description: "Specialized WoW add-on interacting with proprietary APIs. Requires meticulous domain-specific scripting and embedded environment management.",
    tech: [TechStack.Lua],
    domain: Domain.EMBEDDED,
    metrics: "Proprietary API Logic",
    isFork: false,
    highlight: true
  },
  {
    id: "004",
    name: "CreArts-Discord",
    description: "Advanced theming and UI adaptation using pre-processors. Focus on maintainability and modular design systems.",
    tech: [TechStack.SCSS],
    domain: Domain.UIUX,
    metrics: "Modular Design System",
    isFork: true,
    highlight: false
  },
  {
    id: "005",
    name: "ipt101-calculator",
    description: "Core algorithm implementation for web/application utility.",
    tech: [TechStack.JavaScript, TechStack.HTML],
    domain: Domain.WEB,
    metrics: "Algorithm Implementation",
    isFork: false,
    highlight: false
  }
];

// Radar chart data representing the "Versatility" mentioned in the report
export const SKILL_DATA: StatPoint[] = [
  { subject: 'Systems (C++)', A: 85, fullMark: 100 },
  { subject: 'Architecture (TS)', A: 95, fullMark: 100 },
  { subject: 'Scripting (Lua)', A: 80, fullMark: 100 },
  { subject: 'UI/UX (SCSS)', A: 70, fullMark: 100 },
  { subject: 'Web Foundations', A: 90, fullMark: 100 },
  { subject: 'Adaptability', A: 100, fullMark: 100 },
];
