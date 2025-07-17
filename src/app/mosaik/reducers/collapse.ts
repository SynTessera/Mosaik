import { State } from "@/types/State";

export type collapsePayload = object;

export const collapse = (
  state: State,
) => {
  const newState = { ...state };

  newState.sidebar.expanded = 0;

  return newState;
};
