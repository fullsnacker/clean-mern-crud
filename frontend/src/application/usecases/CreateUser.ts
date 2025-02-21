import { UserRepository } from "../../domain/repositories/UserRepository";
import { User } from "../../domain/entities/User";

export class CreateUser {
  constructor(private userRepository: UserRepository) {}

  async execute(user: Omit<User, "id">): Promise<User> {
    return this.userRepository.createUser(user);
  }
}
