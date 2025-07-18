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

export function StateProvider({
  reducer,
  initialState,
  children,
}: PropsWithChildren<{
  reducer: (state: State, action: Action<string, string, object>) => State;
  initialState: State;
}>) {
  let hydratedState = initialState;
  try {
    hydratedState = JSON.parse(
      localStorage.getItem("state") || JSON.stringify(initialState)
    );
  } catch {}
  const [state, dispatch] = useReducer(reducer, hydratedState);

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
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
