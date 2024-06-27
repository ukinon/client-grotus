import Image from "next/image";
import React from "react";

export default function Categories() {
  return (
    <div className="flex flex-row gap-1 items-center w-[85%] py-6 justify-between">
      {Array(5)
        .fill(null)
        .map((_, index: number) => (
          <div className="flex flex-col gap-2" key={index}>
            <Image
              src="https://via.placeholder.com/150"
              alt="category"
              width={30}
              height={30}
              className="rounded-full w-full object-cover"
            />
            <p className="text-[0.7rem] w-14 line-clamp-1">Category</p>
          </div>
        ))}
    </div>
  );
}
