export interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  icon: string;
  isLive?: boolean;
}

export const projects: Project[] = [
  {
    title: "Lume Analytics Platform",
    description: "A real-time data visualization tool for tracking developer performance metrics using high-frequency data streams.",
    tags: ["NEXT.JS", "TAILWIND", "SUPABASE"],
    githubUrl: "#",
    liveUrl: "#",
    icon: "analytics",
    isLive: true,
  },
  {
    title: "DevFlow Task Engine",
    description: "Mobile-first workflow automation for engineering teams, integrating directly with Jira and GitHub APIs.",
    tags: ["REACT NATIVE", "NODE.JS"],
    githubUrl: "#",
    liveUrl: "#",
    icon: "task_alt",
  },
  {
    title: "Chemistry Adventure Game",
    description: "Educational 2D Unity game teaching high school students about chemical bonding through interactive puzzles and level progression.",
    tags: ["PHP", "MYSQL", "UNITY"],
    githubUrl: "#",
    liveUrl: "#",
    icon: "school",
  },
  {
    title: "Campus Resource Manager",
    description: "A full-stack campus-wide resource management system built with a team of 5 students, used daily by university staff.",
    tags: ["POSTGRESQL", "NODE.JS"],
    githubUrl: "#",
    liveUrl: "#",
    icon: "storage",
  },
];
