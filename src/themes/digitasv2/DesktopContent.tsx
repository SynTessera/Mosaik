import clsx from "clsx";
import { themeClasses } from "..";

export const DesktopContent = ({ children, className, content }: any) => (
  <div className={clsx(themeClasses.DesktopContent, "bg-digitas")}>
    {children}
  </div>
);
