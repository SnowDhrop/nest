import { Document } from 'mongoose';

export interface Name extends Document {
  readonly name: string;
}
