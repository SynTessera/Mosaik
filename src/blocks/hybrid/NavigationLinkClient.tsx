"use client";

import { useRouter } from "next/navigation";
import { useAppState } from "@/context/StateContext";
import { useThemedComponent } from "@/lib/hooks/useThemedComponent";
import { useEffect, useState } from "react";

export const NavigationLinkClient = ({ Component, ...props }: any) => {
  const NavLink = useThemedComponent("NavigationLink");
  const { state } = useAppState();
  const router = useRouter();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated || !NavLink) {
    // Before hydration, render the server-rendered static fallback
    return Component;
  }
  return (
    <NavLink
      {...props}
      onClick={() => router.push(props.href)}
      iconOnly={state?.sidebar.expanded === 1}
    />
  );
};
