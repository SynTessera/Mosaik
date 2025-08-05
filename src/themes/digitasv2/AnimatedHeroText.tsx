import clsx from "clsx";
import { themeClasses } from "..";
import { Image } from "./Image";

export const AnimatedHeroText = ({ children, content: { headline } }: any) => (
  <div className={clsx(themeClasses.DesktopContent, "text-[7rem] relative px-[40px]")}>
    {/* <Image content={{ image }} className="absolute top-0" /> */}
    <h2 className="">{headline}</h2>
  </div>
);
