"use client";

import useAction from "@/lib/hooks/useAction";
import { useThemedComponent } from "@/lib/hooks/useThemedComponent";

export const ExpandButton = () => {
  const Cmp = useThemedComponent("ExpandButton", "ActionTrigger", "Button");
  const dispatch = useAction("EXPAND", {});
  return <Cmp onClick={() => dispatch()}>Collapse</Cmp>;
};
