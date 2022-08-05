import { Response } from 'express';

export type ResponseControllerHTTP = {
  statusCode: number;
  payload: any;
  success: boolean;
};

const reponse = (
  response: Response,
  reponseController: ResponseControllerHTTP
): any =>
  response.status(reponseController.statusCode).jsonp({
    success: reponseController.success,
    payload: reponseController.payload,
  });

export { reponse };
