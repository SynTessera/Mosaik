"use client";

import { useActions } from "@/context/ActionContext";
import { ActionTrigger, ActionTriggerTypes } from "./ActionTrigger";
import { useThemedComponent } from "@/lib/hooks/useThemedComponent";

export const ActionBar = (props: any) => {
  const { actions } = useActions() || {};
  const castedActions = actions as Record<ActionTriggerTypes, unknown>;
  const Cmp = useThemedComponent("ActionBar");

  return (
    <Cmp {...props}>
      {Object.keys(castedActions).map((action: string) => {
        const castedAction = action as ActionTriggerTypes;
        return <ActionTrigger key={action} type={castedAction} />;
      })}
    </Cmp>
  );
};
