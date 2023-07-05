import { useHttpClient } from "@/core/hooks/useHttpClient";
import { AxiosRequestConfig, type AxiosInstance } from "axios";

export default class UsersServic {
  private httpClient: AxiosInstance;
  constructor() {
    this.httpClient = useHttpClient();
  }

  async getUsers(config: AxiosRequestConfig) {
    return await this.httpClient.get("/users", config);
  }

  async getUser(config: AxiosRequestConfig, id: string) {
    return await this.httpClient.get(`/users/${id}`, config);
  }

  async createUser(config: AxiosRequestConfig) {
    return await this.httpClient.post("/users", config);
  }

  async updateUser(config: AxiosRequestConfig, id: string) {
    return await this.httpClient.put(`/users/${id}`, config);
  }

  async deleteUser(config: AxiosRequestConfig, id: string) {
    return await this.httpClient.delete(`/users/${id}`, config);
  }
}
