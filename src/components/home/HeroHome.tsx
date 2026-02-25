import myImage from "@/assets/profile-image.png";
import personal_data from "@/constants/personal_data.json";
import { useTranslation } from "react-i18next";

export const HeroHome = () => {
  const { t } = useTranslation();

  const handleScrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-slate-950 text-slate-50">
      {/* background */}
      {/* <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center opacity-20">
        <CustomWorldMap />
      </div> */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950" />

      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 pt-24 md:flex-row md:items-center md:justify-between md:px-10 lg:px-12 lg:pt-28">
        {/* تصویر */}
        <div className="shrink-0">
          <div className="relative h-40 w-40 overflow-hidden rounded-full border border-slate-700 bg-slate-900 shadow-2xl shadow-indigo-500/20 transition-transform duration-300 hover:scale-105 md:h-48 md:w-48">
            <img
              src={myImage}
              alt="Foroozan Iraji"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-indigo-500/30 via-transparent to-purple-500/30" />
          </div>
        </div>

        {/* متن کوتاه هیرو */}
        <div className="flex max-w-xl flex-col gap-5 text-center md:text-left">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-indigo-300">
            {t("home_page.hero.badge", "Frontend Developer")}
          </p>
          <h1 className="text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl">
            {t("home_page.hero.intro", "Hi, I’m") + " "}
            <span className="bg-gradient-to-r from-indigo-300 via-violet-400 to-fuchsia-300 bg-clip-text text-transparent">
              {t("home_page.hero.name", "Foroozan Iraji")}
            </span>
            {t(
              "home_page.hero.verb",
              ", building fast, clear web experiences.",
            )}
          </h1>
          <p className="text-sm text-slate-300 md:text-base">
            {t(
              "home_page.hero.description_short",
              "I focus on clean frontend architectures, solid UX, and reliable shipping for modern web products.",
            )}
          </p>

          <div className="mt-1 flex flex-col items-center gap-3 sm:flex-row sm:justify-start">
            <button
              onClick={handleScrollToProjects}
              className="inline-flex items-center justify-center rounded-full bg-indigo-500 px-6 py-2.5 text-sm font-medium text-slate-50 shadow-lg shadow-indigo-500/30 transition hover:bg-indigo-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
            >
              {t("home_page.hero.primary_cta", "View projects")}
            </button>

            <a
              href={personal_data.resume_url}
              download
              className="inline-flex items-center justify-center rounded-full border border-slate-600 px-6 py-2.5 text-sm font-medium text-slate-100 transition hover:border-indigo-400 hover:text-indigo-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
            >
              {t("home_page.hero.secondary_cta", "Download CV")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
