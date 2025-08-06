/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ThemeSettings } from "@/types/Theme";

export const settings: ThemeSettings = {
  theme: "light",
  navigation: {
    showTooltip: true,
    sidebar: {
      defaultState: 0,
      transitions: true,
    },
  },
  userPreferences: {
    mode: "dark",
    sidebarBehavior: "remember",
  },
  preferences: {
    autoMode: ["system"],
  },
};