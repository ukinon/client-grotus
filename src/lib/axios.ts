import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL as string,
});

export const axiosInstanceML = axios.create({
  baseURL: process.env.NEXT_PUBLIC_ML_API_URL as string,
});
