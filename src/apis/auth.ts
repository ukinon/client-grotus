import { axiosInstance } from "@/lib/axios";
import { Login } from "@/types/Login";
import { UserData } from "@/types/UserData";

export const login = async (data: Login) => {
  const response = await axiosInstance.post("/auth/login", data);
  return response;
};

export async function register(data: UserData) {
  const response = await axiosInstance.post("/auth/register", data);
  return response;
}

export const getCurrentUser = async () => {
  const response = await axiosInstance.post("/auth/me");
  return response.data;
};
