import { useTranslation } from "react-i18next";
import { buttonVariants } from "../button";
import { NavLink } from "react-router-dom";

interface NavigationLinkProps {
  labelKey: string;
  href: string;
  onClick?: () => void;
}

export const NavigationLink = ({
  labelKey,
  href,
  onClick,
}: NavigationLinkProps) => {
  const { t } = useTranslation();

  return (
    <NavLink
      key={labelKey}
      to={href}
      onClick={onClick}
      className={({ isActive }) =>
        isActive
          ? `${buttonVariants({
              variant: "ghost",
            })} text-secondary-500 border-b-2 border-secondary-500 bg-blue-200 text-lg font-bold`
          : `${buttonVariants({ variant: "ghost" })} text-base`
      }
    >
      {t(`navbar.links.${labelKey}`)}
    </NavLink>
  );
};
