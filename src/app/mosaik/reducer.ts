"use client";

import { Action } from "@/types/Action";
import { State } from "@/types/State";
import actions from "./actions";
import { collapse } from "./actions/COLLAPSE";
import { expand } from "./actions/EXPAND";

export const appReducer = <
  A extends Action<string, keyof typeof actions, object>
>(
  state: State,
  action: A
) => {
  switch (action.type) {
    case "COLLAPSE":
      return collapse(state);
    case "EXPAND":
      return expand(state);
    default:
      return state;
  }
  return state;
};
