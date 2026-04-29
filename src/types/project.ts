export type ProjectCategory =
  | "all"
  | "backend"
  | "front-mobile"
  | "front-web"
  | "messenger-bot";

export type Project = {
  id: number;
  title: string;
  category: Exclude<ProjectCategory, "all">;
  techStack: string[];
  description: string;
  liveUrl?: string;
  githubUrl?: string;
};
