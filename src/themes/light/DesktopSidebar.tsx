import clsx from "clsx";
import { PropsWithChildren } from "react";
import { themeClasses as classes } from "@/themes";
import { State } from "@/types/State";

export const DesktopSidebar = ({
  children,
  className,
  state,
}: PropsWithChildren<{ className?: string; state: State }>) => {
  return (
    <aside
      className={clsx(
        "DesktopSidebar",
        classes.DesktopSidebar,
        "min-w-[var(--sidebar-min-width)] w-max bg-gray-100 dark:bg-gray-900 border-r min-h-full h-full flex flex-col shrink-0 overflow-y-auto",
        {
          hidden: state.sidebar.expanded === 0,
        },
        className
      )}
    >
      {children}
    </aside>
  );
};
