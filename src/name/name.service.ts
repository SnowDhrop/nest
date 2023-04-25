import { Inject, Injectable } from '@nestjs/common';
import { CreateNameDto } from './dto/create-name.dto';
import { UpdateNameDto } from './dto/update-name.dto';
import { Model } from 'mongoose';
import { Name } from './interfaces/name.interface';

@Injectable()
export class NameService {
  constructor(
    @Inject('NAME_MODEL')
    private nameModel: Model<Name>,
  ) {}

  async create(createNameDto: CreateNameDto) {
    const createdCat = new this.nameModel(createNameDto);
    return createdCat.save();  }

    async findAll(): Promise<Name[]> {
      return this.nameModel.find().exec();
    }

  // findOne(id: number) {
  //   return `This action returns a #${id} name`;
  // }

  // update(id: number, updateNameDto: UpdateNameDto) {
  //   return `This action updates a #${id} name`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} name`;
  // }
}
