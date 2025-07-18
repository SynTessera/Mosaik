// components/IconClient.tsx
"use client";

import { createHydratableComponent } from "@/lib/createHydratableComponent ";

import { useThemedComponent } from "@/lib/hooks/useThemedComponent";
import { IconBaseProps } from "react-icons";

function IconHydratedClient(props: IconBaseProps) {
  const ThemedIcon = useThemedComponent("Icon");

  // Optional logic like tooltip, interactivity, etc.

  return <ThemedIcon {...props} hydrated />;
}

export const IconClient =
  createHydratableComponent(IconHydratedClient as any);
