// SynTessera\aegis\src\layouts\DesktopColLayout.tsx

import { DesktopSidebar } from "@/blocks/DesktopSidebar";
import { DesktopContent } from "@/blocks/DesktopContent";
import { Desktop } from "@/modules/Desktop";
import { Slot } from "@/modules/Slot";
import { PropsWithChildren, ReactElement } from "react";
import { AutoCollapseSidebarOnMobileEffect } from "@/lib/effects/components/AutoCollapseSidebarOnMobile";

export const DesktopColLayout = async ({
  children,
  slots,
}: PropsWithChildren<{
  slots: Record<string, ReactElement | ReactElement[]>;
}>) => {
  return (
    <Desktop className="flex-col">
      <div className="flex w-full">
        <Slot name="sidebarheader" slots={slots}></Slot>
        <Slot name="desktopheader" slots={slots}></Slot>
      </div>
      <DesktopContent className="flex-row">
        <DesktopSidebar>
          <Slot name="sidebarcontent" slots={slots}></Slot>
        </DesktopSidebar>
        {/* <Content> */}
        <Slot name="desktopcontent" slots={slots}></Slot>
        {children}
        {/* </Content> */}
      </DesktopContent>
      <Slot name="desktopfooter" slots={slots}></Slot>
      <AutoCollapseSidebarOnMobileEffect />
    </Desktop>
  );
};
