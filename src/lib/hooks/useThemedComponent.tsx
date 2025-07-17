// src/lib/hooks/useThemedComponent.tsx
"use client";

import { useEffect, useState } from "react";
import { loadThemedComponent } from "@/lib/util/loadThemedComponent";
import { useTheme } from "@/context/ThemeContext";

export function useThemedComponent(
  slot: string,
  ...fallbackSlots: string[]
): React.FC<any> {
  const { settings } = useTheme() || {};
  const [Component, setComponent] = useState<React.FC<any>>(() => () => null);

  useEffect(() => {
    let cancelled = false;
    const theme = settings?.theme || "light";

    const load = async () => {
      const allSlots = [slot, ...fallbackSlots];

      for (const s of allSlots) {
        const Cmp = await loadThemedComponent(theme, s);
        if (Cmp && !cancelled) {
          setComponent(
            () =>
              function ThemedComponent(props: any) {
                return <Cmp {...props} theme={settings} />;
              }
          );
          return;
        }
      }
    };

    load();
    return () => {
      cancelled = true;
    };
  }, [slot, settings?.theme]);

  return Component;
}
