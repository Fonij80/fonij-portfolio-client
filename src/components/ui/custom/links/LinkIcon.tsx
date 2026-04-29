import type { AnchorHTMLAttributes, ReactNode, MouseEvent } from "react";

interface LinkIconProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  icon: ReactNode;
  children: ReactNode;
}

export const LinkIcon = ({
  icon,
  children,
  href,
  className = "",
  onClick,
  ...props
}: LinkIconProps) => {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (href?.startsWith("#")) {
      e.preventDefault();

      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }

    onClick?.(e);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`group inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/4 px-4 py-3 text-sm font-medium text-neutral-200 transition hover:bg-white/10 hover:text-white ${className}`}
      {...props}
    >
      {icon}
      {children}
    </a>
  );
};
