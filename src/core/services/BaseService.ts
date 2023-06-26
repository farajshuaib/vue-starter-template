import axios, { AxiosInstance } from "axios";
import { API_BASE_URL } from "../constant";
import { getCurrentLocale } from "../i18n";

export default class BaseService {
  private _httpClient: AxiosInstance;

  public constructor() {
    this._httpClient = axios.create({ baseURL: API_BASE_URL });
    this.setInterceptor();
  }

  protected get httpClient() {
    return this._httpClient;
  }

  protected set setClientToken(token: string) {
    localStorage.setItem("token", token);
    this._httpClient.defaults.headers.Authorization = `Bearer ${token}`;
  }

  protected removeClientToken() {
    localStorage.removeItem("token");
    this._httpClient.defaults.headers.Authorization = "";
  }

  protected async refreshToken() {
    await this._httpClient.post("/auth/refresh-token");
  }

  protected async logout() {
    await this._httpClient.post("/auth/logout");
    this.removeClientToken();
  }

  protected async setInterceptor() {
    this._httpClient.interceptors.request.use((config) => {
      const token = localStorage.getItem("token");

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      config.headers["Accept-Language"] = getCurrentLocale();
      config.headers["Content-Type"] = "application/json";
      config.headers["Accept"] = "application/json";

      return config;
    });

    this._httpClient.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response?.status === 401) {
          await this.refreshToken(); // refresh token
          axios.request(error.config).catch(async (responseError) => {
            if (responseError?.response?.status === 401) {
              await this.logout();
            }
          });
        }
        // trigger 'loading=false' event here
        return Promise.reject(error);
      }
    );
  }
}
