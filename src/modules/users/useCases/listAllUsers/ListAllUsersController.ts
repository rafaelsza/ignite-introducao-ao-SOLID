import { Request, Response } from "express";
import { User } from "modules/users/model/User";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const user_id = request.headers.user_id as string;

    let users: User[];

    try {
      users = this.listAllUsersUseCase.execute({ user_id });
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }

    return response.status(200).json(users);
  }
}

export { ListAllUsersController };
