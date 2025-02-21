import axiosInstance from "../axios-instance";

export const AUTH_CONTROLLER = "/auth";
const ACCESS_TOKEN_KEY = "accessToken";

export async function logIn(userName: string, password: string) {
  try {
    const { data } = await axiosInstance.post(AUTH_CONTROLLER, {
      userName,
      password,
    });
    localStorage.setItem(ACCESS_TOKEN_KEY, data?.accessToken);
    return data;
  } catch (err) {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
  }
}

export async function getMe() {
  try {
    const { data } = await axiosInstance.get(AUTH_CONTROLLER);
    return data;
  } catch (err) {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    return false;
  }
}

export async function getUsers() {
  try {
    const { data } = await axiosInstance.get(AUTH_CONTROLLER + "/users");
    return data;
  } catch (err) {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    return false;
  }
}

export async function createUsers(body: { userName: string; password: string; role: string }) {
  try {
    const { data } = await axiosInstance.post(AUTH_CONTROLLER + "/users", body);
    return data;
  } catch (err) {
    return false;
  }
}

export async function updateUser(body: { userName: string; role: string }, id: number) {
  try {
    const { data } = await axiosInstance.patch(AUTH_CONTROLLER + "/users" + "/" + id, body);
    return data;
  } catch (err) {
    return false;
  }
}

export async function deleteStaff(id: number) {
  try {
    const { data } = await axiosInstance.delete(AUTH_CONTROLLER + "/users" + "/" + id);
    return data;
  } catch (err) {
    return false;
  }
}

export function logOut() {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
  window.location.reload();
}

export function isLoggedIn() {
  return typeof window != "undefined" && localStorage?.getItem(ACCESS_TOKEN_KEY) ? true : false;
}
