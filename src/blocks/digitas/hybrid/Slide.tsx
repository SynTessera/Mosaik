import { createHybridServerWrapper } from "@/lib/createHybridComponent";
import { SlideClient } from "./SlideClient";

export const Slide = createHybridServerWrapper(
  "Slide",
  SlideClient
);
