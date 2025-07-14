"use client";

import React, { PropsWithChildren, useMemo } from "react";
import { Slot } from "@/modules/Slot"; // Adjust imports to your structure
import { View } from "@/modules/View"; // Adjust imports to your structure
import { ActionProvider } from "@/context/ActionContext";
import { COLLAPSE } from "@/actions/SidebarActions";
import { ActionBar } from "./ActionBar";
import { useAppState } from "@/context/StateContext";
import { useThemedComponent } from "@/lib/hooks/useThemedComponent";

export const Sidebar = () => {
  const { state } = useAppState();

  const actions = useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const actions = {} as Record<string, any>;

    if (state?.sidebar.collapsed) actions.EXPAND = {};
    if (!state?.sidebar.collapsed) actions.COLLAPSE = COLLAPSE;

    return actions;
  }, [state?.sidebar.collapsed]);

  return (
    <View id="SidebarNavigation" slot="sidebar">
      <ActionProvider actions={actions}>
        <aside className="w-max bg-gray-100 dark:bg-gray-900 border-r h-full flex flex-col shrink-0">
          <ActionBar />
          <SidebarNavigation />
          <SidebarFooter />
        </aside>
      </ActionProvider>
    </View>
  );
};

// Example sub-components:
const SidebarNavigation = (props: PropsWithChildren) => {
  const Cmp = useThemedComponent("DesktopSidebar");

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
