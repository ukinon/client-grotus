import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { FiFilter } from "react-icons/fi";
import CategoriesFilter from "./CategoriesFilter";

export default function FilterButton() {
  return (
    <Drawer>
      <DrawerTrigger className="w-full" asChild>
        <button className={`bg-zinc-200 text-[0.7rem] rounded-full py-1 px-2`}>
          <FiFilter className="text-base" />
        </button>
      </DrawerTrigger>

      <DrawerContent className="flex flex-col items-start pb-8">
        <DrawerHeader>
          <DrawerTitle className="text-xl font-bold">Filter</DrawerTitle>
        </DrawerHeader>
        <CategoriesFilter />
      </DrawerContent>
    </Drawer>
  );
}
