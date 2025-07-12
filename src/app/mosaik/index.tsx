import Section from "@/app/mosaik/pages/Section";
import { routes } from "./routes";
import Blog from "./pages/Blog";
import { BlogPost } from "@/themes/light/BlogPost";

export const pages = {
  about: Section,
  ssr: Section,
  "state-management": Section,
  blog: Blog,
  "blog/:slug": BlogPost
};

const appConfig = {
  pages,
  routes,
};

export default appConfig;
