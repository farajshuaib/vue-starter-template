import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export interface ICoreService<T> {
  get(id: string): Promise<T | null>;
  getAll(): Promise<T[] | null>;
  create(requestDto: T): Promise<void>;
  update(requestDto: Partial<T>): Promise<void>;
  delete(id: string): Promise<void>;
}
