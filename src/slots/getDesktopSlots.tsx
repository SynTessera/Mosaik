import { ThemedComponent } from "@/blocks/ThemedComponent";
import { PropsWithChildren } from "react";
import { getSectionSlots } from "./getSectionSlots";
import { Routes } from "@/types/Route";
import { SidebarContent } from "@/blocks/hybrid/SidebarContent";
import { getDesktopSidebarActions } from "@/actions/getDesktopSidebarActions";
import { getServerUiState } from "@/lib/util/getServerUIState";
import { SidebarActionBar } from "@/blocks/hybrid/SidebarActionBar";
import { Icon, IconNames } from "@/components/Icon";
import clsx from "clsx";

export const getDesktopSlots = async ({
  children,
  params,
  fetcher,
  routes,
}: PropsWithChildren<{
  params: { slug?: string[]; section?: string[]};
  fetcher?: (ctx: any) => Promise<any>;
  routes: Routes;
}>) => {
  const state = await getServerUiState();
  const sidebarActions = await getDesktopSidebarActions({
    serverState: { sidebar: { expanded: state?.sidebar?.expanded } },
  });

  const sectionSlots = await getSectionSlots({
    params,
    fetcher,
    routes,
  });
  return {
    sidebarheader: (
      <div>
        <SidebarActionBar actions={sidebarActions}>
          {Object.entries(sidebarActions).map(([key, action]) => {
            return (
              <ThemedComponent key={key} name="ActionButton" action={action}>
                <Icon
                  icon={
                    clsx({
                      FaChevronRight: !state?.sidebar?.expanded ||  Number(state?.sidebar.expanded) < 2,
                      FaChevronLeft: state?.sidebar.expanded === 2,
                    }) as IconNames
                  }
                />
              </ThemedComponent>
            );
          })}
        </SidebarActionBar>
      </div>
    ),
    desktopheader: (
      <div className="w-full">
        <ThemedComponent name="DesktopHeader">
          {sectionSlots.motd}
        </ThemedComponent>
      </div>
    ),
    sidebarcontent: (
      <div className="h-full">
        <SidebarContent state={state}>{sectionSlots.navigation}</SidebarContent>
      </div>
    ),
    desktopcontent: (
      <div className="w-full">
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
