import { SidebarActionbarClient } from "./SidebarActionBarClient";
import { createHybridServerWrapper } from "@/lib/createHybridComponent";

export const SidebarActionBar = createHybridServerWrapper('ActionBar', SidebarActionbarClient)