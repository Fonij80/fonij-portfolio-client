import type { Project } from "@/types/project";

export const projectData: Project[] = [
  {
    id: 1,
    title: "Pouleto",
    category: "front-web",
    techStack: ["React", "TypeScript", "Tailwind"],
    description: "Frontend development for a modern product experience.",
    liveUrl: "https://pouleto.com",
  },
  {
    id: 2,
    title: "Django API System",
    category: "backend",
    techStack: ["Django", "DRF", "PostgreSQL"],
    description:
      "Backend API architecture, authentication, and business logic.",
    githubUrl: "https://github.com/yourusername/project",
  },
  {
    id: 3,
    title: "React Native App",
    category: "front-mobile",
    techStack: ["React Native", "Expo", "TypeScript"],
    description: "Mobile app UI and feature implementation.",
  },
];
