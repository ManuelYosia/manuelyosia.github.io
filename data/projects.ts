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
    title: "Educational Unity Game",
    description: "A web-based educational game developed for IT research, teaching core concepts through interactive gameplay. Built using Unity and deployed for academic evaluation.",
    tags: ["UNITY", "C#", "WEBGL"],
    githubUrl: "#",
    liveUrl: "#",
    icon: "sports_esports",
    isLive: true,
  },
  {
    title: "Solution Challenge SDG App",
    description: "A digital solution designed to address UN Sustainable Development Goals as part of the Google Solution Challenge. Focused on workflow optimization and progress tracking.",
    tags: ["REACT", "NOTION API", "NODE.JS"],
    githubUrl: "#",
    liveUrl: "#",
    icon: "public",
  },
  {
    title: "Business Model Analysis",
    description: "Analysis of a real-world business case using the BMC framework, developed during a hackathon at Universitas Ciputra.",
    tags: ["RESEARCH", "STRATEGY"],
    githubUrl: "#",
    liveUrl: "#",
    icon: "business_center",
  },
];
