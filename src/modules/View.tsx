"use client";

import React, { useEffect, useMemo } from "react";
import { useViewHost } from "./ViewHost";

type ViewProps = {
  id: string;
  slot: string;
  props?: Record<string, any>;
  children?: React.ReactElement;
  constraints?: Record<string, any>;
  states?: string[];
  actions?: string[];
  effects?: string[];
};

export const View = ({
  id,
  slot,
  props,
  children,
  constraints,
  states,
  actions,
  effects,
}: ViewProps) => {
  const { registerView } = useViewHost();
  const mem = useMemo(() => children, [children]);
  useEffect(() => {
    const child = Array.isArray(children) ? <>{children}</> : children;
    registerView({
      id,
      slot,
      component: child,
      props,
      constraints,
      states,
      actions,
      effects,
    });
  }, [
    registerView,
    mem,
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
