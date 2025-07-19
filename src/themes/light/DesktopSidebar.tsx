import clsx from "clsx";
import { PropsWithChildren } from "react";
import { themeClasses as classes } from "@/themes";

export const DesktopSidebar = ({
  children,
  className,
}: PropsWithChildren<{ className?: string; hidden: boolean }>) => {
  return (
    <aside
      className={clsx(
        "DesktopSidebar",
        classes.DesktopSidebar,
        "w-fit",
        "bg-white/20 dark:bg-black/40",
        "shadow-md shadow-black min-h-full",
        "h-full flex flex-col shrink-0 overflow-y-auto scrollable",
        className
      )}
    >
      {children}
    </aside>
  );
};
