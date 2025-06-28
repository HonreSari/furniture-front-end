import * as React from "react";
import { Link, useParams } from "react-router-dom";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import ProductCard from "@/Components/products/ProductCard";
import { ScrollArea, ScrollBar } from "@/Components/ui/scroll-area";
import { Icons } from "@/Components/icons";
import Autoplay from "embla-carousel-autoplay";
import { Separator } from "@/Components/ui/separator";

// import { Card, CardContent } from "@/Components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/Components/ui/carousel";
import { formatPrice } from "@/lib/utils";
import { Rating } from "./Rating";
import Addtofavorite from "./Addtofavorite";
import { AddToCardForm } from "./AddtoCard";
import { useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/Components/ui/accordion";

export default function ProductDetail() {
  const { productId } = useParams();
  const product = products.find(
    (product) =>
      product.id.trim().toLowerCase() === productId?.trim().toLowerCase(),
  );
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true }),
  );
  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <div className="w-full px-16">
      <Button asChild variant="outline" className="mt-6">
        <Link to="/products">
          <Icons.arrowLeft /> All Products
        </Link>
      </Button>
      <section className="mg:gap-16 my-6 flex flex-col gap-16 md:flex-row">
        <Carousel plugins={[plugin.current]} className="w-full md:w-1/2">
          <CarouselContent>
            {product?.images.map((image) => (
              <CarouselItem key={image}>
                <div className="p-1">
                  <img
                    src={image}
                    alt={product.name}
                    className="size-full rounded-md object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <Separator className="mt-4 md:hidden" />
        <div className="flex w-full flex-col gap-4 md:w-1/2">
          <div className="gap-2">
            <h2 className="line-clamp-1 text-2xl font-bold">{product.name}</h2>
            <p className="text-gray-500">
              {formatPrice(Number(product.price))}
            </p>
          </div>
          <Separator className="my-1.5" />
          <p className="">{product?.inventory} in stock</p>
          <div className="flex items-center justify-between">
            <Rating rating={product?.rating} />
            <Addtofavorite productId={product.id} rating={product.rating} />
          </div>
          <AddToCardForm canBuy={product.status === "active"} />
          <Separator className="my-3" />
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-none">
              <AccordionTrigger className="text-lg font-semibold">Description</AccordionTrigger>
              <AccordionContent className="font-light">{product.description}</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
      <section className="space-y-6">
        <h2 className="line-clamp-1 text-2xl font-bold">
          More Products from Furniture Shop
        </h2>
        <ScrollArea className="pb-4">
          <div className="flex w-max space-x-4 p-4">
            {products.slice(0, 4).map((pro) => (
              <ProductCard
                key={pro.id}
                product={pro}
                className="min-w-[260px]"
              />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </section>
    </div>
  );
}
