import React from "react";
import { ViewHostProvider } from "./ViewHost";
import { Slot } from "./Slot";
import { getThemedComponent } from "@/lib/server/getThemedComponent";

export async function Desktop({ children }: { children: React.ReactNode }) {
  const Desktop =
    (await getThemedComponent("DesktopLayout", process.env.MOSAIK_THEME)) ||
    (() => null);

  return (
    <div className="desktop">
      <Desktop>
        <ViewHostProvider>
          {children}
          <Slot name="sidebar"></Slot>
          <Slot name="content"></Slot>
        </ViewHostProvider>
      </Desktop>
    </div>
  );
}
