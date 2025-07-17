import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import clsx from "clsx";

export const ExpandButton = ({
  onClick,
  className,
}: {
  onClick: () => void;
  className?: string;
}) => {
  return (
    <Button onClick={onClick} className="p-2 m-1">
      <Icon icon="FaChevronRight" className={clsx("!h-6 !w-6", className)} />
    </Button>
  );
};
