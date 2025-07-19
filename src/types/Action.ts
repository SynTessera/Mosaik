import { IconNames } from "@/components/Icon";
import { Effect } from "./Effect";

export type Action<
  EffectTypes extends string,
  ActionTypes extends string,
  P
> = {
  type: ActionTypes;
  icon: IconNames;
  payload: P;
  effects?: Effect<EffectTypes>[];
};

export type ActionGenerator = () => Action<string, string, object>;
