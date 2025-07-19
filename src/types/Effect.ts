import { Action } from "./Action";

export type Effect<EffectTypes extends string> = {
  type: EffectTypes;
  actions?: {
     success: Action<string, string, object>[] 
     failure?: Action<string, string, object>[] 
    };
};
