import { useState, useEffect } from "react";
import { defaultTailwindBreakpoints } from "../tailwindDefaults";

type BreakpointKey = keyof typeof defaultTailwindBreakpoints;
type BreakpointMap = Record<BreakpointKey, number>;

export function useCurrentBreakpoint(breakpointsOverride?: BreakpointMap) {
  const breakpoints = breakpointsOverride ?? defaultTailwindBreakpoints;
  const [current, setCurrent] = useState<BreakpointKey | null>(null);

  useEffect(() => {
    const entries = Object.entries(breakpoints).sort((a, b) => a[1] - b[1]) as [
      BreakpointKey,
      number
    ][];

    // Generate ordered list of media queries for each breakpoint
    const mqs = entries.map(([key, min], index) => {
      const max =
        index < entries.length - 1
          ? entries[index + 1][1] - 0.02 // prevent overlap
          : undefined;

      const queryString = max
        ? `(min-width: ${min}px) and (max-width: ${max}px)`
        : `(min-width: ${min}px)`;

      return {
        key,
        query: window.matchMedia(queryString),
      };
    });

    const update = () => {
      const match = mqs.find(({ query }) => query.matches);
      setCurrent(match?.key ?? null);
    };

    mqs.forEach(({ query }) => query.addEventListener("change", update));
    update(); // initial check

    return () => {
      mqs.forEach(({ query }) => query.removeEventListener("change", update));
    };
  }, [breakpoints]);

  return current;
}
