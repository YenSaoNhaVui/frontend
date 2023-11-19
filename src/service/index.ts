import axios from "axios";

export * from "./blogs";
export * from "./products";

export function axiosInstance() {
  axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_BACKEND_URL;
}
