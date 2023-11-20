export function buildQueryString(url: string, data: object) {
  return url + "?data=" + JSON.stringify(data);
}
