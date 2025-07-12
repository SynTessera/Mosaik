import { Effect } from "./Effect";

export type Action<
  EffectTypes extends string,
  ActionTypes extends string,
  P 
> = {
  type: ActionTypes;
  payload: P;
  effects: Effect<EffectTypes, ActionTypes>[];
};
