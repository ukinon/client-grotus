import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export function CarouselComponent() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );
  const ref = React.useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 200], [0, 150]);

  const imageData = [
    "/hero/image1.jpg",
    "/hero/image2.jpg",
    "/hero/image3.jpg",
    "/hero/image4.jpg",
    "/hero/image5.jpg",
  ];

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className="w-[100vw] flex justify-center z-10 md:bg-black md:bg-opacity-25 overflow-hidden"
    >
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
    </motion.div>
  );
}
