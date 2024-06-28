import LoadingPage from "@/components/ui/LoadingPage";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { axiosInstance } from "@/lib/axios";
import { UserData } from "@/types/UserData";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import useSignOut from "react-auth-kit/hooks/useSignOut";
import { BiLock, BiLogOut, BiPencil } from "react-icons/bi";
import { RxPerson } from "react-icons/rx";

type Props = {
  data: UserData;
};
export default function Profile({ data }: Props) {
  const router = useRouter();
  const logout = useSignOut();
  const [logoutPending, setLogoutPending] = useState(false);

  const handleLogout = async () => {
    setLogoutPending(true);
    try {
      logout();
      await axiosInstance.post("/auth/logout");
      router.push("/login");
    } catch (error) {
      console.log(error);
    } finally {
      setLogoutPending(false);
    }
  };

  return (
    <div className=" flex flex-col gap-5 items-center justify-start h-[75dvh] w-full mt-4">
      {logoutPending && <LoadingPage />}
      <div className="flex flex-row items-center p-5 gap-2 relative w-[90%] bg-primary-50 shadow-md rounded-xl">
        <Image
          src={
            (data.profile?.profile_photo as string) ||
            "https://via.placeholder.com/150"
          }
          alt="profile"
          width={100}
          height={100}
          className="w-20 h-20 object-cover rounded-full"
        />
        <div className="flex flex-col gap-2">
          <h1 className="text-lg font-bold">{data.profile?.name}</h1>
          <p className="text-sm text-gray-500">{data.email}</p>
        </div>
      </div>

      <div className="flex flex-col gap-4 rounded-xl border border-primary-200 w-[90%] px-5 py-2">
        <Link
          href={"/profile/edit"}
          className="flex flex-row gap-2 items-center "
        >
          <RxPerson className="text-primary-500" />
          <p>Profil</p>
        </Link>
        <div className="flex flex-row gap-2 items-center ">
          <BiLock className="text-primary-500" />
          <p>Ubah Password</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 rounded-xl border border-primary-200 w-[90%] px-5 py-2">
        <AlertDialog>
          <AlertDialogTrigger>
            <div className="flex flex-row gap-2 items-center ">
              <BiLogOut className="text-red-500" />
              <p className="text-red-500">Keluar</p>
            </div>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Yakin ingin keluar?</AlertDialogTitle>
              <AlertDialogDescription>
                Anda akan keluar dari akun ini
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter className="gap-3">
              <AlertDialogCancel className="text-white bg-green-500">
                Tidak
              </AlertDialogCancel>
              <AlertDialogAction
                onClick={() => handleLogout()}
                className="text-primary-500 border-primary-500 border"
              >
                Ya
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
}
