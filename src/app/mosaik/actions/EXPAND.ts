import { State } from "@/types/State";

export type expandPayload = object;

export const expand = (
  state: State,
) => {
  const newState = { ...state };

  newState.sidebar.collapsed = false;

  return newState;
};
