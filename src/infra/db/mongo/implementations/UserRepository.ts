import { IUserRepository } from '@application/repositories/IUserRepository';
import User from '@domain/entities/User';

import schema from '../schemas/UserSchema';
import { ObjectIdCast } from '../util';

class UserRepository implements IUserRepository {
  async exists(email: string): Promise<boolean> {
    const user = await schema.findOne({ email }).lean().exec();
    return !!user;
  }

  async create(user: User): Promise<User> {
    const newUser = await schema.create(user);
    return new User(newUser.toObject());
  }

  async login(email: string, password: string): Promise<User> {
    return schema.findOne({ email, password }).lean().exec();
  }

  async findById(userId: any): Promise<User> {
    return schema
      .findOne({ _id: ObjectIdCast(userId) })
      .lean()
      .exec();
  }
}

export const userRepository = new UserRepository();
