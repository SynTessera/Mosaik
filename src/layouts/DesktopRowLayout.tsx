import { Desktop } from "@/modules/Desktop";
import { Slot } from "@/modules/Slot";
import { PropsWithChildren, ReactElement } from "react";
import { DesktopContent } from "@/blocks/DesktopContent";

export const DesktopRowLayout = async ({
  children,
  slots,
}: PropsWithChildren<{
  slots: Record<string, ReactElement | ReactElement[]>;
}>) => {
  return (
    <Desktop>
      <Slot name="sidebarheader" slots={slots}></Slot>
      <Slot name="sidebarcontent" slots={slots}></Slot>
      <Slot name="sidebarfooter" slots={slots}></Slot>
      <DesktopContent className="flex-col">
        <div>
          <Slot name="desktopheader" slots={slots}></Slot>
        </div>
        {/* <Content> */}
        <Slot name="desktopcontent" slots={slots}></Slot>
        {children}
        {/* </Content>   */}
        <Slot name="desktopfooter" slots={slots}></Slot>
      </DesktopContent>
    </Desktop>
  );
};
