"use client";

import { collapse } from "@/app/mosaik/actions";
import useDispatch from "@/lib/hooks/useAction";
import { useThemedComponent } from "@/lib/hooks/useThemedComponent";

export const CollapseButton = () => {
  const Cmp = useThemedComponent("CollapseButton", "ActionTrigger", "Button");
  const dispatch = useDispatch(collapse());
  return <Cmp onClick={dispatch}>Collapse</Cmp>;
};
