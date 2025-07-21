import { fetchBlogPosts } from "../dataSources/strapi";
import { ThemedComponent } from "@/blocks/ThemedComponent";

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
