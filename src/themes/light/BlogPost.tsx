import clsx from "clsx";
import { coverImageLink } from "@/lib/util/links";
import Link from "next/link";
import { MarkdownContainer } from "./MarkdownContainer";

export const BlogPost = ({ data = [], className }: any) => {
  const { title, coverImage, content, documentId, slug } = data?.[0];

  return (
    <article className="flex gap-4 bg-gray-400/40 max-h-full w-full overflow-y-auto overflow-x-hidden">
      <img
        src={coverImageLink(coverImage?.url)}
        className={clsx(
          "shrink w-1/4 object-contain h-fit sticky top-4 my-4",
          className
        )}
      />
      <div className="h-full  mx-auto flex-1 grow py-4">
        <h1>
          <Link href={`/mosaik/blog/${slug}-${documentId}`}>{title}</Link>
        </h1>
        <MarkdownContainer>{content}</MarkdownContainer>
      </div>
    </article>
  );
};
