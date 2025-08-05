import type { Metadata } from "next";
import { Page } from "@/types/content/Page";
import { coverImageLink } from "@/lib/util/links";
import { fetchSiteConfig } from "./dataSources/digitas";
import { getSlots } from "@/slots/digitas/getSlots";
import { StateProvider } from "@/context/StateContext";

import { appReducer } from "@/reducers/digitas/index";
import { initialState } from "./mosaik/state";
import { DesktopLayout } from "@/layouts/digitas/DesktopLayout";

export async function generateMetadata(): Promise<Metadata> {
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

export default async function RootPage() {
  const slots = await getSlots();

  return (
    <StateProvider reducer={appReducer} initialState={initialState}>
      <DesktopLayout slots={slots}></DesktopLayout>
    </StateProvider>
  );
}
