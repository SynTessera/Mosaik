import Image from "next/image";
import { coverImageLink } from "@/lib/util/links";
import { Link } from "./Link";

export const ArticleAuthor = ({ children, className, author }: any) => {
  return (
    <div className="flex gap-4 p-4">
      <div className="rounded-full overflow-hidden">
        <Image
          src={coverImageLink(author?.image?.url)}
          alt="Author"
          width={author?.image?.width}
          height={author?.image?.height}
          className="w-[80px]"
        />
      </div>
      <div className="flex flex-col text-black">
        <div className="text-[1.24rem]">{author.name}</div>
        <div className="text-[1rem] font-bold">{author.title}</div>
        <Link className="" href={author.link?.href}>
          {author.link?.linkText}
        </Link>
      </div>
    </div>
  );
};
