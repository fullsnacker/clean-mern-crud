import axios from "axios";
import { UserRepository } from "../../domain/repositories/UserRepository";
import { User } from "../../domain/entities/User";

const API_URL = "http://localhost:5000/api";

export class UserApiService implements UserRepository {
  async getUsers(): Promise<User[]> {
    const response = await axios.get(`${API_URL}/users`);
    return response.data;
  }
}
