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
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    try {
      const localState = JSON.parse(
        localStorage.getItem("state") || JSON.stringify(initialState)
      );
      dispatch({ type: "HYDRATE", payload: localState });
    } catch {}
  }, []);

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);
  return (
    <StateContext.Provider value={{ state: { ...state }, dispatch }}>
      {children}
    </StateContext.Provider>
  );
}

export const useAppState = () => {
  return useContext(StateContext);
};
