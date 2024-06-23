import { axiosInstance } from "@/lib/axios";
import { Profile } from "@/types/UserData";

export const updateProfile = async ({
  id,
  data,
}: {
  id: number;
  data: Profile;
}) => {
  const response = await axiosInstance.post(`/users/${id}`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};
