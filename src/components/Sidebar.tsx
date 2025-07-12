"use client";

import React from "react";
import { Slot } from "@/modules/Slot"; // Adjust imports to your structure
import { View } from "@/modules/View"; // Adjust imports to your structure
import { ActionProvider } from "@/context/ActionContext";
import { COLLAPSE } from "@/actions/SidebarActions";
import { ActionBar } from "./ActionBar";
import { useAppState } from "@/context/StateContext";
import { useThemedComponent } from "@/lib/hooks/useThemedComponent";

export const Sidebar = () => {
  const { state } = useAppState();

  const actions = {};
  if (state?.sidebar.collapsed) actions.EXPAND = {};

  if (!state?.sidebar.collapsed) actions.COLLAPSE = COLLAPSE;

  return (
    <View id="SidebarNavigation" slot="sidebar">
      <ActionProvider actions={actions}>
        <aside className="w-fit bg-gray-100 dark:bg-gray-900 border-r h-full flex flex-col">
          <ActionBar />
          <SidebarNavigation />
          <SidebarFooter />
        </aside>
      </ActionProvider>
    </View>
  );
};

// Example sub-components:
const SidebarNavigation = (props: any) => {
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
