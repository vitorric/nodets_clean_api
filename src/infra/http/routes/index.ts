import routeAuth from './auth';

export default (app: any): any => {
  app.use('/auth', routeAuth);
};
