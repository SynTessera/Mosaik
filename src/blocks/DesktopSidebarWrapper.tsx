import { ReactNode } from "react";
import { DesktopSidebar } from "./DesktopSidebar";
import { getThemedComponent } from "@/lib/server/getThemedComponent";

export const DesktopSidebarWrapper = async ({
  children,
}: {
  children: ReactNode;
}) => {
  const Cmp = await getThemedComponent("DesktopSidebar");
  if (typeof window === "undefined")
    return <Cmp state={{ sidebar: { expanded: 2 } }}>{children}</Cmp>;
  return <DesktopSidebar>{children}</DesktopSidebar>;
};
