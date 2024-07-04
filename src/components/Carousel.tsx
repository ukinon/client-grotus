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
import Image from "next/image";

export function CarouselComponent() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  const imageData = [
    "/hero/image1.jpg",
    "/hero/image2.jpg",
    "/hero/image3.jpg",
    "/hero/image4.jpg",
    "/hero/image5.jpg",
  ];

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
          {imageData.map((data, index) => (
            <CarouselItem
              key={index}
              className="pl-4 md:basis-2/3 lg:basis-1/2"
            >
              <Image
                src={data}
                width={500}
                height={500}
                alt="carousel image "
                className="w-screen h-full object-cover aspect-video md:rounded-xl"
              />
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
