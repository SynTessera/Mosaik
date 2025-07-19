"use client";

import React, {
  PropsWithChildren,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { StateContext } from "./contexts/state";
import { State } from "@/types/State";
import { Action } from "@/types/Action";
import { getCookie } from "@/lib/util/getCookie";

export function StateProvider({
  reducer,
  initialState,
  children,
}: PropsWithChildren<{
  reducer: (state: State, action: Action<string, string, object>) => State;
  initialState: State;
}>) {
  let hydratedState = null;
  try {
    const uiStateRaw = getCookie("uiState");
    hydratedState = uiStateRaw ? JSON.parse(uiStateRaw) : initialState;
  } catch {}
  const [state, dispatch] = useReducer(reducer, hydratedState);

  useEffect(() => {
    document.cookie = `uiState=${encodeURIComponent(
      JSON.stringify(state)
    )}; path=/; SameSite=Lax`;
  }, [state]);
  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
}

export const useAppState = () => {
  return useContext(StateContext);
};
