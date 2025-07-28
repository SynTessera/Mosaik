import { Slider as SliderServer } from "./hybrid/Slider";
import { Slide as SlideServer } from "./hybrid/Slide";

export const Slider = ({ content }) => {
  return (
    <SliderServer>
      <div className="flex gap-1">
        {content.slides.map((slide) => {
          return <SlideServer key={slide.id} {...slide} />;
        })}
      </div>
    </SliderServer>
  );
};
