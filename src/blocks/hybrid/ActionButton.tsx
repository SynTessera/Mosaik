import { createHybridServerWrapper } from "@/lib/createHybridComponent";
import { ActionButtonClient } from "./ActionButtonClient";

export const ActionButton = createHybridServerWrapper(
  "ActionButton",
  ActionButtonClient
);
