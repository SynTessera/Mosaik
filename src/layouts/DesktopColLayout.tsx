// SynTessera\aegis\src\layouts\DesktopColLayout.tsx

import { DesktopContent } from "@/blocks/DesktopContent";
import { Desktop } from "@/modules/Desktop";
import { Slot } from "@/modules/Slot";
import { PropsWithChildren, ReactElement } from "react";
import { AutoCollapseSidebarOnMobileEffect } from "@/lib/effects/components/AutoCollapseSidebarOnMobile";
import { Effects } from "@/services/Effects";
import { ThemedComponent } from "@/blocks/ThemedComponent";

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
        <ThemedComponent name="DesktopSidebar"  hidden={searchParams.sidebarExpanded == "0"}>
          <Slot name="sidebarcontent" slots={slots}></Slot>
        </ThemedComponent >
        {slots.desktopcontent}
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
