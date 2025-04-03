import { useTranslation } from 'react-i18next';
import { Card, CardDescription, CardHeader, CardTitle } from "../atoms/card";
import { ProjectDetailsType } from '../../constants/types';

export const ProjectDetailsCard = ({ title, description, logo, link }: ProjectDetailsType) => {
  const { t } = useTranslation();

  return (
    <Card key={title} className="w-full">
      <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
        <div className="mt-1 bg-primary/20 p-1 rounded-2xl">{logo}</div>
        <div>
          <CardTitle>{title}</CardTitle>
          <CardDescription className="text-md mt-2">{description}</CardDescription>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-medium mt-4 block"
          >
            {t("about.projects.demo_btn")}
          </a>
        </div>
      </CardHeader>
    </Card>
  )
}