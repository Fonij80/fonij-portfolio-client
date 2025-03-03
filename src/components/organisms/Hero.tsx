import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Button } from "../atoms/button";
import myImage from "../../assets/Me.png";
import WorldMap from "react-svg-worldmap";

export const Hero = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const data = [
    { country: "ir", value: 1 },
  ];

  return (
    <section className="relative h-screen w-full">
      {/* World Map */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <WorldMap
          color="#BF817F"
          backgroundColor={"transparent"}
          borderColor="#BF817F"
          title=""
          value-suffix=""
          size="xxl"
          data={data}
        />
      </div>

      {/* Hero Content */}
      <div className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10 relative z-10">
        <div className="text-center lg:text-start space-y-6">
          <main className="text-5xl md:text-6xl font-bold">
            <h1 className="inline">
              I'm{" "}
              <span className="inline bg-gradient-to-r from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text">
                Foroozan Iraji
              </span>,{" "}
              a
            </h1>{" "}
            <h2 className="inline">
              <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
                Developer
              </span>
            </h2>
          </main>

          <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
            Build your React landing page effortlessly with the required sections for your project.
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Button
              className="w-full md:w-1/3"
              onClick={() => navigate("/hire")}
            >
              {t("hero.hire_btn")}
            </Button>
            <Button
              className="w-full md:w-1/3"
              onClick={scrollToAbout}
            >
              {t("hero.about_btn")}
            </Button>
          </div>
        </div>

        {/* Profile Picture in a Circle */}
        <div className="z-10">
          <div className="rounded-full overflow-hidden shadow-lg w-96 h-auto mx-auto lg:ml-80">
            <img
              src={myImage}
              alt="Foroozan Iraji"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        {/* Shadow effect */}
        <div className="shadow"></div>
      </div>
    </section>
  );
};

export default Hero;
