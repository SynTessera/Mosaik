import clsx from "clsx";
import IconNext from "@/assets/arrowright.svg";

export type SwiperButtonNextProps = {
  className?: string;
  onClick: () => void;
  disabled?: boolean;
};

export const SwiperButtonNext = ({
  className,
  onClick,
  disabled,
}: any) => (
  <button
    className={clsx("bg-white rounded-full p-4", "uppercase", className)}
    disabled={disabled}
    onClick={onClick}
  >
    <IconNext className="h-4 w-4" />
  </button>
);
