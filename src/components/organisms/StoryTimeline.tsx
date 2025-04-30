import { useState } from "react";
import { motion } from "framer-motion";
import { Slider } from "../ui/slider";
import { Card } from "../ui/card";

// Sample timeline data
const timelineEvents = [
  {
    year: 2002,
    month: 3,
    title: "Born in Tehran",
    description: "I was born on 2nd March 2002 in Tehran, Iran.",
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
const totalSteps = (endYear - startYear + 1) * 12; // months

export const StoryTimeline = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const currentDate = new Date(startYear, 0);
  currentDate.setMonth(currentDate.getMonth() + currentStep);

  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;

  const event = timelineEvents.find(
    (e) => e.year === currentYear && e.month === currentMonth
  );

  const walkerX = (currentStep / totalSteps) * 100;

  return (
    <div className="w-full px-6 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">My Story</h2>

      <div className="relative h-48 border-t border-gray-300">
        {/* Timeline line */}
        <div className="absolute top-1/2 w-full h-1 bg-gray-300" />

        {/* Dummy walker */}
        <motion.div
          className="absolute top-0 -translate-y-2/4"
          style={{ left: `${walkerX}%` }}
          animate={{ left: `${walkerX}%` }}
        >
          <img
            src="/images/walker.png"
            alt="Walker"
            className="w-16 h-16 rounded-full border border-gray-500"
          />
        </motion.div>
      </div>

      {/* Slider */}
      <div className="my-8">
        <Slider
          min={0}
          max={totalSteps - 1}
          value={[currentStep]}
          onValueChange={(val) => setCurrentStep(val[0])}
        />
      </div>

      {/* Event info */}
      <div className="mt-6 flex justify-center">
        {event ? (
          <Card className="w-full max-w-xl p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
            <p className="mb-4">{event.description}</p>
            {event.image && (
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-auto rounded-lg"
              />
            )}
          </Card>
        ) : (
          <p className="text-gray-500 text-center">
            No major event at this point in the timeline.
          </p>
        )}
      </div>
    </div>
  );
};
