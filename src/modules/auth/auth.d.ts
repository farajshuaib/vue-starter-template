


interface LoginRequestDTO {
    email: string;
    password: string;
}

interface UserData {
    id: string;
    email: string;
    name: string;
    role: string;
    createdAt: string;
    updatedAt: string;
}

interface LoginResponseDTO {
    token: string;
    user: UserData;
}

interface RegisterRequestDTO {
    email: string;
    password: string;
    confirm_password: string;
    name: string;
}