import Image from "next/image";
import React from "react";

type Props = {
  data: string;
  photo: string;
};

export default function PredictionPage({ data, photo }: Props) {
  return (
    <div className="flex flex-col">
      <Image
        src={photo}
        width={150}
        height={150}
        alt="product image"
        className="w-full rounded-lg"
      />

      <p>{data}</p>
    </div>
  );
}
