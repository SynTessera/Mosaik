"use client";
import { PropsWithChildren } from "react";
import { useThemedComponent } from "@/lib/hooks/useThemedComponent";

export const ThemedClientComponent = <Props,>({
  name,
  ...props
}: PropsWithChildren<{ name: string } & Props>) => {
  const Cmp = useThemedComponent(name);
  return <Cmp name={name} {...props} />;
};
