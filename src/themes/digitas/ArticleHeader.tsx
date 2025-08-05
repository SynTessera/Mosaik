import clsx from "clsx";
export const ArticleHeader = ({
  className,
  headline = "Phillip Schilling verstärkt Publicis Groupe in DACH-Region",
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
