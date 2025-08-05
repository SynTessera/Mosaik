import clsx from "clsx";
import { AnimatedBlock } from "./hybrid/AnimatedBlock";
import { useRef } from "react";
import { Content } from "./Content";

export const AnimatedSection = ({
  content: { animations, id },
  boxRef,
  triggerRef,
}: any) => {
  return (
    <div className={`relative h-[200vh] .container .container${id}`}>
      Animated
      {animations?.map(({ component, ...anim }) => {
        console.log("ANIMT", animations);
        if ("shared.animatedblock" === anim.__component) {
          return (
            <div className={`absolute top-0 h-[200vh]`} key={anim.id}>
              <AnimatedBlock
                content={anim}
                component={component}
                containerId={id}
              />
            </div>
          );
        }
        return (
          <div className={`absolute top-0 h-[200vh]`} key={anim.id}>
            <Content content={anim} component={component} containerId={id} />
          </div>
        );
      })}
    </div>
  );
};
