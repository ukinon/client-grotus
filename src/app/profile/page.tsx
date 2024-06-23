"use client";
import BottomBar from "@/components/layout/BottomBar";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";
import ProfileForm from "./ProfileForm";
import { useGetCurrentUser } from "@/hooks/auth";
import LoadingPage from "@/components/ui/LoadingPage";

export default function ProfilePage() {
  const { userData, userLoading } = useGetCurrentUser();
  return (
    <main className="flex min-h-[75dvh] flex-col items-center justify-start">
      {userLoading && <LoadingPage />}
      <Navbar title="Profil" />
      {!userData && (
        <div className="flex items-center justify-center h-[75dvh]">
          <Link href={"/login"}>
            <Button className="bg-primary-500 text-white w-[30vw]">
              Masuk
            </Button>
          </Link>
        </div>
      )}

      {userData && <ProfileForm data={userData.data} />}

      <BottomBar />
    </main>
  );
}
