import { type AxiosResponse } from "axios";
import { UserData } from "@/features/Auth/models/UserData.ts";
import { Service } from "typedi";
import { LoginRequestDTO } from "@/features/Auth/models/LoginRequestDTO.ts";
import { HttpClient } from "@/core/network/httpClient.ts";
import CoreResponseDto from "@/core/constant/ICoreResponseDto.ts";
import { inject } from "inversify";

@Service()
export default class AuthService {
  private httpClient: HttpClient;

  constructor(@inject(HttpClient) httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  async login(payload: LoginRequestDTO) {
    return await this.httpClient.post<CoreResponseDto<UserData>>(
      "/api/Auth/Signin",
      payload
    );
  }

  async refreshToken(): Promise<AxiosResponse<CoreResponseDto<any>>> {
    throw new Error("Method not implemented.");
  }
}
