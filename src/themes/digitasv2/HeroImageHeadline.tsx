import clsx from "clsx";
import { HeroImageOverline } from "./HeroImageOverline";
export const HeroImageHeadline = ({ children, className, overline }: any) => (
  <div
    className={clsx(
      "sticky z-[1]  top-[128px]  left-[40px]",
      "text-[10rem]  bold uppercase max-w-[700px] leading-[0.8] py-2",
    )}
  >
    <HeroImageOverline>{overline}</HeroImageOverline>
    <h1 className={clsx(className,
      "!text-[10rem]  bold uppercase max-w-[700px] leading-[0.8] py-2",

    )}>{children}</h1>
  </div>
);
