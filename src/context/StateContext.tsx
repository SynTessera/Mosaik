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
import { settings } from "@/themes";

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
    const uiStateRaw = getCookie("uiState" + settings?.theme);
    hydratedState = uiStateRaw ? JSON.parse(uiStateRaw) : initialState;
    if (initialState.__noHydrate) hydratedState = initialState;
  } catch {}
  const [state, dispatch] = useReducer(reducer, hydratedState);

  useEffect(() => {
    document.cookie = `uiState${settings?.theme}=${encodeURIComponent(
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
