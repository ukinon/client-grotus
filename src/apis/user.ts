import { axiosInstance } from "@/lib/axios";
import { UserData } from "@/types/UserData";

export async function register(data: UserData) {
  const response = await axiosInstance.post("/users", data);
  return response;
}
