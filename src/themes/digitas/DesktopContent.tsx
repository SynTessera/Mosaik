import clsx from "clsx";
import { themeClasses } from "..";

export const DesktopContent = ({ children, className, content }: any) => (
  <div className={clsx(themeClasses.DesktopContent, "px-[40px] bg-digitas")}>
    {children}
  </div>
);
