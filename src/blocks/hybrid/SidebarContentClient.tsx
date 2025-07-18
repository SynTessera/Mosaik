"use client";

import { useAppState } from "@/context/StateContext";
import { createClientWrapper } from "@/lib/createClientWrapper";
import { useThemedComponent } from "@/lib/hooks/useThemedComponent";

export const SidebarContentClient = createClientWrapper((props: any) => {
  const SidebarContent = useThemedComponent("SidebarContent");
  const { state } = useAppState();
  return <SidebarContent {...props} state={state} />;
});
