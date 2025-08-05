import { ActionGenerator } from "@/types/Action";

export const expand: ActionGenerator = () => ({ type: "EXPAND", payload: {}, effects: [], icon: 'FaChevronRight'});