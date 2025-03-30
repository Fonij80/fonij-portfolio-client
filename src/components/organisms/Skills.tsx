import { Badge } from "../atoms/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/atoms/card";
import image from "../../assets/growth.png";
import image3 from "../../assets/reflecting.png";
import image4 from "../../assets/looking-ahead.png";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Responsive Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
    image: image4,
  },
  {
    title: "Intuitive user interface",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
    image: image3,
  },
  {
    title: "AI-Powered insights",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
    image: image,
  },
];

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
    <section
      id="skilld"
      className="container py-24 sm:py-32 space-y-8"
    >
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
            <Badge variant="secondary" className="text-sm">
              {skill}
            </Badge>
          </div>
        ))}
      </div>
      {/* Beautiful Card */}
      {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <img
                src={image}
                alt="About feature"
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div> */}
    </section>
  );
};