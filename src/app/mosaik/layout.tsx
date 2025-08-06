// SynTessera\aegis\src\app\mosaik\layout.tsx

import type { Metadata } from "next";
import { getThemedComponent } from "@/lib/server/getThemedComponent";
import {
  fetchRoutes,
  defaultRoutes as staticRoutes,
} from "@/lib/mosaik/routes";
import { StateProvider } from "@/context/StateContext";
import { App } from "@/modules/App";
import { DesktopColLayout } from "@/layouts/DesktopColLayout";
import { headers } from "next/headers";
import { matchParams } from "@/lib/util/matchParams";
import { getDesktopSlots } from "@/features/desktop/getSlots";
import { sidebarReducer } from "@/features/sidebar/reducers";
import { initialState } from "@/lib/mosaik/state";

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
  const params = matchParams(pathname, "/mosaik/[...section]");

  const routes = [...(await fetchRoutes()), ...staticRoutes];
  const slots = await getDesktopSlots({
    params,
    routes,
    children,
  });

  return (
    <StateProvider reducer={sidebarReducer} initialState={initialState}>
      <App slug="/mosaik">
        <Container>
          <DesktopColLayout slots={slots}></DesktopColLayout>
        </Container>
      </App>
    </StateProvider>
  );
}

export const revalidate = 30;
