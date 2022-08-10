import User from '@domain/entities/User';

export namespace UserDomain {
  export type Create = User;
  export type Find = {
    userId: any;
  };
  export type Login = {
    email: string;
    password: string;
  };
}
