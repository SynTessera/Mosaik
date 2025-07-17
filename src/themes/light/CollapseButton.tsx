import clsx from "clsx";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";

export const CollapseButton = ({
  onClick,
  className,
}: {
  onClick: () => void;
  className?: string;
}) => {
  return (
    <Button onClick={onClick} className="p-2 ">
      <Icon icon="FaChevronLeft" className={clsx("!h-6 !w-6", className)} />
    </Button>
  );
};
