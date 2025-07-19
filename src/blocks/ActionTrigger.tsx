import * as ActionButtons from "@/blocks/ActionButtons";
import { Icon } from "@/components/Icon";
import { ActionButton } from "@/blocks/hybrid/ActionButton";
import { Action } from "@/types/Action";

export type ActionTriggerTypes = keyof typeof ActionButtons;
export const ActionTrigger = ({
  action,
}: {
  action: Action<string, string, object>;
}) => {
  return (
    <ActionButton action={action} label={action.type}>
      <Icon icon={action.icon} className="h-6 w-6" />
    </ActionButton>
  );
};
