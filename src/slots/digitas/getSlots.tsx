import { ThemedComponent } from "@/blocks/ThemedComponent";
import { PropsWithChildren } from "react";
import { fetchPages, fetchSiteConfig } from "@/app/dataSources/digitas";
import { DesktopHeader } from "@/blocks/digitas/hybrid/DesktopHeader";
import { Content } from "@/blocks/digitas/Content";
import { FragmentProps } from "@/types/components/Fragment";

export const getSlots = async ({}: PropsWithChildren<{}>) => {
  const siteConfig = await fetchSiteConfig();
  const page = (await fetchPages())?.[0];
  console.log ("PAGE", page)

  const slots = page.slots?.reduce((acc, cur) => {
    acc[cur.name] = cur.fragment;
    return acc;
  }, {} as Record<string, FragmentProps>);
  return {
    sidebarheader: null,
    header: (
      <div className="w-full !h-0 overflow-hidden">
        <DesktopHeader  {...siteConfig}></DesktopHeader>
      </div>
    ),
    content: (
      <div className="w-full max-h-min">
        {page.content.map(({ component, ...content }: any) => {
          return (
            <Content key={content.id} content={content} component={component} />
          );
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
