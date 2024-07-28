"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

export function ProductCarousel({
  photos,
}: {
  photos: { id: number; image: string }[];
}) {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleSlideChange = (index: number) => {
    setCurrentIndex(index);
  };

  const handlePreviewClick = (index: number) => {
    setCurrentIndex(index);
    // Assuming the Carousel component has a method to go to a specific slide
    // You might need to implement this in your Carousel component
  };

  return (
    <div className="relative w-full pb-14 md:pb-28">
      <Carousel className="w-full">
        <CarouselContent>
          {photos?.map((photo, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6 bg-zinc-400 rounded-xl">
                    <Image src={photo.image} alt="product" layout="fill" />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {photos?.map((photo, index) => (
          <div
            key={index}
            className={`w-12 h-12 md:w-24 md:h-24 cursor-pointer `}
            onClick={() => handlePreviewClick(index)}
          >
            <Image
              src={photo.image}
              alt="preview"
              layout="fill"
              className={` border rounded-lg shadow-md ${
                index === currentIndex
                  ? "border-primary-500"
                  : "border-transparent opacity-50"
              } `}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
