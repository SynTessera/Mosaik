import { getArticleSlots } from "@/slots/digitas/getArticleSlots";

export type SlotProps = {
    name: keyof Awaited<ReturnType<typeof getArticleSlots>>;
    fragment: any;
}