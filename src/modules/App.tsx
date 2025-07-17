import React, { ReactElement } from "react";
import { Slot } from "./Slot";
import { DesktopColLayout } from "@/layouts/DesktopColLayout";

export type AppProps = {
  /**
   * A slug pattern like "/notes/:view" — so we know which params to extract.
   */
  slug: string;
  /**
   * Children will receive the matched params as props.
   */
  children: React.ReactNode;
  params: Record<string, string>;
  slots: Record<string, ReactElement | ReactElement[]>;
};

/**
 * `<App>` automatically parses the URL params that match your slug,
 * and injects them into all children as props.
 */
export const App: React.FC<AppProps> = async ({
  slug,
  children,
  params,
  slots,
}) => {
  // Extract param names from slug, e.g. ":view"
  const paramMatches = Array.from(slug.matchAll(/:([a-zA-Z0-9_]+)/g)).map(
    (m) => m[1]
  );

  const matchedParams: Record<string, string> = {};
  paramMatches.forEach((name: string) => {
    if (params[name]) matchedParams[name] = params[name]!;
  });

  // Inject matched params as props to each valid React element
  return (
    <>
      <DesktopColLayout slots={slots}>
        <Slot name="app" slots={slots}></Slot>
        {children}
      </DesktopColLayout>
    </>
  );
};
