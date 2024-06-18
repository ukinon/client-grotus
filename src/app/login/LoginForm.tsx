"use client";

import FormInput from "@/components/inputs/FormInput";
import { Button } from "@/components/ui/button";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { useLogin } from "@/hooks/auth";
import { RxEnvelopeClosed, RxLockClosed } from "react-icons/rx";
import useSignIn from "react-auth-kit/hooks/useSignIn";

const loginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export default function LoginForm() {
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    mode: "onChange",
  });
  const { loginMutation, loginPending, loginSuccess, loginData } = useLogin();
  const signIn = useSignIn();

  const handleLogin = async (data: z.infer<typeof loginFormSchema>) => {
    loginMutation(data);
  };

  useEffect(() => {
    if (loginSuccess) {
      if (
        signIn({
          auth: {
            token: loginData?.data.access_token,
            type: loginData?.data.token_type,
          },
        })
      ) {
        window.location.replace("/");
      }
    }
  }, [loginSuccess, loginData, signIn]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleLogin)}
        className="flex flex-col gap-3 items-center w-full"
      >
        <FormInput
          form={form}
          type="email"
          icon={<RxEnvelopeClosed />}
          placeholder="Masukkan email mu..."
          name="email"
        />
        <FormInput
          form={form}
          type="password"
          icon={<RxLockClosed />}
          placeholder="Masukkan password mu..."
          name="password"
        />{" "}
        <Button
          className="w-full bg-primary-500 text-white"
          disabled={loginPending}
        >
          Masuk
        </Button>
      </form>
    </Form>
  );
}
