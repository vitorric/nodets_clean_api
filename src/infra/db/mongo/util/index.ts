import { Types } from 'mongoose';

export const ObjectIdCast = (_id: any): Types.ObjectId => {
  return new Types.ObjectId(_id);
};
