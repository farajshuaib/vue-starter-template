import axios, { type AxiosInstance } from "axios";
import { onRequest } from "./interceptors/request";
import { onError, onResponse } from "./interceptors/response";
import config from "@/core/config";

let httpClient: AxiosInstance;

function _createHttpClient(): void {
  httpClient = axios.create({
    baseURL: config.API_BASE_URL,
    // withCredentials: true,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  httpClient.interceptors.request.use(onRequest);

  httpClient.interceptors.response.use(onResponse, onError);
}

export function useHttpClient() {
  if (!httpClient) {
    _createHttpClient();
  }

  return httpClient;
}
