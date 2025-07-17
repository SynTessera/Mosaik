import { ActionBar } from "@/blocks/ActionBar";
import { ThemedComponent } from "@/blocks/ThemedComponent";
import { PropsWithChildren } from "react";
import { getPageSlots } from "./getPageSlots";
import { Slot } from "@/modules/Slot";
import { SidebarContentWrapper } from "@/blocks/SidebarContentWrapper";
import { Routes } from "@/types/Route";

export const getDesktopSlots = async ({
  children,
  params,
  fetcher,
  routes,
}: PropsWithChildren<{
  params: object;
  fetcher?: (ctx: any) => Promise<any>;
  routes: Routes;
}>) => {
  const pageSlots = await getPageSlots({ params, fetcher, routes });
  return {
    sidebarheader: (
      <div>
        <ActionBar />
      </div>
    ),
    desktopheader: (
      <div>
        <ThemedComponent name="DesktopHeader" />
      </div>
    ),
    sidebarcontent: (
      <div>
        <SidebarContentWrapper slots={pageSlots}>
          <Slot name="navigation" slots={pageSlots} />
        </SidebarContentWrapper>
      </div>
    ),
    desktopcontent: <div>{children}</div>,
    desktopfooter: (
      <div>
        <ThemedComponent name="DesktopFooter" />
      </div>
    ),
  };
};
