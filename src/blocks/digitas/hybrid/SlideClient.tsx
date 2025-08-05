"use client";

import { SwiperSlide } from "swiper/react";
import { createHydratableComponent } from "@/lib/createHydratableComponent";
import { useThemedComponent } from "@/lib/hooks/useThemedComponent";

export const SlideClient = createHydratableComponent<any>(
  ({ className, ...props }: { className?: string }) => {
    const Cmp = useThemedComponent("Slide");
    return (
      <SwiperSlide>
        <Cmp className={className} {...props} />
      </SwiperSlide>
    );
  }
);
