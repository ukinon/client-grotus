"use client";
import BottomBar from "@/components/layout/BottomBar";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";
import ProfileForm from "./ProfileForm";

export default function ProfilePage() {
  const isAuthenticated = useIsAuthenticated();
  return (
    <main className="flex min-h-[75dvh] flex-col items-center justify-center">
      <Navbar title="Profile" />
      {!isAuthenticated && (
        <div className="flex items-center justify-center">
          <Link href={"/login"}>
            <Button className="bg-primary-500 text-white w-[30vw]">
              Masuk
            </Button>
          </Link>
        </div>
      )}

      {isAuthenticated && <ProfileForm />}

      <BottomBar />
    </main>
  );
}
