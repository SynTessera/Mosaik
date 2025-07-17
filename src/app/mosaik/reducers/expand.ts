import { State } from "@/types/State";

export type expandPayload = object;

export const expand = (state: State) => {
  const newState = { sidebar: { ...state.sidebar } };

  newState.sidebar.expanded = ((newState.sidebar.expanded + 1) % 3) as
    | 0
    | 1
    | 2;
  return newState;
};
