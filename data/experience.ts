export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  isCurrent?: boolean;
}

export const experiences: Experience[] = [
  {
    role: "Project Manager — IT Research Team",
    company: "Universitas Wijaya Kusuma Surabaya",
    period: "JULY 2024 — JANUARY 2025",
    description: "Led a cross-functional team in developing a web-based educational game using Unity for academic research. Managed task distribution, timelines, and team communication to ensure the project was delivered on schedule and aligned with research objectives.",
    isCurrent: false,
  },
  {
    role: "Team Lead — Hackathon",
    company: "Universitas Ciputra",
    period: "MARCH 2024",
    description: "Led a team in analyzing a real-world business case using the Business Model Canvas framework. Facilitated structured discussions and presented the final solution to a panel of evaluators.",
  },
  {
    role: "Project Manager — Google Solution Challenge",
    company: "Google Developer Student Clubs",
    period: "SEPTEMBER 2023 — JANUARY 2024",
    description: "Coordinated a team in developing an SDG-aligned solution for a global challenge. Managed workflow, task assignments, and progress tracking using Notion to maintain alignment and ensure timely delivery.",
  },
];
