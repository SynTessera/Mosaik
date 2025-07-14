import clsx from "clsx";
import { PropsWithChildren } from "react";
import classes from "@/themes/light/light.module.css";

export const DesktopSidebar = ({ children }: PropsWithChildren) => {
  return (
    <aside
      className={clsx(
        "DesktopSidebar",
        classes.DesktopSidebar,
        "w-max bg-gray-100 dark:bg-gray-900 border-r min-h-full flex flex-col shrink-0"
      )}
    >
      {children}
    </aside>
  );
};
