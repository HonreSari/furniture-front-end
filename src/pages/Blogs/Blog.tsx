import { useLoaderData } from "react-router-dom";
import BlogPostLists from "@/Components/blogs/BlogPostLists";
import type { Post } from "@/Types";

export default function Blog() {
  const posts = useLoaderData() as Post[];

  return (
    <div className="container mx-auto mt-8 px-4 md:px-8">
      <h1 className="text-center text-2xl font-bold md:text-left">
        Lastest blog Posts
      </h1>
      <BlogPostLists posts={posts} />
    </div>
  );
}
