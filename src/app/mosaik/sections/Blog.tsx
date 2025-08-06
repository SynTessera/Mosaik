import { ThemedComponent } from "@/blocks/ThemedComponent";
import { fetchBlogPosts } from "@/lib/mosaik/dataSources/strapi";

const Blog = async () => {
  const blogPosts = await fetchBlogPosts();
  return (
    <ThemedComponent name="BlogPosts">
      {blogPosts.map((post: any) => (
        <ThemedComponent key={post.documentId} name="BlogPostTeaser" {...post} />
      ))}
    </ThemedComponent>
  );
};

export default Blog;
