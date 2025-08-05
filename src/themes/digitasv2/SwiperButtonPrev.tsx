import clsx from "clsx";
import IconPrev from "@/assets/arrowleft.svg";

export type SwiperButtonPrevProps = {
  className?: string;
  onClick: () => void;
  disabled?: boolean;
};

export const SwiperButtonPrev = ({
  className,
  disabled,
  onClick,
}: SwiperButtonPrevProps) => (
  <button
    className={clsx("bg-white rounded-full p-4 w-fit", "uppercase", className)}
    disabled={disabled}
    onClick={onClick}
  >
    <IconPrev className="h-4 w-4" />
  </button>
);
