
interface CreateUserDTO {
    email: string;
    password: string;
    name: string;
    role: string
}

interface UpdateUserDTO {
    email: string;
    password: string;
    name: string;
}

interface User {
    id: string;
    email: string;
    name: string;
    role: string;
    createdAt: string;
    updatedAt: string;
}