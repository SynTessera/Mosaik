"use client";

import { Effect } from "@/types/Effect";
import { useEffect } from "react";
import { useAppState } from "@/context/StateContext";

export const Effects = ({
  effects = [],
  when,
}: {
  effects: Effect<string>[];
  when: string | any[];
}) => {
  const { dispatch } = useAppState();
  useEffect(() => {
    if (when === "mount") {
      effects.forEach((effect) => {
        try {
          effect.actions.success?.forEach(dispatch);
        } catch {
          effect.actions.failure?.forEach(dispatch);
        }
      });
    }
    return () => {};
  }, []);

  return null;
};
