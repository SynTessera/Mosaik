"use client";

import React, { PropsWithChildren, ReactElement } from "react";

type SlotProps = {
  slots: Record<string, ReactElement | ReactElement[]>;
  name: string;
  props?: PropsWithChildren<any>;
};

export const Slot = ({ name, props, slots = {} }: SlotProps) => {
  const elements = Array.isArray(slots[name])
    ? slots[name]
    : !!slots[name]
    ? [slots[name]]
    : [];
  if ((elements as any[])?.length === 0) return null;

  return (
    <>
      {elements.map((element, i) => {
        return React.cloneElement(element, {
          ...((element?.props || {}) as any),
          ...props,
          key: name + i,
        });
      })}
    </>
  );
};
