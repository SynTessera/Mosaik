// SynTessera\aegis\src\layouts\DesktopColLayout.tsx

import { DesktopContent } from "@/blocks/DesktopContent";
import { Desktop } from "@/modules/Desktop";
import { JSX, PropsWithChildren } from "react";

interface DesktopSlots {
  sidebarheader: JSX.Element;
  desktopheader: JSX.Element;
  sidebarcontent: JSX.Element;
  desktopcontent: JSX.Element;
  desktopfooter: JSX.Element;
}

export const DesktopColLayout = ({
  children,
  slots,
}: PropsWithChildren<{
  slots: DesktopSlots;
}>) => {
  return (
    <Desktop className="flex-col">
      <div className="flex w-full">
        {slots.sidebarheader}
        {slots.desktopheader}
      </div>
      <DesktopContent className="flex-row">
        {slots.sidebarcontent}
        {slots.desktopcontent}
        {children}
      </DesktopContent>
      {slots.desktopfooter}
    </Desktop>
  );
};
