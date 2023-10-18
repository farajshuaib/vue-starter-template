export interface LoginRequestDTO {
  email: string;
  password: string;
}

export interface UserData {
  id: string;
  email: string;
  name: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}

export interface LoginResponseDTO {
  token: string;
  user: UserData;
}

export interface RegisterRequestDTO {
  email: string;
  password: string;
  confirm_password: string;
  name: string;
}
