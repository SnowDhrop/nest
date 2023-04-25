import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_MODEL')
    private userModel: Model<User>,
  ) {}

  async hashPassword(password: string): Promise<string> {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  }

  async create(user: CreateUserDto): Promise<User> {
    const hashedPassword = await this.hashPassword(user.password);
  const newUser = new this.userModel({
    ...user,
    password: hashedPassword,
  });
    return newUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findOne(pseudo: string): Promise<User | undefined> {
    return this.userModel.findOne({pseudo: pseudo});
  }

  async update(id: string, updateUserDto: CreateUserDto): Promise<User> { 
    return this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true }).exec();
  }

  async delete(id: string): Promise<void> {
    await this.userModel.findByIdAndRemove(id).exec();
  }

  async patch(id: string, partialUserDto: Partial<CreateUserDto>): Promise<User> {
    return this.userModel.findByIdAndUpdate(id, partialUserDto, { new: true }).exec();
  }

}
