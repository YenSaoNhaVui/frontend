export function isLoggedIn() {
  return localStorage.getItem("accessToken") ? true : false;
}
