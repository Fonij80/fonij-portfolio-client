import { ProjectDetailsCard } from '../molecules';
import { FaTools } from "react-icons/fa";
import { ProjectDetailsType } from '../../constants/types';

const projectsList: ProjectDetailsType[] = [
  {
    title: "Baristoosh",
    description:
      "A platform for developers to collaborate on code in real-time.",
    logo: <FaTools />,
    link: "https://code-collaboration-demo.com",
  },
  {
    title: "Celebrate It",
    description:
      "An intuitive tool for managing projects and tracking progress.",
    logo: <FaTools />,
    link: "https://project-management-demo.com",
  },
  {
    title: "FilmGozin",
    description:
      "Automate repetitive tasks to save time and increase efficiency.",
    logo: <FaTools />,
    link: "https://task-automation-demo.com",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsList.map(({ logo, title, description, link }: ProjectDetailsType) => (
          <ProjectDetailsCard title={title} description={description} logo={logo} link={link} />
        ))}
      </div>
    </section>
  );
};
