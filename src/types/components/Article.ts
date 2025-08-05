import { getArticleSlots } from "@/slots/digitas/getArticleSlots";
import { SlotProps } from "./Slot";

export type ArticleProps = {
  title: string;
  content: string;
  slots: SlotProps[]
};
