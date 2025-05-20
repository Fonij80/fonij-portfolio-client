import { useTranslation } from "react-i18next";
import { buttonVariants } from "../button";
import { NavLink } from "react-router-dom";

interface NavigationLinkProps {
  labelKey: string;
  href: string;
  onClick?: () => void;
  disabled?: boolean;
}

export const NavigationLink = ({
  labelKey,
  href,
  onClick,
  disabled = false,
}: NavigationLinkProps) => {
  const { t } = useTranslation();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (disabled) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    onClick?.();
  };

  return (
    <NavLink
      key={labelKey}
      to={disabled ? "#" : href}
      onClick={handleClick}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      className={({ isActive }) =>
        `${buttonVariants({
          variant: "ghost",
        })} text-base font-medium relative py-1 px-3 transition-colors duration-200
        ${
          isActive && !disabled
            ? "border-b-2 border-[#4B0082]"
            : "hover:bg-[#4B0082] hover:text-[#4B0082]"
        }
        ${disabled ? "opacity-50 pointer-events-none cursor-not-allowed" : ""}`
      }
    >
      {t(`navbar.links.${labelKey}`)}
    </NavLink>
  );
};
