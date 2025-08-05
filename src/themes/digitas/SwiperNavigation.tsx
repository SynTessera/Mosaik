import clsx from "clsx";
import { PropsWithChildren } from "react";

export type SwiperNavigationProps = PropsWithChildren<{
  className?: string;
}>;

export const SwiperNavigation = ({
  children,
  className,
}: SwiperNavigationProps) => (
  <div className={clsx("flex justify-end gap-2 w-full", className)}>
    {children}
  </div>
);
