import { ReactNode } from "react";
import { DesktopSidebar } from "./DesktopSidebar";

export const DesktopSidebarWrapper = ({
  children,
}: {
  children: ReactNode;
}) => {
  return <DesktopSidebar>{children}</DesktopSidebar>;
};
