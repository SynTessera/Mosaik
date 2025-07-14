"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { ThemeContext } from "@/context/contexts/theme";
import { useContext, useEffect, useState } from "react";

/**
 * Hook: useTheme context safely
 */
export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside <ThemeProvider>");
  return ctx;
}

/**
 * Hook:
 * Dynamically import themed component by slot name with fallback.
 */
export function useThemedComponent(
  slot: string,
  ...fallbackSlots: string[]
): React.FC<any> {
  const { settings } = useTheme();
  const [Component, setComponent] = useState<React.FC<any>>(() => () => null);
  useEffect(() => {
    let cancelled = false;

    const importComponent = async (name: string) => {
      try {
        const mod = await import(`@/themes/${settings.theme}/${name}`);
        return mod[name];
      } catch {
        console.warn(`Could not import ${name} for theme ${settings.theme}`);
        return null;
      }
    };

    const load = async () => {
      let Found = await importComponent(slot);
      if (!Found) {
        for (const fallback of fallbackSlots) {
          Found = await importComponent(fallback);
          if (!Found) break;
        }
      }
      if (!cancelled && Found) {
        // eslint-disable-next-line react/display-name
        setComponent(() => (props: any) => (
          <Found {...props} theme={settings} />
        ));
      }
    };

    load();
    return () => {
      cancelled = true;
    };
  }, [slot]);

  return Component;
}
