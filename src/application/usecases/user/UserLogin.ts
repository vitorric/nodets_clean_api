import { IUserRepository } from "@application/repositories/IUserRepository"
import { ok, ResponseController } from "@core/controller/ResponseController";
import { UserDomain } from "@domain/usecases/UserDomain";

export class UserLogin {
  constructor(
    private readonly userRepository: IUserRepository
  ) { }

  async execute({ user }: UserDomain.Login): Promise<ResponseController> {
    return ok(user)
  }
}
