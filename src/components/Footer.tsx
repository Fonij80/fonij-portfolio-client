import { useTranslation } from "react-i18next";
import { LinkSocial } from "@/components/ui/custom";
import { socialLinkConfig } from "@/configs/brand.config";
import type { SocialLink } from "@/types/social";

interface FooterProps {
  socialLinks?: SocialLink[];
  className?: string;
}

export const Footer = ({
  socialLinks = socialLinkConfig,
  className = "",
}: FooterProps) => {
  const { t } = useTranslation("footer");

  return (
    <footer
      className={`relative w-full mx-auto max-w-7xl px-6 pb-8 pt-20 lg:px-8 overflow-hidden bg-neutral-950 ${className}`}
    >
      <div className="flex flex-col gap-3 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between mt-10 border-t border-white/10 pt-6">
        <p>{t("copyright")}</p>

        <LinkSocial socialLinks={socialLinks} />
      </div>
    </footer>
  );
};
