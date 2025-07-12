import { getThemedComponent } from "@/lib/server/getThemedComponent";
import { PropsWithChildren } from "react";

export const TextContainer = async (props: PropsWithChildren) => {
  const Cmp = await getThemedComponent("TextContainer", "light");
  return <Cmp {...props} />;
};
