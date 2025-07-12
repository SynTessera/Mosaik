"use client";

import React, {
  PropsWithChildren,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { StateContext } from "./contexts/state";
import { State } from "@/types/State";
import { Action } from "@/types/Action";
import { DataContext } from "./contexts/data";

// --- 1️⃣ Slot type ---
export type SlotRenderer = (
  props: PropsWithChildren<{ theme: Theme }>
) => React.ReactNode;

export type Theme = {
  slots: Record<string, SlotRenderer>;
  tokens?: Record<string, any>;
  settings: {
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

export function DataProvider({
  fetcher,
  children,
  initialData = null,
}: PropsWithChildren<{
  fetcher: () => Promise<Response> | null;
  initialData: any;
}>) {
  const [data, setData] = useState(initialData);
  useEffect(() => {
    if (data !== null) return;
    (async () => {
      const prom = await fetcher();
      const json = await prom.json();
      setData(json);
    })();
  });
  return (
    <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
  );
}

export const useData = () => {
  return useContext(DataContext).data;
};
