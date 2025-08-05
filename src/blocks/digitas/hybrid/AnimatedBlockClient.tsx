"use client";

import { useThemedComponent } from "@/lib/hooks/useThemedComponent";
import { useAppState } from "@/context/StateContext";
import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getAlias } from "@/lib/util/getAlias";
import { ThemedClientComponent } from "@/blocks/ThemedClientComponent";
import { createHydratableComponent } from "@/lib/createHydratableComponent";

gsap.registerPlugin(ScrollTrigger);

export const AnimatedBlockClient = createHydratableComponent(
  ({
    canExpand,
    content: { from = {}, to = {}, className },
    component: components,
    containerId,
    ...props
  }: any) => {
    const boxRef = useRef<HTMLDivElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);
    const scrollContainerRef = useRef<HTMLElement | null>(null);
    const component = components?.[0] || {};
    useEffect(() => {
      // Grab the scroll container once on mount
      scrollContainerRef.current = document.querySelector(".scrollcontainer");
    }, []);
    useEffect(() => {
      // Grab the scroll container once on mount
      scrollRef.current = document.querySelector(".container" + containerId);
    }, []);
    useGSAP(() => {
      if (!boxRef.current || !scrollContainerRef.current) return;

      gsap.fromTo(boxRef.current, from || { opacity: 1 }, {
        ...(to || { opacity: 1 }),
        scrollTrigger: {
          trigger: scrollRef.current,
          start: "top top", // when the .box hits the top of the scroll container
          end: "bottom top", // when the bottom of the container hits the top of the scroll container

          scrub: true,
          scroller: scrollContainerRef.current, // important
        },
      });

      // Refresh ScrollTrigger when layout changes
      ScrollTrigger.refresh();
    }, [boxRef.current, scrollContainerRef.current]);

    console.log("ANIMATED BLOCK CLIENT", from, to, className, component);
    const { dispatch, state } = useAppState();
    return (
      <ThemedClientComponent
        name="AnimatedBlock"
        boxRef={boxRef}
        content={{ className }}
      >
        <ThemedClientComponent
          name={getAlias(component?.__component) || "AnimatedBlock"}
          content={component}
        />
      </ThemedClientComponent>
    );
  }
);
