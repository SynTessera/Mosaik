"use client";

import { useAppState } from "@/context/StateContext";
import { useThemedComponent } from "@/lib/hooks/useThemedComponent";
import { createHydratableComponent } from "@/lib/createHydratableComponent";

export const ActionButtonClient = createHydratableComponent(
  ({ action, ...props }: any) => {
    const ActionButton = useThemedComponent("ActionButton");
    const { dispatch } = useAppState();
    return (
      <ActionButton
        {...props}
        onClick={() => dispatch(action)}
        label={action.type}
      />
    );
  }
);
