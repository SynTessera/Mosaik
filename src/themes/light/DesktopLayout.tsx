import clsx from "clsx";
import { themeClasses as classes } from "@/themes";

export const DesktopLayout = ({ children, theme, className }: any) => {
  return (
    <div
      className={clsx(
        "DesktopLayout",
        classes.DesktopLayout,
        "w-full h-full flex max-w-screen max-h-screen overflow-hidden",
        {
          "bg-white": theme.userPreferences.mode === "light",
          "bg-info-100": theme.userPreferences.mode === "dark",
        },
        className
      )}
    >
      {children}
    </div>
  );
};
