import clsx from "clsx";
import { HeaderSection } from "./HeaderSection";
import DigitasLogo from "@/assets/digitaslogo.svg";
import Arrow from "@/assets/arrowdiagonal.svg";
import { InternalLink } from "./InternalLink";
export const DesktopHeader = ({
  children,
  className,
  headline,
  subline,
  link,
  linkText,
  collapsed,
}: any) => {
  return <div
    className={clsx(
      "w-full h-min flex items-center grow flex-col z-10",
      className
      // { "h-[80px] overflow-hidden": collapsed }
    )}
  >
    {!collapsed && (
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
};
