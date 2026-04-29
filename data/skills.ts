export interface SkillCategory {
  title: string;
  description: string;
  icon: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    description: "Building pixel-perfect, responsive interfaces",
    icon: "layers",
    skills: ["React & Next.js", "Tailwind CSS", "TypeScript", "HTML & CSS", "JavaScript"],
  },
  {
    title: "Backend",
    description: "Designing scalable APIs and data systems",
    icon: "database",
    skills: ["Node.js", "PostgreSQL", "PHP", "MySQL", "REST API"],
  },
  {
    title: "Tools",
    description: "The environment powering my workflow",
    icon: "construction",
    skills: ["Git & GitHub", "Figma", "Docker", "Supabase", "Postman", "Vite"],
  },
];
