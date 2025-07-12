/* eslint-disable @typescript-eslint/no-explicit-any */
import { ThemeContext } from "@/context/contexts/theme";
import { useContext, useMemo } from "react";

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside <ThemeProvider>");
  return ctx;
}

/**
 * Universal hook: get a themed component by slot name.
 */
export function useThemedComponent(
  slot: string,
  ...fallbackSlot: string[]
): // eslint-disable-next-line @typescript-eslint/no-explicit-any
React.FC<any> {
  const { settings, components } = useTheme();

  const render =
    components[slot] ||
    fallbackSlot.reduce(
      (cmp, slot) => cmp || (components[slot] as any),
      null
    ) ||
    (() => null);

  const Cmp = useMemo(
    () => (props: any) => render({ ...props, theme: settings }),
    []
  );
  if (!render) {
    throw new Error(`Slot "${slot}" not found in theme`);
  }

  // Return as normal React component
  return Cmp;
}
