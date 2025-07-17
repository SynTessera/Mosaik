import clsx from "clsx";
export const DesktopHeader = ({ children, className }: any) => (
  <div
    className={clsx(
      "p-4 border-black border-b w-full h-[var(--desktop-header-min-height)] flex items-center text-4xl grow",
      className
    )}
  >
    {children}
    <small>Mosaik</small>
  </div>
);
