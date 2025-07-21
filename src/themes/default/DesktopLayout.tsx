import clsx from "clsx";
import { themeClasses as classes } from "@/themes";

export const DesktopLayout = ({ children, className }: any) => {
  return (
    <div
      className={clsx(
        "DesktopLayout",
        classes.DesktopLayout,
        "w-full h-full flex max-w-screen max-h-screen overflow-hidden",
        "bg-sky-100 dark:bg-gray-900",
        className
      )}
    >
      {children}
    </div>
  );
};
