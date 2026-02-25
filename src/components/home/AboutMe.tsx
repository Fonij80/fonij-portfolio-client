import { useTranslation } from "react-i18next";
import { SocialLink } from "@/components/ui/custom";
import { FaYoutube, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import personal_data from "@/constants/personal_data.json";

export const AboutMe = () => {
  const { t } = useTranslation();

  const handleScrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="flex w-full flex-col gap-6 text-center lg:max-w-2xl lg:text-left">
      <div className="space-y-3">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-indigo-300">
          {t("home_page.hero.badge", "Frontend Developer")}
        </p>
        <h1 className="text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl">
          {t("home_page.hero.intro", "Hi, I’m") + " "}
          <span className="bg-gradient-to-r from-indigo-300 via-violet-400 to-fuchsia-300 bg-clip-text text-transparent">
            {t("home_page.hero.name", "Foroozan Iraji")}
          </span>
          {t(
            "home_page.hero.verb",
            ", and I build interfaces that feel fast, clear, and reliable.",
          )}
        </h1>
      </div>

      <p className="text-base text-slate-300 md:text-lg">
        {t(
          "home_page.hero.description",
          "I specialize in modern frontend architectures with React and Next.js, turning product ideas into performant, maintainable interfaces with a strong focus on DX, accessibility, and long‑term scalability.",
        )}
      </p>

      <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
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

      <div className="mt-3 flex items-center justify-center gap-4 lg:justify-start">
        <SocialLink href={personal_data.social_links.youtube} label="YouTube">
          <FaYoutube size={26} />
        </SocialLink>
        <SocialLink href={personal_data.social_links.linkedin} label="LinkedIn">
          <FaLinkedin size={26} />
        </SocialLink>
        <SocialLink href={personal_data.social_links.github} label="Github">
          <FaGithub size={26} />
        </SocialLink>
        <SocialLink href={personal_data.social_links.twitter} label="X">
          <FaTwitter size={26} />
        </SocialLink>
      </div>
    </div>
  );
};
