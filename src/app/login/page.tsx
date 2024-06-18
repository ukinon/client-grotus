import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <div className="flex flex-col w-screen gap-20 max-h-screen items-center justify-start">
      <div className="flex flex-col items-center">
        <h1 className="text-primary-500 text-3xl font-bold">Grotus</h1>
        <p className="text-secondary-500 text-sm">
          Grow your <span className="text-primary-500">Lettuce</span> with us!
        </p>
      </div>
      <div className="flex flex-col gap-8 items-center w-[80%]">
        <div className="flex flex-col gap-2 items-center">
          <h1 className="font-bold text-lg">Masuk ke akun mu</h1>
          <p className="text-sm">Masukkan email dan password</p>
        </div>
        <LoginForm />
        <div className="flex flex-row justify-center w-full gap-2 items-center">
          <hr className="text-black w-1/4" />
          <p className="text-sm w-1/2 text-center">Belum punya akun?</p>
          <hr className="text-black w-1/4" />
        </div>
        <Link className="w-full" href="/register">
          <Button className="w-full text-primary-500 bg-white border-primary-500 border">
            Daftar
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
