import { SlotProps } from "./Slot";
import { ContentElementProps } from "./Content";

export type PageProps = {
  title: string;
  slug: string;
  content: ContentElementProps[];
  slots: SlotProps[];
};
