"use client";

import { Action } from "@/types/Action";
import { State } from "@/types/State";
import { collapse } from "./actions/COLLAPSE";
import { expand } from "./actions/EXPAND";

export const appReducer = (
  state: State,
  action: Action<string, string, object>
) => {
  switch (action.type) {
    case "COLLAPSE":
      return collapse(state);
    case "EXPAND":
      return expand(state);
    default:
      return state;
  }
};
