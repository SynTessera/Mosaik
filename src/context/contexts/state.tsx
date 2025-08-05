"use client" 

import { initialState } from "@/app/mosaik/state";
import { State } from "@/types/State";
import { createContext, Dispatch } from "react";

export const StateContext = createContext<{
  state: State | undefined;
   
  dispatch: Dispatch<any>;
}>({ state: initialState, dispatch: () => null });
