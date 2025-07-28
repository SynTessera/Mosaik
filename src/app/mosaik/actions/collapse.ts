import { ActionGenerator } from "@/types/Action";

export const collapse: ActionGenerator = () => ({
  type: "COLLAPSE",
  payload: {},
  effects: [],
  icon: "FaChevronLeft",
});
