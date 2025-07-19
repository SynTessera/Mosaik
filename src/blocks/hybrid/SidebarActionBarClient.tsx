"use client";

import { collapse, expand } from "@/app/mosaik/actions";
import { useAppState } from "@/context/StateContext";
import { createHydratableComponent } from "@/lib/createHydratableComponent ";
import { useMemo } from "react";
import { useThemedComponent } from "@/lib/hooks/useThemedComponent";
import { ActionButtonClient } from "./ActionButtonClient";
import { Icon, IconNames } from "@/components/Icon";
import clsx from "clsx";

export const SidebarActionbarClient = createHydratableComponent(
  (props: any & { hydrated: boolean }) => {
    const { state } = useAppState();
    const ActionBar = useThemedComponent("ActionBar");
    const actions = useMemo(() => {
      const actions = {} as any;
      if (Number(state?.sidebar?.expanded) < 2) actions.expand = expand();
      if (state?.sidebar?.expanded === 2) actions.collapse = collapse();
      return actions;
    }, [state]);

    return (
      <ActionBar {...props} >
        {Object.entries(actions).map(([key, action]) => {
          return (
            <ActionButtonClient key={key} action={action}>
              <Icon
                icon={
                  clsx({
                    FaChevronRight: Number(state?.sidebar.expanded) < 2,
                    FaChevronLeft: state?.sidebar.expanded === 2,
                  }) as IconNames
                }
              />
            </ActionButtonClient>
          );
        })}
      </ActionBar>
    );
  }
);
