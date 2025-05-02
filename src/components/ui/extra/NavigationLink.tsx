import React from "react";
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
        `${buttonVariants({
          variant: "ghost",
        })} text-base font-medium relative py-1 px-3 transition-colors duration-200 
        ${
          isActive
            ? "border-b-2 border-[#BF817F]"
            : "hover:bg-[#BF817F] hover:text-[#BF817F]"
        }`
      }
    >
      {t(`navbar.links.${labelKey}`)}
    </NavLink>
  );
};
