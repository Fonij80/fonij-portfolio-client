import type { ReactNode } from "react";
import { cx } from "class-variance-authority";

interface ContainerTransparentProps {
  children: ReactNode;
  className?: string;
}

export const ContainerTransparent = ({
  children,
  className,
}: ContainerTransparentProps) => {
  return (
    <div
      className={cx(
        "relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24",
        className,
      )}
    >
      {children}
    </div>
  );
};
