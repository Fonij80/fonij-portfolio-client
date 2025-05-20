import { useState } from "react";
import { motion } from "framer-motion";
import { Slider } from "../ui/slider";
import { Card } from "../ui/card";
import myImage from "@/assets/images/profile_image.png";
import { useTranslation } from "react-i18next";

const timelineEvents = [
  {
    year: 2002,
    month: 3,
    title: "Born in Yazd",
    description: "I was born on 2nd March 2002 in Yazd, Iran.",
  },
  {
    year: 2008,
    month: 9,
    title: "Started School",
    description: "First day of elementary school.",
    image: "/images/school.jpg",
  },
  {
    year: 2015,
    month: 6,
    title: "Won Science Fair",
    description: "Won first place in city science fair.",
  },
  {
    year: 2020,
    month: 7,
    title: "Started University",
    description: "Began my university journey in Sharif University.",
    image: "/images/university.jpg",
  },
  {
    year: 2024,
    month: 12,
    title: "Internship at Google",
    description: "First international internship in Switzerland.",
  },
];

const startYear = 2002;
const endYear = new Date().getFullYear();
const totalSteps = (endYear - startYear + 1) * 12;

export const StoryTimeline = () => {
  const { t } = useTranslation();
  const [currentStep, setCurrentStep] = useState(0);

  const currentDate = new Date(startYear, 0);
  currentDate.setMonth(currentDate.getMonth() + currentStep);

  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;

  // Calculate walker position (0% to 100%)
  const walkerX = (currentStep / totalSteps) * 100;

  // Array of years to render markers for
  const years = [];
  for (let y = startYear; y <= endYear; y++) years.push(y);

  // Helper: Calculate marker position in percentage based on year
  const yearToPercent = (year: number) => {
    const yearIndex = year - startYear;
    const totalYears = endYear - startYear;
    return (yearIndex / totalYears) * 100;
  };

  return (
    <div id="my-story" className="w-full min-h-screen px-6 py-40">
      <h2 className="text-3xl font-bold mb-12 text-center">
        {t("home_page.my_story.title")}
      </h2>

      <div className="relative w-full max-w-6xl mx-auto">
        {/* Timeline line */}
        {/* Timeline line */}
        <div className="relative h-32">
          {/* The timeline line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-300 -translate-y-1/2" />

          {/* Year markers */}
          {years.map((year) => {
            const leftPercent = yearToPercent(year);
            const eventForYear = timelineEvents.find((e) => e.year === year);

            const isCurrentEvent =
              eventForYear &&
              eventForYear.year === currentYear &&
              eventForYear.month === currentMonth;

            return (
              <div
                key={year}
                className="absolute flex flex-col items-center"
                style={{
                  left: `${leftPercent}%`,
                  // Position vertically centered on the timeline line:
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 80, // optional fixed width to prevent layout shift
                }}
              >
                {/* Marker circle centered on timeline */}
                <div
                  className={`w-4 h-4 rounded-full border-2 shadow-md ${
                    isCurrentEvent
                      ? "bg-blue-600 border-blue-800"
                      : "bg-gray-400 border-white"
                  }`}
                />

                {/* Year label below the circle */}
                <span className="mt-2 text-xs font-semibold text-gray-700">
                  {year}
                </span>

                {/* Show event info only if slider is on this event's date */}
                {isCurrentEvent && eventForYear && (
                  <Card className="mt-40 w-64 p-4 shadow-md text-center">
                    <h3 className="text-lg font-semibold">
                      {eventForYear.title}
                    </h3>
                    <p className="text-sm mt-1">{eventForYear.description}</p>
                    {eventForYear.image && (
                      <img
                        src={eventForYear.image}
                        alt={eventForYear.title}
                        className="mt-2 mx-auto rounded-lg max-h-32 object-cover"
                      />
                    )}
                  </Card>
                )}
              </div>
            );
          })}

          {/* Slider walker */}
          <motion.div
            className="absolute top-1/2 -translate-y-1/2"
            style={{ left: `${walkerX}%` }}
            animate={{ left: `${walkerX}%` }}
          >
            <img
              src={myImage}
              alt="Walker"
              className="w-16 h-16 rounded-full"
            />
          </motion.div>
        </div>

        {/* Slider */}
        <div className="my-8 max-w-4xl mx-auto mt-40">
          <Slider
            min={0}
            max={totalSteps - 1}
            value={[currentStep]}
            onValueChange={(val) => setCurrentStep(val[0])}
          />
        </div>
      </div>
    </div>
  );
};
