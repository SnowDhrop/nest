import { Document } from 'mongoose';

export interface Race extends Document {
  readonly name: string;
}
