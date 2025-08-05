import { SliderClient } from "@/blocks/digitas/hybrid/SliderClient";
import { ThemedComponent } from "@/blocks/ThemedComponent";
import { Section } from "./Section";
import { AnimatedBlock } from "@/blocks/digitas/hybrid/AnimatedBlockClient";

export const components = {
  "shared.herotext": "HeroText",
  "shared.slider": "Slider",
  "shared.slide": "Slide",
  "shared.image": "Image",
  "shared.component": "ThemedComponent",
  "shared.spacer": "Spacer",
  "shared.section": "Section",
  "shared.footer": "DigitasFooter",
  "shared.link": "InternalLink",
} as any;

export const blocks = {
  "shared.hero": AnimatedBlock,
  "shared.slider": SliderClient,
  "shared.component": ThemedComponent,
  "shared.section": Section,
} as any;
