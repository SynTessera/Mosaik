import type { Metadata } from "next";

import { Desktop } from "@/modules/Desktop";
import { ThemeProvider } from "@/context/ThemeContext";
import { Sidebar } from "@/components/Sidebar";
import { Content } from "@/components/Content";
import * as light from "@/themes/light/index";
import { StateProvider } from "@/context/StateContext";
import { appReducer } from "./reducer";
import { initialState } from "./state";

const { settings, ...components } = light;

export const metadata: Metadata = {
  title: "Mosaik - Rethinking Headless Architecture",
  description: "Mosaik — A flexible React/Next.js framework with headless CMS integration, modern state management, and dynamic theming for building scalable web apps.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider theme={{ settings, components }}>
      <StateProvider reducer={appReducer} initialState={initialState}>
        <Desktop>
          <Sidebar></Sidebar>
          <Content>{children}</Content>
        </Desktop>
      </StateProvider>
    </ThemeProvider>
  );
}
