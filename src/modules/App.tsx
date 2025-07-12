"use client";

import React from "react";
import { useParams } from "next/navigation";
import { Slot } from "./Slot";
import { View } from "./View";

export type AppProps = {
  /**
   * A slug pattern like "/notes/:view" — so we know which params to extract.
   */
  slug: string;
  /**
   * Children will receive the matched params as props.
   */
  children: React.ReactNode;
};

/**
 * `<App>` automatically parses the URL params that match your slug,
 * and injects them into all children as props.
 */
export const App: React.FC<AppProps> = ({ slug, children }) => {
  const params = useParams() as Record<string, string | undefined>;

  // Extract param names from slug, e.g. ":view"
  const paramMatches = Array.from(slug.matchAll(/:([a-zA-Z0-9_]+)/g)).map(
    (m) => m[1]
  );

  const matchedParams: Record<string, string> = {};
  paramMatches.forEach((name) => {
    if (params[name]) matchedParams[name] = params[name]!;
  });

  // Inject matched params as props to each valid React element
  return (
    <View id="app" slot="main">
      <Slot name="app"></Slot>
      {children}    
    </View>
  );
};
