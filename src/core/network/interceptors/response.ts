import axios, { AxiosResponse } from "axios";

export function onResponse(response: AxiosResponse) {
  return response;
}

export async function onError(error: any) {
  if (error.response?.status === 401) {
    // should refresh token
    axios.request(error.config).catch(async (responseError) => {
      if (responseError?.response?.status === 401) {
        localStorage.clear();
        location.href = "/auth/login";
      }
    });
  }

  return Promise.reject(error);
}
