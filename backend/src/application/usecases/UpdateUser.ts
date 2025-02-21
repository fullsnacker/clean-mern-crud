import { UserRepository } from "../../domain/repositories/UserRepository";
import { User } from "../../domain/entities/User";

export class UpdateUser {
  constructor(private userRepository: UserRepository) {}

  async execute(id: string, user: User): Promise<User | null> {
    return this.userRepository.update(id, user);
  }
}
