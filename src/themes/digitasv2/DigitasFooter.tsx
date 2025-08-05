import clsx from "clsx";
import { InternalLink } from "./InternalLink";
import { HeroTextHeadline } from "./HeroTextHeadline";
import { LinkProps } from "@/types/components/Link";

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
          links.map((link: LinkProps) => {
            return (
              <InternalLink key={link?.href} href={link.href}>{link.linkText} </InternalLink>
            );
          })}
      </div>
      {children}
    </div>
  );
};
