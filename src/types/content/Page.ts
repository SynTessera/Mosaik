export type Page = {
  title?: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: { url: string };
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: { url: string };
  canonicalUrl?: string;
  robots?: string;
};