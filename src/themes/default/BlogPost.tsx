import { themeClasses as classes } from "@/themes";
import clsx from "clsx";
import { coverImageLink } from "@/lib/util/links";
import Link from "next/link";
import { MarkdownContainer } from "./MarkdownContainer";

export const BlogPost = ({ data = [], className }: any) => {
  const { title, coverImage, content, documentId, slug } = data?.[0];

  return (
    <article className="flex flex-col lg:flex-row gap-4 bg-white/10 max-h-full w-full overflow-y-auto overflow-x-hidden">
      <div className="h-full mx-auto flex-1 grow pb-4 relative">
        <h1>
          <Link href={`/mosaik/blog/${slug}-${documentId}`}>{title}</Link>
        </h1>
        <div className="relative overflow-hidden flex justify-center">
          <img
            src={coverImageLink(coverImage?.url)}
            className={clsx("w-full sm:w-2/3 md:w-1/2 lg:w-1/3  mx-auto", className)}
            alt={"Blog Post Cover Image"}
          />
          <img
            src={coverImageLink(coverImage?.url)}
            className={clsx(
              "absolute w-full   h-fit -top-1/3  z-10 blur-md",
              className
            )}
            alt={"Blog Post Cover Image"}
          />
          <img
            src={coverImageLink(coverImage?.url)}
            className={clsx(
              "absolute w-full sm:w-2/3 md:w-1/2 lg:w-1/3 mx-auto z-30",
              className
            )}
            alt={"Blog Post Cover Image"}
          />
        </div>

        <MarkdownContainer className={classes.BlogPost}>
          {content}
        </MarkdownContainer>
      </div>
    </article>
  );
};
