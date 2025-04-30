import WorldMap from "react-svg-worldmap";
import myImage from "@/assets/images/profile_image.png";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const { t } = useTranslation();

  const data = [{ country: "ir", value: 1 }];

  const scrollToSelectedSection = (sectionName: string) => {
    const section = document.getElementById(sectionName);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="relative h-screen w-full">
      {/* <CustomWorldMap /> */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <WorldMap
          color="#BF817F"
          backgroundColor={"transparent"}
          borderColor="#BF817F"
          size="xxl"
          data={data}
        />
      </div>

      <div className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10 relative z-10">
        {/* <HeroContent /> */}
        <div className="text-center lg:text-start space-y-6">
          <main className="text-5xl md:text-6xl font-bold">
            <h1 className="inline">
              I'm{" "}
              <span className="inline bg-gradient-to-r from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text">
                Foroozan Iraji
              </span>
              , a
            </h1>{" "}
            <h2 className="inline">
              <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
                Developer
              </span>
            </h2>
          </main>

          <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
            {t("hero.description")}
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Button
              className="w-full md:w-1/3"
              onClick={() => scrollToSelectedSection("hire")}
              disabled={true}
            >
              {t("hero.hire_btn")}
            </Button>
            <Button
              className="w-full md:w-1/3"
              onClick={() => scrollToSelectedSection("about")}
            >
              {t("hero.about_btn")}
            </Button>
          </div>
        </div>

        {/* <ProfileImage /> */}
        <div className="z-10 rounded-full overflow-hidden w-96 h-auto mx-auto lg:ml-80">
          <img
            src={myImage}
            alt="Foroozan Iraji"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="shadow"></div>
      </div>
    </section>
  );
};
