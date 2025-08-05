// SynTessera\aegis\src\app\mosaik\layout.tsx

import type { Metadata } from "next";
import { getThemedComponent } from "@/lib/server/getThemedComponent";
import { StateProvider } from "@/context/StateContext";
import { initialState } from "./state";
import { headers } from "next/headers";
import { appReducer } from "@/reducers/digitas";
import { DesktopLayout } from "@/layouts/digitas/DesktopLayout";
import { getSlots } from "@/slots/digitas/getSlots";

// import { AutoCollapseSidebarOnMobileEffect } from "@/lib/effects/components/AutoCollapseSidebarOnMobile";

export const metadata: Metadata = {
  title: "Mosaik - Rethinking Headless Architecture",
  description:
    "Mosaik — A flexible React/Next.js framework with headless CMS integration, modern state management, and dynamic theming for building scalable web apps.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<object>;
}>) {
  const Container = await getThemedComponent(
    "FluidContainer",
    process.env.MOSAIK_THEME
  );

  const pathname = (await headers()).get("x-next-url") ?? "";
  const slots = await getSlots({
    children,
  });

  return (
    <StateProvider reducer={appReducer} initialState={initialState}>
      <Container>
        <DesktopLayout slots={slots}></DesktopLayout>
      </Container>
    </StateProvider>
  );
}

export const revalidate = 30;
