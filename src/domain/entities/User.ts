export enum Roles {
  Admin = 'Admin',
}

export default class User {
  public readonly _id: any;

  public name: string;

  public email: string;

  public password: string;

  public role: Roles;

  public status: boolean;

  public deleted: boolean;

  public createdAt: Date;

  public updatedAt: Date;

  constructor(props: User, _id?: string) {
    Object.assign(this, props);
  }
}
