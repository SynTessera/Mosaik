import clsx from "clsx";
import { Slide } from "./Slide";
import { Swiper, SwiperSlide } from "swiper/react";

export const Slider = ({ children, className, content }: any) => (
  <div
    className={clsx(
      "text-[1rem]",
      " top-[128px]  left-[40px]",
      "max-w-[700px]",
      className
    )}
  >
    {children}
  </div>
);
