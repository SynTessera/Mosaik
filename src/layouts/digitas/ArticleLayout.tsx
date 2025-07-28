// SynTessera\aegis\src\layouts\DesktopColLayout.tsx

import { DesktopContent } from "@/blocks/DesktopContent";
import { Desktop } from "@/modules/Desktop";
import { PropsWithChildren } from "react";
import { ThemedComponent } from "@/blocks/ThemedComponent";
import { getDesktopSlots } from "@/slots/getDesktopSlots";

export const ArticleLayout = async ({
  children,
  slots,
}: PropsWithChildren<{
  slots: Awaited<ReturnType<typeof getDesktopSlots>>;
}>) => {
  return (
    <Desktop className="flex-col">
      <div className="flex w-full sticky top-0 z-10">{slots.header}</div>
      {slots.content}
      {slots.footer}
    </Desktop>
  );
};
