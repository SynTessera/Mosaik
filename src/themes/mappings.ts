import { SliderClient } from "@/blocks/digitas/hybrid/SliderClient";
import { ThemedComponent } from "@/blocks/ThemedComponent";
import { Section } from "./digitas/Section";
import { AnimatedBlock } from "@/blocks/digitas/hybrid/AnimatedBlock";

export const blocks = {
  "shared.animatedblock": AnimatedBlock,
  "shared.slider": SliderClient,
  "shared.component": ThemedComponent,
  "shared.section": Section,
} as any;
