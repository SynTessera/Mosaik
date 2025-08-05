"use client";

import { useThemedComponent } from "@/lib/hooks/useThemedComponent";
import { useEffect } from "react";
import { useAppState } from "@/context/StateContext";
import { createHydratableComponent } from "@/lib/createHydratableComponent";
import { collapse, expand } from "@/lib/actions";

export const DesktopHeaderClient = createHydratableComponent(
  ({ canExpand, ...props }: any) => {
    const { dispatch, state } = useAppState();
    const Cmp = useThemedComponent("DesktopHeader");

    useEffect(() => {
    const ele = document.getElementsByClassName("scrollcontainer")?.[0];

      ele?.addEventListener("scroll", () => {
        if (ele.scrollTop > 48) {
          dispatch(collapse());
        } else if (ele.scrollTop === 0) {
          dispatch(expand());
        }
      });
    });

    return <Cmp {...props} collapsed={!canExpand ? true : state?.header?.collapsed} />;
  }
);
