"use client" 

import { initialState } from "@/lib/state";
import { State } from "@/types/State";
import { createContext, Dispatch } from "react";

export const StateContext = createContext<{
  state: State | undefined;
   
  dispatch: Dispatch<any>;
}>({ state: initialState, dispatch: () => null });
