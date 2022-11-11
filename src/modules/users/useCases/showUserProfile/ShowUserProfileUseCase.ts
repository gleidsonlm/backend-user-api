import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    // Returns object user matching user_id
    const user = this.usersRepository.findById(user_id);

    // Check if user exists
    if (!user) {
      throw new Error("User not found");
    }

    return user;
  }
}

export { ShowUserProfileUseCase };
