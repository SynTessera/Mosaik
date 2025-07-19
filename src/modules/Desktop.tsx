import React from "react";
import { getThemedComponent } from "@/lib/server/getThemedComponent";

export async function Desktop({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const DesktopLayout =
    (await getThemedComponent("DesktopLayout", process.env.MOSAIK_THEME)) ||
    (() => null);

  return (
    <DesktopLayout className={className}>
      {children}
    </DesktopLayout>
  );
}
