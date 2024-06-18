import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import InputPassword from "@/components/ui/inputPassword";
import Link from "next/link";
import React from "react";
import { RxEnvelopeClosed, RxLockClosed, RxPerson } from "react-icons/rx";
import RegisterForm from "./RegisterForm";

export default function RegisterPage() {
  return (
    <div className="flex flex-col w-screen gap-8 max-h-screen items-center justify-start">
      <div className="flex flex-col items-center">
        <h1 className="text-primary-500 text-3xl font-bold">Grotus</h1>
        <p className="text-secondary-500 text-sm">
          Grow your <span className="text-primary-500">Lettuce</span> with us!
        </p>
      </div>
      <div className="flex flex-col gap-8 items-center w-[80%]">
        <div className="flex flex-col gap-2 items-center">
          <h1 className="font-bold text-lg">Buat Akun</h1>
          <p className="text-sm">
            Buat akun mu untuk menjelajahi{" "}
            <span className="text-primary-500">Grotus</span> !
          </p>
        </div>
        <RegisterForm />

        <div className="flex flex-row w-full gap-2 items-center">
          <hr className="text-black w-1/3" />
          <p className="text-sm w-1/3 text-center">Punya akun?</p>
          <hr className="text-black w-1/3" />
        </div>
        <Link className="w-full" href="/login">
          <Button className="w-full text-primary-500 bg-white border-primary-500 border">
            Masuk
          </Button>
        </Link>

        <p className="text-xs text-center">
          By clicking continue, you agree to our{" "}
          <Link href={"/tos"} className="font-bold text-primary-500">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href={"/privacy-policy"} className="font-bold text-primary-500">
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  );
}
