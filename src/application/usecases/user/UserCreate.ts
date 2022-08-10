import { IUserRepository } from '@application/repositories/IUserRepository';
import { ok, ResponseController } from '@core/controller/ResponseController';
import { UserDomain } from '@domain/usecases/UserDomain';

export class UserCreate {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(user: UserDomain.Create): Promise<ResponseController> {
    const newUser = await this.userRepository.create(user);
    return ok(newUser);
  }
}
