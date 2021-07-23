import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);

    if (!user) {
      throw new Error("User do not exists");
    } else if (!user.admin) {
      throw new Error("User is not an Admin");
    } else {
      const all = this.usersRepository.list();

      return all;
    }
  }
}

export { ListAllUsersUseCase };
