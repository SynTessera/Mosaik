import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";

export const ExpandButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <Button onClick={onClick} className="p-2 m-1">
      <Icon icon="FaChevronRight" className="!h-8 !w-8" />
    </Button>
  );
};
