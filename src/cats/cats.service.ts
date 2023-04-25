import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';
import { CreateCatDto } from './dto/create-cat.dto';
import { Race } from 'src/race/interfaces/race.interface';
import { Name } from 'src/name/interfaces/name.interface';

@Injectable()
export class CatsService {
  constructor(
    @Inject('CAT_MODEL')
    private catModel: Model<Cat>,
    @Inject('RACE_MODEL')
    private raceModel: Model<Race>,
    @Inject('NAME_MODEL')
    private nameModel: Model<Name>
  ) {}

  async create(createCatDto: CreateCatDto): Promise<Cat> {
    const createdCat = new this.catModel(createCatDto);
    return createdCat.save();
  }

  async findAll(): Promise<Cat[]> {
    return this.catModel.find().exec();
  }

  async findOne(id: string): Promise<Cat> {
    return this.catModel.findById(id).exec();
  }

  async update(id: string, updateCatDto: CreateCatDto): Promise<Cat> {
    return this.catModel.findByIdAndUpdate(id, updateCatDto, { new: true }).exec();
  }

  async delete(id: string): Promise<void> {
    await this.catModel.findByIdAndRemove(id).exec();
  }

  async patch(id: string, partialCatDto: Partial<CreateCatDto>): Promise<Cat> {
    return this.catModel.findByIdAndUpdate(id, partialCatDto, { new: true }).exec();
  }

  async getNewCat(){
    const racesArr = this.raceModel.find().exec();
    const namesArr = this.nameModel.find().exec();
    console.log(racesArr, namesArr)
    return racesArr
  }

}
