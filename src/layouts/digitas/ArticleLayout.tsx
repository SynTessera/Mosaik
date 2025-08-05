// SynTessera\aegis\src\layouts\DesktopColLayout.tsx

import { Desktop } from "@/modules/Desktop";
import { PropsWithChildren } from "react";
import { getArticleSlots } from "@/slots/digitas/getArticleSlots";

export const ArticleLayout = async ({
  slots,
}: PropsWithChildren<{
  slots: Awaited<ReturnType<typeof getArticleSlots>>;
}>) => {
  return (
    <Desktop className="flex-col">
      <div className="flex w-full sticky top-0 z-10">{slots.header}</div>
      {slots.content}
      {slots.footer}
    </Desktop>
  );
};
