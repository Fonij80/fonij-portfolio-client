import { MedalIcon } from "../Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  company: string;
  from: string;
  to: string;
  description: string;
}

const jobsList: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Backend Developer",
    company: "Tosan",
    from: "10/12/2020",
    to: "10/12/2023",
    description:
      "Developed and maintained backend services using Java and Spring Boot. Improved system performance by optimizing database queries and implementing caching strategies.",
  },
  {
    icon: <MedalIcon />,
    title: "Software Engineer",
    company: "Snapp",
    from: "01/01/2018",
    to: "10/11/2020",
    description:
      "Worked on scalable microservices architecture. Collaborated with cross-functional teams to deliver high-quality software solutions.",
  },
  {
    icon: <MedalIcon />,
    title: "Junior Developer",
    company: "TechStart",
    from: "06/01/2016",
    to: "12/31/2017",
    description:
      "Assisted in developing web applications using JavaScript and React. Gained experience in agile methodologies and version control systems.",
  },
];

export const WorkExperience = () => {
  return (
    <section id="workExperience" className="container py-24 sm:py-32">
      {/* Timeline */}
      <div className="relative">
        {/* Center line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-muted"></div>

        {jobsList.map((job, index) => (
          <div key={index} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'
            }`}>
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-primary shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white">{job.icon}</h1>
            </div>
            <div className="order-1 bg-card rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-xl">{job.title}</h3>
              <p className="text-sm font-medium text-muted-foreground">{job.company}</p>
              <p className="text-sm text-muted-foreground mb-3">{job.from} - {job.to}</p>
              <p className="text-sm leading-snug tracking-wide text-opacity-100">{job.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};