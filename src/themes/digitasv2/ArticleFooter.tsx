import clsx from "clsx";
import { HeaderSection } from "./HeaderSection";
import DigitasLogo from "@/assets/digitaslogo.svg";
import Arrow from "@/assets/arrowdiagonal.svg";
import { InternalLink } from "./InternalLink";
import { Seperator } from "./Seperator";
import { ArticleAuthor } from "./ArticleAuthor";
export const ArticleFooter = ({ children, ...article }: any) => {
  return (
    <div>
      <div className="px-[40px]">
        <Seperator />
      </div>
      <div className="px-[40px] py-4 ">
        <ArticleAuthor author={article.author.author} />
      </div>
      <div className="px-[40px] bg-digitas py-4 ">{children}</div>
    </div>
  );
};
