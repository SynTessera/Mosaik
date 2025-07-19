import clsx from "clsx";
import { themeClasses as classes } from "@/themes";

export const DesktopContent = ({ children, className }: any) => (
  <main
    className={clsx(
      classes.DesktopContent,
      "flex-1 p-0 md:p-2 lg:p-4 bg-transparent max-w-full w-full  h-full overflow-hidden",
      className
    )}
  >
    {children}
  </main>
);
