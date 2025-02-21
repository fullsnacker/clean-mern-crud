import { User } from "../entities/User";

export interface UserRepository {
  getUsers(): Promise<User[]>;
  createUser(user: User): Promise<User>;
  updateUser(id: string, user: User): Promise<User>;
  deleteUser(id: string): Promise<void>;
}
