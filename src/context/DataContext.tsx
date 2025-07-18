"use client";

import React, {
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { DataContext } from "./contexts/data";

// --- 1️⃣ Slot type ---
export type SlotRenderer = (
  props: PropsWithChildren<{ theme: Theme }>
) => React.ReactNode;

export type Theme = {
  slots: Record<string, SlotRenderer>;
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
  type,
}: PropsWithChildren<{
  fetcher: () => Promise<Response> | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  initialData: any;
  type: string;
}>) {
  const [data, setData] = useState(initialData);
  useEffect(() => {
    if (data !== null) return;
    (async () => {
      const prom = await fetcher();
      const json = await prom?.json();
      setData(json);
    })();
  },[]);
  return (
    <DataContext.Provider value={{ data, type }}>
      {children}
    </DataContext.Provider>
  );
}

export const useData = () => {
  return useContext(DataContext)?.data;
};
