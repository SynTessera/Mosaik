import { Desktop } from "@/modules/Desktop";
import { PropsWithChildren } from "react";
import { ThemedComponent } from "@/blocks/ThemedComponent";
import { getSlots } from "@/slots/digitas/getSlots";

export const DesktopLayout = async ({
  slots,
}: PropsWithChildren<{
  slots: Awaited<ReturnType<typeof getSlots>>;
}>) => {
  return (
    <Desktop className="flex-col">
      <div className="flex w-full sticky top-0 z-10">
        {slots.header}
      </div>
      <ThemedComponent name="DesktopContent">{slots.content}</ThemedComponent>
      {slots.footer}
    </Desktop>
  );
};
