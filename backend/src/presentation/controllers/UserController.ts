import { Request, Response } from "express";
import { GetAllUsers } from "../application/usecases/GetAllUsers";
import { MongoDBUserRepository } from "../infrastructure/database/MongoDBUserRepository";

export class UserController {
  static async getAllUsers(req: Request, res: Response) {
    const userRepository = new MongoDBUserRepository();
    const getAllUsers = new GetAllUsers(userRepository);
    const users = await getAllUsers.execute();
    res.json(users);
  }
}
