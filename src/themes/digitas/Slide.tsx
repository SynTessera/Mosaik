import clsx from "clsx";
import { MarkdownContainer } from "./MarkdownContainer";
import Image from "next/image";
import { coverImageLink } from "@/lib/util/links";
import { themeClasses } from "..";
import { TextHeadline } from "./TextHeadline";
import { TextTeaser } from "./TextTeaser";
import { InternalLink } from "./InternalLink";
export const Slide = ({
  className,
  headline,
  image,
  content,
  link,
  contentClassName,
  hidden,
}: any) => {
  return (
    <div className={clsx("flex flex-col h-full", className)}>
      {image && (
        <Image
          src={coverImageLink(image?.url)}
          alt={headline}
          width={image?.width || 100}
          height={image?.height || 100}
        />
      )}
      <div className="flex flex-col gap-4 pt-[30px]">
        <TextHeadline>{headline}</TextHeadline>
        <TextTeaser className={contentClassName}>{content}</TextTeaser>
        <InternalLink href={link?.href} tabIndex={hidden ? -1 : undefined}>
          {link?.linkText}
        </InternalLink>
      </div>
    </div>
  );
};
