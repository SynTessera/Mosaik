import { Route } from "@/types/Route";
import { strapi } from "./dataSources";
import { Section } from "@/typesCMS/Section";

export const fetchRoutes = async () => {
  const sections = (await strapi.fetchSections()) as Section[];
  console.log("SECTIONS", sections);
  return sections.map(({ slug, icon, title: label, content }) => {
    return { slug, icon, label, content };
  });
};

export const routes: Route[] = [
  { slug: "blog", label: "Blog", icon: "FaBlog" },
];
