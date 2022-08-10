import User from '@domain/entities/User';

export interface IUserRepository {
  exists(email: string): Promise<boolean>;
  create(user: User): Promise<User>;
  login(email: string, password: string): Promise<User>;
  findById(userId: any): Promise<User>;
}
