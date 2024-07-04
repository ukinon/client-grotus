"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export function CarouselComponent() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <div className="relative w-full md:w-[100vw] overflow-hidden">
      <Carousel
        plugins={[plugin.current]}
        opts={{
          loop: true,
          containScroll: false,
          align: "center",
        }}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        className="w-full z-10"
      >
        <CarouselContent className="-ml-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="pl-4 md:basis-2/3 lg:basis-1/2"
            >
              <Card>
                <CardContent className="flex aspect-video items-center justify-center p-6 bg-zinc-400 rounded-none md:rounded-xl">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:block">
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-20" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-20" />
        </div>
      </Carousel>
    </div>
  );
}
