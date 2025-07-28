import { ThemedComponent } from "@/blocks/ThemedComponent";
import { PropsWithChildren } from "react";
import { getSectionSlots } from "../getSectionSlots";
import { Routes } from "@/types/Route";
import { SidebarContent } from "@/blocks/hybrid/SidebarContent";
import { getDesktopSidebarActions } from "@/actions/getDesktopSidebarActions";
import { getServerUiState } from "@/lib/util/getServerUIState";
import {
  fetchArticle,
  fetchPages,
  fetchSiteConfig,
} from "@/app/dataSources/digitas";
import { DesktopHeader } from "@/blocks/digitas/hybrid/DesktopHeader";
import { getAlias } from "@/lib/util/getAlias";
import { Content } from "@/blocks/digitas/Content";
import { Seperator } from "@/themes/digitas/Seperator";

export const getArticleSlots = async ({
  article,
}: PropsWithChildren<{
  params: { slug?: string[]; section?: string[] };
}>) => {
  const siteConfig = await fetchSiteConfig();
  const state = await getServerUiState();
  console.log("SC", article);
  const slots = article.slots?.reduce((acc, cur) => {
    acc[cur.name] = cur.fragment;
    return acc;
  }, {});

  console.log("SLOTS", slots);
  return {
    header: (
      <div className="w-full h-fit">
        <DesktopHeader canExpand={false} {...siteConfig}></DesktopHeader>
      </div>
    ),
    content: (
      <div className="w-full max-h-min">
        <ThemedComponent name="ArticleHeader" {...article} />
        <ThemedComponent name="ArticleContent" {...article} />
      </div>
    ),
    footer: (
      <div>
        <ThemedComponent name="ArticleFooter" {...article}>
          {slots.footer &&
            slots.footer.content?.map((c) => {
              return <Content content={c} key={c.id}/>;
            })}
        </ThemedComponent>
      </div>
    ),
  };
};
