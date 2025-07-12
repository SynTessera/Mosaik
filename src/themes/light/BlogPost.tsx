import { TextContainer } from "@/components/TextContainer";
import { coverImageLink } from "@/lib/util/links";

export const BlogPost = ({ title, coverImage, content, excerpt }) => {
  console.log("POST", coverImageLink(coverImage?.url), title);
  return (
    <li>
      <div className="flex gap-1 bg-gray-400">
        <img
          src={coverImageLink(coverImage?.url)}
          className="w-[320px] h-[320px]"
        />
        <div>
          <h2>{title}</h2>
          <TextContainer>{excerpt}</TextContainer>
        </div>
      </div>
    </li>
  );
};
