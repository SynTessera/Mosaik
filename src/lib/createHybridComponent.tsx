// lib/hybrid/createHybridServerWrapper.tsx
import React from "react";

export function createHybridServerWrapper<P>(
  componentName: string,
  ClientComponent: React.ComponentType<P & { Component: React.ReactElement }>
) {
  return async function ServerWrapper(props: P) {
    const { getThemedComponent } = await import(
      "@/lib/server/getThemedComponent"
    );
    const Themed = await getThemedComponent(componentName);
    return <ClientComponent Component={<Themed {...props} />} {...props} />;
  };
}
