"use client";

import React, {
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { ThemeContext } from "./contexts/theme";

// --- 1️⃣ Slot type ---
export type SlotRenderer = (
  props: PropsWithChildren<{ theme: Theme }>
) => React.ReactNode;

export type Theme = {
   
  settings: {
    classNames?: Record<string, string>;
    theme: string;
    navigation: {
      showTooltip: boolean;
    };
    userPreferences: {
      mode: "light" | "dark";
    };
    preferences: {
      autoMode: ("system" | "setting" | "static")[];
    };
    components?: any
    blocks?: Record <string,React.ComponentType<any>>
  };
};

export type StaticTheme = {
  settings: Theme["settings"];
} & Theme;
// --- 2️⃣ Context ---

export function ThemeProvider({
  theme,
  children,
}: {
  theme: Theme;
  children: React.ReactNode;
}) {
  const [tmpTheme, setTheme] = useState(theme);

  useEffect(() => {
    const renderedTheme = tmpTheme;
    if (
      renderedTheme.settings.preferences.autoMode[0] === "system" &&
      window.matchMedia
    ) {
      const query = window.matchMedia("(prefers-color-scheme: dark)");

      if (query.matches) {
        renderedTheme.settings.userPreferences.mode = "dark";
      } else {
        if (!query.matches)
          renderedTheme.settings.userPreferences.mode = "light";
      }

      setTheme(() => renderedTheme);
    }
  }, []);

  return (
    <ThemeContext.Provider value={tmpTheme}>{children}</ThemeContext.Provider>
  );
}

export const useTheme = () => {
  return useContext(ThemeContext);
};
