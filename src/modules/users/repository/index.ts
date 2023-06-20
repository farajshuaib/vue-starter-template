import { useHttpClient } from '@/core/hooks/useHttpClient'
import { type AxiosInstance } from 'axios'

export default class UsersService {
  private _httpClient: AxiosInstance
  constructor() {
    this._httpClient = useHttpClient()
  }

  async getUsers() {
    return await this._httpClient.get('/users')
  }

  async getUser(id: string) {
    return await this._httpClient.get(`/users/${id}`)
  }

  async createUser(data: CreateUserDTO) {
    return await this._httpClient.post('/users', data)
  }

  async updateUser(id: string, data: UpdateUserDTO) {
    return await this._httpClient.put(`/users/${id}`, data)
  }

  async deleteUser(id: string) {
    return await this._httpClient.delete(`/users/${id}`)
  }
}
