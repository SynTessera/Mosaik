import Section from "@/app/mosaik/pages/Section";
import { routes } from "./routes";
import Blog from "./pages/Blog";

export const pages = {
  about: Section,
  ssr: Section,
  "state-management": Section,
  blog: Blog
};

const appConfig = {
  pages,
  routes,
};

export default appConfig;
