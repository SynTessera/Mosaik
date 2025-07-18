import { PropsWithChildren } from "react";
import { SidebarContentClient } from "./SidebarContentClient";
import { getThemedComponent } from "@/lib/server/getThemedComponent";

// Example sub-components:
export const SidebarContentServer = async ({
  children,
  ...props
}: PropsWithChildren) => {
  const Component = await getThemedComponent("SidebarContent");

  return (
    <SidebarContentClient
      {...props}
      Component={<Component>{children}</Component>}
    >
      {children}
    </SidebarContentClient>
  );
};
