import clsx from "clsx";
import { MarkdownContainer } from "./MarkdownContainer";
import Image from "next/image";
export const Slide = ({ children, className, headline, image, content , link}: any) => (
  
  <div
    className={clsx(
      "text-[1rem]",
      " top-[128px]  left-[40px]",
      "max-w-[700px]",
      "flex-col",
      className
    )}
  >
    <Image
      src={image?.url}
      alt={headline}
      width={image?.width}
      height={image?.height}
    />
    {headline}
    {content}

    <a href={link}>{headline}</a>
  </div>
);
