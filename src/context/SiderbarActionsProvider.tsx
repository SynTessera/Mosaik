"use client"

import { useSidebarActions } from "@/blocks/DesktopSidebar";
import { ActionProvider } from "./ActionContext";

export const SidebarActionsProvider = ({ children }: any) => {
  const actions = useSidebarActions();
  return <ActionProvider actions={actions}>{children}</ActionProvider>;
};
