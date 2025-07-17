"use client" 

import { useAppState } from "@/context/StateContext";
import { useThemedComponent } from "@/lib/hooks/useThemedComponent";
import { PropsWithChildren } from "react";

// Example sub-components:
export const SidebarContent = ({
  children,
  ...props
}: PropsWithChildren<{ slots: any }>) => {
  const Cmp = useThemedComponent("SidebarContent");
  const { state } = useAppState();

  return (
    <Cmp {...props} state={state}>
      {children}
    </Cmp>
  );
};
