import { AxiosRequestConfig, type AxiosInstance } from "axios";
import { useHttpClient } from "../network/httpClient";
import { LoginRequestDTO, RegisterRequestDTO } from '../DTOs/auth';
import { Container, Service } from 'typedi';

@Service()
export default class AuthService {
  private httpClient: AxiosInstance;
  constructor() {
    this.httpClient = useHttpClient();
  }

  async login(payload: LoginRequestDTO, config?: AxiosRequestConfig) {
    return await this.httpClient.post("/auth/login", payload, config);
  }

  async register(payload: RegisterRequestDTO, config?: AxiosRequestConfig) {
    return await this.httpClient.post("/auth/register", payload, config);
  }

  async getProfile(config?: AxiosRequestConfig) {
    return await this.httpClient.get("/auth/profile", config);
  }

  async logOut(config?: AxiosRequestConfig) {
    return await this.httpClient.get("/auth/logout", config);
  }
}
