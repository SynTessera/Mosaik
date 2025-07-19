"use client";

import React, { PropsWithChildren, useMemo } from "react";
import { ActionProvider } from "@/context/ActionContext";
import { collapse } from "@/app/mosaik/actions/collapse";
import { expand } from "@/app/mosaik/actions/expand";
import { useAppState } from "@/context/StateContext";
import { useThemedComponent } from "@/lib/hooks/useThemedComponent";
import { initialState } from "@/app/mosaik/state";
import { Effects } from "@/services/Effects";

export const useSidebarActions = () => {
  const { state = initialState } = useAppState();

  const actions = useMemo(() => {
    const actions = {} as Record<string, any>;

    if (state.sidebar.expanded < 2) actions.expand = expand();
    if (state.sidebar.expanded === 2) actions.collapse = collapse();

    return actions;
  }, [state?.sidebar.expanded]);
  return actions;
};

export const DesktopSidebar = ({ children }: PropsWithChildren) => {
  const Cmp = useThemedComponent("DesktopSidebar");
  const { state } = useAppState();
  const actions = useSidebarActions();
  return (
    <div>
      <ActionProvider actions={actions}>
        <Cmp state={state}>{children}</Cmp>
      </ActionProvider>

    </div>
  );
};
