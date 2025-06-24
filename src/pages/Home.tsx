import BlogCards from "@/Components/blogs/BlogCards";
import { CarouselCard } from "@/Components/products/CaroselCard";
import { Button } from "@/components/ui/button";
import Couch from "@/data/images/couch.png";
import { posts } from "@/data/posts";
import { products } from "@/data/products";
import { Link } from "react-router-dom";

const samplePost = posts.slice(0, 3); // to get the first 3 posts
export default function HomePage() {
  const Title = ({
    title,
    href,
    sideText,
  }: {
    title: string;
    href: string;
    sideText: string;
  }) => (
    <div className="mt-28 mb-10 flex flex-col md:flex-row md:justify-between ">
      <h2 className="text-2xl font-bold mb-4 md:mb-0"> {title}</h2>
      <Link to={href} className="text-muted-foreground font-light underline">
        {sideText}
      </Link>
    </div>
  );
  return (
    <div className="container mx-auto px-4 md:px-16">
      <div className="flex flex-col lg:flex-row lg:justify-between">
        {/* Text Section */}
        <div className="my-8 text-center lg:mt-20 lg:mb-0 lg:w-2/5 lg:text-left">
          <h1 className="mb-4 text-4xl font-extrabold text-[#223a31] lg:mb-8 lg:text-6xl">
            Modern Interior Design Studio
          </h1>
          <p className="text-foreground/70 mb-6 lg:mb-8 font-serif">
            Funiture is an essential part of any living space,providign
            functionality,comfort and aesthetic appeal.
          </p>
          <div className="">
            <Button className="rounded-full bg-amber-800 px-8 py-6 font-bold text-white hover:bg-gray-500">
              <Link to="#">Shop Now</Link>
            </Button>
            <Button
              variant="outline"
              className="ml-4 rounded-full px-8 py-6 font-bold hover:bg-gray-400"
            >
              <Link to="#">Explore More</Link>
            </Button>
          </div>
        </div>
        {/* Image Section  */}
        <img src={Couch} alt="Couch" className="w-full lg:w-3/5" />
      </div>
      <CarouselCard products={products} />
      <Title title="Recent Blog" href="/blogs" sideText="View All Posts" />
      <BlogCards posts={samplePost} />
    </div>
  );
}
