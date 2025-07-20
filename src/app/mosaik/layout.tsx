// SynTessera\aegis\src\app\mosaik\layout.tsx

import type { Metadata } from "next";
import { getThemedComponent } from "@/lib/server/getThemedComponent";
import { fetchRoutes } from "./routes";
import { getDesktopSlots } from "@/slots/getDesktopSlots";
import { StateProvider } from "@/context/StateContext";
import { App } from "@/modules/App";
import { DesktopColLayout } from "@/layouts/DesktopColLayout";
import { appReducer } from "./reducers";
import { initialState } from "./state";
import { routes as staticRoutes } from "@/app/mosaik/routes";

// import { AutoCollapseSidebarOnMobileEffect } from "@/lib/effects/components/AutoCollapseSidebarOnMobile";

export const metadata: Metadata = {
  title: "Mosaik - Rethinking Headless Architecture",
  description:
    "Mosaik — A flexible React/Next.js framework with headless CMS integration, modern state management, and dynamic theming for building scalable web apps.",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<object>
}>) {
  const Container = await getThemedComponent(
    "FluidContainer",
    process.env.MOSAIK_THEME
  );

  const routes = [...(await fetchRoutes()), ...staticRoutes];
  const slots = await getDesktopSlots({
    params: await params, // pass shared params if needed
    fetcher: () => Promise.resolve([]), // stub if needed
    routes,
    children
  });

  return (
    <StateProvider reducer={appReducer} initialState={initialState}>
      <App slug="/mosaik">
        <Container>
          <DesktopColLayout slots={slots}></DesktopColLayout>
        </Container>
      </App>
    </StateProvider>
  );
}
