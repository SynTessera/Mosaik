"use client"

import clsx from "clsx";
import { themeClasses as classes } from "@/themes";
import { State } from "@/types/State";
import { PropsWithChildren } from "react";

export const SidebarContent = ({
  children,
  state = { sidebar: { expanded: 2 } },
  className,
}: PropsWithChildren<{
  state?: State;
  className?: string;
}>) => (
  <div
    className={clsx(
      "SidebarContent",
      classes.SidebarContent,
      "min-w-[var(--sidebar-min-width)] flex-1 h-full scrollable",
      {
        hidden: state?.sidebar?.expanded === 0,
        block: state?.sidebar?.expanded > 0,
      },
      className
    )}
  >
    {children}
  </div>
);
