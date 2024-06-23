import FormInput from "@/components/inputs/FormInput";
import LoadingPage from "@/components/ui/LoadingPage";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useGetCurrentUser, useRegister } from "@/hooks/auth";
import { useUpdateProfile } from "@/hooks/user";
import { FileUpload } from "@/types/FileUpload";
import { UserData } from "@/types/UserData";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FiPhone } from "react-icons/fi";
import {
  RxCalendar,
  RxEnvelopeClosed,
  RxHome,
  RxLockClosed,
  RxPerson,
} from "react-icons/rx";
import { z } from "zod";

const profileFormSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  address: z.string(),
  birth_date: z.string(),
  phone: z.string(),
  preferred_payment: z.string().optional(),
});

export default function ProfileForm({ data }: { data: UserData }) {
  const form = useForm<z.infer<typeof profileFormSchema>>({
    resolver: zodResolver(profileFormSchema),
    mode: "onChange",
    defaultValues: {
      email: data.email,
      name: data.profile?.name,
      address: data.profile?.address,
      birth_date: data.profile?.birth_date,
      phone: data.profile?.phone,
    },
  });
  const { updateProfileMutation, updateProfilePending } = useUpdateProfile();
  const [currentImage, setCurrentImage] = useState<FileUpload>({
    profile_photo: null,
  });
  const handleRegister = (value: z.infer<typeof profileFormSchema>) => {
    console.log(value);
    updateProfileMutation({
      id: data?.id as number,
      data: {
        profile_photo: currentImage.profile_photo as File,
        ...value,
      },
    });
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setCurrentImage({
        profile_photo: e.target.files[0],
      });
    }
  };
  const currentVal = form.watch();

  const hasFormChanged = () => {
    return (
      currentVal.name !== data.profile?.name ||
      currentVal.address !== data.profile?.address ||
      currentVal.birth_date !== data.profile?.birth_date ||
      currentImage.profile_photo !== null ||
      currentVal.phone !== data.profile?.phone
    );
  };

  return (
    <>
      {data && (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleRegister)}
            className="flex flex-col gap-3 items-center w-[90%]"
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
              placeholder="Masukkan namamu..."
              name="name"
            />
            <FormInput
              form={form}
              icon={<RxHome />}
              placeholder="Masukkan alamatmu..."
              name="address"
            />
            <FormInput
              form={form}
              icon={<FiPhone />}
              placeholder="Masukkan nomor teleponmu..."
              name="phone"
            />
            <FormInput
              form={form}
              type="date"
              icon={<RxCalendar />}
              placeholder="Pilih tanggal lahirmu..."
              name="birth_date"
            />
            <FormInput
              form={form}
              type="email"
              icon={<RxEnvelopeClosed />}
              placeholder="Masukkan emailmu..."
              name="email"
            />
            <Button
              className="w-full bg-primary-500 text-white"
              disabled={updateProfilePending || !hasFormChanged()}
            >
              Simpan
            </Button>
          </form>
        </Form>
      )}
    </>
  );
}
