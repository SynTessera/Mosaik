"use client";

import clsx from "clsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { createHydratableComponent } from "@/lib/createHydratableComponent";
import { useThemedComponent } from "@/lib/hooks/useThemedComponent";

export const SlideClient = createHydratableComponent(
  ({ className, ...props }: { className?: string; content: any }) => {
    const Cmp = useThemedComponent('Slide');
    return (
      <SwiperSlide >
        <Cmp {...props} />
      </SwiperSlide>
    );
  }
);
