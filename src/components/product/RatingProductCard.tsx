import Image from "next/image";
import { useState } from "react";
import { formatToIDR } from "@/lib/formatToIDR";
import { Product } from "@/types/Product";

type Props = {
  data: Product;
  onRatingChange?: ({ id, rating }: { id: number; rating: number }) => void;
};

export default function RatingProductCard({ data, onRatingChange }: Props) {
  console.log(data);
  const [rating, setRating] = useState({
    id: data.id as number,
    rating: data.rating?.rating || 0,
  });

  console.log(rating);

  const handleStarClick = (selectedRating: { id: number; rating: number }) => {
    setRating((prev) => ({
      ...prev,
      id: selectedRating.id,
      rating: selectedRating.rating,
    }));
    if (onRatingChange) {
      onRatingChange(selectedRating);
    }
  };

  const renderStarRating = (id: number) => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() =>
              handleStarClick({
                id: id,
                rating: star,
              })
            }
            className={`text-2xl ${
              star <= rating.rating ? "text-yellow-400" : "text-gray-300"
            } focus:outline-none`}
          >
            ★
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="flex justify-between p-3 rounded-lg w-full">
      <div className="flex flex-row gap-3 w-full">
        <Image
          src={(data.photo as string) || "https://via.placeholder.com/150"}
          width={50}
          height={50}
          alt="product image"
          className="h-full rounded-lg"
        />
        <div className="flex flex-col gap-2 w-full">
          <div className="flex justify-between">
            <h1 className="font-bold text-sm line-clamp-1">{data.name}</h1>
          </div>
          <p className="font-bold text-zinc-400 text-sm">
            {formatToIDR(data.price as number)}
          </p>
        </div>
      </div>
      {renderStarRating(data.id as number)}
    </div>
  );
}
