"use client";

import React, { PropsWithChildren, useContext, useReducer } from "react";
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
  return (
    <StateContext.Provider value={{ state: { ...state }, dispatch }}>
      {children}
    </StateContext.Provider>
  );
}

export const useAppState = () => {
  return useContext(StateContext);
};
