import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);

    // Check if the user exists and if is admin
    if (user === undefined) {
      throw new Error("User not found");
    } else if (user.admin === false) {
      throw new Error("You're not allowed to list all users");
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
