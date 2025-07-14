"use client";

import { useAppState } from "@/context/StateContext";
import { NavigationLink } from "./NavigationLink";
import { NavigationLinkProps } from "@/types/NavigationLinkProps";
import { Tooltip } from "react-tooltip";
import { useTheme } from "@/lib/hooks/useThemedComponent";

export const NavigationLinkClient = (props: NavigationLinkProps) => {
  const { href, label } = props;
  const { state } = useAppState();
  const { settings } = useTheme();
  const id = href.split("/").pop();

  return (
    <>
      <NavigationLink {...props} iconOnly={!!state?.sidebar.collapsed} />
      {state?.sidebar.collapsed && settings.navigation.showTooltip && (
        <Tooltip anchorSelect={`#${id}`}>{label}</Tooltip>
      )}
    </>
  );
};
