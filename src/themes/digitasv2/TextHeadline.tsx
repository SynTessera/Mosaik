import clsx from "clsx";

export const TextHeadline = ({ children, className }: any) => (
  <h2
    className={clsx(
      "text-[22px] font-[600] leading-[100%]",
      "uppercase",
      className
    )}
  >
    {children}
  </h2>
);
