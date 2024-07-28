import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { BiSort } from "react-icons/bi";
import CategoriesSort from "./CategoriesSort";

export default function SortButton() {
  return (
    <Drawer>
      <DrawerTrigger className="w-full" asChild>
        <button className={`bg-zinc-200 text-[0.7rem] rounded-full py-1 px-2`}>
          <BiSort className="text-base" />
        </button>
      </DrawerTrigger>

      <DrawerContent className="flex flex-col items-start pb-8">
        <DrawerHeader>
          <DrawerTitle className="text-xl font-bold">Urutkan</DrawerTitle>
        </DrawerHeader>
        <CategoriesSort />
      </DrawerContent>
    </Drawer>
  );
}
