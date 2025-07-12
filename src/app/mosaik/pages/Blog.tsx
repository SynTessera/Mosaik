/* eslint-disable @typescript-eslint/no-explicit-any */
import { DataProvider } from "@/context/DataContext";
import { fetchBlogPosts } from "../dataSources/strapi";
import { clientOnly } from "@/lib/util/isomorphic";
import { DataView } from "@/blocks/DataView";

const Blog = async ({ data }: any) => {
  return (
    <DataProvider fetcher={clientOnly(fetchBlogPosts)} initialData={data} type={""}>
      <DataView initialData={data} container="BlogPosts" type="BlogPost" themeName="light" />
    </DataProvider>
  );
};

export default Blog;
