// SynTessera\aegis\src\layouts\DesktopColLayout.tsx

import { DesktopContent } from "@/blocks/DesktopContent";
import { Desktop } from "@/modules/Desktop";
import { PropsWithChildren } from "react";
import { ThemedComponent } from "@/blocks/ThemedComponent";
import { getDesktopSlots } from "@/slots/getDesktopSlots";

export const DesktopColLayout = async ({
  children,
  slots,
}: PropsWithChildren<{
  slots: Awaited<ReturnType<typeof getDesktopSlots>>;
}>) => {

  return (
    <Desktop className="flex-col">
      <div className="flex w-full">
        {slots.sidebarheader}
        {slots.desktopheader}
      </div>
      <DesktopContent className="flex-row">
        <ThemedComponent
          name="DesktopSidebar"
        >
          {slots.sidebarcontent}
        </ThemedComponent>
        {slots.desktopcontent}
        {children}
      </DesktopContent>
      {slots.desktopfooter}
    </Desktop>
  );
};
