import clsx from "clsx";
import classes from "./light.module.css";

export const DesktopSidebar = ({ children }: any) => (
  <div
    className={clsx(
      classes.DesktopSidebar,
      "flex-1 overflow-y-auto max-h-full"
    )}
  >
    {children}
  </div>
);
