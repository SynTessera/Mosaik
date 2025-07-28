import { createHybridServerWrapper } from "@/lib/createHybridComponent";
import { DesktopHeaderClient } from "./DesktopHeaderClient";

export const DesktopHeader = createHybridServerWrapper(
  "DesktopHeader",
  DesktopHeaderClient
);
