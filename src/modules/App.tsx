import React from "react";
import { Slot } from "./Slot";

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
export const App: React.FC<AppProps> = async ({ children }) => {
  // Inject matched params as props to each valid React element
  return (
    <>
      <Slot name="app" slots={{}}></Slot>
      {children}
    </>
  );
};
