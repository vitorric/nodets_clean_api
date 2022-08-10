import { UserFactory } from '@application/factories/UserFactory';
import { ResponseController } from '@core/controller/ResponseController';

export default class UserController {
  async create(event: any): Promise<ResponseController> {
    return UserFactory.create.execute(event.body);
  }

  async login(event: any): Promise<ResponseController> {
    return UserFactory.login.execute(event.body);
  }

  async find(event: any): Promise<ResponseController> {
    return UserFactory.find.execute(event.params);
  }
}
