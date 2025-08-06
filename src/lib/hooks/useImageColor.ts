import React from "react";
import { getMedianColorFromImageRef } from "../util/getMedianColor";

export const useImageColor = (
  imgRef: React.RefObject<HTMLImageElement | null>
): { r: number; g: number; b: number } | null => {
  const [color, setColor] = React.useState<{
    r: number;
    g: number;
    b: number;
  } | null>(null);

  React.useEffect(() => {
    const medianColor = getMedianColorFromImageRef(imgRef);
    setColor(medianColor);
  }, [imgRef]);

  return color;
};
