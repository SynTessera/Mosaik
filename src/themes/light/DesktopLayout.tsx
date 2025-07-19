import clsx from "clsx";
import { themeClasses as classes } from "@/themes";

export const DesktopLayout = ({ children, className }: any) => {
  return (
    <div
      className={clsx(
        "DesktopLayout",
        classes.DesktopLayout,
        "w-full h-full flex max-w-screen max-h-screen overflow-hidden",
        "bg-sky-300 dark:bg-green-700",
        className
      )}
    >
      {children}
    </div>
  );
};
