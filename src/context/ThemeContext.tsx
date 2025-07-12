"use client";

import React, { PropsWithChildren, useEffect, useMemo, useState } from "react";
import { ThemeContext } from "./contexts/theme";

// --- 1️⃣ Slot type ---
export type SlotRenderer = (
  props: PropsWithChildren<{ theme: Theme }>
) => React.ReactNode;

export type Theme = {
  slots: Record<string, SlotRenderer>;
  tokens?: Record<string, any>;
  settings: {
    navigation: {
      showTooltip: boolean;
    };
    userPreferences: {
      mode: "light" | "dark";
    };
    preferences: {
      autoMode: ("system" | "setting" | "static")[];
    };
  };
};

export type StaticTheme = Record<string, React.FC> & {
  settings: Theme["settings"];
};
// --- 2️⃣ Context ---

export function ThemeProvider({
  theme,
  children,
}: {
  theme: Theme | StaticTheme;
  children: React.ReactNode;
}) {
  const [tmpTheme, setTheme] = useState(useMemo(() => theme, [theme]));

  useEffect(() => {
    console.log("THEME", theme);
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
  }, [tmpTheme]);

  return (
    <ThemeContext.Provider value={tmpTheme}>{children}</ThemeContext.Provider>
  );
}
