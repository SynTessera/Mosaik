"use client";

import { useAppState } from "@/context/StateContext";
import { useThemedComponent } from "@/lib/hooks/useThemedComponent";
import { useEffect, useState, ReactElement } from "react";

type Props = {
  Component: ReactElement;
  [key: string]: any;
};

export function SidebarContentClient(props: Props) {
  const { Component, ...rest } = props;
  const SidebarContent = useThemedComponent("SidebarContent");
  const { state } = useAppState();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated || !SidebarContent) {
    // Before hydration, render the server-rendered static fallback
    return Component;
  }

  return <SidebarContent {...rest} state={state} hydrated={hydrated} />;
}
