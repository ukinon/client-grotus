"use client";

import FormInput from "@/components/inputs/FormInput";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { useLogin } from "@/hooks/auth";
import {
  RxCalendar,
  RxEnvelopeClosed,
  RxHome,
  RxLockClosed,
  RxPerson,
} from "react-icons/rx";
import Image from "next/image";
import { FileUpload } from "@/types/FileUpload";
import { Input } from "@/components/ui/input";
import { useRegister } from "@/hooks/user";

const registerFormSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(8),
  address: z.string(),
  birth_date: z.string(),
  preferred_payment: z.string().optional(),
});

export default function RegisterForm() {
  const form = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    mode: "onChange",
  });
  const { registerMutation, registerPending } = useRegister();
  const [currentImage, setCurrentImage] = useState<FileUpload>({
    profile_photo: null,
  });

  const handleRegister = async (data: z.infer<typeof registerFormSchema>) => {
    registerMutation({
      profile_photo: currentImage.profile_photo as File,
      ...data,
    });
  };

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, files } = event.currentTarget;
    if (name && files && files.length > 0) {
      setCurrentImage((prev) => ({
        ...prev,
        [name]: files[0],
      }));
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleRegister)}
        className="flex flex-col gap-3 items-center w-full"
      >
        <div className="w-[30vw] h-[30vw] md:w-[10vw] md:h-[10vw]">
          <label
            htmlFor="picture"
            className="text-base underline cursor-pointer"
          >
            <Image
              src={
                currentImage.profile_photo
                  ? URL.createObjectURL(
                      currentImage.profile_photo as MediaSource
                    )
                  : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6odCdKUQilIgIODW2d3aYXeYIdQ30VIG4d6-_bUXl3Q&s"
              }
              width={100}
              height={100}
              className="object-contain w-full h-full rounded-full"
              alt="Preview"
            />
          </label>
        </div>
        <Input
          className="w-full hidden md:w-2/3 border border-slate-400 border-opacity-55 text-[55%] md:text-xs"
          id="picture"
          name="profile_photo"
          type="file"
          onChange={handleFileChange}
          accept=".jpg, .png, .jpeg"
        />
        <FormInput
          form={form}
          icon={<RxPerson />}
          placeholder="Masukkan nama mu..."
          name="name"
        />
        <FormInput
          form={form}
          icon={<RxHome />}
          placeholder="Masukkan alamat mu..."
          name="address"
        />
        <FormInput
          form={form}
          type="date"
          icon={<RxCalendar />}
          name="birth_date"
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
        <Button
          className="w-full bg-primary-500 text-white"
          disabled={registerPending}
        >
          Daftar
        </Button>
      </form>
    </Form>
  );
}
