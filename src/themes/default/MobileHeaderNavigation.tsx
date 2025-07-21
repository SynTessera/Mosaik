import clsx from "clsx";
import { PropsWithChildren } from "react";

export const MobileHeaderNavigation = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => {
  return <div className={clsx("flex gap-1 overflow-x-auto", className)}>{children}</div>;
};
