import { Statistics } from "../Statistics";
import pilot from "../../assets/pilot.png";

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={pilot}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                About Me
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                I am a final-semester Computer Engineering student at Sharif University of Technology, currently working as a Backend Developer in the ATM team at TOSAN. Through this role, I have gained valuable experience in teamwork, scrum-based project management, and have developed proficiency in Java and the Spring framework. I am actively expanding my skill set by learning Frontend technologies, with the goal of becoming a Full Stack Developer. My passion for technology extends beyond coding; I have a strong interest in product management and digital product design. I am eager to pursue an internship in product management to gain hands-on experience and contribute to impactful projects within the software industry.
                I am currently converting some of my ideas into software projects, which I store in my GitHub account. I also push my learning code into the "Learn" repositories I have created.
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;