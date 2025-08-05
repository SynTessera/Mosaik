import clsx from "clsx";
import { HeaderSection } from "./HeaderSection";
import DigitasLogo from "@/assets/digitaslogo.svg";
import Arrow from "@/assets/arrowdiagonal.svg";
import { InternalLink } from "./InternalLink";
export const ArticleHeader = ({
  children,
  className,
  headline = "Phillip Schilling verstärkt Publicis Groupe in DACH-Region",
  subline,
  link,
  linkText,
  collapsed,
}: any) => {
  return (
    <div className="bg-digitas pt-[7rem] pb-[2rem] px-[40px]">
      <h1
        className={clsx(
          "font-[700] uppercase max-w-[900px] !text-[4rem] ",
          className
        )}
      >
        {headline}
      </h1>
    </div>
  );
};
