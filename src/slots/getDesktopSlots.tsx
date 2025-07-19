import { ActionBar } from "@/blocks/ActionBar";
import { ThemedComponent } from "@/blocks/ThemedComponent";
import { PropsWithChildren } from "react";
import { getSectionSlots } from "./getSectionSlots";
import { Slot } from "@/modules/Slot";
import { Routes } from "@/types/Route";
import { SidebarContent } from "@/blocks/hybrid/SidebarContent";
import { getDesktopSidebarActions } from "@/actions/getDesktopSidebarActions";
import { fetchMOTD } from "@/app/mosaik/dataSources/strapi";
import { MOTDProps } from "@/themes/light/MOTD";
import { DesktopContent } from "@/themes/light/DesktopContent";

export const getDesktopSlots = async ({
  children,
  params,
  searchParams,
  fetcher,
  routes,
}: PropsWithChildren<{
  params: object;
  fetcher?: (ctx: any) => Promise<any>;
  routes: Routes;
  searchParams: any;
}>) => {
  const motd = await fetchMOTD();
  const sidebarActions = await getDesktopSidebarActions({
    serverState: { sidebar: { expanded: searchParams.sidebarExpanded } },
  });

  const sectionSlots = await getSectionSlots({
    params,
    searchParams,
    fetcher,
    routes,
  });
  return {
    sidebarheader: (
      <div>
        <ActionBar actions={sidebarActions} />
      </div>
    ),
    desktopheader: (
      <div className="w-full">
        <ThemedComponent name="DesktopHeader" />
      </div>
    ),
    sidebarcontent: (
      <div>
        <SidebarContent>
          <Slot name="navigation" slots={sectionSlots} />
        </SidebarContent>
      </div>
    ),
    desktopcontent: (
      <div className="w-full">
        {motd?.enabled && (
          <ThemedComponent<MOTDProps>
            name="MOTD"
            severity={motd?.severity}
            message={motd?.message}
          />
        )}
        <ThemedComponent name="DesktopContent">{children}</ThemedComponent>
      </div>
    ),
    desktopfooter: (
      <div>
        <ThemedComponent name="DesktopFooter" />
      </div>
    ),
  };
};
