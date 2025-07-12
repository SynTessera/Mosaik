"use client";

import React from "react";
import { useViewHost } from "./ViewHost";

type SlotProps = {
  name: string;
};

export const Slot: React.FC<SlotProps> = ({ name }) => {
  const { slots } = useViewHost();

  const elements = slots[name];
  if (!elements || elements.length === 0) return null;

  return (
    <>
      {elements.map((element, i) => (
        <React.Fragment key={name + i}>{element}</React.Fragment>
      ))}
    </>
  );
};
