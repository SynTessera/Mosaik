// SynTessera\aegis\src\blocks\DesktopContent.tsx

import React from "react";
import { Slot } from "@/modules/Slot"; // Adjust imports to your structure
import { getThemedComponent } from "@/lib/server/getThemedComponent";
import clsx from "clsx";

export const DesktopContent = async ({ children, className }: any) => {
  return (
    <div
      className={clsx(
        "flex grow overflow-hidden max-h-screen w-full h-full ",
        className
      )}
    >
      {children}
    </div>
  );
};

// Example sub-components:
export const Content = async ({ children, ...props }: any) => {
  const Cmp = await getThemedComponent("DesktopContent");

  return (
    <Cmp {...props}>
      <Slot name="main" slots={{}}></Slot>
      {children}
    </Cmp>
  );
};
