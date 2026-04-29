import { Link } from "react-router-dom";
import { cx } from "class-variance-authority";
import { useTranslation } from "react-i18next";
import { brandConfig } from "@/configs/brand.config";

interface IconLogoProps {
  className?: string;
}

export const IconLogo = ({ className }: IconLogoProps) => {
  const { t } = useTranslation("common");

  return (
    <Link
      to={brandConfig.homePath}
      className={cx(
        "flex items-center gap-3 text-lg font-semibold tracking-tight transition-colors hover:text-primary md:text-xl",
        className,
      )}
      aria-label={`${t(brandConfig.nameKey)} - Home`}
    >
      <div className="h-8 w-8 shrink-0 overflow-hidden rounded-lg sm:h-9 sm:w-9">
        <img
          src={brandConfig.logo.src}
          alt={t(brandConfig.logo.altKey)}
          className="h-full w-full object-contain"
        />
      </div>
      {/* <span className="hidden font-bold sm:inline md:text-lg">
        {t("brandConfig.nameKey")}
      </span> */}
    </Link>
  );
};
