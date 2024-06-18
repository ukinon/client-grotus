"use client";

import FormInput from "@/components/inputs/FormInput";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { RxEnvelopeClosed, RxLockClosed, RxPerson } from "react-icons/rx";
import { useRegister } from "@/hooks/auth";
import { useRouter } from "next/navigation";

const registerFormSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(8),
  password_confirmation: z.string().min(8),
});

export default function RegisterForm() {
  const router = useRouter();
  const form = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    mode: "onChange",
  });
  const { registerMutation, registerPending, registerSuccess } = useRegister();

  useEffect(() => {
    if (registerSuccess) {
      router.push("/login");
    }
  }, [registerSuccess]);

  const handleRegister = (data: z.infer<typeof registerFormSchema>) => {
    registerMutation({
      ...data,
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleRegister)}
        className="flex flex-col gap-3 items-center w-full"
      >
        <FormInput
          form={form}
          icon={<RxPerson />}
          placeholder="Masukkan nama mu..."
          name="name"
        />
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
        <FormInput
          form={form}
          type="password"
          icon={<RxLockClosed />}
          placeholder="Konfirmasi password mu..."
          name="password_confirmation"
        />
        <Button
          type="submit"
          className="w-full bg-primary-500 text-white"
          disabled={registerPending}
        >
          Daftar
        </Button>
      </form>
    </Form>
  );
}
