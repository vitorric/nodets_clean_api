import { Roles } from '@domain/entities/User';
import { Schema, Document, Types } from 'mongoose';

import conn from '../connection';

const UserSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['Admin'],
      required: true,
    },
    status: {
      type: Boolean,
      default: 1,
    },
    deleted: {
      type: Boolean,
      default: 0,
    },
  },
  {
    collection: 'User',
    timestamps: true,
  }
);

export default conn.model('User', UserSchema);
