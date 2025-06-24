import { posts } from "@/data/posts";
import { useParams, Link } from "react-router-dom";
import { Icons } from "@/Components/icons";
import { Button } from "@/components/ui/button";
import RichTextRenderer from "./RichTextRenderer";
import { useEffect } from "react";
export default function Blogdetail() {
  const { postId } = useParams();
  const post = posts.find((post) => post.id === postId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [postId]);
  return (
    <div className="container mx-auto px-4 lg:px-8">
      <section className="flex flex-col lg:flex-row">
        <section className="w-full lg:w-3/4 lg:pr-16">
          <Button variant="outline" asChild className="mt-8 mb-6">
            <Link to="/blogs" className="flex items-center">
              <Icons.arrowLeft className="mr-2" />
              Back to Blogs
            </Link>
          </Button>
          {post ? (
            <>
              <h2 className="mb-3 text-3xl font-bold">{post.title}</h2>
              <div className="text-sm">
                <span>
                  by
                  <span className="ml-2 font-[600]">{post.author}</span>
                  <span className="ml-2 font-[600] text-gray-700">
                    {post.updated_at}
                  </span>
                </span>
              </div>
              <h3 className="my-6 text-base font-[400]">{post.content}</h3>
              <img src={post.image[0]} alt="" className="w-full rounded-xl" />
              <RichTextRenderer
                content={post.body}
                clasName="my-6 text-base font-[400]"
              />
              <div className="mb-12 space-x-2">
                {post.tags.map((tag) => (
                  <Button variant="secondary" key={tag}>
                    {tag}
                  </Button>
                ))}
              </div>
            </>
          ) : (
            <p className="text-muted-foreground mt-8 mb-16 text-center text-xl font-bold lg:mt-24">
              Post not found
            </p>
          )}
        </section>
        <section className="w-full lg:mt-24 lg:w-1/4 ">
          <div className="mb-8 flex items-center gap-2 font-semibold">
            <Icons.layers />
            <h3 className="">Other Blogs Posts</h3>
          </div>
          <div className="">
            {posts.map((post) => (
              <Link
                to={`/blogs/${post.id}`}
                key={post.id}
                className="mb-4 flex flex-row gap-2"
              >
                <img src={post.image[0]} alt="" className="w-20 rounded-md" />
                <div className="flex flex-col">
                  <p className="text-muted-foreground text-sm">
                    {post.content.length > 80
                      ? post.content.substring(0, 80) + "..."
                      : post.content}
                  </p>
                  <i className="text-muted-foreground">See more...</i>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}
