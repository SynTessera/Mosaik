/* eslint-disable react-hooks/rules-of-hooks */
import { getThemedComponent } from "@/lib/server/getThemedComponent";
import { PropsWithChildren } from "react";

export const TextContainer = async (props: PropsWithChildren) => {
  const Cmp = await getThemedComponent("TextContainer", "light");
  console.log ("TEXT CONTAINER", Cmp)
  return <Cmp {...props} />;
};
