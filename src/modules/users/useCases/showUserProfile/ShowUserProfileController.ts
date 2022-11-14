import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    // Receives user id by route params and calls UseCase
    // Return matching user object with 200 or error 404
    try {
      const { user_id } = request.params;
      const user = this.showUserProfileUseCase.execute({ user_id });

      return response.status(200).send(user);
    } catch (error) {
      return response.status(404).json({ error: error.message });
    }
  }
}

export { ShowUserProfileController };
