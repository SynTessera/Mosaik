import { State } from "@/types/State";

export type expandPayload = object;

export const expand = (state: State) => {
  const newState = { header: { ...state?.header } };

  newState.header.collapsed = false;
  return newState;
};
