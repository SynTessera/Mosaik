/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ThemeSettings } from "@/types/Theme";
import type { ThemeConfig } from "@/types/ThemeConfig";
import { sidebarActions } from "@/features/sidebar/actions";

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

export const defaultTheme: ThemeConfig = {
  layout: {
    dimensions: {
      sidebar: {
        minWidth: '240px',
        maxWidth: '320px'
      },
      header: {
        height: '64px'
      }
    }
  },
  components: {
    // ...existing code...
  },
  actions: {
    toggleSidebar: {
      id: "toggleSidebar",
      component: "IconButton",
      icon: "FaChevronLeft",
      handler: sidebarActions.expand,
    },
  },
  settings,
};
