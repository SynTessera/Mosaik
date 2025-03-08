import * as FA from "react-icons/fa";
import * as MUI from "react-icons/md";
import * as LU from "react-icons/lu";
import * as FA7 from "react-icons/fa6";
import * as CG from "react-icons/cg";
import * as TB from "react-icons/tb";
import * as GI from "react-icons/gi";
import * as IO5 from "react-icons/io5";
import * as IO from "react-icons/io";
import * as SI from "react-icons/si";
import * as BI from "react-icons/bi";
import { ComponentType } from "react";

export const allIcons = {
  ...FA,
  ...FA7,
  ...MUI,
  ...LU,
  ...CG,
  ...TB,
  ...GI,
  ...IO5,
  ...IO,
  ...SI,
  ...BI,
} as Record<string, ComponentType>;

export default allIcons;
