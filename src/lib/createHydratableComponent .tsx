// lib/utils/createHydratableComponent.tsx
"use client";

import { useState, useEffect, ReactElement, ComponentType } from "react";

type BaseProps = {
  Component: ReactElement;
  [key: string]: any;
};

export function createHydratableComponent<T extends BaseProps>(
  renderClient: (props: T & { hydrated: boolean }) => ReactElement | null
): ComponentType<T> {
  return function HydratableComponent(props: T) {
    const { Component, ...rest } = props;
    const [hydrated, setHydrated] = useState(false);

    useEffect(() => {
      const id = requestIdleCallback(() => {
        setHydrated(true);
      });
      return () => cancelIdleCallback(id);
    }, []);

    const client = renderClient({ ...rest, Component, hydrated } as T & {
      hydrated: boolean;
    });

    if (!hydrated) return Component;

    return client;
  };
}
