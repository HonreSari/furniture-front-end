import type { Post } from "@/Types";
import { Link } from "react-router-dom";

interface PostProps {
  posts: Post[];
}
export default function BlogCards({ posts }: PostProps) {
  return (
    <div className="my-8 grid grid-cols-1 gap-6 px-4 md:grid-cols-2 md:px-0 lg:grid-cols-3">
      {posts.map((post) => (
        <Link to={`/blogs/${post.id}`} key={post.id}>
          <img
            src={post.image[0]}
            alt={post.title}
            className="mb-4 h-48 w-full rounded-2xl object-cover"
          />
          <h3 className="ml-3 line-clamp-1 font-semibold">{post.title}</h3>
          <div className="mt-2 ml-4 text-sm">
            <span>
              by
              <span className="font-semibold ml-2">{post.author}</span>
              <span className="font-semibold ml-2 text-gray-700">{post.updated_at}</span>
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
