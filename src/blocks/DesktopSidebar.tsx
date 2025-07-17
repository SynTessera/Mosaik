"use client";

import React, { PropsWithChildren, useMemo } from "react";
import { ActionProvider } from "@/context/ActionContext";
import { collapse, expand } from "@/app/mosaik/actions/";
import { useAppState } from "@/context/StateContext";
import { useThemedComponent } from "@/lib/hooks/useThemedComponent";
import { initialState } from "@/app/mosaik/state";

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
