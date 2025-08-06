import clsx from "clsx";
import { coverImageLink } from "@/lib/util/links";
import Link from "next/link";
import { MarkdownContainer } from "./MarkdownContainer";
import Image from "next/image";
import { ImageColorContainer } from "@/components/ImageColorContainer";

export const BlogPostTeaser = ({
  title,
  coverImage,
  excerpt,
  documentId,
  slug,
  className,
}: {
  title: string;
  coverImage: any;
  excerpt: string;
  documentId: string;
  slug: string;
  className?: string;
}) => {
  return (
    <article>
      <ImageColorContainer imgUrl={coverImageLink(coverImage?.url)}>
        <div className="flex flex-col md:flex-row gap-4">
          <Image
            src={coverImageLink(coverImage?.url)}
            className={clsx("w-[320px] h-[320px] object-contain", className)}
            width={320}
            height={320}
            alt={`Cover image for the blog post ${title}`}
          />
          <div>
            <Link href={`/mosaik/blog/${slug}-${documentId}`}>
              <h2 className="p-2">{title}</h2>
            </Link>
            <MarkdownContainer>{excerpt}</MarkdownContainer>
          </div>
        </div>
      </ImageColorContainer>
    </article>
  );
};
