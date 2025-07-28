import clsx from "clsx";
import { MarkdownContainer } from "../digitas/MarkdownContainer";
import { themeClasses } from "..";
export const HeroTextContent = ({ children, className }: any) => (
  <div
    className={clsx(
      themeClasses.section,
      "text-[1rem]",
      " top-[128px]  left-[40px]",
      " max-w-[700px]",
      className
    )}
  >
    <MarkdownContainer>{children}</MarkdownContainer>
  </div>
);
