export abstract class Entity<T> {
  protected readonly _id: string;
  public readonly props: T;

  constructor(props: T, _id?: string) {
    Object.assign(this, {...props, _id});
  }

  public equals(object?: Entity<T>): boolean {
    if (object === null || object === undefined) {
      return false;
    }

    if (this === object) {
      return true;
    }

    if (!(object instanceof Entity)) {
      return false;
    }

    return this._id === object._id;
  }
}
