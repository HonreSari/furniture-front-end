

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/Components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/Components/ui/carousel"

export function CarouselCard() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <Carousel className="w-full max-w-sm" plugins={[plugin.current]}>
      <CarouselContent className="-ml-1">
        {Array.from({ length: 10 }).map((_, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-2xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
