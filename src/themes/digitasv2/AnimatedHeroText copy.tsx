import clsx from "clsx";
import { themeClasses } from "..";

export const AnimatedHeroText = ({ children, headline }: any) => (
  <div className={clsx(themeClasses.DesktopContent, "text-[7rem]")}>
    {headline}
  </div>
);
