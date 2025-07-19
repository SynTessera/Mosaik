import clsx from "clsx";
export const DesktopHeader = ({ children, className }: any) => (
  <div
    className={clsx(
      "p-4 border-black/40 border-b w-full h-[var(--desktop-header-min-height)] flex items-center grow",
      className
    )}
  >
    <h1>Mosaik</h1>
    <span className="ml-auto -mt-4 -mr-8">{children}</span>
  </div>
);
