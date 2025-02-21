import { User } from "../../domain/entities/User";
import { UserRepository } from "../../domain/repositories/UserRepository";
import { Model, Schema, model } from "mongoose";

const userSchema = new Schema<User>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

const UserModel = model<User>("User", userSchema);

export class MongoDBUserRepository implements UserRepository {
  async findAll(): Promise<User[]> {
    return UserModel.find();
  }

  async findById(id: string): Promise<User | null> {
    return UserModel.findById(id);
  }

  async create(user: User): Promise<User> {
    return UserModel.create(user);
  }

  async update(id: string, user: User): Promise<User | null> {
    return UserModel.findByIdAndUpdate(id, user, { new: true });
  }

  async delete(id: string): Promise<void> {
    await UserModel.findByIdAndDelete(id);
  }
}
