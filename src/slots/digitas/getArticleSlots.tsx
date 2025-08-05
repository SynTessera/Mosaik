import { ThemedComponent } from "@/blocks/ThemedComponent";
import { PropsWithChildren } from "react";
import { fetchSiteConfig } from "@/app/dataSources/digitas";
import { DesktopHeader } from "@/blocks/digitas/hybrid/DesktopHeader";
import { Content } from "@/blocks/digitas/Content";
import { ArticleProps } from "@/types/components/Article";
import { ContentElementProps } from "@/types/components/Content";

export const getArticleSlots = async ({
  article,
}: PropsWithChildren<{
  article: ArticleProps;
}>) => {
  const siteConfig = await fetchSiteConfig();
  const slots = article.slots?.reduce((acc: any, cur: any) => {
    acc[cur.name] = cur.fragment;
    return acc;
  }, {});

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
            slots.footer.content?.map((c: ContentElementProps) => {
              return <Content content={c} key={c.id} />;
            })}
        </ThemedComponent>
      </div>
    ),
  };
};
