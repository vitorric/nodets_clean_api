import { UserCreate, UserFind, UserLogin } from "@application/usecases/user";
import UserRepository from "@infra/db/mongo/implementations/UserRepository";


const create: UserCreate = new UserCreate(UserRepository);
const find: UserFind = new UserFind(UserRepository);
const login: UserLogin = new UserLogin(UserRepository);

export const UserFactory = {
    create,
    find,
    login
}

