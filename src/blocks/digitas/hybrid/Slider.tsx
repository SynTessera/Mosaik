import { createHybridServerWrapper } from "@/lib/createHybridComponent";
import { SliderClient } from "./SliderClient";

export const Slider = createHybridServerWrapper(
  "Slider",
  SliderClient
);
