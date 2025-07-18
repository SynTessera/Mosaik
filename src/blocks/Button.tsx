"use client";

import { useThemedComponent } from "@/lib/hooks/useThemedComponent";
import { PropsWithChildren } from "react";

export const Button = ({ children, ...props }: PropsWithChildren<any>) => {
  if (!props.label) throw new Error('Buttons need a label to comply with WCAG.');

  const Cmp = useThemedComponent("Button");
  return <Cmp {...props}>{children}</Cmp>;
};
