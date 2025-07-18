"use client";

import { useActions } from "@/context/ActionContext";
import { ActionTrigger, ActionTriggerTypes } from "./ActionTrigger";
import { useThemedComponent } from "@/lib/hooks/useThemedComponent";
import { PropsWithChildren } from "react";

export const ActionBar = (props: PropsWithChildren) => {
  const { actions } = useActions() || {};
  const castedActions = actions as Record<ActionTriggerTypes, unknown>;
  console.log("ACTIONS", castedActions);
  const Cmp = useThemedComponent("ActionBar");
  return (
    <Cmp {...props}>
      {props.children ||
        Object.entries(castedActions).map(([key, action]: [string, any]) => {
          const actionType = action.type as ActionTriggerTypes;
          return <ActionTrigger key={key} type={actionType} />;
        })}
    </Cmp>
  );
};
