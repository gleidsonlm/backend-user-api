import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    // Calls UseCase.execute with user_id in header
    // return 200 and array or 400 error message
    try {
      const { user_id } = request.headers;
      const allUsers = this.listAllUsersUseCase.execute({ user_id });

      return this.listAllUsersUseCase.execute(allUsers);
    } catch (error) {
      return response.status(400).json({ message: error.message });
    }
  }
}

export { ListAllUsersController };
