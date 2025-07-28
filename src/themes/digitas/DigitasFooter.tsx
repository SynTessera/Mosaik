import clsx from "clsx";
import { HeaderSection } from "./HeaderSection";
import DigitasLogo from "@/assets/digitaslogo.svg";
import Arrow from "@/assets/arrowdiagonal.svg";
import { InternalLink } from "./InternalLink";
import { HeroTextHeadline } from "./HeroTextHeadline";
export const DigitasFooter = ({
  children,
  className,
  content: { headline, links = [] },
}: any) => {
  return (
    <div className={clsx("w-full h-min flex flex-col py-[7rem] bg-digitas", className)}>
      {headline && (
        <HeroTextHeadline className="!pb-8">{headline}</HeroTextHeadline>
      )}
      <div className="flex gap-2">
        {links &&
          links.map((link) => {
            return (
              <InternalLink key={link?.href} href={link.href}>{link.linkText} </InternalLink>
            );
          })}
      </div>
      {children}
    </div>
  );
};
