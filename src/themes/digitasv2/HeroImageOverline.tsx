import clsx from "clsx";
export const HeroImageOverline = ({ children, className }: any) => (
  <h1
    className={clsx(
      "text-[4rem] bold uppercase max-w-[700px] leading-[0.8]",
      className
    )}
  >
    {children}
  </h1>
);
