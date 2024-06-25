import { Skeleton } from "@/components/ui/skeleton";

export default function CheckoutItemsLoading() {
  return (
    <div className="w-full h-full flex flex-col gap-4 p-3">
      <Skeleton className="w-full h-[8dvh] bg-zinc-300" />
      <Skeleton className="w-full h-[2dvh] bg-zinc-300" />
    </div>
  );
}
