"use client";

import { Action } from "@/types/Action";
import { State } from "@/types/State";
import { collapse } from "./collapse";
import { expand } from "./expand";

export const appReducer = (
  state: State,
  action: Action<string, string, object>
) => {
  console.log ("DISPATCH", action)
  switch (action.type) {
    case "COLLAPSE":
      return collapse(state);
    case "EXPAND":
      return expand(state);
    case "HYDRATE":
      return action.payload as State;
    default:
      return state;
  }
};
