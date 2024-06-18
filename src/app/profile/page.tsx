import BottomBar from "@/components/layout/BottomBar";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ProfilePage() {
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <Navbar title="Profile" />
      <div className="flex items-center justify-center">
        <Link href={"/login"}>
          <Button className="bg-primary-500 text-white w-[30vw]">Masuk</Button>
        </Link>
      </div>
      <BottomBar />
    </main>
  );
}
