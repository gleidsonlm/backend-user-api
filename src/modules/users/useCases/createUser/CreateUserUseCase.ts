import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    // Check if the user already exists by email
    const user = this.usersRepository.findByEmail(email);

    if (!user) {
      // instances usersRepository to use function create
      return this.usersRepository.create({
        name,
        email,
      });
    }

    throw new Error("Email already registered");
  }
}

export { CreateUserUseCase };
