"use client" 

import { initialState } from "@/lib/mosaik/state";
import { State } from "@/types/State";
import { createContext, Dispatch } from "react";

export const StateContext = createContext<{
  state: State | undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dispatch: Dispatch<any>;
}>({ state: initialState, dispatch: () => null });
