"use client";

import { useThemedComponent } from "@/lib/hooks/useThemedComponent";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import { ThemedClientComponent } from "@/blocks/ThemedClientComponent";
import { useCallback, useRef, useState } from "react";

import type { SwiperButtonPrevProps } from "@/themes/digitas/SwiperButtonPrev";
import { SwiperButtonNextProps } from "@/themes/digitas/SwiperButtonNext";

import "swiper/css";
import "swiper/css/pagination";
import { useSwiperBreakpoints } from "@/lib/hooks/useSwiperBreakpoints";
import { useCurrentBreakpoint } from "@/lib/hooks/useCurrentBreakpoint";
import { defaultTailwindBreakpoints } from "@/lib/tailwindDefaults";

const breakpointsTailwind = {
  xs: {
    slidesPerView: 1,
  },
  md: {
    slidesPerView: 3,
  },
  lg: {
    slidesPerView: 3,
  },
  xl: {
    slidesPerView: 3,
  },
  "2xl": {
    slidesPerView: 3,
  },
} as any;

export const SliderClient = ({ children, className, content }: any) => {
  const [activeIndex, setIndex] = useState(0);
  const Slider = useThemedComponent("Slider");
  const Slide = useThemedComponent("Slide");
  const sliderRef = useRef<{ swiper: SwiperClass } | null>(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  const breakpoints = useSwiperBreakpoints(
    breakpointsTailwind,
    defaultTailwindBreakpoints
  );
  const currentBreakpoint = useCurrentBreakpoint() || "xs";
  const { slidesPerView } = breakpointsTailwind[currentBreakpoint] || {};

  const hasNext =
    activeIndex < (Math.ceil(content.slides?.length / slidesPerView) - 1);
  const hasPrev = activeIndex > 0;

  return (
    <Slider headline={content.headline}>
      <Swiper
        ref={sliderRef}
        modules={[Pagination]}
        pagination={{ clickable: true }}
        onActiveIndexChange={() =>
          setIndex(sliderRef.current?.swiper?.activeIndex!)
        }
        spaceBetween={4}
        breakpoints={breakpoints}
      >
        {content.slides.map((slide: any, idx: number) => (
          <SwiperSlide key={idx}>
            <Slide
              {...slide}
              hidden={
                Math.floor(idx / slidesPerView) > activeIndex ? -1 : undefined
              }
            />
            
          </SwiperSlide>
        ))}
        {(hasNext || hasPrev) && (
          <ThemedClientComponent name="SwiperNavigation">
            <ThemedClientComponent<SwiperButtonPrevProps>
              name="SwiperButtonPrev"
              onClick={handlePrev}
              disabled={!hasPrev}
            />
            <ThemedClientComponent<SwiperButtonNextProps>
              name="SwiperButtonNext"
              onClick={handleNext}
              disabled={!hasNext}
            />
          </ThemedClientComponent>
        )}
      </Swiper>
    </Slider>
  );
};
