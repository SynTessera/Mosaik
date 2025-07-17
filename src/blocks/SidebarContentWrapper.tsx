"use client";

import { PropsWithChildren } from "react";
import { SidebarContent } from "./SidebarContent";

// Example sub-components:
export const SidebarContentWrapper = ({
  children,
  ...props
}: PropsWithChildren<{ slots: any }>) => {
  return (
    <SidebarContent {...props}>
      {children}
    </SidebarContent>
  );
};
