import { getThemedComponent } from "@/lib/server/getThemedComponent";
import { PropsWithChildren } from "react";

export const Button = async ({
  children,
  ...props
}: PropsWithChildren<any>) => {
  if (!props.label)
    throw new Error("Buttons need a label to comply with WCAG.");

  const Cmp = await getThemedComponent("Button");
  return <Cmp {...props}>{children}</Cmp>;
};
