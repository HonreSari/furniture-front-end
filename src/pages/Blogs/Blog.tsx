import { posts } from "@/data/posts";
import BlogPostLists from "@/Components/blogs/BlogPostLists";
export default function Blog() {
  return (
    <div className="container mx-auto mt-8 px-4 md:px-8">
      <h1 className="text-center text-2xl font-bold md:text-left">
        Lastest blog Posts
      </h1>
      <BlogPostLists posts={posts} />
    </div>
  );
}
