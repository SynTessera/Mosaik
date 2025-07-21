// utils/matchParams.ts
export function matchParams(
  url: string,
  pattern: string
): Record<string, string[]> {
  const urlParts = url.split("/").filter(Boolean);
  const patternParts = pattern.split("/").filter(Boolean);

  const params: Record<string, string[]> = {};

  let urlIndex = 0;
  for (let i = 0; i < patternParts.length; i++) {
    const part = patternParts[i];
    if (part.startsWith("[...") && part.endsWith("]")) {
      const key = part.slice(4, -1);
      params[key] = urlParts.slice(urlIndex);
      break;
    } else if (part.startsWith("[") && part.endsWith("]")) {
      const key = part.slice(1, -1);
      params[key] = [urlParts[urlIndex]];
      urlIndex++;
    } else {
      urlIndex++; // Skip static part
    }
  }

  return params;
}
