import { UserCreate, UserFind, UserLogin } from "@application/usecases/user";
import { userRepository } from "@infra/db/mongo/implementations/UserRepository";

const create: UserCreate = new UserCreate(userRepository);
const find: UserFind = new UserFind(userRepository);
const login: UserLogin = new UserLogin(userRepository);

export const UserFactory = {
    create,
    find,
    login
}
