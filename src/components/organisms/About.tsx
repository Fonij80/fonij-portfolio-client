import { useState } from "react";
import { useTranslation } from "react-i18next";
import { IconList } from "../molecules";
import { WorkExperience, Skills, Projects, Education } from "./";
import { FaTools, FaBriefcase, FaGraduationCap, FaTasks } from "react-icons/fa";

const aboutIcons = [
  { icon: <FaTools />, key: "about.items.one" },
  { icon: <FaBriefcase />, key: "about.items.two" },
  { icon: <FaGraduationCap />, key: "about.items.three" },
  { icon: <FaTasks />, key: "about.items.four" },
];

const AboutContent = ({ selectedItem }: { selectedItem: string | null }) => {
  if (!selectedItem) return null;

  switch (selectedItem) {
    case "about.items.one":
      return <Skills isVisible={true} />;
    case "about.items.two":
      return <WorkExperience />;
    case "about.items.three":
      return <Education />;
    case "about.items.four":
      return <Projects />;
    default:
      return null;
  }
};

export const About = () => {
  const { t } = useTranslation();
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleItemClick = (index: number) => {
    setSelectedItem(aboutIcons[index].key);
  };

  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="bg-muted/50 border rounded-lg py-12 px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
        <div className="bg-green-0 flex flex-col justify-between">
          {/* Header */}
          <div className="pb-6">
            <h2 className="text-3xl text-center md:text-4xl font-bold">
              {t("about.title")}
            </h2>
            <p className="text-xl text-muted-foreground mt-4">
              {t("about.description")}
            </p>
          </div>

          <IconList
            icons={aboutIcons.map((item) => item.icon)}
            onItemClick={handleItemClick}
          />

          <div className="mt-8">
            <AboutContent selectedItem={selectedItem} />
          </div>
        </div>
      </div>
    </section>
  );
};
