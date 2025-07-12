import { DataProvider } from "@/context/DataContext";
import { fetchBlogPosts } from "../dataSources/strapi";
import { clientOnly } from "@/lib/util/isomorphic";
import { DataView } from "@/blocks/DataView";

const Blog = async ({ data }: any) => {
  return (
    <DataProvider fetcher={clientOnly(fetchBlogPosts)} initialData={data}>
      <DataView initialData={data} container="BlogPosts" type="BlogPost" />
    </DataProvider>
  );
};

export default Blog;
