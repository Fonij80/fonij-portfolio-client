import type { ReactNode } from "react";
import { cx } from "class-variance-authority";

interface ContainerWithBorderProps {
  children: ReactNode;
  className?: string;
}

export const ContainerWithBorder = ({
  children,
  className,
}: ContainerWithBorderProps) => {
  return (
    <div
      className={cx(
        "relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24 rounded-[2.5rem] border border-white/10 bg-white/4 shadow-2xl shadow-black/20 backdrop-blur-xl",
        className,
      )}
    >
      {children}
    </div>
  );
};
