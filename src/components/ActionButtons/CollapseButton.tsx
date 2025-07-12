"use client";

import useAction from "@/lib/hooks/useAction";
import { useThemedComponent } from "@/lib/hooks/useThemedComponent";

export const CollapseButton = () => {
  const Cmp = useThemedComponent("CollapseButton", "ActionTrigger", "Button");
  const dispatch = useAction("COLLAPSE", {});
  return <Cmp onClick={() => dispatch()}>Collapse</Cmp>;
};
