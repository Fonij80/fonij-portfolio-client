import { useState } from "react";
import { useTranslation } from "react-i18next";
import { CardList } from '../molecules';
import { WorkExperience, Skills, Projects, Education } from "./";
import { CardProps } from '../constants/types';
import { FaTools, FaBriefcase, FaGraduationCap, FaTasks } from "react-icons/fa";

export const About = () => {
  const { t } = useTranslation();
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleItemClick = (title: string) => {
    setSelectedItem(title);
  };

  const aboutList: CardProps[] = [
    {
      icon: <FaTools />,
      title: t("about.items.one"),
    },
    {
      icon: <FaBriefcase />,
      title: t("about.items.two"),
    },
    {
      icon: <FaGraduationCap />,
      title: t("about.items.three"),
    },
    {
      icon: <FaTasks />,
      title: t("about.items.four"),
    },
  ];

  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          {/* <img
            src={pilot}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          /> */}
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl text-center md:text-4xl font-bold">
                {t("about.title")}
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                {t("about.description")}
              </p>
            </div>

            <CardList
              items={aboutList}
              onItemClick={handleItemClick}
            />
            {selectedItem && (
              <div className="mt-8">
                {selectedItem === "Skills" && <Skills isVisible={selectedItem === "Skills"} />}
                {selectedItem === "Work Experiences" && <WorkExperience />}
                {selectedItem === "Education" && <Education />}
                {selectedItem === "Projects" && <Projects />}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
