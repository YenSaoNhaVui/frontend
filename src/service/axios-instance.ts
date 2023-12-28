import axios from "axios";

export const baseURL = "https://be-yensao.onrender.com/";
const axiosInstance = axios.create({
  baseURL, //process.env.NEXT_PUBLIC_BASE_BACKEND_URL,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    config.headers.Authorization = `Bearer ${localStorage && localStorage.getItem("accessToken")}`;
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default axiosInstance;
