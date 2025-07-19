import { getThemedComponent } from "@/lib/server/getThemedComponent";
import { ActionTrigger, ActionTriggerTypes } from "./ActionTrigger";
import { PropsWithChildren } from "react";

export const ActionBar = async (
  props: PropsWithChildren<{ actions: Record<ActionTriggerTypes, unknown> }>
) => {
  const { actions } = props;
  const castedActions = actions as Record<ActionTriggerTypes, unknown>;
  const Cmp = await getThemedComponent("ActionBar");
  return (
    <Cmp {...props}>
      {props.children ||
        Object.entries(castedActions).map(([key, action]: [string, any]) => {
          const actionType = action.type as ActionTriggerTypes;
          return <ActionTrigger key={key} type={actionType} action={action} />;
        })}
    </Cmp>
  );
};
