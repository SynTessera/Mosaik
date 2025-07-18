"use client";

import { useAppState } from "@/context/StateContext";
import { createHydratableComponent } from "@/lib/createHydratableComponent ";
import { useThemedComponent } from "@/lib/hooks/useThemedComponent";

export const SidebarContentClient = createHydratableComponent(
  (props: any & { hydrated: boolean }) => {
    const SidebarContent = useThemedComponent("SidebarContent");
    const { state } = useAppState();

    
    return <SidebarContent {...props} state={state} />;
  }
);
