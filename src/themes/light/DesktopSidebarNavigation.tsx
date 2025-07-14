import clsx from "clsx";
import classes from "./light.module.css";

export const DesktopSidebarNavigation = ({ children }: any) => (
  <div
    className={clsx(
      "DesktopSidebarNavigation",
      classes.DesktopSidebarNavigation,
      "flex-1 overflow-y-auto max-h-full"
    )}
  >
    {children}
  </div>
);
