import clsx from "clsx";

export const DesktopLayout = ({ children, className }: any) => (
  <div
    className={clsx(
      "overflow-y-auto overflow-x-hidden max-w-screen max-h-screen scrollcontainer",
      className
    )}
  >
    {children}
  </div>
);
