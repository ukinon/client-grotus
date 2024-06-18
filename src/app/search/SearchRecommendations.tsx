import React from "react";
import { BiSearch } from "react-icons/bi";

export default function SearchRecommendations() {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row justify-between items-center text-lg  pl-8">
        <div className="flex flex-row gap-5 text-base items-center">
          {" "}
          <BiSearch />
          <p>Halo cintah</p>
        </div>
      </div>
    </div>
  );
}
