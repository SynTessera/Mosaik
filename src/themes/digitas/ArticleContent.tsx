import clsx from "clsx";
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
