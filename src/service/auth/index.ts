import axiosInstance from "../axios-instance";

export const AUTH_CONTROLLER = "/auth";

export async function logIn(userName: string, password: string) {
  const { data } = await axiosInstance.post(AUTH_CONTROLLER, {
    userName,
    password,
  });
  // axios.defaults.headers.common["Authorization"] = data?.accessToken;
  localStorage.setItem("accessToken", data?.accessToken);
}
