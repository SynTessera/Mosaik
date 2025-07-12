import { collapse, collapsePayload } from "./COLLAPSE";
import { expand, expandPayload } from "./EXPAND";

const actions = {
  COLLAPSE: collapse,
  EXPAND: expand
};

export interface payloads extends Record<keyof typeof actions, object> {
  COLLAPSE: collapsePayload;
  EXPAND: expandPayload;
}

export default actions;
