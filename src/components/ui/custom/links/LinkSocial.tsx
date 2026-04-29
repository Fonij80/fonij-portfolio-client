import { Button } from "@/components/ui";
import { socialLinkConfig } from "@/configs/brand.config";
import type { SocialLink } from "@/types/social";

interface LinkSocialProps {
  socialLinks?: SocialLink[];
  className?: string;
}

export const LinkSocial = ({
  socialLinks = socialLinkConfig,
  className = "",
}: LinkSocialProps) => {
  if (!socialLinks.length) return null;

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {socialLinks.map(({ label, href, Icon }) => (
        <Button
          key={label}
          asChild
          variant="ghost"
          size="icon"
          className="h-8 w-8 text-neutral-400 hover:bg-white/10 hover:text-white"
        >
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            title={label}
          >
            <Icon className="h-4 w-4" />
          </a>
        </Button>
      ))}
    </div>
  );
};
