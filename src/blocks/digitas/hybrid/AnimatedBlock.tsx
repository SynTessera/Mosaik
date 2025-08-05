import { createHybridServerWrapper } from "@/lib/createHybridComponent";
import { DesktopHeaderClient } from "./DesktopHeaderClient";
import { AnimatedBlockClient } from "./AnimatedBlockClient";

export const AnimatedBlock = createHybridServerWrapper(
  "AnimatedBlock",
  AnimatedBlockClient
);
