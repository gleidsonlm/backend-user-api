import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    // Check if user exists by id
    const user = this.usersRepository.findById(user_id);

    if (!user) {
      throw new Error("User not found");
    }
    // Call turnAdmin to set user admin
    return this.usersRepository.turnAdmin(user);
  }
}

export { TurnUserAdminUseCase };
