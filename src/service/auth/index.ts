import axiosInstance from "../axios-instance";

export const AUTH_CONTROLLER = "/auth";
const ACCESS_TOKEN_KEY = "accessToken";

export async function logIn(userName: string, password: string) {
  const { data } = await axiosInstance.post(AUTH_CONTROLLER, {
    userName,
    password,
  });
  localStorage.setItem(ACCESS_TOKEN_KEY, data?.accessToken);
}

export function logOut() {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
  window.location.reload();
}
export function isLoggedIn() {
  return typeof window != "undefined" && localStorage?.getItem(ACCESS_TOKEN_KEY)
    ? true
    : false;
}
