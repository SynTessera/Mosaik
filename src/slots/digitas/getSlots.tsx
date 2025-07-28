import { ThemedComponent } from "@/blocks/ThemedComponent";
import { PropsWithChildren } from "react";
import { getSectionSlots } from "../getSectionSlots";
import { Routes } from "@/types/Route";
import { SidebarContent } from "@/blocks/hybrid/SidebarContent";
import { getDesktopSidebarActions } from "@/actions/getDesktopSidebarActions";
import { getServerUiState } from "@/lib/util/getServerUIState";
import { fetchPages, fetchSiteConfig } from "@/app/dataSources/digitas";
import { DesktopHeader } from "@/blocks/digitas/hybrid/DesktopHeader";
import { getAlias } from "@/lib/util/getAlias";
import { Content } from "@/blocks/digitas/Content";

export const getSlots = async ({
  children,
  params,
  fetcher,
  routes,
}: PropsWithChildren<{
  params: { slug?: string[]; section?: string[] };
  fetcher?: (ctx: any) => Promise<any>;
  routes: Routes;
}>) => {
  const siteConfig = await fetchSiteConfig();
  console.log("SC", siteConfig);
  const page = (await fetchPages())?.[0];

  const slots = page.slots?.reduce((acc, cur) => {
    acc[cur.name] = cur.fragment;
    return acc;
  }, {});
  return {
    sidebarheader: null,
    header: (
      <div className="w-full h-fit">
        <DesktopHeader canExpand {...siteConfig}></DesktopHeader>
      </div>
    ),
    content: (
      <div className="w-full max-h-min">
        {page.content.map((content: any) => {
          return <Content key={content.id} content={content} />;
        })}
      </div>
    ),
    footer: (
      <ThemedComponent name="DesktopFooter">
        {slots.footer &&
          slots.footer.content?.map((c) => {
            return <Content content={c} key={c.id} />;
          })}
      </ThemedComponent>
    ),
  };
};
