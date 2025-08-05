import type { Metadata } from "next";
import { Page } from "@/types/content/Page";
import { coverImageLink } from "@/lib/util/links";
import { fetchArticle, fetchSiteConfig } from "@/lib/dataSources/digitas";
import { StateProvider } from "@/context/StateContext";
import { appReducer } from "@/reducers/digitas/index";
import { notFound } from "next/navigation";
import { ArticleLayout } from "@/layouts/digitas/ArticleLayout";
import { getArticleSlots } from "@/slots/digitas/getArticleSlots";
import { initialState } from "@/lib/state";

export async function generateMetadata({ }: any): Promise<Metadata> {
  const meta: Page = await fetchSiteConfig();

  const title = meta.ogTitle || meta.twitterTitle || meta.title || "";
  const description =
    meta.ogDescription || meta.twitterDescription || meta.description || "";

  const imageUrl = meta.ogImage?.url || meta.twitterImage?.url || undefined;

  return {
    title,
    description,
    robots: meta.robots || "index, follow",
    alternates: {
      canonical: meta.canonicalUrl || undefined,
    },
    openGraph: {
      title: meta.ogTitle || title,
      description: meta.ogDescription || description,
      type: "website",
      url: meta.canonicalUrl || undefined,
      images: imageUrl ? [{ url: coverImageLink(imageUrl) }] : undefined,
    },
    twitter: {
      card: imageUrl ? "summary_large_image" : "summary",
      title: meta.twitterTitle || title,
      description: meta.twitterDescription || description,
      images: imageUrl ? [coverImageLink(imageUrl)] : undefined,
    },
  };
}

export default async function RootPage({
  params,
}: Readonly<{
  params: Promise<{ slug: string[] }>;
}>) {
  const article = await fetchArticle((await params).slug?.[0]);

  if (!article) return notFound();

  const slots = await getArticleSlots({
    article,
  });
  
  return (
    <StateProvider reducer={appReducer} initialState={initialState}>
      <ArticleLayout slots={slots}></ArticleLayout>
    </StateProvider>
  );
}
