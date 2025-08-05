import { SliderClient } from "@/blocks/digitas/hybrid/SliderClient";
import { ThemedComponent } from "@/blocks/ThemedComponent";
import { Section } from "./digitas/Section";

export const blocks = {
  "shared.slider": SliderClient,
  "shared.component": ThemedComponent,
  "shared.section": Section,
} as any;
