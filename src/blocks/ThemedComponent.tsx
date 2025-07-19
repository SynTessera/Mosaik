import { getThemedComponent } from "@/lib/server/getThemedComponent";
import { PropsWithChildren } from "react";

export const ThemedComponent = async <P extends object>({
  name,
  ...props
}: PropsWithChildren<{ name: string } & P>) => {
  const Cmp = await getThemedComponent(name);
  return <Cmp {...props} />;
};
