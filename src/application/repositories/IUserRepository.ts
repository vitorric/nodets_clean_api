import User from "@domain/entities/User";
import { UserDomain } from "@domain/usecases/UserDomain";

export interface IUserRepository {
  exists(email: string): Promise<boolean>;
  create(user: UserDomain.Create): Promise<User>;
}
