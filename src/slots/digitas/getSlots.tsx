import { ThemedComponent } from "@/blocks/ThemedComponent";
import { fetchPages, fetchSiteConfig } from "@/lib/dataSources/digitas";
import { DesktopHeader } from "@/blocks/digitas/hybrid/DesktopHeader";
import { Content } from "@/blocks/digitas/Content";
import { FragmentProps } from "@/types/components/Fragment";

export const getSlots = async () => {
  const siteConfig = await fetchSiteConfig();
  const page = (await fetchPages())?.[0];
  const slotsMap =
    page?.slots?.reduce((acc, cur) => {
      acc[cur.name] = cur.fragment;
      return acc;
    }, {} as Record<string, FragmentProps>) ?? {};

  return {
    sidebarheader: null,
    header: (
      <div className="w-full overflow-hidden">
        <DesktopHeader canExpand {...siteConfig} />
      </div>
    ),
    content: (
      <div className="w-full max-h-min">
        {page?.content?.map(({ component, ...content }: any) => (
          <Content key={content.id} content={content} component={component} />
        ))}
      </div>
    ),
    footer: (
      <ThemedComponent name="DesktopFooter">
        {slotsMap.footer?.content
          ? slotsMap.footer.content.map((c: any) => (
              <Content content={c} key={c.id} />
            ))
          : null}
      </ThemedComponent>
    ),
  };
};
