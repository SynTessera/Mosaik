import { State } from "@/types/State";

export type collapsePayload = object;

export const collapse = (
  state: State,
) => {
  const newState = { ...state };

  newState.header.collapsed = true;

  return newState;
};
