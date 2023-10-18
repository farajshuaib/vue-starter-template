import { AxiosRequestConfig, type AxiosInstance } from "axios";
import { useHttpClient } from "../network/httpClient";
import { CreateUserDTO, UpdateUserDTO } from '../DTOs/users';
import { Service } from "typedi";

@Service()
export default class UsersServic {
  private httpClient: AxiosInstance;
  constructor() {
    this.httpClient = useHttpClient();
  }

  async getUsers(config?: AxiosRequestConfig) {
    return await this.httpClient.get("/users", config);
  }

  async getUser(id: string, config?: AxiosRequestConfig) {
    return await this.httpClient.get(`/users/${id}`, config);
  }

  async createUser(payload: CreateUserDTO, config?: AxiosRequestConfig) {
    return await this.httpClient.post("/users", payload, config);
  }

  async updateUser(id: string, payload: UpdateUserDTO, config?: AxiosRequestConfig) {
    return await this.httpClient.put(`/users/${id}`, payload, config);
  }

  async deleteUser(id: string, config?: AxiosRequestConfig) {
    return await this.httpClient.delete(`/users/${id}`, config);
  }
}
