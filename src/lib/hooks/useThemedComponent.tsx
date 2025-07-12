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
): React.FC<any> {
  const { settings, ...slots } = useTheme();

  const render =
    slots[slot] ||
    fallbackSlot.reduce((cmp, slot) => cmp || slots[slot], null) ||
    (() => null);

  const Cmp = useMemo(
    () => (props) => render({ ...props, theme: settings }),
    []
  );
  if (!render) {
    throw new Error(`Slot "${slot}" not found in theme`);
  }

  // Return as normal React component
  return Cmp;
}
