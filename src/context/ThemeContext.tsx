"use client";

import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import type { Theme } from "@/types/Theme";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

// --- 1️⃣ Slot type ---
export type SlotRenderer = (
  props: PropsWithChildren<{ theme: Theme }>
) => React.ReactNode;

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
    <ThemeContext.Provider value={{ theme: tmpTheme, setTheme }}>{children}</ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
