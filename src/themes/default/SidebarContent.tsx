"use client"

import clsx from "clsx";
import { themeClasses as classes } from "@/themes";
import { State } from "@/types/State";
import { PropsWithChildren } from "react";

export const SidebarContent = ({
  children,
  state = { sidebar: { expanded: undefined } },
  className,
}: PropsWithChildren<{
  state?: State;
  className?: string;
}>) => (
  <div
    className={clsx(
      "SidebarContent",
      classes.SidebarContent,
      "min-w-[var(--sidebar-min-width)] flex-1 h-full scrollable pr-[10px] hover:mr-0 hover:pr-[0px]",
      {
        hidden: state?.sidebar?.expanded === 0,
          "hidden md:block": typeof state?.sidebar?.expanded === 'undefined',
        "block": Number(state?.sidebar?.expanded) > 0
      },
      className
    )}
  >

    {children}
  </div>
);
