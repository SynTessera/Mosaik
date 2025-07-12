import { Action } from "./Action";

export type ActionContext<P extends object> = {
  actions: Record<string, (payload?: P) => Action<string, string, P>>;
};
