"use client"

import clsx from "clsx";
import { Button } from "@/blocks/Button";
import { Icon } from "@/components/Icon";

export const ExpandButton = ({
  onClick,
  className,
}: {
  onClick: () => void;
  className?: string;
}) => {
  return (
    <Button onClick={onClick} className={clsx("p-2 ", className)} label="Expand">
      <Icon icon="FaChevronRight" className="!h-6 !w-6" />
    </Button>
  );
};
