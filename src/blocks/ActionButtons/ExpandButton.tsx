"use client";

import { expand } from "@/app/mosaik/actions";
import useDispatch from "@/lib/hooks/useAction";
import { useThemedComponent } from "@/lib/hooks/useThemedComponent";

export const ExpandButton = () => {
  const Cmp = useThemedComponent("ExpandButton", "ActionTrigger", "Button");
  const dispatch = useDispatch(expand());
  return <Cmp onClick={dispatch} />;
};
