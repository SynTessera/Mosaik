import clsx from "clsx";
import { themeClasses as classes } from "@/themes";
export const ActionBar = ({ children, className }: any) => {
  return (
    <div
      className={clsx(
        "ActionBar",
        classes.ActionBar,
        "h-[var(--desktop-header-min-height)] w-[var(--sidebar-min-width)]",
        "flex p-2 justify-end border-b border-black/40 bg-black/20 items-center",
        className
      )}
    >
      {children}
    </div>
  );
};
