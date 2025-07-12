import { Action } from "./Action";

export type Effect<EffectTypes extends string, ActionTypes extends string> = {
  type: EffectTypes;
  actions: Action<ActionTypes>[];
};
