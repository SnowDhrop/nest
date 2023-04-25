import { Inject, Injectable } from '@nestjs/common';
import { CreateRaceDto } from './dto/create-race.dto';
import { UpdateRaceDto } from './dto/update-race.dto';
import { Model } from 'mongoose';
import { Race } from './interfaces/race.interface';

@Injectable()
export class RaceService {
  constructor(
    @Inject('RACE_MODEL')
    private raceModel: Model<Race>,
  ) {}

  async create(createRaceDto: CreateRaceDto) {
    const createdCat = new this.raceModel(createRaceDto);
    return createdCat.save();  }

    async findAll(): Promise<Race[]> {
      return this.raceModel.find().exec();
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
