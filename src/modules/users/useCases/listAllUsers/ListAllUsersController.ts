import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    // Calls UseCase.execute with user_id in header
    // return 200 and array or 400 error message
    try {
      const { user_id } = request.headers;
      // needs to parse into an object>propriety>value:string for Type check
      const allUsers = this.listAllUsersUseCase.execute({
        user_id: String(user_id),
      });

      return response.status(200).send(allUsers);
    } catch (error) {
      return response.status(400).send(error.message);
    }
  }
}

export { ListAllUsersController };
