import clsx from "clsx";
import { themeClasses as classes } from "@/themes";

export const DesktopContent = ({ children, className }: any) => (
  <main
    className={clsx(
      classes.DesktopContent,
      "flex-1 p-4 bg-info-100 max-w-full w-full  h-full overflow-hidden",
      className
    )}
  >
    {children}
  </main>
);
