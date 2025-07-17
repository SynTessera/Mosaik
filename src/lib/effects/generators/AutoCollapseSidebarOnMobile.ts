import { collapse, expand } from "@/app/mosaik/actions";
import { Effect } from "@/types/Effect";

export const AutoCollapseSidebarOnMobile = (): Effect<string> | null => {
  if (typeof window === "undefined") return null;

  if (window.innerWidth > 768)
    return {
      type: "AutoCollapseSidebarOnMobile",
      actions: {
        success: [],
      },
    };
  if (window.innerWidth > 425)
    return {
      type: "AutoCollapseSidebarOnMobile",
      actions: {
        success: [collapse(), expand()],
      },
    };
  return {
    type: "AutoCollapseSidebarOnMobile",
    actions: {
      success: [collapse()],
      //   failure: [],
    },
  };
};
