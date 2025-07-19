import clsx from "clsx";
import { PropsWithChildren } from "react";
import { themeClasses as classes } from "@/themes";

export const DesktopSidebar = ({
  children,
  className,
  hidden,
}: PropsWithChildren<{ className?: string; hidden: boolean }>) => {
  return (
    <aside
      className={clsx(
        "DesktopSidebar",
        classes.DesktopSidebar,
        "w-max bg-white/20 shadow-md shadow-black dark:bg-black/40 min-h-full h-full flex flex-col shrink-0 overflow-y-auto scrollable",
        {
          hidden,
        },
        className
      )}
    >
      {children}
    </aside>
  );
};
