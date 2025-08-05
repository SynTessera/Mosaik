// SynTessera\aegis\src\app\mosaik\layout.tsx

import type { Metadata } from "next";
import { getThemedComponent } from "@/lib/server/getThemedComponent";
import { StateProvider } from "@/context/StateContext";
import { initialState } from "./state";
import { appReducer } from "@/reducers/digitas";
import { DesktopLayout } from "@/layouts/digitas/DesktopLayout";
import { getSlots } from "@/slots/digitas/getSlots";

// import { AutoCollapseSidebarOnMobileEffect } from "@/lib/effects/components/AutoCollapseSidebarOnMobile";

export const metadata: Metadata = {
  title: "Mosaik - Rethinking Headless Architecture",
  description:
    "Mosaik — A flexible React/Next.js framework with headless CMS integration, modern state management, and dynamic theming for building scalable web apps.",
};

export default async function RootLayout() {
  const Container = await getThemedComponent(
    "FluidContainer",
    process.env.MOSAIK_THEME
  );

  const slots = await getSlots();

  return (
    <StateProvider reducer={appReducer} initialState={initialState}>
      <Container>
        <DesktopLayout slots={slots}></DesktopLayout>
      </Container>
    </StateProvider>
  );
}

export const revalidate = 30;
