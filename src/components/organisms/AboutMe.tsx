import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { SocialLink } from "../ui/extra";
import { FaYoutube, FaGithub, FaLinkedin } from "react-icons/fa";
import personal_data from "@/constants/personal_data.json";

export const AboutMe = () => {
  const { t } = useTranslation();

  const scrollToSelectedSection = (sectionName: string) => {
    const section = document.getElementById(sectionName);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="text-center lg:text-start space-y-6">
      <main className="text-4xl md:text-5xl font-bold max-w-3xl mx-auto">
        <h1>
          {t("home_page.hero.intro")}{" "}
          <span className="bg-gradient-to-r from-[#dab4f5] to-[#4B0082] bg-clip-text text-transparent">
            {t("home_page.hero.name")}
          </span>
          {t("home_page.hero.verb")}
          {/* <span className="bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] bg-clip-text text-transparent">
            {t("home_page.hero.role")}
          </span> */}
        </h1>
      </main>

      <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
        {t("home_page.hero.description")}
      </p>

      <div className="space-y-4 md:space-y-0 md:space-x-4">
        <Button
          className="w-full md:w-1/3"
          onClick={() => scrollToSelectedSection("my-story")}
        >
          {t("home_page.hero.my_story_btn")}
        </Button>
        {/* <Button
          className="w-full md:w-1/3"
          onClick={() => scrollToSelectedSection("hore")}
          disabled
        >
          {t("home_page.hero.hire_btn")}
        </Button> */}
      </div>
      <div className="flex flex-row gap-6 mt-6">
        <SocialLink
          href={personal_data.social_links.youtube}
          label="YouTube"
          // className="text-red-600 hover:text-red-800"
        >
          <FaYoutube size={40} />
        </SocialLink>
        <SocialLink
          href={personal_data.social_links.linkedin}
          label="LinkedIn"
          // className="text-blue-600 hover:text-blue-800"
        >
          <FaLinkedin size={40} />
        </SocialLink>
        <SocialLink
          href={personal_data.social_links.github}
          label="Github"
          // className="text-gray-800 hover:text-gray-600"
        >
          <FaGithub size={40} />
        </SocialLink>
      </div>
    </div>
  );
};
