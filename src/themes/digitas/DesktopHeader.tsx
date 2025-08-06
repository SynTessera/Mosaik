import clsx from "clsx";
import { HeaderSection } from "./HeaderSection";
import DigitasLogo from "@/assets/digitaslogo.svg";
import { InternalLink } from "./InternalLink";
export const DesktopHeader = ({
  className,
  headline,
  subline,
  link,
  collapsed,
}: any) => {
  return (
    <div
      className={clsx(
        "w-full  transition-all duration-200 flex items-center grow flex-col z-10",
        className,
        { "h-[244px] mt-0": !collapsed, "-mt-[122px]": collapsed }
        // { "h-[80px] overflow-hidden": collapsed }
      )}
    >
      {1 && (
        <HeaderSection className="uppercase">
          <div>{headline}</div>
          <div>{subline}</div>
        </HeaderSection>
      )}
      <HeaderSection className="flex justify-between items-center">
        <DigitasLogo />
        <InternalLink href={link?.href}>{link.linkText}</InternalLink>
      </HeaderSection>
    </div>
  );
};
