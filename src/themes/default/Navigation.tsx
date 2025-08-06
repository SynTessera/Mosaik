import clsx from "clsx";
import { PropsWithChildren } from "react";

export const Navigation = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <nav className={clsx("overflow-y-auto max-h-full scrollable", className)}>
      {children}
    </nav>
  );
};
