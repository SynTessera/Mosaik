import classes from "./light.module.css";
import clsx from "clsx";

export const DesktopContent = ({ children }: any) => (
  <main
    className={clsx(
      classes.DesktopContent,
      "flex-1 p-4 bg-info-100 max-w-full w-full h-full overflow-hidden"
    )}
  >
    {children}
  </main>
);
