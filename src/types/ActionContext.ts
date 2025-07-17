import { Action } from "./Action";

export type ActionContext = {
  actions: Record<string, Action<string, string, object>>;
};
