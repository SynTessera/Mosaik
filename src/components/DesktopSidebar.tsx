"use client";

import React, { PropsWithChildren, useEffect, useMemo } from "react";
import { Slot } from "@/modules/Slot"; // Adjust imports to your structure
import { View } from "@/modules/View"; // Adjust imports to your structure
import { ActionProvider } from "@/context/ActionContext";
import { COLLAPSE } from "@/actions/SidebarActions";
import { ActionBar } from "./ActionBar";
import { useAppState } from "@/context/StateContext";
import { useThemedComponent } from "@/lib/hooks/useThemedComponent";
import { collapse } from "@/app/mosaik/actions/COLLAPSE";

export const DesktopSidebar = () => {
  const { state, dispatch } = useAppState();

  const actions = useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const actions = {} as Record<string, any>;

    if (state?.sidebar.collapsed) actions.EXPAND = {};
    if (!state?.sidebar.collapsed) actions.COLLAPSE = COLLAPSE;

    return actions;
  }, [state?.sidebar.collapsed]);

  useEffect(() => {
    if (window.innerWidth <= 425) {
      dispatch(collapse(state!));
    }
  }, [typeof window === "undefined" ? null : window.innerWidth]);

  const Cmp = useThemedComponent("DesktopSidebar");
  return (
    <View id="SidebarNavigation" slot="sidebar">
      <ActionProvider actions={actions}>
        <Cmp>
          <ActionBar />
          <SidebarNavigation />
          <SidebarFooter />
        </Cmp>
      </ActionProvider>
    </View>
  );
};

// Example sub-components:
const SidebarNavigation = (props: PropsWithChildren) => {
  const Cmp = useThemedComponent("DesktopSidebarNavigation");

  return (
    <Cmp {...props}>
      <Slot name="navigation" />
      {props.children}
    </Cmp>
  );
};

const SidebarFooter = () => (
  <div className="p-4 border-t dark:border-t-gray-800 mt-auto">
    <small>v1.0.0</small>
  </div>
);
