"use client";

import { useAppState } from "@/context/StateContext";
import { createClientWrapper } from "@/lib/createClientWrapper";
import { useThemedComponent } from "@/lib/hooks/useThemedComponent";
import { PropsWithChildren } from "react";

// Example sub-components:
export const SidebarContentClient = createClientWrapper(
  ({ children, ...props }: PropsWithChildren) => {
    const { state } = useAppState();
    const Component = useThemedComponent("SidebarContent");

    return (
      <Component state={state} {...props}>
        {children}{" "}
      </Component>
    );
  }
);
