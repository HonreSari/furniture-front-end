import type { Post } from "@/Types"
import { Link } from "react-router-dom";
interface PostProps {
    posts: Post[];
}

export default function BlogPostLists({posts}: PostProps) {
  return (
    <div className="my-8 grid grid-cols-1 gap-16 px-4 md:grid-cols-2 md:px-0 lg:grid-cols-3">
      {posts.map((post) => (
        <Link to={`/blogs/${post.id}`} key={post.id}>
          <img
            src={post.image[0]}
            alt={post.title}
            className="mb-4 h-48 w-full rounded-xl object-cover"
          />
          <h2 className="line-clamp-1 text-xl font-bold">{post.title}</h2>
          <h3 className="my-2  line-clamp-3 text-muted-foreground text-sm">{post.content}</h3>
          <div className=" text-sm">
            <span>
              by
              <span className="font-[600] ml-2">{post.author}</span>
              <span className="font-[600] ml-2 text-gray-700">{post.updated_at}</span>
            </span>
          </div>
        </Link>
      ))}
    </div>
  )
}
