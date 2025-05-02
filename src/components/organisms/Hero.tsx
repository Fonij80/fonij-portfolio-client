import myImage from "@/assets/images/profile_image.png";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { CustomWorldMap } from "@/components/ui/extra";

export const Hero = () => {
  const { t } = useTranslation();

  const scrollToSelectedSection = (sectionName: string) => {
    const section = document.getElementById(sectionName);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen w-full flex">
      {/* Background Map */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <CustomWorldMap />
      </div>

      {/* Main Content */}
      <div className="container mx-auto flex flex-col-reverse lg:grid lg:grid-cols-2 items-center pt-16 pb-10 gap-10 relative z-10 text-center">
        {/* Text Section */}
        <div className="space-y-6 w-full lg:text-start">
          <h1 className="text-5xl md:text-6xl font-bold">
            {t("hero.intro")}{" "}
            <span className="bg-gradient-to-r from-[#F596D3] to-[#D247BF] bg-clip-text text-transparent">
              {t("hero.name")}
            </span>
            ,{" "}
            <span className="bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] bg-clip-text text-transparent">
              {t("hero.role")}
            </span>
          </h1>

          <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
            {t("hero.description")}
          </p>

          <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
            <Button
              className="w-full md:w-auto"
              onClick={() => scrollToSelectedSection("my-story")}
            >
              {t("hero.my_story_btn")}
            </Button>
            <Button
              className="w-full md:w-auto"
              onClick={() => scrollToSelectedSection("hire")}
              disabled
            >
              {t("hero.hire_btn")}
            </Button>
          </div>
        </div>

        {/* Profile Image Section */}
        <div className="w-72 h-72 rounded-full overflow-hidden justify-self-center">
          <img
            src={myImage}
            alt="Foroozan Iraji"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};
