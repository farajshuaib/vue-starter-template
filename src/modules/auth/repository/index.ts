import { useHttpClient, setToken } from "@/core/hooks/useHttpClient";
import { AxiosRequestConfig, type AxiosInstance } from "axios";

export default class AuthService  {
  private httpClient: AxiosInstance;
  constructor() {
    this.httpClient = useHttpClient();
  }

  async login(config: AxiosRequestConfig) {
    const { data } = await this.httpClient.post("/auth/login", config);
    if (data.token) {
      setToken(data.token);
    }
    return data;
  }

  async register(config: AxiosRequestConfig) {
    return await this.httpClient.post("/auth/register", config);
  }

  async getProfile(config: AxiosRequestConfig) {
    return await this.httpClient.get("/auth/profile", config);
  }

  async logOut(config: AxiosRequestConfig) {
    return await this.httpClient.get("/auth/logout", config);
  }
}
