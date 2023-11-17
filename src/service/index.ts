import axios, { AxiosInstance } from "axios";

export * from "./blogs";
export * from "./products";

export function axiosInstance(): AxiosInstance {
  const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_BACKEND_URL,
  });

  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      throw Error(error.response);
    },
  );

  return instance;
}
