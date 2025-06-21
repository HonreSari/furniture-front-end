import { CarouselCard } from "@/Components/products/CaroselCard";
import { Button } from "@/components/ui/button"; 
import Couch from "@/data/images/couch.png";
import { products } from "@/data/products";
import { Link } from "react-router-dom";
export default function HomePage() {
  return (
    <div className="container mx-auto px-4 lg:px-16">
      <div className="flex flex-col lg:flex-row lg:justify-between">
        {/* Text Section */}
        <div className="my-8 text-center lg:mt-20 lg:mb-0 lg:w-2/5 lg:text-left">
          <h1 className="mb-4 text-4xl font-extrabold text-[#223a31] lg:mb-8 lg:text-6xl">
            Modern Interior Design Studio
          </h1>
          <p className="mb-6 lg:mb-8 text-foreground/70">
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
    </div>
  );
}
