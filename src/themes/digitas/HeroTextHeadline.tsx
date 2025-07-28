import clsx from "clsx";

export const HeroTextHeadline = ({ children, className }: any) => (
  <h2
    className={clsx(
      "relative bg-digitas pb-[7rem] text-[7rem] max-w-[700px] font-extrabold leading-[0.9]",
      "uppercase",
      className
    )}
  >
    {children}
  </h2>
);
