import axios from "axios";

export const baseURL = "https://new-be-1.onrender.com"; //"https://new-be-1.onrender.com/"; //"https://new-be-1.onrender.com/"; //"http://localhost:3001/"; // "https://api.yensaonhavui.vn/";
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
