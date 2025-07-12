"use client";

import React, { useCallback, useEffect, useMemo } from "react";
import { useViewHost } from "./ViewHost";

type ViewProps = {
  id: string;
  slot: string;
  component?: React.ComponentType<any>;
  props?: Record<string, any>;
  children?: React.ReactNode;
  constraints?: Record<string, any>;
  states?: string[];
  actions?: string[];
  effects?: string[];
};

export const View: React.FC<ViewProps> = ({
  id,
  slot,
  component,
  props,
  children,
  constraints,
  states,
  actions,
  effects,
}) => {
  const { registerView } = useViewHost();
  console.log("VIEW ", slot);
  const mem = useCallback(() => <>{children}</>, [children]);
  useEffect(() => {
    registerView({
      id,
      slot,
      component: component ? component : mem,
      props,
      constraints,
      states,
      actions,
      effects,
    });
  }, [
    registerView,
    mem,
    component,
    actions,
    constraints,
    effects,
    id,
    props,
    slot,
    states,
  ]);

  // Does not render itself here — the ViewHost does!
  return null;
};
