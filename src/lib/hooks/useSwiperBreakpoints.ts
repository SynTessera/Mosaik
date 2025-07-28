import { useMemo } from "react";
import { defaultTailwindBreakpoints } from "../tailwindDefaults";

type BreakpointMap = Record<string, number>;

type TailwindBreakpointConfig = Partial<
  Record<keyof typeof defaultTailwindBreakpoints, any>
>;

export function useSwiperBreakpoints(
  config: TailwindBreakpointConfig,
  breakpointsOverride?: BreakpointMap
) {
  const breakpoints = breakpointsOverride ?? defaultTailwindBreakpoints;

  return useMemo(() => {
    const swiperConfig: Record<number, any> = {};

    for (const [key, value] of Object.entries(config)) {
      const px = breakpoints[key];
      if (typeof px !== 'undefined') {
        swiperConfig[px] = value;
      }
    }

    return swiperConfig;
  }, [config, breakpoints]);
}