import * as ActionButtons from "@/blocks/ActionButtons";

export type ActionTriggerTypes = keyof typeof ActionButtons;
export const ActionTrigger = ({
  type,
  ...props
}: {
  type: keyof typeof ActionButtons;
}) => {
  const Btn = ActionButtons[type] || (() => null);

  return <Btn {...props} />;
};
