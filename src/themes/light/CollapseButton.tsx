"use client";

import clsx from "clsx";
import { Button } from "@/blocks/Button";
import { Icon } from "@/components/Icon";

export const CollapseButton = ({
  onClick,
  className,
}: {
  onClick: () => void;
  className?: string;
}) => {
  return (
    <Button onClick={onClick} label="Collapse" >
      <Icon icon="FaChevronLeft" className={clsx("!h-6 !w-6", className)} />
    </Button>
  );
};
