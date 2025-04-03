import { Badge } from "../atoms/badge";

const skillList: string[] = [
  "Java",
  "Python",
  "Javascript",
  "Spring",
  "Spring Boot",
  "Django",
  "React.js",
  "Git",
  "Jira",
];

export const Skills = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <section id="skills" className="container py-24 sm:py-32 space-y-8">
      <div className="flex flex-wrap md:justify-center gap-4">
        {skillList.map((skill: string, index: number) => (
          <div
            key={skill}
            className={`transition-all duration-500 ease-in-out ${isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
              }`}
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            <Badge className="text-lg px-4 py-2">
              {skill}
            </Badge>
          </div>
        ))}
      </div>
    </section>
  );
};
