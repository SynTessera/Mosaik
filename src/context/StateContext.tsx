"use client";

import React, { PropsWithChildren, useContext, useReducer } from "react";
import { StateContext } from "./contexts/state";
import { State } from "@/types/State";
import { Action } from "@/types/Action";

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

export function StateProvider({
  reducer,
  initialState,
  children,
}: PropsWithChildren<{
  reducer: (state: State, action: Action<string, string, object>) => State;
  initialState: State;
}>) {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log("STATE ", state);
  return (
    <StateContext.Provider value={{ state: { ...state }, dispatch }}>
      {children}
    </StateContext.Provider>
  );
}

export const useAppState = () => {
  return useContext(StateContext);
};
