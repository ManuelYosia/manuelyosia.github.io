export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  isCurrent?: boolean;
}

export const experiences: Experience[] = [
  {
    role: "Open Source Contributor",
    company: "Global Dev Community",
    period: "2023 — PRESENT",
    description: "Actively maintaining several React component libraries and contributing to large-scale CSS-in-JS frameworks used by thousands of developers worldwide.",
    isCurrent: true,
  },
  {
    role: "Lead Developer (Academic)",
    company: "University Informatics Lab",
    period: "2022 — 2023",
    description: "Headed a team of 5 students to build a campus-wide resource management system using PostgreSQL and Node.js, delivering the project on time for 1,200+ active users.",
  },
  {
    role: "Junior Web Intern",
    company: "Nexus Tech Solutions",
    period: "2021 — 2022",
    description: "Assisted in the migration of legacy jQuery codebases to modern React.js architectures for corporate clients, reducing load time by 40%.",
  },
];
