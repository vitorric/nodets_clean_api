import { IUserRepository } from '@application/repositories/IUserRepository';
import { ok, ResponseController } from '@core/controller/ResponseController';
import { UserDomain } from '@domain/usecases/UserDomain';

export class UserLogin {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute({
    email,
    password,
  }: UserDomain.Login): Promise<ResponseController> {
    const user = await this.userRepository.login(email, password);
    return ok(user);
  }
}
