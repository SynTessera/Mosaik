"use client";

import React from "react";
import { Slot } from "@/modules/Slot"; // Adjust imports to your structure
import { View } from "@/modules/View"; // Adjust imports to your structure
import { useThemedComponent } from "@/lib/hooks/useThemedComponent";

export const Content = ({ children }: any) => {
  return (
    <View id="MainContent" slot="content">
      <div className="flex flex-col grow">
        <MainContent>{children}</MainContent>
        <MainFooter />
      </div>
    </View>
  );
};

// Example sub-components:
const MainContent = (props: any) => {
  const Cmp = useThemedComponent("DesktopContent");

  return (
    <>
      <Cmp {...props}>
        <Slot name="main"></Slot>
        {props.children}
      </Cmp>
    </>
  );
};

const MainFooter = (props: any) => {
  const Cmp = useThemedComponent("DesktopFooter");

  return <Cmp {...props} />;
};
