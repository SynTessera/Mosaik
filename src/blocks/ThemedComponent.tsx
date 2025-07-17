import { getThemedComponent } from "@/lib/server/getThemedComponent";
import { PropsWithChildren } from "react";

export const ThemedComponent = async ({
  name,
  ...props
}: PropsWithChildren<{ name: string }>) => {
  const Cmp = await getThemedComponent(name);
  return <Cmp {...props} />;
};


