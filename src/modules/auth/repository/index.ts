import BaseService from "@/core/services/BaseService";

export default class AuthService extends BaseService {
  constructor() {
    super();
  }

  async login(payload: LoginRequestDTO) {
    const { data } = await this.httpClient.post("/auth/login", payload);
    if (data.token) {
      this.setClientToken = data.token;
    }
    return data;
  }

  async register(payload: RegisterRequestDTO) {
    return await this.httpClient.post("/auth/register", payload);
  }

  async getProfile() {
    return await this.httpClient.get("/auth/profile");
  }

  async logOut() {
    return await this.logout();
  }
}
