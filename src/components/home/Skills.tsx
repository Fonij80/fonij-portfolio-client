import { useTranslation } from "react-i18next";

export const Skills = () => {
  const { t } = useTranslation();

  return (
    <section id="skills" className="space-y-6">
      <header className="space-y-2">
        <h2 className="text-xl font-semibold text-slate-50 md:text-2xl">
          {t("home_page.skills.title", "Skills & tools")}
        </h2>
        <p className="text-sm text-slate-400 md:text-base">
          {t(
            "home_page.skills.subtitle",
            "Focused on modern frontend stacks, maintainable codebases, and shipping reliably.",
          )}
        </p>
      </header>

      <div className="grid gap-5 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-4">
          <h3 className="text-sm font-semibold text-slate-200">
            {t("home_page.skills.languages", "Languages")}
          </h3>
          <p className="mt-2 text-sm text-slate-300">
            TypeScript, JavaScript, HTML, CSS
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-4">
          <h3 className="text-sm font-semibold text-slate-200">
            {t("home_page.skills.frameworks", "Frameworks & libraries")}
          </h3>
          <p className="mt-2 text-sm text-slate-300">
            React, Next.js, Vite, Tailwind CSS, Zustand, React Query
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-4">
          <h3 className="text-sm font-semibold text-slate-200">
            {t("home_page.skills.tools", "Tools")}
          </h3>
          <p className="mt-2 text-sm text-slate-300">
            Git, GitHub, Docker, Figma, Storybook, Vitest / Jest
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-4">
          <h3 className="text-sm font-semibold text-slate-200">
            {t("home_page.skills.concepts", "Concepts")}
          </h3>
          <p className="mt-2 text-sm text-slate-300">
            SPA/SSR/ISR, REST APIs, authentication flows, performance
            optimization, accessibility basics, testing mindset
          </p>
        </div>
      </div>
    </section>
  );
};
