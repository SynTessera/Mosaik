"use client";
import { PropsWithChildren } from "react";
import { useThemedComponent } from "@/lib/hooks/useThemedComponent";

export const ThemedClientComponent = ({
  name,
  ...props
}: PropsWithChildren<{ name: string }>) => {
  const Cmp = useThemedComponent(name);
  return <Cmp name={name} {...props} />;
};
