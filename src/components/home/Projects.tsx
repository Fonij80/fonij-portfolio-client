import { useTranslation } from "react-i18next";

type Project = {
  id: string;
  name: string;
  oneLiner: string;
  tech: string[];
  role: string;
  liveUrl?: string;
  githubUrl?: string;
  highlight?: boolean;
};

const projects: Project[] = [
  {
    id: "project-1",
    name: "Product Studio Dashboard",
    oneLiner:
      "A modular analytics dashboard for SaaS founders to monitor growth, churn, and feature adoption in real time.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "React Query"],
    role: "End‑to‑end frontend architecture, design system, and performance optimization.",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/foroozan/example",
    highlight: true,
  },
  {
    id: "project-2",
    name: "Content Automation Toolkit",
    oneLiner:
      "A browser‑based tool to batch‑generate marketing assets with AI and export‑ready templates.",
    tech: ["React", "Vite", "Zustand", "Shadcn UI"],
    role: "State management, complex forms, and integrations with external APIs.",
    githubUrl: "https://github.com/foroozan/example2",
  },
  {
    id: "project-3",
    name: "Multi‑language Landing System",
    oneLiner:
      "Reusable landing page templates with localization, A/B testing hooks, and analytics baked‑in.",
    tech: ["Next.js", "i18next", "Framer Motion"],
    role: "Architecture, routing, and implementation of a minimal design system.",
  },
];

export const Projects = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="space-y-6">
      <header className="space-y-2">
        <h2 className="text-xl font-semibold text-slate-50 md:text-2xl">
          {t("home_page.projects.title", "Featured projects")}
        </h2>
        <p className="text-sm text-slate-400 md:text-base">
          {t(
            "home_page.projects.subtitle",
            "A selection of recent work that shows how I approach product, performance, and developer experience.",
          )}
        </p>
      </header>

      <div className="space-y-4">
        {projects.map((project) => (
          <article
            key={project.id}
            className={`group rounded-2xl border border-slate-800/80 bg-slate-900/40 p-5 shadow-sm transition hover:border-indigo-400/70 hover:bg-slate-900/70 hover:shadow-lg hover:shadow-indigo-500/20 ${
              project.highlight ? "ring-1 ring-indigo-500/30" : ""
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-base font-semibold text-slate-50 md:text-lg">
                  {project.name}
                </h3>
                <p className="mt-1 text-sm text-slate-300 md:text-[0.95rem]">
                  {project.oneLiner}
                </p>
              </div>
              {project.highlight && (
                <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-200">
                  {t("home_page.projects.highlight_badge", "Latest")}
                </span>
              )}
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-slate-800/80 px-2.5 py-1 text-xs text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>

            <p className="mt-3 text-xs text-slate-400 md:text-sm">
              {project.role}
            </p>

            <div className="mt-4 flex flex-wrap gap-3 text-sm font-medium">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-indigo-300 underline-offset-4 transition hover:text-indigo-200 hover:underline"
                >
                  {t("home_page.projects.live_link", "Live demo")}
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-300 underline-offset-4 transition hover:text-slate-100 hover:underline"
                >
                  {t("home_page.projects.github_link", "GitHub")}
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
