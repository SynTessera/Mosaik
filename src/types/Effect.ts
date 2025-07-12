import { Action } from "./Action";

export type Effect<EffectTypes extends string> = {
  type: EffectTypes;
  actions: Action<string, string, object>[];
};
