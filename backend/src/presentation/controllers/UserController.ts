import { Request, Response } from "express";
import { GetUsers } from "../../application/usecases/GetUsers";
import { CreateUser } from "../../application/usecases/CreateUser";
import { UpdateUser } from "../../application/usecases/UpdateUser";
import { DeleteUser } from "../../application/usecases/DeleteUser";
import { MongoDBUserRepository } from "../../infrastructure/database/MongoDBUserRepository";

export class UserController {
  static async getAllUsers(req: Request, res: Response) {
    const userRepository = new MongoDBUserRepository();
    const getUsers = new GetUsers(userRepository);
    const users = await getUsers.execute();
    res.json(users);
  }

  static async createUser(req: Request, res: Response) {
    const userRepository = new MongoDBUserRepository();
    const createUser = new CreateUser(userRepository);
    const user = await createUser.execute(req.body);
    res.status(201).json(user);
  }

  static async updateUser(req: Request, res: Response) {
    const userRepository = new MongoDBUserRepository();
    const updateUser = new UpdateUser(userRepository);
    const user = await updateUser.execute(req.params.id, req.body);
    res.json(user);
  }

  static async deleteUser(req: Request, res: Response) {
    const userRepository = new MongoDBUserRepository();
    const deleteUser = new DeleteUser(userRepository);
    await deleteUser.execute(req.params.id);
    res.status(204).send();
  }
}
