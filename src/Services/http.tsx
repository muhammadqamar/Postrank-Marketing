/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
const baseURL = process.env.REACT_APP_API_URL;
const http = axios.create({ baseURL: `${baseURL}/` });
function getAuthHeader() {
  const accessToken = localStorage.getItem("hema-token");
  const authHeader = { "Content-Type": "application/json" };
  if (accessToken) {
    // authHeader = { Authorization: `Bearer ${accessToken}` };
  }
  return authHeader;
}
// function getBlob(url, headers = {}, params = {}, signal = {}) {
//   return http.get(url, {
//     responseType: "blob",
//     headers: { ...getAuthHeader(), ...headers },
//   });
// }

function get(url: string, params = {}) {
  return http.get(url, {
    params,
  });
}
function post(url: string, data: object, headers = {}, params = {}) {
  return http.post(url, data, {
    ...params,
    headers: { ...getAuthHeader(), ...headers },
  });
}
function put(url: string, data: any, headers = {}) {
  return http.patch(url, data, { headers: { ...getAuthHeader(), ...headers } });
}

function remove(url: string, headers = {}) {
  return http.delete(url, {
    headers: { ...getAuthHeader(), ...headers },
  });
}

export { http, get, post, put, remove };
