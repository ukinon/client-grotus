import BottomBar from "@/components/layout/BottomBar";
import Navbar from "@/components/layout/Navbar";

export default function page() {
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <Navbar title="Wishlist" />
      <div className="flex items-center justify-center">
        <p className="font-bold">Ini wishlist</p>
      </div>
      <BottomBar />
    </main>
  );
}
