import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  pseudo: {type: String, unique: true},
  email: {type: String, unique: true},
  password: String,
});