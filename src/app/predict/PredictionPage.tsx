import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import ProductRecommendation from "./ProductRecommendation";

type Props = {
  data: {
    keyword: string;
    prediction: string;
  };
  photo: string;
};

export default function PredictionPage({ data, photo }: Props) {
  console.log(data);
  return (
    <div className="flex flex-col gap-12 items-center justify-center w-screen">
      <Navbar withBackButton withCart={false} title="Prediksi" />
      <div className="mt-20 flex flex-col justify-center items-center gap-5 w-[90vw]">
        <Image
          src={photo}
          width={150}
          height={150}
          alt="product image"
          className="w-full rounded-lg aspect-square object-cover"
        />

        <p className="font-bold text-xl text-center">{data.prediction}</p>
        <Button
          onClick={() => window.location.reload()}
          className="bg-primary-500 text-white"
        >
          Ambil foto lain
        </Button>
      </div>
      <ProductRecommendation nutrition={data.keyword} />
    </div>
  );
}
