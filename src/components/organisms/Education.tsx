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

const featureList: string[] = [
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

export const Education = () => {
    return (
        <section
            id="features"
            className="container py-24 sm:py-32 space-y-8"
        >
            <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
                My Skills
            </h2>

            <div className="flex flex-wrap md:justify-center gap-4">
                {featureList.map((feature: string) => (
                    <div key={feature}>
                        <Badge
                            variant="secondary"
                            className="text-sm"
                        >
                            {feature}
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

export default Education;