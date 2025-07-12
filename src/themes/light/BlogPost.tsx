/* eslint-disable @typescript-eslint/no-explicit-any */
import { coverImageLink } from "@/lib/util/links";
import Link from "next/link";
import { MarkdownContainer } from "./MarkdownContainer";

export const BlogPost = ({ data = [] }: any) => {
  const { title, coverImage, content, documentId, slug } = data?.[0];

  return (
    <article className="flex gap-4 bg-gray-400 max-h-full w-full overflow-y-auto">
      <img
        src={coverImageLink(coverImage?.url)}
        className="shrink w-1/4 object-contain h-fit sticky top-4 my-4"
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
