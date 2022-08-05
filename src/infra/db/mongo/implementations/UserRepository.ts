import { IUserRepository } from "@application/repositories/IUserRepository";
import User from "@domain/entities/User";

import schema from '../schemas/UserSchema';

class UserRepository implements IUserRepository {
  async exists(email: string): Promise<boolean> {
    const user = await schema.findOne({ email }).lean().exec();
    return !!user;
  }

  async create(user: User): Promise<User> {
    const newUser = await schema.create(user);
    return new User(newUser.toObject());
  }
}

export default new UserRepository();