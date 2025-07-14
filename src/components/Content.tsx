"use client";

import React from "react";
import { Slot } from "@/modules/Slot"; // Adjust imports to your structure
import { View } from "@/modules/View"; // Adjust imports to your structure
import { useThemedComponent } from "@/lib/hooks/useThemedComponent";
import { DesktopHeader } from "@/themes/light/DesktopHeader";
import { DesktopFooter } from "@/themes/light/DesktopFooter";

export const DesktopContent = ({ children }: any) => {
  return (
    <View id="MainContent" slot="content">
      <div className="flex flex-col grow overflow-hidden max-h-screen w-full">
        <DesktopHeader />
        <Content>{children}</Content>
        <DesktopFooter />
      </div>
    </View>
  );
};

// Example sub-components:
const Content = (props: any) => {
  const Cmp = useThemedComponent("DesktopContent");

  return (
    <Cmp {...props}>
      <Slot name="main"></Slot>
      {props.children}
    </Cmp>
  );
};
