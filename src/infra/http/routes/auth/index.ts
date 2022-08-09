import { Router } from 'express';

import UserController from '@application/controllers/UserController';

import { reponse } from '../../utils';

const router = Router();
const userController: UserController = new UserController();

router.post('/login', async (request, response) =>
  reponse(response, await userController.login({ ...request }))
);

router.get('/get/:userId', async (request, response) =>
  reponse(response, await userController.find({ ...request }))
);

export default router;
