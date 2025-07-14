import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";

export const CollapseButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <Button onClick={onClick} className="p-2 ">
      <Icon icon="FaChevronLeft" className="!h-6 !w-6" />
    </Button>
  );
};
