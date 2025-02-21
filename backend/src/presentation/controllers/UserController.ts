import { Request, Response } from "express";
import { MongoDBUserRepository } from "../../infrastructure/database/MongoDBUserRepository";
import { GetAllUsers } from "../../application/usecases/GetAllUsers";

export class UserController {
  static async getAllUsers(req: Request, res: Response) {
    const userRepository = new MongoDBUserRepository();
    const getAllUsers = new GetAllUsers(userRepository);
    const users = await getAllUsers.execute();
    res.json(users);
  }
}
