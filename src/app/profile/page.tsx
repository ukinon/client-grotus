"use client";
import BottomBar from "@/components/layout/BottomBar";
import Navbar from "@/components/layout/Navbar";
import { useGetCurrentUser } from "@/hooks/auth";
import LoadingPage from "@/components/ui/LoadingPage";
import Profile from "./Profile";
import NextAuth from "@auth-kit/next/NextAuth";

export default function ProfilePage() {
  const { userData, userLoading } = useGetCurrentUser();
  return (
    <NextAuth fallbackPath="/login">
      <main className="flex min-h-[75dvh] flex-col items-center justify-start">
        {userLoading && <LoadingPage />}
        <Navbar title="Profil" />
        {userData && <Profile data={userData.data} />}
        <BottomBar />
      </main>
    </NextAuth>
  );
}
