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

        <DrawerFooter className="w-full">
          <Button className="bg-primary-500 text-white text-xs w-full">
            Terapkan
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
