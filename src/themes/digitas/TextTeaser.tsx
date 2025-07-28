import clsx from "clsx";
import { MarkdownContainer } from "./MarkdownContainer";

export const TextTeaser = ({ children, className }: any) => (
  <MarkdownContainer
    className={clsx(
      "text-[18px] font-[400] leading-[150%]",
      className
    )}
  >
    {children}
  </MarkdownContainer>
);
