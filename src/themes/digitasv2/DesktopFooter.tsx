import clsx from "clsx";
export const DesktopFooter = ({
  children,
  className,
}: any) => {
  return (
    <div className={clsx("px-[40px] bg-digitas", className)}>
      {children}
    </div>
  );
};
