export  function getMedianColorFromImageRef(
  imgRef: React.RefObject<HTMLImageElement | null>
): { r: number; g: number; b: number } | null{
  const img = imgRef.current;
  if (!img || !img.complete) return null;

  // Create canvas
  const canvas = document.createElement("canvas");
  canvas.width = img.naturalWidth;
  canvas.height = img.naturalHeight;

  const ctx = canvas.getContext("2d");
  if (!ctx) return null;

  // Draw image on canvas
  ctx.drawImage(img, 0, 0);

  // Get pixel data
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;

  const r: number[] = [];
  const g: number[] = [];
  const b: number[] = [];

  for (let i = 0; i < imageData.length; i += 4) {
    r.push(imageData[i]);     // Red
    g.push(imageData[i + 1]); // Green
    b.push(imageData[i + 2]); // Blue
  }

  const median = (arr: number[]) => {
    const sorted = arr.sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 !== 0
      ? sorted[mid]
      : Math.floor((sorted[mid - 1] + sorted[mid]) / 2);
  };

  return {
    r: median(r),
    g: median(g),
    b: median(b),
  };
}