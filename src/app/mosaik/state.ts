import { State } from "@/types/State";

export const initialState: State = {
  sidebar: {
    collapsed:
      typeof window === "undefined" ? false : window?.innerWidth <= 425,
  },
};
