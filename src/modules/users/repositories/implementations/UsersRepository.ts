import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    // Creates an user based on ICreateUserDTO in UserRepository with the given name and email
    const user = new User();

    // JavaScript Object.assing values to User
    Object.assign(user, {
      name,
      email,
    });

    this.users.push(user);

    return user;
  }

  findById(id: string): User | undefined {
    // Find user object matching the given id
    return this.users.find((user) => user.id === id);
  }

  findByEmail(email: string): User | undefined {
    // Find user object matching the given email
    return this.users.find((user) => user.email === email);
  }

  turnAdmin(receivedUser: User): User {
    // Set the matching user propriety "admin" for true, and set the updated_at for now.
    const user = this.users.find((user) => user.id === receivedUser.id);

    Object.assign(user, {
      admin: true,
      updated_at: new Date(),
    });

    return user;
  }

  list(): User[] {
    // Returns an array of all users from UsersRepository
    return this.users;
  }
}

export { UsersRepository };
