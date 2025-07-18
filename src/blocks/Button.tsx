"use client";

import { useThemedComponent } from "@/lib/hooks/useThemedComponent";
import { PropsWithChildren } from "react";

export const Button = ({ children, ...props }: PropsWithChildren<any>) => {
  const Cmp = useThemedComponent("Button");
  return <Cmp {...props}>{children}</Cmp>;
};
