import axios from "axios";
import { UserRepository } from "../../domain/repositories/UserRepository";
import { User } from "../../domain/entities/User";

const API_URL = import.meta.env.VITE_APP_API_URL;

export class UserApiService implements UserRepository {
  async getUsers(): Promise<User[]> {
    const response = await axios.get(`${API_URL}/users`);
    return response.data;
  }

  async createUser(user: Omit<User, "id">): Promise<User> {
    const response = await axios.post(`${API_URL}/users`, user);
    return response.data;
  }

  async updateUser(id: string, user: User): Promise<User> {
    const response = await axios.put(`${API_URL}/users/${id}`, user);
    return response.data;
  }

  async deleteUser(id: string): Promise<void> {
    console.log(id);
    await axios.delete(`${API_URL}/users/${id}`);
  }
}
