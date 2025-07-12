import { ExternalRoute, Route } from "@/types/Route";
import { strapi } from "./dataSources";
import { Section } from "@/typesCMS/Section";

export const fetchRoutes = async () => {
  const sections = (await strapi.fetchSections()) as Section[];
  return sections.map(({ slug, icon, title: label, content }) => {
    return { slug, icon, label, content };
  });
};

export const routes: Array<Route | ExternalRoute> = [
  { slug: "blog", label: "Blog", icon: "FaBlog" },
  {
    href: "https://github.com/SynTessera/Mosaik",
    label: "Github",
    icon: "FaGithub",
  },
];
