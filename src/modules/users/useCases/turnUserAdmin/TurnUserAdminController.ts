import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    // receives an user id and set this user as an admin
    const { user_id } = request.params;

    // TryCatch, if sucessfull return 200 with response, if not returns 400
    try {
      const user = this.turnUserAdminUseCase.execute({ user_id });

      return response.status(200).send(user);
    } catch (error) {
      return response.status(400).json({ message: error.message });
    }
  }
}

export { TurnUserAdminController };
