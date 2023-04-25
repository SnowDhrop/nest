import { Document } from 'mongoose';

export interface User extends Document {
  readonly pseudo: string;
  readonly email: string;
  readonly password: string;
}
