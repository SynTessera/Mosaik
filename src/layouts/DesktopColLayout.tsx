// SynTessera\aegis\src\layouts\DesktopColLayout.tsx

import { DesktopContent } from "@/blocks/DesktopContent";
import { Desktop } from "@/modules/Desktop";
import { Slot } from "@/modules/Slot";
import { PropsWithChildren, ReactElement } from "react";
import { AutoCollapseSidebarOnMobileEffect } from "@/lib/effects/components/AutoCollapseSidebarOnMobile";
import { DesktopSidebarWrapper } from "@/blocks/DesktopSidebarWrapper";
import { Effects } from "@/services/Effects";

export const DesktopColLayout = async ({
  children,
  slots,
  searchParams,
}: PropsWithChildren<{
  slots: Record<string, ReactElement | ReactElement[]>;
  searchParams: any;
}>) => {
  return (
    <Desktop className="flex-col">
      <div className="flex w-full">
        <Slot name="sidebarheader" slots={slots}></Slot>
        <Slot name="desktopheader" slots={slots}></Slot>
      </div>
      <DesktopContent className="flex-row">
        <DesktopSidebarWrapper expanded={+searchParams.sidebarExpanded}>
          <Slot name="sidebarcontent" slots={slots}></Slot>
        </DesktopSidebarWrapper>
        <Slot name="desktopcontent" slots={slots}></Slot>
        {children}
      </DesktopContent>
      <Slot name="desktopfooter" slots={slots}></Slot>
      <AutoCollapseSidebarOnMobileEffect />
      <Effects
        when="mount"
        effects={[{ type: "syncCollapsedState", actions: { success: [] } }]}
        deps={undefined}
      />
    </Desktop>
  );
};
