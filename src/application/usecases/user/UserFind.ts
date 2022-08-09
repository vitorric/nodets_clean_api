import { IUserRepository } from '@application/repositories/IUserRepository';
import { ok, ResponseController } from '@core/controller/ResponseController';
import { UserDomain } from '@domain/usecases/UserDomain';

export class UserFind {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute({ userId }: UserDomain.Find): Promise<ResponseController> {
    return ok(userId);
  }
}
