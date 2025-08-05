import clsx from "clsx";
export const HeaderSection = ({ children, className }: any) => (
  <div
    className={clsx(
      "px-[38px] py-[40px] bg-digitas h-[122px] w-full",
      className
    )}
  >
    {children}
  </div>
);
