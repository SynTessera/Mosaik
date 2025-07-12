export const coverImageLink = (url: string) => {
  const relativeOrAbsoluteUrl = url;
  if (!url || url.includes("s3.eu")) return "/images/wallpaper/19.webp";
  return relativeOrAbsoluteUrl?.startsWith("http")
    ? relativeOrAbsoluteUrl
    : `${
        process.env.NEXT_PUBLIC_STRAPI_BASE ||
        process.env.STRAPI_API?.replace("/api", "")
      }${relativeOrAbsoluteUrl}`;
};
