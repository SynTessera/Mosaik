"use client"

import { Effects } from "@/services/Effects";
import { AutoCollapseSidebarOnMobile } from "../generators/AutoCollapseSidebarOnMobile";

export const AutoCollapseSidebarOnMobileEffect = () => (
  <Effects when="mount" effects={[AutoCollapseSidebarOnMobile()!]} />
);
