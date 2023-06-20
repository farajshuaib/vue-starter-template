import { useHttpClient } from "@/core/hooks/useHttpClient";
import { type AxiosInstance } from "axios";

export default class AuthService {
  private _httpClient: AxiosInstance;
  constructor() {
    this._httpClient = useHttpClient();
  }

  async login(payload: LoginRequestDTO) {
    return await this._httpClient.post("/auth/login", payload);
  }

  async register(payload: RegisterRequestDTO) {
    return await this._httpClient.post("/auth/register", payload);
  }
  async getProfile() {
    return await this._httpClient.get("/auth/profile");
  }
  async logOut() {
    return await this._httpClient.post("/auth/logout");
  }
}
