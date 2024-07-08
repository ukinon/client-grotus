"use client";
import React from "react";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { Button } from "../ui/button";
import { Product } from "@/types/Product";
import RatingProductCard from "./RatingProductCard";
import { useRateProduct } from "@/hooks/transaction";

export default function RateButton({ data }: { data: Product[] }) {
  const [rating, setRating] = React.useState([
    {
      id: 0,
      rating: 0,
    },
  ]);

  const { rateProductMutation, rateProductPending } = useRateProduct();

  const handleRatingChange = (newRating: { id: number; rating: number }) => {
    setRating((prevRatings) => {
      let ratingsWithoutPlaceholder = prevRatings.filter(
        (rating) => rating.id !== 0
      );

      const index = ratingsWithoutPlaceholder.findIndex(
        (rating) => rating.id === newRating.id
      );
      if (index > -1) {
        const updatedRatings = [...ratingsWithoutPlaceholder];
        updatedRatings[index] = newRating;
        return updatedRatings;
      } else {
        return [...ratingsWithoutPlaceholder, newRating];
      }
    });
  };

  const allRated = data.every((item) => item.rating != null);

  const handleRate = () => {
    rating.forEach((r) => {
      const item = data.find((item) => item.id === r.id);
      if (item && item.rating === null && r.id !== 0 && r.rating !== 0) {
        rateProductMutation({ id: r.id, rating: r.rating });
      }
    });
  };

  return (
    <div className="flex flex-row justify-between items-end w-full">
      <Drawer>
        <DrawerTrigger className="w-full" asChild>
          <Button className=" bg-primary-500 text-white text-xs w-full">
            Ulasan
          </Button>
        </DrawerTrigger>

        <DrawerContent className="flex flex-col items-start pb-8">
          <DrawerHeader>
            <DrawerTitle className="text-xl font-bold">Beri Ulasan</DrawerTitle>
          </DrawerHeader>
          {data.map((item: Product, index) => (
            <RatingProductCard
              key={index}
              data={item}
              onRatingChange={(val) => handleRatingChange(val)}
            />
          ))}
          <DrawerFooter className="w-full">
            <Button
              disabled={
                rating.some(
                  (r: { id: number; rating: number }) =>
                    r.id === 0 || r.rating === 0
                ) ||
                rateProductPending ||
                allRated
              }
              onClick={() => handleRate()}
              className="bg-primary-500 text-white text-xs w-full"
            >
              Beri ulasan
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
