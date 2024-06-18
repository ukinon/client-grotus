"use client";

import FormInput from "@/components/inputs/FormInput";
import { Button } from "@/components/ui/button";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { useLogin } from "@/hooks/auth";
import { RxEnvelopeClosed, RxLockClosed } from "react-icons/rx";

const loginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export default function LoginForm() {
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    mode: "onChange",
  });
  const { loginMutation, loginPending, loginError } = useLogin();

  const handleLogin = async (data: z.infer<typeof loginFormSchema>) => {
    loginMutation(data);
  };

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
