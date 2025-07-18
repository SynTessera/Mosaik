import { createHybridServerWrapper } from "@/lib/createHybridComponent";
import { NavigationLinkClient } from "./NavigationLinkClient";

export const NavigationLink = createHybridServerWrapper(
  "NavigationLink",
  NavigationLinkClient
);
