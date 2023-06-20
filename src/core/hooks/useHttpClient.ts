import axios, { type AxiosInstance } from "axios";
import { API_BASE_URL } from "../constant";
import i18n, { getCurrentLocale } from "../i18n";

let api: AxiosInstance;

function _createHTTPClientInstance() {
  api = axios.create({
    baseURL: API_BASE_URL,
    // withCredentials: true,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Accept-Language": getCurrentLocale(),
    },
  });

  api.interceptors.request.use((config) => {
    // const token = await firebaseAuth.currentUser?.getIdToken();
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  });

  api.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (error.response?.status === 401) {
        await api.post("/auth/refresh-token"); // refresh token
        axios.request(error.config).catch(async (responseError) => {
          if (responseError?.response?.status === 401) {
            await api.post("/auth/logout");
            localStorage.removeItem("token");
            if (!location.href.includes("auth")) {
              location.href = "/auth/login";
            }
          }
        });
      }
      // trigger 'loading=false' event here
      return Promise.reject(error);
    }
  );

  return api;
}

export function setToken(token: string) {
  localStorage.setItem("token", token);
  api.defaults.headers.Authorization = `Bearer ${token}`;
}

export function useHttpClient() {
  if (!api) {
    _createHTTPClientInstance();
  }

  Object.freeze(api);

  return api;
}
