import { createHybridServerWrapper } from "@/lib/createHybridComponent";
import { SidebarContentClient } from "./SidebarContentClient";

export const SidebarContent = createHybridServerWrapper(
  "SidebarContent",
  SidebarContentClient
);
