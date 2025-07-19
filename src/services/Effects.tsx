"use client";

import { Effect } from "@/types/Effect";
import { useEffect } from "react";
import { useAppState } from "@/context/StateContext";
import * as effectRunners from "@/lib/effects";
export const Effects = ({
  effects = [],
  when,
  deps,
}: {
  effects: Effect<string>[];
  when: string | any[];
  deps?: any[];
}) => {
  const { dispatch, state } = useAppState();
  useEffect(() => {
    if (when === "mount") {
      effects.forEach((effect) => {
        const effectRunner = (effectRunners as any)[effect.type];
        effectRunner?.({ dispatch, state });
        try {
          effect.actions?.success?.forEach(dispatch);
        } catch {
          effect.actions?.failure?.forEach(dispatch);
        }
      });
    }
    return () => {};
  }, deps);

  return null;
};
