/* eslint-disable @typescript-eslint/no-explicit-any */
import { TextContainer } from "@/components/TextContainer";
import { coverImageLink } from "@/lib/util/links";
import Link from "next/link";

export const BlogPostTeaser = ({
  title,
  coverImage,
  excerpt,
  documentId,
  slug,
}: any) => {
  return (
    <li>
      <div className="flex gap-1 bg-gray-400">
        <img
          src={coverImageLink(coverImage?.url)}
          className="w-[320px] h-[320px]"
        />
        <div>
          <Link href={`/mosaik/blog/${slug}-${documentId}`}>
            <h2>{title}</h2>
          </Link>
          <TextContainer>{excerpt}</TextContainer>
        </div>
      </div>
    </li>
  );
};
