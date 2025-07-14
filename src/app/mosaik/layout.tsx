import type { Metadata } from "next";

import { Desktop } from "@/modules/Desktop";
import { ThemeProvider } from "@/context/ThemeContext";
import { DesktopSidebar } from "@/blocks/DesktopSidebar";
import { DesktopContent } from "@/components/Content";
import { settings } from "@/themes/light/index";
import { StateProvider } from "@/context/StateContext";
import { appReducer } from "./reducer";
import { initialState } from "./state";
import { getThemedComponent } from "@/lib/server/getThemedComponent";

export const metadata: Metadata = {
  title: "Mosaik - Rethinking Headless Architecture",
  description:
    "Mosaik — A flexible React/Next.js framework with headless CMS integration, modern state management, and dynamic theming for building scalable web apps.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const Container = await getThemedComponent(
    "FluidContainer",
    process.env.MOSAIK_THEME
  );
  return (
    <ThemeProvider theme={{ settings }}>
      <StateProvider reducer={appReducer} initialState={initialState}>
        <Container>
          <Desktop>
            <DesktopSidebar />
            <DesktopContent>{children}</DesktopContent>
          </Desktop>
        </Container>
      </StateProvider>
    </ThemeProvider>
  );
}
