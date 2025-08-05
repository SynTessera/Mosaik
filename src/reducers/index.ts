"use client";

import { Action } from "@/types/Action";
import { collapse } from "./digitas/collapse";
import { expand } from "./digitas/expand";
import { State } from "@/types/State";

export const appReducer = (
  state: State,
  action: Action<string, string, object>
) => {
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
