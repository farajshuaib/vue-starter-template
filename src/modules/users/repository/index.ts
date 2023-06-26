import BaseService from "@/core/services/BaseService";
import { type AxiosInstance } from "axios";

export default class UsersService extends BaseService {
  constructor() {
    super();
  }

  async getUsers() {
    return await this.httpClient.get("/users");
  }

  async getUser(id: string) {
    return await this.httpClient.get(`/users/${id}`);
  }

  async createUser(data: CreateUserDTO) {
    return await this.httpClient.post("/users", data);
  }

  async updateUser(id: string, data: UpdateUserDTO) {
    return await this.httpClient.put(`/users/${id}`, data);
  }

  async deleteUser(id: string) {
    return await this.httpClient.delete(`/users/${id}`);
  }
}
