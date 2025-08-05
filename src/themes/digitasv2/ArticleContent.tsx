import clsx from "clsx";
import { HeaderSection } from "./HeaderSection";
import DigitasLogo from "@/assets/digitaslogo.svg";
import Arrow from "@/assets/arrowdiagonal.svg";
import { InternalLink } from "./InternalLink";
import { MarkdownContainer } from "./MarkdownContainer";
export const ArticleContent = ({ content, className }: any) => {
  return (
    <article
      className={clsx(
        "bg-white text-black text-[1.3rem]",
        "px-[40px] max-w-3xl",
        className
        // { "h-[80px] overflow-hidden": collapsed }
      )}
    >
      <MarkdownContainer>{content}</MarkdownContainer>
    </article>
  );
};
