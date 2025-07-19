import clsx from "clsx";
import { themeClasses as classes } from "@/themes";
import { PropsWithChildren } from "react";
import { ActionTrigger } from "@/blocks/ActionTrigger";
import { ActionButton } from "./ActionButton";
export const ActionBar = ({ children }: PropsWithChildren) => {
  return (
    <div
      className={clsx(
        "ActionBar",
        classes.ActionBar,
        "h-[var(--desktop-header-min-height)] w-[var(--sidebar-min-width)]",
        "flex p-2 justify-end border-b border-black/40 bg-white/20 dark:bg-black/20 items-center"
      )}
    >
      {children}
    </div>
  );
};
